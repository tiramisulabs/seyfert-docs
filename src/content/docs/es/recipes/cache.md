---
title: Caché
---
# ¿Qué es el caché?

En seyfert el caché es el almacenamiento en memoria (en cuanto menos) de los datos emitidos por Discord. Seyfert provee varias formas de manejar el caché para los datos de Discord.

## Resources

Todas las entidades soportadas por el caché de seyfert son `recursos` dígase `canales`, `usuarios`, `miembros`... Por ello, cada uno se maneja, si bien de la misma forma, se permite modificar y gestionar de diferentes formas en relación con el `Adaptador`.

### Deshabilitando

Seyfert permite deshabilitar estos `recursos` por separado

:::note[Datos Globales]
En seyfert el caché es global, por lo que todo se guarda en el mismo recurso, sin distinción de guild hasta el momento de obtenerlos donde se requeriría especificar la fuente
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

```ts twoslash
import { Client } from 'seyfert';

const client = new Client();

client.setServices({ cache: { disabledCache: { bans: true } } })

```
El ejemplo deshabilitaría el caché de bans y dicho recurso no existiría en runtime.

:::tip[Deshabilitando el caché]
Puedes remover la funcionalidad del caché por completo
```ts twoslash
import { Client } from 'seyfert';

const client = new Client();
// ---cut---
client.setServices({ cache: { disabledCache: true } })
```
:::
### Filtrando

Por ejemplo, desde que todos los canales se guardan en el mismo `recurso`, supongamos que su aplicación no tiene una utilidad para ciertos canales, así que podemos `filtrar` la entrada de los datos:

```ts twoslash title="index.ts" copy showLineNumbers
import { Client } from "seyfert";
import { type APIChannel, ChannelType } from "seyfert/lib/types";
const client = new Client();

client.cache.channels!.filter = (
    channel,
    id,
    guildId,
) => {
    return ![
        ChannelType.DM,
        ChannelType.GroupDM
    ].includes(channel.type);
};
```

## Adapters

Seyfert permite proporcionar tu propio adaptador para el caché, puedes llamarlo un driver para que seyfert use una herramienta no soportada. Por defecto seyfert incorpora `MemoryAdapter` y `LimitedMemoryAdapter` ambos trabajan en RAM.

:::tip[Redis]
Seyfert tiene soporte oficial para redis
```bash
pnpm i @slipher/redis-adapter
```
:::
```ts twoslash
import { Client } from 'seyfert';
import { RedisAdapter } from '@slipher/redis-adapter';

const client = new Client();

client.setServices({
    cache: {
        adapter: new RedisAdapter({ redisOptions: { url: 'redis://127.0.0.1:6379' } })
    }
});
```

## Armando tu propio caché

### Custom Resource

