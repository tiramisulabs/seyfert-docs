---
title: Cache
---
# ¿Que es el cache?

En seyfert el cache es el almacenamiento en memoria (en cuanto menos) de los datos emitidos por Discord. Seyfert provee varias formas de manejar el cache para los datos de Discord.

## Resources

Todas las entidades soportadas por el cache de seyfert son `recursos` dígase `canales`, `usuarios`, `miembros`... Por ello, cada uno se maneja, si bien de la misma forma, se permite modificar y gestionar de diferentes formas en relación con el `Adaptador`.

### Deshabilitando

Seyfert permite deshabilitar estos `recursos` por separado

:::note[Datos Globales]
En seyfert el cache es global, por lo que todo se guarda en el mismo recurso, sin distinción de guild hasta el momento de obtenerlos donde se requeriría especificar la fuente
:::

| Recurso         | Elementos                                              |
|-----------------|--------------------------------------------------------|
| channels        | TextChannel, DMChannel, VoiceChannel, ThreadChannel... |
| bans            | GuildBan                                               |
| emojis          | Emoji                                                  |
| guilds          | Guild                                                  |
| messages        | Message                                                |
| overwrites      | PermissionsOverwrites                                  |
| presence        | Presence                                               |
| members         | GuildMember                                            |
| roles           | GuildRole                                              |
| users           | User                                                   |
| stickers        | Sticker                                                |
| voiceStates     | VoiceStates                                            |
| stagesInstances | StageChannel                                           |

```ts
import { Client } from 'seyfert';

const client = new Client();

client.setServices({ cache: { disabledCache: { bans: true } } })

```
El ejemplo deshabilitaría el cache de bans y dicho recurso no existiría en runtime.

:::tip[Deshabilitando el cache]
Puedes remover la funcionalidad del cache por completo
```ts
client.setServices({ cache: { disabledCache: true } })
```
:::
### Filtrando

Por ejemplo, desde que todos los canales se guardan en el mismo `recurso`, supongamos que su aplicación no tiene una utilidad para ciertos canales, así que podemos `filtrar` la entrada de los datos:

```ts title="index.ts" copy showLineNumbers
import { Client } from "seyfert";
import { type APIChannel, ChannelType } from "seyfert/lib/types";
const client = new Client();

client.cache.channels!.filter = (
    data: APIChannel,
    id: string,
    guildId: string,
) => {
    return ![
        ChannelType.DM,
        ChannelType.GroupDM
    ].includes(data.type);
};
```

## Adapters

Seyfert permite proporcionar tu propio adaptador para el cache, puedes llamarlo un driver para que seyfert use una herramienta no soportada. Por defecto seyfert incorpora `MemoryAdapter` y `LimitedMemoryAdapter` ambos trabajan en RAM.

:::tip[Redis]
Seyfert tiene soporte oficial para redis
```bash
pnpm i @slipher/redis-adapter
```
:::
```ts
import { Client } from 'seyfert';
import { RedisAdapter } from '@slipher/redis-adapter';

const client = new Client();

client.setServices({ cache: { adapter: new RedisAdapter({ redisOptions: { port: 4444 } }) } });
```

## Armando tu propio cache

### Custom Resource

Un `recurso custom` no es mas que una nueva entidad de cache, por lo que integrarlo es relativamente simple, tomemos de ejemplo el recurso [Cooldown](https://github.com/tiramisulabs/extra/blob/main/packages/cooldown/src/resource.ts) del paquete de [cooldown](/recipes/cooldown).

Es importante destacar que seyfert proporciona una base para 3 tipo de recursos:

- **BaseResource**: entidad basica, que deberia ser totalmente independiente
- **GuildBaseResource**: entidad que va ligada a una guild (como los bans)
- **GuildRelatedResource**: entidad que puede ir o no ligada a una guild (como los mensajes)

```ts title="resource.ts"
import { BaseResource } from 'seyfert/lib/cache';

export class CooldownResource extends BaseResource<CooldownData> {
    // el namespace es la base que separa cada recurso
	namespace = 'cooldowns';

    // sobre-escribimos el set para darle el typing y el formato que deseamos
	override set(id: string, data: MakePartial<CooldownData, 'lastDrip'>) {
		return super.set(id, { ...data, lastDrip: data.lastDrip ?? Date.now() });
	}
}
```
Ten en cuenta, que un custom resource es para uso del desarrollador, seyfert no interactuara con el a menos que se indique en el codigo de la aplicacion.

```ts
import { Client } from 'seyfert';
import { CooldownResource } from './resource'

const client = new Client();

client.cache.cooldown = new Cooldown(client.cache);

declare module "seyfert" {
    interface Cache {
        cooldown: Cooldown;
    }
    interface UsingClient extends ParseClient<Client> {}
}
```
### Custom adapter

WIP