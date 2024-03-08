---
editUrl: false
next: false
prev: false
title: "WorkerManager"
---

## Extends

- `Map`\<`number`, `Worker`\>

## Constructors

### new WorkerManager(options)

```ts
new WorkerManager(options: WorkerManagerOptions): WorkerManager
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `WorkerManagerOptions` |

#### Returns

[`WorkerManager`](/api/classes/workermanager/)

#### Overrides

`Map<number, Worker>.constructor`

#### Source

[seyfert/src/websocket/discord/workermanager.ts:21](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/workermanager.ts#L21)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `[toStringTag]` | `readonly` | `string` | - | `Map.[toStringTag]` |
| `cacheAdapter` | `public` | [`Adapter`](/api/interfaces/adapter/) | - | - |
| `connectQueue` | `public` | `ConnectQueue` | - | - |
| `debugger?` | `public` | [`Logger`](/api/classes/logger/) | - | - |
| `memberUpdateHandler` | `public` | `MemberUpdateHandler` | - | - |
| `options` | `public` | `Required`\<`WorkerManagerOptions`\> | - | - |
| `presenceUpdateHandler` | `public` | `PresenceUpdateHandler` | - | - |
| `promises` | `public` | `Map`\<`string`, (`value`: `any`) => `void`\> | - | - |
| `size` | `readonly` | `number` |  | `Map.size` |
| `[species]` | `readonly` | `MapConstructor` | - | `Map.[species]` |

## Accessors

### concurrency

```ts
get concurrency(): number
```

#### Returns

`number`

#### Source

[seyfert/src/websocket/discord/workermanager.ts:56](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/workermanager.ts#L56)

***

### remaining

```ts
get remaining(): number
```

#### Returns

`number`

#### Source

[seyfert/src/websocket/discord/workermanager.ts:52](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/workermanager.ts#L52)

***

### shardsPerWorker

```ts
get shardsPerWorker(): number
```

#### Returns

`number`

#### Source

[seyfert/src/websocket/discord/workermanager.ts:68](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/workermanager.ts#L68)

***

### totalShards

```ts
get totalShards(): number
```

#### Returns

`number`

#### Source

[seyfert/src/websocket/discord/workermanager.ts:64](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/workermanager.ts#L64)

***

### totalWorkers

```ts
get totalWorkers(): number
```

#### Returns

`number`

#### Source

[seyfert/src/websocket/discord/workermanager.ts:60](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/workermanager.ts#L60)

***

### workers

```ts
get workers(): number
```

#### Returns

`number`

#### Source

[seyfert/src/websocket/discord/workermanager.ts:72](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/workermanager.ts#L72)

## Methods

### `[iterator]`()

```ts
iterator: IterableIterator<[number, Worker]>
```

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`\<[`number`, `Worker`]\>

#### Inherited from

`Map.[iterator]`

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:119

***

### calculateShardId()

```ts
calculateShardId(guildId: string): number
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `guildId` | `string` |

#### Returns

`number`

#### Source

[seyfert/src/websocket/discord/workermanager.ts:92](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/workermanager.ts#L92)

***

### calculateWorkerId()

```ts
calculateWorkerId(shardId: number): number
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `shardId` | `number` |

#### Returns

`number`

#### Source

[seyfert/src/websocket/discord/workermanager.ts:96](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/workermanager.ts#L96)

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

### createWorker()

```ts
createWorker(workerData: WorkerData): Worker
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `workerData` | `WorkerData` |

#### Returns

`Worker`

#### Source

[seyfert/src/websocket/discord/workermanager.ts:150](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/workermanager.ts#L150)

***

### delete()

```ts
delete(key: number): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `number` |

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
entries(): IterableIterator<[number, Worker]>
```

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`\<[`number`, `Worker`]\>

#### Inherited from

`Map.entries`

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:124

***

### forEach()

```ts
forEach(callbackfn:     (value: Worker, key: number, map: Map<number, Worker>) => void, thisArg?: any): void
```

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `Worker`, `key`: `number`, `map`: `Map`\<`number`, `Worker`\>) => `void` |
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
get(key: number): undefined | Worker
```

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `number` |

#### Returns

`undefined` \| `Worker`

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Inherited from

`Map.get`

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.collection.d.ts:33

***

### getShardInfo()

```ts
getShardInfo(shardId: number): Promise<WorkerShardInfo>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `shardId` | `number` |

#### Returns

`Promise`\<`WorkerShardInfo`\>

#### Source

[seyfert/src/websocket/discord/workermanager.ts:296](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/workermanager.ts#L296)

***

### getWorkerInfo()

```ts
getWorkerInfo(workerId: number): Promise<WorkerInfo>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `workerId` | `number` |

#### Returns

`Promise`\<`WorkerInfo`\>

#### Source

[seyfert/src/websocket/discord/workermanager.ts:311](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/workermanager.ts#L311)

***

### handleWorkerMessage()

```ts
handleWorkerMessage(message: WorkerMessage): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | `WorkerMessage` |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/websocket/discord/workermanager.ts:173](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/workermanager.ts#L173)

***

### has()

```ts
has(key: number): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `number` |

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
keys(): IterableIterator<number>
```

Returns an iterable of keys in the map

#### Returns

`IterableIterator`\<`number`\>

#### Inherited from

`Map.keys`

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:129

***

### prepareSpaces()

```ts
prepareSpaces(): number[][]
```

#### Returns

`number`[][]

#### Source

[seyfert/src/websocket/discord/workermanager.ts:104](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/workermanager.ts#L104)

***

### prepareWorkers()

```ts
prepareWorkers(shards: number[][]): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `shards` | `number`[][] |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/websocket/discord/workermanager.ts:127](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/workermanager.ts#L127)

***

### send()

```ts
send(data: GatewaySendPayload, shardId: number): Promise<true>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `GatewaySendPayload` |
| `shardId` | `number` |

#### Returns

`Promise`\<`true`\>

#### Source

[seyfert/src/websocket/discord/workermanager.ts:276](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/workermanager.ts#L276)

***

### set()

```ts
set(key: number, value: Worker): this
```

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `number` |
| `value` | `Worker` |

#### Returns

`this`

#### Inherited from

`Map.set`

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.collection.d.ts:41

***

### setCache()

```ts
setCache(adapter: Adapter): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `adapter` | [`Adapter`](/api/interfaces/adapter/) |

#### Returns

`void`

#### Source

[seyfert/src/websocket/discord/workermanager.ts:48](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/workermanager.ts#L48)

***

### spawn()

```ts
spawn(workerId: number, shardId: number): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `workerId` | `number` |
| `shardId` | `number` |

#### Returns

`void`

#### Source

[seyfert/src/websocket/discord/workermanager.ts:157](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/workermanager.ts#L157)

***

### start()

```ts
start(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/websocket/discord/workermanager.ts:325](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/workermanager.ts#L325)

***

### syncLatency()

```ts
syncLatency(__namedParameters:     Object): Promise<undefined | number>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.shardId`? | `number` |
| `__namedParameters.workerId`? | `number` |

#### Returns

`Promise`\<`undefined` \| `number`\>

#### Source

[seyfert/src/websocket/discord/workermanager.ts:76](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/workermanager.ts#L76)

***

### values()

```ts
values(): IterableIterator<Worker>
```

Returns an iterable of values in the map

#### Returns

`IterableIterator`\<`Worker`\>

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
