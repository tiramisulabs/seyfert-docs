---
editUrl: false
next: false
prev: false
title: "Watcher"
---

Represents a watcher class that extends the ShardManager.

## Extends

- [`ShardManager`](/api/classes/shardmanager/)

## Constructors

### new Watcher(options)

```ts
new Watcher(options: WatcherOptions): Watcher
```

Initializes a new instance of the Watcher class.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | `WatcherOptions` | The options for the watcher. |

#### Returns

[`Watcher`](/api/classes/watcher/)

#### Overrides

[`ShardManager`](/api/classes/shardmanager/).[`constructor`](/api/classes/shardmanager/#constructors)

#### Source

[seyfert/src/common/bot/watcher.ts:27](https://github.com/potoland/potocuit/blob/c4fb0c1/src/common/bot/watcher.ts#L27)

## Properties

| Property | Modifier | Type | Description | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `[toStringTag]` | `readonly` | `string` | - | [`ShardManager`](/api/classes/shardmanager/).`[toStringTag]` | [`ShardManager`](/api/classes/shardmanager/).`[toStringTag]` |
| `connectQueue` | `public` | `ConnectQueue` | - | [`ShardManager`](/api/classes/shardmanager/).`connectQueue` | [`ShardManager`](/api/classes/shardmanager/).`connectQueue` |
| `debugger?` | `public` | [`Logger`](/api/classes/logger/) | - | [`ShardManager`](/api/classes/shardmanager/).`debugger` | [`ShardManager`](/api/classes/shardmanager/).`debugger` |
| `logger` | `public` | [`Logger`](/api/classes/logger/) | - | - | - |
| `options` | `public` | `MakeRequired`\<`WatcherOptions`, `"token"` \| `"handlePayload"` \| `"info"` \| `"intents"`\> | - | [`ShardManager`](/api/classes/shardmanager/).`options` | [`ShardManager`](/api/classes/shardmanager/).`options` |
| `rest?` | `public` | [`ApiHandler`](/api/classes/apihandler/) | - | - | - |
| `size` | `readonly` | `number` |  | [`ShardManager`](/api/classes/shardmanager/).`size` | [`ShardManager`](/api/classes/shardmanager/).`size` |
| `worker?` | `public` | `Worker` | - | - | - |
| `[species]` | `readonly` | `MapConstructor` | - | [`ShardManager`](/api/classes/shardmanager/).`[species]` | [`ShardManager`](/api/classes/shardmanager/).`[species]` |

## Accessors

### concurrency

```ts
get concurrency(): number
```

#### Returns

`number`

#### Source

[seyfert/src/websocket/discord/sharder.ts:43](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/sharder.ts#L43)

***

### latency

```ts
get latency(): number
```

#### Returns

`number`

#### Source

[seyfert/src/websocket/discord/sharder.ts:47](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/sharder.ts#L47)

***

### remaining

```ts
get remaining(): number
```

#### Returns

`number`

#### Source

[seyfert/src/websocket/discord/sharder.ts:39](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/sharder.ts#L39)

## Methods

### `[iterator]`()

```ts
iterator: IterableIterator<[number, Shard]>
```

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`\<[`number`, `Shard`]\>

#### Inherited from

[`ShardManager`](/api/classes/shardmanager/).[`[iterator]`](/api/classes/shardmanager/#[iterator])

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:119

***

### calculeShardId()

```ts
calculeShardId(guildId: string): number
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `guildId` | `string` |

#### Returns

`number`

#### Inherited from

[`ShardManager`](/api/classes/shardmanager/).[`calculeShardId`](/api/classes/shardmanager/#calculeshardid)

#### Source

[seyfert/src/websocket/discord/sharder.ts:55](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/sharder.ts#L55)

***

### clear()

```ts
clear(): void
```

#### Returns

`void`

#### Inherited from

[`ShardManager`](/api/classes/shardmanager/).[`clear`](/api/classes/shardmanager/#clear)

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.collection.d.ts:20

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

[`ShardManager`](/api/classes/shardmanager/).[`delete`](/api/classes/shardmanager/#delete)

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.collection.d.ts:24

***

### disconnect()

```ts
disconnect(shardId: number): undefined | Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `shardId` | `number` |

#### Returns

`undefined` \| `Promise`\<`void`\>

#### Inherited from

[`ShardManager`](/api/classes/shardmanager/).[`disconnect`](/api/classes/shardmanager/#disconnect)

#### Source

[seyfert/src/websocket/discord/sharder.ts:123](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/sharder.ts#L123)

***

### disconnectAll()

```ts
disconnectAll(): Promise<unknown>
```

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

[`ShardManager`](/api/classes/shardmanager/).[`disconnectAll`](/api/classes/shardmanager/#disconnectall)

#### Source

[seyfert/src/websocket/discord/sharder.ts:128](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/sharder.ts#L128)

***

### entries()

```ts
entries(): IterableIterator<[number, Shard]>
```

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`\<[`number`, `Shard`]\>

#### Inherited from

[`ShardManager`](/api/classes/shardmanager/).[`entries`](/api/classes/shardmanager/#entries)

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:124

***

### forEach()

```ts
forEach(callbackfn:     (value: Shard, key: number, map: Map<number, Shard>) => void, thisArg?: any): void
```

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `Shard`, `key`: `number`, `map`: `Map`\<`number`, `Shard`\>) => `void` |
| `thisArg`? | `any` |

#### Returns

`void`

#### Inherited from

[`ShardManager`](/api/classes/shardmanager/).[`forEach`](/api/classes/shardmanager/#foreach)

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.collection.d.ts:28

***

### forceIdentify()

```ts
forceIdentify(shardId: number): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `shardId` | `number` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ShardManager`](/api/classes/shardmanager/).[`forceIdentify`](/api/classes/shardmanager/#forceidentify)

#### Source

[seyfert/src/websocket/discord/sharder.ts:118](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/sharder.ts#L118)

***

### get()

```ts
get(key: number): undefined | Shard
```

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `number` |

#### Returns

`undefined` \| `Shard`

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Inherited from

[`ShardManager`](/api/classes/shardmanager/).[`get`](/api/classes/shardmanager/#get)

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.collection.d.ts:33

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

[`ShardManager`](/api/classes/shardmanager/).[`has`](/api/classes/shardmanager/#has)

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.collection.d.ts:37

***

### joinVoice()

```ts
joinVoice(
   guild_id: string, 
   channel_id: string, 
   options:     Object): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `guild_id` | `string` |
| `channel_id` | `string` |
| `options` | `Object` |
| `options.selfDeaf` | `boolean` |
| `options.selfMute` | `boolean` |

#### Returns

`void`

#### Inherited from

[`ShardManager`](/api/classes/shardmanager/).[`joinVoice`](/api/classes/shardmanager/#joinvoice)

#### Source

[seyfert/src/websocket/discord/sharder.ts:153](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/sharder.ts#L153)

***

### keys()

```ts
keys(): IterableIterator<number>
```

Returns an iterable of keys in the map

#### Returns

`IterableIterator`\<`number`\>

#### Inherited from

[`ShardManager`](/api/classes/shardmanager/).[`keys`](/api/classes/shardmanager/#keys)

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:129

***

### leaveVoice()

```ts
leaveVoice(guild_id: string): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `guild_id` | `string` |

#### Returns

`void`

#### Inherited from

[`ShardManager`](/api/classes/shardmanager/).[`leaveVoice`](/api/classes/shardmanager/#leavevoice)

#### Source

[seyfert/src/websocket/discord/sharder.ts:171](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/sharder.ts#L171)

***

### resetWorker()

```ts
resetWorker(): void
```

Resets the worker instance.

#### Returns

`void`

#### Source

[seyfert/src/common/bot/watcher.ts:49](https://github.com/potoland/potocuit/blob/c4fb0c1/src/common/bot/watcher.ts#L49)

***

### send()

```ts
send<T>(shardId: number, payload: T): void
```

#### Type parameters

| Type parameter |
| :------ |
| `T` extends `GatewaySendPayload` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `shardId` | `number` |
| `payload` | `T` |

#### Returns

`void`

#### Inherited from

[`ShardManager`](/api/classes/shardmanager/).[`send`](/api/classes/shardmanager/#send)

#### Source

[seyfert/src/websocket/discord/sharder.ts:186](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/sharder.ts#L186)

***

### set()

```ts
set(key: number, value: Shard): this
```

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `number` |
| `value` | `Shard` |

#### Returns

`this`

#### Inherited from

[`ShardManager`](/api/classes/shardmanager/).[`set`](/api/classes/shardmanager/#set)

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.es2015.collection.d.ts:41

***

### setPresence()

```ts
setPresence(payload: GatewayPresenceUpdateData): undefined | Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `payload` | `GatewayPresenceUpdateData` |

#### Returns

`undefined` \| `Promise`\<`void`\>

#### Inherited from

[`ShardManager`](/api/classes/shardmanager/).[`setPresence`](/api/classes/shardmanager/#setpresence)

#### Source

[seyfert/src/websocket/discord/sharder.ts:144](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/sharder.ts#L144)

***

### setShardPresence()

```ts
setShardPresence(shardId: number, payload: GatewayPresenceUpdateData): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `shardId` | `number` |
| `payload` | `GatewayPresenceUpdateData` |

#### Returns

`void`

#### Inherited from

[`ShardManager`](/api/classes/shardmanager/).[`setShardPresence`](/api/classes/shardmanager/#setshardpresence)

#### Source

[seyfert/src/websocket/discord/sharder.ts:136](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/sharder.ts#L136)

***

### spawn()

```ts
spawn(shardId: number): Shard
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `shardId` | `number` |

#### Returns

`Shard`

#### Inherited from

[`ShardManager`](/api/classes/shardmanager/).[`spawn`](/api/classes/shardmanager/#spawn)

#### Source

[seyfert/src/websocket/discord/sharder.ts:59](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/sharder.ts#L59)

***

### spawnBuckets()

```ts
spawnBuckets(): Shard[][]
```

#### Returns

`Shard`[][]

#### Inherited from

[`ShardManager`](/api/classes/shardmanager/).[`spawnBuckets`](/api/classes/shardmanager/#spawnbuckets)

#### Source

[seyfert/src/websocket/discord/sharder.ts:98](https://github.com/potoland/potocuit/blob/c4fb0c1/src/websocket/discord/sharder.ts#L98)

***

### spawnShards()

```ts
spawnShards(): Promise<void>
```

Spawns shards for the watcher.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`ShardManager`](/api/classes/shardmanager/).[`spawnShards`](/api/classes/shardmanager/#spawnshards)

#### Source

[seyfert/src/common/bot/watcher.ts:72](https://github.com/potoland/potocuit/blob/c4fb0c1/src/common/bot/watcher.ts#L72)

***

### values()

```ts
values(): IterableIterator<Shard>
```

Returns an iterable of values in the map

#### Returns

`IterableIterator`\<`Shard`\>

#### Inherited from

[`ShardManager`](/api/classes/shardmanager/).[`values`](/api/classes/shardmanager/#values)

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

[`ShardManager`](/api/classes/shardmanager/).[`groupBy`](/api/classes/shardmanager/#groupby)

#### Source

node\_modules/.pnpm/typescript@5.4.2/node\_modules/typescript/lib/lib.esnext.collection.d.ts:25
