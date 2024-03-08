---
editUrl: false
next: false
prev: false
title: "resolveAttachment"
---

```ts
resolveAttachment(resolve: RESTAPIAttachment | Attachment | AttachmentData): Omit<RESTAPIAttachment, "id">
```

Resolves an attachment to a REST API attachment.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `resolve` | `RESTAPIAttachment` \| [`Attachment`](/api/classes/attachment/) \| [`AttachmentData`](/api/interfaces/attachmentdata/) | The attachment or attachment data to resolve. |

## Returns

`Omit`\<`RESTAPIAttachment`, `"id"`\>

The resolved REST API attachment.

## Source

[seyfert/src/builders/Attachment.ts:123](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/Attachment.ts#L123)
