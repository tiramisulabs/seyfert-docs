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

[seyfert/src/builders/SelectMenu.ts:293](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/SelectMenu.ts#L293)

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

[seyfert/src/builders/SelectMenu.ts:330](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/SelectMenu.ts#L330)

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

[seyfert/src/builders/SelectMenu.ts:320](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/SelectMenu.ts#L320)

***

### setEmoji()

```ts
setEmoji(emoji: APIMessageComponentEmoji): this
```

Sets the emoji for the option.
 emoji - The emoji for the option.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `emoji` | `APIMessageComponentEmoji` |

#### Returns

`this`

The current StringSelectOption instance.

#### Source

[seyfert/src/builders/SelectMenu.ts:340](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/SelectMenu.ts#L340)

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

[seyfert/src/builders/SelectMenu.ts:300](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/SelectMenu.ts#L300)

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

[seyfert/src/builders/SelectMenu.ts:310](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/SelectMenu.ts#L310)

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

[seyfert/src/builders/SelectMenu.ts:349](https://github.com/potoland/potocuit/blob/e332d7a/src/builders/SelectMenu.ts#L349)
