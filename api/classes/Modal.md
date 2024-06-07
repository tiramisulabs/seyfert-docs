[seyfert](../globals.md) / Modal

# Class: Modal\<T\>

Represents a modal for user interactions.

## Example

```ts
const modal = new Modal();
modal.setTitle("Sample Modal");
modal.addComponents(
  new ActionRow<TextInput>()
  .addComponents(new TextInput().setLabel("Enter text"))
));
modal.run((interaction) => {
  // Handle modal submission
});
const json = modal.toJSON();
```

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `T` *extends* [`ModalBuilderComponents`](../type-aliases/ModalBuilderComponents.md) | [`TextInput`](TextInput.md) | The type of components allowed in the modal. |

## Constructors

### new Modal()

```ts
new Modal<T>(data: Partial<APIModalInteractionResponseCallbackData>): Modal<T>
```

Creates a new Modal instance.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `Partial`\<`APIModalInteractionResponseCallbackData`\> | Optional data for the modal. |

#### Returns

[`Modal`](Modal.md)\<`T`\>

#### Source

[seyfert/src/builders/Modal.ts:38](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Modal.ts#L38)

## Properties

| Property | Modifier | Type | Default value | Description |
| :------ | :------ | :------ | :------ | :------ |
| `components` | `public` | [`ActionRow`](ActionRow.md)\<`T`\>[] | `[]` | - |
| `data` | `public` | `Partial`\<`APIModalInteractionResponseCallbackData`\> | `{}` | Optional data for the modal. |

## Methods

### addComponents()

```ts
addComponents(...components: RestOrArray<ActionRow<T>>): this
```

Adds components to the modal.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`components` | `RestOrArray`\<[`ActionRow`](ActionRow.md)\<`T`\>\> | Components to be added to the modal. |

#### Returns

`this`

The current Modal instance.

#### Source

[seyfert/src/builders/Modal.ts:47](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Modal.ts#L47)

***

### run()

```ts
run(func: ModalSubmitCallback): this
```

Sets the callback function to be executed when the modal is submitted.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `func` | [`ModalSubmitCallback`](../type-aliases/ModalSubmitCallback.md) | The callback function. |

#### Returns

`this`

The current Modal instance.

#### Source

[seyfert/src/builders/Modal.ts:87](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Modal.ts#L87)

***

### setComponents()

```ts
setComponents(component: ActionRow<T>[]): this
```

Set the components to the modal.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `component` | [`ActionRow`](ActionRow.md)\<`T`\>[] | The components to set into the modal. |

#### Returns

`this`

The current Modal instance.

#### Source

[seyfert/src/builders/Modal.ts:57](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Modal.ts#L57)

***

### setCustomId()

```ts
setCustomId(id: string): this
```

Sets the custom ID of the modal.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The custom ID for the modal. |

#### Returns

`this`

The current Modal instance.

#### Source

[seyfert/src/builders/Modal.ts:77](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Modal.ts#L77)

***

### setTitle()

```ts
setTitle(title: string): this
```

Sets the title of the modal.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | The title of the modal. |

#### Returns

`this`

The current Modal instance.

#### Source

[seyfert/src/builders/Modal.ts:67](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Modal.ts#L67)

***

### toJSON()

```ts
toJSON(): APIModalInteractionResponseCallbackData
```

Converts the modal to JSON format.

#### Returns

`APIModalInteractionResponseCallbackData`

The modal data in JSON format.

#### Source

[seyfert/src/builders/Modal.ts:96](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Modal.ts#L96)
