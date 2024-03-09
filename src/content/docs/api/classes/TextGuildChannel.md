---
editUrl: false
next: false
prev: false
title: "TextGuildChannel"
---

## Extends

- `ObjectToLower`\<`Omit`\<`APITextChannel`, `"type"` \| `"permission_overwrites"`\>\>.[`BaseGuildChannel`](/api/classes/baseguildchannel/).[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`WebhookChannelMethods`](/api/classes/webhookchannelmethods/)

## Constructors

### new TextGuildChannel(client, data)

```ts
new TextGuildChannel(client: BaseClient, data: APIGuildChannel<ChannelType>): TextGuildChannel
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | `BaseClient` |
| `data` | `APIGuildChannel`\<`ChannelType`\> |

#### Returns

[`TextGuildChannel`](/api/classes/textguildchannel/)

#### Inherited from

[`WebhookChannelMethods`](/api/classes/webhookchannelmethods/).[`constructor`](/api/classes/webhookchannelmethods/#constructors)

#### Source

[seyfert/src/structures/channels.ts:169](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L169)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | [`WebhookChannelMethods`](/api/classes/webhookchannelmethods/).`client` |
| `defaultAutoArchiveDuration` | `public` | `undefined` \| `ThreadAutoArchiveDuration` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`defaultAutoArchiveDuration` |
| `defaultThreadRateLimitPerUser` | `public` | `undefined` \| `number` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`defaultThreadRateLimitPerUser` |
| `flags` | `public` | `undefined` \| `ChannelFlags` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`flags` |
| `guildId` | `public` | `undefined` \| `string` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`guildId` |
| `id` | `public` | `string` | [`WebhookChannelMethods`](/api/classes/webhookchannelmethods/).`id` |
| `lastMessageId` | `public` | `undefined` \| `null` \| `string` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`lastMessageId` |
| `lastPinTimestamp` | `public` | `undefined` \| `null` \| `string` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`lastPinTimestamp` |
| `messages` | `public` | `Object` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`messages` |
| `messages.crosspost` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `messages.delete` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`void`\> | - |
| `messages.edit` | `public` | (`messageId`: `string`, `body`: `Omit`\<`RESTPatchAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `messages.fetch` | `public` | (`messageId`: `string`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `messages.purge` | `public` | (`messages`: `string`[], `reason`?: `string`) => `Promise`\<`never`\> | - |
| `messages.write` | `public` | (`body`: `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `name` | `public` | `string` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`name` |
| `nsfw` | `public` | `undefined` \| `boolean` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`nsfw` |
| `parentId` | `public` | `undefined` \| `null` \| `string` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`parentId` |
| `permissionOverwrites` | `public` | `Object` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`permissionOverwrites` |
| `permissionOverwrites.fetch` | `public` | () => [`ReturnCache`](/api/type-aliases/returncache/)\<`undefined` \| `Object`[]\> | - |
| `permissionOverwrites.values` | `public` | () => `Object`[][] | - |
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
| `topic` | `public` | `undefined` \| `null` \| `string` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`topic` |
| `type` | `public` | `GuildText` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`type` |
| `webhooks` | `public` | `Object` | [`WebhookChannelMethods`](/api/classes/webhookchannelmethods/).`webhooks` |
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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`delete`](/api/classes/textbaseguildchannel/#delete)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`edit`](/api/classes/textbaseguildchannel/#edit)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`fetch`](/api/classes/textbaseguildchannel/#fetch)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`guild`](/api/classes/textbaseguildchannel/#guild)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`is`](/api/classes/textbaseguildchannel/#is)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`isCategory`](/api/classes/textbaseguildchannel/#iscategory)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`isDM`](/api/classes/textbaseguildchannel/#isdm)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`isDirectory`](/api/classes/textbaseguildchannel/#isdirectory)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`isForum`](/api/classes/textbaseguildchannel/#isforum)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`isGuildTextable`](/api/classes/textbaseguildchannel/#isguildtextable)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`isMedia`](/api/classes/textbaseguildchannel/#ismedia)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`isNews`](/api/classes/textbaseguildchannel/#isnews)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`isStage`](/api/classes/textbaseguildchannel/#isstage)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`isTextGuild`](/api/classes/textbaseguildchannel/#istextguild)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`isTextable`](/api/classes/textbaseguildchannel/#istextable)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`isThread`](/api/classes/textbaseguildchannel/#isthread)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`isThreadOnly`](/api/classes/textbaseguildchannel/#isthreadonly)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`isVoice`](/api/classes/textbaseguildchannel/#isvoice)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`memberPermissions`](/api/classes/textbaseguildchannel/#memberpermissions)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`overwritesFor`](/api/classes/textbaseguildchannel/#overwritesfor)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`rolePermissions`](/api/classes/textbaseguildchannel/#rolepermissions)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`setName`](/api/classes/textbaseguildchannel/#setname)

#### Source

[seyfert/src/structures/channels.ts:203](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L203)

***

### setNsfw()

```ts
setNsfw(nsfw: boolean, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `nsfw` | `boolean` | `true` |
| `reason`? | `string` | `undefined` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Source

[seyfert/src/structures/channels.ts:403](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L403)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`setPosition`](/api/classes/textbaseguildchannel/#setposition)

#### Source

[seyfert/src/structures/channels.ts:199](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L199)

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

[seyfert/src/structures/channels.ts:399](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L399)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Inherited from

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`toString`](/api/classes/textbaseguildchannel/#tostring)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`typing`](/api/classes/textbaseguildchannel/#typing)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`__intent__`](/api/classes/textbaseguildchannel/#__intent__)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`__intent__`](/api/classes/textbaseguildchannel/#__intent__)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`allMethods`](/api/classes/textbaseguildchannel/#allmethods)

#### Source

[seyfert/src/structures/channels.ts:138](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L138)
