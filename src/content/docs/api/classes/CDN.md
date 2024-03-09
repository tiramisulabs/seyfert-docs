---
editUrl: false
next: false
prev: false
title: "CDN"
---

The CDN link builder

## Constructors

### new CDN(base)

```ts
new CDN(base: string): CDN
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `base` | `string` | `CDN_URL` |

#### Returns

[`CDN`](/api/classes/cdn/)

#### Source

[seyfert/src/api/CDN.ts:65](https://github.com/potoland/potocuit/blob/e332d7a/src/api/CDN.ts#L65)

## Methods

### appAsset()

```ts
appAsset(
   clientId: string, 
   assetHash: string, 
   options?: Readonly<BaseImageURLOptions>): string
```

Generates an app asset URL for a client's asset.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `clientId` | `string` | The client id that has the asset |
| `assetHash` | `string` | The hash provided by Discord for this asset |
| `options`? | `Readonly`\<[`BaseImageURLOptions`](/api/interfaces/baseimageurloptions/)\> | Optional options for the asset |

#### Returns

`string`

#### Source

[seyfert/src/api/CDN.ts:74](https://github.com/potoland/potocuit/blob/e332d7a/src/api/CDN.ts#L74)

***

### appIcon()

```ts
appIcon(
   clientId: string, 
   iconHash: string, 
   options?: Readonly<BaseImageURLOptions>): string
```

Generates an app icon URL for a client's icon.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `clientId` | `string` | The client id that has the icon |
| `iconHash` | `string` | The hash provided by Discord for this icon |
| `options`? | `Readonly`\<[`BaseImageURLOptions`](/api/interfaces/baseimageurloptions/)\> | Optional options for the icon |

#### Returns

`string`

#### Source

[seyfert/src/api/CDN.ts:85](https://github.com/potoland/potocuit/blob/e332d7a/src/api/CDN.ts#L85)

***

### avatar()

```ts
avatar(
   id: string, 
   avatarHash: string, 
   options?: Readonly<ImageURLOptions>): string
```

Generates an avatar URL, e.g. for a user or a webhook.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id that has the icon |
| `avatarHash` | `string` | The hash provided by Discord for this avatar |
| `options`? | `Readonly`\<[`ImageURLOptions`](/api/interfaces/imageurloptions/)\> | Optional options for the avatar |

#### Returns

`string`

#### Source

[seyfert/src/api/CDN.ts:96](https://github.com/potoland/potocuit/blob/e332d7a/src/api/CDN.ts#L96)

***

### avatarDecoration()

```ts
avatarDecoration(
   userId: string, 
   userAvatarDecoration: string, 
   options?: Readonly<BaseImageURLOptions>): string
```

Generates a user avatar decoration URL.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | The id of the user |
| `userAvatarDecoration` | `string` | The hash provided by Discord for this avatar decoration |
| `options`? | `Readonly`\<[`BaseImageURLOptions`](/api/interfaces/baseimageurloptions/)\> | Optional options for the avatar decoration |

#### Returns

`string`

#### Source

[seyfert/src/api/CDN.ts:107](https://github.com/potoland/potocuit/blob/e332d7a/src/api/CDN.ts#L107)

***

### banner()

```ts
banner(
   id: string, 
   bannerHash: string, 
   options?: Readonly<ImageURLOptions>): string
```

Generates a banner URL, e.g. for a user or a guild.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id that has the banner splash |
| `bannerHash` | `string` | The hash provided by Discord for this banner |
| `options`? | `Readonly`\<[`ImageURLOptions`](/api/interfaces/imageurloptions/)\> | Optional options for the banner |

#### Returns

`string`

#### Source

[seyfert/src/api/CDN.ts:122](https://github.com/potoland/potocuit/blob/e332d7a/src/api/CDN.ts#L122)

***

### channelIcon()

```ts
channelIcon(
   channelId: string, 
   iconHash: string, 
   options?: Readonly<BaseImageURLOptions>): string
