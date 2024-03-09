---
editUrl: false
next: false
prev: false
title: "Group"
---

```ts
Group(groupName: string): <T>(target: T) => (...args: any[]) => __class<T> & T
```

## Parameters

| Parameter | Type |
| :------ | :------ |
| `groupName` | `string` |

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

[seyfert/src/commands/decorators.ts:91](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/decorators.ts#L91)
