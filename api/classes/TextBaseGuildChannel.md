[seyfert](../globals.md) / TextBaseGuildChannel

# Class: TextBaseGuildChannel

## Extends

- `ObjectToLower`\<`Omit`\<`APITextChannel`, `"type"` \| `"permission_overwrites"`\>\>.[`MessagesMethods`](MessagesMethods.md).[`BaseGuildChannel`](BaseGuildChannel.md)

## Extended by

- [`TextGuildChannel`](TextGuildChannel.md)
- [`ThreadChannel`](ThreadChannel.md)

## Constructors

### new TextBaseGuildChannel()

```ts
new TextBaseGuildChannel(client: UsingClient, data: APIGuildChannel<ChannelType>): TextBaseGuildChannel
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `data` | `APIGuildChannel`\<`ChannelType`\> |

#### Returns

[`TextBaseGuildChannel`](TextBaseGuildChannel.md)

#### Inherited from

[`BaseGuildChannel`](BaseGuildChannel.md).[`constructor`](BaseGuildChannel.md#constructors)

#### Source

[seyfert/src/structures/channels.ts:170](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L170)

## Properties

| Property | Modifier | Type | Default value | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | `undefined` | [`BaseGuildChannel`](BaseGuildChannel.md).`client` |
| `defaultAutoArchiveDuration` | `public` | `undefined` \| `ThreadAutoArchiveDuration` | `undefined` | `ObjectToLower.defaultAutoArchiveDuration` |
| `defaultThreadRateLimitPerUser` | `public` | `undefined` \| `number` | `undefined` | `ObjectToLower.defaultThreadRateLimitPerUser` |
| `flags` | `public` | `undefined` \| `ChannelFlags` | `undefined` | [`BaseGuildChannel`](BaseGuildChannel.md).`flags` |
| `guildId` | `public` | `undefined` \| `string` | `undefined` | [`BaseGuildChannel`](BaseGuildChannel.md).`guildId` |
| `id` | `public` | `string` | `undefined` | [`BaseGuildChannel`](BaseGuildChannel.md).`id` |
| `lastMessageId` | `public` | `undefined` \| `null` \| `string` | `undefined` | `ObjectToLower.lastMessageId` |
| `lastPinTimestamp` | `public` | `undefined` \| `null` \| `string` | `undefined` | `ObjectToLower.lastPinTimestamp` |
| `messages` | `public` | \{ `crosspost`: (`messageId`: `string`, `reason`?: `string`) => `Promise`\<[`Message`](Message.md)\>; `delete`: (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`void`\>; `edit`: (`messageId`: `string`, `body`: `Omit`\<`RESTPatchAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](Message.md)\>; `fetch`: (`messageId`: `string`) => `Promise`\<[`Message`](Message.md)\>; `purge`: (`messages`: `string`[], `reason`?: `string`) => `Promise`\<`undefined` \| `void`\>; `write`: (`body`: `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps`) => `Promise`\<[`Message`](Message.md)\>; \} | `...` | [`MessagesMethods`](MessagesMethods.md).`messages` |
| `messages.crosspost` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<[`Message`](Message.md)\> | `...` | - |
| `messages.delete` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`void`\> | `...` | - |
| `messages.edit` | `public` | (`messageId`: `string`, `body`: `Omit`\<`RESTPatchAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](Message.md)\> | `...` | - |
| `messages.fetch` | `public` | (`messageId`: `string`) => `Promise`\<[`Message`](Message.md)\> | `...` | - |
| `messages.purge` | `public` | (`messages`: `string`[], `reason`?: `string`) => `Promise`\<`undefined` \| `void`\> | `...` | - |
| `messages.write` | `public` | (`body`: `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps`) => `Promise`\<[`Message`](Message.md)\> | `...` | - |
| `name` | `public` | `string` | `undefined` | [`BaseGuildChannel`](BaseGuildChannel.md).`name` |
| `nsfw` | `public` | `undefined` \| `boolean` | `undefined` | [`BaseGuildChannel`](BaseGuildChannel.md).`nsfw` |
| `parentId` | `public` | `undefined` \| `null` \| `string` | `undefined` | [`BaseGuildChannel`](BaseGuildChannel.md).`parentId` |
| `permissionOverwrites` | `public` | \{ `fetch`: () => [`ReturnCache`](../type-aliases/ReturnCache.md)\<`undefined` \| \{ `allow`: `PermissionsBitField`; `deny`: `PermissionsBitField`; `guildId`: `string`; `id`: `string`; `type`: `number`; \}[]\>; `values`: () => \{ `allow`: `PermissionsBitField`; `deny`: `PermissionsBitField`; `guildId`: `string`; `id`: `string`; `type`: `number`; \}[][]; \} | `...` | [`BaseGuildChannel`](BaseGuildChannel.md).`permissionOverwrites` |
| `permissionOverwrites.fetch` | `public` | () => [`ReturnCache`](../type-aliases/ReturnCache.md)\<`undefined` \| \{ `allow`: `PermissionsBitField`; `deny`: `PermissionsBitField`; `guildId`: `string`; `id`: `string`; `type`: `number`; \}[]\> | `...` | - |
| `permissionOverwrites.values` | `public` | () => \{ `allow`: `PermissionsBitField`; `deny`: `PermissionsBitField`; `guildId`: `string`; `id`: `string`; `type`: `number`; \}[][] | `...` | - |
| `pins` | `public` | \{ `delete`: (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\>; `fetch`: () => `Promise`\<[`Message`](Message.md)[]\>; `set`: (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\>; \} | `...` | [`MessagesMethods`](MessagesMethods.md).`pins` |
| `pins.delete` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | `...` | - |
| `pins.fetch` | `public` | () => `Promise`\<[`Message`](Message.md)[]\> | `...` | - |
| `pins.set` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | `...` | - |
| `position` | `public` | `number` | `undefined` | [`BaseGuildChannel`](BaseGuildChannel.md).`position` |
| `rateLimitPerUser` | `public` | `undefined` \| `number` | `undefined` | `ObjectToLower.rateLimitPerUser` |
| `reactions` | `public` | \{ `add`: (`messageId`: `string`, `emoji`: `EmojiResolvable`) => `Promise`\<`void`\>; `delete`: (`messageId`: `string`, `emoji`: `EmojiResolvable`, `userId`: `string`) => `Promise`\<`void`\>; `fetch`: (`messageId`: `string`, `emoji`: `EmojiResolvable`, `query`?: `RESTGetAPIChannelMessageReactionUsersQuery`) => `Promise`\<[`User`](User.md)[]\>; `purge`: (`messageId`: `string`, `emoji`?: `EmojiResolvable`) => `Promise`\<`void`\>; \} | `...` | [`MessagesMethods`](MessagesMethods.md).`reactions` |
| `reactions.add` | `public` | (`messageId`: `string`, `emoji`: `EmojiResolvable`) => `Promise`\<`void`\> | `...` | - |
| `reactions.delete` | `public` | (`messageId`: `string`, `emoji`: `EmojiResolvable`, `userId`: `string`) => `Promise`\<`void`\> | `...` | - |
| `reactions.fetch` | `public` | (`messageId`: `string`, `emoji`: `EmojiResolvable`, `query`?: `RESTGetAPIChannelMessageReactionUsersQuery`) => `Promise`\<[`User`](User.md)[]\> | `...` | - |
| `reactions.purge` | `public` | (`messageId`: `string`, `emoji`?: `EmojiResolvable`) => `Promise`\<`void`\> | `...` | - |
| `topic` | `public` | `undefined` \| `null` \| `string` | `undefined` | `ObjectToLower.topic` |
| `type` | `public` | `ChannelType` | `undefined` | [`BaseGuildChannel`](BaseGuildChannel.md).`type` |

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`delete`](BaseGuildChannel.md#delete)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`edit`](BaseGuildChannel.md#edit)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`fetch`](BaseGuildChannel.md#fetch)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`guild`](BaseGuildChannel.md#guild)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`is`](BaseGuildChannel.md#is)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`isCategory`](BaseGuildChannel.md#iscategory)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`isDM`](BaseGuildChannel.md#isdm)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`isDirectory`](BaseGuildChannel.md#isdirectory)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`isForum`](BaseGuildChannel.md#isforum)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`isGuildTextable`](BaseGuildChannel.md#isguildtextable)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`isMedia`](BaseGuildChannel.md#ismedia)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`isNews`](BaseGuildChannel.md#isnews)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`isStage`](BaseGuildChannel.md#isstage)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`isTextGuild`](BaseGuildChannel.md#istextguild)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`isTextable`](BaseGuildChannel.md#istextable)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`isThread`](BaseGuildChannel.md#isthread)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`isThreadOnly`](BaseGuildChannel.md#isthreadonly)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`isVoice`](BaseGuildChannel.md#isvoice)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`memberPermissions`](BaseGuildChannel.md#memberpermissions)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`overwritesFor`](BaseGuildChannel.md#overwritesfor)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`rolePermissions`](BaseGuildChannel.md#rolepermissions)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`setName`](BaseGuildChannel.md#setname)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`setParent`](BaseGuildChannel.md#setparent)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`setPosition`](BaseGuildChannel.md#setposition)

#### Source

[seyfert/src/structures/channels.ts:200](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L200)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Inherited from

[`BaseGuildChannel`](BaseGuildChannel.md).[`toString`](BaseGuildChannel.md#tostring)

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

[`MessagesMethods`](MessagesMethods.md).[`typing`](MessagesMethods.md#typing)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`__intent__`](BaseGuildChannel.md#intent)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`__intent__`](BaseGuildChannel.md#intent)

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

[`BaseGuildChannel`](BaseGuildChannel.md).[`allMethods`](BaseGuildChannel.md#allmethods)

#### Source

[seyfert/src/structures/channels.ts:139](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L139)
