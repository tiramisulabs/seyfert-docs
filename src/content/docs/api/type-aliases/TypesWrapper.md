---
editUrl: false
next: false
prev: false
title: "__TypesWrapper"
---

```ts
type __TypesWrapper: { [P in keyof typeof ApplicationCommandOptionType]: \${typeof ApplicationCommandOptionType[P]}\ extends \${infer D extends number}\ ? Wrap<D> : never };
```

## Source

[seyfert/src/commands/applications/chat.ts:57](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chat.ts#L57)
