[seyfert](../globals.md) / BaseComponentBuilder

# Class: `abstract` BaseComponentBuilder\<TYPE\>

## Extended by

- [`ActionRow`](ActionRow.md)
- [`TextInput`](TextInput.md)
- [`SelectMenu`](SelectMenu.md)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `TYPE` *extends* `Partial`\<`APIBaseComponent`\<`ComponentType`\>\> | `APIBaseComponent`\<`ComponentType`\> |

## Constructors

### new BaseComponentBuilder()

```ts
new BaseComponentBuilder<TYPE>(data: Partial<TYPE>): BaseComponentBuilder<TYPE>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Partial`\<`TYPE`\> |

#### Returns

[`BaseComponentBuilder`](BaseComponentBuilder.md)\<`TYPE`\>

#### Source

[seyfert/src/builders/Base.ts:6](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Base.ts#L6)

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

[seyfert/src/builders/Base.ts:8](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Base.ts#L8)
