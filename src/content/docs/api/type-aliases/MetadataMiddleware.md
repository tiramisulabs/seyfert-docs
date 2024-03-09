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

[seyfert/src/commands/applications/shared.ts:21](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/shared.ts#L21)
