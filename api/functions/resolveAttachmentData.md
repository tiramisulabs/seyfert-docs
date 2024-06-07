[seyfert](../globals.md) / resolveAttachmentData

# Function: resolveAttachmentData()

```ts
function resolveAttachmentData(data: AttachmentResolvable, type: keyof AttachmentResolvableMap): Promise<{
  contentType: string | null;
  data: AttachmentResolvable;
}>
```

Resolves the data of an attachment.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | [`AttachmentResolvable`](../type-aliases/AttachmentResolvable.md) | The resolvable data of the attachment. |
| `type` | keyof [`AttachmentResolvableMap`](../interfaces/AttachmentResolvableMap.md) | The type of the attachment data. |

## Returns

`Promise`\<\{
  `contentType`: `string` \| `null`;
  `data`: [`AttachmentResolvable`](../type-aliases/AttachmentResolvable.md);
 \}\>

The resolved attachment data.

| Member | Type |
| :------ | :------ |
| `contentType` | `string` \| `null` |
| `data` | [`AttachmentResolvable`](../type-aliases/AttachmentResolvable.md) |

## Source

[seyfert/src/builders/Attachment.ts:177](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Attachment.ts#L177)
