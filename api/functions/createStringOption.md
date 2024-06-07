[seyfert](../globals.md) / createStringOption

# Function: createStringOption()

```ts
function createStringOption<T>(data: T): T & {
  type: ApplicationCommandOptionType.String;
}
```

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`SeyfertStringOption`](../type-aliases/SeyfertStringOption.md) | [`SeyfertStringOption`](../type-aliases/SeyfertStringOption.md) |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `T` |

## Returns

`T` & \{
  `type`: `ApplicationCommandOptionType.String`;
 \}

## Source

[seyfert/src/commands/applications/options.ts:53](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/options.ts#L53)
