[seyfert](../globals.md) / ClientUser

# Class: ClientUser

## Extends

- [`User`](User.md)

## Constructors

### new ClientUser()

```ts
new ClientUser(
   client: UsingClient, 
   data: APIUser, 
   application: Pick<APIApplication, "id" | "flags">): ClientUser
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `data` | `APIUser` |
| `application` | `Pick`\<`APIApplication`, `"id"` \| `"flags"`\> |

#### Returns

[`ClientUser`](ClientUser.md)

#### Overrides

[`User`](User.md).[`constructor`](User.md#constructors)

#### Source

[seyfert/src/structures/ClientUser.ts:7](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/ClientUser.ts#L7)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `accentColor` | `public` | `undefined` \| `null` \| `number` | `undefined` | [`User`](User.md).`accentColor` | [`User`](User.md).`accentColor` |
| `application` | `public` | `Pick`\<`APIApplication`, `"id"` \| `"flags"`\> | `undefined` | - | - |
| `avatar` | `public` | `null` \| `string` | `undefined` | [`User`](User.md).`avatar` | [`User`](User.md).`avatar` |
| `avatarDecoration` | `public` | `undefined` \| `null` \| `string` | `undefined` | [`User`](User.md).`avatarDecoration` | [`User`](User.md).`avatarDecoration` |
| `avatarDecorationData` | `public` | `undefined` \| `null` \| \{ `asset`: `string`; `skuId`: `string`; \} | `undefined` | [`User`](User.md).`avatarDecorationData` | [`User`](User.md).`avatarDecorationData` |
| `banner` | `public` | `undefined` \| `null` \| `string` | `undefined` | [`User`](User.md).`banner` | [`User`](User.md).`banner` |
| `bot` | `public` | `boolean` | `true` | [`User`](User.md).`bot` | [`User`](User.md).`bot` |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | `undefined` | [`User`](User.md).`client` | [`User`](User.md).`client` |
| `discriminator` | `public` | `string` | `undefined` | [`User`](User.md).`discriminator` | [`User`](User.md).`discriminator` |
| `email` | `public` | `undefined` \| `null` \| `string` | `undefined` | [`User`](User.md).`email` | [`User`](User.md).`email` |
| `flags` | `public` | `undefined` \| `UserFlags` | `undefined` | [`User`](User.md).`flags` | [`User`](User.md).`flags` |
| `globalName` | `public` | `null` \| `string` | `undefined` | [`User`](User.md).`globalName` | [`User`](User.md).`globalName` |
| `id` | `public` | `string` | `undefined` | [`User`](User.md).`id` | [`User`](User.md).`id` |
| `locale` | `public` | `undefined` \| `string` | `undefined` | [`User`](User.md).`locale` | [`User`](User.md).`locale` |
| `mfaEnabled` | `public` | `undefined` \| `boolean` | `undefined` | [`User`](User.md).`mfaEnabled` | [`User`](User.md).`mfaEnabled` |
| `premiumType` | `public` | `undefined` \| `UserPremiumType` | `undefined` | [`User`](User.md).`premiumType` | [`User`](User.md).`premiumType` |
| `publicFlags` | `public` | `undefined` \| `UserFlags` | `undefined` | [`User`](User.md).`publicFlags` | [`User`](User.md).`publicFlags` |
| `system` | `public` | `undefined` \| `boolean` | `undefined` | [`User`](User.md).`system` | [`User`](User.md).`system` |
| `username` | `public` | `string` | `undefined` | [`User`](User.md).`username` | [`User`](User.md).`username` |
| `verified` | `public` | `undefined` \| `boolean` | `undefined` | [`User`](User.md).`verified` | [`User`](User.md).`verified` |

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

### name

```ts
get name(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/User.ts:14](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/User.ts#L14)

***

### tag

```ts
get tag(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/User.ts:10](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/User.ts#L10)

## Methods

### avatarDecorationURL()

```ts
avatarDecorationURL(options?: CDNUrlOptions): undefined | string
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | [`CDNUrlOptions`](../interfaces/CDNUrlOptions.md) |

#### Returns

`undefined` \| `string`

#### Inherited from

[`User`](User.md).[`avatarDecorationURL`](User.md#avatardecorationurl)

#### Source

[seyfert/src/structures/User.ts:48](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/User.ts#L48)

***

### avatarURL()

```ts
avatarURL(options?: CDNUrlOptions): string
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | [`CDNUrlOptions`](../interfaces/CDNUrlOptions.md) |

#### Returns

`string`

#### Inherited from

[`User`](User.md).[`avatarURL`](User.md#avatarurl)

#### Source

[seyfert/src/structures/User.ts:40](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/User.ts#L40)

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

#### Inherited from

[`User`](User.md).[`bannerURL`](User.md#bannerurl)

#### Source

[seyfert/src/structures/User.ts:53](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/User.ts#L53)

***

### defaultAvatarURL()

```ts
defaultAvatarURL(): string
```

#### Returns

`string`

#### Inherited from

[`User`](User.md).[`defaultAvatarURL`](User.md#defaultavatarurl)

#### Source

[seyfert/src/structures/User.ts:36](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/User.ts#L36)

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

`Promise`\<[`DMChannel`](DMChannel.md)\>

#### Inherited from

[`User`](User.md).[`dm`](User.md#dm)

#### Source

[seyfert/src/structures/User.ts:28](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/User.ts#L28)

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

`Promise`\<[`ClientUser`](ClientUser.md)\>

#### Source

[seyfert/src/structures/ClientUser.ts:20](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/ClientUser.ts#L20)

***

### fetch()

```ts
fetch(): Promise<ClientUser>
```

Fetch user

#### Returns

`Promise`\<[`ClientUser`](ClientUser.md)\>

#### Overrides

[`User`](User.md).[`fetch`](User.md#fetch)

#### Source

[seyfert/src/structures/ClientUser.ts:15](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/ClientUser.ts#L15)

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

[`User`](User.md).[`presence`](User.md#presence)

#### Source

[seyfert/src/structures/User.ts:58](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/User.ts#L58)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Inherited from

[`User`](User.md).[`toString`](User.md#tostring)

#### Source

[seyfert/src/structures/User.ts:62](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/User.ts#L62)

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

#### Inherited from

[`User`](User.md).[`write`](User.md#write)

#### Source

[seyfert/src/structures/User.ts:32](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/User.ts#L32)
