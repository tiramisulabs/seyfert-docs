[seyfert](../globals.md) / CategoryChannel

# Class: CategoryChannel

## Extends

- `ObjectToLower`\<`Omit`\<`APIGuildCategoryChannel`, `"permission_overwrites"`\>\>.\{
  `api`: [`APIRoutes`](../type-aliases/APIRoutes.md);
  `cache`: [`Cache`](Cache.md);
  `client`: [`UsingClient`](../interfaces/UsingClient.md);
  `createdAt`: `Date`;
  `createdTimestamp`: `number`;
  `flags`: `undefined` \| `ChannelFlags`;
  `guildId`: `undefined` \| `string`;
  `id`: `string`;
  `name`: `string`;
  `nsfw`: `undefined` \| `boolean`;
  `parentId`: `undefined` \| `null` \| `string`;
  `permissionOverwrites`: \{
     `fetch`: () => [`ReturnCache`](../type-aliases/ReturnCache.md)\<`undefined` \| \{
        `allow`: `PermissionsBitField`;
        `deny`: `PermissionsBitField`;
        `guildId`: `string`;
        `id`: `string`;
        `type`: `number`;
       \}[]\>;
     `values`: () => \{
        `allow`: `PermissionsBitField`;
        `deny`: `PermissionsBitField`;
        `guildId`: `string`;
        `id`: `string`;
        `type`: `number`;
       \}[][];
    \};
  `position`: `number`;
  `rest`: [`ApiHandler`](ApiHandler.md);
  `url`: `string`;
  `delete`: `Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>;
  `edit`: `Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>;
  `fetch`: `Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>;
  `guild`: `Promise`\<[`Guild`](Guild.md)\<`"cached"`\> \| [`Guild`](Guild.md)\<`"api"`\>\>;
  `is`: `this is IChannelTypes[T[number]]`;
  `isCategory`: `this is CategoryChannel`;
  `isDM`: `this is DMChannel`;
  `isDirectory`: `this is DirectoryChannel`;
  `isForum`: `this is ForumChannel`;
  `isGuildTextable`: `this is AllGuildTextableChannels`;
  `isMedia`: `this is MediaChannel`;
  `isNews`: `this is NewsChannel`;
  `isStage`: `this is StageChannel`;
  `isTextGuild`: `this is TextGuildChannel`;
  `isTextable`: `this is AllTextableChannels`;
  `isThread`: `this is ThreadChannel`;
  `isThreadOnly`: this is MediaChannel \| ForumChannel;
  `isVoice`: `this is VoiceChannel`;
  `memberPermissions`: `Promise`\<`PermissionsBitField`\>;
  `overwritesFor`: `Promise`\<\{
     `everyone`: `everyoneOverwrites`;
     `member`: `memberOverwrites`;
     `roles`: `roleOverwrites`;
    \}\>;
  `rolePermissions`: `Promise`\<`PermissionsBitField`\>;
  `setName`: `Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>;
  `setPosition`: `Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>;
  `toString`: `string`;
 \}

## Constructors

### new CategoryChannel()

```ts
new CategoryChannel(...args: any[]): CategoryChannel
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `any`[] |

#### Returns

[`CategoryChannel`](CategoryChannel.md)

#### Inherited from

`ObjectToLower<Omit<APIGuildCategoryChannel, 'permission_overwrites'>>.constructor`

#### Source

[seyfert/src/common/types/util.ts:3](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/types/util.ts#L3)

## Properties

| Property | Modifier | Type | Default value | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `api` | `public` | [`APIRoutes`](../type-aliases/APIRoutes.md) | `undefined` | - |
| `cache` | `public` | [`Cache`](Cache.md) | `undefined` | - |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | `undefined` | - |
| `createdAt` | `public` | `Date` | `undefined` | - |
| `createdTimestamp` | `public` | `number` | `undefined` | - |
| `flags` | `public` | `undefined` \| `ChannelFlags` | `undefined` | `ObjectToLower.flags` |
| `guildId` | `public` | `undefined` \| `string` | `undefined` | `ObjectToLower.guildId` |
| `id` | `public` | `string` | `undefined` | `ObjectToLower.id` |
| `name` | `public` | `string` | `undefined` | `ObjectToLower.name` |
| `nsfw` | `public` | `undefined` \| `boolean` | `undefined` | `ObjectToLower.nsfw` |
| `parentId` | `public` | `undefined` \| `null` \| `string` | `undefined` | `ObjectToLower.parentId` |
| `permissionOverwrites` | `public` | \{ `fetch`: () => [`ReturnCache`](../type-aliases/ReturnCache.md)\<`undefined` \| \{ `allow`: `PermissionsBitField`; `deny`: `PermissionsBitField`; `guildId`: `string`; `id`: `string`; `type`: `number`; \}[]\>; `values`: () => \{ `allow`: `PermissionsBitField`; `deny`: `PermissionsBitField`; `guildId`: `string`; `id`: `string`; `type`: `number`; \}[][]; \} | `...` | - |
| `permissionOverwrites.fetch` | `public` | () => [`ReturnCache`](../type-aliases/ReturnCache.md)\<`undefined` \| \{ `allow`: `PermissionsBitField`; `deny`: `PermissionsBitField`; `guildId`: `string`; `id`: `string`; `type`: `number`; \}[]\> | `...` | - |
| `permissionOverwrites.values` | `public` | () => \{ `allow`: `PermissionsBitField`; `deny`: `PermissionsBitField`; `guildId`: `string`; `id`: `string`; `type`: `number`; \}[][] | `...` | - |
| `position` | `public` | `number` | `undefined` | `ObjectToLower.position` |
| `rest` | `public` | [`ApiHandler`](ApiHandler.md) | `undefined` | - |
| `type` | `public` | `GuildCategory` | `undefined` | `ObjectToLower.type` |
| `url` | `public` | `string` | `undefined` | - |

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

#### Source

[seyfert/src/structures/channels.ts:135](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L135)

***

### isCategory()

```ts
isCategory(): this is CategoryChannel
```

#### Returns

`this is CategoryChannel`

#### Source

[seyfert/src/structures/channels.ts:115](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L115)

***

### isDM()

```ts
isDM(): this is DMChannel
```

#### Returns

`this is DMChannel`

#### Source

[seyfert/src/structures/channels.ts:91](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L91)

***

### isDirectory()

```ts
isDirectory(): this is DirectoryChannel
```

#### Returns

`this is DirectoryChannel`

#### Source

[seyfert/src/structures/channels.ts:103](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L103)

***

### isForum()

```ts
isForum(): this is ForumChannel
```

#### Returns

`this is ForumChannel`

#### Source

[seyfert/src/structures/channels.ts:95](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L95)

***

### isGuildTextable()

```ts
isGuildTextable(): this is AllGuildTextableChannels
```

#### Returns

`this is AllGuildTextableChannels`

#### Source

[seyfert/src/structures/channels.ts:127](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L127)

***

### isMedia()

```ts
isMedia(): this is MediaChannel
```

#### Returns

`this is MediaChannel`

#### Source

[seyfert/src/structures/channels.ts:87](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L87)

***

### isNews()

```ts
isNews(): this is NewsChannel
```

#### Returns

`this is NewsChannel`

#### Source

[seyfert/src/structures/channels.ts:119](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L119)

***

### isStage()

```ts
isStage(): this is StageChannel
```

#### Returns

`this is StageChannel`

#### Source

[seyfert/src/structures/channels.ts:83](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L83)

***

### isTextGuild()

```ts
isTextGuild(): this is TextGuildChannel
```

#### Returns

`this is TextGuildChannel`

#### Source

[seyfert/src/structures/channels.ts:111](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L111)

***

### isTextable()

```ts
isTextable(): this is AllTextableChannels
```

#### Returns

`this is AllTextableChannels`

#### Source

[seyfert/src/structures/channels.ts:123](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L123)

***

### isThread()

```ts
isThread(): this is ThreadChannel
```

#### Returns

`this is ThreadChannel`

#### Source

[seyfert/src/structures/channels.ts:99](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L99)

***

### isThreadOnly()

```ts
isThreadOnly(): this is MediaChannel | ForumChannel
```

#### Returns

this is MediaChannel \| ForumChannel

#### Source

[seyfert/src/structures/channels.ts:131](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L131)

***

### isVoice()

```ts
isVoice(): this is VoiceChannel
```

#### Returns

`this is VoiceChannel`

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

#### Source

[seyfert/src/structures/channels.ts:204](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L204)

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

#### Source

[seyfert/src/structures/channels.ts:200](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L200)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/channels.ts:79](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L79)
