---
editUrl: false
next: false
prev: false
title: "MentionableSelectMenu"
---

Represents a Select Menu for selecting mentionable entities.

## Example

```ts
const mentionableSelectMenu = new MentionableSelectMenu();
mentionableSelectMenu.setCustomId("mentionable-select");
```

## Extends

- [`SelectMenu`](/api/classes/selectmenu/)\<`APIMentionableSelectComponent`, [`MentionableSelectMenuInteraction`](/api/classes/mentionableselectmenuinteraction/)\>

## Constructors

### new MentionableSelectMenu(data)

```ts
new MentionableSelectMenu(data: Partial<APIMentionableSelectComponent>): MentionableSelectMenu
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Partial`\<`APIMentionableSelectComponent`\> |

#### Returns

[`MentionableSelectMenu`](/api/classes/mentionableselectmenu/)

#### Overrides

[`SelectMenu`](/api/classes/selectmenu/).[`constructor`](/api/classes/selectmenu/#constructors)

#### Source

[seyfert/src/builders/SelectMenu.ts:200](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/SelectMenu.ts#L200)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `data` | `public` | `Partial`\<`APIMentionableSelectComponent`\> | [`SelectMenu`](/api/classes/selectmenu/).`data` |

## Methods

### run()

```ts
run(func: ComponentCallback<MentionableSelectMenuInteraction>): this
```

Sets the callback function to be executed when the select menu is interacted with.
 func - The callback function.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `func` | [`ComponentCallback`](/api/type-aliases/componentcallback/)\<[`MentionableSelectMenuInteraction`](/api/classes/mentionableselectmenuinteraction/)\> |

#### Returns

`this`

The current SelectMenu instance.

#### Inherited from

[`SelectMenu`](/api/classes/selectmenu/).[`run`](/api/classes/selectmenu/#run)

#### Source

[seyfert/src/builders/SelectMenu.ts:117](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/SelectMenu.ts#L117)

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

[seyfert/src/builders/SelectMenu.ts:76](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/SelectMenu.ts#L76)

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

[seyfert/src/builders/SelectMenu.ts:107](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/SelectMenu.ts#L107)

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

[seyfert/src/builders/SelectMenu.ts:86](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/SelectMenu.ts#L86)

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

[seyfert/src/builders/SelectMenu.ts:96](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/SelectMenu.ts#L96)

***

### toJSON()

```ts
toJSON(): APIMentionableSelectComponent
```

#### Returns

`APIMentionableSelectComponent`

#### Inherited from

[`SelectMenu`](/api/classes/selectmenu/).[`toJSON`](/api/classes/selectmenu/#tojson)

#### Source

[seyfert/src/builders/Base.ts:8](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Base.ts#L8)
