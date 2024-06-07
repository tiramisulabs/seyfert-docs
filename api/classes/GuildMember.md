[seyfert](../globals.md) / GuildMember

# Class: GuildMember

Represents a guild member

## Link

https://discord.com/developers/docs/resources/guild#guild-member-object

## Extends

- `ObjectToLower`\<`Omit`\<`APIGuildMember`, `"user"` \| `"roles"`\>\>.[`BaseGuildMember`](BaseGuildMember.md)

## Constructors

### new GuildMember()

```ts
new GuildMember(
   client: UsingClient, 
   data: GuildMemberData, 
   user: APIUser | User, 
   guildId: string): GuildMember
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) | - |
| `data` | [`GuildMemberData`](../type-aliases/GuildMemberData.md) | - |
| `user` | `APIUser` \| [`User`](User.md) | - |
| `guildId` | `string` | the choosen guild id |

#### Returns

[`GuildMember`](GuildMember.md)

#### Inherited from

[`BaseGuildMember`](BaseGuildMember.md).[`constructor`](BaseGuildMember.md#constructors)

#### Source

[seyfert/src/structures/GuildMember.ts:135](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L135)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `__me?` | `private` | [`GuildMember`](GuildMember.md) | - | - |
| `avatar` | `public` | `undefined` \| `null` \| `string` | - | [`BaseGuildMember`](BaseGuildMember.md).`avatar` |
| `avatarDecorationData` | `public` | `undefined` \| `null` \| \{ `asset`: `string`; `skuId`: `string`; \} | - | [`BaseGuildMember`](BaseGuildMember.md).`avatarDecorationData` |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | - | [`BaseGuildMember`](BaseGuildMember.md).`client` |
| `communicationDisabledUntil` | `public` | `undefined` \| `null` \| `string` | - | [`BaseGuildMember`](BaseGuildMember.md).`communicationDisabledUntil` |
| `communicationDisabledUntilTimestamp?` | `public` | `null` \| `number` | - | [`BaseGuildMember`](BaseGuildMember.md).`communicationDisabledUntilTimestamp` |
| `deaf` | `public` | `boolean` | - | [`BaseGuildMember`](BaseGuildMember.md).`deaf` |
| `flags` | `public` | `GuildMemberFlags` | - | [`BaseGuildMember`](BaseGuildMember.md).`flags` |
| `guildId` | `readonly` | `string` | the choosen guild id | [`BaseGuildMember`](BaseGuildMember.md).`guildId` |
| `id` | `public` | `string` | - | [`BaseGuildMember`](BaseGuildMember.md).`id` |
| `joinedAt` | `public` | `string` | - | [`BaseGuildMember`](BaseGuildMember.md).`joinedAt` |
| `joinedTimestamp?` | `public` | `number` | - | [`BaseGuildMember`](BaseGuildMember.md).`joinedTimestamp` |
| `mute` | `public` | `boolean` | - | [`BaseGuildMember`](BaseGuildMember.md).`mute` |
| `nick` | `public` | `undefined` \| `null` \| `string` | - | [`BaseGuildMember`](BaseGuildMember.md).`nick` |
| `pending` | `public` | `undefined` \| `boolean` | - | [`BaseGuildMember`](BaseGuildMember.md).`pending` |
| `premiumSince` | `public` | `undefined` \| `null` \| `string` | - | [`BaseGuildMember`](BaseGuildMember.md).`premiumSince` |
| `user` | `public` | [`User`](User.md) | - | - |

## Accessors

### bot

```ts
get bot(): undefined | boolean
```

#### Returns

`undefined` \| `boolean`

#### Source

[seyfert/src/structures/GuildMember.ts:150](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L150)

***

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

### displayName

```ts
get displayName(): string
```

gets the nickname or the username

#### Returns

`string`

#### Source

[seyfert/src/structures/GuildMember.ts:167](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L167)

***

### globalName

```ts
get globalName(): null | string
```

#### Returns

`null` \| `string`

#### Source

[seyfert/src/structures/GuildMember.ts:162](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L162)

***

### name

```ts
get name(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/GuildMember.ts:154](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L154)

