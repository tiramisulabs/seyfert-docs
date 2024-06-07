[seyfert](../globals.md) / MemoryAdapter

# Class: MemoryAdapter

## Implements

- [`Adapter`](../interfaces/Adapter.md)

## Constructors

### new MemoryAdapter()

```ts
new MemoryAdapter(): MemoryAdapter
```

#### Returns

[`MemoryAdapter`](MemoryAdapter.md)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `isAsync` | `public` | `boolean` | `false` |
| `relationships` | `readonly` | `Map`\<`string`, `string`[]\> | `...` |
| `storage` | `readonly` | `Map`\<`string`, `string`\> | `...` |

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

[`Adapter`](../interfaces/Adapter.md).[`addToRelationship`](../interfaces/Adapter.md#addtorelationship)

#### Source

[seyfert/src/cache/adapters/default.ts:126](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/default.ts#L126)

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

[`Adapter`](../interfaces/Adapter.md).[`bulkAddToRelationShip`](../interfaces/Adapter.md#bulkaddtorelationship)

#### Source

[seyfert/src/cache/adapters/default.ts:120](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/default.ts#L120)

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

[`Adapter`](../interfaces/Adapter.md).[`contains`](../interfaces/Adapter.md#contains)

#### Source

[seyfert/src/cache/adapters/default.ts:112](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/default.ts#L112)

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

[`Adapter`](../interfaces/Adapter.md).[`count`](../interfaces/Adapter.md#count)

#### Source

[seyfert/src/cache/adapters/default.ts:95](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/default.ts#L95)

***

### flush()

```ts
flush(): void
```

#### Returns

`void`

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`flush`](../interfaces/Adapter.md#flush)

#### Source

[seyfert/src/cache/adapters/default.ts:107](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/default.ts#L107)

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

[`Adapter`](../interfaces/Adapter.md).[`get`](../interfaces/Adapter.md#get)

##### Source

[seyfert/src/cache/adapters/default.ts:23](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/default.ts#L23)

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

[`Adapter`](../interfaces/Adapter.md).[`get`](../interfaces/Adapter.md#get)

##### Source

[seyfert/src/cache/adapters/default.ts:24](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/default.ts#L24)

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

[`Adapter`](../interfaces/Adapter.md).[`getToRelationship`](../interfaces/Adapter.md#gettorelationship)

#### Source

[seyfert/src/cache/adapters/default.ts:116](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/default.ts#L116)

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

[`Adapter`](../interfaces/Adapter.md).[`keys`](../interfaces/Adapter.md#keys)

#### Source

[seyfert/src/cache/adapters/default.ts:91](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/default.ts#L91)

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

[`Adapter`](../interfaces/Adapter.md).[`patch`](../interfaces/Adapter.md#patch)

##### Source

[seyfert/src/cache/adapters/default.ts:50](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/default.ts#L50)

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

[`Adapter`](../interfaces/Adapter.md).[`patch`](../interfaces/Adapter.md#patch)

##### Source

[seyfert/src/cache/adapters/default.ts:51](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/default.ts#L51)

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

[`Adapter`](../interfaces/Adapter.md).[`remove`](../interfaces/Adapter.md#remove)

##### Source

[seyfert/src/cache/adapters/default.ts:99](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/default.ts#L99)

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

[seyfert/src/cache/adapters/default.ts:100](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/default.ts#L100)

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

[`Adapter`](../interfaces/Adapter.md).[`removeRelationship`](../interfaces/Adapter.md#removerelationship)

#### Source

[seyfert/src/cache/adapters/default.ts:152](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/default.ts#L152)

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

[`Adapter`](../interfaces/Adapter.md).[`removeToRelationship`](../interfaces/Adapter.md#removetorelationship)

#### Source

[seyfert/src/cache/adapters/default.ts:140](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/default.ts#L140)

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

[`Adapter`](../interfaces/Adapter.md).[`scan`](../interfaces/Adapter.md#scan)

##### Source

[seyfert/src/cache/adapters/default.ts:9](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/default.ts#L9)

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

[`Adapter`](../interfaces/Adapter.md).[`scan`](../interfaces/Adapter.md#scan)

##### Source

[seyfert/src/cache/adapters/default.ts:10](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/default.ts#L10)

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

[`Adapter`](../interfaces/Adapter.md).[`set`](../interfaces/Adapter.md#set)

##### Source

[seyfert/src/cache/adapters/default.ts:38](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/default.ts#L38)

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

[`Adapter`](../interfaces/Adapter.md).[`set`](../interfaces/Adapter.md#set)

##### Source

[seyfert/src/cache/adapters/default.ts:39](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/default.ts#L39)

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

[`Adapter`](../interfaces/Adapter.md).[`values`](../interfaces/Adapter.md#values)

#### Source

[seyfert/src/cache/adapters/default.ts:76](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/default.ts#L76)
