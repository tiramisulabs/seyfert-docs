---
editUrl: false
next: false
prev: false
title: "RateLimitQueueFilter"
---

```ts
type RateLimitQueueFilter: (rateLimitData: RateLimitData) => Awaitable<boolean>;
```

A function that determines whether the rate limit hit should throw an Error

## Parameters

| Parameter | Type |
| :------ | :------ |
| `rateLimitData` | [`RateLimitData`](/api/interfaces/ratelimitdata/) |

## Returns

[`Awaitable`](/api/type-aliases/awaitable/)\<`boolean`\>

## Source

[seyfert/src/api/utils/types.ts:197](https://github.com/potoland/potocuit/blob/e332d7a/src/api/utils/types.ts#L197)
