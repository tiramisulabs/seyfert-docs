---
editUrl: false
next: false
prev: false
title: "REST"
---

Represents the class that manages handlers for endpoints

## Constructors

### new REST(options)

```ts
new REST(options: RESTConstructorOptions): REST
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`RESTConstructorOptions`](/api/type-aliases/restconstructoroptions/) |

#### Returns

[`REST`](/api/classes/rest/)

#### Source

[seyfert/src/api/REST.ts:75](https://github.com/potoland/potocuit/blob/e332d7a/src/api/REST.ts#L75)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `agent` | `public` | `null` \| `Dispatcher` | The [Agent](https://undici.nodejs.org/#/docs/api/Agent) for all requests<br />performed by this manager. |
| `cdn` | `readonly` | [`CDN`](/api/classes/cdn/) | - |
| `debugger?` | `public` | [`Logger`](/api/classes/logger/) | - |
| `globalDelay` | `public` | `null` \| `Promise`\<`void`\> | The promise used to wait out the global rate limit |
| `globalRemaining` | `public` | `number` | The number of requests remaining in the global bucket |
| `globalReset` | `public` | `number` | The timestamp at which the global bucket resets |
| `handlers` | `readonly` | [`Collection`](/api/classes/collection/)\<`string`, `IHandler`\> | Request handlers created from the bucket hash and the major parameters |
| `hashes` | `readonly` | [`Collection`](/api/classes/collection/)\<`string`, `HashData`\> | API bucket hashes that are cached from provided routes |
| `options` | `readonly` | [`RESTOptions`](/api/interfaces/restoptions/) | - |

## Methods

### clearHandlerSweeper()

```ts
clearHandlerSweeper(): void
```

Stops the request handler sweeping interval

#### Returns

`void`

#### Source

[seyfert/src/api/REST.ts:459](https://github.com/potoland/potocuit/blob/e332d7a/src/api/REST.ts#L459)

***

### clearHashSweeper()

```ts
clearHashSweeper(): void
```

Stops the hash sweeping interval

#### Returns

`void`

#### Source

[seyfert/src/api/REST.ts:452](https://github.com/potoland/potocuit/blob/e332d7a/src/api/REST.ts#L452)

***

### delete()

```ts
delete<T>(route: string, options?: RequestObject<Delete, Record<string, any>, Record<string, any>, RawFile[]>): Promise<T>
```

Runs a delete request from the api

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `route` | `string` | The full route to query |
| `options`? | [`RequestObject`](/api/type-aliases/requestobject/)\<`Delete`, `Record`\<`string`, `any`\>, `Record`\<`string`, `any`\>, [`RawFile`](/api/interfaces/rawfile/)[]\> | Optional request options |

#### Returns

`Promise`\<`T`\>

#### Source

[seyfert/src/api/REST.ts:182](https://github.com/potoland/potocuit/blob/e332d7a/src/api/REST.ts#L182)

***

### get()

```ts
get<T>(route: string, options?: RequestObject<Get, Record<string, any>, Record<string, any>, RawFile[]>): Promise<T>
```

Runs a get request from the api

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `route` | `string` | The full route to query |
| `options`? | [`RequestObject`](/api/type-aliases/requestobject/)\<`Get`, `Record`\<`string`, `any`\>, `Record`\<`string`, `any`\>, [`RawFile`](/api/interfaces/rawfile/)[]\> | Optional request options |

#### Returns

`Promise`\<`T`\>

#### Source

[seyfert/src/api/REST.ts:165](https://github.com/potoland/potocuit/blob/e332d7a/src/api/REST.ts#L165)

***

### patch()

```ts
patch<T>(route: string, body?: RequestObject<Patch, Record<string, any>, Record<string, any>, RawFile[]>): Promise<T>
```

Runs a patch request from the api

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `route` | `string` | The full route to query |
| `body`? | [`RequestObject`](/api/type-aliases/requestobject/)\<`Patch`, `Record`\<`string`, `any`\>, `Record`\<`string`, `any`\>, [`RawFile`](/api/interfaces/rawfile/)[]\> | - |

#### Returns

`Promise`\<`T`\>

#### Source

[seyfert/src/api/REST.ts:236](https://github.com/potoland/potocuit/blob/e332d7a/src/api/REST.ts#L236)

***

### post()

```ts
post<T>(route: string, body?: RequestObject<Post, Record<string, any>, Record<string, any>, RawFile[]>): Promise<T>
```

Runs a post request from the api

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `route` | `string` | The full route to query |
| `body`? | [`RequestObject`](/api/type-aliases/requestobject/)\<`Post`, `Record`\<`string`, `any`\>, `Record`\<`string`, `any`\>, [`RawFile`](/api/interfaces/rawfile/)[]\> | - |

#### Returns

`Promise`\<`T`\>

#### Source

[seyfert/src/api/REST.ts:199](https://github.com/potoland/potocuit/blob/e332d7a/src/api/REST.ts#L199)

***

### put()

```ts
put<T>(route: string, body?: RequestObject<Put, Record<string, any>, Record<string, any>, RawFile[]>): Promise<T>
```

Runs a put request from the api

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `route` | `string` | The full route to query |
| `body`? | [`RequestObject`](/api/type-aliases/requestobject/)\<`Put`, `Record`\<`string`, `any`\>, `Record`\<`string`, `any`\>, [`RawFile`](/api/interfaces/rawfile/)[]\> | - |

#### Returns

`Promise`\<`T`\>

#### Source

[seyfert/src/api/REST.ts:218](https://github.com/potoland/potocuit/blob/e332d7a/src/api/REST.ts#L218)

***

### queueRequest()

```ts
queueRequest(request: InternalRequest): Promise<ResponseLike>
```

Queues a request to be sent

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `request` | `InternalRequest` | All the information needed to make a request |

#### Returns

`Promise`\<[`ResponseLike`](/api/interfaces/responselike/)\>

The response from the api request

#### Source

[seyfert/src/api/REST.ts:284](https://github.com/potoland/potocuit/blob/e332d7a/src/api/REST.ts#L284)

***

### request()

```ts
request(options: InternalRequest): Promise<unknown>
```

Runs a request from the api

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | `InternalRequest` | Request options |

#### Returns

`Promise`\<`unknown`\>

#### Source

[seyfert/src/api/REST.ts:253](https://github.com/potoland/potocuit/blob/e332d7a/src/api/REST.ts#L253)

***

### setAgent()

```ts
setAgent(agent: Dispatcher): REST
```

Sets the default agent to use for requests performed by this manager

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `agent` | `Dispatcher` | The agent to use |

#### Returns

[`REST`](/api/classes/rest/)

#### Source

[seyfert/src/api/REST.ts:263](https://github.com/potoland/potocuit/blob/e332d7a/src/api/REST.ts#L263)

***

### setToken()

```ts
setToken(token: string): REST
```

Sets the authorization token that should be used for requests

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | The authorization token to use |

#### Returns

[`REST`](/api/classes/rest/)

#### Source

[seyfert/src/api/REST.ts:273](https://github.com/potoland/potocuit/blob/e332d7a/src/api/REST.ts#L273)
