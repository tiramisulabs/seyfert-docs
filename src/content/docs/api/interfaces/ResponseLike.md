---
editUrl: false
next: false
prev: false
title: "ResponseLike"
---

## Extends

- `Pick`\<`Response`, 
  \| `"arrayBuffer"`
  \| `"bodyUsed"`
  \| `"headers"`
  \| `"json"`
  \| `"ok"`
  \| `"status"`
  \| `"statusText"`
  \| `"text"`\>

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `arrayBuffer` | `readonly` | () => `Promise`\<`ArrayBuffer`\> | `Pick.arrayBuffer` |
| `body` | `public` | `null` \| `Readable` \| `ReadableStream`\<`any`\> | - |
| `bodyUsed` | `readonly` | `boolean` | `Pick.bodyUsed` |
| `headers` | `readonly` | `Headers` | `Pick.headers` |
| `json` | `readonly` | () => `Promise`\<`unknown`\> | `Pick.json` |
| `ok` | `readonly` | `boolean` | `Pick.ok` |
| `status` | `readonly` | `number` | `Pick.status` |
| `statusText` | `readonly` | `string` | `Pick.statusText` |
| `text` | `readonly` | () => `Promise`\<`string`\> | `Pick.text` |
