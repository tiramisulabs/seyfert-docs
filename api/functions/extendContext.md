[seyfert](../globals.md) / extendContext

# Function: extendContext()

```ts
function extendContext<T>(cb: (interaction: 
  | ChatInputCommandInteraction<boolean>
  | UserCommandInteraction<boolean>
  | MessageCommandInteraction<boolean>
  | ComponentInteraction<boolean, APIMessageComponentInteraction>
  | ModalSubmitInteraction<boolean>) => T): (interaction: 
  | ChatInputCommandInteraction<boolean>
  | UserCommandInteraction<boolean>
  | MessageCommandInteraction<boolean>
  | ComponentInteraction<boolean, APIMessageComponentInteraction>
  | ModalSubmitInteraction<boolean>) => T
```

Extends the context of a command interaction.

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* \{\} |

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `cb` | (`interaction`: \| [`ChatInputCommandInteraction`](../classes/ChatInputCommandInteraction.md)\<`boolean`\> \| [`UserCommandInteraction`](../classes/UserCommandInteraction.md)\<`boolean`\> \| [`MessageCommandInteraction`](../classes/MessageCommandInteraction.md)\<`boolean`\> \| [`ComponentInteraction`](../classes/ComponentInteraction.md)\<`boolean`, `APIMessageComponentInteraction`\> \| [`ModalSubmitInteraction`](../classes/ModalSubmitInteraction.md)\<`boolean`\>) => `T` | The callback function to extend the context. |

## Returns

`Function`

The extended context.

### Parameters

| Parameter | Type |
| :------ | :------ |
| `interaction` |  \| [`ChatInputCommandInteraction`](../classes/ChatInputCommandInteraction.md)\<`boolean`\> \| [`UserCommandInteraction`](../classes/UserCommandInteraction.md)\<`boolean`\> \| [`MessageCommandInteraction`](../classes/MessageCommandInteraction.md)\<`boolean`\> \| [`ComponentInteraction`](../classes/ComponentInteraction.md)\<`boolean`, `APIMessageComponentInteraction`\> \| [`ModalSubmitInteraction`](../classes/ModalSubmitInteraction.md)\<`boolean`\> |

### Returns

`T`

## Example

```ts
const customContext = extendContext((interaction) => {
	return {
		owner: '123456789012345678',
		// Add your custom properties here
	};
});
```

## Source

[seyfert/src/index.ts:108](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/index.ts#L108)
