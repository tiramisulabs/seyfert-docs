---
editUrl: false
next: false
prev: false
title: "LimitedCollection"
---

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

### new LimitedCollection(options)

```ts
new LimitedCollection<K, V>(options: Partial<LimitedCollectionOptions>): LimitedCollection<K, V>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `Partial`\<`LimitedCollectionOptions`\> |

#### Returns

[`LimitedCollection`](/api/classes/limitedcollection/)\<`K`, `V`\>

#### Source

[seyfert/src/collection.ts:228](https://github.com/potoland/potocuit/blob/e332d7a/src/collection.ts#L228)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `default` | `readonly` | `LimitedCollectionOptions` |

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

[seyfert/src/collection.ts:347](https://github.com/potoland/potocuit/blob/e332d7a/src/collection.ts#L347)

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

[seyfert/src/collection.ts:373](https://github.com/potoland/potocuit/blob/e332d7a/src/collection.ts#L373)

## Methods

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

[seyfert/src/collection.ts:330](https://github.com/potoland/potocuit/blob/e332d7a/src/collection.ts#L330)

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

[seyfert/src/collection.ts:294](https://github.com/potoland/potocuit/blob/e332d7a/src/collection.ts#L294)

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

[seyfert/src/collection.ts:316](https://github.com/potoland/potocuit/blob/e332d7a/src/collection.ts#L316)

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

[seyfert/src/collection.ts:280](https://github.com/potoland/potocuit/blob/e332d7a/src/collection.ts#L280)

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

[seyfert/src/collection.ts:247](https://github.com/potoland/potocuit/blob/e332d7a/src/collection.ts#L247)
