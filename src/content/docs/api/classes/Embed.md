---
editUrl: false
next: false
prev: false
title: "Embed"
---

Represents a message embed.

## Example

```ts
const embed = new MessageEmbed();
embed.setTitle('Seyfert');
embed.setDescription('Better than discord.js');
embed.setColor('Green');
const embedJSON = embed.json();
```

## Constructors

### new Embed(data)

```ts
new Embed(data: Partial<APIEmbed>): Embed
```

Creates a new instance of MessageEmbed.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `Partial`\<`APIEmbed`\> | The initial data for the embed. |

#### Returns

[`Embed`](/api/classes/embed/)

#### Example

```ts
const embed = new MessageEmbed({ title: 'Hello', description: 'This is an example embed' });
```

#### Source

[seyfert/src/builders/MessageEmbed.ts:30](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/MessageEmbed.ts#L30)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `data` | `public` | `Partial`\<`APIEmbed`\> | The initial data for the embed. |

## Methods

### addFields()

```ts
addFields(...fields: RestOrArray<APIEmbedField>): this
```

Adds one or more fields to the embed.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`fields` | `RestOrArray`\<`APIEmbedField`\> | The fields to add to the embed. |

#### Returns

`this`

The updated MessageEmbed instance.

#### Example

```ts
embed.addFields({ name: 'Field 1', value: 'Value 1' }, { name: 'Field 2', value: 'Value 2' });
```

#### Source

[seyfert/src/builders/MessageEmbed.ts:78](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/MessageEmbed.ts#L78)

***

### setAuthor()

```ts
setAuthor(author:     Object): this
```

Sets the author of the embed.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `author` | `Object` | The author information. |
| `author.iconUrl` | `undefined` \| `string` | - |
| `author.name` | `string` | - |
| `author.proxyIconUrl` | `undefined` \| `string` | - |
| `author.url` | `undefined` \| `string` | - |

#### Returns

`this`

The updated MessageEmbed instance.

#### Example

```ts
embed.setAuthor({ name: 'John Doe', iconURL: 'https://example.com/avatar.png' });
```

#### Source

[seyfert/src/builders/MessageEmbed.ts:41](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/MessageEmbed.ts#L41)

***

### setColor()

```ts
setColor(color: ColorResolvable): this
```

Sets the color of the embed.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `color` | `ColorResolvable` | The color of the embed. |

#### Returns

`this`

The updated MessageEmbed instance.

#### Example

```ts
embed.setColor('#FF0000');
embed.setColor('Blurple');
```

#### Source

[seyfert/src/builders/MessageEmbed.ts:54](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/MessageEmbed.ts#L54)

***

### setDescription()

```ts
setDescription(desc: string): this
```

Sets the description of the embed.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `desc` | `string` | The description of the embed. |

#### Returns

`this`

The updated MessageEmbed instance.

#### Example

```ts
embed.setDescription('This is the description of the embed');
```

#### Source

[seyfert/src/builders/MessageEmbed.ts:66](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/MessageEmbed.ts#L66)

***

### setFields()

```ts
setFields(fields: APIEmbedField[]): this
```

Sets the fields of the embed.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fields` | `APIEmbedField`[] | The fields of the embed. |

#### Returns

`this`

The updated MessageEmbed instance.

#### Example

```ts
embed.setFields([{ name: 'Field 1', value: 'Value 1' }, { name: 'Field 2', value: 'Value 2' }]);
```

#### Source

[seyfert/src/builders/MessageEmbed.ts:90](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/MessageEmbed.ts#L90)

***

### setFooter()

```ts
setFooter(footer:     Object): this
```

Sets the footer of the embed.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `footer` | `Object` | The footer information. |
| `footer.iconUrl` | `undefined` \| `string` | - |
| `footer.text` | `string` | - |

#### Returns

`this`

The updated MessageEmbed instance.

#### Example

```ts
embed.setFooter({ text: 'This is the footer', iconURL: 'https://example.com/footer.png' });
```

#### Source

[seyfert/src/builders/MessageEmbed.ts:102](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/MessageEmbed.ts#L102)

***

### setImage()

```ts
setImage(url: string): this
```

Sets the image of the embed.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL of the image. |

#### Returns

`this`

The updated MessageEmbed instance.

#### Example

```ts
embed.setImage('https://example.com/image.png');
```

#### Source

[seyfert/src/builders/MessageEmbed.ts:114](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/MessageEmbed.ts#L114)

***

### setThumbnail()

```ts
setThumbnail(url?: string): Embed
```

Sets the thumbnail of the embed.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `url`? | `string` | The URL of the thumbnail. |

#### Returns

[`Embed`](/api/classes/embed/)

The updated MessageEmbed instance.

#### Example

```ts
embed.setThumbnail('https://example.com/thumbnail.png');
```

#### Source

[seyfert/src/builders/MessageEmbed.ts:164](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/MessageEmbed.ts#L164)

***

### setTimestamp()

```ts
setTimestamp(time: string | number | Date): this
```

Sets the timestamp of the embed.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `time` | `string` \| `number` \| `Date` | The timestamp value. |

#### Returns

`this`

The updated MessageEmbed instance.

#### Example

```ts
embed.setTimestamp();
embed.setTimestamp(1628761200000);
embed.setTimestamp(new Date());
```

#### Source

[seyfert/src/builders/MessageEmbed.ts:128](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/MessageEmbed.ts#L128)

***

### setTitle()

```ts
setTitle(title: string): this
```

Sets the title of the embed.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | The title of the embed. |

#### Returns

`this`

The updated MessageEmbed instance.

#### Example

```ts
embed.setTitle('This is the title');
```

#### Source

[seyfert/src/builders/MessageEmbed.ts:140](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/MessageEmbed.ts#L140)

***

### setURL()

```ts
setURL(url: string): this
```

Sets the URL of the embed.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL of the embed. |

#### Returns

`this`

The updated MessageEmbed instance.

#### Example

```ts
embed.setURL('https://seyfert.com');
```

#### Source

[seyfert/src/builders/MessageEmbed.ts:152](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/MessageEmbed.ts#L152)

***

### toJSON()

```ts
toJSON(): APIEmbed
```

Converts the MessageEmbed instance to a JSON object.

#### Returns

`APIEmbed`

The JSON representation of the MessageEmbed instance.

#### Source

[seyfert/src/builders/MessageEmbed.ts:173](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/MessageEmbed.ts#L173)