```

Generates an icon URL for a channel, e.g. a group DM.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | The channel id that has the icon |
| `iconHash` | `string` | The hash provided by Discord for this channel |
| `options`? | `Readonly`\<[`BaseImageURLOptions`](/api/interfaces/baseimageurloptions/)\> | Optional options for the icon |

#### Returns

`string`

#### Source

[seyfert/src/api/CDN.ts:133](https://github.com/potoland/potocuit/blob/e332d7a/src/api/CDN.ts#L133)

***

### defaultAvatar()

```ts
defaultAvatar(index: number): string
```

Generates a default avatar URL

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The default avatar index |

#### Returns

`string`

#### Remarks

To calculate the index for a user do `(userId >> 22) % 6`,
or `discriminator % 5` if they're using the legacy username system.

#### Source

[seyfert/src/api/CDN.ts:145](https://github.com/potoland/potocuit/blob/e332d7a/src/api/CDN.ts#L145)

***

### discoverySplash()

```ts
discoverySplash(
   guildId: string, 
   splashHash: string, 
   options?: Readonly<BaseImageURLOptions>): string
```

Generates a discovery splash URL for a guild's discovery splash.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | The guild id that has the discovery splash |
| `splashHash` | `string` | The hash provided by Discord for this splash |
| `options`? | `Readonly`\<[`BaseImageURLOptions`](/api/interfaces/baseimageurloptions/)\> | Optional options for the splash |

#### Returns

`string`

#### Source

[seyfert/src/api/CDN.ts:156](https://github.com/potoland/potocuit/blob/e332d7a/src/api/CDN.ts#L156)

***

### emoji()

#### emoji(emojiId, options)

```ts
emoji(emojiId: string, options?: Readonly<BaseImageURLOptions>): string
```

Generates an emoji's URL for an emoji.

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `emojiId` | `string` | The emoji id |
| `options`? | `Readonly`\<[`BaseImageURLOptions`](/api/interfaces/baseimageurloptions/)\> | Optional options for the emoji |

##### Returns

`string`

##### Source

[seyfert/src/api/CDN.ts:166](https://github.com/potoland/potocuit/blob/e332d7a/src/api/CDN.ts#L166)

#### emoji(emojiId, extension)

```ts
emoji(emojiId: string, extension?: 
  | "jpeg"
  | "png"
  | "webp"
  | "gif"
  | "jpg"): string
```

Generates an emoji's URL for an emoji.

:::caution[Deprecated]
This overload is deprecated. Pass an object containing the extension instead.
:::

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `emojiId` | `string` | The emoji id |
| `extension`? |  \| `"jpeg"` \| `"png"` \| `"webp"` \| `"gif"` \| `"jpg"` | The extension of the emoji |

##### Returns

`string`

##### Source

[seyfert/src/api/CDN.ts:176](https://github.com/potoland/potocuit/blob/e332d7a/src/api/CDN.ts#L176)

***

### guildMemberAvatar()

```ts
guildMemberAvatar(
   guildId: string, 
   userId: string, 
   avatarHash: string, 
   options?: Readonly<ImageURLOptions>): string
```

Generates a guild member avatar URL.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | The id of the guild |
| `userId` | `string` | The id of the user |
| `avatarHash` | `string` | The hash provided by Discord for this avatar |
| `options`? | `Readonly`\<[`ImageURLOptions`](/api/interfaces/imageurloptions/)\> | Optional options for the avatar |

#### Returns

`string`

#### Source

[seyfert/src/api/CDN.ts:206](https://github.com/potoland/potocuit/blob/e332d7a/src/api/CDN.ts#L206)

***

### guildMemberBanner()

```ts
guildMemberBanner(
   guildId: string, 
   userId: string, 
   bannerHash: string, 
   options?: Readonly<ImageURLOptions>): string
```

Generates a guild member banner URL.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | The id of the guild |
| `userId` | `string` | The id of the user |
| `bannerHash` | `string` | The hash provided by Discord for this banner |
| `options`? | `Readonly`\<[`ImageURLOptions`](/api/interfaces/imageurloptions/)\> | Optional options for the banner |

#### Returns

`string`

#### Source

[seyfert/src/api/CDN.ts:223](https://github.com/potoland/potocuit/blob/e332d7a/src/api/CDN.ts#L223)

***

### guildScheduledEventCover()

```ts
guildScheduledEventCover(
   scheduledEventId: string, 
   coverHash: string, 
   options?: Readonly<BaseImageURLOptions>): string
