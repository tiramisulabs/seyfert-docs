---
editUrl: false
next: false
prev: false
title: "RateLimitData"
---

Data emitted on `RESTEvents.RateLimited`

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `global` | `boolean` | Whether the rate limit that was reached was the global limit |
| `hash` | `string` | The bucket hash for this request |
| `limit` | `number` | The amount of requests we can perform before locking requests |
| `majorParameter` | `string` | The major parameter of the route<br /><br />For example, in `/channels/x`, this will be `x`.<br />If there is no major parameter (e.g: `/bot/gateway`) this will be `global`. |
| `method` | `string` | The HTTP method being performed |
| `retryAfter` | `number` | The time, in milliseconds, that will need to pass before this specific request can be retried |
| `route` | `string` | The route being hit in this request |
| `scope` | `"shared"` \| `"global"` \| `"user"` | The scope of the rate limit that was hit.<br /><br />This can be `user` for rate limits that are per client, `global` for rate limits that affect all clients or `shared` for rate limits that<br />are shared per resource. |
| `sublimitTimeout` | `number` | The time, in milliseconds, that will need to pass before the sublimit lock for the route resets, and requests that fall under a sublimit<br />can be retried<br /><br />This is only present on certain sublimits, and `0` otherwise |
| `timeToReset` | `number` | The time, in milliseconds, until the route's request-lock is reset |
| `url` | `string` | The full URL for this request |
