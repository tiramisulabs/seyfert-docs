---
editUrl: false
next: false
prev: false
title: "OptionResolvedWithValue"
---

```ts
type OptionResolvedWithValue: MakeRequired<Pick<OptionResolved, "name" | "value" | "focused">, "value"> & Object;
```

## Type declaration

| Member | Type |
| :------ | :------ |
| `type` | `ApplicationCommandOptionType.Boolean` \| `ApplicationCommandOptionType.Integer` \| `ApplicationCommandOptionType.Number` \| `ApplicationCommandOptionType.String` |

## Source

[seyfert/src/commands/optionresolver.ts:193](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/optionresolver.ts#L193)
