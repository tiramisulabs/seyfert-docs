---
editUrl: false
next: false
prev: false
title: "VoiceChannel"
---

## Extends

- `ObjectToLower`\<`Omit`\<`APIGuildVoiceChannel`, `"permission_overwrites"`\>\>.`Omit`\<[`TextGuildChannel`](/api/classes/textguildchannel/), `"type"`\>.[`VoiceChannelMethods`](/api/classes/voicechannelmethods/).[`WebhookChannelMethods`](/api/classes/webhookchannelmethods/).[`BaseChannel`](/api/classes/basechannel/)\<`ChannelType.GuildVoice`\>

## Constructors

### new VoiceChannel(client, data)

```ts
new VoiceChannel(client: BaseClient, data: APIChannelBase<ChannelType>): VoiceChannel
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | `BaseClient` |
| `data` | `APIChannelBase`\<`ChannelType`\> |

#### Returns

[`VoiceChannel`](/api/classes/voicechannel/)

#### Inherited from

[`BaseChannel`](/api/classes/basechannel/).[`constructor`](/api/classes/basechannel/#constructors)

#### Source

[seyfert/src/structures/channels.ts:48](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L48)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `bitrate` | `public` | `undefined` \| `number` | `ObjectToLower.bitrate` |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | [`BaseChannel`](/api/classes/basechannel/).`client` |
| `defaultAutoArchiveDuration` | `public` | `undefined` \| `ThreadAutoArchiveDuration` | `Omit.defaultAutoArchiveDuration` |
| `defaultThreadRateLimitPerUser` | `public` | `undefined` \| `number` | `Omit.defaultThreadRateLimitPerUser` |
| `flags` | `public` | `undefined` \| `ChannelFlags` | `ObjectToLower.flags` |
| `guildId` | `public` | `undefined` \| `string` | `ObjectToLower.guildId` |
| `id` | `public` | `string` | [`BaseChannel`](/api/classes/basechannel/).`id` |
| `lastMessageId` | `public` | `undefined` \| `null` \| `string` | `ObjectToLower.lastMessageId` |
| `lastPinTimestamp` | `public` | `undefined` \| `null` \| `string` | `Omit.lastPinTimestamp` |
| `messages` | `public` | `Object` | `Omit.messages` |
| `messages.crosspost` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `messages.delete` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`void`\> | - |
| `messages.edit` | `public` | (`messageId`: `string`, `body`: `Omit`\<`RESTPatchAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `messages.fetch` | `public` | (`messageId`: `string`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `messages.purge` | `public` | (`messages`: `string`[], `reason`?: `string`) => `Promise`\<`never`\> | - |
| `messages.write` | `public` | (`body`: `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `name` | `public` | `string` | `ObjectToLower.name` |
| `nsfw` | `public` | `undefined` \| `boolean` | `ObjectToLower.nsfw` |
| `parentId` | `public` | `undefined` \| `null` \| `string` | `ObjectToLower.parentId` |
| `permissionOverwrites` | `public` | `Object` | `Omit.permissionOverwrites` |
| `permissionOverwrites.fetch` | `public` | () => [`ReturnCache`](/api/type-aliases/returncache/)\<`undefined` \| `Object`[]\> | - |
| `permissionOverwrites.values` | `public` | () => `Object`[][] | - |
| `pins` | `public` | `Object` | `Omit.pins` |
| `pins.delete` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | - |
| `pins.fetch` | `public` | () => `Promise`\<[`Message`](/api/classes/message/)[]\> | - |
| `pins.set` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | - |
| `position` | `public` | `number` | `ObjectToLower.position` |
| `rateLimitPerUser` | `public` | `undefined` \| `number` | `ObjectToLower.rateLimitPerUser` |
| `reactions` | `public` | `Object` | `Omit.reactions` |
| `reactions.add` | `public` | (`messageId`: `string`, `emoji`: `EmojiResolvable`) => `Promise`\<`never`\> | - |
| `reactions.delete` | `public` | (`messageId`: `string`, `emoji`: `EmojiResolvable`, `userId`: `string`) => `Promise`\<`never`\> | - |
| `reactions.fetch` | `public` | (`messageId`: `string`, `emoji`: `EmojiResolvable`, `query`?: `RESTGetAPIChannelMessageReactionUsersQuery`) => `Promise`\<[`User`](/api/classes/user/)[]\> | - |
| `reactions.purge` | `public` | (`messageId`: `string`, `emoji`?: `EmojiResolvable`) => `Promise`\<`never`\> | - |
| `rtcRegion` | `public` | `undefined` \| `null` \| `string` | `ObjectToLower.rtcRegion` |
| `topic` | `public` | `undefined` \| `null` \| `string` | `Omit.topic` |
| `type` | `public` | `GuildVoice` | [`BaseChannel`](/api/classes/basechannel/).`type` |
| `userLimit` | `public` | `undefined` \| `number` | `ObjectToLower.userLimit` |
| `videoQualityMode` | `public` | `undefined` \| `VideoQualityMode` | `ObjectToLower.videoQualityMode` |
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

`Omit.guild`

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

`Omit.memberPermissions`

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

`Omit.overwritesFor`

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

`Omit.rolePermissions`

#### Source

[seyfert/src/structures/channels.ts:183](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L183)

***

### setBitrate()

```ts
setBitrate(bitrate: null | number, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `bitrate` | `null` \| `number` |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Inherited from

[`VoiceChannelMethods`](/api/classes/voicechannelmethods/).[`setBitrate`](/api/classes/voicechannelmethods/#setbitrate)

#### Source

[seyfert/src/structures/channels.ts:341](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L341)

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

`Omit.setName`

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

#### Inherited from

`Omit.setNsfw`

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

`Omit.setParent`

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

`Omit.setPosition`

#### Source

[seyfert/src/structures/channels.ts:199](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L199)

***

### setRTC()

```ts
setRTC(rtc_region: null | string, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rtc_region` | `null` \| `string` |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Inherited from

[`VoiceChannelMethods`](/api/classes/voicechannelmethods/).[`setRTC`](/api/classes/voicechannelmethods/#setrtc)

#### Source

[seyfert/src/structures/channels.ts:349](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L349)

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

#### Inherited from

`Omit.setRatelimitPerUser`

#### Source

[seyfert/src/structures/channels.ts:399](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L399)

***

### setUserLimit()

```ts
setUserLimit(user_limit: null | number, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `user_limit` | `null` \| `number` |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Inherited from

[`VoiceChannelMethods`](/api/classes/voicechannelmethods/).[`setUserLimit`](/api/classes/voicechannelmethods/#setuserlimit)

#### Source

[seyfert/src/structures/channels.ts:345](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L345)

***

### setVideoQuality()

```ts
setVideoQuality(quality: "Auto" | "Full", reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `quality` | `"Auto"` \| `"Full"` |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Inherited from

[`VoiceChannelMethods`](/api/classes/voicechannelmethods/).[`setVideoQuality`](/api/classes/voicechannelmethods/#setvideoquality)

#### Source

[seyfert/src/structures/channels.ts:353](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L353)

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
