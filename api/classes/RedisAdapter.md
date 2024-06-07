[seyfert](../globals.md) / RedisAdapter

# Class: RedisAdapter

## Implements

- [`Adapter`](../interfaces/Adapter.md)

## Constructors

### new RedisAdapter()

```ts
new RedisAdapter(data: {
  client: Redis;
 } | {
  redisOptions: RedisOptions;
 } & RedisAdapterOptions): RedisAdapter
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | \{ `client`: `Redis`; \} \| \{ `redisOptions`: `RedisOptions`; \} & `RedisAdapterOptions` |

#### Returns

[`RedisAdapter`](RedisAdapter.md)

#### Source

[seyfert/src/cache/adapters/redis.ts:22](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/redis.ts#L22)

## Properties

| Property | Type | Default value |
| :------ | :------ | :------ |
| `client` | `Redis` | `undefined` |
| `isAsync` | `boolean` | `true` |
| `namespace` | `string` | `undefined` |

## Methods

### \_\_scanSets()

#### \_\_scanSets(query, returnKeys)

```ts
private __scanSets(query: string, returnKeys?: false): Promise<any[]>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `query` | `string` |
| `returnKeys`? | `false` |

##### Returns

`Promise`\<`any`[]\>

##### Source

[seyfert/src/cache/adapters/redis.ts:30](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/redis.ts#L30)

#### \_\_scanSets(query, returnKeys)

```ts
private __scanSets(query: string, returnKeys: true): Promise<string[]>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `query` | `string` |
| `returnKeys` | `true` |

##### Returns

`Promise`\<`string`[]\>

##### Source

[seyfert/src/cache/adapters/redis.ts:31](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/redis.ts#L31)

***

### addToRelationship()

```ts
addToRelationship(to: string, keys: string | string[]): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |
| `keys` | `string` \| `string`[] |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`addToRelationship`](../interfaces/Adapter.md#addtorelationship)

#### Source

[seyfert/src/cache/adapters/redis.ts:203](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/redis.ts#L203)

***

### buildKey()

```ts
protected buildKey(key: string): string
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`string`

#### Source

[seyfert/src/cache/adapters/redis.ts:217](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/redis.ts#L217)

***

### bulkAddToRelationShip()

```ts
bulkAddToRelationShip(data: Record<string, string[]>): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Record`\<`string`, `string`[]\> |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`bulkAddToRelationShip`](../interfaces/Adapter.md#bulkaddtorelationship)

#### Source

[seyfert/src/cache/adapters/redis.ts:193](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/redis.ts#L193)

***

### contains()

```ts
contains(to: string, keys: string): Promise<boolean>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |
| `keys` | `string` |

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`contains`](../interfaces/Adapter.md#contains)

#### Source

[seyfert/src/cache/adapters/redis.ts:185](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/redis.ts#L185)

***

### count()

```ts
count(to: string): Promise<number>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |

#### Returns

`Promise`\<`number`\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`count`](../interfaces/Adapter.md#count)

#### Source

[seyfert/src/cache/adapters/redis.ts:163](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/redis.ts#L163)

***

### flush()

```ts
flush(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`flush`](../interfaces/Adapter.md#flush)

#### Source

[seyfert/src/cache/adapters/redis.ts:176](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/redis.ts#L176)

***

### get()

#### get(keys)

```ts
get(keys: string[]): Promise<any[]>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `keys` | `string`[] |

##### Returns

`Promise`\<`any`[]\>

##### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`get`](../interfaces/Adapter.md#get)

##### Source

[seyfert/src/cache/adapters/redis.ts:65](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/redis.ts#L65)

#### get(keys)

```ts
get(keys: string): Promise<any>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `keys` | `string` |

##### Returns

`Promise`\<`any`\>

##### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`get`](../interfaces/Adapter.md#get)

##### Source

[seyfert/src/cache/adapters/redis.ts:66](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/redis.ts#L66)

***

### getToRelationship()

```ts
getToRelationship(to: string): Promise<string[]>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |

#### Returns

`Promise`\<`string`[]\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`getToRelationship`](../interfaces/Adapter.md#gettorelationship)

#### Source

[seyfert/src/cache/adapters/redis.ts:189](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/redis.ts#L189)

***

### keys()

```ts
keys(to: string): Promise<string[]>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |

#### Returns

`Promise`\<`string`[]\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`keys`](../interfaces/Adapter.md#keys)

#### Source

[seyfert/src/cache/adapters/redis.ts:158](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/redis.ts#L158)

***

### patch()

#### patch(updateOnly, id)

```ts
patch(updateOnly: boolean, id: [string, any][]): Promise<void>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `updateOnly` | `boolean` |
| `id` | [`string`, `any`][] |

##### Returns

`Promise`\<`void`\>

##### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`patch`](../interfaces/Adapter.md#patch)

##### Source

[seyfert/src/cache/adapters/redis.ts:102](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/redis.ts#L102)

#### patch(updateOnly, id, data)

```ts
patch(
   updateOnly: boolean, 
   id: string, 
data: any): Promise<void>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `updateOnly` | `boolean` |
| `id` | `string` |
| `data` | `any` |

##### Returns

`Promise`\<`void`\>

##### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`patch`](../interfaces/Adapter.md#patch)

##### Source

[seyfert/src/cache/adapters/redis.ts:103](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/redis.ts#L103)

***

### remove()

```ts
remove(keys: string | string[]): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`remove`](../interfaces/Adapter.md#remove)

#### Source

[seyfert/src/cache/adapters/redis.ts:167](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/redis.ts#L167)

***

### removeRelationship()

```ts
removeRelationship(to: string | string[]): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` \| `string`[] |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`removeRelationship`](../interfaces/Adapter.md#removerelationship)

#### Source

[seyfert/src/cache/adapters/redis.ts:211](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/redis.ts#L211)

***

### removeToRelationship()

```ts
removeToRelationship(to: string, keys: string | string[]): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |
| `keys` | `string` \| `string`[] |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`removeToRelationship`](../interfaces/Adapter.md#removetorelationship)

#### Source

[seyfert/src/cache/adapters/redis.ts:207](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/redis.ts#L207)

***

### scan()

#### scan(query, returnKeys)

```ts
scan(query: string, returnKeys?: false): Promise<any[]>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `query` | `string` |
| `returnKeys`? | `false` |

##### Returns

`Promise`\<`any`[]\>

##### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`scan`](../interfaces/Adapter.md#scan)

##### Source

[seyfert/src/cache/adapters/redis.ts:47](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/redis.ts#L47)

#### scan(query, returnKeys)

```ts
scan(query: string, returnKeys: true): Promise<string[]>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `query` | `string` |
| `returnKeys` | `true` |

##### Returns

`Promise`\<`string`[]\>

##### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`scan`](../interfaces/Adapter.md#scan)

##### Source

[seyfert/src/cache/adapters/redis.ts:48](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/redis.ts#L48)

***

### set()

#### set(id)

```ts
set(id: [string, any][]): Promise<void>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | [`string`, `any`][] |

##### Returns

`Promise`\<`void`\>

##### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`set`](../interfaces/Adapter.md#set)

##### Source

[seyfert/src/cache/adapters/redis.ts:85](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/redis.ts#L85)

#### set(id, data)

```ts
set(id: string, data: any): Promise<void>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |
| `data` | `any` |

##### Returns

`Promise`\<`void`\>

##### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`set`](../interfaces/Adapter.md#set)

##### Source

[seyfert/src/cache/adapters/redis.ts:86](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/redis.ts#L86)

***

### values()

```ts
values(to: string): Promise<any[]>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |

#### Returns

`Promise`\<`any`[]\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`values`](../interfaces/Adapter.md#values)

#### Source

[seyfert/src/cache/adapters/redis.ts:143](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/redis.ts#L143)
