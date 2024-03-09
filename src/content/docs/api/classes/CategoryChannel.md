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

[seyfert/src/common/types/util.ts:3](https://github.com/potoland/potocuit/blob/fe122a1/src/common/types/util.ts#L3)

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
| `permissionOverwrites` | `public` | `Object` | - |
| `permissionOverwrites.fetch` | `public` | () => [`ReturnCache`](/api/type-aliases/returncache/)\<`undefined` \| `Object`[]\> | - |
| `permissionOverwrites.values` | `public` | () => `Object`[][] | - |
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

#### Source

[seyfert/src/structures/channels.ts:63](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L63)

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

[seyfert/src/structures/channels.ts:191](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L191)

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

[seyfert/src/structures/channels.ts:134](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L134)

***

### isCategory()

```ts
isCategory(): this is CategoryChannel
```

#### Returns

`this is CategoryChannel`

#### Source

[seyfert/src/structures/channels.ts:114](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L114)

***

### isDM()

```ts
isDM(): this is DMChannel
```

#### Returns

`this is DMChannel`

#### Source

[seyfert/src/structures/channels.ts:90](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L90)

***

### isDirectory()

```ts
isDirectory(): this is DirectoryChannel
```

#### Returns

`this is DirectoryChannel`

#### Source

[seyfert/src/structures/channels.ts:102](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L102)

***

### isForum()

```ts
isForum(): this is ForumChannel
```

#### Returns

`this is ForumChannel`

#### Source

[seyfert/src/structures/channels.ts:94](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L94)

***

### isGuildTextable()

```ts
isGuildTextable(): this is AllGuildTextableChannels
```

#### Returns

`this is AllGuildTextableChannels`

#### Source

[seyfert/src/structures/channels.ts:126](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L126)

***

### isMedia()

```ts
isMedia(): this is MediaChannel
```

#### Returns

`this is MediaChannel`

#### Source

[seyfert/src/structures/channels.ts:86](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L86)

***

### isNews()

```ts
isNews(): this is NewsChannel
```

#### Returns

`this is NewsChannel`

#### Source

[seyfert/src/structures/channels.ts:118](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L118)

***

### isStage()

```ts
isStage(): this is StageChannel
```

#### Returns

`this is StageChannel`

#### Source

[seyfert/src/structures/channels.ts:82](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L82)

***

### isTextGuild()

```ts
isTextGuild(): this is TextGuildChannel
```

#### Returns

`this is TextGuildChannel`

#### Source

[seyfert/src/structures/channels.ts:110](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L110)

***

### isTextable()

```ts
isTextable(): this is AllTextableChannels
```

#### Returns

`this is AllTextableChannels`

#### Source

[seyfert/src/structures/channels.ts:122](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L122)

***

### isThread()

```ts
isThread(): this is ThreadChannel
```

#### Returns

`this is ThreadChannel`

#### Source

[seyfert/src/structures/channels.ts:98](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L98)

***

### isThreadOnly()

```ts
isThreadOnly(): this is MediaChannel | ForumChannel
```

#### Returns

`this is MediaChannel | ForumChannel`

#### Source

[seyfert/src/structures/channels.ts:130](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L130)

***

### isVoice()

```ts
isVoice(): this is VoiceChannel
```

#### Returns

`this is VoiceChannel`

#### Source

[seyfert/src/structures/channels.ts:106](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L106)

***

### memberPermissions()

```ts
memberPermissions(member: GuildMember, checkAdmin: boolean): Promise<PermissionsBitField>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `member` | [`GuildMember`](/api/classes/guildmember/) | `undefined` |
| `checkAdmin` | `boolean` | `true` |

#### Returns

`Promise`\<`PermissionsBitField`\>

#### Source

[seyfert/src/structures/channels.ts:179](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L179)

***

### overwritesFor()

```ts
overwritesFor(member: GuildMember): Promise<Object>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `member` | [`GuildMember`](/api/classes/guildmember/) |

#### Returns

`Promise`\<`Object`\>

> | Member | Type | Value |
> | :------ | :------ | :------ |
> | `everyone` | `undefined` \| `Object` | everyoneOverwrites |
> | `member` | `undefined` \| `Object` | memberOverwrites |
> | `roles` | `Object`[] | roleOverwrites |
>

#### Source

[seyfert/src/structures/channels.ts:187](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L187)

***

### rolePermissions()

```ts
rolePermissions(role: GuildRole, checkAdmin: boolean): Promise<PermissionsBitField>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `role` | [`GuildRole`](/api/classes/guildrole/) | `undefined` |
| `checkAdmin` | `boolean` | `true` |

#### Returns

`Promise`\<`PermissionsBitField`\>

#### Source

[seyfert/src/structures/channels.ts:183](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L183)

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

[seyfert/src/structures/channels.ts:203](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L203)

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

[seyfert/src/structures/channels.ts:199](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L199)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/channels.ts:78](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L78)
