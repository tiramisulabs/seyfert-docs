---
editUrl: false
next: false
prev: false
title: "resolveFiles"
---

```ts
resolveFiles(resources: (AttachmentBuilder | Attachment | RawFile)[]): Promise<RawFile[]>
```

Resolves a list of attachments to raw files.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `resources` | ([`AttachmentBuilder`](/api/classes/attachmentbuilder/) \| [`Attachment`](/api/classes/attachment/) \| [`RawFile`](/api/interfaces/rawfile/))[] | The list of attachments to resolve. |

## Returns

`Promise`\<[`RawFile`](/api/interfaces/rawfile/)[]\>

The resolved raw files.

## Source

[seyfert/src/builders/Attachment.ts:141](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/Attachment.ts#L141)
