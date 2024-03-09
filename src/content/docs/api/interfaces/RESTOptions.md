---
editUrl: false
next: false
prev: false
title: "RESTOptions"
---

Options to be passed when creating the REST instance

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `agent` | `null` \| `Dispatcher` | The agent to set globally |
| `api` | `string` | The base api path, without version<br /><br />**Default Value**<br />`'https://discord.com/api'` |
| `authPrefix` | `"Bot"` \| `"Bearer"` | The authorization prefix to use for requests, useful if you want to use<br />bearer tokens<br /><br />**Default Value**<br />`'Bot'` |
| `debug?` | `boolean` | - |
| `globalRequestsPerSecond` | `number` | How many requests to allow sending per second (Infinity for unlimited, 50 for the standard global limit used by Discord)<br /><br />**Default Value**<br />`50` |
| `handlerSweepInterval` | `number` | The amount of time in milliseconds that passes between each hash sweep. (defaults to 1h)<br /><br />**Default Value**<br />`3_600_000` |
| `hashLifetime` | `number` | The maximum amount of time a hash can exist in milliseconds without being hit with a request (defaults to 24h)<br /><br />**Default Value**<br />`86_400_000` |
| `hashSweepInterval` | `number` | The amount of time in milliseconds that passes between each hash sweep. (defaults to 4h)<br /><br />**Default Value**<br />`14_400_000` |
| `headers` | `Record`\<`string`, `string`\> | Additional headers to send for all API requests<br /><br />**Default Value**<br />`{}` |
| `invalidRequestWarningInterval` | `number` | The number of invalid REST requests (those that return 401, 403, or 429) in a 10 minute window between emitted warnings (0 for no warnings).<br />That is, if set to 500, warnings will be emitted at invalid request number 500, 1000, 1500, and so on.<br /><br />**Default Value**<br />`0` |
| `offset` | `number` | The extra offset to add to rate limits in milliseconds<br /><br />**Default Value**<br />`50` |
| `rejectOnRateLimit` | `null` \| `string`[] \| [`RateLimitQueueFilter`](/api/type-aliases/ratelimitqueuefilter/) | Determines how rate limiting and pre-emptive throttling should be handled.<br />When an array of strings, each element is treated as a prefix for the request route<br />(e.g. `/channels` to match any route starting with `/channels` such as `/channels/:id/messages`)<br />for which to throw [RateLimitError](../../../../../../api/classes/ratelimiterror)s. All other request routes will be queued normally<br /><br />**Default Value**<br />`null` |
| `retries` | `number` | The number of retries for errors with the 500 code, or errors<br />that timeout<br /><br />**Default Value**<br />`3` |
| `timeout` | `number` | The time to wait in milliseconds before a request is aborted<br /><br />**Default Value**<br />`15_000` |
| `token` | `string` | Token of app |
| `userAgentAppendix` | `string` | Extra information to add to the user agent<br /><br />**Default Value**<br />` DefaultUserAgentAppendix ` |
| `version` | `string` | The version of the API to use<br /><br />**Default Value**<br />`'10'` |

## Methods

### makeRequest()

```ts
makeRequest(url: string, init: RequestInit): Promise<ResponseLike>
```

The method called to perform the actual HTTP request given a url and web `fetch` options
For example, to use global fetch, simply provide `makeRequest: fetch`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `url` | `string` |
| `init` | `RequestInit` |

#### Returns

`Promise`\<[`ResponseLike`](/api/interfaces/responselike/)\>

#### Source

[seyfert/src/api/utils/types.ts:81](https://github.com/potoland/potocuit/blob/e332d7a/src/api/utils/types.ts#L81)
