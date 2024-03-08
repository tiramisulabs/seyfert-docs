---
editUrl: false
next: false
prev: false
title: "MemoryAdapter"
---

## Implements

- [`Adapter`](/api/interfaces/adapter/)

## Constructors

### new MemoryAdapter()

```ts
new MemoryAdapter(): MemoryAdapter
```

#### Returns

[`MemoryAdapter`](/api/classes/memoryadapter/)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `relationships` | `readonly` | `Map`\<`string`, `string`[]\> |
| `storage` | `readonly` | `Map`\<`string`, `string`\> |

## Methods

### addToRelationship()

```ts
addToRelationship(to: string, keys: string | string[]): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |
| `keys` | `string` \| `string`[] |

#### Returns

`void`

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`addToRelationship`](/api/interfaces/adapter/#addtorelationship)

#### Source

[seyfert/src/cache/adapters/default.ts:113](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/default.ts#L113)

***

### bulkAddToRelationShip()

```ts
bulkAddToRelationShip(data: Record<string, string[]>): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Record`\<`string`, `string`[]\> |

#### Returns

`void`

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`bulkAddToRelationShip`](/api/interfaces/adapter/#bulkaddtorelationship)

#### Source

[seyfert/src/cache/adapters/default.ts:107](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/default.ts#L107)

***

### contains()

```ts
contains(to: string, keys: string): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |
| `keys` | `string` |

#### Returns

`boolean`

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`contains`](/api/interfaces/adapter/#contains)

#### Source

[seyfert/src/cache/adapters/default.ts:99](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/default.ts#L99)

***

### count()

```ts
count(to: string): number
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |

#### Returns

`number`

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`count`](/api/interfaces/adapter/#count)

#### Source

[seyfert/src/cache/adapters/default.ts:87](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/default.ts#L87)

***

### get()

#### get(keys)

```ts
get(keys: string): any
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `keys` | `string` |

##### Returns

`any`

##### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`get`](/api/interfaces/adapter/#get)

##### Source

[seyfert/src/cache/adapters/default.ts:21](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/default.ts#L21)

#### get(keys)

```ts
get(keys: string[]): any[]
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `keys` | `string`[] |

##### Returns

`any`[]

##### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`get`](/api/interfaces/adapter/#get)

##### Source

[seyfert/src/cache/adapters/default.ts:22](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/default.ts#L22)

***

### getToRelationship()

```ts
getToRelationship(to: string): string[]
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |

#### Returns

`string`[]

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`getToRelationship`](/api/interfaces/adapter/#gettorelationship)

#### Source

[seyfert/src/cache/adapters/default.ts:103](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/default.ts#L103)

***

### keys()

```ts
keys(to: string): string[]
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |

#### Returns

`string`[]

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`keys`](/api/interfaces/adapter/#keys)

#### Source

[seyfert/src/cache/adapters/default.ts:83](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/default.ts#L83)

***

### patch()

#### patch(updateOnly, keys, data)

```ts
patch(
   updateOnly: boolean, 
   keys: string, 
   data: any): void
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `updateOnly` | `boolean` |
| `keys` | `string` |
| `data` | `any` |

##### Returns

`void`

##### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`patch`](/api/interfaces/adapter/#patch)

##### Source

[seyfert/src/cache/adapters/default.ts:48](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/default.ts#L48)

#### patch(updateOnly, keys)

```ts
patch(updateOnly: boolean, keys: [string, any][]): void
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `updateOnly` | `boolean` |
| `keys` | [`string`, `any`][] |

##### Returns

`void`

##### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`patch`](/api/interfaces/adapter/#patch)

##### Source

[seyfert/src/cache/adapters/default.ts:49](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/default.ts#L49)

***

### remove()

#### remove(keys)

```ts
remove(keys: string): void
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `keys` | `string` |

##### Returns

`void`

##### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`remove`](/api/interfaces/adapter/#remove)

##### Source

[seyfert/src/cache/adapters/default.ts:91](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/default.ts#L91)

#### remove(keys)

```ts
remove(keys: string[]): void
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `keys` | `string`[] |

##### Returns

`void`

##### Implementation of

`Adapter.remove`

##### Source

[seyfert/src/cache/adapters/default.ts:92](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/default.ts#L92)

***

### removeRelationship()

```ts
removeRelationship(to: string | string[]): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` \| `string`[] |

#### Returns

`void`

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`removeRelationship`](/api/interfaces/adapter/#removerelationship)

#### Source

[seyfert/src/cache/adapters/default.ts:139](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/default.ts#L139)

***

### removeToRelationship()

```ts
removeToRelationship(to: string, keys: string | string[]): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |
| `keys` | `string` \| `string`[] |

#### Returns

`void`

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`removeToRelationship`](/api/interfaces/adapter/#removetorelationship)

#### Source

[seyfert/src/cache/adapters/default.ts:127](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/default.ts#L127)

***

### scan()

#### scan(query, keys)

```ts
scan(query: string, keys?: false): any[]
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `query` | `string` |
| `keys`? | `false` |

##### Returns

`any`[]

##### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`scan`](/api/interfaces/adapter/#scan)

##### Source

[seyfert/src/cache/adapters/default.ts:7](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/default.ts#L7)

#### scan(query, keys)

```ts
scan(query: string, keys: true): string[]
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `query` | `string` |
| `keys` | `true` |

##### Returns

`string`[]

##### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`scan`](/api/interfaces/adapter/#scan)

##### Source

[seyfert/src/cache/adapters/default.ts:8](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/default.ts#L8)

***

### set()

#### set(keys, data)

```ts
set(keys: string, data: any): void
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `keys` | `string` |
| `data` | `any` |

##### Returns

`void`

##### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`set`](/api/interfaces/adapter/#set)

##### Source

[seyfert/src/cache/adapters/default.ts:36](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/default.ts#L36)

#### set(keys)

```ts
set(keys: [string, any][]): void
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `keys` | [`string`, `any`][] |

##### Returns

`void`

##### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`set`](/api/interfaces/adapter/#set)

##### Source

[seyfert/src/cache/adapters/default.ts:37](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/default.ts#L37)

***

### values()

```ts
values(to: string): any[]
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |

#### Returns

`any`[]

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`values`](/api/interfaces/adapter/#values)

#### Source

[seyfert/src/cache/adapters/default.ts:68](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/default.ts#L68)
