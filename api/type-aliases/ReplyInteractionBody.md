[seyfert](../globals.md) / ReplyInteractionBody

# Type alias: ReplyInteractionBody

```ts
type ReplyInteractionBody: {
  data: ModalCreateBodyRequest;
  type: InteractionResponseType.Modal;
 } | {
  data: InteractionCreateBodyRequest | InteractionMessageUpdateBodyRequest | ComponentInteractionMessageUpdate;
  type: InteractionResponseType.ChannelMessageWithSource | InteractionResponseType.UpdateMessage;
} | Exclude<RESTPostAPIInteractionCallbackJSONBody, APIInteractionResponsePong>;
```

## Source

[seyfert/src/structures/Interaction.ts:62](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L62)
