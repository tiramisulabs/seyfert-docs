[seyfert](../globals.md) / LimitedMemoryAdapter

# Class: LimitedMemoryAdapter

## Implements

- [`Adapter`](../interfaces/Adapter.md)

## Constructors

### new LimitedMemoryAdapter()

```ts
new LimitedMemoryAdapter(options: LimitedMemoryAdapterOptions): LimitedMemoryAdapter
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`LimitedMemoryAdapterOptions`](../interfaces/LimitedMemoryAdapterOptions.md) |

#### Returns

[`LimitedMemoryAdapter`](LimitedMemoryAdapter.md)

#### Source

[seyfert/src/cache/adapters/limited.ts:34](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/limited.ts#L34)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `isAsync` | `public` | `boolean` | `false` |
| `options` | `public` | `MakeRequired`\<[`LimitedMemoryAdapterOptions`](../interfaces/LimitedMemoryAdapterOptions.md), `"default"`\> | `undefined` |
| `relationships` | `readonly` | `Map`\<`string`, `Map`\<`string`, `string`[]\>\> | `...` |
| `storage` | `readonly` | `Map`\<`string`, [`LimitedCollection`](LimitedCollection.md)\<`string`, `string`\>\> | `...` |

## Methods

### \_\_set()

```ts
private __set(key: string, data: any): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `string` |
| `data` | `any` |

#### Returns

`void`

#### Source

[seyfert/src/cache/adapters/limited.ts:77](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/limited.ts#L77)

***

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

[seyfert/src/cache/adapters/limited.ts:216](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/limited.ts#L216)

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

[seyfert/src/cache/adapters/limited.ts:210](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/limited.ts#L210)

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

[seyfert/src/cache/adapters/limited.ts:195](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/limited.ts#L195)

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

[seyfert/src/cache/adapters/limited.ts:178](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/limited.ts#L178)

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

[seyfert/src/cache/adapters/limited.ts:190](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/limited.ts#L190)

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

[seyfert/src/cache/adapters/limited.ts:61](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/limited.ts#L61)

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

[seyfert/src/cache/adapters/limited.ts:62](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/limited.ts#L62)

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

[seyfert/src/cache/adapters/limited.ts:199](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/limited.ts#L199)

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

[seyfert/src/cache/adapters/limited.ts:174](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/limited.ts#L174)

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

[seyfert/src/cache/adapters/limited.ts:139](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/limited.ts#L139)

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

[seyfert/src/cache/adapters/limited.ts:140](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/limited.ts#L140)

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

[seyfert/src/cache/adapters/limited.ts:182](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/limited.ts#L182)

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

[seyfert/src/cache/adapters/limited.ts:183](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/limited.ts#L183)

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

[seyfert/src/cache/adapters/limited.ts:243](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/limited.ts#L243)

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

[seyfert/src/cache/adapters/limited.ts:231](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/limited.ts#L231)

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

[seyfert/src/cache/adapters/limited.ts:46](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/limited.ts#L46)

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

[seyfert/src/cache/adapters/limited.ts:47](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/limited.ts#L47)

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

[seyfert/src/cache/adapters/limited.ts:127](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/limited.ts#L127)

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

[seyfert/src/cache/adapters/limited.ts:128](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/limited.ts#L128)

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

[seyfert/src/cache/adapters/limited.ts:159](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/limited.ts#L159)
