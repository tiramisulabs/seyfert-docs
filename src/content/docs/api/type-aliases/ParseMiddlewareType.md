---
editUrl: false
next: false
prev: false
title: "ParseMiddlewareType"
---

```ts
type ParseMiddlewareType<T>: T extends MiddlewareContext<any, CommandContext> ? T : MiddlewareContext<T, CommandContext>;
```

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Source

[seyfert/src/commands/applications/options.ts:80](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/options.ts#L80)
