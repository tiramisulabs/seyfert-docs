---
editUrl: false
next: false
prev: false
title: "SelectMenu"
---

Represents a base class for building Select Menus.

## Example

```ts
const selectMenu = new SelectMenu<APIUserSelectComponent, UserSelectMenuInteraction>();
selectMenu.setCustomId("user-select-menu");
selectMenu.setPlaceholder("Select a user");
selectMenu.run((interaction) => {
  // Handle select menu interaction
});
```

## Extends

- [`BaseComponentBuilder`](/api/classes/basecomponentbuilder/)\<`Select`\>

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `Select` extends `APISelectMenuComponent` | `APISelectMenuComponent` | The type of APISelectMenuComponent. |
| `Interaction` | [`ComponentInteraction`](/api/classes/componentinteraction/) | The type of interaction. |

## Constructors

### new SelectMenu(data)

```ts
new SelectMenu<Select, Interaction>(data: Partial<Select>): SelectMenu<Select, Interaction>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Partial`\<`Select`\> |

#### Returns

[`SelectMenu`](/api/classes/selectmenu/)\<`Select`, `Interaction`\>

#### Inherited from

[`BaseComponentBuilder`](/api/classes/basecomponentbuilder/).[`constructor`](/api/classes/basecomponentbuilder/#constructors)

#### Source

[seyfert/src/builders/Base.ts:6](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/Base.ts#L6)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `data` | `public` | `Partial`\<`Select`\> | [`BaseComponentBuilder`](/api/classes/basecomponentbuilder/).`data` |

## Methods

### run()

```ts
run(func: ComponentCallback<Interaction>): this
```

Sets the callback function to be executed when the select menu is interacted with.
 func - The callback function.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `func` | [`ComponentCallback`](/api/type-aliases/componentcallback/)\<`Interaction`\> |

#### Returns

`this`

The current SelectMenu instance.

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

#### Source

[seyfert/src/builders/SelectMenu.ts:105](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/SelectMenu.ts#L105)

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

#### Source

[seyfert/src/builders/SelectMenu.ts:94](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/SelectMenu.ts#L94)

***

### toJSON()

```ts
toJSON(): Select
```

#### Returns

`Select`

#### Inherited from

[`BaseComponentBuilder`](/api/classes/basecomponentbuilder/).[`toJSON`](/api/classes/basecomponentbuilder/#tojson)

#### Source

[seyfert/src/builders/Base.ts:8](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/Base.ts#L8)
