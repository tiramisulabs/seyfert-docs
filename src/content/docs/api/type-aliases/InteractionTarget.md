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

[seyfert/src/commands/applications/menucontext.ts:14](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/menucontext.ts#L14)
