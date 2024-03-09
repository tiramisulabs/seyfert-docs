---
editUrl: false
next: false
prev: false
title: "Middlewares"
---

```ts
Middlewares(cbs: readonly never[]): <T>(target: T) => (...args: any[]) => __class<T> & T
```

## Parameters

| Parameter | Type |
| :------ | :------ |
| `cbs` | readonly `never`[] |

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

[seyfert/src/commands/decorators.ts:123](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/decorators.ts#L123)
