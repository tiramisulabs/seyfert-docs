---
editUrl: false
next: false
prev: false
title: "StringSelectMenu"
---

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

- `Object`

## Constructors

### new StringSelectMenu(data)

```ts
new StringSelectMenu(data: Partial<APIStringSelectComponent>): StringSelectMenu
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Partial`\<`APIStringSelectComponent`\> |

#### Returns

[`StringSelectMenu`](/api/classes/stringselectmenu/)

#### Overrides

`(SelectMenu as unknown as ToClass<
	Omit<SelectMenu<APIStringSelectComponent, StringSelectMenuInteraction>, 'data' | 'toJSON'>,
	StringSelectMenu
>).constructor`

#### Source

[seyfert/src/builders/SelectMenu.ts:267](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/SelectMenu.ts#L267)

## Properties

| Property | Type |
| :------ | :------ |
| `data` | `Omit`\<`APIStringSelectComponent`, `"options"`\> & `Object` |

## Methods

### addOption()

```ts
addOption(...options: RestOrArray<StringSelectOption>): this
```

Adds options to the string select menu.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`options` | `RestOrArray`\<[`StringSelectOption`](/api/classes/stringselectoption/)\> | Options to be added. |

#### Returns

`this`

The current StringSelectMenu instance.

#### Source

[seyfert/src/builders/SelectMenu.ts:277](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/SelectMenu.ts#L277)

***

### run()

```ts
run(...args: [ComponentCallback<StringSelectMenuInteraction<string[]>>]): StringSelectMenu
```

Sets the callback function to be executed when the select menu is interacted with.
 func - The callback function.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [[`ComponentCallback`](/api/type-aliases/componentcallback/)\<[`StringSelectMenuInteraction`](/api/classes/stringselectmenuinteraction/)\<`string`[]\>\>] |

#### Returns

[`StringSelectMenu`](/api/classes/stringselectmenu/)

The current SelectMenu instance.

#### Inherited from

`(SelectMenu as unknown as ToClass<
	Omit<SelectMenu<APIStringSelectComponent, StringSelectMenuInteraction>, 'data' | 'toJSON'>,
	StringSelectMenu
>).run`

#### Source

[seyfert/src/builders/SelectMenu.ts:117](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/SelectMenu.ts#L117)

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

[`StringSelectMenu`](/api/classes/stringselectmenu/)

The current SelectMenu instance.

#### Inherited from

`(SelectMenu as unknown as ToClass<
	Omit<SelectMenu<APIStringSelectComponent, StringSelectMenuInteraction>, 'data' | 'toJSON'>,
	StringSelectMenu
>).setCustomId`

#### Source

[seyfert/src/builders/SelectMenu.ts:76](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/SelectMenu.ts#L76)

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

[`StringSelectMenu`](/api/classes/stringselectmenu/)

The current SelectMenu instance.

#### Inherited from

`(SelectMenu as unknown as ToClass<
	Omit<SelectMenu<APIStringSelectComponent, StringSelectMenuInteraction>, 'data' | 'toJSON'>,
	StringSelectMenu
>).setDisabled`

#### Source

[seyfert/src/builders/SelectMenu.ts:107](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/SelectMenu.ts#L107)

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
| `options` | [`StringSelectOption`](/api/classes/stringselectoption/)[] |

#### Returns

`this`

The current StringSelectMenu instance.

#### Source

[seyfert/src/builders/SelectMenu.ts:287](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/SelectMenu.ts#L287)

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

[`StringSelectMenu`](/api/classes/stringselectmenu/)

The current SelectMenu instance.

#### Inherited from

`(SelectMenu as unknown as ToClass<
	Omit<SelectMenu<APIStringSelectComponent, StringSelectMenuInteraction>, 'data' | 'toJSON'>,
	StringSelectMenu
>).setPlaceholder`

#### Source

[seyfert/src/builders/SelectMenu.ts:86](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/SelectMenu.ts#L86)

***

### setValuesLength()

```ts
setValuesLength(...args: [Partial<OptionValuesLength>]): StringSelectMenu
```

Sets the maximum and minimum number of selected values for the select menu.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [`Partial`\<[`OptionValuesLength`](/api/type-aliases/optionvalueslength/)\>] |

#### Returns

[`StringSelectMenu`](/api/classes/stringselectmenu/)

The current SelectMenu instance.

#### Inherited from

`(SelectMenu as unknown as ToClass<
	Omit<SelectMenu<APIStringSelectComponent, StringSelectMenuInteraction>, 'data' | 'toJSON'>,
	StringSelectMenu
>).setValuesLength`

#### Source

[seyfert/src/builders/SelectMenu.ts:96](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/SelectMenu.ts#L96)

***

### toJSON()

```ts
toJSON(): APIStringSelectComponent
```

#### Returns

`APIStringSelectComponent`

#### Source

[seyfert/src/builders/SelectMenu.ts:292](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/SelectMenu.ts#L292)
