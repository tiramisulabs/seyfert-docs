[seyfert](../globals.md) / VoiceChannel

# Class: VoiceChannel

## Extends

- `ObjectToLower`\<`Omit`\<`APIGuildVoiceChannel`, `"permission_overwrites"`\>\>.`Omit`\<[`TextGuildChannel`](TextGuildChannel.md), `"type"`\>.[`VoiceChannelMethods`](VoiceChannelMethods.md).[`WebhookChannelMethods`](WebhookChannelMethods.md).[`BaseChannel`](BaseChannel.md)\<`ChannelType.GuildVoice`\>

## Constructors

### new VoiceChannel()

```ts
new VoiceChannel(client: UsingClient, data: APIChannelBase<ChannelType>): VoiceChannel
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `data` | `APIChannelBase`\<`ChannelType`\> |

#### Returns

[`VoiceChannel`](VoiceChannel.md)

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`constructor`](BaseChannel.md#constructors)

#### Source

[seyfert/src/structures/channels.ts:49](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L49)

## Properties

| Property | Modifier | Type | Default value | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `bitrate` | `public` | `undefined` \| `number` | `undefined` | `ObjectToLower.bitrate` |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | `undefined` | [`BaseChannel`](BaseChannel.md).`client` |
| `defaultAutoArchiveDuration` | `public` | `undefined` \| `ThreadAutoArchiveDuration` | `undefined` | `Omit.defaultAutoArchiveDuration` |
| `defaultThreadRateLimitPerUser` | `public` | `undefined` \| `number` | `undefined` | `Omit.defaultThreadRateLimitPerUser` |
| `flags` | `public` | `undefined` \| `ChannelFlags` | `undefined` | `ObjectToLower.flags` |
| `guildId` | `public` | `undefined` \| `string` | `undefined` | [`VoiceChannelMethods`](VoiceChannelMethods.md).`guildId` |
| `id` | `public` | `string` | `undefined` | [`BaseChannel`](BaseChannel.md).`id` |
| `lastMessageId` | `public` | `undefined` \| `null` \| `string` | `undefined` | `ObjectToLower.lastMessageId` |
| `lastPinTimestamp` | `public` | `undefined` \| `null` \| `string` | `undefined` | `Omit.lastPinTimestamp` |
| `messages` | `public` | \{ `crosspost`: (`messageId`: `string`, `reason`?: `string`) => `Promise`\<[`Message`](Message.md)\>; `delete`: (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`void`\>; `edit`: (`messageId`: `string`, `body`: `Omit`\<`RESTPatchAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](Message.md)\>; `fetch`: (`messageId`: `string`) => `Promise`\<[`Message`](Message.md)\>; `purge`: (`messages`: `string`[], `reason`?: `string`) => `Promise`\<`undefined` \| `void`\>; `write`: (`body`: `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps`) => `Promise`\<[`Message`](Message.md)\>; \} | `...` | `Omit.messages` |
| `messages.crosspost` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<[`Message`](Message.md)\> | `...` | - |
| `messages.delete` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`void`\> | `...` | - |
| `messages.edit` | `public` | (`messageId`: `string`, `body`: `Omit`\<`RESTPatchAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](Message.md)\> | `...` | - |
| `messages.fetch` | `public` | (`messageId`: `string`) => `Promise`\<[`Message`](Message.md)\> | `...` | - |
| `messages.purge` | `public` | (`messages`: `string`[], `reason`?: `string`) => `Promise`\<`undefined` \| `void`\> | `...` | - |
| `messages.write` | `public` | (`body`: `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps`) => `Promise`\<[`Message`](Message.md)\> | `...` | - |
| `name` | `public` | `string` | `undefined` | `ObjectToLower.name` |
| `nsfw` | `public` | `undefined` \| `boolean` | `undefined` | `ObjectToLower.nsfw` |
| `parentId` | `public` | `undefined` \| `null` \| `string` | `undefined` | `ObjectToLower.parentId` |
| `permissionOverwrites` | `public` | \{ `fetch`: () => [`ReturnCache`](../type-aliases/ReturnCache.md)\<`undefined` \| \{ `allow`: `PermissionsBitField`; `deny`: `PermissionsBitField`; `guildId`: `string`; `id`: `string`; `type`: `number`; \}[]\>; `values`: () => \{ `allow`: `PermissionsBitField`; `deny`: `PermissionsBitField`; `guildId`: `string`; `id`: `string`; `type`: `number`; \}[][]; \} | `...` | `Omit.permissionOverwrites` |
| `permissionOverwrites.fetch` | `public` | () => [`ReturnCache`](../type-aliases/ReturnCache.md)\<`undefined` \| \{ `allow`: `PermissionsBitField`; `deny`: `PermissionsBitField`; `guildId`: `string`; `id`: `string`; `type`: `number`; \}[]\> | `...` | - |
| `permissionOverwrites.values` | `public` | () => \{ `allow`: `PermissionsBitField`; `deny`: `PermissionsBitField`; `guildId`: `string`; `id`: `string`; `type`: `number`; \}[][] | `...` | - |
| `pins` | `public` | \{ `delete`: (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\>; `fetch`: () => `Promise`\<[`Message`](Message.md)[]\>; `set`: (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\>; \} | `...` | `Omit.pins` |
| `pins.delete` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | `...` | - |
| `pins.fetch` | `public` | () => `Promise`\<[`Message`](Message.md)[]\> | `...` | - |
| `pins.set` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | `...` | - |
| `position` | `public` | `number` | `undefined` | `ObjectToLower.position` |
| `rateLimitPerUser` | `public` | `undefined` \| `number` | `undefined` | `ObjectToLower.rateLimitPerUser` |
| `reactions` | `public` | \{ `add`: (`messageId`: `string`, `emoji`: `EmojiResolvable`) => `Promise`\<`void`\>; `delete`: (`messageId`: `string`, `emoji`: `EmojiResolvable`, `userId`: `string`) => `Promise`\<`void`\>; `fetch`: (`messageId`: `string`, `emoji`: `EmojiResolvable`, `query`?: `RESTGetAPIChannelMessageReactionUsersQuery`) => `Promise`\<[`User`](User.md)[]\>; `purge`: (`messageId`: `string`, `emoji`?: `EmojiResolvable`) => `Promise`\<`void`\>; \} | `...` | `Omit.reactions` |
| `reactions.add` | `public` | (`messageId`: `string`, `emoji`: `EmojiResolvable`) => `Promise`\<`void`\> | `...` | - |
| `reactions.delete` | `public` | (`messageId`: `string`, `emoji`: `EmojiResolvable`, `userId`: `string`) => `Promise`\<`void`\> | `...` | - |
| `reactions.fetch` | `public` | (`messageId`: `string`, `emoji`: `EmojiResolvable`, `query`?: `RESTGetAPIChannelMessageReactionUsersQuery`) => `Promise`\<[`User`](User.md)[]\> | `...` | - |
| `reactions.purge` | `public` | (`messageId`: `string`, `emoji`?: `EmojiResolvable`) => `Promise`\<`void`\> | `...` | - |
| `rtcRegion` | `public` | `undefined` \| `null` \| `string` | `undefined` | `ObjectToLower.rtcRegion` |
| `topic` | `public` | `undefined` \| `null` \| `string` | `undefined` | `Omit.topic` |
| `type` | `public` | `GuildVoice` | `undefined` | [`BaseChannel`](BaseChannel.md).`type` |
| `userLimit` | `public` | `undefined` \| `number` | `undefined` | `ObjectToLower.userLimit` |
| `videoQualityMode` | `public` | `undefined` \| `VideoQualityMode` | `undefined` | `ObjectToLower.videoQualityMode` |
| `webhooks` | `public` | \{ `create`: (`body`: `RESTPostAPIChannelWebhookJSONBody`) => `Promise`\<[`Webhook`](Webhook.md)\>; `list`: () => `Promise`\<[`Webhook`](Webhook.md)[]\>; \} | `...` | [`WebhookChannelMethods`](WebhookChannelMethods.md).`webhooks` |
| `webhooks.create` | `public` | (`body`: `RESTPostAPIChannelWebhookJSONBody`) => `Promise`\<[`Webhook`](Webhook.md)\> | `...` | - |
| `webhooks.list` | `public` | () => `Promise`\<[`Webhook`](Webhook.md)[]\> | `...` | - |

## Accessors

### createdAt

```ts
get createdAt(): Date
```

createdAt gets the creation Date instace of the current object.

#### Returns

`Date`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:27](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/DiscordBase.ts#L27)

***

### createdTimestamp

```ts
get createdTimestamp(): number
```

Create a timestamp for the current object.

#### Returns

`number`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:20](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/DiscordBase.ts#L20)

***

### url

```ts
get url(): string
```

The URL to the channel

#### Returns

`string`

#### Source

[seyfert/src/structures/channels.ts:60](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L60)

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

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`delete`](BaseChannel.md#delete)

#### Source

[seyfert/src/structures/channels.ts:68](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L68)

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

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`edit`](BaseChannel.md#edit)

#### Source

[seyfert/src/structures/channels.ts:72](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L72)

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

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`fetch`](BaseChannel.md#fetch)

#### Source

[seyfert/src/structures/channels.ts:64](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L64)

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

`Promise`\<[`Guild`](Guild.md)\<`"cached"`\> \| [`Guild`](Guild.md)\<`"api"`\>\>

#### Inherited from

`Omit.guild`

#### Source

[seyfert/src/structures/channels.ts:192](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L192)

***

### is()

```ts
is<T>(channelTypes: T): this is IChannelTypes[T[number]]
```

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* keyof `IChannelTypes`[] |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channelTypes` | `T` |

#### Returns

`this is IChannelTypes[T[number]]`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`is`](BaseChannel.md#is)

#### Source

[seyfert/src/structures/channels.ts:135](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L135)

***

### isCategory()

```ts
isCategory(): this is CategoryChannel
```

#### Returns

`this is CategoryChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isCategory`](BaseChannel.md#iscategory)

#### Source

[seyfert/src/structures/channels.ts:115](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L115)

***

### isDM()

```ts
isDM(): this is DMChannel
```

#### Returns

`this is DMChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isDM`](BaseChannel.md#isdm)

#### Source

[seyfert/src/structures/channels.ts:91](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L91)

***

### isDirectory()

```ts
isDirectory(): this is DirectoryChannel
```

#### Returns

`this is DirectoryChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isDirectory`](BaseChannel.md#isdirectory)

#### Source

[seyfert/src/structures/channels.ts:103](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L103)

***

### isForum()

```ts
isForum(): this is ForumChannel
```

#### Returns

`this is ForumChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isForum`](BaseChannel.md#isforum)

#### Source

[seyfert/src/structures/channels.ts:95](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L95)

***

### isGuildTextable()

```ts
isGuildTextable(): this is AllGuildTextableChannels
```

#### Returns

`this is AllGuildTextableChannels`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isGuildTextable`](BaseChannel.md#isguildtextable)

#### Source

[seyfert/src/structures/channels.ts:127](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L127)

***

### isMedia()

```ts
isMedia(): this is MediaChannel
```

#### Returns

`this is MediaChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isMedia`](BaseChannel.md#ismedia)

#### Source

[seyfert/src/structures/channels.ts:87](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L87)

***

### isNews()

```ts
isNews(): this is NewsChannel
```

#### Returns

`this is NewsChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isNews`](BaseChannel.md#isnews)

#### Source

[seyfert/src/structures/channels.ts:119](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L119)

***

### isStage()

```ts
isStage(): this is StageChannel
```

#### Returns

`this is StageChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isStage`](BaseChannel.md#isstage)

#### Source

[seyfert/src/structures/channels.ts:83](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L83)

***

### isTextGuild()

```ts
isTextGuild(): this is TextGuildChannel
```

#### Returns

`this is TextGuildChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isTextGuild`](BaseChannel.md#istextguild)

#### Source

[seyfert/src/structures/channels.ts:111](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L111)

***

### isTextable()

```ts
isTextable(): this is AllTextableChannels
```

#### Returns

`this is AllTextableChannels`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isTextable`](BaseChannel.md#istextable)

#### Source

[seyfert/src/structures/channels.ts:123](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L123)

***

### isThread()

```ts
isThread(): this is ThreadChannel
```

#### Returns

`this is ThreadChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isThread`](BaseChannel.md#isthread)

#### Source

[seyfert/src/structures/channels.ts:99](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L99)

***

### isThreadOnly()

```ts
isThreadOnly(): this is MediaChannel | ForumChannel
```

#### Returns

this is MediaChannel \| ForumChannel

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isThreadOnly`](BaseChannel.md#isthreadonly)

#### Source

[seyfert/src/structures/channels.ts:131](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L131)

***

### isVoice()

```ts
isVoice(): this is VoiceChannel
```

#### Returns

`this is VoiceChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isVoice`](BaseChannel.md#isvoice)

#### Source

[seyfert/src/structures/channels.ts:107](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L107)

***

### memberPermissions()

```ts
memberPermissions(member: GuildMember, checkAdmin: boolean): Promise<PermissionsBitField>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `member` | [`GuildMember`](GuildMember.md) | `undefined` |
| `checkAdmin` | `boolean` | `true` |

#### Returns

`Promise`\<`PermissionsBitField`\>

#### Inherited from

`Omit.memberPermissions`

#### Source

[seyfert/src/structures/channels.ts:180](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L180)

***

### overwritesFor()

```ts
overwritesFor(member: GuildMember): Promise<{
  everyone: everyoneOverwrites;
  member: memberOverwrites;
  roles: roleOverwrites;
}>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `member` | [`GuildMember`](GuildMember.md) |

#### Returns

`Promise`\<\{
  `everyone`: `everyoneOverwrites`;
  `member`: `memberOverwrites`;
  `roles`: `roleOverwrites`;
 \}\>

| Member | Type | Value |
| :------ | :------ | :------ |
| `everyone` | `undefined` \| \{
  `allow`: `PermissionsBitField`;
  `deny`: `PermissionsBitField`;
  `guildId`: `string`;
  `id`: `string`;
  `type`: `number`;
 \} | everyoneOverwrites |
| `member` | `undefined` \| \{
  `allow`: `PermissionsBitField`;
  `deny`: `PermissionsBitField`;
  `guildId`: `string`;
  `id`: `string`;
  `type`: `number`;
 \} | memberOverwrites |
| `roles` | \{
  `allow`: `PermissionsBitField`;
  `deny`: `PermissionsBitField`;
  `guildId`: `string`;
  `id`: `string`;
  `type`: `number`;
 \}[] | roleOverwrites |

#### Inherited from

`Omit.overwritesFor`

#### Source

[seyfert/src/structures/channels.ts:188](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L188)

***

### rolePermissions()

```ts
rolePermissions(role: GuildRole, checkAdmin: boolean): Promise<PermissionsBitField>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `role` | [`GuildRole`](GuildRole.md) | `undefined` |
| `checkAdmin` | `boolean` | `true` |

#### Returns

`Promise`\<`PermissionsBitField`\>

#### Inherited from

`Omit.rolePermissions`

#### Source

[seyfert/src/structures/channels.ts:184](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L184)

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

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Inherited from

[`VoiceChannelMethods`](VoiceChannelMethods.md).[`setBitrate`](VoiceChannelMethods.md#setbitrate)

#### Source

[seyfert/src/structures/channels.ts:354](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L354)

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

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Inherited from

`Omit.setName`

#### Source

[seyfert/src/structures/channels.ts:204](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L204)

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

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Inherited from

`Omit.setNsfw`

#### Source

[seyfert/src/structures/channels.ts:417](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L417)

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

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Inherited from

`Omit.setParent`

#### Source

[seyfert/src/structures/channels.ts:208](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L208)

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

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Inherited from

`Omit.setPosition`

#### Source

[seyfert/src/structures/channels.ts:200](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L200)

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

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Inherited from

[`VoiceChannelMethods`](VoiceChannelMethods.md).[`setRTC`](VoiceChannelMethods.md#setrtc)

#### Source

[seyfert/src/structures/channels.ts:362](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L362)

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

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Inherited from

`Omit.setRatelimitPerUser`

#### Source

[seyfert/src/structures/channels.ts:413](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L413)

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

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Inherited from

[`VoiceChannelMethods`](VoiceChannelMethods.md).[`setUserLimit`](VoiceChannelMethods.md#setuserlimit)

#### Source

[seyfert/src/structures/channels.ts:358](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L358)

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

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Inherited from

[`VoiceChannelMethods`](VoiceChannelMethods.md).[`setVideoQuality`](VoiceChannelMethods.md#setvideoquality)

#### Source

[seyfert/src/structures/channels.ts:366](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L366)

***

### setVoiceState()

```ts
setVoiceState(status: null | string): Promise<never>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `status` | `null` \| `string` | `null` |

#### Returns

`Promise`\<`never`\>

#### Inherited from

[`VoiceChannelMethods`](VoiceChannelMethods.md).[`setVoiceState`](VoiceChannelMethods.md#setvoicestate)

#### Source

[seyfert/src/structures/channels.ts:370](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L370)

***

### states()

```ts
states(): Promise<VoiceState[]>
```

#### Returns

`Promise`\<[`VoiceState`](VoiceState.md)[]\>

#### Inherited from

[`VoiceChannelMethods`](VoiceChannelMethods.md).[`states`](VoiceChannelMethods.md#states)

#### Source

[seyfert/src/structures/channels.ts:374](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L374)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`toString`](BaseChannel.md#tostring)

#### Source

[seyfert/src/structures/channels.ts:79](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L79)

***

### typing()

```ts
typing(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Omit.typing`

#### Source

[seyfert/src/structures/channels.ts:215](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L215)

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

[`BaseChannel`](BaseChannel.md).[`__intent__`](BaseChannel.md#intent)

##### Source

[seyfert/src/structures/channels.ts:53](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L53)

#### \_\_intent\_\_(id)

```ts
static __intent__(id: string): "DirectMessages" | "Guilds"
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

##### Returns

`"DirectMessages"` \| `"Guilds"`

##### Inherited from

[`BaseChannel`](BaseChannel.md).[`__intent__`](BaseChannel.md#intent)

##### Source

[seyfert/src/structures/channels.ts:54](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L54)

***

### allMethods()

```ts
static allMethods(ctx: {
  client: UsingClient;
  guildId: string;
 }): {
  create: (body: RESTPostAPIGuildChannelJSONBody) => Promise<AllChannels>;
  delete: (id: string, reason?: string) => Promise<AllChannels>;
  edit: (id: string, body: RESTPatchAPIChannelJSONBody, reason?: string) => Promise<AllChannels>;
  editPositions: (body: RESTPatchAPIGuildChannelPositionsJSONBody) => Promise<never>;
  fetch: (id: string, force: boolean) => Promise<AllChannels>;
  list: (force: boolean) => Promise<AllChannels[]>;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ctx` | `object` |
| `ctx.client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `ctx.guildId` | `string` |

#### Returns

```ts
{
  create: (body: RESTPostAPIGuildChannelJSONBody) => Promise<AllChannels>;
  delete: (id: string, reason?: string) => Promise<AllChannels>;
  edit: (id: string, body: RESTPatchAPIChannelJSONBody, reason?: string) => Promise<AllChannels>;
  editPositions: (body: RESTPatchAPIGuildChannelPositionsJSONBody) => Promise<never>;
  fetch: (id: string, force: boolean) => Promise<AllChannels>;
  list: (force: boolean) => Promise<AllChannels[]>;
}
```

| Member | Type | Value |
| :------ | :------ | :------ |
| `create` | (`body`: `RESTPostAPIGuildChannelJSONBody`) => `Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\> | ... |
| `delete` | (`id`: `string`, `reason`?: `string`) => `Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\> | ... |
| `edit` | (`id`: `string`, `body`: `RESTPatchAPIChannelJSONBody`, `reason`?: `string`) => `Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\> | ... |
| `editPositions` | (`body`: `RESTPatchAPIGuildChannelPositionsJSONBody`) => `Promise`\<`never`\> | ... |
| `fetch` | (`id`: `string`, `force`: `boolean`) => `Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\> | ... |
| `list` | (`force`: `boolean`) => `Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)[]\> | ... |

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`allMethods`](BaseChannel.md#allmethods)

#### Source

[seyfert/src/structures/channels.ts:139](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L139)
