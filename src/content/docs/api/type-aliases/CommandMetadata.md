---
editUrl: false
next: false
prev: false
title: "CommandMetadata"
---

```ts
type CommandMetadata<T>: T extends readonly [infer first, ...(infer rest)] ? first extends keyof RegisteredMiddlewares ? { [key in first]: MetadataMiddleware<RegisteredMiddlewares[first]> } & rest extends readonly keyof RegisteredMiddlewares[] ? CommandMetadata<rest> : Object : Object : Object;
```

## Type parameters

| Type parameter |
| :------ |
| `T` extends readonly keyof [`RegisteredMiddlewares`](/api/interfaces/registeredmiddlewares/)[] |

## Source

[seyfert/src/commands/applications/shared.ts:22](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/shared.ts#L22)
