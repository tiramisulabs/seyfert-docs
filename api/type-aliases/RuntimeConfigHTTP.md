[seyfert](../globals.md) / RuntimeConfigHTTP

# Type alias: RuntimeConfigHTTP

```ts
type RuntimeConfigHTTP: Omit<MakeRequired<RC, "publicKey" | "applicationId">, "intents" | "locations"> & {
  locations: Omit<RC["locations"], "events">;
};
```

## Type declaration

| Member | Type |
| :------ | :------ |
| `locations` | `Omit`\<`RC`\[`"locations"`\], `"events"`\> |

## Source

[seyfert/src/client/base.ts:458](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/base.ts#L458)
