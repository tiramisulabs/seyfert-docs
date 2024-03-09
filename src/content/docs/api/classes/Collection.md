---
editUrl: false
next: false
prev: false
title: "Collection"
---

Represents a collection that extends the built-in Map class.

## Extends

- `Map`\<`K`, `V`\>

## Type parameters

| Type parameter | Description |
| :------ | :------ |
| `K` | The type of the keys in the collection. |
| `V` | The type of the values in the collection. |

## Constructors

### new Collection(entries)

```ts
new Collection<K, V>(entries?: null | readonly readonly [K, V][]): Collection<K, V>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `entries`? | `null` \| readonly readonly [`K`, `V`][] |

#### Returns

[`Collection`](/api/classes/collection/)\<`K`, `V`\>

#### Inherited from

`Map<K, V>.constructor`

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.collection.d.ts:50

### new Collection(iterable)

```ts
new Collection<K, V>(iterable?: null | Iterable<readonly [K, V]>): Collection<K, V>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `iterable`? | `null` \| `Iterable`\<readonly [`K`, `V`]\> |

#### Returns

[`Collection`](/api/classes/collection/)\<`K`, `V`\>

#### Inherited from

`Map<K, V>.constructor`

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.collection.d.ts:49

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `[toStringTag]` | `readonly` | `string` | - | `Map.[toStringTag]` |
| `size` | `readonly` | `number` |  | `Map.size` |
| `[species]` | `readonly` | `MapConstructor` | - | `Map.[species]` |

## Methods

### `[iterator]`()

```ts
iterator: IterableIterator<[K, V]>
```

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`\<[`K`, `V`]\>

#### Inherited from

`Map.[iterator]`

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:119

***

### clear()

```ts
clear(): void
```

#### Returns

`void`

#### Inherited from

`Map.clear`

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.collection.d.ts:20

***

### delete()

```ts
delete(key: K): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

true if an element in the Map existed and has been removed, or false if the element does not exist.

#### Inherited from

`Map.delete`

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.collection.d.ts:24

***

### entries()

