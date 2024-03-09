---
editUrl: false
next: false
prev: false
title: "RuntimeConfigHTTP"
---

```ts
type RuntimeConfigHTTP: Omit<MakeRequired<RC, "publicKey" | "applicationId">, "intents" | "locations"> & Object;
```

## Type declaration

| Member | Type |
| :------ | :------ |
| `locations` | `Omit`\<`RC`\[`"locations"`\], `"events"`\> |

## Source

[seyfert/src/client/base.ts:282](https://github.com/potoland/potocuit/blob/e332d7a/src/client/base.ts#L282)
