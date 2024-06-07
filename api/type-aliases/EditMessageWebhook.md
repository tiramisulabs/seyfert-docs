[seyfert](../globals.md) / EditMessageWebhook

# Type alias: EditMessageWebhook

```ts
type EditMessageWebhook: Omit<MessageWebhookMethodEditParams, "messageId">["body"] & Pick<MessageWebhookMethodEditParams, "query">;
```

## Source

[seyfert/src/structures/Message.ts:158](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L158)
