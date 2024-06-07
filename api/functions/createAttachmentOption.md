[seyfert](../globals.md) / createAttachmentOption

# Function: createAttachmentOption()

```ts
function createAttachmentOption<T>(data: T): T & {
  type: ApplicationCommandOptionType.Attachment;
}
```

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`SeyfertAttachmentOption`](../type-aliases/SeyfertAttachmentOption.md) | [`SeyfertAttachmentOption`](../type-aliases/SeyfertAttachmentOption.md) |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `T` |

## Returns

`T` & \{
  `type`: `ApplicationCommandOptionType.Attachment`;
 \}

## Source

[seyfert/src/commands/applications/options.ts:85](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/options.ts#L85)
