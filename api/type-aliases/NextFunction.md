[seyfert](../globals.md) / NextFunction

# Type alias: NextFunction\<T\>

```ts
type NextFunction<T>: IsStrictlyUndefined<T> extends true ? () => void : (data: T) => void;
```

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | `unknown` |

## Source

[seyfert/src/commands/applications/shared.ts:8](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/shared.ts#L8)
