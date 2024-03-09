---
editUrl: false
next: false
prev: false
title: "DiscordAPIError"
---

Represents an API error returned by Discord

## Extends

- `Error`

## Constructors

### new DiscordAPIError(rawError, code, status, method, url, bodyData)

```ts
new DiscordAPIError(
   rawError: DiscordErrorData | OAuthErrorData, 
   code: string | number, 
   status: number, 
   method: string, 
   url: string, 
   bodyData: Pick<InternalRequest, "body" | "files">): DiscordAPIError
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `rawError` | [`DiscordErrorData`](/api/interfaces/discorderrordata/) \| [`OAuthErrorData`](/api/interfaces/oautherrordata/) | The error reported by Discord |
| `code` | `string` \| `number` | The error code reported by Discord |
| `status` | `number` | The status code of the response |
| `method` | `string` | The method of the request that erred |
| `url` | `string` | The url of the request that erred |
| `bodyData` | `Pick`\<`InternalRequest`, `"body"` \| `"files"`\> | The unparsed data for the request that errored |

#### Returns

[`DiscordAPIError`](/api/classes/discordapierror/)

#### Overrides

`Error.constructor`

#### Source

[seyfert/src/api/errors/DiscordAPIError.ts:52](https://github.com/potoland/potocuit/blob/e332d7a/src/api/errors/DiscordAPIError.ts#L52)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `cause?` | `public` | `unknown` | - | `Error.cause` |
| `code` | `public` | `string` \| `number` | The error code reported by Discord | - |
| `message` | `public` | `string` | - | `Error.message` |
| `method` | `public` | `string` | The method of the request that erred | - |
| `rawError` | `public` | [`DiscordErrorData`](/api/interfaces/discorderrordata/) \| [`OAuthErrorData`](/api/interfaces/oautherrordata/) | The error reported by Discord | - |
| `requestBody` | `public` | [`RequestBody`](/api/interfaces/requestbody/) | - | - |
| `stack?` | `public` | `string` | - | `Error.stack` |
| `status` | `public` | `number` | The status code of the response | - |
| `url` | `public` | `string` | The url of the request that erred | - |
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

[seyfert/src/api/errors/DiscordAPIError.ts:68](https://github.com/potoland/potocuit/blob/e332d7a/src/api/errors/DiscordAPIError.ts#L68)

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
