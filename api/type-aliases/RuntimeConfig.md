[seyfert](../globals.md) / RuntimeConfig

# Type alias: RuntimeConfig

```ts
type RuntimeConfig: OmitInsert<InternalRuntimeConfig, "intents", {
  intents: IntentStrings | number[] | number;
}>;
```

## Source

[seyfert/src/client/base.ts:463](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/base.ts#L463)
