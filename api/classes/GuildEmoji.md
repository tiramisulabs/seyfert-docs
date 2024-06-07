[seyfert](../globals.md) / GuildEmoji

# Class: GuildEmoji

## Extends

- `DiscordBase`.`ObjectToLower`\<`Omit`\<`APIEmoji`, `"id"`\>\>

## Constructors

### new GuildEmoji()

```ts
new GuildEmoji(
   client: UsingClient, 
   data: APIEmoji, 
   guildId: string): GuildEmoji
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `data` | `APIEmoji` |
| `guildId` | `string` |

#### Returns

[`GuildEmoji`](GuildEmoji.md)

#### Inherited from

`DiscordBase.constructor`

#### Source

[seyfert/src/structures/GuildEmoji.ts:10](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildEmoji.ts#L10)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `animated` | `public` | `undefined` \| `boolean` | `ObjectToLower.animated` |
| `available` | `public` | `undefined` \| `boolean` | `ObjectToLower.available` |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | `DiscordBase.client` |
| `guildId` | `readonly` | `string` | - |
| `id` | `public` | `string` | `DiscordBase.id` |
| `managed` | `public` | `undefined` \| `boolean` | `ObjectToLower.managed` |
| `name` | `public` | `null` \| `string` | `ObjectToLower.name` |
| `requireColons` | `public` | `undefined` \| `boolean` | `ObjectToLower.requireColons` |
| `roles` | `public` | `undefined` \| `string`[] | `ObjectToLower.roles` |
| `user` | `public` | `undefined` \| \{ `accentColor`: `undefined` \| `null` \| `number`; `avatar`: `null` \| `string`; `avatarDecoration`: `undefined` \| `null` \| `string`; `avatarDecorationData`: `undefined` \| `null` \| `APIAvatarDecorationData`; `banner`: `undefined` \| `null` \| `string`; `bot`: `undefined` \| `boolean`; `discriminator`: `string`; `email`: `undefined` \| `null` \| `string`; `flags`: `undefined` \| `UserFlags`; `globalName`: `null` \| `string`; `id`: `string`; `locale`: `undefined` \| `string`; `mfaEnabled`: `undefined` \| `boolean`; `premiumType`: `undefined` \| `UserPremiumType`; `publicFlags`: `undefined` \| `UserFlags`; `system`: `undefined` \| `boolean`; `username`: `string`; `verified`: `undefined` \| `boolean`; \} | `ObjectToLower.user` |

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
delete(reason?: string): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reason`? | `string` |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/structures/GuildEmoji.ts:27](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildEmoji.ts#L27)

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

`Promise`\<[`GuildEmoji`](GuildEmoji.md)\>

#### Source

[seyfert/src/structures/GuildEmoji.ts:23](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildEmoji.ts#L23)

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

`Promise`\<[`GuildEmoji`](GuildEmoji.md)\>

#### Source

[seyfert/src/structures/GuildEmoji.ts:31](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildEmoji.ts#L31)

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

[seyfert/src/structures/GuildEmoji.ts:18](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildEmoji.ts#L18)

***

### toJSON()

```ts
toJSON(): {
  animated: !!this.animated;
  id: string;
  name: null | string;
}
```

#### Returns

```ts
{
  animated: !!this.animated;
  id: string;
  name: null | string;
}
```

| Member | Type | Value |
| :------ | :------ | :------ |
| `animated` | `boolean` | !!this.animated |
| `id` | `string` | ... |
| `name` | `null` \| `string` | ... |

#### Source

[seyfert/src/structures/GuildEmoji.ts:43](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildEmoji.ts#L43)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/GuildEmoji.ts:39](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildEmoji.ts#L39)

***

### url()

```ts
url(options?: BaseCDNUrlOptions): string
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | [`BaseCDNUrlOptions`](../interfaces/BaseCDNUrlOptions.md) |

#### Returns

`string`

#### Source

[seyfert/src/structures/GuildEmoji.ts:35](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildEmoji.ts#L35)

***

### methods()

```ts
static methods(__namedParameters: {
  client: UsingClient;
  guildId: string;
 }): {
  create: (body: Omit<RESTPostAPIGuildEmojiJSONBody, "image"> & {
     image: ImageResolvable;
    }) => Promise<GuildEmoji>;
  edit: (emojiId: string, body: RESTPatchAPIGuildEmojiJSONBody, reason?: string) => Promise<GuildEmoji>;
  fetch: (emojiId: string, force: boolean) => Promise<GuildEmoji>;
  list: (force: boolean) => Promise<GuildEmoji[]>;
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
  create: (body: Omit<RESTPostAPIGuildEmojiJSONBody, "image"> & {
     image: ImageResolvable;
    }) => Promise<GuildEmoji>;
  edit: (emojiId: string, body: RESTPatchAPIGuildEmojiJSONBody, reason?: string) => Promise<GuildEmoji>;
  fetch: (emojiId: string, force: boolean) => Promise<GuildEmoji>;
  list: (force: boolean) => Promise<GuildEmoji[]>;
}
```

| Member | Type | Value |
| :------ | :------ | :------ |
| `create` | (`body`: `Omit`\<`RESTPostAPIGuildEmojiJSONBody`, `"image"`\> & \{
  `image`: `ImageResolvable`;
 \}) => `Promise`\<[`GuildEmoji`](GuildEmoji.md)\> | ... |
| `edit` | (`emojiId`: `string`, `body`: `RESTPatchAPIGuildEmojiJSONBody`, `reason`?: `string`) => `Promise`\<[`GuildEmoji`](GuildEmoji.md)\> | ... |
| `fetch` | (`emojiId`: `string`, `force`: `boolean`) => `Promise`\<[`GuildEmoji`](GuildEmoji.md)\> | ... |
| `list` | (`force`: `boolean`) => `Promise`\<[`GuildEmoji`](GuildEmoji.md)[]\> | ... |

#### Source

[seyfert/src/structures/GuildEmoji.ts:51](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildEmoji.ts#L51)
