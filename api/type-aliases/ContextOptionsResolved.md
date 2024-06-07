[seyfert](../globals.md) / ContextOptionsResolved

# Type alias: ContextOptionsResolved

```ts
type ContextOptionsResolved: {
  attachments: Record<string, APIAttachment | Attachment>;
  channels: Record<string, APIInteractionDataResolvedChannel | AllChannels>;
  members: Record<string, APIGuildMember | APIInteractionGuildMember | GuildMember | InteractionGuildMember>;
  roles: Record<string, APIRole | GuildRole>;
  users: Record<string, APIUser | User>;
};
```

## Type declaration

| Member | Type |
| :------ | :------ |
| `attachments` | `Record`\<`string`, `APIAttachment` \| [`Attachment`](../classes/Attachment.md)\> |
| `channels` | `Record`\<`string`, `APIInteractionDataResolvedChannel` \| [`AllChannels`](AllChannels.md)\> |
| `members` | `Record`\<`string`, `APIGuildMember` \| `APIInteractionGuildMember` \| [`GuildMember`](../classes/GuildMember.md) \| [`InteractionGuildMember`](../classes/InteractionGuildMember.md)\> |
| `roles` | `Record`\<`string`, `APIRole` \| [`GuildRole`](../classes/GuildRole.md)\> |
| `users` | `Record`\<`string`, `APIUser` \| [`User`](../classes/User.md)\> |

## Source

[seyfert/src/commands/optionresolver.ts:19](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/optionresolver.ts#L19)
