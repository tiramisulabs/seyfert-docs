---
editUrl: false
next: false
prev: false
title: "componentFactory"
---

```ts
componentFactory(component: APIMessageActionRowComponent): ActionRowMessageComponents | BaseComponent<ActionRowMessageComponents["type"]>
```

Return a new component instance based on the component type.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `component` | `APIMessageActionRowComponent` | The component to create. |

## Returns

[`ActionRowMessageComponents`](/api/type-aliases/actionrowmessagecomponents/) \| `BaseComponent`\<[`ActionRowMessageComponents`](/api/type-aliases/actionrowmessagecomponents/)\[`"type"`\]\>

The component instance.

## Source

[seyfert/src/components/index.ts:33](https://github.com/potoland/potocuit/blob/c4fb0c1/src/components/index.ts#L33)
