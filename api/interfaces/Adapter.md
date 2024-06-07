[seyfert](../globals.md) / Adapter

# Interface: Adapter

## Properties

| Property | Type |
| :------ | :------ |
| `isAsync` | `boolean` |

## Methods

### addToRelationship()

```ts
addToRelationship(to: string, keys: string | string[]): Awaitable<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |
| `keys` | `string` \| `string`[] |

#### Returns

`Awaitable`\<`void`\>

#### Source

[seyfert/src/cache/adapters/types.ts:38](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/types.ts#L38)

***

### bulkAddToRelationShip()

```ts
bulkAddToRelationShip(data: Record<string, string[]>): Awaitable<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Record`\<`string`, `string`[]\> |

#### Returns

`Awaitable`\<`void`\>

#### Source

[seyfert/src/cache/adapters/types.ts:36](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/types.ts#L36)

***

### contains()

```ts
contains(to: string, keys: string): Awaitable<boolean>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |
| `keys` | `string` |

#### Returns

`Awaitable`\<`boolean`\>

#### Source

[seyfert/src/cache/adapters/types.ts:32](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/types.ts#L32)

***

### count()

```ts
count(to: string): Awaitable<number>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |

#### Returns

`Awaitable`\<`number`\>

#### Source

[seyfert/src/cache/adapters/types.ts:26](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/types.ts#L26)

***

### flush()

```ts
flush(): Awaitable<void>
```

#### Returns

`Awaitable`\<`void`\>

#### Source

[seyfert/src/cache/adapters/types.ts:30](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/types.ts#L30)

***

### get()

#### get(keys)

```ts
get(keys: string[]): Awaitable<any[]>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `keys` | `string`[] |

##### Returns

`Awaitable`\<`any`[]\>

##### Source

[seyfert/src/cache/adapters/types.ts:10](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/types.ts#L10)

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

##### Source

[seyfert/src/cache/adapters/types.ts:11](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/types.ts#L11)

#### get(keys)

```ts
get(keys: string | string[]): any
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |

##### Returns

`any`

##### Source

[seyfert/src/cache/adapters/types.ts:12](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/types.ts#L12)

***

### getToRelationship()

```ts
getToRelationship(to: string): Awaitable<string[]>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |

#### Returns

`Awaitable`\<`string`[]\>

#### Source

[seyfert/src/cache/adapters/types.ts:34](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/types.ts#L34)

***

### keys()

```ts
keys(to: string): Awaitable<string[]>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |

#### Returns

`Awaitable`\<`string`[]\>

#### Source

[seyfert/src/cache/adapters/types.ts:24](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/types.ts#L24)

***

### patch()

#### patch(updateOnly, keyValue)

```ts
patch(updateOnly: boolean, keyValue: [string, any][]): Awaitable<void>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `updateOnly` | `boolean` |
| `keyValue` | [`string`, `any`][] |

##### Returns

`Awaitable`\<`void`\>

##### Source

[seyfert/src/cache/adapters/types.ts:18](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/types.ts#L18)

#### patch(updateOnly, id, data)

```ts
patch(
   updateOnly: boolean, 
   id: string, 
data: any): Awaitable<void>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `updateOnly` | `boolean` |
| `id` | `string` |
| `data` | `any` |

##### Returns

`Awaitable`\<`void`\>

##### Source

[seyfert/src/cache/adapters/types.ts:19](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/types.ts#L19)

#### patch(updateOnly, id, data)

```ts
patch(
   updateOnly: boolean, 
   id: string | [string, any][], 
data?: any): Awaitable<void>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `updateOnly` | `boolean` |
| `id` | `string` \| [`string`, `any`][] |
| `data`? | `any` |

##### Returns

`Awaitable`\<`void`\>

##### Source

[seyfert/src/cache/adapters/types.ts:20](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/types.ts#L20)

***

### remove()

```ts
remove(keys: string | string[]): Awaitable<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |

#### Returns

`Awaitable`\<`void`\>

#### Source

[seyfert/src/cache/adapters/types.ts:28](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/types.ts#L28)

***

### removeRelationship()

```ts
removeRelationship(to: string | string[]): Awaitable<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` \| `string`[] |

#### Returns

`Awaitable`\<`void`\>

#### Source

[seyfert/src/cache/adapters/types.ts:42](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/types.ts#L42)

***

### removeToRelationship()

```ts
removeToRelationship(to: string, keys: string | string[]): Awaitable<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |
| `keys` | `string` \| `string`[] |

#### Returns

`Awaitable`\<`void`\>

#### Source

[seyfert/src/cache/adapters/types.ts:40](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/types.ts#L40)

***

### scan()

#### scan(query, keys)

```ts
scan(query: string, keys?: false): Awaitable<any[]>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `query` | `string` |
| `keys`? | `false` |

##### Returns

`Awaitable`\<`any`[]\>

##### Source

[seyfert/src/cache/adapters/types.ts:6](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/types.ts#L6)

#### scan(query, keys)

```ts
scan(query: string, keys: true): Awaitable<string[]>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `query` | `string` |
| `keys` | `true` |

##### Returns

`Awaitable`\<`string`[]\>

##### Source

[seyfert/src/cache/adapters/types.ts:7](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/types.ts#L7)

#### scan(query, keys)

```ts
scan(query: string, keys?: boolean): Awaitable<any[]>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `query` | `string` |
| `keys`? | `boolean` |

##### Returns

`Awaitable`\<`any`[]\>

##### Source

[seyfert/src/cache/adapters/types.ts:8](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/types.ts#L8)

***

### set()

#### set(keyValue)

```ts
set(keyValue: [string, any][]): Awaitable<void>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `keyValue` | [`string`, `any`][] |

##### Returns

`Awaitable`\<`void`\>

##### Source

[seyfert/src/cache/adapters/types.ts:14](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/types.ts#L14)

#### set(id, data)

```ts
set(id: string, data: any): Awaitable<void>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |
| `data` | `any` |

##### Returns

`Awaitable`\<`void`\>

##### Source

[seyfert/src/cache/adapters/types.ts:15](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/types.ts#L15)

#### set(id, data)

```ts
set(id: string | [string, any][], data?: any): Awaitable<void>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` \| [`string`, `any`][] |
| `data`? | `any` |

##### Returns

`Awaitable`\<`void`\>

##### Source

[seyfert/src/cache/adapters/types.ts:16](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/types.ts#L16)

***

### values()

```ts
values(to: string): Awaitable<any[]>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `to` | `string` |

#### Returns

`Awaitable`\<`any`[]\>

#### Source

[seyfert/src/cache/adapters/types.ts:22](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/adapters/types.ts#L22)
