---
editUrl: false
next: false
prev: false
title: "RestArguments"
---

```ts
type RestArguments<M, B, Q, F>: M extends ProxyRequestMethod.Get ? Q extends never ? RequestObject<M, never, B, never> : never : RequestObject<M, B, Q, F>;
```

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `M` extends [`ProxyRequestMethod`](/api/enumerations/proxyrequestmethod/) | - |
| `B` | `any` |
| `Q` extends `never` \| `Record`\<`string`, `any`\> | `any` |
| `F` extends [`RawFile`](/api/interfaces/rawfile/)[] | [`RawFile`](/api/interfaces/rawfile/)[] |

## Source

[seyfert/src/api/REST.ts:531](https://github.com/potoland/potocuit/blob/e332d7a/src/api/REST.ts#L531)