***

### roles

```ts
get roles(): {
  add: (id: string) => void;
  highest: (force: boolean) => Promise<GuildRole>;
  keys: string[];
  list: (force: boolean) => Promise<GuildRole[]>;
  permissions: (force: boolean) => Promise<PermissionsBitField>;
  remove: (id: string) => Promise<never>;
  sorted: (force: boolean) => Promise<GuildRole[]>;
}
```

#### Returns

```ts
{
  add: (id: string) => void;
  highest: (force: boolean) => Promise<GuildRole>;
  keys: string[];
  list: (force: boolean) => Promise<GuildRole[]>;
  permissions: (force: boolean) => Promise<PermissionsBitField>;
  remove: (id: string) => Promise<never>;
  sorted: (force: boolean) => Promise<GuildRole[]>;
}
```

| Member | Type | Value |
| :------ | :------ | :------ |
| `add` | (`id`: `string`) => `void` | ... |
| `highest` | (`force`: `boolean`) => `Promise`\<[`GuildRole`](GuildRole.md)\> | ... |
| `keys` | `string`[] | ... |
| `list` | (`force`: `boolean`) => `Promise`\<[`GuildRole`](GuildRole.md)[]\> | ... |
| `permissions` | (`force`: `boolean`) => `Promise`\<`PermissionsBitField`\> | ... |
| `remove` | (`id`: `string`) => `Promise`\<`never`\> | ... |
| `sorted` | (`force`: `boolean`) => `Promise`\<[`GuildRole`](GuildRole.md)[]\> | ... |

#### Source

[seyfert/src/structures/GuildMember.ts:93](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L93)

***

### tag

```ts
get tag(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/GuildMember.ts:146](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L146)

***

### username

```ts
get username(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/GuildMember.ts:158](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L158)

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

#### Inherited from

