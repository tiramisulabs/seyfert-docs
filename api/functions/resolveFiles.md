[seyfert](../globals.md) / resolveFiles

# Function: resolveFiles()

```ts
function resolveFiles(resources: (AttachmentBuilder | Attachment | RawFile)[]): Promise<RawFile[]>
```

Resolves a list of attachments to raw files.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `resources` | ([`AttachmentBuilder`](../classes/AttachmentBuilder.md) \| [`Attachment`](../classes/Attachment.md) \| [`RawFile`](../interfaces/RawFile.md))[] | The list of attachments to resolve. |

## Returns

`Promise`\<[`RawFile`](../interfaces/RawFile.md)[]\>

The resolved raw files.

## Source

[seyfert/src/builders/Attachment.ts:142](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Attachment.ts#L142)
