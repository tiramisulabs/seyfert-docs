---
editUrl: false
next: false
prev: false
title: "ThreadChannel"
---

## Extends

- `ObjectToLower`\<`Omit`\<`APIThreadChannel`, `"permission_overwrites"`\>\>.[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`BaseChannel`](/api/classes/basechannel/)\<`ChannelType.PublicThread` \| `ChannelType.AnnouncementThread` \| `ChannelType.PrivateThread`\>

## Constructors

### new ThreadChannel(client, data)

```ts
new ThreadChannel(client: BaseClient, data: APIChannelBase<ChannelType>): ThreadChannel
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | `BaseClient` |
| `data` | `APIChannelBase`\<`ChannelType`\> |

#### Returns

[`ThreadChannel`](/api/classes/threadchannel/)

#### Inherited from

[`BaseChannel`](/api/classes/basechannel/).[`constructor`](/api/classes/basechannel/#constructors)

#### Source

[seyfert/src/structures/channels.ts:48](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L48)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `appliedTags` | `public` | `string`[] | `ObjectToLower.appliedTags` |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | [`BaseChannel`](/api/classes/basechannel/).`client` |
| `defaultAutoArchiveDuration` | `public` | `undefined` \| `ThreadAutoArchiveDuration` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`defaultAutoArchiveDuration` |
| `defaultThreadRateLimitPerUser` | `public` | `undefined` \| `number` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`defaultThreadRateLimitPerUser` |
| `flags` | `public` | `undefined` \| `ChannelFlags` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`flags` |
| `guildId` | `public` | `undefined` \| `string` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`guildId` |
| `id` | `public` | `string` | [`BaseChannel`](/api/classes/basechannel/).`id` |
| `lastMessageId` | `public` | `undefined` \| `null` \| `string` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`lastMessageId` |
| `lastPinTimestamp` | `public` | `undefined` \| `null` \| `string` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`lastPinTimestamp` |
| `member` | `public` | `undefined` \| `APIThreadMember` | `ObjectToLower.member` |
| `memberCount` | `public` | `undefined` \| `number` | `ObjectToLower.memberCount` |
| `messageCount` | `public` | `undefined` \| `number` | `ObjectToLower.messageCount` |
| `messages` | `public` | `Object` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`messages` |
| `messages.crosspost` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `messages.delete` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`void`\> | - |
| `messages.edit` | `public` | (`messageId`: `string`, `body`: `Omit`\<`RESTPatchAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `messages.fetch` | `public` | (`messageId`: `string`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `messages.purge` | `public` | (`messages`: `string`[], `reason`?: `string`) => `Promise`\<`never`\> | - |
| `messages.write` | `public` | (`body`: `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `name` | `public` | `string` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`name` |
| `nsfw` | `public` | `undefined` \| `boolean` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`nsfw` |
| `ownerId` | `public` | `undefined` \| `string` | `ObjectToLower.ownerId` |
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
| `threadMetadata` | `public` | `undefined` \| `APIThreadMetadata` | `ObjectToLower.threadMetadata` |
| `topic` | `public` | `undefined` \| `null` \| `string` | [`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).`topic` |
| `totalMessageSent` | `public` | `undefined` \| `number` | `ObjectToLower.totalMessageSent` |
| `type` | `public` | `AnnouncementThread` \| `PublicThread` \| `PrivateThread` | [`BaseChannel`](/api/classes/basechannel/).`type` |
| `webhooks` | `public` | `Object` | - |
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

### pin()

```ts
pin(reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Source

[seyfert/src/structures/channels.ts:467](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L467)

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

### setArchived()

```ts
setArchived(archived: boolean, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `archived` | `boolean` | `true` |
| `reason`? | `string` | `undefined` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Source

[seyfert/src/structures/channels.ts:483](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L483)

***

### setAutoArchiveDuration()

```ts
setAutoArchiveDuration(auto_archive_duration: StringToNumber<"60" | "1440" | "4320" | "10080">, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `auto_archive_duration` | `StringToNumber`\<`"60"` \| `"1440"` \| `"4320"` \| `"10080"`\> |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Source

[seyfert/src/structures/channels.ts:487](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L487)

***

### setInvitable()

```ts
setInvitable(invitable: boolean, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `invitable` | `boolean` | `true` |
| `reason`? | `string` | `undefined` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Source

[seyfert/src/structures/channels.ts:491](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L491)

***

### setLocked()

```ts
setLocked(locked: boolean, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `locked` | `boolean` | `true` |
| `reason`? | `string` | `undefined` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Source

[seyfert/src/structures/channels.ts:495](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L495)

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

[seyfert/src/structures/channels.ts:463](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L463)

***

### setTags()

```ts
setTags(applied_tags: string[], reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `applied_tags` | `string`[] |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Source

[seyfert/src/structures/channels.ts:475](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L475)

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

[`TextBaseGuildChannel`](/api/classes/textbaseguildchannel/).[`typing`](/api/classes/textbaseguildchannel/#typing)

#### Source

[seyfert/src/structures/channels.ts:214](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L214)

***

### unpin()

```ts
unpin(reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Source

[seyfert/src/structures/channels.ts:471](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L471)

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
