---
editUrl: false
next: false
prev: false
title: "MetadataMiddleware"
---

```ts
type MetadataMiddleware<T>: Parameters<Parameters<T>[0]["next"]>[0];
```

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`MiddlewareContext`](/api/type-aliases/middlewarecontext/) |

## Source

[seyfert/src/commands/applications/shared.ts:24](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/shared.ts#L24)
