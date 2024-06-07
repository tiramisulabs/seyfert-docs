[seyfert](../globals.md) / TextGuildChannel

# Class: TextGuildChannel

## Extends

- `ObjectToLower`\<`Omit`\<`APITextChannel`, `"type"` \| `"permission_overwrites"`\>\>.[`BaseGuildChannel`](BaseGuildChannel.md).[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`WebhookChannelMethods`](WebhookChannelMethods.md)

## Constructors

### new TextGuildChannel()

```ts
new TextGuildChannel(client: UsingClient, data: APIGuildChannel<ChannelType>): TextGuildChannel
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `data` | `APIGuildChannel`\<`ChannelType`\> |

#### Returns

[`TextGuildChannel`](TextGuildChannel.md)

#### Inherited from

[`WebhookChannelMethods`](WebhookChannelMethods.md).[`constructor`](WebhookChannelMethods.md#constructors)

#### Source

[seyfert/src/structures/channels.ts:170](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L170)

## Properties

| Property | Modifier | Type | Default value | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | `undefined` | [`WebhookChannelMethods`](WebhookChannelMethods.md).`client` |
| `defaultAutoArchiveDuration` | `public` | `undefined` \| `ThreadAutoArchiveDuration` | `undefined` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`defaultAutoArchiveDuration` |
| `defaultThreadRateLimitPerUser` | `public` | `undefined` \| `number` | `undefined` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`defaultThreadRateLimitPerUser` |
| `flags` | `public` | `undefined` \| `ChannelFlags` | `undefined` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`flags` |
| `guildId` | `public` | `undefined` \| `string` | `undefined` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`guildId` |
| `id` | `public` | `string` | `undefined` | [`WebhookChannelMethods`](WebhookChannelMethods.md).`id` |
| `lastMessageId` | `public` | `undefined` \| `null` \| `string` | `undefined` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`lastMessageId` |
| `lastPinTimestamp` | `public` | `undefined` \| `null` \| `string` | `undefined` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`lastPinTimestamp` |
| `messages` | `public` | \{ `crosspost`: (`messageId`: `string`, `reason`?: `string`) => `Promise`\<[`Message`](Message.md)\>; `delete`: (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`void`\>; `edit`: (`messageId`: `string`, `body`: `Omit`\<`RESTPatchAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](Message.md)\>; `fetch`: (`messageId`: `string`) => `Promise`\<[`Message`](Message.md)\>; `purge`: (`messages`: `string`[], `reason`?: `string`) => `Promise`\<`undefined` \| `void`\>; `write`: (`body`: `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps`) => `Promise`\<[`Message`](Message.md)\>; \} | `...` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`messages` |
| `messages.crosspost` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<[`Message`](Message.md)\> | `...` | - |
| `messages.delete` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`void`\> | `...` | - |
| `messages.edit` | `public` | (`messageId`: `string`, `body`: `Omit`\<`RESTPatchAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](Message.md)\> | `...` | - |
| `messages.fetch` | `public` | (`messageId`: `string`) => `Promise`\<[`Message`](Message.md)\> | `...` | - |
| `messages.purge` | `public` | (`messages`: `string`[], `reason`?: `string`) => `Promise`\<`undefined` \| `void`\> | `...` | - |
| `messages.write` | `public` | (`body`: `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps`) => `Promise`\<[`Message`](Message.md)\> | `...` | - |
| `name` | `public` | `string` | `undefined` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`name` |
| `nsfw` | `public` | `undefined` \| `boolean` | `undefined` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`nsfw` |
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
| `topic` | `public` | `undefined` \| `null` \| `string` | `undefined` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`topic` |
| `type` | `public` | `GuildText` | `undefined` | [`TextBaseGuildChannel`](TextBaseGuildChannel.md).`type` |
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

[seyfert/src/structures/channels.ts:196](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L196)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`delete`](TextBaseGuildChannel.md#delete)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`edit`](TextBaseGuildChannel.md#edit)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`fetch`](TextBaseGuildChannel.md#fetch)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`is`](TextBaseGuildChannel.md#is)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`isCategory`](TextBaseGuildChannel.md#iscategory)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`isDM`](TextBaseGuildChannel.md#isdm)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`isDirectory`](TextBaseGuildChannel.md#isdirectory)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`isForum`](TextBaseGuildChannel.md#isforum)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`isGuildTextable`](TextBaseGuildChannel.md#isguildtextable)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`isMedia`](TextBaseGuildChannel.md#ismedia)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`isNews`](TextBaseGuildChannel.md#isnews)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`isStage`](TextBaseGuildChannel.md#isstage)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`isTextGuild`](TextBaseGuildChannel.md#istextguild)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`isTextable`](TextBaseGuildChannel.md#istextable)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`isThread`](TextBaseGuildChannel.md#isthread)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`isThreadOnly`](TextBaseGuildChannel.md#isthreadonly)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`isVoice`](TextBaseGuildChannel.md#isvoice)

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

[seyfert/src/structures/channels.ts:413](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L413)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Inherited from

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`toString`](TextBaseGuildChannel.md#tostring)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`__intent__`](TextBaseGuildChannel.md#intent)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`__intent__`](TextBaseGuildChannel.md#intent)

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

[`TextBaseGuildChannel`](TextBaseGuildChannel.md).[`allMethods`](TextBaseGuildChannel.md#allmethods)

#### Source

[seyfert/src/structures/channels.ts:139](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L139)
