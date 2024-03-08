---
editUrl: false
next: false
prev: false
title: "ParseMiddlewares"
---

```ts
type ParseMiddlewares<T>: { [k in keyof T]: T[k] };
```

## Type parameters

| Type parameter |
| :------ |
| `T` extends `Record`\<`string`, [`MiddlewareContext`](/api/type-aliases/middlewarecontext/)\> |

## Source

[seyfert/src/commands/decorators.ts:119](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/decorators.ts#L119)
