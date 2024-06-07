[seyfert](../globals.md) / InferAsyncCache

# Type alias: InferAsyncCache

```ts
type InferAsyncCache: InternalOptions extends {
  asyncCache: infer P;
 } ? P : false;
```

## Source

[seyfert/src/cache/index.ts:23](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/index.ts#L23)
