[seyfert](../globals.md) / BaseGuildMember

# Class: BaseGuildMember

## Extends

- `DiscordBase`.`ObjectToLower`\<`Omit`\<`APIGuildMember`, `"user"` \| `"roles"`\>\>

## Extended by

- [`GuildMember`](GuildMember.md)
- [`UnavailableMember`](UnavailableMember.md)

## Constructors

### new BaseGuildMember()

```ts
new BaseGuildMember(
   client: UsingClient, 
   data: GuildMemberData, 
   id: string, 
   guildId: string): BaseGuildMember
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) | - |
| `data` | [`GuildMemberData`](../type-aliases/GuildMemberData.md) | - |
| `id` | `string` | - |
| `guildId` | `string` | the choosen guild id |

#### Returns

[`BaseGuildMember`](BaseGuildMember.md)

#### Inherited from

`DiscordBase.constructor`

#### Source

[seyfert/src/structures/GuildMember.ts:37](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L37)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `_roles` | `private` | `string`[] | - | - |
| `avatar` | `public` | `undefined` \| `null` \| `string` | - | `ObjectToLower.avatar` |
| `avatarDecorationData` | `public` | `undefined` \| `null` \| \{ `asset`: `string`; `skuId`: `string`; \} | - | `ObjectToLower.avatarDecorationData` |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | - | `DiscordBase.client` |
| `communicationDisabledUntil` | `public` | `undefined` \| `null` \| `string` | - | `ObjectToLower.communicationDisabledUntil` |
| `communicationDisabledUntilTimestamp?` | `public` | `null` \| `number` | - | - |
| `deaf` | `public` | `boolean` | - | `ObjectToLower.deaf` |
| `flags` | `public` | `GuildMemberFlags` | - | `ObjectToLower.flags` |
| `guildId` | `readonly` | `string` | the choosen guild id | - |
| `id` | `public` | `string` | - | `DiscordBase.id` |
| `joinedAt` | `public` | `string` | - | `ObjectToLower.joinedAt` |
| `joinedTimestamp?` | `public` | `number` | - | - |
| `mute` | `public` | `boolean` | - | `ObjectToLower.mute` |
| `nick` | `public` | `undefined` \| `null` \| `string` | - | `ObjectToLower.nick` |
| `pending` | `public` | `undefined` \| `boolean` | - | `ObjectToLower.pending` |
| `premiumSince` | `public` | `undefined` \| `null` \| `string` | - | `ObjectToLower.premiumSince` |

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

## Methods

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

#### Source

[seyfert/src/structures/GuildMember.ts:54](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L54)

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

### patch()

```ts
private patch(data: GuildMemberData): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`GuildMemberData`](../type-aliases/GuildMemberData.md) |

#### Returns

`void`

#### Source

[seyfert/src/structures/GuildMember.ts:82](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L82)

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

#### Source

[seyfert/src/structures/GuildMember.ts:109](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L109)
