---
editUrl: false
next: false
prev: false
title: "resolveAttachmentData"
---

```ts
resolveAttachmentData(data: AttachmentResolvable, type: keyof AttachmentResolvableMap): Promise<Object | Object>
```

Resolves the data of an attachment.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | [`AttachmentResolvable`](/api/type-aliases/attachmentresolvable/) | The resolvable data of the attachment. |
| `type` | keyof [`AttachmentResolvableMap`](/api/interfaces/attachmentresolvablemap/) | The type of the attachment data. |

## Returns

`Promise`\<`Object` \| `Object`\>

The resolved attachment data.

## Source

[seyfert/src/builders/Attachment.ts:176](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/Attachment.ts#L176)
