---
editUrl: false
next: false
prev: false
title: "RoleSelectMenu"
---

Represents a Select Menu for selecting roles.

## Example

```ts
const roleSelectMenu = new RoleSelectMenu();
roleSelectMenu.setCustomId("role-select");
roleSelectMenu.addDefaultRoles("123456789", "987654321");
```

## Extends

- [`SelectMenu`](/api/classes/selectmenu/)\<`APIRoleSelectComponent`, [`RoleSelectMenuInteraction`](/api/classes/roleselectmenuinteraction/)\>

## Constructors

### new RoleSelectMenu(data)

```ts
new RoleSelectMenu(data: Partial<APIRoleSelectComponent>): RoleSelectMenu
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Partial`\<`APIRoleSelectComponent`\> |

#### Returns

[`RoleSelectMenu`](/api/classes/roleselectmenu/)

#### Overrides

[`SelectMenu`](/api/classes/selectmenu/).[`constructor`](/api/classes/selectmenu/#constructors)

#### Source

[seyfert/src/builders/SelectMenu.ts:166](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/SelectMenu.ts#L166)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `data` | `public` | `Partial`\<`APIRoleSelectComponent`\> | [`SelectMenu`](/api/classes/selectmenu/).`data` |

## Methods

### addDefaultRoles()

```ts
addDefaultRoles(...roles: RestOrArray<string>): this
```

Adds default selected roles to the select menu.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`roles` | `RestOrArray`\<`string`\> | Role IDs to be added as default. |

#### Returns

`this`

The current RoleSelectMenu instance.

#### Source

[seyfert/src/builders/SelectMenu.ts:175](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/SelectMenu.ts#L175)

***

### run()

```ts
run(func: ComponentCallback<RoleSelectMenuInteraction>): this
```

Sets the callback function to be executed when the select menu is interacted with.
 func - The callback function.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `func` | [`ComponentCallback`](/api/type-aliases/componentcallback/)\<[`RoleSelectMenuInteraction`](/api/classes/roleselectmenuinteraction/)\> |

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

### setDefaultRoles()

```ts
setDefaultRoles(...roles: RestOrArray<string>): this
```

Sets the default selected roles for the select menu.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`roles` | `RestOrArray`\<`string`\> | Role IDs to be set as default. |

#### Returns

`this`

The current RoleSelectMenu instance.

#### Source

[seyfert/src/builders/SelectMenu.ts:187](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/SelectMenu.ts#L187)

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
toJSON(): APIRoleSelectComponent
```

#### Returns

`APIRoleSelectComponent`

#### Inherited from

[`SelectMenu`](/api/classes/selectmenu/).[`toJSON`](/api/classes/selectmenu/#tojson)

#### Source

[seyfert/src/builders/Base.ts:8](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Base.ts#L8)
