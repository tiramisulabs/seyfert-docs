[seyfert](../globals.md) / componentFactory

# Function: componentFactory()

```ts
function componentFactory(component: APIMessageActionRowComponent): ActionRowMessageComponents | BaseComponent<ActionRowMessageComponents["type"]>
```

Return a new component instance based on the component type.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `component` | `APIMessageActionRowComponent` | The component to create. |

## Returns

[`ActionRowMessageComponents`](../type-aliases/ActionRowMessageComponents.md) \| `BaseComponent`\<[`ActionRowMessageComponents`](../type-aliases/ActionRowMessageComponents.md)\[`"type"`\]\>

The component instance.

## Source

[seyfert/src/components/index.ts:34](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/index.ts#L34)
