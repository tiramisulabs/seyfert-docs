---
editUrl: false
next: false
prev: false
title: "AnonymousGuild"
---

Class for anonymous guilds.

## Link

https://discord.com/developers/docs/resources/guild#guild-resource

## Extends

- `BaseGuild`

## Constructors

### new AnonymousGuild(client, data)

```ts
new AnonymousGuild(client: BaseClient, data: APIPartialGuild): AnonymousGuild
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `client` | `BaseClient` | - |
| `data` | `APIPartialGuild` | Unique ID of the object |

#### Returns

[`AnonymousGuild`](/api/classes/anonymousguild/)

#### Inherited from

`BaseGuild.constructor`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:7](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/DiscordBase.ts#L7)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `banner` | `public` | `undefined` \| `null` \| `string` | `BaseGuild.banner` |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | `BaseGuild.client` |
| `description` | `public` | `undefined` \| `null` \| `string` | `BaseGuild.description` |
| `features` | `public` | `undefined` \| `GuildFeature`[] | `BaseGuild.features` |
| `icon` | `public` | `null` \| `string` | `BaseGuild.icon` |
| `id` | `public` | `string` | `BaseGuild.id` |
| `name` | `public` | `string` | `BaseGuild.name` |
| `splash` | `public` | `null` \| `string` | `BaseGuild.splash` |
| `vanityUrlCode` | `public` | `undefined` \| `null` \| `string` | `BaseGuild.vanityUrlCode` |
| `verificationLevel` | `public` | `undefined` \| `GuildVerificationLevel` | `BaseGuild.verificationLevel` |
| `welcomeScreen` | `public` | `undefined` \| `APIGuildWelcomeScreen` | `BaseGuild.welcomeScreen` |

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

### partnered

```ts
get partnered(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:11](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/BaseGuild.ts#L11)

***

### verified

```ts
get verified(): boolean
```

If the guild is verified.

#### Link

https://discord.com/developers/docs/resources/guild#guild-object-guild-features

#### Returns

`boolean`

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:22](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/BaseGuild.ts#L22)

## Methods

### bannerURL()

```ts
bannerURL(options?: ImageURLOptions): undefined | string
```

bannerURL gets the current guild banner as a string.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | [`ImageURLOptions`](/api/interfaces/imageurloptions/) | Image options for the banner url. |

#### Returns

`undefined` \| `string`

Banner url or void

#### Inherited from

`BaseGuild.bannerURL`

#### Link

https://discord.com/developers/docs/reference#image-formatting

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:67](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/BaseGuild.ts#L67)

***

### fetch()

```ts
fetch(): Promise<BaseGuild>
```

Fetch guild on API

#### Returns

`Promise`\<`BaseGuild`\>

#### Inherited from

`BaseGuild.fetch`

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:32](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/BaseGuild.ts#L32)

***

### iconURL()

```ts
iconURL(options?: ImageURLOptions): undefined | string
```

iconURL gets the current guild icon.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | [`ImageURLOptions`](/api/interfaces/imageurloptions/) |

#### Returns

`undefined` \| `string`

#### Inherited from

`BaseGuild.iconURL`

#### Link

https://discord.com/developers/docs/reference#image-formatting

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:41](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/BaseGuild.ts#L41)

***

### splashURL()

```ts
splashURL(options?: ImageURLOptions): undefined | string
```

splashURL gets the current guild splash as a string.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | [`ImageURLOptions`](/api/interfaces/imageurloptions/) | Image options for the splash url. |

#### Returns

`undefined` \| `string`

Splash url or void.

#### Inherited from

`BaseGuild.splashURL`

#### Link

https://discord.com/developers/docs/reference#image-formatting

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:54](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/BaseGuild.ts#L54)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Inherited from

`BaseGuild.toString`

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:74](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/BaseGuild.ts#L74)
