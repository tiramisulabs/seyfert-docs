[seyfert](../globals.md) / User

# Class: User

## Extends

- `ObjectToLower`\<`APIUser`\>.`DiscordBase`\<`APIUser`\>

## Extended by

- [`ClientUser`](ClientUser.md)

## Constructors

### new User()

```ts
new User(client: UsingClient, data: APIUser): User
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) | - |
| `data` | `APIUser` | Unique ID of the object |

#### Returns

[`User`](User.md)

#### Inherited from

`ObjectToLower<APIUser>.constructor`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:7](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/DiscordBase.ts#L7)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `accentColor` | `public` | `undefined` \| `null` \| `number` | `ObjectToLower.accentColor` |
| `avatar` | `public` | `null` \| `string` | `ObjectToLower.avatar` |
| `avatarDecoration` | `public` | `undefined` \| `null` \| `string` | `ObjectToLower.avatarDecoration` |
| `avatarDecorationData` | `public` | `undefined` \| `null` \| \{ `asset`: `string`; `skuId`: `string`; \} | `ObjectToLower.avatarDecorationData` |
| `banner` | `public` | `undefined` \| `null` \| `string` | `ObjectToLower.banner` |
| `bot` | `public` | `undefined` \| `boolean` | `ObjectToLower.bot` |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | - |
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

#### Source

[seyfert/src/structures/User.ts:53](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/User.ts#L53)

***

### defaultAvatarURL()

```ts
defaultAvatarURL(): string
```

#### Returns

`string`

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

#### Source

[seyfert/src/structures/User.ts:28](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/User.ts#L28)

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

`Promise`\<[`User`](User.md)\>

#### Source

[seyfert/src/structures/User.ts:21](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/User.ts#L21)

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

[seyfert/src/structures/User.ts:58](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/User.ts#L58)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

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

#### Source

[seyfert/src/structures/User.ts:32](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/User.ts#L32)
