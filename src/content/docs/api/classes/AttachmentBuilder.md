---
editUrl: false
next: false
prev: false
title: "AttachmentBuilder"
---

## Constructors

### new AttachmentBuilder(data)

```ts
new AttachmentBuilder(data: Partial<AttachmentData>): AttachmentBuilder
```

Creates a new Attachment instance.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `Partial`\<[`AttachmentData`](/api/interfaces/attachmentdata/)\> | The partial attachment data. |

#### Returns

[`AttachmentBuilder`](/api/classes/attachmentbuilder/)

#### Source

[seyfert/src/builders/Attachment.ts:43](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Attachment.ts#L43)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `data` | `public` | `Partial`\<[`AttachmentData`](/api/interfaces/attachmentdata/)\> | The partial attachment data. |

## Accessors

### spoiler

```ts
get spoiler(): boolean
```

Gets whether the attachment is a spoiler.

#### Returns

`boolean`

#### Source

[seyfert/src/builders/Attachment.ts:105](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Attachment.ts#L105)

## Methods

### setDescription()

```ts
setDescription(desc: string): this
```

Sets the description of the attachment.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `desc` | `string` | The description of the attachment. |

#### Returns

`this`

The Attachment instance.

#### Example

```ts
attachment.setDescription('This is an example attachment');
```

#### Source

[seyfert/src/builders/Attachment.ts:64](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Attachment.ts#L64)

***

### setFile()

```ts
setFile<T>(type: T, data: AttachmentResolvableMap[T]): this
```

Sets the file data of the attachment.

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends keyof [`AttachmentResolvableMap`](/api/interfaces/attachmentresolvablemap/) | keyof [`AttachmentResolvableMap`](/api/interfaces/attachmentresolvablemap/) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `type` | `T` | The type of the attachment data. |
| `data` | [`AttachmentResolvableMap`](/api/interfaces/attachmentresolvablemap/)\[`T`\] | The resolvable data of the attachment. |

#### Returns

`this`

The Attachment instance.

#### Example

```ts
attachment.setFile('url', 'https://example.com/example.jpg');
attachment.setFile('path', '../assets/example.jpg');
attachment.setFile('buffer', Buffer.from(image.decode()));
```

#### Source

[seyfert/src/builders/Attachment.ts:79](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Attachment.ts#L79)

***

### setName()

```ts
setName(name: string): this
```

Sets the name of the attachment.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the attachment. |

#### Returns

`this`

The Attachment instance.

#### Example

```ts
attachment.setName('example.jpg');
```

#### Source

[seyfert/src/builders/Attachment.ts:52](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Attachment.ts#L52)

***

### setSpoiler()

```ts
setSpoiler(spoiler: boolean): this
```

Sets whether the attachment is a spoiler.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `spoiler` | `boolean` | Whether the attachment is a spoiler. |

#### Returns

`this`

The Attachment instance.

#### Example

```ts
attachment.setSpoiler(true);
```

#### Source

[seyfert/src/builders/Attachment.ts:92](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Attachment.ts#L92)

***

### toJSON()

```ts
toJSON(): AttachmentData
```

Converts the Attachment instance to JSON.

#### Returns

[`AttachmentData`](/api/interfaces/attachmentdata/)

The JSON representation of the Attachment instance.

#### Source

[seyfert/src/builders/Attachment.ts:113](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Attachment.ts#L113)
