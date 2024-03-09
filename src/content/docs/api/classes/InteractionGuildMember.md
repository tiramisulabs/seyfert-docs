---
editUrl: false
next: false
prev: false
title: "InteractionGuildMember"
---

Represents a guild member

## Link

https://discord.com/developers/docs/resources/guild#guild-member-object

## Extends

- `ObjectToLower`\<`Omit`\<`APIInteractionDataResolvedGuildMember`, `"roles"` \| `"deaf"` \| `"mute"` \| `"permissions"`\>\>.`Object`

## Constructors

### new InteractionGuildMember(client, data, user, guildId)

```ts
new InteractionGuildMember(
   client: BaseClient, 
   data: APIInteractionDataResolvedGuildMember, 
   user: APIUser | User, 
   guildId: string): InteractionGuildMember
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `client` | `BaseClient` | - |
| `data` | `APIInteractionDataResolvedGuildMember` | - |
| `user` | `APIUser` \| [`User`](/api/classes/user/) | - |
| `guildId` | `string` | the choosen guild id |

#### Returns

[`InteractionGuildMember`](/api/classes/interactionguildmember/)

#### Inherited from

`ObjectToLower<Omit<APIInteractionDataResolvedGuildMember, 'roles' | 'deaf' | 'mute' | 'permissions'>>.constructor`

#### Source

[seyfert/src/structures/GuildMember.ts:214](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L214)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `api` | `public` | [`APIRoutes`](/api/type-aliases/apiroutes/) | - | - |
| `avatar` | `public` | `undefined` \| `null` \| `string` | - | `ObjectToLower.avatar` |
| `bot` | `public` | `undefined` \| `boolean` | - | - |
| `cache` | `public` | [`Cache`](/api/classes/cache/) | - | - |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | - | - |
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
| `rest` | `public` | [`ApiHandler`](/api/classes/apihandler/) | - | - |
| `roles` | `public` | `Object` | - | - |
| `roles.add` | `public` | (`id`: `string`) => `Promise`\<`void`\> | - | - |
| `roles.permissions` | `public` | () => `Promise`\<`PermissionsBitField`\> | - | - |
| `roles.remove` | `public` | (`id`: `string`) => `Promise`\<`void`\> | - | - |
| `roles.values` | `public` | readonly `string`[] | - | - |
| `tag` | `public` | `string` | - | - |
| `user` | `public` | [`User`](/api/classes/user/) | - | - |
| `username` | `public` | `string` | - | - |

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
edit(...args: [RESTPatchAPIGuildMemberJSONBody, string]): Promise<InteractionGuildMember>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [`RESTPatchAPIGuildMemberJSONBody`, `string`] |

#### Returns

`Promise`\<[`InteractionGuildMember`](/api/classes/interactionguildmember/)\>

#### Source

[seyfert/src/structures/GuildMember.ts:69](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L69)

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

`Promise`\<[`InteractionGuildMember`](/api/classes/interactionguildmember/)\>

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

#### Source

[seyfert/src/structures/GuildMember.ts:65](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L65)

***

### presence()

```ts
presence(): ReturnCache<undefined | Omit<GatewayPresenceUpdate, "user"> & Object & Object>
```

#### Returns

[`ReturnCache`](/api/type-aliases/returncache/)\<`undefined` \| `Omit`\<`GatewayPresenceUpdate`, `"user"`\> & `Object` & `Object`\>

#### Source

[seyfert/src/structures/GuildMember.ts:73](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L73)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/GuildMember.ts:81](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildMember.ts#L81)

***

### voice()

```ts
voice(): ReturnCache<undefined | Omit<GatewayVoiceState, "member"> & Object & Object>
```

#### Returns

[`ReturnCache`](/api/type-aliases/returncache/)\<`undefined` \| `Omit`\<`GatewayVoiceState`, `"member"`\> & `Object` & `Object`\>

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
