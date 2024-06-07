[seyfert](../globals.md) / CommandBaseAutocompleteOption

# Type alias: CommandBaseAutocompleteOption

```ts
type CommandBaseAutocompleteOption: __TypesWrapper[keyof __TypesWrapper] & {
  autocomplete: AutocompleteCallback;
  onAutocompleteError: OnAutocompleteErrorCallback;
};
```

## Type declaration

| Member | Type |
| :------ | :------ |
| `autocomplete` | [`AutocompleteCallback`](AutocompleteCallback.md) |
| `onAutocompleteError` | [`OnAutocompleteErrorCallback`](OnAutocompleteErrorCallback.md) |

## Source

[seyfert/src/commands/applications/chat.ts:84](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chat.ts#L84)
