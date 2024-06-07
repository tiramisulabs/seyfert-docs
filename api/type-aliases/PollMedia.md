[seyfert](../globals.md) / PollMedia

# Type alias: PollMedia

```ts
type PollMedia: Omit<APIPollMedia, "emoji"> & {
  emoji: EmojiResolvable;
};
```

## Type declaration

| Member | Type |
| :------ | :------ |
| `emoji` | `EmojiResolvable` |

## Source

[seyfert/src/builders/Poll.ts:53](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Poll.ts#L53)
