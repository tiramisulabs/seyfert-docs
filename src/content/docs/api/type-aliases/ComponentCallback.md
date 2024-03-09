---
editUrl: false
next: false
prev: false
title: "ComponentCallback"
---

```ts
type ComponentCallback<T>: (interaction: T, stop: ComponentStopCallback, refresh: ComponentRefreshCallback) => any;
```

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | [`ComponentInteraction`](/api/classes/componentinteraction/) |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `interaction` | `T` |
| `stop` | [`ComponentStopCallback`](/api/type-aliases/componentstopcallback/) |
| `refresh` | [`ComponentRefreshCallback`](/api/type-aliases/componentrefreshcallback/) |

## Returns

`any`

## Source

[seyfert/src/builders/types.ts:6](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/types.ts#L6)
