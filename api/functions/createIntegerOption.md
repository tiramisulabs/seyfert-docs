[seyfert](../globals.md) / createIntegerOption

# Function: createIntegerOption()

```ts
function createIntegerOption<T>(data: T): T & {
  type: ApplicationCommandOptionType.Integer;
}
```

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`SeyfertIntegerOption`](../type-aliases/SeyfertIntegerOption.md) | [`SeyfertIntegerOption`](../type-aliases/SeyfertIntegerOption.md) |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `T` |

## Returns

`T` & \{
  `type`: `ApplicationCommandOptionType.Integer`;
 \}

## Source

[seyfert/src/commands/applications/options.ts:57](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/options.ts#L57)
