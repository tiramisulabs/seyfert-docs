---
editUrl: false
next: false
prev: false
title: "TextInput"
---

Represents a text input component builder.

## Example

```ts
const textInput = new TextInput().setLabel("Enter text");
textInput.setStyle(TextInputStyle.FULL);
textInput.setPlaceholder("Type here");
const json = textInput.toJSON();
```

## Extends

- [`BaseComponentBuilder`](/api/classes/basecomponentbuilder/)\<`APITextInputComponent`\>

## Constructors

### new TextInput(data)

```ts
new TextInput(data: Partial<APITextInputComponent>): TextInput
```

Creates a new TextInput instance.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `Partial`\<`APITextInputComponent`\> | Optional data for the text input. |

#### Returns

[`TextInput`](/api/classes/textinput/)

#### Overrides

[`BaseComponentBuilder`](/api/classes/basecomponentbuilder/).[`constructor`](/api/classes/basecomponentbuilder/#constructors)

#### Source

[seyfert/src/builders/Modal.ts:106](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/Modal.ts#L106)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `data` | `public` | `Partial`\<`APITextInputComponent`\> | [`BaseComponentBuilder`](/api/classes/basecomponentbuilder/).`data` |

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

[seyfert/src/builders/Modal.ts:156](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/Modal.ts#L156)

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

[seyfert/src/builders/Modal.ts:125](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/Modal.ts#L125)

***

### setLength()

```ts
setLength(options: Partial<OptionValuesLength>): this
```

Sets the length constraints for the text input.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | `Partial`\<[`OptionValuesLength`](/api/type-aliases/optionvalueslength/)\> | The length constraints. |

#### Returns

`this`

The current TextInput instance.

#### Source

[seyfert/src/builders/Modal.ts:145](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/Modal.ts#L145)

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

[seyfert/src/builders/Modal.ts:135](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/Modal.ts#L135)

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

[seyfert/src/builders/Modal.ts:176](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/Modal.ts#L176)

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

[seyfert/src/builders/Modal.ts:115](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/Modal.ts#L115)

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

[seyfert/src/builders/Modal.ts:166](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/Modal.ts#L166)

***

### toJSON()

```ts
toJSON(): APITextInputComponent
```

#### Returns

`APITextInputComponent`

#### Inherited from

[`BaseComponentBuilder`](/api/classes/basecomponentbuilder/).[`toJSON`](/api/classes/basecomponentbuilder/#tojson)

#### Source

[seyfert/src/builders/Base.ts:8](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/Base.ts#L8)
