[seyfert](../globals.md) / LimitedCollection

# Class: LimitedCollection\<K, V\>

Creates a new array with the results of calling a provided function on every element in the collection.

## Param

The function that produces an element of the new array.

## Param

The value to use as `this` when executing the map function.

## Example

```ts
const collection = new Collection<number, string>();
collection.set(1, 'one');
collection.set(2, 'two');
collection.set(3, 'three');
const mappedArray = collection.map((value, key) => `${key}: ${value}`);
console.log(mappedArray); // Output: ['1: one', '2: two', '3: three']
```

## Type parameters

| Type parameter |
| :------ |
| `K` |
| `V` |

## Constructors

### new LimitedCollection()

```ts
new LimitedCollection<K, V>(options: Partial<LimitedCollectionOptions<K, V>>): LimitedCollection<K, V>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `Partial`\<`LimitedCollectionOptions`\<`K`, `V`\>\> |

#### Returns

[`LimitedCollection`](LimitedCollection.md)\<`K`, `V`\>

#### Source

[seyfert/src/collection.ts:229](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/collection.ts#L229)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `data` | `private` | `Map`\<`K`, `LimitedCollectionData`\<`V`\>\> | `...` |
| `options` | `private` | `LimitedCollectionOptions`\<`K`, `V`\> | `undefined` |
| `timeout` | `private` | `undefined` \| `Timeout` | `undefined` |
| `default` | `readonly` | `LimitedCollectionOptions`\<`any`, `any`\> | `...` |

## Accessors

### closer

```ts
get closer(): undefined | LimitedCollectionData<V>
```

Returns the element in the limited collection that is closest to expiration.

#### Example

```ts
const collection = new LimitedCollection<number, string>();
collection.set(1, 'one', 1000);
collection.set(2, 'two', 2000);
collection.set(3, 'three', 500);
const closestElement = collection.closer;
console.log(closestElement); // Output: { value: 'three', expire: 500, expireOn: [current timestamp + 500] }
```

#### Returns

`undefined` \| `LimitedCollectionData`\<`V`\>

The element that is closest to expiration, or `undefined` if the collection is empty.

#### Source

[seyfert/src/collection.ts:352](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/collection.ts#L352)

***

### size

```ts
get size(): number
```

Returns the number of elements in the limited collection.

#### Example

```ts
const collection = new LimitedCollection<number, string>();
collection.set(1, 'one');
collection.set(2, 'two');
console.log(collection.size); // Output: 2
```

#### Returns

`number`

The number of elements in the collection.

#### Source

[seyfert/src/collection.ts:378](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/collection.ts#L378)

## Methods

### clear()

```ts
clear(): void
```

#### Returns

`void`

#### Source

[seyfert/src/collection.ts:418](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/collection.ts#L418)

***

### clearExpired()

```ts
private clearExpired(): void
```

#### Returns

`void`

#### Source

[seyfert/src/collection.ts:423](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/collection.ts#L423)

***

### delete()

```ts
delete(key: K): boolean
```

Removes an element from the limited collection.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | The key of the element to remove. |

#### Returns

`boolean`

`true` if the element was removed, `false` otherwise.

#### Example

```ts
const collection = new LimitedCollection<number, string>();
collection.set(1, 'one');
console.log(collection.delete(1)); // Output: true
console.log(collection.delete(2)); // Output: false
```

#### Source

[seyfert/src/collection.ts:332](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/collection.ts#L332)

***

### entries()

```ts
entries(): IterableIterator<[K, LimitedCollectionData<V>]>
```

#### Returns

`IterableIterator`\<[`K`, `LimitedCollectionData`\<`V`\>]\>

#### Source

[seyfert/src/collection.ts:414](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/collection.ts#L414)

***

### get()

```ts
get(key: K): undefined | V
```

Returns the value of an element in the limited collection.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | The key of the element. |

#### Returns

`undefined` \| `V`

The value of the element, or `undefined` if the element does not exist.

#### Example

```ts
const collection = new LimitedCollection<number, string>();
collection.set(1, 'one');
const value = collection.get(1);
console.log(value); // Output: 'one'
```

#### Source

[seyfert/src/collection.ts:296](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/collection.ts#L296)

***

### has()

```ts
has(key: K): boolean
```

Checks if an element exists in the limited collection.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | The key of the element. |

#### Returns

`boolean`

`true` if the element exists, `false` otherwise.

#### Example

```ts
const collection = new LimitedCollection<number, string>();
collection.set(1, 'one');
console.log(collection.has(1)); // Output: true
console.log(collection.has(2)); // Output: false
```

#### Source

[seyfert/src/collection.ts:318](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/collection.ts#L318)

***

### keys()

```ts
keys(): IterableIterator<K>
```

#### Returns

`IterableIterator`\<`K`\>

#### Source

[seyfert/src/collection.ts:406](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/collection.ts#L406)

***

### raw()

```ts
raw(key: K): undefined | LimitedCollectionData<V>
```

Returns the raw data of an element in the limited collection.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | The key of the element. |

#### Returns

`undefined` \| `LimitedCollectionData`\<`V`\>

The raw data of the element, or `undefined` if the element does not exist.

#### Example

```ts
const collection = new LimitedCollection<number, string>();
collection.set(1, 'one');
const rawData = collection.raw(1);
console.log(rawData); // Output: { value: 'one', expire: -1, expireOn: -1 }
```

#### Source

[seyfert/src/collection.ts:282](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/collection.ts#L282)

***

### resetTimeout()

```ts
private resetTimeout(): void
```

#### Returns

`void`

#### Source

[seyfert/src/collection.ts:382](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/collection.ts#L382)

***

### set()

```ts
set(
   key: K, 
   value: V, 
   customExpire: number): void
```

Adds an element to the limited collection.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | The key of the element. |
| `value` | `V` | The value of the element. |
| `customExpire` | `number` | The custom expiration time for the element. |

#### Returns

`void`

#### Example

```ts
const collection = new LimitedCollection<number, string>({ limit: 3 });
collection.set(1, 'one');
collection.set(2, 'two');
collection.set(3, 'three');
console.log(collection.size); // Output: 3
collection.set(4, 'four');
console.log(collection.size); // Output: 3
console.log(collection.get(1)); // Output: undefined
```

#### Source

[seyfert/src/collection.ts:248](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/collection.ts#L248)

***

### startTimeout()

```ts
private startTimeout(): void
```

#### Returns

`void`

#### Source

[seyfert/src/collection.ts:392](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/collection.ts#L392)

***

### stopTimeout()

```ts
private stopTimeout(): void
```

#### Returns

`void`

#### Source

[seyfert/src/collection.ts:387](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/collection.ts#L387)

***

### values()

```ts
values(): IterableIterator<LimitedCollectionData<V>>
```

#### Returns

`IterableIterator`\<`LimitedCollectionData`\<`V`\>\>

#### Source

[seyfert/src/collection.ts:410](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/collection.ts#L410)
