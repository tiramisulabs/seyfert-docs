---
editUrl: false
next: false
prev: false
title: "FixedComponents"
---

```ts
type FixedComponents<T>: T extends Button ? ButtonLink | ButtonID : T;
```

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | [`Button`](/api/classes/button/) |

## Source

[seyfert/src/builders/types.ts:21](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/types.ts#L21)
