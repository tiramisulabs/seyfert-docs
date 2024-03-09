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

- [`SelectMenu`](/api/classes/selectmenu/)\<`APIStringSelectComponent`, [`StringSelectMenuInteraction`](/api/classes/stringselectmenuinteraction/)\>

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

[`SelectMenu`](/api/classes/selectmenu/).[`constructor`](/api/classes/selectmenu/#constructors)

#### Source

[seyfert/src/builders/SelectMenu.ts:261](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/SelectMenu.ts#L261)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `data` | `public` | `Partial`\<`APIStringSelectComponent`\> | [`SelectMenu`](/api/classes/selectmenu/).`data` |

## Methods

### addOption()

```ts
addOption(...options: RestOrArray<APISelectMenuOption>): this
```

Adds options to the string select menu.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`options` | `RestOrArray`\<`APISelectMenuOption`\> | Options to be added. |

#### Returns

`this`

The current StringSelectMenu instance.

#### Source

[seyfert/src/builders/SelectMenu.ts:270](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/SelectMenu.ts#L270)

***

### run()

```ts
run(func: ComponentCallback<StringSelectMenuInteraction<string[]>>): this
```

Sets the callback function to be executed when the select menu is interacted with.
 func - The callback function.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `func` | [`ComponentCallback`](/api/type-aliases/componentcallback/)\<[`StringSelectMenuInteraction`](/api/classes/stringselectmenuinteraction/)\<`string`[]\>\> |

#### Returns

`this`

The current SelectMenu instance.

#### Inherited from

[`SelectMenu`](/api/classes/selectmenu/).[`run`](/api/classes/selectmenu/#run)

#### Source

[seyfert/src/builders/SelectMenu.ts:115](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/SelectMenu.ts#L115)

***

### setCustomId()

```ts
setCustomId(id: string): this
```

Sets the custom ID for the select menu.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The custom ID for the select menu. |

#### Returns

`this`

The current SelectMenu instance.

#### Inherited from

[`SelectMenu`](/api/classes/selectmenu/).[`setCustomId`](/api/classes/selectmenu/#setcustomid)

#### Source

[seyfert/src/builders/SelectMenu.ts:74](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/SelectMenu.ts#L74)

***

### setDisabled()

```ts
setDisabled(disabled: boolean): this
```

Sets whether the select menu is disabled.
 [disabled=true] - Indicates whether the select menu is disabled.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `disabled` | `boolean` | `true` |

#### Returns

`this`

The current SelectMenu instance.

#### Inherited from

[`SelectMenu`](/api/classes/selectmenu/).[`setDisabled`](/api/classes/selectmenu/#setdisabled)

#### Source

[seyfert/src/builders/SelectMenu.ts:105](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/SelectMenu.ts#L105)

***

### setOptions()

```ts
setOptions(options: APISelectMenuOption[]): this
```

Sets the options for the string select menu.
 options - Options to be set.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `APISelectMenuOption`[] |

#### Returns

`this`

The current StringSelectMenu instance.

#### Source

[seyfert/src/builders/SelectMenu.ts:281](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/SelectMenu.ts#L281)

***

### setPlaceholder()

```ts
setPlaceholder(placeholder: string): this
```

Sets the placeholder text for the select menu.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `placeholder` | `string` | The placeholder text. |

#### Returns

`this`

The current SelectMenu instance.

#### Inherited from

[`SelectMenu`](/api/classes/selectmenu/).[`setPlaceholder`](/api/classes/selectmenu/#setplaceholder)

#### Source

[seyfert/src/builders/SelectMenu.ts:84](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/SelectMenu.ts#L84)

***

### setValuesLength()

```ts
setValuesLength(options: Partial<OptionValuesLength>): this
```

Sets the maximum and minimum number of selected values for the select menu.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | `Partial`\<[`OptionValuesLength`](/api/type-aliases/optionvalueslength/)\> | The maximum and minimum values. |

#### Returns

`this`

The current SelectMenu instance.

#### Inherited from

[`SelectMenu`](/api/classes/selectmenu/).[`setValuesLength`](/api/classes/selectmenu/#setvalueslength)

#### Source

[seyfert/src/builders/SelectMenu.ts:94](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/SelectMenu.ts#L94)

***

### toJSON()

```ts
toJSON(): APIStringSelectComponent
```

#### Returns

`APIStringSelectComponent`

#### Inherited from

[`SelectMenu`](/api/classes/selectmenu/).[`toJSON`](/api/classes/selectmenu/#tojson)

#### Source

[seyfert/src/builders/Base.ts:8](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/Base.ts#L8)
