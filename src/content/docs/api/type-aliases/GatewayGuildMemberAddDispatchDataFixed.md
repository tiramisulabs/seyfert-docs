---
editUrl: false
next: false
prev: false
title: "GatewayGuildMemberAddDispatchDataFixed"
---

```ts
type GatewayGuildMemberAddDispatchDataFixed<Pending>: Pending extends true ? Omit<GatewayGuildMemberAddDispatchData, "user"> & Object : MakeRequired<GatewayGuildMemberAddDispatchData, "user">;
```

## Type parameters

| Type parameter |
| :------ |
| `Pending` extends `boolean` |

## Source

[seyfert/src/structures/GuildMember.ts:31](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildMember.ts#L31)
