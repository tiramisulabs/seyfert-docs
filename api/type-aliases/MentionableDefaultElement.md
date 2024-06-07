[seyfert](../globals.md) / MentionableDefaultElement

# Type alias: MentionableDefaultElement

```ts
type MentionableDefaultElement: {
  id: string;
  type: keyof Omit<typeof SelectMenuDefaultValueType, "Channel">;
};
```

## Type declaration

| Member | Type |
| :------ | :------ |
| `id` | `string` |
| `type` | keyof `Omit`\<*typeof* `SelectMenuDefaultValueType`, `"Channel"`\> |

## Source

[seyfert/src/builders/SelectMenu.ts:178](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L178)
