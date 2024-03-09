---
editUrl: false
next: false
prev: false
title: "DefaultRestOptions"
---

```ts
const DefaultRestOptions: Object;
```

## Type declaration

| Member | Type | Value |
| :------ | :------ | :------ |
| `agent` | `null` | null |
| `api` | `string` | BASE\_URL |
| `authPrefix` | `string` | 'Bot' |
| `globalRequestsPerSecond` | `number` | 50 |
| `handlerSweepInterval` | `number` | 3\_600\_000 |
| `hashLifetime` | `number` | 86\_400\_000 |
| `hashSweepInterval` | `number` | 14\_400\_000 |
| `headers` | `Object` | \{} |
| `invalidRequestWarningInterval` | `number` | 0 |
| `offset` | `number` | 50 |
| `rejectOnRateLimit` | `null` | null |
| `retries` | `number` | 3 |
| `timeout` | `number` | 15\_000 |
| `version` | `string` | APIVersion |
| `makeRequest` | `Promise`\<`Response`\> | - |

## Source

[seyfert/src/api/utils/constants.ts:5](https://github.com/potoland/potocuit/blob/e332d7a/src/api/utils/constants.ts#L5)
