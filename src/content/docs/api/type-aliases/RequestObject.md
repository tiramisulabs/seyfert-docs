---
editUrl: false
next: false
prev: false
title: "RequestObject"
---

```ts
type RequestObject<M, B, Q, F>: Object & RequestOptions & M extends \${Get}\ ? unknown : Object;
```

## Type declaration

| Member | Type |
| :------ | :------ |
| `query` | `Q` |

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `M` extends [`ProxyRequestMethod`](/api/enumerations/proxyrequestmethod/) | - |
| `B` | `Record`\<`string`, `any`\> |
| `Q` | `Record`\<`string`, `any`\> |
| `F` extends [`RawFile`](/api/interfaces/rawfile/)[] | [`RawFile`](/api/interfaces/rawfile/)[] |

## Source

[seyfert/src/api/REST.ts:516](https://github.com/potoland/potocuit/blob/e332d7a/src/api/REST.ts#L516)
