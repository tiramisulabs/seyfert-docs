[seyfert](../globals.md) / createUserOption

# Function: createUserOption()

```ts
function createUserOption<T>(data: T): T & {
  type: ApplicationCommandOptionType.User;
}
```

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`SeyfertUserOption`](../type-aliases/SeyfertUserOption.md) | [`SeyfertUserOption`](../type-aliases/SeyfertUserOption.md) |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `T` |

## Returns

`T` & \{
  `type`: `ApplicationCommandOptionType.User`;
 \}

## Source

[seyfert/src/commands/applications/options.ts:65](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/options.ts#L65)
