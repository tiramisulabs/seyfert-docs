---
editUrl: false
next: false
prev: false
title: "UnavailableMember"
---

## Extends

- [`BaseGuildMember`](/api/classes/baseguildmember/)

## Constructors

### new UnavailableMember(client, data, id, guildId)

```ts
new UnavailableMember(
   client: BaseClient, 
   data: GuildMemberData, 
   id: string, 
   guildId: string): UnavailableMember
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `client` | `BaseClient` | - |
| `data` | [`GuildMemberData`](/api/type-aliases/guildmemberdata/) | - |
| `id` | `string` | - |
| `guildId` | `string` | the choosen guild id |

#### Returns

[`UnavailableMember`](/api/classes/unavailablemember/)

#### Inherited from

[`BaseGuildMember`](/api/classes/baseguildmember/).[`constructor`](/api/classes/baseguildmember/#constructors)

#### Source

[seyfert/src/structures/GuildMember.ts:40](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildMember.ts#L40)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `avatar` | `public` | `undefined` \| `null` \| `string` | - | [`BaseGuildMember`](/api/classes/baseguildmember/).`avatar` |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | - | [`BaseGuildMember`](/api/classes/baseguildmember/).`client` |
| `communicationDisabledUntil` | `public` | `undefined` \| `null` \| `string` | - | [`BaseGuildMember`](/api/classes/baseguildmember/).`communicationDisabledUntil` |
| `communicationDisabledUntilTimestamp?` | `public` | `null` \| `number` | - | [`BaseGuildMember`](/api/classes/baseguildmember/).`communicationDisabledUntilTimestamp` |
| `deaf` | `public` | `boolean` | - | [`BaseGuildMember`](/api/classes/baseguildmember/).`deaf` |
| `flags` | `public` | `GuildMemberFlags` | - | [`BaseGuildMember`](/api/classes/baseguildmember/).`flags` |
| `guildId` | `readonly` | `string` | the choosen guild id | [`BaseGuildMember`](/api/classes/baseguildmember/).`guildId` |
| `id` | `public` | `string` | - | [`BaseGuildMember`](/api/classes/baseguildmember/).`id` |
| `joinedAt` | `public` | `string` | - | [`BaseGuildMember`](/api/classes/baseguildmember/).`joinedAt` |
| `joinedTimestamp?` | `public` | `number` | - | [`BaseGuildMember`](/api/classes/baseguildmember/).`joinedTimestamp` |
| `mute` | `public` | `boolean` | - | [`BaseGuildMember`](/api/classes/baseguildmember/).`mute` |
| `nick` | `public` | `undefined` \| `null` \| `string` | - | [`BaseGuildMember`](/api/classes/baseguildmember/).`nick` |
| `pending` | `public` | `true` | - | [`BaseGuildMember`](/api/classes/baseguildmember/).`pending` |
| `premiumSince` | `public` | `undefined` \| `null` \| `string` | - | [`BaseGuildMember`](/api/classes/baseguildmember/).`premiumSince` |

## Accessors

### createdAt

```ts
get createdAt(): Date
```

createdAt gets the creation Date instace of the current object.

#### Returns

`Date`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:27](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/extra/DiscordBase.ts#L27)

***

### createdTimestamp

```ts
get createdTimestamp(): number
```

Create a timestamp for the current object.

#### Returns

`number`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:20](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/extra/DiscordBase.ts#L20)

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
| `remove` | (`id`: `string`) => `Promise`\<`void`\> | - |
| `values` | readonly `string`[] | - |

#### Source

[seyfert/src/structures/GuildMember.ts:88](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildMember.ts#L88)

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

#### Inherited from

[`BaseGuildMember`](/api/classes/baseguildmember/).[`ban`](/api/classes/baseguildmember/#ban)

#### Source

[seyfert/src/structures/GuildMember.ts:61](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildMember.ts#L61)

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

#### Inherited from

[`BaseGuildMember`](/api/classes/baseguildmember/).[`edit`](/api/classes/baseguildmember/#edit)

#### Source

[seyfert/src/structures/GuildMember.ts:69](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildMember.ts#L69)

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

#### Inherited from

[`BaseGuildMember`](/api/classes/baseguildmember/).[`fetch`](/api/classes/baseguildmember/#fetch)

#### Source

[seyfert/src/structures/GuildMember.ts:57](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildMember.ts#L57)

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

[`BaseGuildMember`](/api/classes/baseguildmember/).[`guild`](/api/classes/baseguildmember/#guild)

#### Source

[seyfert/src/structures/GuildMember.ts:53](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildMember.ts#L53)

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

[`BaseGuildMember`](/api/classes/baseguildmember/).[`kick`](/api/classes/baseguildmember/#kick)

#### Source

[seyfert/src/structures/GuildMember.ts:65](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildMember.ts#L65)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Inherited from

[`BaseGuildMember`](/api/classes/baseguildmember/).[`toString`](/api/classes/baseguildmember/#tostring)

#### Source

[seyfert/src/structures/GuildMember.ts:73](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildMember.ts#L73)

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

#### Inherited from

[`BaseGuildMember`](/api/classes/baseguildmember/).[`methods`](/api/classes/baseguildmember/#methods)

#### Source

[seyfert/src/structures/GuildMember.ts:96](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildMember.ts#L96)
