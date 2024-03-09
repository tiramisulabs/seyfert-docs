---
editUrl: false
next: false
prev: false
title: "GuildMember"
---

Represents a guild member

## Link

https://discord.com/developers/docs/resources/guild#guild-member-object

## Extends

- `ObjectToLower`\<`Omit`\<`APIGuildMember`, `"user"` \| `"roles"`\>\>.[`BaseGuildMember`](/api/classes/baseguildmember/)

## Constructors

### new GuildMember(client, data, user, guildId)

```ts
new GuildMember(
   client: BaseClient, 
   data: GuildMemberData, 
   user: APIUser | User, 
   guildId: string): GuildMember
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `client` | `BaseClient` | - |
| `data` | [`GuildMemberData`](/api/type-aliases/guildmemberdata/) | - |
| `user` | `APIUser` \| [`User`](/api/classes/user/) | - |
| `guildId` | `string` | the choosen guild id |

#### Returns

[`GuildMember`](/api/classes/guildmember/)

#### Inherited from

[`BaseGuildMember`](/api/classes/baseguildmember/).[`constructor`](/api/classes/baseguildmember/#constructors)

#### Source

[seyfert/src/structures/GuildMember.ts:135](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L135)

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
| `pending` | `public` | `undefined` \| `boolean` | - | [`BaseGuildMember`](/api/classes/baseguildmember/).`pending` |
| `premiumSince` | `public` | `undefined` \| `null` \| `string` | - | [`BaseGuildMember`](/api/classes/baseguildmember/).`premiumSince` |
| `user` | `public` | [`User`](/api/classes/user/) | - | - |

## Accessors

### bot

```ts
get bot(): undefined | boolean
```

#### Returns

`undefined` \| `boolean`

#### Source

[seyfert/src/structures/GuildMember.ts:150](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L150)

***

### createdAt

```ts
get createdAt(): Date
```

createdAt gets the creation Date instace of the current object.

#### Returns

`Date`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:27](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/extra/DiscordBase.ts#L27)

***

### createdTimestamp

```ts
get createdTimestamp(): number
```

Create a timestamp for the current object.

#### Returns

`number`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:20](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/extra/DiscordBase.ts#L20)

***

### displayName

```ts
get displayName(): string
```

gets the nickname or the username

#### Returns

`string`

#### Source

[seyfert/src/structures/GuildMember.ts:167](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L167)

***

### globalName

```ts
get globalName(): null | string
```

#### Returns

`null` \| `string`

#### Source

[seyfert/src/structures/GuildMember.ts:162](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L162)

***

### name

```ts
get name(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/GuildMember.ts:154](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L154)

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

[seyfert/src/structures/GuildMember.ts:96](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L96)

***

### tag

```ts
get tag(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/GuildMember.ts:146](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L146)

***

### username

```ts
get username(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/GuildMember.ts:158](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L158)

## Methods

### avatarURL()

```ts
avatarURL(options?: ImageURLOptions): string
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | [`ImageURLOptions`](/api/interfaces/imageurloptions/) |

#### Returns

`string`

#### Source

[seyfert/src/structures/GuildMember.ts:179](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L179)

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

[`BaseGuildMember`](/api/classes/baseguildmember/).[`ban`](/api/classes/baseguildmember/#ban)

#### Source

[seyfert/src/structures/GuildMember.ts:61](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L61)

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

`Promise`\<[`DMChannel`](/api/classes/dmchannel/)\>

#### Source

[seyfert/src/structures/GuildMember.ts:171](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L171)

***

### dynamicAvatarURL()

```ts
dynamicAvatarURL(options?: ImageURLOptions): string
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | [`ImageURLOptions`](/api/interfaces/imageurloptions/) |

#### Returns

`string`

#### Source

[seyfert/src/structures/GuildMember.ts:183](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L183)

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

[seyfert/src/structures/GuildMember.ts:69](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L69)

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

[seyfert/src/structures/GuildMember.ts:57](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L57)

***

### fetchPermissions()

```ts
fetchPermissions(): Promise<PermissionsBitField>
```

#### Returns

`Promise`\<`PermissionsBitField`\>

#### Source

[seyfert/src/structures/GuildMember.ts:191](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L191)

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

[seyfert/src/structures/GuildMember.ts:53](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L53)

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

[seyfert/src/structures/GuildMember.ts:65](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L65)

***

### presence()

```ts
presence(): ReturnCache<undefined | Omit<GatewayPresenceUpdate, "user"> & Object & Object>
```

#### Returns

[`ReturnCache`](/api/type-aliases/returncache/)\<`undefined` \| `Omit`\<`GatewayPresenceUpdate`, `"user"`\> & `Object` & `Object`\>

#### Inherited from

[`BaseGuildMember`](/api/classes/baseguildmember/).[`presence`](/api/classes/baseguildmember/#presence)

#### Source

[seyfert/src/structures/GuildMember.ts:73](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L73)

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

[seyfert/src/structures/GuildMember.ts:81](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L81)

***

### voice()

```ts
voice(): ReturnCache<undefined | Omit<GatewayVoiceState, "member"> & Object & Object>
```

#### Returns

[`ReturnCache`](/api/type-aliases/returncache/)\<`undefined` \| `Omit`\<`GatewayVoiceState`, `"member"`\> & `Object` & `Object`\>

#### Inherited from

[`BaseGuildMember`](/api/classes/baseguildmember/).[`voice`](/api/classes/baseguildmember/#voice)

#### Source

[seyfert/src/structures/GuildMember.ts:77](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L77)

***

### write()

```ts
write(body: Omit<RESTPostAPIChannelMessageJSONBody, "components" | "embeds"> & ResolverProps): Promise<Message>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps` |

#### Returns

`Promise`\<[`Message`](/api/classes/message/)\>

#### Source

[seyfert/src/structures/GuildMember.ts:175](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L175)

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

[seyfert/src/structures/GuildMember.ts:110](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L110)
