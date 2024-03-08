---
editUrl: false
next: false
prev: false
title: "BaseGuildMember"
---

## Extends

- `DiscordBase`.`ObjectToLower`\<`Omit`\<`APIGuildMember`, `"user"` \| `"roles"`\>\>

## Constructors

### new BaseGuildMember(client, data, id, guildId)

```ts
new BaseGuildMember(
   client: BaseClient, 
   data: GuildMemberData, 
   id: string, 
   guildId: string): BaseGuildMember
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `client` | `BaseClient` | - |
| `data` | [`GuildMemberData`](/api/type-aliases/guildmemberdata/) | - |
| `id` | `string` | - |
| `guildId` | `string` | the choosen guild id |

#### Returns

[`BaseGuildMember`](/api/classes/baseguildmember/)

#### Inherited from

`DiscordBase.constructor`

#### Source

[seyfert/src/structures/GuildMember.ts:40](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/GuildMember.ts#L40)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `avatar` | `public` | `undefined` \| `null` \| `string` | - | `ObjectToLower.avatar` |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | - | `DiscordBase.client` |
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

[seyfert/src/structures/extra/DiscordBase.ts:27](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/DiscordBase.ts#L27)

***

### createdTimestamp

```ts
get createdTimestamp(): number
```

Create a timestamp for the current object.

#### Returns

`number`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:20](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/DiscordBase.ts#L20)

***

### roles

```ts
get roles(): Object
```

#### Returns

`Object`

| Member | Type | Value |
| :------ | :------ | :------ |
| `add` | (`id`: `string`) => `Promise`\<`void`\> | - |
| `permissions` | () => `Promise`\<`PermissionsBitField`\> | - |
| `remove` | (`id`: `string`) => `Promise`\<`void`\> | - |
| `values` | readonly `string`[] | - |

#### Source

[seyfert/src/structures/GuildMember.ts:96](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/GuildMember.ts#L96)

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

[seyfert/src/structures/GuildMember.ts:61](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/GuildMember.ts#L61)

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

`Promise`\<[`GuildMember`](/api/classes/guildmember/)\>

#### Source

[seyfert/src/structures/GuildMember.ts:69](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/GuildMember.ts#L69)

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

`Promise`\<[`GuildMember`](/api/classes/guildmember/)\>

#### Source

[seyfert/src/structures/GuildMember.ts:57](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/GuildMember.ts#L57)

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

#### Source

[seyfert/src/structures/GuildMember.ts:53](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/GuildMember.ts#L53)

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

[seyfert/src/structures/GuildMember.ts:65](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/GuildMember.ts#L65)

***

### presence()

```ts
presence(): ReturnCache<undefined | Omit<GatewayPresenceUpdate, "user"> & Object & Object>
```

#### Returns

[`ReturnCache`](/api/type-aliases/returncache/)\<`undefined` \| `Omit`\<`GatewayPresenceUpdate`, `"user"`\> & `Object` & `Object`\>

#### Source

[seyfert/src/structures/GuildMember.ts:73](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/GuildMember.ts#L73)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/GuildMember.ts:81](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/GuildMember.ts#L81)

***

### voice()

```ts
voice(): ReturnCache<undefined | Omit<GatewayVoiceState, "member"> & Object & Object>
```

#### Returns

[`ReturnCache`](/api/type-aliases/returncache/)\<`undefined` \| `Omit`\<`GatewayVoiceState`, `"member"`\> & `Object` & `Object`\>

#### Source

[seyfert/src/structures/GuildMember.ts:77](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/GuildMember.ts#L77)

***

### methods()

```ts
static methods(__namedParameters:     Object): Object
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.client` | `BaseClient` |
| `__namedParameters.guildId` | `string` |

#### Returns

`Object`

| Member | Type | Value |
| :------ | :------ | :------ |
| `add` | (`id`: `string`, `body`: `RESTPutAPIGuildMemberJSONBody`) => `Promise`\<`undefined` \| [`GuildMember`](/api/classes/guildmember/)\> | - |
| `ban` | (`id`: `string`, `body`?: `RESTPutAPIGuildBanJSONBody`, `reason`?: `string`) => `Promise`\<`void`\> | - |
| `edit` | (`id`: `string`, `body`: `RESTPatchAPIGuildMemberJSONBody`, `reason`?: `string`) => `Promise`\<[`GuildMember`](/api/classes/guildmember/)\> | - |
| `fetch` | (`memberId`: `string`, `force`: `boolean`) => `Promise`\<[`GuildMember`](/api/classes/guildmember/)\> | - |
| `kick` | (`id`: `string`, `reason`?: `string`) => `Promise`\<`void`\> | - |
| `list` | (`query`?: `RESTGetAPIGuildMembersQuery`, `force`: `boolean`) => `Promise`\<[`GuildMember`](/api/classes/guildmember/)[]\> | - |
| `resolve` | (`resolve`: `GuildMemberResolvable`) => `Promise`\<`undefined` \| [`GuildMember`](/api/classes/guildmember/)\> | - |
| `search` | (`query`?: `RESTGetAPIGuildMembersSearchQuery`) => `Promise`\<[`GuildMember`](/api/classes/guildmember/)[]\> | - |
| `unban` | (`id`: `string`, `body`?: `RESTPutAPIGuildBanJSONBody`, `reason`?: `string`) => `Promise`\<`void`\> | - |

#### Source

[seyfert/src/structures/GuildMember.ts:110](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/GuildMember.ts#L110)
