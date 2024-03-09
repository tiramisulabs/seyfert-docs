---
editUrl: false
next: false
prev: false
title: "WorkerAdapter"
---

## Implements

- [`Adapter`](/api/interfaces/adapter/)

## Constructors

### new WorkerAdapter(parent)

```ts
new WorkerAdapter(parent: MessagePort): WorkerAdapter
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `parent` | `MessagePort` |

#### Returns

[`WorkerAdapter`](/api/classes/workeradapter/)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:10](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/workeradapter.ts#L10)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `parent` | `readonly` | `MessagePort` |
| `promises` | `public` | `Map`\<`string`, `Object`\> |

## Methods

### addToRelationship()

```ts
addToRelationship(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`addToRelationship`](/api/interfaces/adapter/#addtorelationship)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:86](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/workeradapter.ts#L86)

***

### bulkAddToRelationShip()

```ts
bulkAddToRelationShip(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`bulkAddToRelationShip`](/api/interfaces/adapter/#bulkaddtorelationship)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:82](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/workeradapter.ts#L82)

***

### contains()

```ts
contains(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`contains`](/api/interfaces/adapter/#contains)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:74](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/workeradapter.ts#L74)

***

### count()

```ts
count(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`count`](/api/interfaces/adapter/#count)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:66](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/workeradapter.ts#L66)

***

### get()

```ts
get(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`get`](/api/interfaces/adapter/#get)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:46](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/workeradapter.ts#L46)

***

### getToRelationship()

```ts
getToRelationship(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`getToRelationship`](/api/interfaces/adapter/#gettorelationship)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:78](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/workeradapter.ts#L78)

***

### keys()

```ts
keys(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`keys`](/api/interfaces/adapter/#keys)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:62](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/workeradapter.ts#L62)

***

### patch()

```ts
patch(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`patch`](/api/interfaces/adapter/#patch)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:54](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/workeradapter.ts#L54)

***

### remove()

```ts
remove(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`remove`](/api/interfaces/adapter/#remove)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:70](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/workeradapter.ts#L70)

***

### removeRelationship()

```ts
removeRelationship(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`removeRelationship`](/api/interfaces/adapter/#removerelationship)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:94](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/workeradapter.ts#L94)

***

### removeToRelationship()

```ts
removeToRelationship(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`removeToRelationship`](/api/interfaces/adapter/#removetorelationship)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:90](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/workeradapter.ts#L90)

***

### scan()

```ts
scan(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`scan`](/api/interfaces/adapter/#scan)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:42](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/workeradapter.ts#L42)

***

### set()

```ts
set(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`set`](/api/interfaces/adapter/#set)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:50](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/workeradapter.ts#L50)

***

### values()

```ts
values(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`values`](/api/interfaces/adapter/#values)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:58](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/workeradapter.ts#L58)
