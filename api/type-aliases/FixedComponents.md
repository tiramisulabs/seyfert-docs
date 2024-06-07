[seyfert](../globals.md) / FixedComponents

# Type alias: FixedComponents\<T\>

```ts
type FixedComponents<T>: T extends Button ? ButtonLink | ButtonID : T;
```

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | [`Button`](../classes/Button.md) |

## Source

[seyfert/src/builders/types.ts:23](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/types.ts#L23)
