---
editUrl: false
next: false
prev: false
title: "Button"
---

Represents a button component.

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `Type` extends `boolean` | `boolean` | The type of the button component. |

## Constructors

### new Button(data)

```ts
new Button<Type>(data: Partial<When<Type, APIButtonComponentWithCustomId, APIButtonComponentWithURL>>): Button<Type>
```

Creates a new Button instance.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `Partial`\<`When`\<`Type`, `APIButtonComponentWithCustomId`, `APIButtonComponentWithURL`\>\> | The initial data for the button. |

#### Returns

[`Button`](/api/classes/button/)\<`Type`\>

#### Source

[seyfert/src/builders/Button.ts:30](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/Button.ts#L30)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `data` | `public` | `Partial`\<`When`\<`Type`, `APIButtonComponentWithCustomId`, `APIButtonComponentWithURL`\>\> | The initial data for the button. |

## Methods

### run()

```ts
run(func: ComponentCallback<ButtonInteraction>): Button<Type>
```

Sets the callback function to be executed when the button is interacted with.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `func` | [`ComponentCallback`](/api/type-aliases/componentcallback/)\<[`ButtonInteraction`](/api/classes/buttoninteraction/)\> | The callback function to set. |

#### Returns

[`Button`](/api/classes/button/)\<`Type`\>

The modified Button instance.

#### Source

[seyfert/src/builders/Button.ts:98](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/Button.ts#L98)

***

### setCustomId()

```ts
setCustomId(id: string): Button<Type>
```

Sets the custom ID for the button.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The custom ID to set. |

#### Returns

[`Button`](/api/classes/button/)\<`Type`\>

The modified Button instance.

#### Source

[seyfert/src/builders/Button.ts:39](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/Button.ts#L39)

***

### setDisabled()

```ts
setDisabled(disabled: boolean): Button<Type>
```

Sets the disabled state of the button.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `disabled` | `boolean` | `true` | Whether the button should be disabled or not. |

#### Returns

[`Button`](/api/classes/button/)\<`Type`\>

The modified Button instance.

#### Source

[seyfert/src/builders/Button.ts:83](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/Button.ts#L83)

***

### setEmoji()

```ts
setEmoji(emoji: EmojiResolvable): Button<Type>
```

Sets the emoji for the button.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `emoji` | `EmojiResolvable` | The emoji to set. |

#### Returns

[`Button`](/api/classes/button/)\<`Type`\>

The modified Button instance.

#### Source

[seyfert/src/builders/Button.ts:71](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/Button.ts#L71)

***

### setLabel()

```ts
setLabel(label: string): Button<Type>
```

Sets the label for the button.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` | The label to set. |

#### Returns

[`Button`](/api/classes/button/)\<`Type`\>

The modified Button instance.

#### Source

[seyfert/src/builders/Button.ts:61](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/Button.ts#L61)

***

### setStyle()

```ts
setStyle(style: ButtonStyle): Button<Type>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `style` | `ButtonStyle` |

#### Returns

[`Button`](/api/classes/button/)\<`Type`\>

#### Source

[seyfert/src/builders/Button.ts:88](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/Button.ts#L88)

***

### setURL()

```ts
setURL(url: string): Button<Type>
```

Sets the URL for the button.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL to set. |

#### Returns

[`Button`](/api/classes/button/)\<`Type`\>

The modified Button instance.

#### Source

[seyfert/src/builders/Button.ts:50](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/Button.ts#L50)

***

### toJSON()

```ts
toJSON(): APIButtonComponent
```

Converts the Button instance to its JSON representation.

#### Returns

`APIButtonComponent`

The JSON representation of the Button instance.

#### Source

[seyfert/src/builders/Button.ts:107](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/Button.ts#L107)
