---
editUrl: false
next: false
prev: false
title: "Attachment"
---

## Extends

- `ObjectToLower`\<`APIAttachment`\>.`Base`

## Constructors

### new Attachment(client, data)

```ts
new Attachment(client: BaseClient, data: APIAttachment): Attachment
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | `BaseClient` |
| `data` | `APIAttachment` |

#### Returns

[`Attachment`](/api/classes/attachment/)

#### Inherited from

`ObjectToLower<APIAttachment>.constructor`

#### Source

[seyfert/src/builders/Attachment.ts:29](https://github.com/potoland/potocuit/blob/fe122a1/src/builders/Attachment.ts#L29)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | - |
| `contentType` | `public` | `undefined` \| `string` | `ObjectToLower.contentType` |
| `data` | `public` | `APIAttachment` | - |
| `description` | `public` | `undefined` \| `string` | `ObjectToLower.description` |
| `durationSecs` | `public` | `undefined` \| `number` | `ObjectToLower.durationSecs` |
| `ephemeral` | `public` | `undefined` \| `boolean` | `ObjectToLower.ephemeral` |
| `filename` | `public` | `string` | `ObjectToLower.filename` |
| `flags` | `public` | `undefined` \| `IsRemix` | `ObjectToLower.flags` |
| `height` | `public` | `undefined` \| `null` \| `number` | `ObjectToLower.height` |
| `id` | `public` | `string` | `ObjectToLower.id` |
| `proxyUrl` | `public` | `string` | `ObjectToLower.proxyUrl` |
| `size` | `public` | `number` | `ObjectToLower.size` |
| `url` | `public` | `string` | `ObjectToLower.url` |
| `waveform` | `public` | `undefined` \| `string` | `ObjectToLower.waveform` |
| `width` | `public` | `undefined` \| `null` \| `number` | `ObjectToLower.width` |
