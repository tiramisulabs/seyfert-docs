---
editUrl: false
next: false
prev: false
title: "Embed"
---

Represents a message embed.

## Example

```ts
const embed = new Embed();
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

Creates a new instance of Embed.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `Partial`\<`APIEmbed`\> | The initial data for the embed. |

#### Returns

[`Embed`](/api/classes/embed/)

#### Example

```ts
const embed = new Embed({ title: 'Hello', description: 'This is an example embed' });
```

#### Source

[seyfert/src/builders/Embed.ts:29](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Embed.ts#L29)

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

The updated Embed instance.

#### Example

```ts
embed.addFields({ name: 'Field 1', value: 'Value 1' }, { name: 'Field 2', value: 'Value 2' });
```

#### Source

[seyfert/src/builders/Embed.ts:77](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Embed.ts#L77)

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

The updated Embed instance.

#### Example

```ts
embed.setAuthor({ name: 'John Doe', iconURL: 'https://example.com/avatar.png' });
```

#### Source

[seyfert/src/builders/Embed.ts:40](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Embed.ts#L40)

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

The updated Embed instance.

#### Example

```ts
embed.setColor('#FF0000');
embed.setColor('Blurple');
```

#### Source

[seyfert/src/builders/Embed.ts:53](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Embed.ts#L53)

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

The updated Embed instance.

#### Example

```ts
embed.setDescription('This is the description of the embed');
```

#### Source

[seyfert/src/builders/Embed.ts:65](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Embed.ts#L65)

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

The updated Embed instance.

#### Example

```ts
embed.setFields([{ name: 'Field 1', value: 'Value 1' }, { name: 'Field 2', value: 'Value 2' }]);
```

#### Source

[seyfert/src/builders/Embed.ts:89](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Embed.ts#L89)

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

The updated Embed instance.

#### Example

```ts
embed.setFooter({ text: 'This is the footer', iconURL: 'https://example.com/footer.png' });
```

#### Source

[seyfert/src/builders/Embed.ts:101](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Embed.ts#L101)

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

The updated Embed instance.

#### Example

```ts
embed.setImage('https://example.com/image.png');
```

#### Source

[seyfert/src/builders/Embed.ts:113](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Embed.ts#L113)

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

The updated Embed instance.

#### Example

```ts
embed.setThumbnail('https://example.com/thumbnail.png');
```

#### Source

[seyfert/src/builders/Embed.ts:163](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Embed.ts#L163)

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

The updated Embed instance.

#### Example

```ts
embed.setTimestamp();
embed.setTimestamp(1628761200000);
embed.setTimestamp(new Date());
```

#### Source

[seyfert/src/builders/Embed.ts:127](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Embed.ts#L127)

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

The updated Embed instance.

#### Example

```ts
embed.setTitle('This is the title');
```

#### Source

[seyfert/src/builders/Embed.ts:139](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Embed.ts#L139)

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

The updated Embed instance.

#### Example

```ts
embed.setURL('https://seyfert.com');
```

#### Source

[seyfert/src/builders/Embed.ts:151](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Embed.ts#L151)

***

### toJSON()

```ts
toJSON(): APIEmbed
```

Converts the Embed instance to a JSON object.

#### Returns

`APIEmbed`

The JSON representation of the MessageEmbed instance.

#### Source

[seyfert/src/builders/Embed.ts:172](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Embed.ts#L172)
