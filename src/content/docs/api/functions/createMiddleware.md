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
| `T` | [`MiddlewareContext`](/api/type-aliases/middlewarecontext/)\<`unknown`, [`CommandContext`](/api/classes/commandcontext/)\<`Object`, `never`\> \| [`MenuCommandContext`](/api/classes/menucommandcontext/)\<[`UserCommandInteraction`](/api/classes/usercommandinteraction/)\<`boolean`\> \| [`MessageCommandInteraction`](/api/classes/messagecommandinteraction/)\<`boolean`\>, `never`\>\> |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`ParseMiddlewareType`](/api/type-aliases/parsemiddlewaretype/)\<`T`\> |

## Returns

[`ParseMiddlewareType`](/api/type-aliases/parsemiddlewaretype/)\<`T`\>

## Source

[seyfert/src/commands/applications/options.ts:97](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/applications/options.ts#L97)
