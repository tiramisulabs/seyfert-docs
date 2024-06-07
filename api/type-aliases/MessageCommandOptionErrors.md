[seyfert](../globals.md) / MessageCommandOptionErrors

# Type alias: MessageCommandOptionErrors

```ts
type MessageCommandOptionErrors: 
  | ["CHANNEL_TYPES", ChannelType[]]
  | ["STRING_MIN_LENGTH", number]
  | ["STRING_MAX_LENGTH", number]
  | ["STRING_INVALID_CHOICE", readonly {
  name: string;
  value: string;
 }[]]
  | ["NUMBER_NAN", string | undefined]
  | ["NUMBER_MIN_VALUE", number]
  | ["NUMBER_MAX_VALUE", number]
  | ["NUMBER_INVALID_CHOICE", readonly {
  name: string;
  value: number;
 }[]]
  | ["OPTION_REQUIRED"]
  | ["UNKNOWN", unknown];
```

## Source

[seyfert/src/commands/applications/shared.ts:46](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/shared.ts#L46)
