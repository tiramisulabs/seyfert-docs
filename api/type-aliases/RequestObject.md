[seyfert](../globals.md) / RequestObject

# Type alias: RequestObject\<M, B, Q, F\>

```ts
type RequestObject<M, B, Q, F>: {
  query: Q;
 } & RequestOptions & M extends `${Get}` ? unknown : {
  body: B;
  files: F;
};
```

## Type declaration

| Member | Type |
| :------ | :------ |
| `query` | `Q` |

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `M` *extends* [`ProxyRequestMethod`](../enumerations/ProxyRequestMethod.md) | - |
| `B` | `Record`\<`string`, `any`\> |
| `Q` | `Record`\<`string`, `any`\> |
| `F` *extends* [`RawFile`](../interfaces/RawFile.md)[] | [`RawFile`](../interfaces/RawFile.md)[] |

## Source

[seyfert/src/api/api.ts:428](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/api.ts#L428)
