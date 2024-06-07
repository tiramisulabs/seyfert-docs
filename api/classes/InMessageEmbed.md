[seyfert](../globals.md) / InMessageEmbed

# Class: InMessageEmbed

## Constructors

### new InMessageEmbed()

```ts
new InMessageEmbed(data: APIEmbed): InMessageEmbed
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `APIEmbed` |

#### Returns

[`InMessageEmbed`](InMessageEmbed.md)

#### Source

[seyfert/src/structures/Message.ts:200](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L200)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `data` | `public` | `APIEmbed` |

## Accessors

### author

```ts
get author(): undefined | {
  iconUrl: undefined | string;
  name: string;
  proxyIconUrl: undefined | string;
  url: undefined | string;
}
```

#### Returns

`undefined` \| \{
  `iconUrl`: `undefined` \| `string`;
  `name`: `string`;
  `proxyIconUrl`: `undefined` \| `string`;
  `url`: `undefined` \| `string`;
 \}

#### Source

[seyfert/src/structures/Message.ts:249](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L249)

***

### color

```ts
get color(): undefined | number
```

#### Returns

`undefined` \| `number`

#### Source

[seyfert/src/structures/Message.ts:225](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L225)

***

### description

```ts
get description(): undefined | string
```

#### Returns

`undefined` \| `string`

#### Source

[seyfert/src/structures/Message.ts:213](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L213)

***

### fields

```ts
get fields(): undefined | APIEmbedField[]
```

#### Returns

`undefined` \| `APIEmbedField`[]

#### Source

[seyfert/src/structures/Message.ts:253](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L253)

***

### footer

```ts
get footer(): undefined | {
  iconUrl: undefined | string;
  proxyIconUrl: undefined | string;
  text: string;
}
```

#### Returns

`undefined` \| \{
  `iconUrl`: `undefined` \| `string`;
  `proxyIconUrl`: `undefined` \| `string`;
  `text`: `string`;
 \}

#### Source

[seyfert/src/structures/Message.ts:229](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L229)

***

### image

```ts
get image(): undefined | {
  height: undefined | number;
  proxyUrl: undefined | string;
  url: string;
  width: undefined | number;
}
```

#### Returns

`undefined` \| \{
  `height`: `undefined` \| `number`;
  `proxyUrl`: `undefined` \| `string`;
  `url`: `string`;
  `width`: `undefined` \| `number`;
 \}

#### Source

[seyfert/src/structures/Message.ts:233](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L233)

***

### provider

```ts
get provider(): undefined | APIEmbedProvider
```

#### Returns

`undefined` \| `APIEmbedProvider`

#### Source

[seyfert/src/structures/Message.ts:245](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L245)

***

### thumbnail

```ts
get thumbnail(): undefined | {
  height: undefined | number;
  proxyUrl: undefined | string;
  url: string;
  width: undefined | number;
}
```

#### Returns

`undefined` \| \{
  `height`: `undefined` \| `number`;
  `proxyUrl`: `undefined` \| `string`;
  `url`: `string`;
  `width`: `undefined` \| `number`;
 \}

#### Source

[seyfert/src/structures/Message.ts:237](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L237)

***

### timestamp

```ts
get timestamp(): undefined | string
```

#### Returns

`undefined` \| `string`

#### Source

[seyfert/src/structures/Message.ts:221](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L221)

***

### title

```ts
get title(): undefined | string
```

#### Returns

`undefined` \| `string`

#### Source

[seyfert/src/structures/Message.ts:202](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L202)

***

### type

```ts
get type(): undefined | EmbedType
```

#### Deprecated

#### Returns

`undefined` \| `EmbedType`

#### Source

[seyfert/src/structures/Message.ts:209](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L209)

***

### url

```ts
get url(): undefined | string
```

#### Returns

`undefined` \| `string`

#### Source

[seyfert/src/structures/Message.ts:217](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L217)

***

### video

```ts
get video(): undefined | {
  height: undefined | number;
  proxyUrl: undefined | string;
  url: undefined | string;
  width: undefined | number;
}
```

#### Returns

`undefined` \| \{
  `height`: `undefined` \| `number`;
  `proxyUrl`: `undefined` \| `string`;
  `url`: `undefined` \| `string`;
  `width`: `undefined` \| `number`;
 \}

#### Source

[seyfert/src/structures/Message.ts:241](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L241)

## Methods

### toBuilder()

```ts
toBuilder(): Embed
```

#### Returns

[`Embed`](Embed.md)

#### Source

[seyfert/src/structures/Message.ts:257](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L257)

***

### toJSON()

```ts
toJSON(): {
  author: APIEmbedAuthor;
  color: number;
  description: string;
  fields: APIEmbedField[];
  footer: APIEmbedFooter;
  image: APIEmbedImage;
  provider: APIEmbedProvider;
  thumbnail: APIEmbedThumbnail;
  timestamp: string;
  title: string;
  type: EmbedType;
  url: string;
  video: APIEmbedVideo;
}
```

#### Returns

```ts
{
  author: APIEmbedAuthor;
  color: number;
  description: string;
  fields: APIEmbedField[];
  footer: APIEmbedFooter;
  image: APIEmbedImage;
  provider: APIEmbedProvider;
  thumbnail: APIEmbedThumbnail;
  timestamp: string;
  title: string;
  type: EmbedType;
  url: string;
  video: APIEmbedVideo;
}
```

| Member | Type | Description |
| :------ | :------ | :------ |
| `author` | `APIEmbedAuthor` | <p>Author information</p><p>See https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure</p> |
| `color` | `number` | Color code of the embed |
| `description` | `string` | <p>Description of embed</p><p>Length limit: 4096 characters</p> |
| `fields` | `APIEmbedField`[] | <p>Fields information</p><p>Length limit: 25 field objects</p><p>See https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure</p> |
| `footer` | `APIEmbedFooter` | <p>Footer information</p><p>See https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure</p> |
| `image` | `APIEmbedImage` | <p>Image information</p><p>See https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure</p> |
| `provider` | `APIEmbedProvider` | <p>Provider information</p><p>See https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure</p> |
| `thumbnail` | `APIEmbedThumbnail` | <p>Thumbnail information</p><p>See https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure</p> |
| `timestamp` | `string` | Timestamp of embed content |
| `title` | `string` | <p>Title of embed</p><p>Length limit: 256 characters</p> |
| `type` | `EmbedType` | <p>Type of embed (always "rich" for webhook embeds)</p><p>**Deprecated**</p><p>*Embed types should be considered deprecated and might be removed in a future API version*</p><p>See https://discord.com/developers/docs/resources/channel#embed-object-embed-types</p> |
| `url` | `string` | URL of embed |
| `video` | `APIEmbedVideo` | <p>Video information</p><p>See https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure</p> |

#### Source

[seyfert/src/structures/Message.ts:261](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L261)
