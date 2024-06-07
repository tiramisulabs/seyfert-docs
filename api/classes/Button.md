[seyfert](../globals.md) / Button

# Class: Button\<Type\>

Represents a button component.

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `Type` *extends* `boolean` | `boolean` | The type of the button component. |

## Constructors

### new Button()

```ts
new Button<Type>(data: Partial<When<Type, APIButtonComponentWithCustomId, APIButtonComponentWithURL>>): Button<Type>
```

Creates a new Button instance.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `Partial`\<`When`\<`Type`, `APIButtonComponentWithCustomId`, `APIButtonComponentWithURL`\>\> | The initial data for the button. |

#### Returns

[`Button`](Button.md)\<`Type`\>

#### Source

[seyfert/src/builders/Button.ts:23](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Button.ts#L23)

## Properties

| Property | Modifier | Type | Default value | Description |
| :------ | :------ | :------ | :------ | :------ |
| `data` | `public` | `Partial`\<`When`\<`Type`, `APIButtonComponentWithCustomId`, `APIButtonComponentWithURL`\>\> | `{}` | The initial data for the button. |

## Methods

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

[`Button`](Button.md)\<`Type`\>

The modified Button instance.

#### Source

[seyfert/src/builders/Button.ts:32](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Button.ts#L32)

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

[`Button`](Button.md)\<`Type`\>

The modified Button instance.

#### Source

[seyfert/src/builders/Button.ts:76](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Button.ts#L76)

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

[`Button`](Button.md)\<`Type`\>

The modified Button instance.

#### Source

[seyfert/src/builders/Button.ts:64](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Button.ts#L64)

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

[`Button`](Button.md)\<`Type`\>

The modified Button instance.

#### Source

[seyfert/src/builders/Button.ts:54](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Button.ts#L54)

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

[`Button`](Button.md)\<`Type`\>

#### Source

[seyfert/src/builders/Button.ts:81](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Button.ts#L81)

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

[`Button`](Button.md)\<`Type`\>

The modified Button instance.

#### Source

[seyfert/src/builders/Button.ts:43](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Button.ts#L43)

***

### toJSON()

```ts
toJSON(): When<Type, APIButtonComponentWithCustomId, APIButtonComponentWithURL>
```

Converts the Button instance to its JSON representation.

#### Returns

`When`\<`Type`, `APIButtonComponentWithCustomId`, `APIButtonComponentWithURL`\>

The JSON representation of the Button instance.

#### Source

[seyfert/src/builders/Button.ts:90](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Button.ts#L90)
