---
editUrl: false
next: false
prev: false
title: "ActionRow"
---

Represents an Action Row component in a message.

## Extends

- [`BaseComponentBuilder`](/api/classes/basecomponentbuilder/)\<`APIActionRowComponent`\<`APIActionRowComponentTypes`\>\>

## Type parameters

| Type parameter | Description |
| :------ | :------ |
| `T` extends [`BuilderComponents`](/api/type-aliases/buildercomponents/) | The type of components in the Action Row. |

## Constructors

### new ActionRow(data)

```ts
new ActionRow<T>(data: Partial<APIActionRowComponent<APIActionRowComponentTypes>>): ActionRow<T>
```

Creates a new instance of the ActionRow class.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `Partial`\<`APIActionRowComponent`\<`APIActionRowComponentTypes`\>\> | Optional data to initialize the Action Row. |

#### Returns

[`ActionRow`](/api/classes/actionrow/)\<`T`\>

#### Overrides

[`BaseComponentBuilder`](/api/classes/basecomponentbuilder/).[`constructor`](/api/classes/basecomponentbuilder/#constructors)

#### Example

```ts
const actionRow = new ActionRow<Button>({ components: [buttonRawJSON] });
```

#### Source

[seyfert/src/builders/ActionRow.ts:25](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/ActionRow.ts#L25)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `components` | `public` | [`FixedComponents`](/api/type-aliases/fixedcomponents/)\<`T`\>[] | - |
| `data` | `public` | `Partial`\<`APIActionRowComponent`\<`APIActionRowComponentTypes`\>\> | [`BaseComponentBuilder`](/api/classes/basecomponentbuilder/).`data` |

## Methods

### addComponents()

```ts
addComponents(...component: RestOrArray<FixedComponents<T>>): this
```

Adds one or more components to the Action Row.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`component` | `RestOrArray`\<[`FixedComponents`](/api/type-aliases/fixedcomponents/)\<`T`\>\> | The component(s) to add. |

#### Returns

`this`

The updated Action Row instance.

#### Example

```ts
actionRow.addComponents(buttonComponent);
actionRow.addComponents(buttonComponent1, buttonComponent2);
actionRow.addComponents([buttonComponent1, buttonComponent2]);
```

#### Source

[seyfert/src/builders/ActionRow.ts:41](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/ActionRow.ts#L41)

***

### setComponents()

```ts
setComponents(component: FixedComponents<T>[]): this
```

Sets the components of the Action Row.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `component` | [`FixedComponents`](/api/type-aliases/fixedcomponents/)\<`T`\>[] | The components to set. |

#### Returns

`this`

The updated Action Row instance.

#### Example

```ts
actionRow.setComponents([buttonComponent1, buttonComponent2]);
```

#### Source

[seyfert/src/builders/ActionRow.ts:53](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/ActionRow.ts#L53)

***

### toJSON()

```ts
toJSON(): APIActionRowComponent<APIMessageActionRowComponent>
```

Converts the Action Row to its JSON representation.

#### Returns

`APIActionRowComponent`\<`APIMessageActionRowComponent`\>

The JSON representation of the Action Row.

#### Overrides

[`BaseComponentBuilder`](/api/classes/basecomponentbuilder/).[`toJSON`](/api/classes/basecomponentbuilder/#tojson)

#### Source

[seyfert/src/builders/ActionRow.ts:62](https://github.com/potoland/potocuit/blob/c4fb0c1/src/builders/ActionRow.ts#L62)
