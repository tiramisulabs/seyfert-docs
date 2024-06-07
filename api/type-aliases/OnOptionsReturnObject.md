[seyfert](../globals.md) / OnOptionsReturnObject

# Type alias: OnOptionsReturnObject

```ts
type OnOptionsReturnObject: Record<string, {
  failed: false;
  value: unknown;
 } | {
  failed: true;
  parseError: MessageCommandOptionErrors;
  value: string;
}>;
```

## Source

[seyfert/src/commands/applications/shared.ts:58](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/shared.ts#L58)