```ts
entries(): IterableIterator<[K, V]>
```

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`\<[`K`, `V`]\>

#### Inherited from

`Map.entries`

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:124

***

### every()

```ts
every(fn:     (value: V, key: K, collection: this) => boolean): boolean
```

Checks if all elements in the collection pass a test implemented by the provided function.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`value`: `V`, `key`: `K`, `collection`: `this`) => `boolean` | The function to test each element of the collection. |

#### Returns

`boolean`

`true` if all elements pass the test, otherwise `false`.

#### Example

```ts
const collection = new Collection<number, number>();
collection.set(1, 1);
collection.set(2, 2);
collection.set(3, 3);
const allGreaterThanZero = collection.every(value => value > 0);
console.log(allGreaterThanZero); // Output: true
```

#### Source

[seyfert/src/collection.ts:120](https://github.com/potoland/potocuit/blob/e332d7a/src/collection.ts#L120)

***

### filter()

```ts
filter(fn:     (value: V, key: K, collection: this) => boolean): V[]
```

Creates a new array with all elements that pass the test implemented by the provided function.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`value`: `V`, `key`: `K`, `collection`: `this`) => `boolean` | The function to test each element of the collection. |

#### Returns

`V`[]

A new array with the elements that pass the test.

#### Example

```ts
const collection = new Collection<number, string>();
collection.set(1, 'one');
collection.set(2, 'two');
collection.set(3, 'three');
const filteredArray = collection.filter((value, key) => key % 2 === 0);
console.log(filteredArray); // Output: ['two']
```

#### Source

[seyfert/src/collection.ts:67](https://github.com/potoland/potocuit/blob/e332d7a/src/collection.ts#L67)

***

### find()

```ts
find(fn:     (value: V, key: K, collection: this) => boolean): undefined | V
```

Returns the value of the first element in the collection that satisfies the provided testing function.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`value`: `V`, `key`: `K`, `collection`: `this`) => `boolean` | The function to test each element of the collection. |

#### Returns

`undefined` \| `V`

The value of the first element that passes the test. `undefined` if no element passes the test.

#### Example

```ts
const collection = new Collection<number, number>();
collection.set(1, 1);
collection.set(2, 2);
collection.set(3, 3);
const firstEvenValue = collection.find(value => value % 2 === 0);
console.log(firstEvenValue); // Output: 2
```

#### Source

[seyfert/src/collection.ts:164](https://github.com/potoland/potocuit/blob/e332d7a/src/collection.ts#L164)

***

### findKey()

```ts
findKey(fn:     (value: V, key: K, collection: this) => boolean): undefined | K
```

Returns the first key in the collection that satisfies the provided testing function.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`value`: `V`, `key`: `K`, `collection`: `this`) => `boolean` | The function to test each element of the collection. |

#### Returns

`undefined` \| `K`

The first key that passes the test. `undefined` if no element passes the test.

#### Example

```ts
const collection = new Collection<number, number>();
collection.set(1, 1);
collection.set(2, 2);
collection.set(3, 3);
const firstEvenKey = collection.findKey(value => value % 2 === 0);
console.log(firstEvenKey); // Output: 2
```

#### Source

[seyfert/src/collection.ts:185](https://github.com/potoland/potocuit/blob/e332d7a/src/collection.ts#L185)

***

### forEach()

```ts
forEach(callbackfn:     (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void
```

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `V`, `key`: `K`, `map`: `Map`\<`K`, `V`\>) => `void` |
| `thisArg`? | `any` |

#### Returns

`void`

#### Inherited from

`Map.forEach`

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.collection.d.ts:28

***

### get()

```ts
get(key: K): undefined | V
```

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`undefined` \| `V`

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Inherited from

`Map.get`

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.collection.d.ts:33

***

### has()

```ts
has(key: K): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

boolean indicating whether an element with the specified key exists or not.

#### Inherited from

`Map.has`

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.collection.d.ts:37

***

### keys()

```ts
keys(): IterableIterator<K>
```

Returns an iterable of keys in the map

#### Returns

`IterableIterator`\<`K`\>

#### Inherited from

`Map.keys`

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:129

***

### map()

```ts
map<T>(fn:     (value: V, key: K, collection: this) => T): T[]
```

Creates a new array with the results of calling a provided function on every element in the collection.

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`value`: `V`, `key`: `K`, `collection`: `this`) => `T` | The function that produces an element of the new array. |

#### Returns

`T`[]

A new array with the results of calling the provided function on every element in the collection.

#### Example

```ts
const collection = new Collection<number, string>();
collection.set(1, 'one');
collection.set(2, 'two');
collection.set(3, 'three');
const mappedArray = collection.map((value, key) => `${key}: ${value}`);
console.log(mappedArray); // Output: ['1: one', '2: two', '3: three']
```

#### Source

[seyfert/src/collection.ts:44](https://github.com/potoland/potocuit/blob/e332d7a/src/collection.ts#L44)

***

### reduce()

```ts
reduce<T>(fn:     (accumulator: T, value: V, key: K, collection: this) => T, initialValue?: T): T
```

Apply a function against an accumulator and each element in the collection (from left to right) to reduce it to a single value.

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`accumulator`: `T`, `value`: `V`, `key`: `K`, `collection`: `this`) => `T` | The function to execute on each element in the collection. |
| `initialValue`? | `T` | The initial value of the accumulator. |

#### Returns

`T`

The value that results from the reduction.

#### Example

```ts
const collection = new Collection<number, number>();
collection.set(1, 1);
collection.set(2, 2);
collection.set(3, 3);
const sum = collection.reduce((acc, value) => acc + value, 0);
console.log(sum); // Output: 6
```

#### Source

[seyfert/src/collection.ts:90](https://github.com/potoland/potocuit/blob/e332d7a/src/collection.ts#L90)

***

### set()

```ts
set(key: K, value: V): this
```

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

`this`

#### Inherited from

`Map.set`

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.collection.d.ts:41

***

### some()

```ts
some(fn:     (value: V, key: K, collection: this) => boolean): boolean
```

Checks if at least one element in the collection passes a test implemented by the provided function.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`value`: `V`, `key`: `K`, `collection`: `this`) => `boolean` | The function to test each element of the collection. |

#### Returns

`boolean`

`true` if at least one element passes the test, otherwise `false`.

#### Example

```ts
const collection = new Collection<number, number>();
collection.set(1, 1);
collection.set(2, 2);
collection.set(3, 3);
const hasEvenValue = collection.some(value => value % 2 === 0);
console.log(hasEvenValue); // Output: true
```

#### Source

[seyfert/src/collection.ts:142](https://github.com/potoland/potocuit/blob/e332d7a/src/collection.ts#L142)

***

### sweep()

```ts
sweep(fn:     (value: V, key: K, collection: this) => unknown): number
```

Removes elements from the collection based on a filter function.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`value`: `V`, `key`: `K`, `collection`: `this`) => `unknown` | The filter function that determines which elements to remove. |

#### Returns

`number`

The number of elements removed from the collection.

#### Example

```ts
const collection = new Collection<number, string>();
collection.set(1, 'one');
collection.set(2, 'two');
collection.set(3, 'three');
const removedCount = collection.sweep((value, key) => key % 2 === 0);
console.log(removedCount); // Output: 1
console.log(collection.size); // Output: 2
```

#### Source

[seyfert/src/collection.ts:23](https://github.com/potoland/potocuit/blob/e332d7a/src/collection.ts#L23)

***

### values()

```ts
values(): IterableIterator<V>
```

Returns an iterable of values in the map

#### Returns

`IterableIterator`\<`V`\>

#### Inherited from

`Map.values`

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:134

***

### groupBy()

```ts
static groupBy<K, T>(items: Iterable<T>, keySelector:     (item: T, index: number) => K): Map<K, T[]>
```

Groups members of an iterable according to the return value of the passed callback.

#### Type parameters

| Type parameter |
| :------ |
| `K` |
| `T` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `items` | `Iterable`\<`T`\> | An iterable. |
| `keySelector` | (`item`: `T`, `index`: `number`) => `K` | A callback which will be invoked for each item in items. |

#### Returns

`Map`\<`K`, `T`[]\>

#### Inherited from

`Map.groupBy`

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.esnext.collection.d.ts:25
