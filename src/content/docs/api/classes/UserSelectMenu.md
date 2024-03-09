---
editUrl: false
next: false
prev: false
title: "UserSelectMenu"
---

Represents a Select Menu for selecting users.

## Example

```ts
const userSelectMenu = new UserSelectMenu();
userSelectMenu.setCustomId("user-select");
userSelectMenu.addDefaultUsers("123456789", "987654321");
```

## Extends

- [`SelectMenu`](/api/classes/selectmenu/)\<`APIUserSelectComponent`, [`UserSelectMenuInteraction`](/api/classes/userselectmenuinteraction/)\>

## Constructors

### new UserSelectMenu(data)

```ts
new UserSelectMenu(data: Partial<APIUserSelectComponent>): UserSelectMenu
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Partial`\<`APIUserSelectComponent`\> |

#### Returns

[`UserSelectMenu`](/api/classes/userselectmenu/)

#### Overrides

[`SelectMenu`](/api/classes/selectmenu/).[`constructor`](/api/classes/selectmenu/#constructors)

#### Source

[seyfert/src/builders/SelectMenu.ts:131](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/SelectMenu.ts#L131)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `data` | `public` | `Partial`\<`APIUserSelectComponent`\> | [`SelectMenu`](/api/classes/selectmenu/).`data` |

## Methods

### addDefaultUsers()

```ts
addDefaultUsers(...users: RestOrArray<string>): this
```

Adds default selected users to the select menu.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`users` | `RestOrArray`\<`string`\> | User IDs to be added as default. |

#### Returns

`this`

The current UserSelectMenu instance.

#### Source

[seyfert/src/builders/SelectMenu.ts:140](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/SelectMenu.ts#L140)

***

### run()

```ts
run(func: ComponentCallback<UserSelectMenuInteraction>): this
```

Sets the callback function to be executed when the select menu is interacted with.
 func - The callback function.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `func` | [`ComponentCallback`](/api/type-aliases/componentcallback/)\<[`UserSelectMenuInteraction`](/api/classes/userselectmenuinteraction/)\> |

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

### setDefaultUsers()

```ts
setDefaultUsers(...users: RestOrArray<string>): this
```

Sets the default selected users for the select menu.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`users` | `RestOrArray`\<`string`\> | User IDs to be set as default. |

#### Returns

`this`

The current UserSelectMenu instance.

#### Source

[seyfert/src/builders/SelectMenu.ts:152](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/SelectMenu.ts#L152)

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
toJSON(): APIUserSelectComponent
```

#### Returns

`APIUserSelectComponent`

#### Inherited from

[`SelectMenu`](/api/classes/selectmenu/).[`toJSON`](/api/classes/selectmenu/#tojson)

#### Source

[seyfert/src/builders/Base.ts:8](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Base.ts#L8)
