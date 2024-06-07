[seyfert](../globals.md) / createNumberOption

# Function: createNumberOption()

```ts
function createNumberOption<T>(data: T): T & {
  type: ApplicationCommandOptionType.Number;
}
```

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`SeyfertNumberOption`](../type-aliases/SeyfertNumberOption.md) | [`SeyfertNumberOption`](../type-aliases/SeyfertNumberOption.md) |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `T` |

## Returns

`T` & \{
  `type`: `ApplicationCommandOptionType.Number`;
 \}

## Source

[seyfert/src/commands/applications/options.ts:81](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/options.ts#L81)
