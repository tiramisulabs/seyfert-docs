---
editUrl: false
next: false
prev: false
title: "RedisAdapter"
---

## Implements

- [`Adapter`](/api/interfaces/adapter/)

## Constructors

### new RedisAdapter(data)

```ts
new RedisAdapter(data: Object | Object & RedisAdapterOptions): RedisAdapter
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Object` \| `Object` & `RedisAdapterOptions` |

#### Returns

[`RedisAdapter`](/api/classes/redisadapter/)

#### Source

[seyfert/src/cache/adapters/redis.ts:20](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/redis.ts#L20)

## Properties

| Property | Type |
| :------ | :------ |
| `client` | `Redis` |
| `namespace` | `string` |

## Methods

### addToRelationship()

```ts
addToRelationship(to: string, keys: string | string[]): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |
| `keys` | `string` \| `string`[] |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`addToRelationship`](/api/interfaces/adapter/#addtorelationship)

#### Source

[seyfert/src/cache/adapters/redis.ts:175](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/redis.ts#L175)

***

### bulkAddToRelationShip()

```ts
bulkAddToRelationShip(data: Record<string, string[]>): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Record`\<`string`, `string`[]\> |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`bulkAddToRelationShip`](/api/interfaces/adapter/#bulkaddtorelationship)

#### Source

[seyfert/src/cache/adapters/redis.ts:165](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/redis.ts#L165)

***

### contains()

```ts
contains(to: string, keys: string): Promise<boolean>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |
| `keys` | `string` |

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`contains`](/api/interfaces/adapter/#contains)

#### Source

[seyfert/src/cache/adapters/redis.ts:157](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/redis.ts#L157)

***

### count()

```ts
count(to: string): Promise<number>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |

#### Returns

`Promise`\<`number`\>

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`count`](/api/interfaces/adapter/#count)

#### Source

[seyfert/src/cache/adapters/redis.ts:144](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/redis.ts#L144)

***

### get()

#### get(keys)

```ts
get(keys: string[]): Promise<any[]>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `keys` | `string`[] |

##### Returns

`Promise`\<`any`[]\>

##### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`get`](/api/interfaces/adapter/#get)

##### Source

[seyfert/src/cache/adapters/redis.ts:46](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/redis.ts#L46)

#### get(keys)

```ts
get(keys: string): Promise<any>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `keys` | `string` |

##### Returns

`Promise`\<`any`\>

##### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`get`](/api/interfaces/adapter/#get)

##### Source

[seyfert/src/cache/adapters/redis.ts:47](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/redis.ts#L47)

***

### getToRelationship()

```ts
getToRelationship(to: string): Promise<string[]>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |

#### Returns

`Promise`\<`string`[]\>

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`getToRelationship`](/api/interfaces/adapter/#gettorelationship)

#### Source

[seyfert/src/cache/adapters/redis.ts:161](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/redis.ts#L161)

***

### keys()

```ts
keys(to: string): Promise<string[]>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |

#### Returns

`Promise`\<`string`[]\>

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`keys`](/api/interfaces/adapter/#keys)

#### Source

[seyfert/src/cache/adapters/redis.ts:139](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/redis.ts#L139)

***

### patch()

#### patch(updateOnly, id)

```ts
patch(updateOnly: boolean, id: [string, any][]): Promise<void>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `updateOnly` | `boolean` |
| `id` | [`string`, `any`][] |

##### Returns

`Promise`\<`void`\>

##### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`patch`](/api/interfaces/adapter/#patch)

##### Source

[seyfert/src/cache/adapters/redis.ts:83](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/redis.ts#L83)

#### patch(updateOnly, id, data)

```ts
patch(
   updateOnly: boolean, 
   id: string, 
data: any): Promise<void>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `updateOnly` | `boolean` |
| `id` | `string` |
| `data` | `any` |

##### Returns

`Promise`\<`void`\>

##### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`patch`](/api/interfaces/adapter/#patch)

##### Source

[seyfert/src/cache/adapters/redis.ts:84](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/redis.ts#L84)

***

### remove()

```ts
remove(keys: string | string[]): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`remove`](/api/interfaces/adapter/#remove)

#### Source

[seyfert/src/cache/adapters/redis.ts:148](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/redis.ts#L148)

***

### removeRelationship()

```ts
removeRelationship(to: string | string[]): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` \| `string`[] |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`removeRelationship`](/api/interfaces/adapter/#removerelationship)

#### Source

[seyfert/src/cache/adapters/redis.ts:183](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/redis.ts#L183)

***

### removeToRelationship()

```ts
removeToRelationship(to: string, keys: string | string[]): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |
| `keys` | `string` \| `string`[] |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`removeToRelationship`](/api/interfaces/adapter/#removetorelationship)

#### Source

[seyfert/src/cache/adapters/redis.ts:179](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/redis.ts#L179)

***

### scan()

#### scan(query, returnKeys)

```ts
scan(query: string, returnKeys?: false): Promise<any[]>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `query` | `string` |
| `returnKeys`? | `false` |

##### Returns

`Promise`\<`any`[]\>

##### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`scan`](/api/interfaces/adapter/#scan)

##### Source

[seyfert/src/cache/adapters/redis.ts:28](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/redis.ts#L28)

#### scan(query, returnKeys)

```ts
scan(query: string, returnKeys: true): Promise<string[]>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `query` | `string` |
| `returnKeys` | `true` |

##### Returns

`Promise`\<`string`[]\>

##### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`scan`](/api/interfaces/adapter/#scan)

##### Source

[seyfert/src/cache/adapters/redis.ts:29](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/redis.ts#L29)

***

### set()

#### set(id)

```ts
set(id: [string, any][]): Promise<void>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | [`string`, `any`][] |

##### Returns

`Promise`\<`void`\>

##### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`set`](/api/interfaces/adapter/#set)

##### Source

[seyfert/src/cache/adapters/redis.ts:66](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/redis.ts#L66)

#### set(id, data)

```ts
set(id: string, data: any): Promise<void>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |
| `data` | `any` |

##### Returns

`Promise`\<`void`\>

##### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`set`](/api/interfaces/adapter/#set)

##### Source

[seyfert/src/cache/adapters/redis.ts:67](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/redis.ts#L67)

***

### values()

```ts
values(to: string): Promise<any[]>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |

#### Returns

`Promise`\<`any`[]\>

#### Implementation of

[`Adapter`](/api/interfaces/adapter/).[`values`](/api/interfaces/adapter/#values)

#### Source

[seyfert/src/cache/adapters/redis.ts:124](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/adapters/redis.ts#L124)
