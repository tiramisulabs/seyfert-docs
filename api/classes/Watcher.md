[seyfert](../globals.md) / Watcher

# Class: Watcher

Represents a watcher class that extends the ShardManager.

## Extends

- [`ShardManager`](ShardManager.md)

## Constructors

### new Watcher()

```ts
new Watcher(options: WatcherOptions): Watcher
```

Initializes a new instance of the Watcher class.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | `WatcherOptions` | The options for the watcher. |

#### Returns

[`Watcher`](Watcher.md)

#### Overrides

[`ShardManager`](ShardManager.md).[`constructor`](ShardManager.md#constructors)

#### Source

[seyfert/src/common/bot/watcher.ts:26](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/bot/watcher.ts#L26)

## Properties

| Property | Modifier | Type | Default value | Description | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ | :------ | :------ |
| `[toStringTag]` | `readonly` | `string` | `undefined` | - | [`ShardManager`](ShardManager.md).`[toStringTag]` | [`ShardManager`](ShardManager.md).`[toStringTag]` |
| `connectQueue` | `public` | `ConnectQueue` | `undefined` | - | [`ShardManager`](ShardManager.md).`connectQueue` | [`ShardManager`](ShardManager.md).`connectQueue` |
| `debugger?` | `public` | [`Logger`](Logger.md) | `undefined` | - | [`ShardManager`](ShardManager.md).`debugger` | [`ShardManager`](ShardManager.md).`debugger` |
| `logger` | `public` | [`Logger`](Logger.md) | `...` | - | - | - |
| `options` | `public` | `MakeRequired`\<`WatcherOptions`, `"token"` \| `"handlePayload"` \| `"intents"` \| `"info"`\> | `undefined` | - | [`ShardManager`](ShardManager.md).`options` | [`ShardManager`](ShardManager.md).`options` |
| `rest?` | `public` | [`ApiHandler`](ApiHandler.md) | `undefined` | - | - | - |
| `size` | `readonly` | `number` | `undefined` |  | [`ShardManager`](ShardManager.md).`size` | [`ShardManager`](ShardManager.md).`size` |
| `worker?` | `public` | `Worker` | `undefined` | - | - | - |
| `[species]` | `readonly` | `MapConstructor` | `undefined` | - | [`ShardManager`](ShardManager.md).`[species]` | [`ShardManager`](ShardManager.md).`[species]` |

## Accessors

### concurrency

```ts
get concurrency(): number
```

#### Returns

`number`

#### Source

[seyfert/src/websocket/discord/sharder.ts:67](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/sharder.ts#L67)

***

### latency

```ts
get latency(): number
```

#### Returns

`number`

#### Source

[seyfert/src/websocket/discord/sharder.ts:71](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/sharder.ts#L71)

***

### remaining

```ts
get remaining(): number
```

#### Returns

`number`

#### Source

[seyfert/src/websocket/discord/sharder.ts:63](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/sharder.ts#L63)

***

### shardEnd

```ts
get shardEnd(): number
```

#### Returns

`number`

#### Source

[seyfert/src/websocket/discord/sharder.ts:59](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/sharder.ts#L59)

***

### shardStart

```ts
get shardStart(): number
```

#### Returns

`number`

#### Source

[seyfert/src/websocket/discord/sharder.ts:55](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/sharder.ts#L55)

***

### totalShards

```ts
get totalShards(): number
```

#### Returns

`number`

#### Source

[seyfert/src/websocket/discord/sharder.ts:51](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/sharder.ts#L51)

## Methods

### `[iterator]`()

```ts
iterator: IterableIterator<[number, Shard]>
```

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`\<[`number`, `Shard`]\>

#### Inherited from

[`ShardManager`](ShardManager.md).[`[iterator]`](ShardManager.md#%5Biterator%5D)

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:119

***

### build()

```ts
protected build(): void
```

Builds the watcher.

#### Returns

`void`

#### Source

[seyfert/src/common/bot/watcher.ts:116](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/bot/watcher.ts#L116)

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

#### Inherited from

[`ShardManager`](ShardManager.md).[`calculateShardId`](ShardManager.md#calculateshardid)

#### Source

[seyfert/src/websocket/discord/sharder.ts:79](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/sharder.ts#L79)

***

### clear()

```ts
clear(): void
```

#### Returns

`void`

#### Inherited from

[`ShardManager`](ShardManager.md).[`clear`](ShardManager.md#clear)

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.collection.d.ts:20

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

[`ShardManager`](ShardManager.md).[`delete`](ShardManager.md#delete)

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.collection.d.ts:24

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

[`ShardManager`](ShardManager.md).[`disconnect`](ShardManager.md#disconnect)

#### Source

[seyfert/src/websocket/discord/sharder.ts:140](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/sharder.ts#L140)

***

### disconnectAll()

```ts
disconnectAll(): Promise<unknown>
```

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

[`ShardManager`](ShardManager.md).[`disconnectAll`](ShardManager.md#disconnectall)

#### Source

[seyfert/src/websocket/discord/sharder.ts:145](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/sharder.ts#L145)

***

### entries()

```ts
entries(): IterableIterator<[number, Shard]>
```

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`\<[`number`, `Shard`]\>

#### Inherited from

[`ShardManager`](ShardManager.md).[`entries`](ShardManager.md#entries)

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:124

***

### forEach()

```ts
forEach(callbackfn: (value: Shard, key: number, map: Map<number, Shard>) => void, thisArg?: any): void
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

[`ShardManager`](ShardManager.md).[`forEach`](ShardManager.md#foreach)

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.collection.d.ts:28

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

[`ShardManager`](ShardManager.md).[`forceIdentify`](ShardManager.md#forceidentify)

#### Source

[seyfert/src/websocket/discord/sharder.ts:135](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/sharder.ts#L135)

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

[`ShardManager`](ShardManager.md).[`get`](ShardManager.md#get)

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.collection.d.ts:33

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

[`ShardManager`](ShardManager.md).[`has`](ShardManager.md#has)

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.collection.d.ts:37

***

### joinVoice()

```ts
joinVoice(
   guild_id: string, 
   channel_id: string, 
   options: {
  selfDeaf: boolean;
  selfMute: boolean;
 }): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `guild_id` | `string` |
| `channel_id` | `string` |
| `options` | `object` |
| `options.selfDeaf` | `boolean` |
| `options.selfMute` | `boolean` |

#### Returns

`void`

#### Inherited from

[`ShardManager`](ShardManager.md).[`joinVoice`](ShardManager.md#joinvoice)

#### Source

[seyfert/src/websocket/discord/sharder.ts:170](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/sharder.ts#L170)

***

### keys()

```ts
keys(): IterableIterator<number>
```

Returns an iterable of keys in the map

#### Returns

`IterableIterator`\<`number`\>

#### Inherited from

[`ShardManager`](ShardManager.md).[`keys`](ShardManager.md#keys)

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:129

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

[`ShardManager`](ShardManager.md).[`leaveVoice`](ShardManager.md#leavevoice)

#### Source

[seyfert/src/websocket/discord/sharder.ts:188](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/sharder.ts#L188)

***

### resetWorker()

```ts
resetWorker(): void
```

Resets the worker instance.

#### Returns

`void`

#### Source

[seyfert/src/common/bot/watcher.ts:48](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/bot/watcher.ts#L48)

***

### send()

```ts
send<T>(shardId: number, payload: T): void
```

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `GatewaySendPayload` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `shardId` | `number` |
| `payload` | `T` |

#### Returns

`void`

#### Inherited from

[`ShardManager`](ShardManager.md).[`send`](ShardManager.md#send)

#### Source

[seyfert/src/websocket/discord/sharder.ts:203](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/sharder.ts#L203)

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

[`ShardManager`](ShardManager.md).[`set`](ShardManager.md#set)

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.collection.d.ts:41

***

### setPresence()

```ts
setPresence(payload: GatewayPresenceUpdateData): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `payload` | `GatewayPresenceUpdateData` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ShardManager`](ShardManager.md).[`setPresence`](ShardManager.md#setpresence)

#### Source

[seyfert/src/websocket/discord/sharder.ts:161](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/sharder.ts#L161)

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

[`ShardManager`](ShardManager.md).[`setShardPresence`](ShardManager.md#setshardpresence)

#### Source

[seyfert/src/websocket/discord/sharder.ts:153](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/sharder.ts#L153)

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

[`ShardManager`](ShardManager.md).[`spawn`](ShardManager.md#spawn)

#### Source

[seyfert/src/websocket/discord/sharder.ts:83](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/sharder.ts#L83)

***

### spawnBuckets()

```ts
spawnBuckets(): Shard[][]
```

#### Returns

`Shard`[][]

#### Inherited from

[`ShardManager`](ShardManager.md).[`spawnBuckets`](ShardManager.md#spawnbuckets)

#### Source

[seyfert/src/websocket/discord/sharder.ts:122](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/websocket/discord/sharder.ts#L122)

***

### spawnShards()

```ts
spawnShards(): Promise<void>
```

Spawns shards for the watcher.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`ShardManager`](ShardManager.md).[`spawnShards`](ShardManager.md#spawnshards)

#### Source

[seyfert/src/common/bot/watcher.ts:73](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/bot/watcher.ts#L73)

***

### values()

```ts
values(): IterableIterator<Shard>
```

Returns an iterable of values in the map

#### Returns

`IterableIterator`\<`Shard`\>

#### Inherited from

[`ShardManager`](ShardManager.md).[`values`](ShardManager.md#values)

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

[`ShardManager`](ShardManager.md).[`groupBy`](ShardManager.md#groupby)

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.esnext.collection.d.ts:25
