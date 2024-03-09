---
editUrl: false
next: false
prev: false
title: "Groups"
---

```ts
Groups(groups: Record<string, Object>): <T>(target: T) => (...args: any[]) => __class<T> & T
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

[seyfert/src/commands/decorators.ts:69](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/decorators.ts#L69)
