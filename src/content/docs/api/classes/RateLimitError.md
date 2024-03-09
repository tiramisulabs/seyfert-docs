---
editUrl: false
next: false
prev: false
title: "RateLimitError"
---

Data emitted on `RESTEvents.RateLimited`

## Extends

- `Error`

## Implements

- [`RateLimitData`](/api/interfaces/ratelimitdata/)

## Constructors

### new RateLimitError(__namedParameters)

```ts
new RateLimitError(__namedParameters: RateLimitData): RateLimitError
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`RateLimitData`](/api/interfaces/ratelimitdata/) |

#### Returns

[`RateLimitError`](/api/classes/ratelimiterror/)

#### Overrides

`Error.constructor`

#### Source

[seyfert/src/api/errors/RateLimitError.ts:26](https://github.com/potoland/potocuit/blob/e332d7a/src/api/errors/RateLimitError.ts#L26)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `cause?` | `public` | `unknown` | - | `Error.cause` |
| `global` | `public` | `boolean` | Whether the rate limit that was reached was the global limit | [`RateLimitData`](/api/interfaces/ratelimitdata/).`global` |
| `hash` | `public` | `string` | The bucket hash for this request | [`RateLimitData`](/api/interfaces/ratelimitdata/).`hash` |
| `limit` | `public` | `number` | The amount of requests we can perform before locking requests | [`RateLimitData`](/api/interfaces/ratelimitdata/).`limit` |
| `majorParameter` | `public` | `string` | The major parameter of the route<br /><br />For example, in `/channels/x`, this will be `x`.<br />If there is no major parameter (e.g: `/bot/gateway`) this will be `global`. | [`RateLimitData`](/api/interfaces/ratelimitdata/).`majorParameter` |
| `message` | `public` | `string` | - | `Error.message` |
| `method` | `public` | `string` | The HTTP method being performed | [`RateLimitData`](/api/interfaces/ratelimitdata/).`method` |
| `retryAfter` | `public` | `number` | The time, in milliseconds, that will need to pass before this specific request can be retried | [`RateLimitData`](/api/interfaces/ratelimitdata/).`retryAfter` |
| `route` | `public` | `string` | The route being hit in this request | [`RateLimitData`](/api/interfaces/ratelimitdata/).`route` |
| `scope` | `public` | `"shared"` \| `"global"` \| `"user"` | The scope of the rate limit that was hit.<br /><br />This can be `user` for rate limits that are per client, `global` for rate limits that affect all clients or `shared` for rate limits that<br />are shared per resource. | [`RateLimitData`](/api/interfaces/ratelimitdata/).`scope` |
| `stack?` | `public` | `string` | - | `Error.stack` |
| `sublimitTimeout` | `public` | `number` | The time, in milliseconds, that will need to pass before the sublimit lock for the route resets, and requests that fall under a sublimit<br />can be retried<br /><br />This is only present on certain sublimits, and `0` otherwise | [`RateLimitData`](/api/interfaces/ratelimitdata/).`sublimitTimeout` |
| `timeToReset` | `public` | `number` | The time, in milliseconds, until the route's request-lock is reset | [`RateLimitData`](/api/interfaces/ratelimitdata/).`timeToReset` |
| `url` | `public` | `string` | The full URL for this request | [`RateLimitData`](/api/interfaces/ratelimitdata/).`url` |
| `prepareStackTrace?` | `static` | (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any` | Optional override for formatting stack traces<br /><br />**See**<br />https://v8.dev/docs/stack-trace-api#customizing-stack-traces | `Error.prepareStackTrace` |
| `stackTraceLimit` | `static` | `number` | - | `Error.stackTraceLimit` |

## Accessors

### name

```ts
get name(): string
```

The name of the error

#### Returns

`string`

#### Source

[seyfert/src/api/errors/RateLimitError.ts:56](https://github.com/potoland/potocuit/blob/e332d7a/src/api/errors/RateLimitError.ts#L56)

## Methods

### captureStackTrace()

```ts
static captureStackTrace(targetObject: object, constructorOpt?: Function): void
```

Create .stack property on a target object

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt`? | `Function` |

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

#### Source

seyfert/node\_modules/.pnpm/@types+node@20.11.25/node\_modules/@types/node/globals.d.ts:21
