---
editUrl: false
next: false
prev: false
title: "InteractionTarget"
---

```ts
type InteractionTarget<T>: T extends MessageCommandInteraction ? Message : User;
```

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Source

[seyfert/src/commands/applications/menucontext.ts:22](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/applications/menucontext.ts#L22)
