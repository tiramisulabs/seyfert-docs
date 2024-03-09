---
editUrl: false
next: false
prev: false
title: "TextBaseGuildChannel"
---

## Extends

- `ObjectToLower`\<`Omit`\<`APITextChannel`, `"type"` \| `"permission_overwrites"`\>\>.[`MessagesMethods`](/api/classes/messagesmethods/).[`BaseGuildChannel`](/api/classes/baseguildchannel/)

## Constructors

### new TextBaseGuildChannel(client, data)

```ts
new TextBaseGuildChannel(client: BaseClient, data: APIGuildChannel<ChannelType>): TextBaseGuildChannel
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | `BaseClient` |
| `data` | `APIGuildChannel`\<`ChannelType`\> |

#### Returns

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/)

#### Inherited from

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`constructor`](/api/classes/baseguildchannel/#constructors)

#### Source

[seyfert/src/structures/channels.ts:169](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L169)

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
| `permissionOverwrites` | `public` | `Object` | [`BaseGuildChannel`](/api/classes/baseguildchannel/).`permissionOverwrites` |
| `permissionOverwrites.fetch` | `public` | () => [`ReturnCache`](/api/type-aliases/returncache/)\<`undefined` \| `Object`[]\> | - |
| `permissionOverwrites.values` | `public` | () => `Object`[][] | - |
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

[seyfert/src/structures/channels.ts:195](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L195)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`edit`](/api/classes/baseguildchannel/#edit)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`fetch`](/api/classes/baseguildchannel/#fetch)

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

#### Inherited from

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`guild`](/api/classes/baseguildchannel/#guild)

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

#### Inherited from

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`is`](/api/classes/baseguildchannel/#is)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isCategory`](/api/classes/baseguildchannel/#iscategory)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isDM`](/api/classes/baseguildchannel/#isdm)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isDirectory`](/api/classes/baseguildchannel/#isdirectory)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isForum`](/api/classes/baseguildchannel/#isforum)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isGuildTextable`](/api/classes/baseguildchannel/#isguildtextable)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isMedia`](/api/classes/baseguildchannel/#ismedia)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isNews`](/api/classes/baseguildchannel/#isnews)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isStage`](/api/classes/baseguildchannel/#isstage)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isTextGuild`](/api/classes/baseguildchannel/#istextguild)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isTextable`](/api/classes/baseguildchannel/#istextable)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isThread`](/api/classes/baseguildchannel/#isthread)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isThreadOnly`](/api/classes/baseguildchannel/#isthreadonly)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`isVoice`](/api/classes/baseguildchannel/#isvoice)

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

#### Inherited from

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`memberPermissions`](/api/classes/baseguildchannel/#memberpermissions)

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

#### Inherited from

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`overwritesFor`](/api/classes/baseguildchannel/#overwritesfor)

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

#### Inherited from

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`rolePermissions`](/api/classes/baseguildchannel/#rolepermissions)

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

#### Inherited from

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`setName`](/api/classes/baseguildchannel/#setname)

#### Source

[seyfert/src/structures/channels.ts:203](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L203)

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

[seyfert/src/structures/channels.ts:207](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L207)

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

[seyfert/src/structures/channels.ts:199](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L199)

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

[seyfert/src/structures/channels.ts:78](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L78)

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

[seyfert/src/structures/channels.ts:214](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L214)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`__intent__`](/api/classes/baseguildchannel/#__intent__)

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

[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`allMethods`](/api/classes/baseguildchannel/#allmethods)

#### Source

[seyfert/src/structures/channels.ts:138](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L138)
