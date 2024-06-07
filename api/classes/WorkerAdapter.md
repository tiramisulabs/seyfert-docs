[seyfert](../globals.md) / WorkerAdapter

# Class: WorkerAdapter

## Implements

- [`Adapter`](../interfaces/Adapter.md)

## Constructors

### new WorkerAdapter()

```ts
new WorkerAdapter(workerData: WorkerData): WorkerAdapter
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `workerData` | `WorkerData` |

#### Returns

[`WorkerAdapter`](WorkerAdapter.md)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:13](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/workeradapter.ts#L13)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `isAsync` | `public` | `boolean` | `true` |
| `promises` | `public` | `Map`\<`string`, \{ `resolve`: (`value`: `unknown`) => `void`; `timeout`: `Timeout`; \}\> | `...` |
| `workerData` | `public` | `WorkerData` | `undefined` |

## Methods

### addToRelationship()

```ts
addToRelationship(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`addToRelationship`](../interfaces/Adapter.md#addtorelationship)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:92](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/workeradapter.ts#L92)

***

### bulkAddToRelationShip()

```ts
bulkAddToRelationShip(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`bulkAddToRelationShip`](../interfaces/Adapter.md#bulkaddtorelationship)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:88](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/workeradapter.ts#L88)

***

### contains()

```ts
contains(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`contains`](../interfaces/Adapter.md#contains)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:80](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/workeradapter.ts#L80)

***

### count()

```ts
count(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`count`](../interfaces/Adapter.md#count)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:68](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/workeradapter.ts#L68)

***

### flush()

```ts
flush(): Promise<any>
```

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`flush`](../interfaces/Adapter.md#flush)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:76](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/workeradapter.ts#L76)

***

### get()

```ts
get(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`get`](../interfaces/Adapter.md#get)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:48](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/workeradapter.ts#L48)

***

### getToRelationship()

```ts
getToRelationship(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`getToRelationship`](../interfaces/Adapter.md#gettorelationship)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:84](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/workeradapter.ts#L84)

***

### keys()

```ts
keys(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`keys`](../interfaces/Adapter.md#keys)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:64](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/workeradapter.ts#L64)

***

### patch()

```ts
patch(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`patch`](../interfaces/Adapter.md#patch)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:56](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/workeradapter.ts#L56)

***

### postMessage()

```ts
postMessage(body: any): boolean | void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `any` |

#### Returns

`boolean` \| `void`

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:18](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/workeradapter.ts#L18)

***

### remove()

```ts
remove(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`remove`](../interfaces/Adapter.md#remove)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:72](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/workeradapter.ts#L72)

***

### removeRelationship()

```ts
removeRelationship(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`removeRelationship`](../interfaces/Adapter.md#removerelationship)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:100](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/workeradapter.ts#L100)

***

### removeToRelationship()

```ts
removeToRelationship(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`removeToRelationship`](../interfaces/Adapter.md#removetorelationship)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:96](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/workeradapter.ts#L96)

***

### scan()

```ts
scan(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`scan`](../interfaces/Adapter.md#scan)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:44](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/workeradapter.ts#L44)

***

### send()

```ts
protected send(method: 
  | "keys"
  | "values"
  | "set"
  | "contains"
  | "get"
  | "patch"
  | "count"
  | "flush"
  | "scan"
  | "remove"
  | "getToRelationship"
  | "bulkAddToRelationShip"
  | "addToRelationship"
  | "removeRelationship"
| "removeToRelationship", ...args: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `method` |  \| `"keys"` \| `"values"` \| `"set"` \| `"contains"` \| `"get"` \| `"patch"` \| `"count"` \| `"flush"` \| `"scan"` \| `"remove"` \| `"getToRelationship"` \| `"bulkAddToRelationShip"` \| `"addToRelationship"` \| `"removeRelationship"` \| `"removeToRelationship"` |
| ...`args` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:23](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/workeradapter.ts#L23)

***

### set()

```ts
set(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`set`](../interfaces/Adapter.md#set)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:52](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/workeradapter.ts#L52)

***

### values()

```ts
values(...rest: any[]): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`rest` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Adapter`](../interfaces/Adapter.md).[`values`](../interfaces/Adapter.md#values)

#### Source

[seyfert/src/cache/adapters/workeradapter.ts:60](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/workeradapter.ts#L60)
