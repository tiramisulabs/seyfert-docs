[seyfert](../globals.md) / RestArguments

# Type alias: RestArguments\<M, B, Q, F\>

```ts
type RestArguments<M, B, Q, F>: M extends ProxyRequestMethod.Get ? Q extends never ? RequestObject<M, never, B, never> : never : RequestObject<M, B, Q, F>;
```

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `M` *extends* [`ProxyRequestMethod`](../enumerations/ProxyRequestMethod.md) | - |
| `B` | `any` |
| `Q` *extends* `never` \| `Record`\<`string`, `any`\> | `any` |
| `F` *extends* [`RawFile`](../interfaces/RawFile.md)[] | [`RawFile`](../interfaces/RawFile.md)[] |

## Source

[seyfert/src/api/api.ts:443](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/api.ts#L443)
