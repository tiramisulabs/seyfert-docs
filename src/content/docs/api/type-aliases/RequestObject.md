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

[seyfert/src/api/api.ts:381](https://github.com/potoland/potocuit/blob/fe122a1/src/api/api.ts#L381)
