[seyfert](../globals.md) / InteractionGuildMember

# Class: InteractionGuildMember

Represents a guild member

## Link

https://discord.com/developers/docs/resources/guild#guild-member-object

## Extends

- `ObjectToLower`\<`Omit`\<`APIInteractionDataResolvedGuildMember`, `"roles"` \| `"deaf"` \| `"mute"` \| `"permissions"`\>\>.\{
  `api`: [`APIRoutes`](../type-aliases/APIRoutes.md);
  `avatar`: `undefined` \| `null` \| `string`;
  `avatarDecorationData`: `undefined` \| `null` \| \{
     `asset`: `string`;
     `skuId`: `string`;
    \};
  `bot`: `undefined` \| `boolean`;
  `cache`: [`Cache`](Cache.md);
  `client`: [`UsingClient`](../interfaces/UsingClient.md);
  `communicationDisabledUntil`: `undefined` \| `null` \| `string`;
  `communicationDisabledUntilTimestamp`: `null` \| `number`;
  `createdAt`: `Date`;
  `createdTimestamp`: `number`;
  `displayName`: `string`;
  `flags`: `GuildMemberFlags`;
  `globalName`: `null` \| `string`;
  `guildId`: `string`;
  `id`: `string`;
  `joinedAt`: `string`;
  `joinedTimestamp`: `number`;
  `name`: `string`;
  `nick`: `undefined` \| `null` \| `string`;
  `pending`: `undefined` \| `boolean`;
  `premiumSince`: `undefined` \| `null` \| `string`;
  `rest`: [`ApiHandler`](ApiHandler.md);
  `roles`: \{
     `add`: (`id`: `string`) => `void`;
     `highest`: (`force`: `boolean`) => `Promise`\<[`GuildRole`](GuildRole.md)\>;
     `keys`: `string`[];
     `list`: (`force`: `boolean`) => `Promise`\<[`GuildRole`](GuildRole.md)[]\>;
     `permissions`: (`force`: `boolean`) => `Promise`\<`PermissionsBitField`\>;
     `remove`: (`id`: `string`) => `Promise`\<`never`\>;
     `sorted`: (`force`: `boolean`) => `Promise`\<[`GuildRole`](GuildRole.md)[]\>;
    \};
  `tag`: `string`;
  `user`: [`User`](User.md);
  `username`: `string`;
  `avatarURL`: `null` \| `string`;
  `ban`: `Promise`\<`void`\>;
  `bannable`: `Promise`\<`boolean`\>;
  `bannerURL`: `undefined` \| `string`;
  `defaultAvatarURL`: `string`;
  `dm`: `Promise`\<[`DMChannel`](DMChannel.md)\>;
  `edit`: `Promise`\<[`InteractionGuildMember`](InteractionGuildMember.md)\>;
  `fetch`: `Promise`\<[`InteractionGuildMember`](InteractionGuildMember.md)\>;
  `fetchPermissions`: `Promise`\<`PermissionsBitField`\>;
  `guild`: `Promise`\<[`Guild`](Guild.md)\<`"cached"`\> \| [`Guild`](Guild.md)\<`"api"`\>\>;
  `kick`: `Promise`\<`void`\>;
  `kickable`: `Promise`\<`boolean`\>;
  `manageable`: `Promise`\<`boolean`\>;
  `moderatable`: `Promise`\<`boolean`\>;
  `presence`: [`ReturnCache`](../type-aliases/ReturnCache.md)\<`undefined` \| `Omit`\<`GatewayPresenceUpdate`, `"user"`\> & \{
     `id`: `string`;
    \} & \{
     `guild_id`: `string`;
    \}\>;
  `toString`: `string`;
  `voice`: [`ReturnCache`](../type-aliases/ReturnCache.md)\<`undefined` \| [`VoiceState`](VoiceState.md)\>;
  `write`: `Promise`\<[`Message`](Message.md)\>;
 \}

## Constructors

### new InteractionGuildMember()

