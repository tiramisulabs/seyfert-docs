---
editUrl: false
next: false
prev: false
title: "BaseComponentBuilder"
---

## Extended by

- [`ActionRow`](/api/classes/actionrow/)
- [`TextInput`](/api/classes/textinput/)
- [`SelectMenu`](/api/classes/selectmenu/)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `TYPE` extends `Partial`\<`APIBaseComponent`\<`ComponentType`\>\> | `APIBaseComponent`\<`ComponentType`\> |

## Constructors

### new BaseComponentBuilder(data)

```ts
new BaseComponentBuilder<TYPE>(data: Partial<TYPE>): BaseComponentBuilder<TYPE>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Partial`\<`TYPE`\> |

#### Returns

[`BaseComponentBuilder`](/api/classes/basecomponentbuilder/)\<`TYPE`\>

#### Source

[seyfert/src/builders/Base.ts:6](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Base.ts#L6)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `data` | `public` | `Partial`\<`TYPE`\> |

## Methods

### toJSON()

```ts
toJSON(): TYPE
```

#### Returns

`TYPE`

#### Source

[seyfert/src/builders/Base.ts:8](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Base.ts#L8)
