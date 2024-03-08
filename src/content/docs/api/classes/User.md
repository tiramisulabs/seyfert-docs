---
editUrl: false
next: false
prev: false
title: "User"
---

## Extends

- `ObjectToLower`\<`APIUser`\>.`DiscordBase`\<`APIUser`\>

## Constructors

### new User(client, data)

```ts
new User(client: BaseClient, data: APIUser): User
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `client` | `BaseClient` | - |
| `data` | `APIUser` | Unique ID of the object |

#### Returns

[`User`](/api/classes/user/)

#### Inherited from

`ObjectToLower<APIUser>.constructor`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:7](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/DiscordBase.ts#L7)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `accentColor` | `public` | `undefined` \| `null` \| `number` | `ObjectToLower.accentColor` |
| `avatar` | `public` | `null` \| `string` | `ObjectToLower.avatar` |
| `avatarDecoration` | `public` | `undefined` \| `null` \| `string` | `ObjectToLower.avatarDecoration` |
| `banner` | `public` | `undefined` \| `null` \| `string` | `ObjectToLower.banner` |
| `bot` | `public` | `undefined` \| `boolean` | `ObjectToLower.bot` |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | - |
| `discriminator` | `public` | `string` | `ObjectToLower.discriminator` |
| `email` | `public` | `undefined` \| `null` \| `string` | `ObjectToLower.email` |
| `flags` | `public` | `undefined` \| `UserFlags` | `ObjectToLower.flags` |
| `globalName` | `public` | `null` \| `string` | `ObjectToLower.globalName` |
| `id` | `public` | `string` | `ObjectToLower.id` |
| `locale` | `public` | `undefined` \| `string` | `ObjectToLower.locale` |
| `mfaEnabled` | `public` | `undefined` \| `boolean` | `ObjectToLower.mfaEnabled` |
| `premiumType` | `public` | `undefined` \| `UserPremiumType` | `ObjectToLower.premiumType` |
| `publicFlags` | `public` | `undefined` \| `UserFlags` | `ObjectToLower.publicFlags` |
| `system` | `public` | `undefined` \| `boolean` | `ObjectToLower.system` |
| `username` | `public` | `string` | `ObjectToLower.username` |
| `verified` | `public` | `undefined` \| `boolean` | `ObjectToLower.verified` |

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

### name

```ts
get name(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/User.ts:12](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/User.ts#L12)

***

### tag

```ts
get tag(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/User.ts:8](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/User.ts#L8)

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

[seyfert/src/structures/User.ts:34](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/User.ts#L34)

***

### dm()

```ts
dm(force: boolean): Promise<DMChannel>
```

Open a DM with the user

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<[`DMChannel`](/api/classes/dmchannel/)\>

#### Source

[seyfert/src/structures/User.ts:26](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/User.ts#L26)

***

### fetch()

```ts
fetch(force: boolean): Promise<User>
```

Fetch user

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<[`User`](/api/classes/user/)\>

#### Source

[seyfert/src/structures/User.ts:19](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/User.ts#L19)

***

### presence()

```ts
presence(): ReturnCache<undefined | Omit<GatewayPresenceUpdate, "user"> & Object & Object>
```

#### Returns

[`ReturnCache`](/api/type-aliases/returncache/)\<`undefined` \| `Omit`\<`GatewayPresenceUpdate`, `"user"`\> & `Object` & `Object`\>

#### Source

[seyfert/src/structures/User.ts:41](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/User.ts#L41)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/User.ts:45](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/User.ts#L45)

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

[seyfert/src/structures/User.ts:30](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/User.ts#L30)
