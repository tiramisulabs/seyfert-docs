---
editUrl: false
next: false
prev: false
title: "SeyfertNumberOption"
---

```ts
type SeyfertNumberOption: SeyfertBasicOption<"Number"> & Object;
```

## Type declaration

| Member | Type |
| :------ | :------ |
| `autocomplete` | [`AutocompleteCallback`](/api/type-aliases/autocompletecallback/) |
| `choices` | `APIApplicationCommandOptionChoice`\<[`ReturnOptionsTypes`](/api/interfaces/returnoptionstypes/)\[`ApplicationCommandOptionType.Number`\]\>[] |
| `max_value` | `number` |
| `min_value` | `number` |
| `onAutocompleteError` | [`OnAutocompleteErrorCallback`](/api/type-aliases/onautocompleteerrorcallback/) |

## Source

[seyfert/src/commands/applications/options.ts:42](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/applications/options.ts#L42)
