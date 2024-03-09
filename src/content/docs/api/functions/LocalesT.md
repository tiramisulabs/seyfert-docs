---
editUrl: false
next: false
prev: false
title: "LocalesT"
---

```ts
LocalesT(name?: undefined, description?: undefined): <T>(target: T) => (...args: any[]) => __class<T> & T
```

## Parameters

| Parameter | Type |
| :------ | :------ |
| `name`? | `undefined` |
| `description`? | `undefined` |

## Returns

`Function`

> ### Type parameters
>
> | Type parameter |
> | :------ |
> | `T` extends (...`args`: `any`[]) => `Object` |
>
> ### Parameters
>
> | Parameter | Type |
> | :------ | :------ |
> | `target` | `T` |
>
> ### Returns
>
> (...`args`: `any`[]) => `__class`\<`T`\> & `T`
>

## Source

[seyfert/src/commands/decorators.ts:46](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/decorators.ts#L46)
