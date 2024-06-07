[seyfert](../globals.md) / MentionableSelectMenu

# Class: MentionableSelectMenu

Represents a Select Menu for selecting mentionable entities.

## Example

```ts
const mentionableSelectMenu = new MentionableSelectMenu();
mentionableSelectMenu.setCustomId("mentionable-select");
```

## Extends

- [`SelectMenu`](SelectMenu.md)\<`APIMentionableSelectComponent`, [`MentionableSelectMenuInteraction`](MentionableSelectMenuInteraction.md)\>

## Constructors

### new MentionableSelectMenu()

```ts
new MentionableSelectMenu(data: Partial<APIMentionableSelectComponent>): MentionableSelectMenu
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Partial`\<`APIMentionableSelectComponent`\> |

#### Returns

[`MentionableSelectMenu`](MentionableSelectMenu.md)

#### Overrides

[`SelectMenu`](SelectMenu.md).[`constructor`](SelectMenu.md#constructors)

#### Source

[seyfert/src/builders/SelectMenu.ts:187](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L187)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `data` | `public` | `Partial`\<`APIMentionableSelectComponent`\> | [`SelectMenu`](SelectMenu.md).`data` |

## Methods

### addDefaultMentionables()

```ts
addDefaultMentionables(...mentionables: RestOrArray<MentionableDefaultElement>): MentionableSelectMenu
```

Adds default selected roles or users for the select menu.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`mentionables` | `RestOrArray`\<[`MentionableDefaultElement`](../type-aliases/MentionableDefaultElement.md)\> | Role/User id and type to be added as default. |

#### Returns

[`MentionableSelectMenu`](MentionableSelectMenu.md)

The current MentionableSelectMenu instance.

#### Source

[seyfert/src/builders/SelectMenu.ts:209](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L209)

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

### setDefaultMentionables()

```ts
setDefaultMentionables(...mentionables: RestOrArray<MentionableDefaultElement>): MentionableSelectMenu
```

Sets the default selected roles or users for the select menu.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`mentionables` | `RestOrArray`\<[`MentionableDefaultElement`](../type-aliases/MentionableDefaultElement.md)\> | Role/User id and type to be set as default. |

#### Returns

[`MentionableSelectMenu`](MentionableSelectMenu.md)

The current MentionableSelectMenu instance.

#### Source

[seyfert/src/builders/SelectMenu.ts:196](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L196)

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
toJSON(): APIMentionableSelectComponent
```

#### Returns

`APIMentionableSelectComponent`

#### Inherited from

[`SelectMenu`](SelectMenu.md).[`toJSON`](SelectMenu.md#tojson)

#### Source

[seyfert/src/builders/Base.ts:8](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Base.ts#L8)