[`BaseGuildMember`](BaseGuildMember.md).[`ban`](BaseGuildMember.md#ban)

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
edit(body: RESTPatchAPIGuildMemberJSONBody, reason?: string): Promise<GuildMember>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `RESTPatchAPIGuildMemberJSONBody` |
| `reason`? | `string` |

#### Returns

`Promise`\<[`GuildMember`](GuildMember.md)\>

#### Inherited from

[`BaseGuildMember`](BaseGuildMember.md).[`edit`](BaseGuildMember.md#edit)

#### Source

[seyfert/src/structures/GuildMember.ts:66](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L66)

***

### fetch()

```ts
fetch(force: boolean): Promise<GuildMember>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<[`GuildMember`](GuildMember.md)\>

#### Inherited from

[`BaseGuildMember`](BaseGuildMember.md).[`fetch`](BaseGuildMember.md#fetch)

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

#### Inherited from

[`BaseGuildMember`](BaseGuildMember.md).[`guild`](BaseGuildMember.md#guild)

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

#### Inherited from

[`BaseGuildMember`](BaseGuildMember.md).[`kick`](BaseGuildMember.md#kick)

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

#### Inherited from

[`BaseGuildMember`](BaseGuildMember.md).[`presence`](BaseGuildMember.md#presence)

#### Source

[seyfert/src/structures/GuildMember.ts:70](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L70)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Inherited from

[`BaseGuildMember`](BaseGuildMember.md).[`toString`](BaseGuildMember.md#tostring)

#### Source

[seyfert/src/structures/GuildMember.ts:78](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L78)

***

### voice()

```ts
voice(): ReturnCache<undefined | VoiceState>
```

#### Returns

[`ReturnCache`](../type-aliases/ReturnCache.md)\<`undefined` \| [`VoiceState`](VoiceState.md)\>

#### Inherited from

[`BaseGuildMember`](BaseGuildMember.md).[`voice`](BaseGuildMember.md#voice)

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

***

### methods()

```ts
static methods(__namedParameters: {
  client: UsingClient;
  guildId: string;
 }): {
  add: (id: string, body: RESTPutAPIGuildMemberJSONBody) => Promise<undefined | GuildMember>;
  ban: (id: string, body?: RESTPutAPIGuildBanJSONBody, reason?: string) => Promise<void>;
  edit: (id: string, body: RESTPatchAPIGuildMemberJSONBody, reason?: string) => Promise<GuildMember>;
  fetch: (memberId: string, force: boolean) => Promise<GuildMember>;
  kick: (id: string, reason?: string) => Promise<void>;
  list: (query?: RESTGetAPIGuildMembersQuery, force: boolean) => Promise<GuildMember[]>;
  resolve: (resolve: GuildMemberResolvable) => Promise<undefined | GuildMember>;
  search: (query?: RESTGetAPIGuildMembersSearchQuery) => Promise<GuildMember[]>;
  unban: (id: string, body?: RESTPutAPIGuildBanJSONBody, reason?: string) => Promise<void>;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | `object` |
| `__namedParameters.client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `__namedParameters.guildId` | `string` |

#### Returns

```ts
{
  add: (id: string, body: RESTPutAPIGuildMemberJSONBody) => Promise<undefined | GuildMember>;
  ban: (id: string, body?: RESTPutAPIGuildBanJSONBody, reason?: string) => Promise<void>;
  edit: (id: string, body: RESTPatchAPIGuildMemberJSONBody, reason?: string) => Promise<GuildMember>;
  fetch: (memberId: string, force: boolean) => Promise<GuildMember>;
  kick: (id: string, reason?: string) => Promise<void>;
  list: (query?: RESTGetAPIGuildMembersQuery, force: boolean) => Promise<GuildMember[]>;
  resolve: (resolve: GuildMemberResolvable) => Promise<undefined | GuildMember>;
  search: (query?: RESTGetAPIGuildMembersSearchQuery) => Promise<GuildMember[]>;
  unban: (id: string, body?: RESTPutAPIGuildBanJSONBody, reason?: string) => Promise<void>;
}
```

| Member | Type | Value |
| :------ | :------ | :------ |
| `add` | (`id`: `string`, `body`: `RESTPutAPIGuildMemberJSONBody`) => `Promise`\<`undefined` \| [`GuildMember`](GuildMember.md)\> | ... |
| `ban` | (`id`: `string`, `body`?: `RESTPutAPIGuildBanJSONBody`, `reason`?: `string`) => `Promise`\<`void`\> | ... |
| `edit` | (`id`: `string`, `body`: `RESTPatchAPIGuildMemberJSONBody`, `reason`?: `string`) => `Promise`\<[`GuildMember`](GuildMember.md)\> | ... |
| `fetch` | (`memberId`: `string`, `force`: `boolean`) => `Promise`\<[`GuildMember`](GuildMember.md)\> | ... |
| `kick` | (`id`: `string`, `reason`?: `string`) => `Promise`\<`void`\> | ... |
| `list` | (`query`?: `RESTGetAPIGuildMembersQuery`, `force`: `boolean`) => `Promise`\<[`GuildMember`](GuildMember.md)[]\> | ... |
| `resolve` | (`resolve`: `GuildMemberResolvable`) => `Promise`\<`undefined` \| [`GuildMember`](GuildMember.md)\> | ... |
| `search` | (`query`?: `RESTGetAPIGuildMembersSearchQuery`) => `Promise`\<[`GuildMember`](GuildMember.md)[]\> | ... |
| `unban` | (`id`: `string`, `body`?: `RESTPutAPIGuildBanJSONBody`, `reason`?: `string`) => `Promise`\<`void`\> | ... |

#### Inherited from

[`BaseGuildMember`](BaseGuildMember.md).[`methods`](BaseGuildMember.md#methods)

#### Source

[seyfert/src/structures/GuildMember.ts:109](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L109)
