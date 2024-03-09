---
editUrl: false
next: false
prev: false
title: "createMiddleware"
---

```ts
createMiddleware<T>(data: ParseMiddlewareType<T>): ParseMiddlewareType<T>
```

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | [`MiddlewareContext`](/api/type-aliases/middlewarecontext/)\<`unknown`, [`CommandContext`](/api/classes/commandcontext/)\<`Object`, `never`\>\> |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`ParseMiddlewareType`](/api/type-aliases/parsemiddlewaretype/)\<`T`\> |

## Returns

[`ParseMiddlewareType`](/api/type-aliases/parsemiddlewaretype/)\<`T`\>

## Source

[seyfert/src/commands/applications/options.ts:84](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/options.ts#L84)
