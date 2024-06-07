[seyfert](../globals.md) / Attachment

# Class: Attachment

## Extends

- `ObjectToLower`\<`APIAttachment`\>.`Base`

## Constructors

### new Attachment()

```ts
new Attachment(client: UsingClient, data: APIAttachment): Attachment
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `data` | `APIAttachment` |

#### Returns

[`Attachment`](Attachment.md)

#### Inherited from

`ObjectToLower<APIAttachment>.constructor`

#### Source

[seyfert/src/builders/Attachment.ts:28](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Attachment.ts#L28)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | - |
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
