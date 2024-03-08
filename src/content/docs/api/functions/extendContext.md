---
editUrl: false
next: false
prev: false
title: "extendContext"
---

```ts
extendContext<T>(cb:     (interaction: ChatInputCommandInteraction<boolean> | UserCommandInteraction<boolean> | MessageCommandInteraction<boolean>) => T): (interaction: ChatInputCommandInteraction<boolean> | UserCommandInteraction<boolean> | MessageCommandInteraction<boolean>) => T
```

Extends the context of a command interaction.

## Type parameters

| Type parameter |
| :------ |
| `T` extends `Object` |

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `cb` | (`interaction`: [`ChatInputCommandInteraction`](/api/classes/chatinputcommandinteraction/)\<`boolean`\> \| [`UserCommandInteraction`](/api/classes/usercommandinteraction/)\<`boolean`\> \| [`MessageCommandInteraction`](/api/classes/messagecommandinteraction/)\<`boolean`\>) => `T` | The callback function to extend the context. |

## Returns

`Function`

The extended context.

> ### Parameters
>
> | Parameter | Type |
> | :------ | :------ |
> | `interaction` | [`ChatInputCommandInteraction`](/api/classes/chatinputcommandinteraction/)\<`boolean`\> \| [`UserCommandInteraction`](/api/classes/usercommandinteraction/)\<`boolean`\> \| [`MessageCommandInteraction`](/api/classes/messagecommandinteraction/)\<`boolean`\> |
>
> ### Returns
>
> `T`
>

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

[seyfert/src/index.ts:97](https://github.com/potoland/potocuit/blob/c4fb0c1/src/index.ts#L97)
