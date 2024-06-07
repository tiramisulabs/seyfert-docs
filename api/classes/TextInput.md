[seyfert](../globals.md) / TextInput

# Class: TextInput

Represents a text input component builder.

## Example

```ts
const textInput = new TextInput().setLabel("Enter text");
textInput.setStyle(TextInputStyle.Paragraph);
textInput.setPlaceholder("Type here");
const json = textInput.toJSON();
```

## Extends

- [`BaseComponentBuilder`](BaseComponentBuilder.md)\<`APITextInputComponent`\>

## Constructors

### new TextInput()

```ts
new TextInput(data: Partial<APITextInputComponent>): TextInput
```

Creates a new TextInput instance.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `Partial`\<`APITextInputComponent`\> | Optional data for the text input. |

#### Returns

[`TextInput`](TextInput.md)

#### Overrides

[`BaseComponentBuilder`](BaseComponentBuilder.md).[`constructor`](BaseComponentBuilder.md#constructors)

#### Source

[seyfert/src/builders/Modal.ts:118](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Modal.ts#L118)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `data` | `public` | `Partial`\<`APITextInputComponent`\> | [`BaseComponentBuilder`](BaseComponentBuilder.md).`data` |

## Methods

### setCustomId()

```ts
setCustomId(id: string): this
```

Sets the custom ID of the text input.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The custom ID for the text input. |

#### Returns

`this`

The current TextInput instance.

#### Source

[seyfert/src/builders/Modal.ts:168](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Modal.ts#L168)

***

### setLabel()

```ts
setLabel(label: string): this
```

Sets the label of the text input.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` | The label of the text input. |

#### Returns

`this`

The current TextInput instance.

#### Source

[seyfert/src/builders/Modal.ts:137](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Modal.ts#L137)

***

### setLength()

```ts
setLength(options: Partial<OptionValuesLength>): this
```

Sets the length constraints for the text input.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | `Partial`\<[`OptionValuesLength`](../type-aliases/OptionValuesLength.md)\> | The length constraints. |

#### Returns

`this`

The current TextInput instance.

#### Source

[seyfert/src/builders/Modal.ts:157](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Modal.ts#L157)

***

### setPlaceholder()

```ts
setPlaceholder(placeholder: string): this
```

Sets the placeholder of the text input.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `placeholder` | `string` | The placeholder text. |

#### Returns

`this`

The current TextInput instance.

#### Source

[seyfert/src/builders/Modal.ts:147](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Modal.ts#L147)

***

### setRequired()

```ts
setRequired(required: boolean): this
```

Sets whether the text input is required.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `required` | `boolean` | `true` | Indicates whether the text input is required. |

#### Returns

`this`

The current TextInput instance.

#### Source

[seyfert/src/builders/Modal.ts:188](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Modal.ts#L188)

***

### setStyle()

```ts
setStyle(style: TextInputStyle): this
```

Sets the style of the text input.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `style` | `TextInputStyle` | The style of the text input. |

#### Returns

`this`

The current TextInput instance.

#### Source

[seyfert/src/builders/Modal.ts:127](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Modal.ts#L127)

***

### setValue()

```ts
setValue(value: string): this
```

Sets the initial value of the text input.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The initial value. |

#### Returns

`this`

The current TextInput instance.

#### Source

[seyfert/src/builders/Modal.ts:178](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Modal.ts#L178)

***

### toJSON()

```ts
toJSON(): APITextInputComponent
```

#### Returns

`APITextInputComponent`

#### Inherited from

[`BaseComponentBuilder`](BaseComponentBuilder.md).[`toJSON`](BaseComponentBuilder.md#tojson)

#### Source

[seyfert/src/builders/Base.ts:8](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Base.ts#L8)
