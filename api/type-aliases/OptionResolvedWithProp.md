[seyfert](../globals.md) / OptionResolvedWithProp

# Type alias: OptionResolvedWithProp

```ts
type OptionResolvedWithProp: Exclude<OptionResolved, {
  type: ApplicationCommandOptionType.Boolean | ApplicationCommandOptionType.Integer | ApplicationCommandOptionType.Number | ApplicationCommandOptionType.String;
}>;
```

## Source

[seyfert/src/commands/optionresolver.ts:219](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/optionresolver.ts#L219)
