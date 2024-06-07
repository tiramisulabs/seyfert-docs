[seyfert](../globals.md) / ThreadChannel

# Class: ThreadChannel

## Extends

- `ObjectToLower`\<`Omit`\<`APIThreadChannel`, `"permission_overwrites"`\>\>.[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`BaseChannel`](BaseChannel.md)\<`ChannelType.PublicThread` \| `ChannelType.AnnouncementThread` \| `ChannelType.PrivateThread`\>

## Constructors

### new ThreadChannel()

```ts
new ThreadChannel(client: UsingClient, data: APIChannelBase<ChannelType>): ThreadChannel
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `data` | `APIChannelBase`\<`ChannelType`\> |

#### Returns

[`ThreadChannel`](ThreadChannel.md)

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`constructor`](BaseChannel.md#constructors)

#### Source

[seyfert/src/structures/channels.ts:49](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L49)

## Properties

| Property | Modifier | Type | Default value | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `appliedTags` | `public` | `string`[] | `undefined` | `ObjectToLower.appliedTags` |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | `undefined` | [`BaseChannel`](BaseChannel.md).`client` |
| `defaultAutoArchiveDuration` | `public` | `undefined` \| `ThreadAutoArchiveDuration` | `undefined` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`defaultAutoArchiveDuration` |
| `defaultThreadRateLimitPerUser` | `public` | `undefined` \| `number` | `undefined` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`defaultThreadRateLimitPerUser` |
| `flags` | `public` | `undefined` \| `ChannelFlags` | `undefined` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`flags` |
| `guildId` | `public` | `undefined` \| `string` | `undefined` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`guildId` |
| `id` | `public` | `string` | `undefined` | [`BaseChannel`](BaseChannel.md).`id` |
| `lastMessageId` | `public` | `undefined` \| `null` \| `string` | `undefined` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`lastMessageId` |
| `lastPinTimestamp` | `public` | `undefined` \| `null` \| `string` | `undefined` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`lastPinTimestamp` |
| `member` | `public` | `undefined` \| \{ `flags`: `ThreadMemberFlags`; `id`: `undefined` \| `string`; `joinTimestamp`: `string`; `member`: `undefined` \| `APIGuildMember`; `userId`: `undefined` \| `string`; \} | `undefined` | `ObjectToLower.member` |
| `memberCount` | `public` | `undefined` \| `number` | `undefined` | `ObjectToLower.memberCount` |
| `messageCount` | `public` | `undefined` \| `number` | `undefined` | `ObjectToLower.messageCount` |
| `messages` | `public` | \{ `crosspost`: (`messageId`: `string`, `reason`?: `string`) => `Promise`\<[`Message`](Message.md)\>; `delete`: (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`void`\>; `edit`: (`messageId`: `string`, `body`: `Omit`\<`RESTPatchAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](Message.md)\>; `fetch`: (`messageId`: `string`) => `Promise`\<[`Message`](Message.md)\>; `purge`: (`messages`: `string`[], `reason`?: `string`) => `Promise`\<`undefined` \| `void`\>; `write`: (`body`: `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps`) => `Promise`\<[`Message`](Message.md)\>; \} | `...` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`messages` |
| `messages.crosspost` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<[`Message`](Message.md)\> | `...` | - |
| `messages.delete` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`void`\> | `...` | - |
| `messages.edit` | `public` | (`messageId`: `string`, `body`: `Omit`\<`RESTPatchAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](Message.md)\> | `...` | - |
| `messages.fetch` | `public` | (`messageId`: `string`) => `Promise`\<[`Message`](Message.md)\> | `...` | - |
| `messages.purge` | `public` | (`messages`: `string`[], `reason`?: `string`) => `Promise`\<`undefined` \| `void`\> | `...` | - |
| `messages.write` | `public` | (`body`: `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps`) => `Promise`\<[`Message`](Message.md)\> | `...` | - |
| `name` | `public` | `string` | `undefined` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`name` |
| `nsfw` | `public` | `undefined` \| `boolean` | `undefined` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`nsfw` |
| `ownerId` | `public` | `undefined` \| `string` | `undefined` | `ObjectToLower.ownerId` |
| `parentId` | `public` | `undefined` \| `null` \| `string` | `undefined` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`parentId` |
| `permissionOverwrites` | `public` | \{ `fetch`: () => [`ReturnCache`](../type-aliases/ReturnCache.md)\<`undefined` \| \{ `allow`: `PermissionsBitField`; `deny`: `PermissionsBitField`; `guildId`: `string`; `id`: `string`; `type`: `number`; \}[]\>; `values`: () => \{ `allow`: `PermissionsBitField`; `deny`: `PermissionsBitField`; `guildId`: `string`; `id`: `string`; `type`: `number`; \}[][]; \} | `...` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`permissionOverwrites` |
| `permissionOverwrites.fetch` | `public` | () => [`ReturnCache`](../type-aliases/ReturnCache.md)\<`undefined` \| \{ `allow`: `PermissionsBitField`; `deny`: `PermissionsBitField`; `guildId`: `string`; `id`: `string`; `type`: `number`; \}[]\> | `...` | - |
| `permissionOverwrites.values` | `public` | () => \{ `allow`: `PermissionsBitField`; `deny`: `PermissionsBitField`; `guildId`: `string`; `id`: `string`; `type`: `number`; \}[][] | `...` | - |
| `pins` | `public` | \{ `delete`: (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\>; `fetch`: () => `Promise`\<[`Message`](Message.md)[]\>; `set`: (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\>; \} | `...` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`pins` |
| `pins.delete` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | `...` | - |
| `pins.fetch` | `public` | () => `Promise`\<[`Message`](Message.md)[]\> | `...` | - |
| `pins.set` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | `...` | - |
| `position` | `public` | `number` | `undefined` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`position` |
| `rateLimitPerUser` | `public` | `undefined` \| `number` | `undefined` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`rateLimitPerUser` |
| `reactions` | `public` | \{ `add`: (`messageId`: `string`, `emoji`: `EmojiResolvable`) => `Promise`\<`void`\>; `delete`: (`messageId`: `string`, `emoji`: `EmojiResolvable`, `userId`: `string`) => `Promise`\<`void`\>; `fetch`: (`messageId`: `string`, `emoji`: `EmojiResolvable`, `query`?: `RESTGetAPIChannelMessageReactionUsersQuery`) => `Promise`\<[`User`](User.md)[]\>; `purge`: (`messageId`: `string`, `emoji`?: `EmojiResolvable`) => `Promise`\<`void`\>; \} | `...` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`reactions` |
| `reactions.add` | `public` | (`messageId`: `string`, `emoji`: `EmojiResolvable`) => `Promise`\<`void`\> | `...` | - |
| `reactions.delete` | `public` | (`messageId`: `string`, `emoji`: `EmojiResolvable`, `userId`: `string`) => `Promise`\<`void`\> | `...` | - |
| `reactions.fetch` | `public` | (`messageId`: `string`, `emoji`: `EmojiResolvable`, `query`?: `RESTGetAPIChannelMessageReactionUsersQuery`) => `Promise`\<[`User`](User.md)[]\> | `...` | - |
| `reactions.purge` | `public` | (`messageId`: `string`, `emoji`?: `EmojiResolvable`) => `Promise`\<`void`\> | `...` | - |
| `threadMetadata` | `public` | `undefined` \| \{ `archiveTimestamp`: `string`; `archived`: `boolean`; `autoArchiveDuration`: `ThreadAutoArchiveDuration`; `createTimestamp`: `undefined` \| `string`; `invitable`: `undefined` \| `boolean`; `locked`: `undefined` \| `boolean`; \} | `undefined` | `ObjectToLower.threadMetadata` |
| `topic` | `public` | `undefined` \| `null` \| `string` | `undefined` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`topic` |
| `totalMessageSent` | `public` | `undefined` \| `number` | `undefined` | `ObjectToLower.totalMessageSent` |
| `type` | `public` | `AnnouncementThread` \| `PublicThread` \| `PrivateThread` | `undefined` | [`BaseChannel`](BaseChannel.md).`type` |
| `webhooks` | `public` | \{ `create`: (`body`: `RESTPostAPIChannelWebhookJSONBody`) => `Promise`\<[`Webhook`](Webhook.md)\>; `list`: () => `Promise`\<[`Webhook`](Webhook.md)[]\>; \} | `...` | - |
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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`guild`](TextBaseGuildChannel.md#guild)

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

### join()

```ts
join(): Promise<ThreadChannel>
```

#### Returns

`Promise`\<[`ThreadChannel`](ThreadChannel.md)\>

#### Source

[seyfert/src/structures/channels.ts:477](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L477)

***

### leave()

```ts
leave(): Promise<ThreadChannel>
```

#### Returns

`Promise`\<[`ThreadChannel`](ThreadChannel.md)\>

#### Source

[seyfert/src/structures/channels.ts:482](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L482)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`memberPermissions`](TextBaseGuildChannel.md#memberpermissions)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`overwritesFor`](TextBaseGuildChannel.md#overwritesfor)

#### Source

[seyfert/src/structures/channels.ts:188](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L188)

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

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Source

[seyfert/src/structures/channels.ts:491](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L491)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`rolePermissions`](TextBaseGuildChannel.md#rolepermissions)

#### Source

[seyfert/src/structures/channels.ts:184](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L184)

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

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Source

[seyfert/src/structures/channels.ts:507](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L507)

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

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Source

[seyfert/src/structures/channels.ts:511](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L511)

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

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Source

[seyfert/src/structures/channels.ts:515](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L515)

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

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Source

[seyfert/src/structures/channels.ts:519](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L519)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`setName`](TextBaseGuildChannel.md#setname)

#### Source

[seyfert/src/structures/channels.ts:204](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L204)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`setParent`](TextBaseGuildChannel.md#setparent)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`setPosition`](TextBaseGuildChannel.md#setposition)

#### Source

[seyfert/src/structures/channels.ts:200](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L200)

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

#### Source

[seyfert/src/structures/channels.ts:487](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L487)

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

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Source

[seyfert/src/structures/channels.ts:499](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L499)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`typing`](TextBaseGuildChannel.md#typing)

#### Source

[seyfert/src/structures/channels.ts:215](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L215)

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

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Source

[seyfert/src/structures/channels.ts:495](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L495)

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
