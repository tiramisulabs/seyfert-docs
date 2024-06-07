[seyfert](../globals.md) / MetadataMiddleware

# Type alias: MetadataMiddleware\<T\>

```ts
type MetadataMiddleware<T>: IsStrictlyUndefined<Parameters<Parameters<T>[0]["next"]>[0]> extends true ? never : Parameters<Parameters<T>[0]["next"]>[0];
```

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`MiddlewareContext`](MiddlewareContext.md) |

## Source

[seyfert/src/commands/applications/shared.ts:27](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/shared.ts#L27)
