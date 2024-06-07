[seyfert](../globals.md) / StringSelectOption

# Class: StringSelectOption

Represents an individual option for a string select menu.

## Example

```ts
const option = new StringSelectOption().setLabel("Option 1").setValue("option_1");
```

## Constructors

### new StringSelectOption()

```ts
new StringSelectOption(data: Partial<APISelectMenuOption>): StringSelectOption
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Partial`\<`APISelectMenuOption`\> |

#### Returns

[`StringSelectOption`](StringSelectOption.md)

#### Source

[seyfert/src/builders/SelectMenu.ts:322](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L322)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `data` | `public` | `Partial`\<`APISelectMenuOption`\> | `{}` |

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

[seyfert/src/builders/SelectMenu.ts:359](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L359)

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

[seyfert/src/builders/SelectMenu.ts:349](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L349)

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

[`StringSelectOption`](StringSelectOption.md)

The modified option instance.

#### Source

[seyfert/src/builders/SelectMenu.ts:369](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L369)

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

[seyfert/src/builders/SelectMenu.ts:329](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L329)

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

[seyfert/src/builders/SelectMenu.ts:339](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L339)

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

[seyfert/src/builders/SelectMenu.ts:380](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L380)
