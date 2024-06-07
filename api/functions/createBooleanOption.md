[seyfert](../globals.md) / createBooleanOption

# Function: createBooleanOption()

```ts
function createBooleanOption<T>(data: T): T & {
  type: ApplicationCommandOptionType.Boolean;
}
```

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`SeyfertBooleanOption`](../type-aliases/SeyfertBooleanOption.md) | [`SeyfertBooleanOption`](../type-aliases/SeyfertBooleanOption.md) |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `T` |

## Returns

`T` & \{
  `type`: `ApplicationCommandOptionType.Boolean`;
 \}

## Source

[seyfert/src/commands/applications/options.ts:61](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/options.ts#L61)
