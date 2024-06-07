[seyfert](../globals.md) / resolveAttachment

# Function: resolveAttachment()

```ts
function resolveAttachment(resolve: RESTAPIAttachment | Attachment | AttachmentData): Omit<RESTAPIAttachment, "id">
```

Resolves an attachment to a REST API attachment.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `resolve` | `RESTAPIAttachment` \| [`Attachment`](../classes/Attachment.md) \| [`AttachmentData`](../interfaces/AttachmentData.md) | The attachment or attachment data to resolve. |

## Returns

`Omit`\<`RESTAPIAttachment`, `"id"`\>

The resolved REST API attachment.

## Source

[seyfert/src/builders/Attachment.ts:124](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Attachment.ts#L124)
