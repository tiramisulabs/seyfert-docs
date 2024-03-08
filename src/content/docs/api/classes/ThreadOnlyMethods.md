---
editUrl: false
next: false
prev: false
title: "ThreadOnlyMethods"
---

## Extends

- [`BaseChannel`](/api/classes/basechannel/)\<`ChannelType`\>.[`TopicableGuildChannel`](/api/classes/topicableguildchannel/).`DiscordBase`

## Constructors

### new ThreadOnlyMethods(client, data)

```ts
new ThreadOnlyMethods(client: BaseClient, data:     Object): ThreadOnlyMethods
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `client` | `BaseClient` | - |
| `data` | `Object` | Unique ID of the object |
| `data.id` | `string` | - |

#### Returns

[`ThreadOnlyMethods`](/api/classes/threadonlymethods/)

#### Inherited from

[`TopicableGuildChannel`](/api/classes/topicableguildchannel/).[`constructor`](/api/classes/topicableguildchannel/#constructors)

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:7](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/DiscordBase.ts#L7)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | [`TopicableGuildChannel`](/api/classes/topicableguildchannel/).`client` |
| `id` | `public` | `string` | [`TopicableGuildChannel`](/api/classes/topicableguildchannel/).`id` |
| `type` | `public` | `ChannelType` | [`TopicableGuildChannel`](/api/classes/topicableguildchannel/).`type` |

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

[`TopicableGuildChannel`](/api/classes/topicableguildchannel/).[`delete`](/api/classes/topicableguildchannel/#delete)

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

[`TopicableGuildChannel`](/api/classes/topicableguildchannel/).[`edit`](/api/classes/topicableguildchannel/#edit)

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

[`TopicableGuildChannel`](/api/classes/topicableguildchannel/).[`fetch`](/api/classes/topicableguildchannel/#fetch)

#### Source

[seyfert/src/structures/channels.ts:63](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L63)

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

[`TopicableGuildChannel`](/api/classes/topicableguildchannel/).[`is`](/api/classes/topicableguildchannel/#is)

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

[`TopicableGuildChannel`](/api/classes/topicableguildchannel/).[`isCategory`](/api/classes/topicableguildchannel/#iscategory)

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

[`TopicableGuildChannel`](/api/classes/topicableguildchannel/).[`isDM`](/api/classes/topicableguildchannel/#isdm)

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

[`TopicableGuildChannel`](/api/classes/topicableguildchannel/).[`isDirectory`](/api/classes/topicableguildchannel/#isdirectory)

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

[`TopicableGuildChannel`](/api/classes/topicableguildchannel/).[`isForum`](/api/classes/topicableguildchannel/#isforum)

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

[`TopicableGuildChannel`](/api/classes/topicableguildchannel/).[`isGuildTextable`](/api/classes/topicableguildchannel/#isguildtextable)

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

[`TopicableGuildChannel`](/api/classes/topicableguildchannel/).[`isMedia`](/api/classes/topicableguildchannel/#ismedia)

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

[`TopicableGuildChannel`](/api/classes/topicableguildchannel/).[`isNews`](/api/classes/topicableguildchannel/#isnews)

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

[`TopicableGuildChannel`](/api/classes/topicableguildchannel/).[`isStage`](/api/classes/topicableguildchannel/#isstage)

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

[`TopicableGuildChannel`](/api/classes/topicableguildchannel/).[`isTextGuild`](/api/classes/topicableguildchannel/#istextguild)

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

[`TopicableGuildChannel`](/api/classes/topicableguildchannel/).[`isTextable`](/api/classes/topicableguildchannel/#istextable)

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

[`TopicableGuildChannel`](/api/classes/topicableguildchannel/).[`isThread`](/api/classes/topicableguildchannel/#isthread)

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

[`TopicableGuildChannel`](/api/classes/topicableguildchannel/).[`isThreadOnly`](/api/classes/topicableguildchannel/#isthreadonly)

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

[`TopicableGuildChannel`](/api/classes/topicableguildchannel/).[`isVoice`](/api/classes/topicableguildchannel/#isvoice)

#### Source

[seyfert/src/structures/channels.ts:103](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L103)

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

#### Source

[seyfert/src/structures/channels.ts:316](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L316)

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

#### Source

[seyfert/src/structures/channels.ts:320](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L320)

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

#### Source

[seyfert/src/structures/channels.ts:324](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L324)

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

#### Source

[seyfert/src/structures/channels.ts:312](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L312)

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

#### Source

[seyfert/src/structures/channels.ts:328](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L328)

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

[`TopicableGuildChannel`](/api/classes/topicableguildchannel/).[`setTopic`](/api/classes/topicableguildchannel/#settopic)

#### Source

[seyfert/src/structures/channels.ts:304](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L304)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Inherited from

[`TopicableGuildChannel`](/api/classes/topicableguildchannel/).[`toString`](/api/classes/topicableguildchannel/#tostring)

#### Source

[seyfert/src/structures/channels.ts:75](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L75)
