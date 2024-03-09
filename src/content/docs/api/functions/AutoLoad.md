---
editUrl: false
next: false
prev: false
title: "AutoLoad"
---

```ts
AutoLoad(): <T>(target: T) => (...args: any[]) => __class<T> & T
```

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

[seyfert/src/commands/decorators.ts:106](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/decorators.ts#L106)
