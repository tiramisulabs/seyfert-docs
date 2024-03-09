---
editUrl: false
next: false
prev: false
title: "DMChannel"
---

## Extends

- `ObjectToLower`\<`APIDMChannel`\>.`Omit`\<[`MessagesMethods`](/api/classes/messagesmethods/), `"edit"`\>.`Object`

## Constructors

### new DMChannel(args)

```ts
new DMChannel(...args: any[]): DMChannel
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `any`[] |

#### Returns

[`DMChannel`](/api/classes/dmchannel/)

#### Inherited from

`ObjectToLower<APIDMChannel>.constructor`

#### Source

[seyfert/src/common/types/util.ts:3](https://github.com/potoland/potocuit/blob/fe122a1/src/common/types/util.ts#L3)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `api` | `public` | [`APIRoutes`](/api/type-aliases/apiroutes/) | `Omit.api` |
| `cache` | `public` | [`Cache`](/api/classes/cache/) | `Omit.cache` |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | `Omit.client` |
| `createdAt` | `public` | `Date` | `Omit.createdAt` |
| `createdTimestamp` | `public` | `number` | `Omit.createdTimestamp` |
| `flags` | `public` | `undefined` \| `ChannelFlags` | `ObjectToLower.flags` |
| `id` | `public` | `string` | `ObjectToLower.id` |
| `lastMessageId` | `public` | `undefined` \| `null` \| `string` | `ObjectToLower.lastMessageId` |
| `lastPinTimestamp` | `public` | `undefined` \| `null` \| `string` | `ObjectToLower.lastPinTimestamp` |
| `messages` | `public` | `Object` | `Omit.messages` |
| `messages.crosspost` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `messages.delete` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`void`\> | - |
| `messages.edit` | `public` | (`messageId`: `string`, `body`: `Omit`\<`RESTPatchAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `messages.fetch` | `public` | (`messageId`: `string`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `messages.purge` | `public` | (`messages`: `string`[], `reason`?: `string`) => `Promise`\<`never`\> | - |
| `messages.write` | `public` | (`body`: `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `name` | `public` | `null` | `ObjectToLower.name` |
| `pins` | `public` | `Object` | `Omit.pins` |
| `pins.delete` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | - |
| `pins.fetch` | `public` | () => `Promise`\<[`Message`](/api/classes/message/)[]\> | - |
| `pins.set` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | - |
| `reactions` | `public` | `Object` | `Omit.reactions` |
| `reactions.add` | `public` | (`messageId`: `string`, `emoji`: `EmojiResolvable`) => `Promise`\<`never`\> | - |
| `reactions.delete` | `public` | (`messageId`: `string`, `emoji`: `EmojiResolvable`, `userId`: `string`) => `Promise`\<`never`\> | - |
| `reactions.fetch` | `public` | (`messageId`: `string`, `emoji`: `EmojiResolvable`, `query`?: `RESTGetAPIChannelMessageReactionUsersQuery`) => `Promise`\<[`User`](/api/classes/user/)[]\> | - |
| `reactions.purge` | `public` | (`messageId`: `string`, `emoji`?: `EmojiResolvable`) => `Promise`\<`never`\> | - |
| `recipients` | `public` | `undefined` \| `APIUser`[] | `ObjectToLower.recipients` |
| `rest` | `public` | [`ApiHandler`](/api/classes/apihandler/) | `Omit.rest` |
| `type` | `public` | `DM` | `ObjectToLower.type` |
| `url` | `public` | `string` | `Omit.url` |

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

`Omit.delete`

#### Source

[seyfert/src/structures/channels.ts:67](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L67)

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

`Omit.fetch`

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

`Omit.is`

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

`Omit.isCategory`

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

`Omit.isDM`

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

`Omit.isDirectory`

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

`Omit.isForum`

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

`Omit.isGuildTextable`

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

`Omit.isMedia`

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

`Omit.isNews`

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

`Omit.isStage`

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

`Omit.isTextGuild`

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

`Omit.isTextable`

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

`Omit.isThread`

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

`Omit.isThreadOnly`

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

`Omit.isVoice`

#### Source

[seyfert/src/structures/channels.ts:106](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L106)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Inherited from

`Omit.toString`

#### Source

[seyfert/src/structures/channels.ts:78](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L78)

***

### typing()

```ts
typing(): Promise<never>
```

#### Returns

`Promise`\<`never`\>

#### Inherited from

`Omit.typing`

#### Source

[seyfert/src/structures/channels.ts:214](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L214)
