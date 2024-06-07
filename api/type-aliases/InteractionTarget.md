[seyfert](../globals.md) / InteractionTarget

# Type alias: InteractionTarget\<T\>

```ts
type InteractionTarget<T>: T extends MessageCommandInteraction ? Message : User;
```

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Source

[seyfert/src/commands/applications/menucontext.ts:24](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menucontext.ts#L24)
