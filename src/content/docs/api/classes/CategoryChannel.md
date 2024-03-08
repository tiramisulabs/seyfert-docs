---
editUrl: false
next: false
prev: false
title: "CategoryChannel"
---

## Extends

- `ObjectToLower`\<`Omit`\<`APIGuildCategoryChannel`, `"permission_overwrites"`\>\>.`Object`

## Constructors

### new CategoryChannel(args)

```ts
new CategoryChannel(...args: any[]): CategoryChannel
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `any`[] |

#### Returns

[`CategoryChannel`](/api/classes/categorychannel/)

#### Inherited from

`ObjectToLower<Omit<APIGuildCategoryChannel, 'permission_overwrites'>>.constructor`

#### Source

[seyfert/src/common/types/util.ts:3](https://github.com/potoland/potocuit/blob/c4fb0c1/src/common/types/util.ts#L3)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `api` | `public` | [`APIRoutes`](/api/type-aliases/apiroutes/) | - |
| `cache` | `public` | [`Cache`](/api/classes/cache/) | - |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | - |
| `createdAt` | `public` | `Date` | - |
| `createdTimestamp` | `public` | `number` | - |
| `flags` | `public` | `undefined` \| `ChannelFlags` | `ObjectToLower.flags` |
| `guildId` | `public` | `undefined` \| `string` | `ObjectToLower.guildId` |
| `id` | `public` | `string` | `ObjectToLower.id` |
| `name` | `public` | `string` | `ObjectToLower.name` |
| `nsfw` | `public` | `undefined` \| `boolean` | `ObjectToLower.nsfw` |
| `parentId` | `public` | `undefined` \| `null` \| `string` | `ObjectToLower.parentId` |
| `permissionOverwrites` | `public` | `Object`[] | - |
| `position` | `public` | `number` | `ObjectToLower.position` |
| `rest` | `public` | [`ApiHandler`](/api/classes/apihandler/) | - |
| `type` | `public` | `GuildCategory` | `ObjectToLower.type` |
| `url` | `public` | `string` | - |

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

#### Source

[seyfert/src/structures/channels.ts:131](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L131)

***

### isCategory()

```ts
isCategory(): this is CategoryChannel
```

#### Returns

`this is CategoryChannel`

#### Source

[seyfert/src/structures/channels.ts:111](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L111)

***

### isDM()

```ts
isDM(): this is DMChannel
```

#### Returns

`this is DMChannel`

#### Source

[seyfert/src/structures/channels.ts:87](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L87)

***

### isDirectory()

```ts
isDirectory(): this is DirectoryChannel
```

#### Returns

`this is DirectoryChannel`

#### Source

[seyfert/src/structures/channels.ts:99](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L99)

***

### isForum()

```ts
isForum(): this is ForumChannel
```

#### Returns

`this is ForumChannel`

#### Source

[seyfert/src/structures/channels.ts:91](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L91)

***

### isGuildTextable()

```ts
isGuildTextable(): this is AllGuildTextableChannels
```

#### Returns

`this is AllGuildTextableChannels`

#### Source

[seyfert/src/structures/channels.ts:123](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L123)

***

### isMedia()

```ts
isMedia(): this is MediaChannel
```

#### Returns

`this is MediaChannel`

#### Source

[seyfert/src/structures/channels.ts:83](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L83)

***

### isNews()

```ts
isNews(): this is NewsChannel
```

#### Returns

`this is NewsChannel`

#### Source

[seyfert/src/structures/channels.ts:115](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L115)

***

### isStage()

```ts
isStage(): this is StageChannel
```

#### Returns

`this is StageChannel`

#### Source

[seyfert/src/structures/channels.ts:79](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L79)

***

### isTextGuild()

```ts
isTextGuild(): this is TextGuildChannel
```

#### Returns

`this is TextGuildChannel`

#### Source

[seyfert/src/structures/channels.ts:107](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L107)

***

### isTextable()

```ts
isTextable(): this is AllTextableChannels
```

#### Returns

`this is AllTextableChannels`

#### Source

[seyfert/src/structures/channels.ts:119](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L119)

***

### isThread()

```ts
isThread(): this is ThreadChannel
```

#### Returns

`this is ThreadChannel`

#### Source

[seyfert/src/structures/channels.ts:95](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L95)

***

### isThreadOnly()

```ts
isThreadOnly(): this is MediaChannel | ForumChannel
```

#### Returns

`this is MediaChannel | ForumChannel`

#### Source

[seyfert/src/structures/channels.ts:127](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L127)

***

### isVoice()

```ts
isVoice(): this is VoiceChannel
```

#### Returns

`this is VoiceChannel`

#### Source

[seyfert/src/structures/channels.ts:103](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L103)

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

#### Source

[seyfert/src/structures/channels.ts:197](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L197)

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

#### Source

[seyfert/src/structures/channels.ts:193](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L193)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/channels.ts:75](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/channels.ts#L75)
