[seyfert](../globals.md) / ReturnCache

# Type alias: ReturnCache\<T\>

```ts
type ReturnCache<T>: If<InferAsyncCache, Promise<T>, T>;
```

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Source

[seyfert/src/cache/index.ts:24](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/index.ts#L24)