Un `recurso custom` no es mas que una nueva entidad de caché, por lo que integrarlo es relativamente simple, tomemos de ejemplo el recurso [Cooldown](https://github.com/tiramisulabs/extra/blob/main/packages/cooldown/src/resource.ts) del paquete de [cooldown](/recipes/cooldown).

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

client.cache.cooldown = new CooldownResource(client.cache);

declare module "seyfert" {
    interface Cache {
        cooldown: CooldownResource;
    }
    interface UsingClient extends ParseClient<Client> {}
}
```
## Custom adapter

¿No te convence guardar el caché en memoria o en Redis? ¿O simplemente prefieres hacerlo a tu manera?

Aquí aprenderás cómo crear tu propio adaptador para el caché.

### Antes de comenzar

Debes tomar en cuenta si tu adaptador puede llegar a ser asíncrono, si es así, debes especificarlo:

```ts twoslash
// @noErrors
import { Adapter } from 'seyfert';

class MiAdaptador implements Adapter {
    isAsync = true;

    async start() {
        // Esta función se ejecutará antes de comenzar el bot
    }
}
```
> En esta guía, se aborda como si fueras a crear un adaptador asíncrono, si quieres uno síncrono, simplemente no devuelvas una promesa en ninguno de los metodos (el `start` puede ser asíncrono).

### Guardando datos

En el cache de seyfert, existen las relaciones, para así saber a quien le pertenece algún recurso.

Hay 4 metodos que debes implementar en tu adaptador para guardar valores: `set`, `patch`, `bulkPatch` y `bulkSet`.

#### `set` y `bulkSet`

Comenzando por lo más sencillo:
```ts twoslash
interface SeyfertDotDev {
    set(key: string, value: any): Promise<void>;
}
// @noErrors
// ---cut---
import { Adapter } from 'seyfert';

class MiAdaptador implements Adapter {
    // ---cut-start---
    almacenamiento: SeyfertDotDev;
    // ---cut-end---
    async set(key: string, value: any | any[]) {
        await this.almacenamiento.set(key, { value });
    }

    async bulkSet(keys: [string, any][]) {
        for (let [key, value] of keys) {
            await this.set(key, value);
        }
    }
}
```

#### `patch` y `bulkPatch`

El metodo `patch` no debe sobreescribir totalmente las propiedades del anterior valor, solo las propiedades que se le pase.

```ts twoslash
interface SeyfertDotDev {
    set(key: string, value: any): Promise<void>;
    get(key: string): Promise<any>;
}
// @noErrors
// ---cut---
import { Adapter } from 'seyfert';

class MiAdaptador implements Adapter {
    // ---cut-start---
    almacenamiento: SeyfertDotDev;
    // ---cut-end---
    async patch(key: string, value: any | any[]) {
        const oldData = await this.almacenamiento.get(key) ?? {};
        const newValue = Array.isArray(value)
            ? value
            : ({ ...oldData, ...value });

        await this.almacenamiento.set(key, { value: newValue });
    }

    async bulkPatch(keys: [string, any][]) {
        for (let [key, value] of keys) {
            await this.patch(key, value);
        }
    }
}
```

#### Guardando relaciones

Para guardar las relaciones, se usan los metodos `bulkAddToRelationShip` y `addToRelationship`

```ts twoslash
interface SeyfertDotDev {
    setAdd(key: string, key: string): Promise<void>;
}
// @noErrors
// ---cut---
import { Adapter } from 'seyfert';

class MiAdaptador implements Adapter {
    // ---cut-start---
    almacenamiento: SeyfertDotDev;
    // ---cut-end---
    async addToRelationship(id: string, keys: string | string[]) {
        for (const key of Array.isArray(keys) ? keys : [keys]) {
            // Lo agregamos a un "Set", las ids deben ser únicas.
            await this.almacenamiento.setAdd(id, key);
        }
    }

    async bulkAddToRelationShip(data: Record<string, string[]>) {
        for (const i in data) {
            await this.addToRelationship(i, data[i]);
        }
    }
}
```

### Obteniendo datos

Hay 3 metodos que debes implementar en tu adaptador para obtener los valores: `get`, `bulkGet` y `scan`.

#### `get` y `bulkGet`

Comenzando por lo más sencillo:
```ts twoslash
interface SeyfertDotDev {
    get(key: string): Promise<any>;
}
// @noErrors
// ---cut---
import { Adapter } from 'seyfert';

class MiAdaptador implements Adapter {
    // ---cut-start---
    almacenamiento: SeyfertDotDev;
    // ---cut-end---
    async get(key: string) {
        return this.almacenamiento.get(key);
    }

    async bulkGet(keys: string[]) {
        const values: Promise<any>[] = [];
        for (let key of keys) {
            values.push(this.get(key));
        }

        return (await Promise.all(values))
            // No debes retornar valores nulos
            .filter(value => value)
    }
}
```

#### El metodo `scan`

Actualmente estamos guardando los datos en este formato:
```ts
<resource>.<id2>.<id1> // member.1003825077969764412.1095572785482444860
<resource>.<id1> // user.863313703072170014
```

Al metodo `scan`, se le pasa un string con este formato:
```ts
<resource>.<*>.<*> // member.*.*
<resource>.<*>.<id> // member.*.1095572785482444860
<resource>.<id>.<*> // member.1003825077969764412.*
<resource>.<*> // user.*
```
El `*` indica que puede haber cualquier id.

Debes regresar todas coincidencias.

```ts twoslash
interface SeyfertDotDev {
    entries(): Promise<[string, unknown][]>;
}
// @noErrors
// ---cut---
import { Adapter } from 'seyfert';

class MiAdaptador implements Adapter {
    // ---cut-start---
    almacenamiento: SeyfertDotDev;
    // ---cut-end---
    async scan(query: string, keys?: false): any[];
    async scan(query: string, keys: true): string[];
    async scan(query: string, keys = false) {
        const values: (string | unknown)[] = [];
        const sq = query.split('.');
        // Seguramente tu cliente tendrá una forma más optimizada de hacer esto.
        // Como nuestro adaptador de Redis.
        for (const [key, value] of await this.almacenamiento.entries()) {
            const match = key.split('.')
                .every((value, i) => (sq[i] === '*' ? !!value : sq[i] === value));
            if (match) {
                values.push(keys ? key : value);
            }
        }

        return values;
    }
}
```
> <a href="https://github.com/tiramisulabs/extra/blob/db36914ace5f4b948ee109a3c25987e162811b44/packages/redis-adapter/src/adapter.ts#L46" target="_blank">Ejemplo del adaptador de redis</a>
#### Obteniendo relaciones

Para obtener las ids de una relación, tenemos el metodo `getToRelationship`

```ts twoslash
interface SeyfertDotDev {
    setGet(key: string): Promise<string[] | undefined>;
}
// @noErrors
// ---cut---
import { Adapter } from 'seyfert';

class MiAdaptador implements Adapter {
    // ---cut-start---
    almacenamiento: SeyfertDotDev;
    // ---cut-end---
    async getToRelationship(to: string) {
        return await this.almacenamiento.setGet(to) ?? []
    }
}
```

#### `keys`, `values`, `count` y `contains`

```ts twoslash
interface SeyfertDotDev {
    setGet(key: string): Promise<string[] | undefined>;
}
// @noErrors
// ---cut---
import { Adapter } from 'seyfert';

class MiAdaptador implements Adapter {
    // ---cut-start---
    almacenamiento: SeyfertDotDev;
    get(key: string): Promise<any>
    // ---cut-end---
    async getToRelationship(to: string) {
        return await this.almacenamiento.setGet(to) ?? []
    }

    async keys(to: string) {
        const keys = await this.almacenamiento.setGet(to) ?? [];
        return keys.map(key => `${to}.${key}`);
    }

    async values(to: string) {
        const array: any[] = [];
        const keys = await this.keys(to);

        for (const key of keys) {
            const content = await this.get(key);

            if (content) {
                array.push(content);
            }
        }

        return array;
    }

    async count(to: string) {
        return (await this.getToRelationship(to)).length;
    }

    async contains(to: string, key: string) {
        return (await this.getToRelationship(to)).includes(key);
    }
}
```

### Borrando datos

#### `remove`, `bulkRemove` y `flush`

Hay 3 metodos que debes implementar en tu adaptador para borrar valores: `remove`, `bulkRemove` y `flush`.

```ts twoslash
interface SeyfertDotDev {
    remove(key: string): Promise<void>;
    flush(): Promise<void>;
    setFlush(): Promise<void>;
}
// @noErrors
// ---cut---
import { Adapter } from 'seyfert';

class MiAdaptador implements Adapter {
    // ---cut-start---
    almacenamiento: SeyfertDotDev;
    // ---cut-end---
    async remove(key: string) {
        await this.almacenamiento.remove(key);
    }

    async bulkRemove(keys: string[]) {
        for (const key of keys) {
            await this.remove(key);
        }
    }

    async flush() {
        await this.almacenamiento.flush(); // Borrar los valores
        await this.almacenamiento.setFlush(); // Borrar las relaciones
    }
}
```

#### Borrando relaciones

Para borrar ids de una relacion, tenemos los metodos `removeToRelationship` y `removeRelationship`

```ts twoslash
interface SeyfertDotDev {
    setRemove(key: string): Promise<void>;
    setPull(to: string, key: string[]): Promise<void>
}
// @noErrors
// ---cut---
import { Adapter } from 'seyfert';

class MiAdaptador implements Adapter {
    // ---cut-start---
    almacenamiento: SeyfertDotDev;
    // ---cut-end---
    async removeToRelationship(to: string) {
        // Borrar el "Set" por completo
        await this.almacenamiento.setRemove(to);
    }

    async removeRelationship(to: string, key: string | string[]) {
        // Quitar las id del "Set"
        const keys = Array.isArray(key) ? key : [key];
        await this.almacenamiento.setPull(to, keys);
    }
}
```

### Probando
Si quieres asegurarte de que tu adaptador funciona, ejecuta el metodo `testAdapter` de `Cache`

```ts twoslash
// @errors: 2304
// @noErrors
import { Client } from 'seyfert';

const client = new Client();

client.setServices({
    cache: {
        adapter: new MiAdaptador()
    }
})

await client.cache.testAdapter();
```