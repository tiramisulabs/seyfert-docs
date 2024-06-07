[seyfert](../globals.md) / \_\_TypesWrapper

# Type alias: \_\_TypesWrapper

```ts
type __TypesWrapper: { [P in keyof typeof ApplicationCommandOptionType]: `${typeof ApplicationCommandOptionType[P]}` extends `${infer D extends number}` ? Wrap<D> : never };
```

## Source

[seyfert/src/commands/applications/chat.ts:74](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chat.ts#L74)
