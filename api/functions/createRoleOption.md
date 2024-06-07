[seyfert](../globals.md) / createRoleOption

# Function: createRoleOption()

```ts
function createRoleOption<T>(data: T): T & {
  type: ApplicationCommandOptionType.Role;
}
```

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`SeyfertRoleOption`](../type-aliases/SeyfertRoleOption.md) | [`SeyfertRoleOption`](../type-aliases/SeyfertRoleOption.md) |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `T` |

## Returns

`T` & \{
  `type`: `ApplicationCommandOptionType.Role`;
 \}

## Source

[seyfert/src/commands/applications/options.ts:73](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/options.ts#L73)
