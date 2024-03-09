---
editUrl: false
next: false
prev: false
title: "MiddlewareContext"
---

```ts
type MiddlewareContext<T, C>: (context: Object) => any;
```

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | `any` |
| `C` | `any` |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | `Object` |
| `context.context` | `C` |
| `context.next` | [`NextFunction`](/api/type-aliases/nextfunction/)\<`T`\> |
| `context.pass` | [`PassFunction`](/api/type-aliases/passfunction/) |
| `context.stop` | [`StopFunction`](/api/type-aliases/stopfunction/) |

## Returns

`any`

## Source

[seyfert/src/commands/applications/shared.ts:15](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/shared.ts#L15)