```

Generates a cover image for a guild scheduled event.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `scheduledEventId` | `string` | The scheduled event id |
| `coverHash` | `string` | The hash provided by discord for this cover image |
| `options`? | `Readonly`\<[`BaseImageURLOptions`](/api/interfaces/baseimageurloptions/)\> | Optional options for the cover image |

#### Returns

`string`

#### Source

[seyfert/src/api/CDN.ts:305](https://github.com/potoland/potocuit/blob/e332d7a/src/api/CDN.ts#L305)

***

### icon()

```ts
icon(
   id: string, 
   iconHash: string, 
   options?: Readonly<ImageURLOptions>): string
```

Generates an icon URL, e.g. for a guild.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id that has the icon splash |
| `iconHash` | `string` | The hash provided by Discord for this icon |
| `options`? | `Readonly`\<[`ImageURLOptions`](/api/interfaces/imageurloptions/)\> | Optional options for the icon |

#### Returns

`string`

#### Source

[seyfert/src/api/CDN.ts:239](https://github.com/potoland/potocuit/blob/e332d7a/src/api/CDN.ts#L239)

***

### roleIcon()

```ts
roleIcon(
   roleId: string, 
   roleIconHash: string, 
   options?: Readonly<BaseImageURLOptions>): string
```

Generates a URL for the icon of a role

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `roleId` | `string` | The id of the role that has the icon |
| `roleIconHash` | `string` | The hash provided by Discord for this role icon |
| `options`? | `Readonly`\<[`BaseImageURLOptions`](/api/interfaces/baseimageurloptions/)\> | Optional options for the role icon |

#### Returns

`string`

#### Source

[seyfert/src/api/CDN.ts:250](https://github.com/potoland/potocuit/blob/e332d7a/src/api/CDN.ts#L250)

***

### splash()

```ts
splash(
   guildId: string, 
   splashHash: string, 
   options?: Readonly<BaseImageURLOptions>): string
```

Generates a guild invite splash URL for a guild's invite splash.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `guildId` | `string` | The guild id that has the invite splash |
| `splashHash` | `string` | The hash provided by Discord for this splash |
| `options`? | `Readonly`\<[`BaseImageURLOptions`](/api/interfaces/baseimageurloptions/)\> | Optional options for the splash |

#### Returns

`string`

#### Source

[seyfert/src/api/CDN.ts:261](https://github.com/potoland/potocuit/blob/e332d7a/src/api/CDN.ts#L261)

***

### sticker()

```ts
sticker(stickerId: string, extension: "json" | "png" | "gif"): string
```

Generates a sticker URL.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `stickerId` | `string` | `undefined` | The sticker id |
| `extension` | `"json"` \| `"png"` \| `"gif"` | `'png'` | The extension of the sticker |

#### Returns

`string`

#### Source

[seyfert/src/api/CDN.ts:273](https://github.com/potoland/potocuit/blob/e332d7a/src/api/CDN.ts#L273)

***

### stickerPackBanner()

```ts
stickerPackBanner(bannerId: string, options?: Readonly<BaseImageURLOptions>): string
```

Generates a sticker pack banner URL.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `bannerId` | `string` | The banner id |
| `options`? | `Readonly`\<[`BaseImageURLOptions`](/api/interfaces/baseimageurloptions/)\> | Optional options for the banner |

#### Returns

`string`

#### Source

[seyfert/src/api/CDN.ts:283](https://github.com/potoland/potocuit/blob/e332d7a/src/api/CDN.ts#L283)

***

### teamIcon()

```ts
teamIcon(
   teamId: string, 
   iconHash: string, 
   options?: Readonly<BaseImageURLOptions>): string
```

Generates a team icon URL for a team's icon.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `teamId` | `string` | The team id that has the icon |
| `iconHash` | `string` | The hash provided by Discord for this icon |
| `options`? | `Readonly`\<[`BaseImageURLOptions`](/api/interfaces/baseimageurloptions/)\> | Optional options for the icon |

#### Returns

`string`

#### Source

[seyfert/src/api/CDN.ts:294](https://github.com/potoland/potocuit/blob/e332d7a/src/api/CDN.ts#L294)
