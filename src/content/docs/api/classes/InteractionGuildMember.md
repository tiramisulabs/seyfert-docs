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

[seyfert/src/structures/GuildMember.ts:195](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildMember.ts#L195)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `api` | `public` | [`APIRoutes`](/api/type-aliases/apiroutes/) | - | - |
| `avatar` | `public` | `undefined` \| `null` \| `string` | - | `ObjectToLower.avatar` |
| `bot` | `public` | `undefined` \| `boolean` | - | - |
| `cache` | `public` | `Cache` | - | - |
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
| `rest` | `public` | [`REST`](/api/classes/rest/) | - | - |
| `roles` | `public` | `Object` | - | - |
| `roles.add` | `public` | (`id`: `string`) => `Promise`\<`void`\> | - | - |
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

[seyfert/src/structures/GuildMember.ts:165](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildMember.ts#L165)

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

[seyfert/src/structures/GuildMember.ts:61](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildMember.ts#L61)

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

[seyfert/src/structures/GuildMember.ts:157](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildMember.ts#L157)

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

[seyfert/src/structures/GuildMember.ts:169](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildMember.ts#L169)

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

[seyfert/src/structures/GuildMember.ts:69](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildMember.ts#L69)

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

#### Source

[seyfert/src/structures/GuildMember.ts:65](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildMember.ts#L65)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/GuildMember.ts:73](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildMember.ts#L73)

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

[seyfert/src/structures/GuildMember.ts:161](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildMember.ts#L161)
