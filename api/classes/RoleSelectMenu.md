[seyfert](../globals.md) / RoleSelectMenu

# Class: RoleSelectMenu

Represents a Select Menu for selecting roles.

## Example

```ts
const roleSelectMenu = new RoleSelectMenu();
roleSelectMenu.setCustomId("role-select");
roleSelectMenu.addDefaultRoles("123456789", "987654321");
```

## Extends

- [`SelectMenu`](SelectMenu.md)\<`APIRoleSelectComponent`, [`RoleSelectMenuInteraction`](RoleSelectMenuInteraction.md)\>

## Constructors

### new RoleSelectMenu()

```ts
new RoleSelectMenu(data: Partial<APIRoleSelectComponent>): RoleSelectMenu
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Partial`\<`APIRoleSelectComponent`\> |

#### Returns

[`RoleSelectMenu`](RoleSelectMenu.md)

#### Overrides

[`SelectMenu`](SelectMenu.md).[`constructor`](SelectMenu.md#constructors)

#### Source

[seyfert/src/builders/SelectMenu.ts:151](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L151)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `data` | `public` | `Partial`\<`APIRoleSelectComponent`\> | [`SelectMenu`](SelectMenu.md).`data` |

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

[seyfert/src/builders/SelectMenu.ts:160](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L160)

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

[`SelectMenu`](SelectMenu.md).[`setCustomId`](SelectMenu.md#setcustomid)

#### Source

[seyfert/src/builders/SelectMenu.ts:71](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L71)

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

[seyfert/src/builders/SelectMenu.ts:172](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L172)

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

[`SelectMenu`](SelectMenu.md).[`setDisabled`](SelectMenu.md#setdisabled)

#### Source

[seyfert/src/builders/SelectMenu.ts:102](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L102)

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

[`SelectMenu`](SelectMenu.md).[`setPlaceholder`](SelectMenu.md#setplaceholder)

#### Source

[seyfert/src/builders/SelectMenu.ts:81](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L81)

***

### setValuesLength()

```ts
setValuesLength(options: Partial<OptionValuesLength>): this
```

Sets the maximum and minimum number of selected values for the select menu.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | `Partial`\<[`OptionValuesLength`](../type-aliases/OptionValuesLength.md)\> | The maximum and minimum values. |

#### Returns

`this`

The current SelectMenu instance.

#### Inherited from

[`SelectMenu`](SelectMenu.md).[`setValuesLength`](SelectMenu.md#setvalueslength)

#### Source

[seyfert/src/builders/SelectMenu.ts:91](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L91)

***

### toJSON()

```ts
toJSON(): APIRoleSelectComponent
```

#### Returns

`APIRoleSelectComponent`

#### Inherited from

[`SelectMenu`](SelectMenu.md).[`toJSON`](SelectMenu.md#tojson)

#### Source

[seyfert/src/builders/Base.ts:8](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Base.ts#L8)
