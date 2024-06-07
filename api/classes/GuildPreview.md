[seyfert](../globals.md) / GuildPreview

# Class: GuildPreview

Represent Discord Guild Preview Object

## Link

https://discord.com/developers/docs/resources/guild#guild-preview-object

## Extends

- [`AnonymousGuild`](AnonymousGuild.md)

## Constructors

### new GuildPreview()

```ts
new GuildPreview(client: UsingClient, data: APIGuildPreview): GuildPreview
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `data` | `APIGuildPreview` |

#### Returns

[`GuildPreview`](GuildPreview.md)

#### Overrides

[`AnonymousGuild`](AnonymousGuild.md).[`constructor`](AnonymousGuild.md#constructors)

#### Source

[seyfert/src/structures/GuildPreview.ts:10](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildPreview.ts#L10)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `banner` | `public` | `undefined` \| `null` \| `string` | [`AnonymousGuild`](AnonymousGuild.md).`banner` |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | [`AnonymousGuild`](AnonymousGuild.md).`client` |
| `description` | `public` | `undefined` \| `null` \| `string` | [`AnonymousGuild`](AnonymousGuild.md).`description` |
| `features` | `public` | `undefined` \| `GuildFeature`[] | [`AnonymousGuild`](AnonymousGuild.md).`features` |
| `icon` | `public` | `null` \| `string` | [`AnonymousGuild`](AnonymousGuild.md).`icon` |
| `id` | `public` | `string` | [`AnonymousGuild`](AnonymousGuild.md).`id` |
| `name` | `public` | `string` | [`AnonymousGuild`](AnonymousGuild.md).`name` |
| `splash` | `public` | `null` \| `string` | [`AnonymousGuild`](AnonymousGuild.md).`splash` |
| `vanityUrlCode` | `public` | `undefined` \| `null` \| `string` | [`AnonymousGuild`](AnonymousGuild.md).`vanityUrlCode` |
| `verificationLevel` | `public` | `undefined` \| `GuildVerificationLevel` | [`AnonymousGuild`](AnonymousGuild.md).`verificationLevel` |
| `welcomeScreen` | `public` | `undefined` \| \{ `description`: `null` \| `string`; `welcomeChannels`: \{ `channelId`: `string`; `description`: `string`; `emojiId`: `null` \| `string`; `emojiName`: `null` \| `string`; \}[]; \} | [`AnonymousGuild`](AnonymousGuild.md).`welcomeScreen` |

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

### partnered

```ts
get partnered(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:11](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/BaseGuild.ts#L11)

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

[seyfert/src/structures/extra/BaseGuild.ts:22](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/BaseGuild.ts#L22)

## Methods

### bannerURL()

```ts
bannerURL(options?: CDNUrlOptions): undefined | string
```

bannerURL gets the current guild banner as a string.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | [`CDNUrlOptions`](../interfaces/CDNUrlOptions.md) | Image options for the banner url. |

#### Returns

`undefined` \| `string`

Banner url or void

#### Inherited from

[`AnonymousGuild`](AnonymousGuild.md).[`bannerURL`](AnonymousGuild.md#bannerurl)

#### Link

https://discord.com/developers/docs/reference#image-formatting

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:67](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/BaseGuild.ts#L67)

***

### fetch()

```ts
fetch(): Promise<BaseGuild>
```

Fetch guild on API

#### Returns

`Promise`\<`BaseGuild`\>

#### Inherited from

[`AnonymousGuild`](AnonymousGuild.md).[`fetch`](AnonymousGuild.md#fetch)

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:32](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/BaseGuild.ts#L32)

***

### iconURL()

```ts
iconURL(options?: CDNUrlOptions): undefined | string
```

iconURL gets the current guild icon.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | [`CDNUrlOptions`](../interfaces/CDNUrlOptions.md) |

#### Returns

`undefined` \| `string`

#### Inherited from

[`AnonymousGuild`](AnonymousGuild.md).[`iconURL`](AnonymousGuild.md#iconurl)

#### Link

https://discord.com/developers/docs/reference#image-formatting

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:41](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/BaseGuild.ts#L41)

***

### splashURL()

```ts
splashURL(options?: CDNUrlOptions): undefined | string
```

splashURL gets the current guild splash as a string.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | [`CDNUrlOptions`](../interfaces/CDNUrlOptions.md) | Image options for the splash url. |

#### Returns

`undefined` \| `string`

Splash url or void.

#### Inherited from

[`AnonymousGuild`](AnonymousGuild.md).[`splashURL`](AnonymousGuild.md#splashurl)

#### Link

https://discord.com/developers/docs/reference#image-formatting

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:54](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/BaseGuild.ts#L54)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Inherited from

[`AnonymousGuild`](AnonymousGuild.md).[`toString`](AnonymousGuild.md#tostring)

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:74](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/BaseGuild.ts#L74)
