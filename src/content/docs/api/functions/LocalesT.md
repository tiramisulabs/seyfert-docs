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

[seyfert/src/commands/decorators.ts:52](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/decorators.ts#L52)
