---
editUrl: false
next: false
prev: false
title: "FlatObjectKeys"
---

```ts
type FlatObjectKeys<T, Key>: Key extends string ? T[Key] extends Record<string, unknown> ? \${Key}.${FlatObjectKeys<T[Key]>}\ : T[Key] extends string ? \${Key}\ : never : never;
```

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends `Record`\<`string`, `any`\> | - |
| `Key` | keyof `T` |

## Source

[seyfert/src/commands/decorators.ts:148](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/decorators.ts#L148)
