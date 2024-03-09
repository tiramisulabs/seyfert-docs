---
editUrl: false
next: false
prev: false
title: "Adapter"
---

## Methods

### addToRelationship()

```ts
addToRelationship(to: string, keys: string | string[]): RPV<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |
| `keys` | `string` \| `string`[] |

#### Returns

[`RPV`](/api/type-aliases/rpv/)\<`void`\>

#### Source

[seyfert/src/cache/adapters/types.ts:32](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/types.ts#L32)

***

### bulkAddToRelationShip()

```ts
bulkAddToRelationShip(data: Record<string, string[]>): RPV<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Record`\<`string`, `string`[]\> |

#### Returns

[`RPV`](/api/type-aliases/rpv/)\<`void`\>

#### Source

[seyfert/src/cache/adapters/types.ts:30](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/types.ts#L30)

***

### contains()

```ts
contains(to: string, keys: string): RPV<boolean>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |
| `keys` | `string` |

#### Returns

[`RPV`](/api/type-aliases/rpv/)\<`boolean`\>

#### Source

[seyfert/src/cache/adapters/types.ts:26](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/types.ts#L26)

***

### count()

```ts
count(to: string): RPV<number>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |

#### Returns

[`RPV`](/api/type-aliases/rpv/)\<`number`\>

#### Source

[seyfert/src/cache/adapters/types.ts:22](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/types.ts#L22)

***

### get()

#### get(keys)

```ts
get(keys: string[]): RPV<any[]>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `keys` | `string`[] |

##### Returns

[`RPV`](/api/type-aliases/rpv/)\<`any`[]\>

##### Source

[seyfert/src/cache/adapters/types.ts:6](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/types.ts#L6)

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

##### Source

[seyfert/src/cache/adapters/types.ts:7](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/types.ts#L7)

#### get(keys)

```ts
get(keys: string | string[]): any
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |

##### Returns

`any`

##### Source

[seyfert/src/cache/adapters/types.ts:8](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/types.ts#L8)

***

### getToRelationship()

```ts
getToRelationship(to: string): RPV<string[]>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |

#### Returns

[`RPV`](/api/type-aliases/rpv/)\<`string`[]\>

#### Source

[seyfert/src/cache/adapters/types.ts:28](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/types.ts#L28)

***

### keys()

```ts
keys(to: string): RPV<string[]>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |

#### Returns

[`RPV`](/api/type-aliases/rpv/)\<`string`[]\>

#### Source

[seyfert/src/cache/adapters/types.ts:20](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/types.ts#L20)

***

### patch()

#### patch(updateOnly, keyValue)

```ts
patch(updateOnly: boolean, keyValue: [string, any][]): RPV<void>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `updateOnly` | `boolean` |
| `keyValue` | [`string`, `any`][] |

##### Returns

[`RPV`](/api/type-aliases/rpv/)\<`void`\>

##### Source

[seyfert/src/cache/adapters/types.ts:14](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/types.ts#L14)

#### patch(updateOnly, id, data)

```ts
patch(
   updateOnly: boolean, 
   id: string, 
data: any): RPV<void>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `updateOnly` | `boolean` |
| `id` | `string` |
| `data` | `any` |

##### Returns

[`RPV`](/api/type-aliases/rpv/)\<`void`\>

##### Source

[seyfert/src/cache/adapters/types.ts:15](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/types.ts#L15)

#### patch(updateOnly, id, data)

```ts
patch(
   updateOnly: boolean, 
   id: string | [string, any][], 
data?: any): RPV<void>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `updateOnly` | `boolean` |
| `id` | `string` \| [`string`, `any`][] |
| `data`? | `any` |

##### Returns

[`RPV`](/api/type-aliases/rpv/)\<`void`\>

##### Source

[seyfert/src/cache/adapters/types.ts:16](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/types.ts#L16)

***

### remove()

```ts
remove(keys: string | string[]): RPV<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |

#### Returns

[`RPV`](/api/type-aliases/rpv/)\<`void`\>

#### Source

[seyfert/src/cache/adapters/types.ts:24](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/types.ts#L24)

***

### removeRelationship()

```ts
removeRelationship(to: string | string[]): RPV<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` \| `string`[] |

#### Returns

[`RPV`](/api/type-aliases/rpv/)\<`void`\>

#### Source

[seyfert/src/cache/adapters/types.ts:36](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/types.ts#L36)

***

### removeToRelationship()

```ts
removeToRelationship(to: string, keys: string | string[]): RPV<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |
| `keys` | `string` \| `string`[] |

#### Returns

[`RPV`](/api/type-aliases/rpv/)\<`void`\>

#### Source

[seyfert/src/cache/adapters/types.ts:34](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/types.ts#L34)

***

### scan()

#### scan(query, keys)

```ts
scan(query: string, keys?: false): RPV<any[]>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `query` | `string` |
| `keys`? | `false` |

##### Returns

[`RPV`](/api/type-aliases/rpv/)\<`any`[]\>

##### Source

[seyfert/src/cache/adapters/types.ts:2](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/types.ts#L2)

#### scan(query, keys)

```ts
scan(query: string, keys: true): RPV<string[]>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `query` | `string` |
| `keys` | `true` |

##### Returns

[`RPV`](/api/type-aliases/rpv/)\<`string`[]\>

##### Source

[seyfert/src/cache/adapters/types.ts:3](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/types.ts#L3)

#### scan(query, keys)

```ts
scan(query: string, keys?: boolean): RPV<any[]>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `query` | `string` |
| `keys`? | `boolean` |

##### Returns

[`RPV`](/api/type-aliases/rpv/)\<`any`[]\>

##### Source

[seyfert/src/cache/adapters/types.ts:4](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/types.ts#L4)

***

### set()

#### set(keyValue)

```ts
set(keyValue: [string, any][]): RPV<void>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `keyValue` | [`string`, `any`][] |

##### Returns

[`RPV`](/api/type-aliases/rpv/)\<`void`\>

##### Source

[seyfert/src/cache/adapters/types.ts:10](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/types.ts#L10)

#### set(id, data)

```ts
set(id: string, data: any): RPV<void>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |
| `data` | `any` |

##### Returns

[`RPV`](/api/type-aliases/rpv/)\<`void`\>

##### Source

[seyfert/src/cache/adapters/types.ts:11](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/types.ts#L11)

#### set(id, data)

```ts
set(id: string | [string, any][], data?: any): RPV<void>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` \| [`string`, `any`][] |
| `data`? | `any` |

##### Returns

[`RPV`](/api/type-aliases/rpv/)\<`void`\>

##### Source

[seyfert/src/cache/adapters/types.ts:12](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/types.ts#L12)

***

### values()

```ts
values(to: string): RPV<any[]>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |

#### Returns

[`RPV`](/api/type-aliases/rpv/)\<`any`[]\>

#### Source

[seyfert/src/cache/adapters/types.ts:18](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/adapters/types.ts#L18)
