---
title: Cache
---
# What is the cache?

In seyfert the cache is the storage in memory (at least) of the data emitted by Discord. Seyfert provides several ways to handle the cache for Discord data.

## Resources

All the entities supported by the seyfert cache are `resources`, namely `channels`, `users`, `members`.... Therefore, each one is handled, although in the same way, it is allowed to be modified and managed in different ways in relation to the `Adapter`.

### Shutdown

Seyfert allows to disable these `resources` separately

:::note[Global Data]
In seyfert the cache is global, so everything is stored in the same resource, without guild distinction until the time to get them where it would require specifying the source.
:::

| Resource        | Elements                                               |
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
The example would disable the bans cache and this resource would not exist in runtime.

:::tip[Turn off cache]
You can remove the cache functionality completely.
```ts
client.setServices({ cache: { disabledCache: true } })
```
:::
### Filtering

For example, since all channels are stored in the same `resource`, suppose your application does not have a utility for certain channels, so we can `filter` the input data:

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

Seyfert allows you to provide your own adapter for the cache, you can call it a driver so that seyfert uses an unsupported tool. By default seyfert incorporates `MemoryAdapter` and `LimitedMemoryAdapter` both of which work in RAM.

:::tip[Redis]
Seyfert has official support for redis
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

## Setting up your own cache

### Custom Resource

A `custom resource` is nothing more than a new cache entity, so integrating it is relatively simple, let's take the [Cooldown](https://github.com/tiramisulabs/extra/blob/main/packages/cooldown/src/resource.ts) resource from the [cooldown](/recipes/cooldown) package as an example.

It is important to note that seyfert provides a base for 3 types of resources:

- **BaseResource**: basic entity, which should be totally independent.
- **GuildBaseResource**: entity that is linked to a guild (like bans)
- **GuildRelatedResource**: entity that may or may not be linked to a guild (like messages)

```ts title="resource.ts"
import { BaseResource } from 'seyfert/lib/cache';

export class CooldownResource extends BaseResource<CooldownData> {
  // the namespace is the base separating each resource
	namespace = 'cooldowns';

  // we overwrite the set to give it the typing and formatting we desire
	override set(id: string, data: MakePartial<CooldownData, 'lastDrip'>) {
		return super.set(id, { ...data, lastDrip: data.lastDrip ?? Date.now() });
	}
}
```
Note, that a custom resource is for developer use, seyfert will not interact with it unless indicated in the application code.

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