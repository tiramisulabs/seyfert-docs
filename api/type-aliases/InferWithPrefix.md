[seyfert](../globals.md) / InferWithPrefix

# Type alias: InferWithPrefix

```ts
type InferWithPrefix: InternalOptions extends {
  withPrefix: infer P;
 } ? P : false;
```

## Source

[seyfert/src/commands/applications/shared.ts:11](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/shared.ts#L11)
