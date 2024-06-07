[seyfert](../globals.md) / createMentionableOption

# Function: createMentionableOption()

```ts
function createMentionableOption<T>(data: T): T & {
  type: ApplicationCommandOptionType.Mentionable;
}
```

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`SeyfertMentionableOption`](../type-aliases/SeyfertMentionableOption.md) | [`SeyfertMentionableOption`](../type-aliases/SeyfertMentionableOption.md) |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `T` |

## Returns

`T` & \{
  `type`: `ApplicationCommandOptionType.Mentionable`;
 \}

## Source

[seyfert/src/commands/applications/options.ts:77](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/options.ts#L77)
