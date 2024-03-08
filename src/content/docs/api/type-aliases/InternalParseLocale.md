---
editUrl: false
next: false
prev: false
title: "__InternalParseLocale"
---

```ts
type __InternalParseLocale<T>: { [K in keyof T]: T[K] extends Function ? Function : T[K] extends string ? Object : T[K] extends unknown[] ? Object : T[K] extends Record<string, any> ? __InternalParseLocale<T[K]> & Object : never };
```

## Type parameters

| Type parameter |
| :------ |
| `T` extends `Record`\<`string`, `any`\> |

## Source

[seyfert/src/langs/router.ts:41](https://github.com/potoland/potocuit/blob/c4fb0c1/src/langs/router.ts#L41)
