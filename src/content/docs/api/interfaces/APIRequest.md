---
editUrl: false
next: false
prev: false
title: "APIRequest"
---

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `data` | [`HandlerRequestData`](/api/type-aliases/handlerrequestdata/) | The data that was used to form the body of this request |
| `method` | `string` | The HTTP method used in this request |
| `options` | `RequestInit` | Additional HTTP options for this request |
| `path` | \`/${string}\` | The full path used to make the request |
| `retries` | `number` | The number of times this request has been attempted |
| `route` | `string` | The API route identifying the ratelimit for this request |
