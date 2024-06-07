[seyfert](../globals.md) / StringSelectMenu

# Class: StringSelectMenu

Represents a Select Menu for selecting string options.

## Example

```ts
const stringSelectMenu = new StringSelectMenu();
stringSelectMenu.setCustomId("string-select");
stringSelectMenu.addOption(new StringSelectOption().setLabel("Option 1").setValue("option_1"));
stringSelectMenu.setOptions([
  { label: "Option 2", value: "option_2" },
  { label: "Option 3", value: "option_3" },
]);
```

## Extends

- \{
  `setCustomId`: [`StringSelectMenu`](StringSelectMenu.md);
  `setDisabled`: [`StringSelectMenu`](StringSelectMenu.md);
  `setPlaceholder`: [`StringSelectMenu`](StringSelectMenu.md);
  `setValuesLength`: [`StringSelectMenu`](StringSelectMenu.md);
 \}

## Constructors

### new StringSelectMenu()

```ts
new StringSelectMenu(data: Partial<APIStringSelectComponent>): StringSelectMenu
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Partial`\<`APIStringSelectComponent`\> |

#### Returns

[`StringSelectMenu`](StringSelectMenu.md)

#### Overrides

(SelectMenu as unknown as ToClass\<
	Omit\<SelectMenu\<APIStringSelectComponent, StringSelectMenuInteraction\>, 'data' \| 'toJSON'\>,
	StringSelectMenu
\>).constructor

#### Source

[seyfert/src/builders/SelectMenu.ts:282](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L282)

## Properties

| Property | Type |
| :------ | :------ |
| `data` | `Omit`\<`APIStringSelectComponent`, `"options"`\> & \{ `options`: [`StringSelectOption`](StringSelectOption.md)[]; \} |

## Methods

### addOption()

```ts
addOption(...options: RestOrArray<StringSelectOption>): this
```

Adds options to the string select menu.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`options` | `RestOrArray`\<[`StringSelectOption`](StringSelectOption.md)\> | Options to be added. |

#### Returns

`this`

The current StringSelectMenu instance.

#### Source

[seyfert/src/builders/SelectMenu.ts:292](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L292)

***

### setCustomId()

```ts
setCustomId(...args: [string]): StringSelectMenu
```

Sets the custom ID for the select menu.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [`string`] |

#### Returns

[`StringSelectMenu`](StringSelectMenu.md)

The current SelectMenu instance.

#### Inherited from

(SelectMenu as unknown as ToClass\<
	Omit\<SelectMenu\<APIStringSelectComponent, StringSelectMenuInteraction\>, 'data' \| 'toJSON'\>,
	StringSelectMenu
\>).setCustomId

#### Source

[seyfert/src/builders/SelectMenu.ts:71](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L71)

***

### setDisabled()

```ts
setDisabled(...args: [boolean]): StringSelectMenu
```

Sets whether the select menu is disabled.
 [disabled=true] - Indicates whether the select menu is disabled.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [`boolean`] |

#### Returns

[`StringSelectMenu`](StringSelectMenu.md)

The current SelectMenu instance.

#### Inherited from

(SelectMenu as unknown as ToClass\<
	Omit\<SelectMenu\<APIStringSelectComponent, StringSelectMenuInteraction\>, 'data' \| 'toJSON'\>,
	StringSelectMenu
\>).setDisabled

#### Source

[seyfert/src/builders/SelectMenu.ts:102](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L102)

***

### setOptions()

```ts
setOptions(options: StringSelectOption[]): this
```

Sets the options for the string select menu.
 options - Options to be set.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`StringSelectOption`](StringSelectOption.md)[] |

#### Returns

`this`

The current StringSelectMenu instance.

#### Source

[seyfert/src/builders/SelectMenu.ts:302](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L302)

***

### setPlaceholder()

```ts
setPlaceholder(...args: [string]): StringSelectMenu
```

Sets the placeholder text for the select menu.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [`string`] |

#### Returns

[`StringSelectMenu`](StringSelectMenu.md)

The current SelectMenu instance.

#### Inherited from

(SelectMenu as unknown as ToClass\<
	Omit\<SelectMenu\<APIStringSelectComponent, StringSelectMenuInteraction\>, 'data' \| 'toJSON'\>,
	StringSelectMenu
\>).setPlaceholder

#### Source

[seyfert/src/builders/SelectMenu.ts:81](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L81)

***

### setValuesLength()

```ts
setValuesLength(...args: [Partial<OptionValuesLength>]): StringSelectMenu
```

Sets the maximum and minimum number of selected values for the select menu.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [`Partial`\<[`OptionValuesLength`](../type-aliases/OptionValuesLength.md)\>] |

#### Returns

[`StringSelectMenu`](StringSelectMenu.md)

The current SelectMenu instance.

#### Inherited from

(SelectMenu as unknown as ToClass\<
	Omit\<SelectMenu\<APIStringSelectComponent, StringSelectMenuInteraction\>, 'data' \| 'toJSON'\>,
	StringSelectMenu
\>).setValuesLength

#### Source

[seyfert/src/builders/SelectMenu.ts:91](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L91)

***

### toJSON()

```ts
toJSON(): APIStringSelectComponent
```

#### Returns

`APIStringSelectComponent`

#### Source

[seyfert/src/builders/SelectMenu.ts:307](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L307)
