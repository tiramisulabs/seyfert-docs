---
editUrl: false
next: false
prev: false
title: "RequestData"
---

Represents possible data to be given to an endpoint

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `appendToFormData?` | `boolean` | Whether to append JSON data to form data instead of `payload_json` when sending files |
| `auth?` | `boolean` | If this request needs the `Authorization` header<br /><br />**Default Value**<br />`true` |
| `authPrefix?` | `"Bot"` \| `"Bearer"` | The authorization prefix to use for this request, useful if you use this with bearer tokens<br /><br />**Default Value**<br />`'Bot'` |
| `body?` | `unknown` | The body to send to this request.<br />If providing as BodyInit, set `passThroughBody: true` |
| `dispatcher?` | `Agent` | The [Agent](https://undici.nodejs.org/#/docs/api/Agent) to use for the request. |
| `files?` | [`RawFile`](/api/interfaces/rawfile/)[] | Files to be attached to this request |
| `headers?` | `Record`\<`string`, `string`\> | Additional headers to add to this request |
| `passThroughBody?` | `boolean` | Whether to pass-through the body property directly to `fetch()`.<br />`<warn>`This only applies when files is NOT present`</warn>` |
| `query?` | `URLSearchParams` | Query string parameters to append to the called endpoint |
| `reason?` | `string` | Reason to show in the audit logs |
| `signal?` | `AbortSignal` | The signal to abort the queue entry or the REST call, where applicable |
| `versioned?` | `boolean` | If this request should be versioned<br /><br />**Default Value**<br />`true` |
