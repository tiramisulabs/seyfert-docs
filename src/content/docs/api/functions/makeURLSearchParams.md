---
editUrl: false
next: false
prev: false
title: "makeURLSearchParams"
---

```ts
makeURLSearchParams<OptionsType>(options?: Readonly<OptionsType>): URLSearchParams
```

Creates and populates an URLSearchParams instance from an object, stripping
out null and undefined values, while also coercing non-strings to strings.

## Type parameters

| Type parameter |
| :------ |
| `OptionsType` extends `object` |

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | `Readonly`\<`OptionsType`\> | The options to use |

## Returns

`URLSearchParams`

A populated URLSearchParams instance

## Source

[seyfert/src/api/utils/utils.ts:36](https://github.com/potoland/potocuit/blob/e332d7a/src/api/utils/utils.ts#L36)
