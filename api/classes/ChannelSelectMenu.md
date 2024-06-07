[seyfert](../globals.md) / ChannelSelectMenu

# Class: ChannelSelectMenu

Represents a Select Menu for selecting channels.

## Example

```ts
const channelSelectMenu = new ChannelSelectMenu();
channelSelectMenu.setCustomId("channel-select");
channelSelectMenu.addDefaultChannels("123456789", "987654321");
channelSelectMenu.setChannelTypes([ChannelType.GuildText, ChannelType.GuildVoice]);
```

## Extends

- [`SelectMenu`](SelectMenu.md)\<`APIChannelSelectComponent`, [`ChannelSelectMenuInteraction`](ChannelSelectMenuInteraction.md)\>

## Constructors

### new ChannelSelectMenu()

```ts
new ChannelSelectMenu(data: Partial<APIChannelSelectComponent>): ChannelSelectMenu
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Partial`\<`APIChannelSelectComponent`\> |

#### Returns

[`ChannelSelectMenu`](ChannelSelectMenu.md)

#### Overrides

[`SelectMenu`](SelectMenu.md).[`constructor`](SelectMenu.md#constructors)

#### Source

[seyfert/src/builders/SelectMenu.ts:229](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L229)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `data` | `public` | `Partial`\<`APIChannelSelectComponent`\> | [`SelectMenu`](SelectMenu.md).`data` |

## Methods

### addDefaultChannels()

```ts
addDefaultChannels(...channels: RestOrArray<string>): this
```

Adds default selected channels to the select menu.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`channels` | `RestOrArray`\<`string`\> | Channel IDs to be added as default. |

#### Returns

`this`

The current ChannelSelectMenu instance.

#### Source

[seyfert/src/builders/SelectMenu.ts:238](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L238)

***

### setChannelTypes()

```ts
setChannelTypes(types: ChannelType[]): this
```

Sets the types of channels that can be selected in the menu.
 types - The types of channels.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `types` | `ChannelType`[] |

#### Returns

`this`

The current ChannelSelectMenu instance.

#### Source

[seyfert/src/builders/SelectMenu.ts:260](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L260)

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

### setDefaultChannels()

```ts
setDefaultChannels(...channels: RestOrArray<string>): this
```

Sets the default selected channels for the select menu.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`channels` | `RestOrArray`\<`string`\> | Channel IDs to be set as default. |

#### Returns

`this`

The current ChannelSelectMenu instance.

#### Source

[seyfert/src/builders/SelectMenu.ts:250](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/SelectMenu.ts#L250)

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
toJSON(): APIChannelSelectComponent
```

#### Returns

`APIChannelSelectComponent`

#### Inherited from

[`SelectMenu`](SelectMenu.md).[`toJSON`](SelectMenu.md#tojson)

#### Source

[seyfert/src/builders/Base.ts:8](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Base.ts#L8)
