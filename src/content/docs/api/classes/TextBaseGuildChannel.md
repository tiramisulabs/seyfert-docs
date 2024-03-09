---
editUrl: false
next: false
prev: false
title: "TextBaseGuildChannel"
---

## Extends

- `ObjectToLower`\<`Omit`\<`APITextChannel`, `"type"`\>\>.[`MessagesMethods`](/api/classes/messagesmethods/).[`BaseGuildChannel`](/api/classes/baseguildchannel/)

## Constructors

### new TextBaseGuildChannel(client, data)

```ts
new TextBaseGuildChannel(client: BaseClient, data: APIChannelBase<ChannelType>): TextBaseGuildChannel
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | `BaseClient` |
| `data` | `APIChannelBase`\<`ChannelType`\> |

#### Returns

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/)

#### Inherited from

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`constructor`](/api/classes/baseguildchannel/#constructors)

#### Source

[seyfert/src/structures/channels.ts:46](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L46)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | [`BaseGuildChannel`](/api/classes/baseguildchannel/).`client` |
| `defaultAutoArchiveDuration` | `public` | `undefined` \| `ThreadAutoArchiveDuration` | `ObjectToLower.defaultAutoArchiveDuration` |
| `defaultThreadRateLimitPerUser` | `public` | `undefined` \| `number` | `ObjectToLower.defaultThreadRateLimitPerUser` |
| `flags` | `public` | `undefined` \| `ChannelFlags` | [`BaseGuildChannel`](/api/classes/baseguildchannel/).`flags` |
| `guildId` | `public` | `undefined` \| `string` | [`BaseGuildChannel`](/api/classes/baseguildchannel/).`guildId` |
| `id` | `public` | `string` | [`BaseGuildChannel`](/api/classes/baseguildchannel/).`id` |
| `lastMessageId` | `public` | `undefined` \| `null` \| `string` | `ObjectToLower.lastMessageId` |
| `lastPinTimestamp` | `public` | `undefined` \| `null` \| `string` | `ObjectToLower.lastPinTimestamp` |
| `messages` | `public` | `Object` | [`MessagesMethods`](/api/classes/messagesmethods/).`messages` |
| `messages.crosspost` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `messages.delete` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`void`\> | - |
| `messages.edit` | `public` | (`messageId`: `string`, `body`: `Omit`\<`RESTPatchAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `messages.fetch` | `public` | (`messageId`: `string`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `messages.purge` | `public` | (`messages`: `string`[], `reason`?: `string`) => `Promise`\<`never`\> | - |
| `messages.write` | `public` | (`body`: `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `name` | `public` | `string` | [`BaseGuildChannel`](/api/classes/baseguildchannel/).`name` |
| `nsfw` | `public` | `undefined` \| `boolean` | [`BaseGuildChannel`](/api/classes/baseguildchannel/).`nsfw` |
| `parentId` | `public` | `undefined` \| `null` \| `string` | [`BaseGuildChannel`](/api/classes/baseguildchannel/).`parentId` |
| `permissionOverwrites` | `public` | `undefined` \| `APIOverwrite`[] | [`BaseGuildChannel`](/api/classes/baseguildchannel/).`permissionOverwrites` |
| `pins` | `public` | `Object` | [`MessagesMethods`](/api/classes/messagesmethods/).`pins` |
| `pins.delete` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | - |
| `pins.fetch` | `public` | () => `Promise`\<[`Message`](/api/classes/message/)[]\> | - |
| `pins.set` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | - |
| `position` | `public` | `number` | [`BaseGuildChannel`](/api/classes/baseguildchannel/).`position` |
| `rateLimitPerUser` | `public` | `undefined` \| `number` | `ObjectToLower.rateLimitPerUser` |
| `reactions` | `public` | `Object` | [`MessagesMethods`](/api/classes/messagesmethods/).`reactions` |
| `reactions.add` | `public` | (`messageId`: `string`, `emoji`: `EmojiResolvable`) => `Promise`\<`never`\> | - |
| `reactions.delete` | `public` | (`messageId`: `string`, `emoji`: `EmojiResolvable`, `userId`: `string`) => `Promise`\<`never`\> | - |
| `reactions.fetch` | `public` | (`messageId`: `string`, `emoji`: `EmojiResolvable`, `query`?: `RESTGetAPIChannelMessageReactionUsersQuery`) => `Promise`\<[`User`](/api/classes/user/)[]\> | - |
| `reactions.purge` | `public` | (`messageId`: `string`, `emoji`?: `EmojiResolvable`) => `Promise`\<`never`\> | - |
| `topic` | `public` | `undefined` \| `null` \| `string` | `ObjectToLower.topic` |
| `type` | `public` | `ChannelType` | [`BaseGuildChannel`](/api/classes/baseguildchannel/).`type` |

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

[seyfert/src/structures/channels.ts:168](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L168)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`delete`](/api/classes/baseguildchannel/#delete)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`edit`](/api/classes/baseguildchannel/#edit)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`fetch`](/api/classes/baseguildchannel/#fetch)

#### Source

[seyfert/src/structures/channels.ts:61](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L61)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`guild`](/api/classes/baseguildchannel/#guild)

#### Source

[seyfert/src/structures/channels.ts:164](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L164)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`is`](/api/classes/baseguildchannel/#is)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isCategory`](/api/classes/baseguildchannel/#iscategory)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isDM`](/api/classes/baseguildchannel/#isdm)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isDirectory`](/api/classes/baseguildchannel/#isdirectory)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isForum`](/api/classes/baseguildchannel/#isforum)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isGuildTextable`](/api/classes/baseguildchannel/#isguildtextable)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isMedia`](/api/classes/baseguildchannel/#ismedia)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isNews`](/api/classes/baseguildchannel/#isnews)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isStage`](/api/classes/baseguildchannel/#isstage)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isTextGuild`](/api/classes/baseguildchannel/#istextguild)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isTextable`](/api/classes/baseguildchannel/#istextable)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isThread`](/api/classes/baseguildchannel/#isthread)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isThreadOnly`](/api/classes/baseguildchannel/#isthreadonly)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isVoice`](/api/classes/baseguildchannel/#isvoice)

#### Source

[seyfert/src/structures/channels.ts:101](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L101)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`setName`](/api/classes/baseguildchannel/#setname)

#### Source

[seyfert/src/structures/channels.ts:176](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L176)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`setParent`](/api/classes/baseguildchannel/#setparent)

#### Source

[seyfert/src/structures/channels.ts:180](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L180)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`setPosition`](/api/classes/baseguildchannel/#setposition)

#### Source

[seyfert/src/structures/channels.ts:172](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L172)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Inherited from

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`toString`](/api/classes/baseguildchannel/#tostring)

#### Source

[seyfert/src/structures/channels.ts:73](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L73)

***

### typing()

```ts
typing(): Promise<never>
```

#### Returns

`Promise`\<`never`\>

#### Inherited from

[`MessagesMethods`](/api/classes/messagesmethods/).[`typing`](/api/classes/messagesmethods/#typing)

#### Source

[seyfert/src/structures/channels.ts:187](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L187)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`__intent__`](/api/classes/baseguildchannel/#__intent__)

##### Source

[seyfert/src/structures/channels.ts:50](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L50)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`__intent__`](/api/classes/baseguildchannel/#__intent__)

##### Source

[seyfert/src/structures/channels.ts:51](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L51)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`allMethods`](/api/classes/baseguildchannel/#allmethods)

#### Source

[seyfert/src/structures/channels.ts:133](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L133)
