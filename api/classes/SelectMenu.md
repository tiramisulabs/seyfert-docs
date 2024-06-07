[seyfert](../globals.md) / SelectMenu

# Class: SelectMenu\<Select, Interaction\>

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

- [`BaseComponentBuilder`](BaseComponentBuilder.md)\<`Select`\>

## Extended by

- [`UserSelectMenu`](UserSelectMenu.md)
- [`RoleSelectMenu`](RoleSelectMenu.md)
- [`MentionableSelectMenu`](MentionableSelectMenu.md)
- [`ChannelSelectMenu`](ChannelSelectMenu.md)

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `Select` *extends* `APISelectMenuComponent` | `APISelectMenuComponent` | The type of APISelectMenuComponent. |
| `Interaction` | [`ComponentInteraction`](ComponentInteraction.md) | The type of interaction. |

## Constructors

### new SelectMenu()

```ts
new SelectMenu<Select, Interaction>(data: Partial<Select>): SelectMenu<Select, Interaction>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Partial`\<`Select`\> |

#### Returns

[`SelectMenu`](SelectMenu.md)\<`Select`, `Interaction`\>

#### Inherited from

[`BaseComponentBuilder`](BaseComponentBuilder.md).[`constructor`](BaseComponentBuilder.md#constructors)

#### Source

[seyfert/src/builders/Base.ts:6](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Base.ts#L6)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `data` | `public` | `Partial`\<`Select`\> | [`BaseComponentBuilder`](BaseComponentBuilder.md).`data` |

## Methods

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

[seyfert/src/builders/SelectMenu.ts:71](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L71)

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

#### Source

[seyfert/src/builders/SelectMenu.ts:91](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L91)

***

### toJSON()

```ts
toJSON(): Select
```

#### Returns

`Select`

#### Inherited from

[`BaseComponentBuilder`](BaseComponentBuilder.md).[`toJSON`](BaseComponentBuilder.md#tojson)

#### Source

[seyfert/src/builders/Base.ts:8](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Base.ts#L8)
