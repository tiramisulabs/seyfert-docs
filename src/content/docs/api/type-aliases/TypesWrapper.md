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

[seyfert/src/commands/applications/chat.ts:56](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/chat.ts#L56)
