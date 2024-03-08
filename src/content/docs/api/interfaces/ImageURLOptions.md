---
editUrl: false
next: false
prev: false
title: "ImageURLOptions"
---

The options used for image URLs with animated content

## Extends

- [`BaseImageURLOptions`](/api/interfaces/baseimageurloptions/)

## Properties

| Property | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ |
| `extension?` |  \| `"jpeg"` \| `"png"` \| `"webp"` \| `"gif"` \| `"jpg"` | The extension to use for the image URL<br /><br />**Default Value**<br />`'webp'` | [`BaseImageURLOptions`](/api/interfaces/baseimageurloptions/).`extension` |
| `forceStatic?` | `boolean` | Whether or not to prefer the static version of an image asset. | - |
| `size?` |  \| `16` \| `256` \| `1024` \| `512` \| `32` \| `64` \| `128` \| `2048` \| `4096` | The size specified in the image URL | [`BaseImageURLOptions`](/api/interfaces/baseimageurloptions/).`size` |
