---
editUrl: false
next: false
prev: false
title: "GuildEmoji"
---

## Extends

- `DiscordBase`.`ObjectToLower`\<`Omit`\<`APIEmoji`, `"id"`\>\>

## Constructors

### new GuildEmoji(client, data, guildId)

```ts
new GuildEmoji(
   client: BaseClient, 
   data: APIEmoji, 
   guildId: string): GuildEmoji
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | `BaseClient` |
| `data` | `APIEmoji` |
| `guildId` | `string` |

#### Returns

[`GuildEmoji`](/api/classes/guildemoji/)

#### Inherited from

`DiscordBase.constructor`

#### Source

[seyfert/src/structures/GuildEmoji.ts:16](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildEmoji.ts#L16)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `animated` | `public` | `undefined` \| `boolean` | `ObjectToLower.animated` |
| `available` | `public` | `undefined` \| `boolean` | `ObjectToLower.available` |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | `DiscordBase.client` |
| `guildId` | `readonly` | `string` | - |
| `id` | `public` | `string` | `DiscordBase.id` |
| `managed` | `public` | `undefined` \| `boolean` | `ObjectToLower.managed` |
| `name` | `public` | `null` \| `string` | `ObjectToLower.name` |
| `requireColons` | `public` | `undefined` \| `boolean` | `ObjectToLower.requireColons` |
| `roles` | `public` | `undefined` \| `string`[] | `ObjectToLower.roles` |
| `user` | `public` | `undefined` \| `APIUser` | `ObjectToLower.user` |

## Accessors

### createdAt

```ts
get createdAt(): Date
```

createdAt gets the creation Date instace of the current object.

#### Returns

`Date`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:27](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/extra/DiscordBase.ts#L27)

***

### createdTimestamp

```ts
get createdTimestamp(): number
```

Create a timestamp for the current object.

#### Returns

`number`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:20](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/extra/DiscordBase.ts#L20)

## Methods

### delete()

```ts
delete(reason?: string): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reason`? | `string` |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/structures/GuildEmoji.ts:33](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildEmoji.ts#L33)

***

### edit()

```ts
edit(body: RESTPatchAPIChannelJSONBody, reason?: string): Promise<GuildEmoji>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `RESTPatchAPIChannelJSONBody` |
| `reason`? | `string` |

#### Returns

`Promise`\<[`GuildEmoji`](/api/classes/guildemoji/)\>

#### Source

[seyfert/src/structures/GuildEmoji.ts:29](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildEmoji.ts#L29)

***

### fetch()

```ts
fetch(force: boolean): Promise<GuildEmoji>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<[`GuildEmoji`](/api/classes/guildemoji/)\>

#### Source

[seyfert/src/structures/GuildEmoji.ts:37](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildEmoji.ts#L37)

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

[seyfert/src/structures/GuildEmoji.ts:24](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildEmoji.ts#L24)

***

### toJSON()

```ts
toJSON(): Object
```

#### Returns

`Object`

| Member | Type | Value |
| :------ | :------ | :------ |
| `animated` | `boolean` | !!this.animated |
| `id` | `string` | - |
| `name` | `null` \| `string` | - |

#### Source

[seyfert/src/structures/GuildEmoji.ts:49](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildEmoji.ts#L49)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/GuildEmoji.ts:45](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildEmoji.ts#L45)

***

### url()

```ts
url(options?: BaseImageURLOptions): string
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | [`BaseImageURLOptions`](/api/interfaces/baseimageurloptions/) |

#### Returns

`string`

#### Source

[seyfert/src/structures/GuildEmoji.ts:41](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildEmoji.ts#L41)

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
| `create` | (`body`: `Omit`\<`RESTPostAPIGuildEmojiJSONBody`, `"image"`\> & `Object`) => `Promise`\<`void`\> | - |
| `edit` | (`emojiId`: `string`, `body`: `RESTPatchAPIGuildEmojiJSONBody`, `reason`?: `string`) => `Promise`\<[`GuildEmoji`](/api/classes/guildemoji/)\> | - |
| `fetch` | (`emojiId`: `string`, `force`: `boolean`) => `Promise`\<[`GuildEmoji`](/api/classes/guildemoji/)\> | - |
| `list` | (`force`: `boolean`) => `Promise`\<[`GuildEmoji`](/api/classes/guildemoji/)[]\> | - |

#### Source

[seyfert/src/structures/GuildEmoji.ts:57](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildEmoji.ts#L57)
