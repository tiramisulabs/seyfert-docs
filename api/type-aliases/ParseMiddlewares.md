[seyfert](../globals.md) / ParseMiddlewares

# Type alias: ParseMiddlewares\<T\>

```ts
type ParseMiddlewares<T>: { [k in keyof T]: T[k] };
```

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* `Record`\<`string`, [`MiddlewareContext`](MiddlewareContext.md)\> |

## Source

[seyfert/src/commands/decorators.ts:146](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/decorators.ts#L146)
