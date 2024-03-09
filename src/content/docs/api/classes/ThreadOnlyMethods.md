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

[seyfert/src/structures/extra/DiscordBase.ts:7](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/extra/DiscordBase.ts#L7)

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

[seyfert/src/structures/extra/DiscordBase.ts:27](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/extra/DiscordBase.ts#L27)

***

### createdTimestamp

```ts
get createdTimestamp(): number
```

Create a timestamp for the current object.

#### Returns

`number`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:20](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/extra/DiscordBase.ts#L20)

***

### url

```ts
get url(): string
```

The URL to the channel

#### Returns

`string`

#### Source

[seyfert/src/structures/channels.ts:57](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L57)

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

[seyfert/src/structures/channels.ts:65](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L65)

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

[seyfert/src/structures/channels.ts:69](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L69)

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

[seyfert/src/structures/channels.ts:61](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L61)

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

[seyfert/src/structures/channels.ts:129](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L129)

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

[seyfert/src/structures/channels.ts:109](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L109)

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

[seyfert/src/structures/channels.ts:85](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L85)

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

[seyfert/src/structures/channels.ts:97](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L97)

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

[seyfert/src/structures/channels.ts:89](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L89)

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

[seyfert/src/structures/channels.ts:121](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L121)

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

[seyfert/src/structures/channels.ts:81](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L81)

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

[seyfert/src/structures/channels.ts:113](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L113)

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

[seyfert/src/structures/channels.ts:77](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L77)

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

[seyfert/src/structures/channels.ts:105](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L105)

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

[seyfert/src/structures/channels.ts:117](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L117)

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

[seyfert/src/structures/channels.ts:93](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L93)

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

[seyfert/src/structures/channels.ts:125](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L125)

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

[seyfert/src/structures/channels.ts:101](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L101)

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

[seyfert/src/structures/channels.ts:293](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L293)

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

[seyfert/src/structures/channels.ts:297](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L297)

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

[seyfert/src/structures/channels.ts:301](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L301)

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

[seyfert/src/structures/channels.ts:289](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L289)

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

[seyfert/src/structures/channels.ts:305](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L305)

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

[seyfert/src/structures/channels.ts:281](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L281)

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

[seyfert/src/structures/channels.ts:73](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L73)
