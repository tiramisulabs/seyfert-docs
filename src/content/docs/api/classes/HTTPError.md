---
editUrl: false
next: false
prev: false
title: "HTTPError"
---

Represents a HTTP error

## Extends

- `Error`

## Constructors

### new HTTPError(status, statusText, method, url, bodyData)

```ts
new HTTPError(
   status: number, 
   statusText: string, 
   method: string, 
   url: string, 
   bodyData: Pick<InternalRequest, "body" | "files">): HTTPError
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `status` | `number` | The status code of the response |
| `statusText` | `string` | The status text of the response |
| `method` | `string` | The method of the request that erred |
| `url` | `string` | The url of the request that erred |
| `bodyData` | `Pick`\<`InternalRequest`, `"body"` \| `"files"`\> | The unparsed data for the request that errored |

#### Returns

[`HTTPError`](/api/classes/httperror/)

#### Overrides

`Error.constructor`

#### Source

[seyfert/src/api/errors/HTTPError.ts:19](https://github.com/potoland/potocuit/blob/e332d7a/src/api/errors/HTTPError.ts#L19)

## Properties

| Property | Modifier | Type | Description | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `cause?` | `public` | `unknown` | - | `Error.cause` | `Error.cause` |
| `message` | `public` | `string` | - | `Error.message` | `Error.message` |
| `method` | `public` | `string` | The method of the request that erred | - | - |
| `name` | `public` | `string` | - | `Error.name` | `Error.name` |
| `requestBody` | `public` | [`RequestBody`](/api/interfaces/requestbody/) | - | - | - |
| `stack?` | `public` | `string` | - | `Error.stack` | `Error.stack` |
| `status` | `public` | `number` | The status code of the response | - | - |
| `url` | `public` | `string` | The url of the request that erred | - | - |
| `prepareStackTrace?` | `static` | (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any` | Optional override for formatting stack traces<br /><br />**See**<br />https://v8.dev/docs/stack-trace-api#customizing-stack-traces | `Error.prepareStackTrace` | `Error.prepareStackTrace` |
| `stackTraceLimit` | `static` | `number` | - | `Error.stackTraceLimit` | `Error.stackTraceLimit` |

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
