---
editUrl: false
next: false
prev: false
title: "resolveFiles"
---

```ts
resolveFiles(resources: (Attachment | RawFile)[]): Promise<RawFile[]>
```

Resolves a list of attachments to raw files.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `resources` | ([`Attachment`](/api/classes/attachment/) \| [`RawFile`](/api/interfaces/rawfile/))[] | The list of attachments to resolve. |

## Returns

`Promise`\<[`RawFile`](/api/interfaces/rawfile/)[]\>

The resolved raw files.

## Source

[seyfert/src/builders/Attachment.ts:125](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/Attachment.ts#L125)
