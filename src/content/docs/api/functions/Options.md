---
editUrl: false
next: false
prev: false
title: "Options"
---

```ts
Options(options: OptionsRecord | () => SubCommand[]): <T>(target: T) => (...args: any[]) => __class<T> & T
```

## Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`OptionsRecord`](/api/type-aliases/optionsrecord/) \| () => [`SubCommand`](/api/classes/subcommand/)[] |

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

[seyfert/src/commands/decorators.ts:92](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/decorators.ts#L92)