```ts
new InteractionGuildMember(
   client: UsingClient, 
   data: APIInteractionDataResolvedGuildMember, 
   user: APIUser | User, 
   guildId: string): InteractionGuildMember
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) | - |
| `data` | `APIInteractionDataResolvedGuildMember` | - |
| `user` | `APIUser` \| [`User`](User.md) | - |
| `guildId` | `string` | the choosen guild id |

#### Returns

[`InteractionGuildMember`](InteractionGuildMember.md)

#### Inherited from

ObjectToLower\<Omit\<APIInteractionDataResolvedGuildMember, 'roles' \| 'deaf' \| 'mute' \| 'permissions'\>\>.constructor

#### Source

[seyfert/src/structures/GuildMember.ts:245](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L245)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `api` | `public` | [`APIRoutes`](../type-aliases/APIRoutes.md) | - | - |
| `avatar` | `public` | `undefined` \| `null` \| `string` | - | `ObjectToLower.avatar` |
| `avatarDecorationData` | `public` | `undefined` \| `null` \| \{ `asset`: `string`; `skuId`: `string`; \} | - | `ObjectToLower.avatarDecorationData` |
| `bot` | `public` | `undefined` \| `boolean` | - | - |
| `cache` | `public` | [`Cache`](Cache.md) | - | - |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | - | - |
| `communicationDisabledUntil` | `public` | `undefined` \| `null` \| `string` | - | `ObjectToLower.communicationDisabledUntil` |
| `communicationDisabledUntilTimestamp?` | `public` | `null` \| `number` | - | - |
| `createdAt` | `public` | `Date` | - | - |
| `createdTimestamp` | `public` | `number` | - | - |
| `displayName` | `public` | `string` | - | - |
| `flags` | `public` | `GuildMemberFlags` | - | `ObjectToLower.flags` |
| `globalName` | `public` | `null` \| `string` | - | - |
| `guildId` | `readonly` | `string` | the choosen guild id | - |
| `id` | `public` | `string` | - | - |
| `joinedAt` | `public` | `string` | - | `ObjectToLower.joinedAt` |
| `joinedTimestamp?` | `public` | `number` | - | - |
| `name` | `public` | `string` | - | - |
| `nick` | `public` | `undefined` \| `null` \| `string` | - | `ObjectToLower.nick` |
| `pending` | `public` | `undefined` \| `boolean` | - | `ObjectToLower.pending` |
| `permissions` | `public` | `PermissionsBitField` | - | - |
| `premiumSince` | `public` | `undefined` \| `null` \| `string` | - | `ObjectToLower.premiumSince` |
| `rest` | `public` | [`ApiHandler`](ApiHandler.md) | - | - |
| `roles` | `public` | \{ `add`: (`id`: `string`) => `void`; `highest`: (`force`: `boolean`) => `Promise`\<[`GuildRole`](GuildRole.md)\>; `keys`: `string`[]; `list`: (`force`: `boolean`) => `Promise`\<[`GuildRole`](GuildRole.md)[]\>; `permissions`: (`force`: `boolean`) => `Promise`\<`PermissionsBitField`\>; `remove`: (`id`: `string`) => `Promise`\<`never`\>; `sorted`: (`force`: `boolean`) => `Promise`\<[`GuildRole`](GuildRole.md)[]\>; \} | - | - |
| `roles.add` | `public` | (`id`: `string`) => `void` | - | - |
| `roles.highest` | `public` | (`force`: `boolean`) => `Promise`\<[`GuildRole`](GuildRole.md)\> | - | - |
| `roles.keys` | `public` | `string`[] | - | - |
| `roles.list` | `public` | (`force`: `boolean`) => `Promise`\<[`GuildRole`](GuildRole.md)[]\> | - | - |
| `roles.permissions` | `public` | (`force`: `boolean`) => `Promise`\<`PermissionsBitField`\> | - | - |
| `roles.remove` | `public` | (`id`: `string`) => `Promise`\<`never`\> | - | - |
| `roles.sorted` | `public` | (`force`: `boolean`) => `Promise`\<[`GuildRole`](GuildRole.md)[]\> | - | - |
| `tag` | `public` | `string` | - | - |
| `user` | `public` | [`User`](User.md) | - | - |
| `username` | `public` | `string` | - | - |

## Methods

### avatarURL()

#### avatarURL(options)

```ts
avatarURL(options: CDNUrlOptions & {
  exclude: true;
 }): null | string
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`CDNUrlOptions`](../interfaces/CDNUrlOptions.md) & \{ `exclude`: `true`; \} |

##### Returns

`null` \| `string`

##### Source

[seyfert/src/structures/GuildMember.ts:183](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L183)

#### avatarURL(options)

