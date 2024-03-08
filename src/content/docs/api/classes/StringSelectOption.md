---
editUrl: false
next: false
prev: false
title: "StringSelectOption"
---

Represents an individual option for a string select menu.

## Example

```ts
const option = new StringSelectOption().setLabel("Option 1").setValue("option_1");
```

## Constructors

### new StringSelectOption(data)

```ts
new StringSelectOption(data: Partial<APISelectMenuOption>): StringSelectOption
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Partial`\<`APISelectMenuOption`\> |

#### Returns

[`StringSelectOption`](/api/classes/stringselectoption/)

#### Source

[seyfert/src/builders/SelectMenu.ts:307](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/SelectMenu.ts#L307)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `data` | `public` | `Partial`\<`APISelectMenuOption`\> |

## Methods

### setDefault()

```ts
setDefault(Default: boolean): this
```

Sets whether the option is the default.
 [Default=true] - Indicates whether the option is the default.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `Default` | `boolean` | `true` |

#### Returns

`this`

The current StringSelectOption instance.

#### Source

[seyfert/src/builders/SelectMenu.ts:344](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/SelectMenu.ts#L344)

***

### setDescription()

```ts
setDescription(description: string): this
```

Sets the description for the option.
 description - The description for the option.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `description` | `string` |

#### Returns

`this`

The current StringSelectOption instance.

#### Source

[seyfert/src/builders/SelectMenu.ts:334](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/SelectMenu.ts#L334)

***

### setEmoji()

```ts
setEmoji(emoji: EmojiResolvable): StringSelectOption
```

Sets the emoji for the option.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `emoji` | `EmojiResolvable` | The emoji to set. |

#### Returns

[`StringSelectOption`](/api/classes/stringselectoption/)

The modified option instance.

#### Source

[seyfert/src/builders/SelectMenu.ts:354](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/SelectMenu.ts#L354)

***

### setLabel()

```ts
setLabel(label: string): this
```

Sets the label for the option.
 label - The label for the option.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

`this`

The current StringSelectOption instance.

#### Source

[seyfert/src/builders/SelectMenu.ts:314](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/SelectMenu.ts#L314)

***

### setValue()

```ts
setValue(value: string): this
```

Sets the value for the option.
 value - The value for the option.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`this`

The current StringSelectOption instance.

#### Source

[seyfert/src/builders/SelectMenu.ts:324](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/SelectMenu.ts#L324)

***

### toJSON()

```ts
toJSON(): APISelectMenuOption
```

Converts the option to JSON format.

#### Returns

`APISelectMenuOption`

The option data in JSON format.

#### Source

[seyfert/src/builders/SelectMenu.ts:365](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/SelectMenu.ts#L365)
