---
title: Caché
---
# ¿Qué es el caché?

El caché es una capa de almacenamiento temporal que mantiene los datos frecuentemente accedidos disponibles para un acceso rápido. En Seyfert, el sistema de caché almacena los datos de Discord en memoria por defecto, aunque puede configurarse para usar otras soluciones de almacenamiento como Redis.

## Resources (Recursos)

Todas las entidades soportadas por el caché de Seyfert son `recursos`, como `canales`, `usuarios`, `miembros`, etc. Cada uno de estos recursos se gestiona de la misma manera, pero pueden ser modificados y manejados de forma diferente según el `Adaptador`.

### Deshabilitando

Seyfert permite deshabilitar estos `recursos` por separado.

:::note[Datos Globales]
En Seyfert, el caché es global, lo que significa que todo se almacena en el mismo recurso, sin distinción entre servidores, hasta que se recuperan, momento en el que necesitarías especificar la fuente.
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
El ejemplo anterior deshabilita el caché de baneos, y ese recurso no existiría en tiempo de ejecución.

:::tip[Deshabilitando el Caché]
Puedes eliminar completamente la funcionalidad del caché:
```ts twoslash
import { Client } from 'seyfert';

const client = new Client();
// ---cut---
client.setServices({ cache: { disabledCache: true } })
```
:::

### Filtrando

Puedes filtrar qué datos se almacenan en un recurso. Por ejemplo, si tu aplicación no necesita almacenar en caché los canales de MD, puedes filtrarlos:

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

## Adaptadores

Seyfert te permite proporcionar tu propio adaptador para el caché, que puedes pensar como un controlador para permitir que Seyfert use una herramienta no soportada. Por defecto, Seyfert incluye `MemoryAdapter` y `LimitedMemoryAdapter`, ambos operan en RAM. Además, Seyfert tiene soporte oficial para Redis a través del [`Adaptador Redis`](https://github.com/tiramisulabs/extra/tree/main/packages/redis-adapter).

:::note[Diferencia entre MemoryAdapter y LimitedMemoryAdapter]
El `MemoryAdapter` almacena todos los datos en memoria, mientras que el `LimitedMemoryAdapter` limita la cantidad de datos almacenados en memoria proporcionando tiempos de expiración y límites de entradas.
:::

## Construyendo Tu Propio Caché

### Recurso Personalizado

Un `recurso personalizado` es simplemente una nueva entidad de caché, por lo que integrarlo es relativamente simple. Tomemos como ejemplo el recurso [Cooldown](https://github.com/tiramisulabs/extra/blob/main/packages/cooldown/src/resource.ts) del paquete [cooldown](https://docs).

Es importante notar que Seyfert proporciona una base para tres tipos de recursos:

- **BaseResource**: una entidad básica, que debe ser completamente independiente
- **GuildBaseResource**: una entidad vinculada a un servidor (como los baneos)
- **GuildRelatedResource**: una entidad que puede estar o no vinculada a un servidor (como los mensajes)

```ts title="resource.ts"
import { BaseResource } from 'seyfert/lib/cache';

export class CooldownResource extends BaseResource<CooldownData> {
    // El namespace es la base que separa cada recurso
    namespace = 'cooldowns';

    // Sobrescribimos set para aplicar el tipado y formato que queremos
    override set(id: string, data: MakePartial<CooldownData, 'lastDrip'>) {
        return super.set(id, { ...data, lastDrip: data.lastDrip ?? Date.now() });
    }
}
```
Ten en cuenta que un recurso personalizado es para uso del desarrollador; Seyfert no interactuará con él a menos que se especifique en el código de la aplicación.

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

## Adaptador Personalizado

¿No te gusta almacenar el caché en memoria o Redis? ¿O tal vez simplemente quieres hacerlo a tu manera?

Aquí aprenderás cómo crear tu propio adaptador de caché.

### Antes de Empezar

Considera si tu adaptador podría ser asíncrono; si lo es, necesitarás especificarlo:

```ts twoslash
// @noErrors
import { Adapter } from 'seyfert';

class MiAdaptador implements Adapter {
    isAsync = true;

    async start() {
        // Esta función se ejecutará antes de iniciar el bot
    }
}
```
> Esta guía es para crear un adaptador asíncrono. Si quieres uno síncrono, simplemente no devuelvas una promesa en ninguno de los métodos (el método `start` puede ser asíncrono).

### Almacenando Datos

En el caché de Seyfert, hay relaciones, para que puedas saber a quién pertenece un recurso.

Hay cuatro métodos que debes implementar en tu adaptador para almacenar valores: `set`, `patch`, `bulkPatch`, y `bulkSet`.

#### `set` y `bulkSet`

Empezando por lo más simple:

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

El método `patch` no debe sobrescribir todas las propiedades del valor anterior, solo las que se pasan.

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

#### Almacenando Relaciones

Para almacenar relaciones, usas los métodos `bulkAddToRelationShip` y `addToRelationship`.

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
            // Agregar a un "Set", los IDs deben ser únicos
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

### Recuperando Datos

Debes implementar tres métodos en tu adaptador para recuperar valores: `get`, `bulkGet`, y `scan`.

#### `get` y `bulkGet`

Empezando por lo más simple:

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
            // No devolver valores nulos
            .filter(value => value)
    }
}
```

#### El método `scan`

Actualmente, estamos almacenando datos en este formato:
```ts
<resource>.<id2>.<id1> // member.1003825077969764412.1095572785482444860
<resource>.<id1> // user.863313703072170014
```

El método `scan` toma una cadena con este formato:
```ts
<resource>.<*>.<*> // member.*.*
<resource>.<*>.<id> // member.*.1095572785482444860
<resource>.<id>.<*> // member.1003825077969764412.*
<resource>.<*> // user.*
```
El `*` indica que puede haber cualquier ID.

Debes devolver todas las coincidencias.

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
        // Tu cliente probablemente tendrá una forma más optimizada de hacer esto.
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
> [Ejemplo del adaptador de Redis](https://github.com/tiramisulabs/extra/blob/db36914ace5f4b948ee109a3c25987e162811b44/packages/redis-adapter/src/adapter.ts#L46)

#### Recuperando Relaciones

Para obtener los IDs de una relación, tenemos el método `getToRelationship`.

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

### Eliminando Datos

#### `remove`, `bulkRemove` y `flush`

Hay tres métodos que debes implementar en tu adaptador para eliminar valores: `remove`, `bulkRemove`, y `flush`.

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
        await this.almacenamiento.flush(); // Eliminar valores
        await this.almacenamiento.setFlush(); // Eliminar relaciones
    }
}
```

#### Eliminando Relaciones

Para eliminar IDs de una relación, tenemos los métodos `removeToRelationship` y `removeRelationship`.

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
        // Eliminar el "Set" completamente
        await this.almacenamiento.setRemove(to);
    }

    async removeRelationship(to: string, key: string | string[]) {
        // Eliminar el/los ID(s) del "Set"
        const keys = Array.isArray(key) ? key : [key];
        await this.almacenamiento.setPull(to, keys);
    }
}
```

### Probando
Para asegurarte de que tu adaptador funciona, ejecuta el método `testAdapter` de `Cache`.

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