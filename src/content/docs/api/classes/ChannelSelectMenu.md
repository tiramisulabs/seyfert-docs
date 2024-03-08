---
editUrl: false
next: false
prev: false
title: "ChannelSelectMenu"
---

Represents a Select Menu for selecting channels.

## Example

```ts
const channelSelectMenu = new ChannelSelectMenu();
channelSelectMenu.setCustomId("channel-select");
channelSelectMenu.addDefaultChannels("123456789", "987654321");
channelSelectMenu.setChannelTypes([ChannelType.GuildText, ChannelType.GuildVoice]);
```

## Extends

- [`SelectMenu`](/api/classes/selectmenu/)\<`APIChannelSelectComponent`, [`ChannelSelectMenuInteraction`](/api/classes/channelselectmenuinteraction/)\>

## Constructors

### new ChannelSelectMenu(data)

```ts
new ChannelSelectMenu(data: Partial<APIChannelSelectComponent>): ChannelSelectMenu
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Partial`\<`APIChannelSelectComponent`\> |

#### Returns

[`ChannelSelectMenu`](/api/classes/channelselectmenu/)

#### Overrides

[`SelectMenu`](/api/classes/selectmenu/).[`constructor`](/api/classes/selectmenu/#constructors)

#### Source

[seyfert/src/builders/SelectMenu.ts:214](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/SelectMenu.ts#L214)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `data` | `public` | `Partial`\<`APIChannelSelectComponent`\> | [`SelectMenu`](/api/classes/selectmenu/).`data` |

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

[seyfert/src/builders/SelectMenu.ts:223](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/SelectMenu.ts#L223)

***

### run()

```ts
run(func: ComponentCallback<ChannelSelectMenuInteraction>): this
```

Sets the callback function to be executed when the select menu is interacted with.
 func - The callback function.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `func` | [`ComponentCallback`](/api/type-aliases/componentcallback/)\<[`ChannelSelectMenuInteraction`](/api/classes/channelselectmenuinteraction/)\> |

#### Returns

`this`

The current SelectMenu instance.

#### Inherited from

[`SelectMenu`](/api/classes/selectmenu/).[`run`](/api/classes/selectmenu/#run)

#### Source

[seyfert/src/builders/SelectMenu.ts:117](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/SelectMenu.ts#L117)

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

[seyfert/src/builders/SelectMenu.ts:245](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/SelectMenu.ts#L245)

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

[seyfert/src/builders/SelectMenu.ts:76](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/SelectMenu.ts#L76)

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

[seyfert/src/builders/SelectMenu.ts:235](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/SelectMenu.ts#L235)

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

[seyfert/src/builders/SelectMenu.ts:107](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/SelectMenu.ts#L107)

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

[seyfert/src/builders/SelectMenu.ts:86](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/SelectMenu.ts#L86)

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

[seyfert/src/builders/SelectMenu.ts:96](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/SelectMenu.ts#L96)

***

### toJSON()

```ts
toJSON(): APIChannelSelectComponent
```

#### Returns

`APIChannelSelectComponent`

#### Inherited from

[`SelectMenu`](/api/classes/selectmenu/).[`toJSON`](/api/classes/selectmenu/#tojson)

#### Source

[seyfert/src/builders/Base.ts:8](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/Base.ts#L8)
