[seyfert](../globals.md) / createChannelOption

# Function: createChannelOption()

```ts
function createChannelOption<T>(data: T): T & {
  type: ApplicationCommandOptionType.Channel;
}
```

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`SeyfertChannelOption`](../type-aliases/SeyfertChannelOption.md) | [`SeyfertChannelOption`](../type-aliases/SeyfertChannelOption.md) |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `T` |

## Returns

`T` & \{
  `type`: `ApplicationCommandOptionType.Channel`;
 \}

## Source

[seyfert/src/commands/applications/options.ts:69](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/options.ts#L69)
