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

[seyfert/src/client/base.ts:284](https://github.com/potoland/potocuit/blob/c4fb0c1/src/client/base.ts#L284)
