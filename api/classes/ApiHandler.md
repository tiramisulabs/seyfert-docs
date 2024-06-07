[seyfert](../globals.md) / ApiHandler

# Class: ApiHandler

## Constructors

### new ApiHandler()

```ts
new ApiHandler(options: ApiHandlerOptions): ApiHandler
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`ApiHandlerOptions`](../interfaces/ApiHandlerOptions.md) |

#### Returns

[`ApiHandler`](ApiHandler.md)

#### Source

[seyfert/src/api/api.ts:33](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/api.ts#L33)

## Properties

| Property | Type | Default value |
| :------ | :------ | :------ |
| `cdn` | [`CDNRoute`](../interfaces/CDNRoute.md) | `...` |
| `debugger?` | [`Logger`](Logger.md) | `undefined` |
| `globalBlock` | `boolean` | `false` |
| `options` | [`ApiHandlerInternalOptions`](../interfaces/ApiHandlerInternalOptions.md) | `undefined` |
| `ratelimits` | `Map`\<`string`, `Bucket`\> | `...` |
| `readyQueue` | () => `void`[] | `[]` |
| `workerPromises?` | `Map`\<`string`, \{ `reject`: (`error`: `any`) => `any`; `resolve`: (`value`: `any`) => `any`; \}\> | `undefined` |

## Methods

### #randomUUID()

```ts
private #randomUUID(): string
```

#### Returns

`string`

#### Source

[seyfert/src/api/api.ts:66](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/api.ts#L66)

***

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

[seyfert/src/api/api.ts:283](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/api.ts#L283)

***

### globalUnblock()

```ts
globalUnblock(): void
```

#### Returns

`void`

#### Source

[seyfert/src/api/api.ts:58](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/api.ts#L58)

***

### handle429()

```ts
handle429(
   route: string, 
   method: HttpMethods, 
   url: `/${string}`, 
   request: ApiRequestOptions, 
   response: Response, 
   result: any, 
   next: () => void, 
   reject: (err: unknown) => void, 
now: number): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `route` | `string` |
| `method` | [`HttpMethods`](../type-aliases/HttpMethods.md) |
| `url` | \`/$\{string\}\` |
| `request` | [`ApiRequestOptions`](../interfaces/ApiRequestOptions.md) |
| `response` | `Response` |
| `result` | `any` |
| `next` | () => `void` |
| `reject` | (`err`: `unknown`) => `void` |
| `now` | `number` |

#### Returns

`Promise`\<`any`\>

#### Source

[seyfert/src/api/api.ts:231](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/api.ts#L231)

***

### handle50X()

```ts
handle50X(
   method: HttpMethods, 
   url: `/${string}`, 
   request: ApiRequestOptions, 
next: () => void): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `method` | [`HttpMethods`](../type-aliases/HttpMethods.md) |
| `url` | \`/$\{string\}\` |
| `request` | [`ApiRequestOptions`](../interfaces/ApiRequestOptions.md) |
| `next` | () => `void` |

#### Returns

`Promise`\<`any`\>

#### Source

[seyfert/src/api/api.ts:217](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/api.ts#L217)

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

[seyfert/src/api/api.ts:200](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/api.ts#L200)

***

### parseRequest()

```ts
parseRequest(options: {
  headers: RequestHeaders;
  request: ApiRequestOptions;
  url: string;
 }): {
  data: undefined | string | FormData;
  finalUrl: `/${string}`;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.headers` | [`RequestHeaders`](../interfaces/RequestHeaders.md) |
| `options.request` | [`ApiRequestOptions`](../interfaces/ApiRequestOptions.md) |
| `options.url` | `string` |

#### Returns

```ts
{
  data: undefined | string | FormData;
  finalUrl: `/${string}`;
}
```

| Member | Type |
| :------ | :------ |
| `data` | `undefined` \| `string` \| `FormData` |
| `finalUrl` | \`/$\{string\}\` |

#### Source

[seyfert/src/api/api.ts:333](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/api.ts#L333)

***

### request()

```ts
request<T>(
   method: HttpMethods, 
   url: `/${string}`, 
__namedParameters: ApiRequestOptions): Promise<T>
```

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `method` | [`HttpMethods`](../type-aliases/HttpMethods.md) |
| `url` | \`/$\{string\}\` |
| `__namedParameters` | [`ApiRequestOptions`](../interfaces/ApiRequestOptions.md) |

#### Returns

`Promise`\<`T`\>

#### Source

[seyfert/src/api/api.ts:72](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/api.ts#L72)

***

### routefy()

```ts
routefy(url: string, method: HttpMethods): `/${string}`
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `url` | `string` |
| `method` | [`HttpMethods`](../type-aliases/HttpMethods.md) |

#### Returns

\`/$\{string\}\`

#### Source

[seyfert/src/api/api.ts:392](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/api.ts#L392)

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

[seyfert/src/api/api.ts:310](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/api.ts#L310)

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

[seyfert/src/api/api.ts:289](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/api.ts#L289)
