[seyfert](../globals.md) / AttachmentBuilder

# Class: AttachmentBuilder

## Constructors

### new AttachmentBuilder()

```ts
new AttachmentBuilder(data: Partial<AttachmentData>): AttachmentBuilder
```

Creates a new Attachment instance.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `Partial`\<[`AttachmentData`](../interfaces/AttachmentData.md)\> | The partial attachment data. |

#### Returns

[`AttachmentBuilder`](AttachmentBuilder.md)

#### Source

[seyfert/src/builders/Attachment.ts:42](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Attachment.ts#L42)

## Properties

| Property | Modifier | Type | Default value | Description |
| :------ | :------ | :------ | :------ | :------ |
| `data` | `public` | `Partial`\<[`AttachmentData`](../interfaces/AttachmentData.md)\> | `...` | The partial attachment data. |

## Accessors

### spoiler

```ts
get spoiler(): boolean
```

Gets whether the attachment is a spoiler.

#### Returns

`boolean`

#### Source

[seyfert/src/builders/Attachment.ts:106](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Attachment.ts#L106)

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

[seyfert/src/builders/Attachment.ts:65](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Attachment.ts#L65)

***

### setFile()

```ts
setFile<T>(type: T, data: AttachmentResolvableMap[T]): this
```

Sets the file data of the attachment.

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* keyof [`AttachmentResolvableMap`](../interfaces/AttachmentResolvableMap.md) | keyof [`AttachmentResolvableMap`](../interfaces/AttachmentResolvableMap.md) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `type` | `T` | The type of the attachment data. |
| `data` | [`AttachmentResolvableMap`](../interfaces/AttachmentResolvableMap.md)\[`T`\] | The resolvable data of the attachment. |

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

[seyfert/src/builders/Attachment.ts:80](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Attachment.ts#L80)

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

[seyfert/src/builders/Attachment.ts:53](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Attachment.ts#L53)

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

[seyfert/src/builders/Attachment.ts:93](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Attachment.ts#L93)

***

### toJSON()

```ts
toJSON(): AttachmentData
```

Converts the Attachment instance to JSON.

#### Returns

[`AttachmentData`](../interfaces/AttachmentData.md)

The JSON representation of the Attachment instance.

#### Source

[seyfert/src/builders/Attachment.ts:114](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Attachment.ts#L114)
