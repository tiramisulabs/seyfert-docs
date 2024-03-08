---
editUrl: false
next: false
prev: false
title: "ParseMiddlewareType"
---

```ts
type ParseMiddlewareType<T>: T extends MiddlewareContext<any, CommandContext | MenuCommandContext<MessageCommandInteraction<boolean> | UserCommandInteraction<boolean>>> ? T : MiddlewareContext<T, CommandContext | MenuCommandContext<MessageCommandInteraction<boolean> | UserCommandInteraction<boolean>>>;
```

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Source

[seyfert/src/commands/applications/options.ts:87](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/options.ts#L87)
