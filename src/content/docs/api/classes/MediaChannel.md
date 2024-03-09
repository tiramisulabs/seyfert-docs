---
editUrl: false
next: false
prev: false
title: "MediaChannel"
---

## Extends

- `ObjectToLower`\<`Omit`\<`APIGuildMediaChannel`, `"type"`\>\>.[`ThreadOnlyMethods`](/api/classes/threadonlymethods/).[`BaseChannel`](/api/classes/basechannel/)\<`ChannelType`\>

## Constructors

### new MediaChannel(client, data)

```ts
new MediaChannel(client: BaseClient, data: APIChannelBase<ChannelType>): MediaChannel
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | `BaseClient` |
| `data` | `APIChannelBase`\<`ChannelType`\> |

#### Returns

[`MediaChannel`](/api/classes/mediachannel/)

#### Inherited from

[`BaseChannel`](/api/classes/basechannel/).[`constructor`](/api/classes/basechannel/#constructors)

#### Source

[seyfert/src/structures/channels.ts:48](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L48)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `availableTags` | `public` | `Object`[] | `ObjectToLower.availableTags` |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | [`BaseChannel`](/api/classes/basechannel/).`client` |
| `defaultAutoArchiveDuration` | `public` | `undefined` \| `ThreadAutoArchiveDuration` | `ObjectToLower.defaultAutoArchiveDuration` |
| `defaultReactionEmoji` | `public` | `null` \| `APIGuildForumDefaultReactionEmoji` | `ObjectToLower.defaultReactionEmoji` |
| `defaultSortOrder` | `public` | `null` \| `SortOrderType` | `ObjectToLower.defaultSortOrder` |
| `defaultThreadRateLimitPerUser` | `public` | `undefined` \| `number` | `ObjectToLower.defaultThreadRateLimitPerUser` |
| `flags` | `public` | `undefined` \| `ChannelFlags` | `ObjectToLower.flags` |
| `guildId` | `public` | `undefined` \| `string` | `ObjectToLower.guildId` |
| `id` | `public` | `string` | [`BaseChannel`](/api/classes/basechannel/).`id` |
| `lastMessageId` | `public` | `undefined` \| `null` \| `string` | `ObjectToLower.lastMessageId` |
| `lastPinTimestamp` | `public` | `undefined` \| `null` \| `string` | `ObjectToLower.lastPinTimestamp` |
| `name` | `public` | `string` | `ObjectToLower.name` |
| `nsfw` | `public` | `undefined` \| `boolean` | `ObjectToLower.nsfw` |
| `parentId` | `public` | `undefined` \| `null` \| `string` | `ObjectToLower.parentId` |
| `permissionOverwrites` | `public` | `undefined` \| `APIOverwrite`[] | `ObjectToLower.permissionOverwrites` |
| `position` | `public` | `number` | `ObjectToLower.position` |
| `rateLimitPerUser` | `public` | `undefined` \| `number` | `ObjectToLower.rateLimitPerUser` |
| `topic` | `public` | `undefined` \| `null` \| `string` | `ObjectToLower.topic` |
| `type` | `public` | `GuildMedia` | [`BaseChannel`](/api/classes/basechannel/).`type` |

## Accessors

### createdAt

```ts
get createdAt(): Date
```

createdAt gets the creation Date instace of the current object.

#### Returns

`Date`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:27](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/extra/DiscordBase.ts#L27)

***

### createdTimestamp

```ts
get createdTimestamp(): number
```

Create a timestamp for the current object.

#### Returns

`number`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:20](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/extra/DiscordBase.ts#L20)

***

### url

```ts
get url(): string
```

The URL to the channel

#### Returns

`string`

#### Source

[seyfert/src/structures/channels.ts:59](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L59)

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

[seyfert/src/structures/channels.ts:67](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L67)

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

[seyfert/src/structures/channels.ts:71](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L71)

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

[seyfert/src/structures/channels.ts:63](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L63)

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

[seyfert/src/structures/channels.ts:134](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L134)

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

[seyfert/src/structures/channels.ts:114](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L114)

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

[seyfert/src/structures/channels.ts:90](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L90)

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

[seyfert/src/structures/channels.ts:102](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L102)

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

[seyfert/src/structures/channels.ts:94](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L94)

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

[seyfert/src/structures/channels.ts:126](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L126)

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

[seyfert/src/structures/channels.ts:86](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L86)

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

[seyfert/src/structures/channels.ts:118](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L118)

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

[seyfert/src/structures/channels.ts:82](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L82)

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

[seyfert/src/structures/channels.ts:110](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L110)

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

[seyfert/src/structures/channels.ts:122](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L122)

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

[seyfert/src/structures/channels.ts:98](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L98)

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

[seyfert/src/structures/channels.ts:130](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L130)

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

[seyfert/src/structures/channels.ts:106](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L106)

***

### setAutoArchiveDuration()

```ts
setAutoArchiveDuration(duration: ThreadAutoArchiveDuration, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `duration` | `ThreadAutoArchiveDuration` |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Inherited from

[`ThreadOnlyMethods`](/api/classes/threadonlymethods/).[`setAutoArchiveDuration`](/api/classes/threadonlymethods/#setautoarchiveduration)

#### Source

[seyfert/src/structures/channels.ts:322](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L322)

***

### setReactionEmoji()

```ts
setReactionEmoji(emoji: APIGuildForumDefaultReactionEmoji, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `emoji` | `APIGuildForumDefaultReactionEmoji` |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Inherited from

[`ThreadOnlyMethods`](/api/classes/threadonlymethods/).[`setReactionEmoji`](/api/classes/threadonlymethods/#setreactionemoji)

#### Source

[seyfert/src/structures/channels.ts:326](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L326)

***

### setSortOrder()

```ts
setSortOrder(sort: SortOrderType, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sort` | `SortOrderType` |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Inherited from

[`ThreadOnlyMethods`](/api/classes/threadonlymethods/).[`setSortOrder`](/api/classes/threadonlymethods/#setsortorder)

#### Source

[seyfert/src/structures/channels.ts:330](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L330)

***

### setTags()

```ts
setTags(tags: APIGuildForumTag[], reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `tags` | `APIGuildForumTag`[] |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Inherited from

[`ThreadOnlyMethods`](/api/classes/threadonlymethods/).[`setTags`](/api/classes/threadonlymethods/#settags)

#### Source

[seyfert/src/structures/channels.ts:318](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L318)

***

### setThreadRateLimit()

```ts
setThreadRateLimit(rate: number, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rate` | `number` |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Inherited from

[`ThreadOnlyMethods`](/api/classes/threadonlymethods/).[`setThreadRateLimit`](/api/classes/threadonlymethods/#setthreadratelimit)

#### Source

[seyfert/src/structures/channels.ts:334](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L334)

***

### setTopic()

```ts
setTopic(topic: null | string, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `topic` | `null` \| `string` |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Inherited from

[`ThreadOnlyMethods`](/api/classes/threadonlymethods/).[`setTopic`](/api/classes/threadonlymethods/#settopic)

#### Source

[seyfert/src/structures/channels.ts:310](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L310)

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

[seyfert/src/structures/channels.ts:78](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L78)

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

[seyfert/src/structures/channels.ts:52](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L52)

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

[seyfert/src/structures/channels.ts:53](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L53)

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

[seyfert/src/structures/channels.ts:138](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L138)
