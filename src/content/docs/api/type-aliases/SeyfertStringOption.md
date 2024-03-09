---
editUrl: false
next: false
prev: false
title: "SeyfertStringOption"
---

```ts
type SeyfertStringOption: SeyfertBasicOption<"String"> & Object;
```

## Type declaration

| Member | Type |
| :------ | :------ |
| `autocomplete` | [`AutocompleteCallback`](/api/type-aliases/autocompletecallback/) |
| `choices` | readonly `Object`[] \| `APIApplicationCommandOptionChoice`\<[`ReturnOptionsTypes`](/api/interfaces/returnoptionstypes/)\[`ApplicationCommandOptionType.String`\]\>[] |
| `max_length` | `number` |
| `min_length` | `number` |
| `onAutocompleteError` | [`OnAutocompleteErrorCallback`](/api/type-aliases/onautocompleteerrorcallback/) |

## Source

[seyfert/src/commands/applications/options.ts:19](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/applications/options.ts#L19)
