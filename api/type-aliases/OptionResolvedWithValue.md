[seyfert](../globals.md) / OptionResolvedWithValue

# Type alias: OptionResolvedWithValue

```ts
type OptionResolvedWithValue: MakeRequired<Pick<OptionResolved, "name" | "value" | "focused">, "value"> & {
  type: ApplicationCommandOptionType.Boolean | ApplicationCommandOptionType.Integer | ApplicationCommandOptionType.Number | ApplicationCommandOptionType.String;
};
```

## Type declaration

| Member | Type |
| :------ | :------ |
| `type` | `ApplicationCommandOptionType.Boolean` \| `ApplicationCommandOptionType.Integer` \| `ApplicationCommandOptionType.Number` \| `ApplicationCommandOptionType.String` |

## Source

[seyfert/src/commands/optionresolver.ts:211](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/optionresolver.ts#L211)
