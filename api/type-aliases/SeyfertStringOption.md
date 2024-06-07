[seyfert](../globals.md) / SeyfertStringOption

# Type alias: SeyfertStringOption

```ts
type SeyfertStringOption: SeyfertBasicOption<"String"> & {
  autocomplete: AutocompleteCallback;
  choices: readonly {
     name: string;
     value: string;
    }[] | APIApplicationCommandOptionChoice<ReturnOptionsTypes[ApplicationCommandOptionType.String]>[];
  max_length: number;
  min_length: number;
  onAutocompleteError: OnAutocompleteErrorCallback;
};
```

## Type declaration

| Member | Type |
| :------ | :------ |
| `autocomplete` | [`AutocompleteCallback`](AutocompleteCallback.md) |
| `choices` | readonly \{
  `name`: `string`;
  `value`: `string`;
 \}[] \| `APIApplicationCommandOptionChoice`\<[`ReturnOptionsTypes`](../interfaces/ReturnOptionsTypes.md)\[`ApplicationCommandOptionType.String`\]\>[] |
| `max_length` | `number` |
| `min_length` | `number` |
| `onAutocompleteError` | [`OnAutocompleteErrorCallback`](OnAutocompleteErrorCallback.md) |

## Source

[seyfert/src/commands/applications/options.ts:21](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/options.ts#L21)
