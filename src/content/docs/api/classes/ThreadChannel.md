---
editUrl: false
next: false
prev: false
title: "ThreadChannel"
---

## Extends

- `ObjectToLower`\<`Omit`\<`APIThreadChannel`, `"permission_overwrites"`\>\>.[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`BaseChannel`](/api/classes/basechannel/)\<`ChannelType.PublicThread` \| `ChannelType.AnnouncementThread` \| `ChannelType.PrivateThread`\>

## Constructors

### new ThreadChannel(client, data)

```ts
new ThreadChannel(client: BaseClient, data: APIChannelBase<ChannelType>): ThreadChannel
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | `BaseClient` |
| `data` | `APIChannelBase`\<`ChannelType`\> |

#### Returns

[`ThreadChannel`](/api/classes/threadchannel/)

#### Inherited from

[`BaseChannel`](/api/classes/basechannel/).[`constructor`](/api/classes/basechannel/#constructors)

#### Source

[seyfert/src/structures/channels.ts:48](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L48)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `appliedTags` | `public` | `string`[] | `ObjectToLower.appliedTags` |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | [`BaseChannel`](/api/classes/basechannel/).`client` |
| `defaultAutoArchiveDuration` | `public` | `undefined` \| `ThreadAutoArchiveDuration` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`defaultAutoArchiveDuration` |
| `defaultThreadRateLimitPerUser` | `public` | `undefined` \| `number` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`defaultThreadRateLimitPerUser` |
| `flags` | `public` | `undefined` \| `ChannelFlags` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`flags` |
| `guildId` | `public` | `undefined` \| `string` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`guildId` |
| `id` | `public` | `string` | [`BaseChannel`](/api/classes/basechannel/).`id` |
| `lastMessageId` | `public` | `undefined` \| `null` \| `string` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`lastMessageId` |
| `lastPinTimestamp` | `public` | `undefined` \| `null` \| `string` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`lastPinTimestamp` |
| `member` | `public` | `undefined` \| `APIThreadMember` | `ObjectToLower.member` |
| `memberCount` | `public` | `undefined` \| `number` | `ObjectToLower.memberCount` |
| `messageCount` | `public` | `undefined` \| `number` | `ObjectToLower.messageCount` |
| `messages` | `public` | `Object` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`messages` |
| `messages.crosspost` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `messages.delete` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`void`\> | - |
| `messages.edit` | `public` | (`messageId`: `string`, `body`: `Omit`\<`RESTPatchAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `messages.fetch` | `public` | (`messageId`: `string`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `messages.purge` | `public` | (`messages`: `string`[], `reason`?: `string`) => `Promise`\<`never`\> | - |
| `messages.write` | `public` | (`body`: `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `name` | `public` | `string` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`name` |
| `nsfw` | `public` | `undefined` \| `boolean` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`nsfw` |
| `ownerId` | `public` | `undefined` \| `string` | `ObjectToLower.ownerId` |
| `parentId` | `public` | `undefined` \| `null` \| `string` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`parentId` |
| `permissionOverwrites` | `public` | `Object`[] | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`permissionOverwrites` |
| `pins` | `public` | `Object` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`pins` |
| `pins.delete` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | - |
| `pins.fetch` | `public` | () => `Promise`\<[`Message`](/api/classes/message/)[]\> | - |
| `pins.set` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | - |
| `position` | `public` | `number` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`position` |
| `rateLimitPerUser` | `public` | `undefined` \| `number` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`rateLimitPerUser` |
| `reactions` | `public` | `Object` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`reactions` |
| `reactions.add` | `public` | (`messageId`: `string`, `emoji`: `EmojiResolvable`) => `Promise`\<`never`\> | - |
| `reactions.delete` | `public` | (`messageId`: `string`, `emoji`: `EmojiResolvable`, `userId`: `string`) => `Promise`\<`never`\> | - |
| `reactions.fetch` | `public` | (`messageId`: `string`, `emoji`: `EmojiResolvable`, `query`?: `RESTGetAPIChannelMessageReactionUsersQuery`) => `Promise`\<[`User`](/api/classes/user/)[]\> | - |
| `reactions.purge` | `public` | (`messageId`: `string`, `emoji`?: `EmojiResolvable`) => `Promise`\<`never`\> | - |
| `threadMetadata` | `public` | `undefined` \| `APIThreadMetadata` | `ObjectToLower.threadMetadata` |
| `topic` | `public` | `undefined` \| `null` \| `string` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`topic` |
| `totalMessageSent` | `public` | `undefined` \| `number` | `ObjectToLower.totalMessageSent` |
| `type` | `public` | `AnnouncementThread` \| `PublicThread` \| `PrivateThread` | [`BaseChannel`](/api/classes/basechannel/).`type` |
| `webhooks` | `public` | `Object` | - |
| `webhooks.create` | `public` | (`body`: `RESTPostAPIChannelWebhookJSONBody`) => `Promise`\<[`Webhook`](/api/classes/webhook/)\> | - |
| `webhooks.list` | `public` | () => `Promise`\<[`Webhook`](/api/classes/webhook/)[]\> | - |

## Accessors

### createdAt

```ts
get createdAt(): Date
```

createdAt gets the creation Date instace of the current object.

#### Returns

`Date`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:27](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/DiscordBase.ts#L27)

***

### createdTimestamp

```ts
get createdTimestamp(): number
```

Create a timestamp for the current object.

#### Returns

`number`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:20](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/DiscordBase.ts#L20)

***

### url

```ts
get url(): string
```

The URL to the channel

#### Returns

`string`

#### Source

[seyfert/src/structures/channels.ts:59](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L59)

## Methods

### delete()

```ts
delete(reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Inherited from

[`BaseChannel`](/api/classes/basechannel/).[`delete`](/api/classes/basechannel/#delete)

#### Source

[seyfert/src/structures/channels.ts:67](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L67)

***

### edit()

```ts
edit(body: RESTPatchAPIChannelJSONBody, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `RESTPatchAPIChannelJSONBody` |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Inherited from

[`BaseChannel`](/api/classes/basechannel/).[`edit`](/api/classes/basechannel/#edit)

#### Source

[seyfert/src/structures/channels.ts:71](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L71)

***

### fetch()

```ts
fetch(force: boolean): Promise<AllChannels>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Inherited from

[`BaseChannel`](/api/classes/basechannel/).[`fetch`](/api/classes/basechannel/#fetch)

#### Source

[seyfert/src/structures/channels.ts:63](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L63)

***

### guild()

```ts
guild(force: boolean): Promise<Guild<"cached"> | Guild<"api">>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<[`Guild`](/api/classes/guild/)\<`"cached"`\> \| [`Guild`](/api/classes/guild/)\<`"api"`\>\>

#### Inherited from

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`guild`](/api/classes/textbaseguildchannel/#guild)

#### Source

[seyfert/src/structures/channels.ts:185](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L185)

***

### is()

```ts
is<T>(channelTypes: T): this is IChannelTypes[T[number]]
```

#### Type parameters

| Type parameter |
| :------ |
| `T` extends keyof `IChannelTypes`[] |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channelTypes` | `T` |

#### Returns

`this is IChannelTypes[T[number]]`

#### Inherited from

[`BaseChannel`](/api/classes/basechannel/).[`is`](/api/classes/basechannel/#is)

#### Source

[seyfert/src/structures/channels.ts:131](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L131)

***

### isCategory()

```ts
isCategory(): this is CategoryChannel
```

#### Returns

`this is CategoryChannel`

#### Inherited from

[`BaseChannel`](/api/classes/basechannel/).[`isCategory`](/api/classes/basechannel/#iscategory)

#### Source

[seyfert/src/structures/channels.ts:111](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L111)

***

### isDM()

```ts
isDM(): this is DMChannel
```

#### Returns

`this is DMChannel`

#### Inherited from

[`BaseChannel`](/api/classes/basechannel/).[`isDM`](/api/classes/basechannel/#isdm)

#### Source

[seyfert/src/structures/channels.ts:87](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L87)

***

### isDirectory()

```ts
isDirectory(): this is DirectoryChannel
```

#### Returns

`this is DirectoryChannel`

#### Inherited from

[`BaseChannel`](/api/classes/basechannel/).[`isDirectory`](/api/classes/basechannel/#isdirectory)

#### Source

[seyfert/src/structures/channels.ts:99](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L99)

***

### isForum()

```ts
isForum(): this is ForumChannel
```

#### Returns

`this is ForumChannel`

#### Inherited from

[`BaseChannel`](/api/classes/basechannel/).[`isForum`](/api/classes/basechannel/#isforum)

#### Source

[seyfert/src/structures/channels.ts:91](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L91)

***

### isGuildTextable()

```ts
isGuildTextable(): this is AllGuildTextableChannels
```

#### Returns

`this is AllGuildTextableChannels`

#### Inherited from

[`BaseChannel`](/api/classes/basechannel/).[`isGuildTextable`](/api/classes/basechannel/#isguildtextable)

#### Source

[seyfert/src/structures/channels.ts:123](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L123)

***

### isMedia()

```ts
isMedia(): this is MediaChannel
```

#### Returns

`this is MediaChannel`

#### Inherited from

[`BaseChannel`](/api/classes/basechannel/).[`isMedia`](/api/classes/basechannel/#ismedia)

#### Source

[seyfert/src/structures/channels.ts:83](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L83)

***

### isNews()

```ts
isNews(): this is NewsChannel
```

#### Returns

`this is NewsChannel`

#### Inherited from

[`BaseChannel`](/api/classes/basechannel/).[`isNews`](/api/classes/basechannel/#isnews)

#### Source

[seyfert/src/structures/channels.ts:115](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L115)

***

### isStage()

```ts
isStage(): this is StageChannel
```

#### Returns

`this is StageChannel`

#### Inherited from

[`BaseChannel`](/api/classes/basechannel/).[`isStage`](/api/classes/basechannel/#isstage)

#### Source

[seyfert/src/structures/channels.ts:79](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L79)

***

### isTextGuild()

```ts
isTextGuild(): this is TextGuildChannel
```

#### Returns

`this is TextGuildChannel`

#### Inherited from

[`BaseChannel`](/api/classes/basechannel/).[`isTextGuild`](/api/classes/basechannel/#istextguild)

#### Source

[seyfert/src/structures/channels.ts:107](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L107)

***

### isTextable()

```ts
isTextable(): this is AllTextableChannels
```

#### Returns

`this is AllTextableChannels`

#### Inherited from

[`BaseChannel`](/api/classes/basechannel/).[`isTextable`](/api/classes/basechannel/#istextable)

#### Source

[seyfert/src/structures/channels.ts:119](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L119)

***

### isThread()

```ts
isThread(): this is ThreadChannel
```

#### Returns

`this is ThreadChannel`

#### Inherited from

[`BaseChannel`](/api/classes/basechannel/).[`isThread`](/api/classes/basechannel/#isthread)

#### Source

[seyfert/src/structures/channels.ts:95](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L95)

***

### isThreadOnly()

```ts
isThreadOnly(): this is MediaChannel | ForumChannel
```

#### Returns

`this is MediaChannel | ForumChannel`

#### Inherited from

[`BaseChannel`](/api/classes/basechannel/).[`isThreadOnly`](/api/classes/basechannel/#isthreadonly)

#### Source

[seyfert/src/structures/channels.ts:127](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L127)

***

### isVoice()

```ts
isVoice(): this is VoiceChannel
```

#### Returns

`this is VoiceChannel`

#### Inherited from

[`BaseChannel`](/api/classes/basechannel/).[`isVoice`](/api/classes/basechannel/#isvoice)

#### Source

[seyfert/src/structures/channels.ts:103](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L103)

***

### pin()

```ts
pin(reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Source

[seyfert/src/structures/channels.ts:461](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L461)

***

### setArchived()

```ts
setArchived(archived: boolean, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `archived` | `boolean` | `true` |
| `reason`? | `string` | `undefined` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Source

[seyfert/src/structures/channels.ts:477](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L477)

***

### setAutoArchiveDuration()

```ts
setAutoArchiveDuration(auto_archive_duration: StringToNumber<"60" | "1440" | "4320" | "10080">, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `auto_archive_duration` | `StringToNumber`\<`"60"` \| `"1440"` \| `"4320"` \| `"10080"`\> |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Source

[seyfert/src/structures/channels.ts:481](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L481)

***

### setInvitable()

```ts
setInvitable(invitable: boolean, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `invitable` | `boolean` | `true` |
| `reason`? | `string` | `undefined` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Source

[seyfert/src/structures/channels.ts:485](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L485)

***

### setLocked()

```ts
setLocked(locked: boolean, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `locked` | `boolean` | `true` |
| `reason`? | `string` | `undefined` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Source

[seyfert/src/structures/channels.ts:489](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L489)

***

### setName()

```ts
setName(name: string, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Inherited from

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`setName`](/api/classes/textbaseguildchannel/#setname)

#### Source

[seyfert/src/structures/channels.ts:197](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L197)

***

### setParent()

```ts
setParent(parent_id: null | string, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `parent_id` | `null` \| `string` |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Inherited from

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`setParent`](/api/classes/textbaseguildchannel/#setparent)

#### Source

[seyfert/src/structures/channels.ts:201](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L201)

***

### setPosition()

```ts
setPosition(position: number, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `position` | `number` |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Inherited from

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`setPosition`](/api/classes/textbaseguildchannel/#setposition)

#### Source

[seyfert/src/structures/channels.ts:193](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L193)

***

### setRatelimitPerUser()

```ts
setRatelimitPerUser(rate_limit_per_user: undefined | null | number): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rate_limit_per_user` | `undefined` \| `null` \| `number` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Source

[seyfert/src/structures/channels.ts:457](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L457)

***

### setTags()

```ts
setTags(applied_tags: string[], reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `applied_tags` | `string`[] |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Source

[seyfert/src/structures/channels.ts:469](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L469)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Inherited from

[`BaseChannel`](/api/classes/basechannel/).[`toString`](/api/classes/basechannel/#tostring)

#### Source

[seyfert/src/structures/channels.ts:75](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L75)

***

### typing()

```ts
typing(): Promise<never>
```

#### Returns

`Promise`\<`never`\>

#### Inherited from

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`typing`](/api/classes/textbaseguildchannel/#typing)

#### Source

[seyfert/src/structures/channels.ts:208](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L208)

***

### unpin()

```ts
unpin(reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Source

[seyfert/src/structures/channels.ts:465](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L465)

***

### \_\_intent\_\_()

#### \_\_intent\_\_(id)

```ts
static __intent__(id: "@me"): "DirectMessages"
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `"@me"` |

##### Returns

`"DirectMessages"`

##### Inherited from

[`BaseChannel`](/api/classes/basechannel/).[`__intent__`](/api/classes/basechannel/#__intent__)

##### Source

[seyfert/src/structures/channels.ts:52](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L52)

#### \_\_intent\_\_(id)

```ts
static __intent__(id: string): "Guilds" | "DirectMessages"
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

##### Returns

`"Guilds"` \| `"DirectMessages"`

##### Inherited from

[`BaseChannel`](/api/classes/basechannel/).[`__intent__`](/api/classes/basechannel/#__intent__)

##### Source

[seyfert/src/structures/channels.ts:53](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L53)

***

### allMethods()

```ts
static allMethods(ctx:     Object): Object
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ctx` | `Object` |
| `ctx.client` | `BaseClient` |
| `ctx.guildId` | `string` |

#### Returns

`Object`

| Member | Type | Value |
| :------ | :------ | :------ |
| `create` | (`body`: `RESTPostAPIGuildChannelJSONBody`) => `Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\> | - |
| `delete` | (`id`: `string`, `reason`?: `string`) => `Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\> | - |
| `edit` | (`id`: `string`, `body`: `RESTPatchAPIChannelJSONBody`, `reason`?: `string`) => `Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\> | - |
| `editPositions` | (`body`: `RESTPatchAPIGuildChannelPositionsJSONBody`) => `Promise`\<`never`\> | - |
| `fetch` | (`id`: `string`, `force`: `boolean`) => `Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\> | - |
| `list` | (`force`: `boolean`) => `Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)[]\> | - |

#### Inherited from

[`BaseChannel`](/api/classes/basechannel/).[`allMethods`](/api/classes/basechannel/#allmethods)

#### Source

[seyfert/src/structures/channels.ts:135](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L135)
