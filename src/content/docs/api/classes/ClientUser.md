---
editUrl: false
next: false
prev: false
title: "ClientUser"
---

## Extends

- [`User`](/api/classes/user/)

## Constructors

### new ClientUser(client, data, application)

```ts
new ClientUser(
   client: BaseClient, 
   data: APIUser, 
   application: Pick<APIApplication, "id" | "flags">): ClientUser
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | `BaseClient` |
| `data` | `APIUser` |
| `application` | `Pick`\<`APIApplication`, `"id"` \| `"flags"`\> |

#### Returns

[`ClientUser`](/api/classes/clientuser/)

#### Overrides

[`User`](/api/classes/user/).[`constructor`](/api/classes/user/#constructors)

#### Source

[seyfert/src/structures/ClientUser.ts:7](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/ClientUser.ts#L7)

## Properties

| Property | Modifier | Type | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `accentColor` | `public` | `undefined` \| `null` \| `number` | [`User`](/api/classes/user/).`accentColor` | [`User`](/api/classes/user/).`accentColor` |
| `application` | `public` | `Pick`\<`APIApplication`, `"id"` \| `"flags"`\> | - | - |
| `avatar` | `public` | `null` \| `string` | [`User`](/api/classes/user/).`avatar` | [`User`](/api/classes/user/).`avatar` |
| `avatarDecoration` | `public` | `undefined` \| `null` \| `string` | [`User`](/api/classes/user/).`avatarDecoration` | [`User`](/api/classes/user/).`avatarDecoration` |
| `banner` | `public` | `undefined` \| `null` \| `string` | [`User`](/api/classes/user/).`banner` | [`User`](/api/classes/user/).`banner` |
| `bot` | `public` | `boolean` | [`User`](/api/classes/user/).`bot` | [`User`](/api/classes/user/).`bot` |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | [`User`](/api/classes/user/).`client` | [`User`](/api/classes/user/).`client` |
| `discriminator` | `public` | `string` | [`User`](/api/classes/user/).`discriminator` | [`User`](/api/classes/user/).`discriminator` |
| `email` | `public` | `undefined` \| `null` \| `string` | [`User`](/api/classes/user/).`email` | [`User`](/api/classes/user/).`email` |
| `flags` | `public` | `undefined` \| `UserFlags` | [`User`](/api/classes/user/).`flags` | [`User`](/api/classes/user/).`flags` |
| `globalName` | `public` | `null` \| `string` | [`User`](/api/classes/user/).`globalName` | [`User`](/api/classes/user/).`globalName` |
| `id` | `public` | `string` | [`User`](/api/classes/user/).`id` | [`User`](/api/classes/user/).`id` |
| `locale` | `public` | `undefined` \| `string` | [`User`](/api/classes/user/).`locale` | [`User`](/api/classes/user/).`locale` |
| `mfaEnabled` | `public` | `undefined` \| `boolean` | [`User`](/api/classes/user/).`mfaEnabled` | [`User`](/api/classes/user/).`mfaEnabled` |
| `premiumType` | `public` | `undefined` \| `UserPremiumType` | [`User`](/api/classes/user/).`premiumType` | [`User`](/api/classes/user/).`premiumType` |
| `publicFlags` | `public` | `undefined` \| `UserFlags` | [`User`](/api/classes/user/).`publicFlags` | [`User`](/api/classes/user/).`publicFlags` |
| `system` | `public` | `undefined` \| `boolean` | [`User`](/api/classes/user/).`system` | [`User`](/api/classes/user/).`system` |
| `username` | `public` | `string` | [`User`](/api/classes/user/).`username` | [`User`](/api/classes/user/).`username` |
| `verified` | `public` | `undefined` \| `boolean` | [`User`](/api/classes/user/).`verified` | [`User`](/api/classes/user/).`verified` |

## Accessors

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

### name

```ts
get name(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/User.ts:12](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/User.ts#L12)

***

### tag

```ts
get tag(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/User.ts:8](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/User.ts#L8)

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

#### Inherited from

[`User`](/api/classes/user/).[`avatarURL`](/api/classes/user/#avatarurl)

#### Source

[seyfert/src/structures/User.ts:34](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/User.ts#L34)

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

#### Inherited from

[`User`](/api/classes/user/).[`dm`](/api/classes/user/#dm)

#### Source

[seyfert/src/structures/User.ts:26](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/User.ts#L26)

***

### edit()

```ts
edit(body: RESTPatchAPICurrentUserJSONBody): Promise<ClientUser>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `RESTPatchAPICurrentUserJSONBody` |

#### Returns

`Promise`\<[`ClientUser`](/api/classes/clientuser/)\>

#### Source

[seyfert/src/structures/ClientUser.ts:20](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/ClientUser.ts#L20)

***

### fetch()

```ts
fetch(): Promise<ClientUser>
```

Fetch user

#### Returns

`Promise`\<[`ClientUser`](/api/classes/clientuser/)\>

#### Overrides

[`User`](/api/classes/user/).[`fetch`](/api/classes/user/#fetch)

#### Source

[seyfert/src/structures/ClientUser.ts:15](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/ClientUser.ts#L15)

***

### presence()

```ts
presence(): ReturnCache<undefined | Omit<GatewayPresenceUpdate, "user"> & Object & Object>
```

#### Returns

[`ReturnCache`](/api/type-aliases/returncache/)\<`undefined` \| `Omit`\<`GatewayPresenceUpdate`, `"user"`\> & `Object` & `Object`\>

#### Inherited from

[`User`](/api/classes/user/).[`presence`](/api/classes/user/#presence)

#### Source

[seyfert/src/structures/User.ts:41](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/User.ts#L41)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Inherited from

[`User`](/api/classes/user/).[`toString`](/api/classes/user/#tostring)

#### Source

[seyfert/src/structures/User.ts:45](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/User.ts#L45)

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

#### Inherited from

[`User`](/api/classes/user/).[`write`](/api/classes/user/#write)

#### Source

[seyfert/src/structures/User.ts:30](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/User.ts#L30)
