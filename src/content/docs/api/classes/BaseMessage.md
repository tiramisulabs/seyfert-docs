---
editUrl: false
next: false
prev: false
title: "BaseMessage"
---

## Extends

- `DiscordBase`.`ObjectToLower`\<`Omit`\<[`MessageData`](/api/type-aliases/messagedata/), `"timestamp"` \| `"author"` \| `"mentions"` \| `"components"`\>\>

## Constructors

### new BaseMessage(client, data)

```ts
new BaseMessage(client: BaseClient, data: MessageData): BaseMessage
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | `BaseClient` |
| `data` | [`MessageData`](/api/type-aliases/messagedata/) |

#### Returns

[`BaseMessage`](/api/classes/basemessage/)

#### Inherited from

`DiscordBase.constructor`

#### Source

[seyfert/src/structures/Message.ts:37](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Message.ts#L37)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `activity` | `public` | `undefined` \| `APIMessageActivity` | `ObjectToLower.activity` |
| `application` | `public` | `undefined` \| `Partial`\<`APIApplication`\> | `ObjectToLower.application` |
| `applicationId` | `public` | `undefined` \| `string` | `ObjectToLower.applicationId` |
| `attachments` | `public` | `Object`[] | `ObjectToLower.attachments` |
| `author` | `public` | [`User`](/api/classes/user/) | - |
| `channelId` | `public` | `string` | `ObjectToLower.channelId` |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | `DiscordBase.client` |
| `components` | `public` | `MessageActionRowComponent`\<`ActionRowMessageComponents`\>[] | - |
| `content` | `public` | `string` | `ObjectToLower.content` |
| `editedTimestamp` | `public` | `null` \| `string` | `ObjectToLower.editedTimestamp` |
| `embeds` | `public` | `Object`[] | `ObjectToLower.embeds` |
| `flags` | `public` | `undefined` \| `MessageFlags` | `ObjectToLower.flags` |
| `guildId` | `public` | `undefined` \| `string` | - |
| `id` | `public` | `string` | `DiscordBase.id` |
| `interaction` | `public` | `undefined` \| `APIMessageInteraction` | `ObjectToLower.interaction` |
| `member?` | `public` | [`GuildMember`](/api/classes/guildmember/) | - |
| `mentionChannels` | `public` | `undefined` \| `APIChannelMention`[] | `ObjectToLower.mentionChannels` |
| `mentionEveryone` | `public` | `boolean` | `ObjectToLower.mentionEveryone` |
| `mentionRoles` | `public` | `string`[] | `ObjectToLower.mentionRoles` |
| `mentions` | `public` | `Object` | - |
| `mentions.channels` | `public` | `APIChannelMention`[] | - |
| `mentions.roles` | `public` | `string`[] | - |
| `mentions.users` | `public` | ([`User`](/api/classes/user/) \| [`GuildMember`](/api/classes/guildmember/))[] | - |
| `messageReference` | `public` | `undefined` \| `APIMessageReference` | `ObjectToLower.messageReference` |
| `nonce` | `public` | `undefined` \| `string` \| `number` | `ObjectToLower.nonce` |
| `pinned` | `public` | `boolean` | `ObjectToLower.pinned` |
| `position` | `public` | `undefined` \| `number` | `ObjectToLower.position` |
| `reactions` | `public` | `undefined` \| `APIReaction`[] | `ObjectToLower.reactions` |
| `referencedMessage` | `public` | `undefined` \| `null` \| `APIMessage` | `ObjectToLower.referencedMessage` |
| `resolved` | `public` | `undefined` \| `APIInteractionDataResolved` | `ObjectToLower.resolved` |
| `roleSubscriptionData` | `public` | `undefined` \| `APIMessageRoleSubscriptionData` | `ObjectToLower.roleSubscriptionData` |
| `stickerItems` | `public` | `undefined` \| `APIStickerItem`[] | `ObjectToLower.stickerItems` |
| `stickers` | `public` | `undefined` \| `APISticker`[] | `ObjectToLower.stickers` |
| `thread` | `public` | `undefined` \| `APIChannel` | `ObjectToLower.thread` |
| `timestamp?` | `public` | `number` | - |
| `tts` | `public` | `boolean` | `ObjectToLower.tts` |
| `type` | `public` | `MessageType` | `ObjectToLower.type` |
| `webhookId` | `public` | `undefined` \| `string` | `ObjectToLower.webhookId` |

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

***

### url

```ts
get url(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/Message.ts:48](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Message.ts#L48)

## Methods

### channel()

```ts
channel(force: boolean): Promise<AllChannels>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

#### Source

[seyfert/src/structures/Message.ts:57](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Message.ts#L57)

***

### guild()

```ts
guild(force: boolean): Promise<undefined | Guild<"cached"> | Guild<"api">>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<`undefined` \| [`Guild`](/api/classes/guild/)\<`"cached"`\> \| [`Guild`](/api/classes/guild/)\<`"api"`\>\>

#### Source

[seyfert/src/structures/Message.ts:52](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Message.ts#L52)

***

### react()

```ts
react(emoji: EmojiResolvable): Promise<never>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `emoji` | `EmojiResolvable` |

#### Returns

`Promise`\<`never`\>

#### Source

[seyfert/src/structures/Message.ts:61](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Message.ts#L61)