```ts
avatarURL(options?: CDNUrlOptions & {
  exclude: false;
 }): string
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | [`CDNUrlOptions`](../interfaces/CDNUrlOptions.md) & \{ `exclude`: `false`; \} |

##### Returns

`string`

##### Source

[seyfert/src/structures/GuildMember.ts:184](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L184)

***

### ban()

```ts
ban(body?: RESTPutAPIGuildBanJSONBody, reason?: string): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body`? | `RESTPutAPIGuildBanJSONBody` |
| `reason`? | `string` |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/structures/GuildMember.ts:58](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L58)

***

### bannable()

```ts
bannable(force: boolean): Promise<boolean>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<`boolean`\>

#### Source

[seyfert/src/structures/GuildMember.ts:211](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L211)

***

### bannerURL()

```ts
bannerURL(options?: CDNUrlOptions): undefined | string
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | [`CDNUrlOptions`](../interfaces/CDNUrlOptions.md) |

#### Returns

`undefined` \| `string`

#### Source

[seyfert/src/structures/GuildMember.ts:193](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L193)

***

### defaultAvatarURL()

```ts
defaultAvatarURL(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/GuildMember.ts:179](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L179)

***

### dm()

```ts
dm(force: boolean): Promise<DMChannel>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<[`DMChannel`](DMChannel.md)\>

#### Source

[seyfert/src/structures/GuildMember.ts:171](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L171)

***

### edit()

```ts
edit(...args: [RESTPatchAPIGuildMemberJSONBody, string]): Promise<InteractionGuildMember>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [`RESTPatchAPIGuildMemberJSONBody`, `string`] |

#### Returns

`Promise`\<[`InteractionGuildMember`](InteractionGuildMember.md)\>

#### Source

[seyfert/src/structures/GuildMember.ts:66](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L66)

***

### fetch()

```ts
fetch(...args: [boolean]): Promise<InteractionGuildMember>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [`boolean`] |

#### Returns

`Promise`\<[`InteractionGuildMember`](InteractionGuildMember.md)\>

#### Source

[seyfert/src/structures/GuildMember.ts:54](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L54)

***

### fetchPermissions()

```ts
fetchPermissions(force: boolean): Promise<PermissionsBitField>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<`PermissionsBitField`\>

#### Source

[seyfert/src/structures/GuildMember.ts:197](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L197)

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

[seyfert/src/structures/GuildMember.ts:50](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L50)

***

### kick()

```ts
kick(reason?: string): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reason`? | `string` |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/structures/GuildMember.ts:62](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L62)

***

### kickable()

```ts
kickable(force: boolean): Promise<boolean>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<`boolean`\>

#### Source

[seyfert/src/structures/GuildMember.ts:215](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L215)

***

### manageable()

```ts
manageable(force: boolean): Promise<boolean>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<`boolean`\>

#### Source

[seyfert/src/structures/GuildMember.ts:202](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L202)

***

### moderatable()

```ts
moderatable(force: boolean): Promise<boolean>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<`boolean`\>

#### Source

[seyfert/src/structures/GuildMember.ts:219](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L219)

***

### presence()

```ts
presence(): ReturnCache<undefined | Omit<GatewayPresenceUpdate, "user"> & {
  id: string;
 } & {
  guild_id: string;
}>
```

#### Returns

[`ReturnCache`](../type-aliases/ReturnCache.md)\<`undefined` \| `Omit`\<`GatewayPresenceUpdate`, `"user"`\> & \{
  `id`: `string`;
 \} & \{
  `guild_id`: `string`;
 \}\>

#### Source

[seyfert/src/structures/GuildMember.ts:70](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L70)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/GuildMember.ts:78](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L78)

***

### voice()

```ts
voice(): ReturnCache<undefined | VoiceState>
```

#### Returns

[`ReturnCache`](../type-aliases/ReturnCache.md)\<`undefined` \| [`VoiceState`](VoiceState.md)\>

#### Source

[seyfert/src/structures/GuildMember.ts:74](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L74)

***

### write()

```ts
write(body: Omit<RESTPostAPIChannelMessageJSONBody, "components" | "embeds" | "poll"> & SendResolverProps): Promise<Message>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps` |

#### Returns

`Promise`\<[`Message`](Message.md)\>

#### Source

[seyfert/src/structures/GuildMember.ts:175](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L175)
