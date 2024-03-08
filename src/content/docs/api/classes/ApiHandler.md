---
editUrl: false
next: false
prev: false
title: "ApiHandler"
---

## Constructors

### new ApiHandler(options)

```ts
new ApiHandler(options: ApiHandlerOptions): ApiHandler
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`ApiHandlerOptions`](/api/interfaces/apihandleroptions/) |

#### Returns

[`ApiHandler`](/api/classes/apihandler/)

#### Source

[seyfert/src/api/api.ts:28](https://github.com/potoland/potocuit/blob/c4fb0c1/src/api/api.ts#L28)

## Properties

| Property | Type |
| :------ | :------ |
| `cdn` | [`CDN`](/api/classes/cdn/) |
| `debugger?` | [`Logger`](/api/classes/logger/) |
| `globalBlock` | `boolean` |
| `options` | [`ApiHandlerInternalOptions`](/api/interfaces/apihandlerinternaloptions/) |
| `ratelimits` | `Map`\<`string`, `Bucket`\> |
| `readyQueue` | () => `void`[] |

## Methods

### clearResetInterval()

```ts
clearResetInterval(route: string): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `route` | `string` |

#### Returns

`void`

#### Source

[seyfert/src/api/api.ts:239](https://github.com/potoland/potocuit/blob/c4fb0c1/src/api/api.ts#L239)

***

### globalUnblock()

```ts
globalUnblock(): void
```

#### Returns

`void`

#### Source

[seyfert/src/api/api.ts:40](https://github.com/potoland/potocuit/blob/c4fb0c1/src/api/api.ts#L40)

***

### handle429()

```ts
handle429(
   route: string, 
   method: HttpMethods, 
   url: \/${string}\, 
   request: ApiRequestOptions, 
   response: Response, 
   result: any, 
   next:     () => void, 
   reject:     (err: unknown) => void, 
now: number): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `route` | `string` |
| `method` | [`HttpMethods`](/api/type-aliases/httpmethods/) |
| `url` | \`/${string}\` |
| `request` | [`ApiRequestOptions`](/api/interfaces/apirequestoptions/) |
| `response` | `Response` |
| `result` | `any` |
| `next` | () => `void` |
| `reject` | (`err`: `unknown`) => `void` |
| `now` | `number` |

#### Returns

`Promise`\<`any`\>

#### Source

[seyfert/src/api/api.ts:187](https://github.com/potoland/potocuit/blob/c4fb0c1/src/api/api.ts#L187)

***

### handle50X()

```ts
handle50X(
   method: HttpMethods, 
   url: \/${string}\, 
   request: ApiRequestOptions, 
next:     () => void): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `method` | [`HttpMethods`](/api/type-aliases/httpmethods/) |
| `url` | \`/${string}\` |
| `request` | [`ApiRequestOptions`](/api/interfaces/apirequestoptions/) |
| `next` | () => `void` |

#### Returns

`Promise`\<`any`\>

#### Source

[seyfert/src/api/api.ts:173](https://github.com/potoland/potocuit/blob/c4fb0c1/src/api/api.ts#L173)

***

### parseError()

```ts
parseError(response: Response, result: unknown): Error
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `response` | `Response` |
| `result` | `unknown` |

#### Returns

`Error`

#### Source

[seyfert/src/api/api.ts:156](https://github.com/potoland/potocuit/blob/c4fb0c1/src/api/api.ts#L156)

***

### parseRequest()

```ts
parseRequest(options:     Object): Object
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.headers` | [`RequestHeaders`](/api/interfaces/requestheaders/) |
| `options.request` | [`ApiRequestOptions`](/api/interfaces/apirequestoptions/) |
| `options.url` | `string` |

#### Returns

`Object`

| Member | Type |
| :------ | :------ |
| `data` | `undefined` \| `string` \| `FormData` |
| `finalUrl` | \`/${string}\` |

#### Source

[seyfert/src/api/api.ts:289](https://github.com/potoland/potocuit/blob/c4fb0c1/src/api/api.ts#L289)

***

### request()

```ts
request<T>(
   method: HttpMethods, 
   url: \/${string}\, 
__namedParameters: ApiRequestOptions): Promise<T>
```

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `method` | [`HttpMethods`](/api/type-aliases/httpmethods/) |
| `url` | \`/${string}\` |
| `__namedParameters` | [`ApiRequestOptions`](/api/interfaces/apirequestoptions/) |

#### Returns

`Promise`\<`T`\>

#### Source

[seyfert/src/api/api.ts:48](https://github.com/potoland/potocuit/blob/c4fb0c1/src/api/api.ts#L48)

***

### routefy()

```ts
routefy(url: string, method: HttpMethods): \/${string}\
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `url` | `string` |
| `method` | [`HttpMethods`](/api/type-aliases/httpmethods/) |

#### Returns

\`/${string}\`

#### Source

[seyfert/src/api/api.ts:349](https://github.com/potoland/potocuit/blob/c4fb0c1/src/api/api.ts#L349)

***

### setRatelimitsBucket()

```ts
setRatelimitsBucket(route: string, resp: Response): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `route` | `string` |
| `resp` | `Response` |

#### Returns

`void`

#### Source

[seyfert/src/api/api.ts:266](https://github.com/potoland/potocuit/blob/c4fb0c1/src/api/api.ts#L266)

***

### setResetBucket()

```ts
setResetBucket(
   route: string, 
   resp: Response, 
   now: number, 
   headerNow: number): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `route` | `string` |
| `resp` | `Response` |
| `now` | `number` |
| `headerNow` | `number` |

#### Returns

`void`

#### Source

[seyfert/src/api/api.ts:245](https://github.com/potoland/potocuit/blob/c4fb0c1/src/api/api.ts#L245)
