[seyfert](../globals.md) / MiddlewareContext

# Type alias: MiddlewareContext()\<T, C\>

```ts
type MiddlewareContext<T, C>: (context: {
  context: C;
  next: NextFunction<T>;
  pass: PassFunction;
  stop: StopFunction;
 }) => any;
```

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | `any` |
| `C` | `any` |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | `object` |
| `context.context` | `C` |
| `context.next` | [`NextFunction`](NextFunction.md)\<`T`\> |
| `context.pass` | [`PassFunction`](PassFunction.md) |
| `context.stop` | [`StopFunction`](StopFunction.md) |

## Returns

`any`

## Source

[seyfert/src/commands/applications/shared.ts:21](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/shared.ts#L21)
