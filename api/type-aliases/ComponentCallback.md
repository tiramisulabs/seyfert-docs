[seyfert](../globals.md) / ComponentCallback

# Type alias: ComponentCallback()\<T\>

```ts
type ComponentCallback<T>: (interaction: T, stop: ComponentStopCallback, refresh: ComponentRefreshCallback) => any;
```

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`ComponentInteraction`](../classes/ComponentInteraction.md) \| [`StringSelectMenuInteraction`](../classes/StringSelectMenuInteraction.md) | [`ComponentInteraction`](../classes/ComponentInteraction.md) \| [`StringSelectMenuInteraction`](../classes/StringSelectMenuInteraction.md) |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `interaction` | `T` |
| `stop` | [`ComponentStopCallback`](ComponentStopCallback.md) |
| `refresh` | [`ComponentRefreshCallback`](ComponentRefreshCallback.md) |

## Returns

`any`

## Source

[seyfert/src/builders/types.ts:10](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/types.ts#L10)
