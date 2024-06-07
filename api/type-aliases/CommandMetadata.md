[seyfert](../globals.md) / CommandMetadata

# Type alias: CommandMetadata\<T\>

```ts
type CommandMetadata<T>: T extends readonly [infer first, ...(infer rest)] ? first extends keyof RegisteredMiddlewares ? MetadataMiddleware<RegisteredMiddlewares[first]> extends never ? {} : { [key in first]: MetadataMiddleware<RegisteredMiddlewares[first]> } & rest extends readonly keyof RegisteredMiddlewares[] ? CommandMetadata<rest> : {} : {} : {};
```

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* readonly keyof [`RegisteredMiddlewares`](../interfaces/RegisteredMiddlewares.md)[] |

## Source

[seyfert/src/commands/applications/shared.ts:32](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/shared.ts#L32)
