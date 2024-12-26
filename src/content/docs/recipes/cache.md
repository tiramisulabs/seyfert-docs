---
title: Cache
---
# What is cache?

Cache is a temporary storage layer that keeps frequently accessed data readily available for quick access. In Seyfert, the cache system stores Discord data in memory by default, though it can be configured to use other storage solutions like Redis.

## Resources

All entities supported by Seyfert's cache are `resources`, such as `channels`, `users`, `members`, etc. Each of these resources is managed in the same way, but they can be modified and handled differently depending on the `Adapter`.

### Disabling

Seyfert allows you to disable these `resources` separately.

:::note[Global Data]
In Seyfert, the cache is global, meaning everything is stored in the same resource, with no distinction between guilds, until they are retrieved, at which point you would need to specify the source.
:::

| Resource         | Elements                                              |
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
The example above disables the bans cache, and that resource would not exist at runtime.

:::tip[Disabling the Cache]
You can completely remove the cache functionality:
```ts twoslash
import { Client } from 'seyfert';

const client = new Client();
// ---cut---
client.setServices({ cache: { disabledCache: true } })
```
:::
### Filtering

You can filter which data gets stored in a resource. For example, if your application doesn't need to cache DM channels, you can filter them out:

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

Seyfert allows you to provide your own adapter for the cache, which you can think of as a driver to let Seyfert use an unsupported tool. By default, Seyfert includes `MemoryAdapter` and `LimitedMemoryAdapter`, both of which operate in RAM. Additionally, Seyfert has official Redis support through the [`Redis Adapter`](https://github.com/tiramisulabs/extra/tree/main/packages/redis-adapter).

:::note[Difference between MemoryAdapter and LimitedMemoryAdapter]
The `MemoryAdapter` stores all data in memory, while the `LimitedMemoryAdapter` limits the amount of data stored in memory by providing expiration times and limits of entries.
:::

## Building Your Own Cache

### Custom Resource

A `custom resource` is just a new cache entity, so integrating it is relatively simple. Let's take the example of the [Cooldown](https://github.com/tiramisulabs/extra/blob/main/packages/cooldown/src/resource.ts) resource from the [cooldown](https://docs) package.

It's important to note that Seyfert provides a base for three types of resources:

- **BaseResource**: a basic entity, which should be completely independent
- **GuildBaseResource**: an entity linked to a guild (like bans)
- **GuildRelatedResource**: an entity that may or may not be linked to a guild (like messages)

```ts title="resource.ts"
import { BaseResource } from 'seyfert/lib/cache';

export class CooldownResource extends BaseResource<CooldownData> {
    // The namespace is the base that separates each resource
    namespace = 'cooldowns';

    // We override set to apply the typing and format we want
    override set(id: string, data: MakePartial<CooldownData, 'lastDrip'>) {
        return super.set(id, { ...data, lastDrip: data.lastDrip ?? Date.now() });
    }
}
```
Note that a custom resource is for developer use; Seyfert will not interact with it unless specified in the application's code.

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

## Custom Adapter

Don't like storing the cache in memory or Redis? Or maybe you just want to do it your own way?

Here, you'll learn how to create your own cache adapter.

### Before You Start

Consider whether your adapter might be asynchronous; if it is, you'll need to specify it:

```ts twoslash
// @noErrors
import { Adapter } from 'seyfert';

class MyAdapter implements Adapter {
    isAsync = true;

    async start() {
        // This function will run before starting the bot
    }
}
```
> This guide is for creating an asynchronous adapter. If you want a synchronous one, simply do not return a promise in any of the methods (the `start` method can be asynchronous).

### Storing Data

In Seyfert's cache, there are relationships, so you can know who a resource belongs to.

There are four methods you must implement in your adapter to store values: `set`, `patch`, `bulkPatch`, and `bulkSet`.

#### `set` and `bulkSet`

Starting with the simplest:

```ts twoslash
interface SeyfertDotDev {
    set(key: string, value: any): Promise<void>;
}
// @noErrors
// ---cut---
import { Adapter } from 'seyfert';

class MyAdapter implements Adapter {
    // ---cut-start---
    storage: SeyfertDotDev;
    // ---cut-end---
    async set(key: string, value: any | any[]) {
        await this.storage.set(key, { value });
    }

    async bulkSet(keys: [string, any][]) {
        for (let [key, value] of keys) {
            await this.set(key, value);
        }
    }
}
```

#### `patch` and `bulkPatch`

The `patch` method should not overwrite the entire properties of the old value, just the ones you pass.

```ts twoslash
interface SeyfertDotDev {
    set(key: string, value: any): Promise<void>;
    get(key: string): Promise<any>;
}
// @noErrors
// ---cut---
import { Adapter } from 'seyfert';

class MyAdapter implements Adapter {
    // ---cut-start---
    storage: SeyfertDotDev;
    // ---cut-end---
    async patch(key: string, value: any | any[]) {
        const oldData = await this.storage.get(key) ?? {};
        const newValue = Array.isArray(value)
            ? value
            : ({ ...oldData, ...value });

        await this.storage.set(key, { value: newValue });
    }

    async bulkPatch(keys: [string, any][]) {
        for (let [key, value] of keys) {
            await this.patch(key, value);
        }
    }
}
```

#### Storing Relationships

To store relationships, you use the `bulkAddToRelationShip` and `addToRelationship` methods.

```ts twoslash
interface SeyfertDotDev {
    setAdd(key: string, key: string): Promise<void>;
}
// @noErrors
// ---cut---
import { Adapter } from 'seyfert';

class MyAdapter implements Adapter {
    // ---cut-start---
    storage: SeyfertDotDev;
    // ---cut-end---
    async addToRelationship(id: string, keys: string | string[]) {
        for (const key of Array.isArray(keys) ? keys : [keys]) {
            // Add to a "Set", IDs must be unique
            await this.storage.setAdd(id, key);
        }
    }

    async bulkAddToRelationShip(data: Record<string, string[]>) {
        for (const i in data) {
            await this.addToRelationship(i, data[i]);
        }
    }
}
```

### Retrieving Data

You must implement three methods in your adapter to retrieve values: `get`, `bulkGet`, and `scan`.

#### `get` and `bulkGet`

Starting with the simplest:

```ts twoslash
interface SeyfertDotDev {
    get(key: string): Promise<any>;
}
// @noErrors
// ---cut---
import { Adapter } from 'seyfert';

class MyAdapter implements Adapter {
    // ---cut-start---
    storage: SeyfertDotDev;
    // ---cut-end---
    async get(key: string) {
        return this.storage.get(key);
    }

    async bulkGet(keys: string[]) {
        const values: Promise<any>[] = [];
        for (let key of keys) {
            values.push(this.get(key));
        }

        return (await Promise.all(values))
            // Do not return null values
            .filter(value => value)
    }
}
```

#### The `scan` method

Currently, we are storing data in this format:
```ts
<resource>.<id2>.<id1> // member.1003825077969764412.1095572785482444860
<resource>.<id1> // user.863313703072170014
```

The `scan` method takes a string with this format:
```ts
<resource>.<*>.<*> // member.*.*
<resource>.<*>.<id> // member.*.1095572785482444860
<resource>.<id>.<*> // member.1003825077969764412.*
<resource>.<*> // user.*
```
The `*` indicates that any ID may be present.

You should return all matches.

```ts twoslash
interface SeyfertDotDev {
    entries(): Promise<[string, unknown][]>; 
}
// @noErrors
// ---cut---
import { Adapter } from 'seyfert';

class MyAdapter implements Adapter {
    // ---cut-start---
    storage: SeyfertDotDev;
    // ---cut-end---
    async scan(query: string, keys?: false): any[]; 
    async scan(query: string, keys: true): string[]; 
    async scan(query: string, keys = false) {
        const values: (string | unknown)[] = [];
        const sq = query.split('.');
        // Your client will likely have a more optimized way to do this.
        // Like our Redis adapter.
        for (const [key, value] of await this.storage.entries()) {
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
> [Example of Redis Adapter](https://github.com/tiramisulabs/extra/blob/db36914ace5f4b948ee109a3c25987e162811b44/packages/redis-adapter/src/adapter.ts#L46)

#### Retrieving Relationships

To get the IDs of a relationship, we have the `getToRelationship` method.

```ts twoslash
interface SeyfertDotDev {
    setGet(key: string): Promise<string[] | undefined>;
}
// @noErrors
// ---cut---
import { Adapter } from 'seyfert';

class MyAdapter implements Adapter {
    // ---cut-start---
    storage: SeyfertDotDev;
    // ---cut-end---
    async getToRelationship(to: string) {
        return await this.storage.setGet(to) ?? []
    }
}
```

#### `keys`, `values`, `count`, and `contains`

```ts twoslash
interface SeyfertDotDev {
    setGet(key: string): Promise<string[] | undefined>;
}
// @noErrors
// ---cut---
import { Adapter } from 'seyfert';

class MyAdapter implements Adapter {
    // ---cut-start---
    storage: SeyfertDotDev;
    get(key: string): Promise<any>
    // ---cut-end---
    async getToRelationship(to: string) {
        return await this.storage.setGet(to) ?? []
    }

    async keys(to: string) {
        const keys = await this.storage.setGet(to) ?? [];
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

### Deleting Data

#### `remove`, `bulkRemove` and `flush`

There are three methods you must implement in your adapter to delete values: `remove`, `bulkRemove`, and `flush`.

```ts twoslash
interface SeyfertDotDev {
    remove(key: string): Promise<void>;
    flush(): Promise<void>;
    setFlush(): Promise<void>;
}
// @noErrors
// ---cut---
import { Adapter } from 'seyfert';

class MyAdapter implements Adapter {
    // ---cut-start---
    storage: SeyfertDotDev;
    // ---cut-end---
    async remove(key: string) {
        await this.storage.remove(key);
    }

    async bulkRemove(keys: string[]) {
        for (const key of keys) {
            await this.remove(key);
        }
    }

    async flush() {
        await this.storage.flush(); // Delete values
        await this.storage.setFlush(); // Delete relationships
    }
}
```

#### Deleting Relationships

To remove IDs from a relationship, we have the `removeToRelationship` and `removeRelationship` methods.

```ts twoslash
interface SeyfertDotDev {
    setRemove(key: string): Promise<void>;
    setPull(to: string, key: string[]): Promise<void>
}
// @noErrors
// ---cut---
import { Adapter } from 'seyfert';

class MyAdapter implements Adapter {
    // ---cut-start---
    storage: SeyfertDotDev;
    // ---cut-end---
    async removeToRelationship(to: string) {
        // Remove the "Set" completely
        await this.storage.setRemove(to);
    }

    async removeRelationship(to: string, key: string | string[]) {
        // Remove the ID(s) from the "Set"
        const keys = Array.isArray(key) ? key : [key];
        await this.storage.setPull(to, keys);
    }
}
```

### Testing
To ensure your adapter works, run the `testAdapter` method from `Cache`.

```ts twoslash
// @errors: 2304
// @noErrors
import { Client } from 'seyfert';

const client = new Client();

client.setServices({
    cache: {
        adapter: new MyAdapter()
    }
})

await client.cache.testAdapter();
```