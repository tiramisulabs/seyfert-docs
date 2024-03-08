---
editUrl: false
next: false
prev: false
title: "ComponentsListener"
---

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`BuilderComponents`](/api/type-aliases/buildercomponents/) |

## Constructors

### new ComponentsListener(options)

```ts
new ComponentsListener<T>(options: ListenerOptions): ComponentsListener<T>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`ListenerOptions`](/api/interfaces/listeneroptions/) |

#### Returns

[`ComponentsListener`](/api/classes/componentslistener/)\<`T`\>

#### Source

[seyfert/src/components/listener.ts:9](https://github.com/potoland/potocuit/blob/c4fb0c1/src/components/listener.ts#L9)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `components` | `public` | [`ActionRow`](/api/classes/actionrow/)\<`T`\>[] |
| `idle?` | `public` | `Timeout` |
| `options` | `readonly` | [`ListenerOptions`](/api/interfaces/listeneroptions/) |
| `timeout?` | `public` | `Timeout` |

## Methods

### addRows()

```ts
addRows(...row: RestOrArray<ActionRow<T>>): ComponentsListener<T>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`row` | `RestOrArray`\<[`ActionRow`](/api/classes/actionrow/)\<`T`\>\> |

#### Returns

[`ComponentsListener`](/api/classes/componentslistener/)\<`T`\>

#### Source

[seyfert/src/components/listener.ts:11](https://github.com/potoland/potocuit/blob/c4fb0c1/src/components/listener.ts#L11)
