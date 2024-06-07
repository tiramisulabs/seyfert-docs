[seyfert](../globals.md) / GatewayGuildMemberAddDispatchDataFixed

# Type alias: GatewayGuildMemberAddDispatchDataFixed\<Pending\>

```ts
type GatewayGuildMemberAddDispatchDataFixed<Pending>: Pending extends true ? Omit<GatewayGuildMemberAddDispatchData, "user"> & {
  id: string;
} : MakeRequired<GatewayGuildMemberAddDispatchData, "user">;
```

## Type parameters

| Type parameter |
| :------ |
| `Pending` *extends* `boolean` |

## Source

[seyfert/src/structures/GuildMember.ts:28](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildMember.ts#L28)
