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

[seyfert/src/commands/decorators.ts:112](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/decorators.ts#L112)
