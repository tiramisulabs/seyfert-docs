[seyfert](../globals.md) / WorkerManager

# Class: WorkerManager

## Extends

- `Map`\<`number`, `ClusterWorker` \| `Worker` & \{
  `ready`: `boolean`;
 \}\>

## Constructors

### new WorkerManager()

```ts
new WorkerManager(options: MakePartial<WorkerManagerOptions, "token" | "handlePayload" | "intents" | "info">): WorkerManager
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `MakePartial`\<`WorkerManagerOptions`, `"token"` \| `"handlePayload"` \| `"intents"` \| `"info"`\> |

#### Returns

[`WorkerManager`](WorkerManager.md)

#### Overrides

Map\<
	number,
	(ClusterWorker \| import('node:worker\_threads').Worker) & \{ ready?: boolean \}
\>.constructor

#### Source

[seyfert/src/websocket/discord/workermanager.ts:28](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L28)

## Properties

| Property | Modifier | Type | Default value | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `[toStringTag]` | `readonly` | `string` | `undefined` | - | `Map.[toStringTag]` |
| `cacheAdapter` | `public` | [`Adapter`](../interfaces/Adapter.md) | `undefined` | - | - |
| `connectQueue` | `public` | `ConnectQueue` | `undefined` | - | - |
| `debugger?` | `public` | [`Logger`](Logger.md) | `undefined` | - | - |
| `memberUpdateHandler` | `public` | `MemberUpdateHandler` | `...` | - | - |
| `options` | `public` | `Required`\<`WorkerManagerOptions`\> | `undefined` | - | - |
| `presenceUpdateHandler` | `public` | `PresenceUpdateHandler` | `...` | - | - |
| `promises` | `public` | `Map`\<`string`, \{ `resolve`: (`value`: `any`) => `void`; `timeout`: `Timeout`; \}\> | `...` | - | - |
| `rest` | `public` | [`ApiHandler`](ApiHandler.md) | `undefined` | - | - |
| `size` | `readonly` | `number` | `undefined` |  | `Map.size` |
| `[species]` | `readonly` | `MapConstructor` | `undefined` | - | `Map.[species]` |

## Accessors

### concurrency

```ts
get concurrency(): number
```

#### Returns

`number`

#### Source

[seyfert/src/websocket/discord/workermanager.ts:46](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L46)

***

### remaining

```ts
get remaining(): number
```

#### Returns

`number`

#### Source

[seyfert/src/websocket/discord/workermanager.ts:42](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L42)

***

### shardEnd

```ts
get shardEnd(): number
```

#### Returns

`number`

#### Source

[seyfert/src/websocket/discord/workermanager.ts:62](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L62)

***

### shardStart

```ts
get shardStart(): number
```

#### Returns

`number`

#### Source

[seyfert/src/websocket/discord/workermanager.ts:58](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L58)

***

### shardsPerWorker

```ts
get shardsPerWorker(): number
```

#### Returns

`number`

#### Source

[seyfert/src/websocket/discord/workermanager.ts:66](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L66)

***

### totalShards

```ts
get totalShards(): number
```

#### Returns

`number`

#### Source

[seyfert/src/websocket/discord/workermanager.ts:54](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L54)

***

### totalWorkers

```ts
get totalWorkers(): number
```

#### Returns

`number`

#### Source

[seyfert/src/websocket/discord/workermanager.ts:50](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L50)

***

### workers

```ts
get workers(): number
```

#### Returns

`number`

#### Source

[seyfert/src/websocket/discord/workermanager.ts:70](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L70)

## Methods

### `[iterator]`()

```ts
iterator: IterableIterator<[number, Worker | Worker & {
  ready: boolean;
}]>
```

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`\<[`number`, `Worker` \| `Worker` & \{
  `ready`: `boolean`;
 \}]\>

#### Inherited from

`Map.[iterator]`

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:119

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

[seyfert/src/websocket/discord/workermanager.ts:90](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L90)

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

[seyfert/src/websocket/discord/workermanager.ts:94](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L94)

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

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.collection.d.ts:20

***

### createWorker()

```ts
createWorker(workerData: WorkerData): Worker | Worker
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `workerData` | `WorkerData` |

#### Returns

`Worker` \| `Worker`

#### Source

[seyfert/src/websocket/discord/workermanager.ts:166](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L166)

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

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.collection.d.ts:24

***

### entries()

```ts
entries(): IterableIterator<[number, Worker | Worker & {
  ready: boolean;
}]>
```

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`\<[`number`, `Worker` \| `Worker` & \{
  `ready`: `boolean`;
 \}]\>

