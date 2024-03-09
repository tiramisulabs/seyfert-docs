---
editUrl: false
next: false
prev: false
title: "GuildPreview"
---

Represent Discord Guild Preview Object

## Link

https://discord.com/developers/docs/resources/guild#guild-preview-object

## Extends

- [`AnonymousGuild`](/api/classes/anonymousguild/)

## Constructors

### new GuildPreview(client, data)

```ts
new GuildPreview(client: BaseClient, data: APIGuildPreview): GuildPreview
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | `BaseClient` |
| `data` | `APIGuildPreview` |

#### Returns

[`GuildPreview`](/api/classes/guildpreview/)

#### Overrides

[`AnonymousGuild`](/api/classes/anonymousguild/).[`constructor`](/api/classes/anonymousguild/#constructors)

#### Source

[seyfert/src/structures/GuildPreview.ts:10](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/GuildPreview.ts#L10)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `banner` | `public` | `undefined` \| `null` \| `string` | [`AnonymousGuild`](/api/classes/anonymousguild/).`banner` |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | [`AnonymousGuild`](/api/classes/anonymousguild/).`client` |
| `description` | `public` | `undefined` \| `null` \| `string` | [`AnonymousGuild`](/api/classes/anonymousguild/).`description` |
| `features` | `public` | `undefined` \| `GuildFeature`[] | [`AnonymousGuild`](/api/classes/anonymousguild/).`features` |
| `icon` | `public` | `null` \| `string` | [`AnonymousGuild`](/api/classes/anonymousguild/).`icon` |
| `id` | `public` | `string` | [`AnonymousGuild`](/api/classes/anonymousguild/).`id` |
| `name` | `public` | `string` | [`AnonymousGuild`](/api/classes/anonymousguild/).`name` |
| `splash` | `public` | `null` \| `string` | [`AnonymousGuild`](/api/classes/anonymousguild/).`splash` |
| `vanityUrlCode` | `public` | `undefined` \| `null` \| `string` | [`AnonymousGuild`](/api/classes/anonymousguild/).`vanityUrlCode` |
| `verificationLevel` | `public` | `undefined` \| `GuildVerificationLevel` | [`AnonymousGuild`](/api/classes/anonymousguild/).`verificationLevel` |
| `welcomeScreen` | `public` | `undefined` \| `APIGuildWelcomeScreen` | [`AnonymousGuild`](/api/classes/anonymousguild/).`welcomeScreen` |

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

### partnered

```ts
get partnered(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:11](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/extra/BaseGuild.ts#L11)

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

[seyfert/src/structures/extra/BaseGuild.ts:22](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/extra/BaseGuild.ts#L22)

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

[`AnonymousGuild`](/api/classes/anonymousguild/).[`bannerURL`](/api/classes/anonymousguild/#bannerurl)

#### Link

https://discord.com/developers/docs/reference#image-formatting

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:67](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/extra/BaseGuild.ts#L67)

***

### fetch()

```ts
fetch(): Promise<BaseGuild>
```

Fetch guild on API

#### Returns

`Promise`\<`BaseGuild`\>

#### Inherited from

[`AnonymousGuild`](/api/classes/anonymousguild/).[`fetch`](/api/classes/anonymousguild/#fetch)

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:32](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/extra/BaseGuild.ts#L32)

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

[`AnonymousGuild`](/api/classes/anonymousguild/).[`iconURL`](/api/classes/anonymousguild/#iconurl)

#### Link

https://discord.com/developers/docs/reference#image-formatting

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:41](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/extra/BaseGuild.ts#L41)

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

[`AnonymousGuild`](/api/classes/anonymousguild/).[`splashURL`](/api/classes/anonymousguild/#splashurl)

#### Link

https://discord.com/developers/docs/reference#image-formatting

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:54](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/extra/BaseGuild.ts#L54)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Inherited from

[`AnonymousGuild`](/api/classes/anonymousguild/).[`toString`](/api/classes/anonymousguild/#tostring)

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:74](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/extra/BaseGuild.ts#L74)
