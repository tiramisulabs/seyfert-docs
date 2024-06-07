[seyfert](../globals.md) / UserSelectMenu

# Class: UserSelectMenu

Represents a Select Menu for selecting users.

## Example

```ts
const userSelectMenu = new UserSelectMenu();
userSelectMenu.setCustomId("user-select");
userSelectMenu.addDefaultUsers("123456789", "987654321");
```

## Extends

- [`SelectMenu`](SelectMenu.md)\<`APIUserSelectComponent`, [`UserSelectMenuInteraction`](UserSelectMenuInteraction.md)\>

## Constructors

### new UserSelectMenu()

```ts
new UserSelectMenu(data: Partial<APIUserSelectComponent>): UserSelectMenu
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Partial`\<`APIUserSelectComponent`\> |

#### Returns

[`UserSelectMenu`](UserSelectMenu.md)

#### Overrides

[`SelectMenu`](SelectMenu.md).[`constructor`](SelectMenu.md#constructors)

#### Source

[seyfert/src/builders/SelectMenu.ts:116](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L116)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `data` | `public` | `Partial`\<`APIUserSelectComponent`\> | [`SelectMenu`](SelectMenu.md).`data` |

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

[seyfert/src/builders/SelectMenu.ts:125](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L125)

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

[seyfert/src/builders/SelectMenu.ts:137](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L137)

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
toJSON(): APIUserSelectComponent
```

#### Returns

`APIUserSelectComponent`

#### Inherited from

[`SelectMenu`](SelectMenu.md).[`toJSON`](SelectMenu.md#tojson)

#### Source

[seyfert/src/builders/Base.ts:8](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Base.ts#L8)