#### Inherited from

`Map.entries`

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:124

***

### forEach()

```ts
forEach(callbackfn: (value: Worker | Worker & {
  ready: boolean;
 }, key: number, map: Map<number, Worker | Worker & {
  ready: boolean;
 }>) => void, thisArg?: any): void
```

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `Worker` \| `Worker` & \{ `ready`: `boolean`; \}, `key`: `number`, `map`: `Map`\<`number`, `Worker` \| `Worker` & \{ `ready`: `boolean`; \}\>) => `void` |
| `thisArg`? | `any` |

#### Returns

`void`

#### Inherited from

`Map.forEach`

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.collection.d.ts:28

***

### generateNonce()

```ts
private generateNonce(large: boolean): string
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `large` | `boolean` | `true` |

#### Returns

`string`

#### Source

[seyfert/src/websocket/discord/workermanager.ts:337](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L337)

***

### generateSendPromise()

```ts
private generateSendPromise<T>(nonce: string, message: string): Promise<T>
```

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `nonce` | `string` | `undefined` |
| `message` | `string` | `'Timeout'` |

#### Returns

`Promise`\<`T`\>

#### Source

[seyfert/src/websocket/discord/workermanager.ts:344](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L344)

***

### get()

```ts
get(key: number): undefined | (Worker | Worker) & { ready?: boolean | undefined; }
```

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `number` |

#### Returns

`undefined` \| (Worker \| Worker) & \{ ready?: boolean \| undefined; \}

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Inherited from

`Map.get`

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.collection.d.ts:33

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

[seyfert/src/websocket/discord/workermanager.ts:374](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L374)

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

[seyfert/src/websocket/discord/workermanager.ts:389](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L389)

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

[seyfert/src/websocket/discord/workermanager.ts:209](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L209)

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

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.collection.d.ts:37

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

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:129

***

### postMessage()

```ts
postMessage(id: number, body: any): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `number` |
| `body` | `any` |

#### Returns

`void`

#### Source

[seyfert/src/websocket/discord/workermanager.ts:121](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L121)

***

### prepareSpaces()

```ts
prepareSpaces(): number[][]
```

#### Returns

`number`[][]

#### Source

[seyfert/src/websocket/discord/workermanager.ts:102](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L102)

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

[seyfert/src/websocket/discord/workermanager.ts:134](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L134)

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

[seyfert/src/websocket/discord/workermanager.ts:354](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L354)

***

### set()

```ts
set(key: number, value: Worker | Worker & {
  ready: boolean;
 }): this
```

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `number` |
| `value` | `Worker` \| `Worker` & \{ `ready`: `boolean`; \} |

#### Returns

`this`

#### Inherited from

`Map.set`

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.collection.d.ts:41

***

### setCache()

```ts
setCache(adapter: Adapter): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `adapter` | [`Adapter`](../interfaces/Adapter.md) |

#### Returns

`void`

#### Source

[seyfert/src/websocket/discord/workermanager.ts:34](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L34)

***

### setRest()

```ts
setRest(rest: ApiHandler): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rest` | [`ApiHandler`](ApiHandler.md) |

#### Returns

`void`

#### Source

[seyfert/src/websocket/discord/workermanager.ts:38](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L38)

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

[seyfert/src/websocket/discord/workermanager.ts:194](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L194)

***

### start()

```ts
start(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/websocket/discord/workermanager.ts:403](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L403)

***

### syncLatency()

```ts
syncLatency(__namedParameters: {
  shardId: number;
  workerId: number;
}): Promise<undefined | number>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | `object` |
| `__namedParameters.shardId`? | `number` |
| `__namedParameters.workerId`? | `number` |

#### Returns

`Promise`\<`undefined` \| `number`\>

#### Source

[seyfert/src/websocket/discord/workermanager.ts:74](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/workermanager.ts#L74)

***

### values()

```ts
values(): IterableIterator<Worker | Worker & {
  ready: boolean;
}>
```

Returns an iterable of values in the map

#### Returns

`IterableIterator`\<`Worker` \| `Worker` & \{
  `ready`: `boolean`;
 \}\>

#### Inherited from

`Map.values`

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:134

***

### groupBy()

```ts
static groupBy<K, T>(items: Iterable<T>, keySelector: (item: T, index: number) => K): Map<K, T[]>
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

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.esnext.collection.d.ts:25
