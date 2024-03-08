---
editUrl: false
next: false
prev: false
title: "Sticker"
---

## Extends

- `DiscordBase`.`ObjectToLower`\<`Omit`\<`APISticker`, `"user"`\>\>

## Constructors

### new Sticker(client, data)

```ts
new Sticker(client: BaseClient, data: APISticker): Sticker
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | `BaseClient` |
| `data` | `APISticker` |

#### Returns

[`Sticker`](/api/classes/sticker/)

#### Inherited from

`DiscordBase.constructor`

#### Source

[seyfert/src/structures/Sticker.ts:17](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Sticker.ts#L17)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `asset` | `public` | `undefined` \| `""` | `ObjectToLower.asset` |
| `available` | `public` | `undefined` \| `boolean` | `ObjectToLower.available` |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | `DiscordBase.client` |
| `description` | `public` | `null` \| `string` | `ObjectToLower.description` |
| `formatType` | `public` | `StickerFormatType` | `ObjectToLower.formatType` |
| `guildId` | `public` | `undefined` \| `string` | `ObjectToLower.guildId` |
| `id` | `public` | `string` | `DiscordBase.id` |
| `name` | `public` | `string` | `ObjectToLower.name` |
| `packId` | `public` | `undefined` \| `string` | `ObjectToLower.packId` |
| `sortValue` | `public` | `undefined` \| `number` | `ObjectToLower.sortValue` |
| `tags` | `public` | `string` | `ObjectToLower.tags` |
| `type` | `public` | `StickerType` | `ObjectToLower.type` |
| `user?` | `public` | [`User`](/api/classes/user/) | - |

## Accessors

### createdAt

```ts
get createdAt(): Date
```

createdAt gets the creation Date instace of the current object.

#### Returns

`Date`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:27](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/DiscordBase.ts#L27)

***

### createdTimestamp

```ts
get createdTimestamp(): number
```

Create a timestamp for the current object.

#### Returns

`number`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:20](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/DiscordBase.ts#L20)

## Methods

### delete()

```ts
delete(reason?: string): undefined | Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reason`? | `string` |

#### Returns

`undefined` \| `Promise`\<`void`\>

#### Source

[seyfert/src/structures/Sticker.ts:39](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Sticker.ts#L39)

***

### edit()

```ts
edit(body: RESTPatchAPIGuildStickerJSONBody, reason?: string): undefined | Promise<Sticker>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `RESTPatchAPIGuildStickerJSONBody` |
| `reason`? | `string` |

#### Returns

`undefined` \| `Promise`\<[`Sticker`](/api/classes/sticker/)\>

#### Source

[seyfert/src/structures/Sticker.ts:29](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Sticker.ts#L29)

***

### fetch()

```ts
fetch(force: boolean): undefined | Promise<Sticker>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`undefined` \| `Promise`\<[`Sticker`](/api/classes/sticker/)\>

#### Source

[seyfert/src/structures/Sticker.ts:34](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Sticker.ts#L34)

***

### guild()

```ts
guild(force: boolean): undefined | Promise<Guild<"cached"> | Guild<"api">>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`undefined` \| `Promise`\<[`Guild`](/api/classes/guild/)\<`"cached"`\> \| [`Guild`](/api/classes/guild/)\<`"api"`\>\>

#### Source

[seyfert/src/structures/Sticker.ts:24](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Sticker.ts#L24)

***

### methods()

```ts
static methods(__namedParameters:     Object): Object
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.client` | `BaseClient` |
| `__namedParameters.guildId` | `string` |

#### Returns

`Object`

| Member | Type | Value |
| :------ | :------ | :------ |
| `create` | (`payload`: [`CreateStickerBodyRequest`](/api/interfaces/createstickerbodyrequest/), `reason`?: `string`) => `Promise`\<[`Sticker`](/api/classes/sticker/)\> | - |
| `delete` | (`stickerId`: `string`, `reason`?: `string`) => `Promise`\<`void`\> | - |
| `edit` | (`stickerId`: `string`, `body`: `RESTPatchAPIGuildStickerJSONBody`, `reason`?: `string`) => `Promise`\<[`Sticker`](/api/classes/sticker/)\> | - |
| `fetch` | (`stickerId`: `string`, `force`: `boolean`) => `Promise`\<[`Sticker`](/api/classes/sticker/)\> | - |
| `list` | () => `Promise`\<[`Sticker`](/api/classes/sticker/)[]\> | - |

#### Source

[seyfert/src/structures/Sticker.ts:44](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Sticker.ts#L44)
