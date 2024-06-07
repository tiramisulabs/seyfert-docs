[seyfert](../globals.md) / SeyfertIntegerOption

# Type alias: SeyfertIntegerOption

```ts
type SeyfertIntegerOption: SeyfertBasicOption<"Integer"> & {
  autocomplete: AutocompleteCallback;
  choices: APIApplicationCommandOptionChoice<ReturnOptionsTypes[ApplicationCommandOptionType.Integer]>[];
  max_value: number;
  min_value: number;
  onAutocompleteError: OnAutocompleteErrorCallback;
};
```

## Type declaration

| Member | Type |
| :------ | :------ |
| `autocomplete` | [`AutocompleteCallback`](AutocompleteCallback.md) |
| `choices` | `APIApplicationCommandOptionChoice`\<[`ReturnOptionsTypes`](../interfaces/ReturnOptionsTypes.md)\[`ApplicationCommandOptionType.Integer`\]\>[] |
| `max_value` | `number` |
| `min_value` | `number` |
| `onAutocompleteError` | [`OnAutocompleteErrorCallback`](OnAutocompleteErrorCallback.md) |

## Source

[seyfert/src/commands/applications/options.ts:30](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/options.ts#L30)
