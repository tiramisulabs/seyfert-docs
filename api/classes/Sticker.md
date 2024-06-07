[seyfert](../globals.md) / Sticker

# Class: Sticker

## Extends

- `DiscordBase`.`ObjectToLower`\<`Omit`\<`APISticker`, `"user"`\>\>

## Constructors

### new Sticker()

```ts
new Sticker(client: UsingClient, data: APISticker): Sticker
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `data` | `APISticker` |

#### Returns

[`Sticker`](Sticker.md)

#### Inherited from

`DiscordBase.constructor`

#### Source

[seyfert/src/structures/Sticker.ts:16](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Sticker.ts#L16)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `asset` | `public` | `undefined` \| `""` | `ObjectToLower.asset` |
| `available` | `public` | `undefined` \| `boolean` | `ObjectToLower.available` |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | `DiscordBase.client` |
| `description` | `public` | `null` \| `string` | `ObjectToLower.description` |
| `formatType` | `public` | `StickerFormatType` | `ObjectToLower.formatType` |
| `guildId` | `public` | `undefined` \| `string` | `ObjectToLower.guildId` |
| `id` | `public` | `string` | `DiscordBase.id` |
| `name` | `public` | `string` | `ObjectToLower.name` |
| `packId` | `public` | `undefined` \| `string` | `ObjectToLower.packId` |
| `sortValue` | `public` | `undefined` \| `number` | `ObjectToLower.sortValue` |
| `tags` | `public` | `string` | `ObjectToLower.tags` |
| `type` | `public` | `StickerType` | `ObjectToLower.type` |
| `user?` | `public` | [`User`](User.md) | - |

## Accessors

### createdAt

```ts
get createdAt(): Date
```

createdAt gets the creation Date instace of the current object.

#### Returns

`Date`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:27](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/DiscordBase.ts#L27)

***

### createdTimestamp

```ts
get createdTimestamp(): number
```

Create a timestamp for the current object.

#### Returns

`number`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:20](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/DiscordBase.ts#L20)

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

[seyfert/src/structures/Sticker.ts:38](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Sticker.ts#L38)

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

`undefined` \| `Promise`\<[`Sticker`](Sticker.md)\>

#### Source

[seyfert/src/structures/Sticker.ts:28](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Sticker.ts#L28)

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

`undefined` \| `Promise`\<[`Sticker`](Sticker.md)\>

#### Source

[seyfert/src/structures/Sticker.ts:33](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Sticker.ts#L33)

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

`undefined` \| `Promise`\<[`Guild`](Guild.md)\<`"cached"`\> \| [`Guild`](Guild.md)\<`"api"`\>\>

#### Source

[seyfert/src/structures/Sticker.ts:23](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Sticker.ts#L23)

***

### methods()

```ts
static methods(__namedParameters: {
  client: UsingClient;
  guildId: string;
 }): {
  create: (payload: CreateStickerBodyRequest, reason?: string) => Promise<Sticker>;
  delete: (stickerId: string, reason?: string) => Promise<void>;
  edit: (stickerId: string, body: RESTPatchAPIGuildStickerJSONBody, reason?: string) => Promise<Sticker>;
  fetch: (stickerId: string, force: boolean) => Promise<Sticker>;
  list: () => Promise<Sticker[]>;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | `object` |
| `__namedParameters.client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `__namedParameters.guildId` | `string` |

#### Returns

```ts
{
  create: (payload: CreateStickerBodyRequest, reason?: string) => Promise<Sticker>;
  delete: (stickerId: string, reason?: string) => Promise<void>;
  edit: (stickerId: string, body: RESTPatchAPIGuildStickerJSONBody, reason?: string) => Promise<Sticker>;
  fetch: (stickerId: string, force: boolean) => Promise<Sticker>;
  list: () => Promise<Sticker[]>;
}
```

| Member | Type | Value |
| :------ | :------ | :------ |
| `create` | (`payload`: [`CreateStickerBodyRequest`](../interfaces/CreateStickerBodyRequest.md), `reason`?: `string`) => `Promise`\<[`Sticker`](Sticker.md)\> | ... |
| `delete` | (`stickerId`: `string`, `reason`?: `string`) => `Promise`\<`void`\> | ... |
| `edit` | (`stickerId`: `string`, `body`: `RESTPatchAPIGuildStickerJSONBody`, `reason`?: `string`) => `Promise`\<[`Sticker`](Sticker.md)\> | ... |
| `fetch` | (`stickerId`: `string`, `force`: `boolean`) => `Promise`\<[`Sticker`](Sticker.md)\> | ... |
| `list` | () => `Promise`\<[`Sticker`](Sticker.md)[]\> | ... |

#### Source

[seyfert/src/structures/Sticker.ts:43](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Sticker.ts#L43)
