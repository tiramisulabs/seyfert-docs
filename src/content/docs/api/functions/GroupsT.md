---
editUrl: false
next: false
prev: false
title: "GroupsT"
---

```ts
GroupsT(groups: Record<string, Object>): <T>(target: T) => (...args: any[]) => __class<T> & T
```

## Parameters

| Parameter | Type |
| :------ | :------ |
| `groups` | `Record`\<`string`, `Object`\> |

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

[seyfert/src/commands/decorators.ts:59](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/decorators.ts#L59)
