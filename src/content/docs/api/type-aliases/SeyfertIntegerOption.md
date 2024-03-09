---
editUrl: false
next: false
prev: false
title: "SeyfertIntegerOption"
---

```ts
type SeyfertIntegerOption: SeyfertBasicOption<"Integer"> & Object;
```

## Type declaration

| Member | Type |
| :------ | :------ |
| `autocomplete` | [`AutocompleteCallback`](/api/type-aliases/autocompletecallback/) |
| `choices` | `APIApplicationCommandOptionChoice`\<[`ReturnOptionsTypes`](/api/interfaces/returnoptionstypes/)\[`ApplicationCommandOptionType.Integer`\]\>[] |
| `max_value` | `number` |
| `min_value` | `number` |
| `onAutocompleteError` | [`OnAutocompleteErrorCallback`](/api/type-aliases/onautocompleteerrorcallback/) |

## Source

[seyfert/src/commands/applications/options.ts:28](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/applications/options.ts#L28)
