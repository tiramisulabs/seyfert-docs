---
editUrl: false
next: false
prev: false
title: "WebhookMessage"
---

## Extends

- [`BaseMessage`](/api/classes/basemessage/)

## Constructors

### new WebhookMessage(client, data, webhookId, webhookToken)

```ts
new WebhookMessage(
   client: BaseClient, 
   data: MessageData, 
   webhookId: string, 
   webhookToken: string): WebhookMessage
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | `BaseClient` |
| `data` | [`MessageData`](/api/type-aliases/messagedata/) |
| `webhookId` | `string` |
| `webhookToken` | `string` |

#### Returns

[`WebhookMessage`](/api/classes/webhookmessage/)

#### Overrides

[`BaseMessage`](/api/classes/basemessage/).[`constructor`](/api/classes/basemessage/#constructors)

#### Source

[seyfert/src/structures/Message.ts:154](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Message.ts#L154)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `activity` | `public` | `undefined` \| `APIMessageActivity` | [`BaseMessage`](/api/classes/basemessage/).`activity` |
| `application` | `public` | `undefined` \| `Partial`\<`APIApplication`\> | [`BaseMessage`](/api/classes/basemessage/).`application` |
| `applicationId` | `public` | `undefined` \| `string` | [`BaseMessage`](/api/classes/basemessage/).`applicationId` |
| `attachments` | `public` | `Object`[] | [`BaseMessage`](/api/classes/basemessage/).`attachments` |
| `author` | `public` | [`User`](/api/classes/user/) | [`BaseMessage`](/api/classes/basemessage/).`author` |
| `channelId` | `public` | `string` | [`BaseMessage`](/api/classes/basemessage/).`channelId` |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | [`BaseMessage`](/api/classes/basemessage/).`client` |
| `components` | `public` | `MessageActionRowComponent`\<`ActionRowMessageComponents`\>[] | [`BaseMessage`](/api/classes/basemessage/).`components` |
| `content` | `public` | `string` | [`BaseMessage`](/api/classes/basemessage/).`content` |
| `editedTimestamp` | `public` | `null` \| `string` | [`BaseMessage`](/api/classes/basemessage/).`editedTimestamp` |
| `embeds` | `public` | `Object`[] | [`BaseMessage`](/api/classes/basemessage/).`embeds` |
| `flags` | `public` | `undefined` \| `MessageFlags` | [`BaseMessage`](/api/classes/basemessage/).`flags` |
| `guildId` | `public` | `undefined` \| `string` | [`BaseMessage`](/api/classes/basemessage/).`guildId` |
| `id` | `public` | `string` | [`BaseMessage`](/api/classes/basemessage/).`id` |
| `interaction` | `public` | `undefined` \| `APIMessageInteraction` | [`BaseMessage`](/api/classes/basemessage/).`interaction` |
| `member?` | `public` | [`GuildMember`](/api/classes/guildmember/) | [`BaseMessage`](/api/classes/basemessage/).`member` |
| `mentionChannels` | `public` | `undefined` \| `APIChannelMention`[] | [`BaseMessage`](/api/classes/basemessage/).`mentionChannels` |
| `mentionEveryone` | `public` | `boolean` | [`BaseMessage`](/api/classes/basemessage/).`mentionEveryone` |
| `mentionRoles` | `public` | `string`[] | [`BaseMessage`](/api/classes/basemessage/).`mentionRoles` |
| `mentions` | `public` | `Object` | [`BaseMessage`](/api/classes/basemessage/).`mentions` |
| `mentions.channels` | `public` | `APIChannelMention`[] | - |
| `mentions.roles` | `public` | `string`[] | - |
| `mentions.users` | `public` | ([`User`](/api/classes/user/) \| [`GuildMember`](/api/classes/guildmember/))[] | - |
| `messageReference` | `public` | `undefined` \| `APIMessageReference` | [`BaseMessage`](/api/classes/basemessage/).`messageReference` |
| `nonce` | `public` | `undefined` \| `string` \| `number` | [`BaseMessage`](/api/classes/basemessage/).`nonce` |
| `pinned` | `public` | `boolean` | [`BaseMessage`](/api/classes/basemessage/).`pinned` |
| `position` | `public` | `undefined` \| `number` | [`BaseMessage`](/api/classes/basemessage/).`position` |
| `reactions` | `public` | `undefined` \| `APIReaction`[] | [`BaseMessage`](/api/classes/basemessage/).`reactions` |
| `referencedMessage` | `public` | `undefined` \| `null` \| `APIMessage` | [`BaseMessage`](/api/classes/basemessage/).`referencedMessage` |
| `resolved` | `public` | `undefined` \| `APIInteractionDataResolved` | [`BaseMessage`](/api/classes/basemessage/).`resolved` |
| `roleSubscriptionData` | `public` | `undefined` \| `APIMessageRoleSubscriptionData` | [`BaseMessage`](/api/classes/basemessage/).`roleSubscriptionData` |
| `stickerItems` | `public` | `undefined` \| `APIStickerItem`[] | [`BaseMessage`](/api/classes/basemessage/).`stickerItems` |
| `stickers` | `public` | `undefined` \| `APISticker`[] | [`BaseMessage`](/api/classes/basemessage/).`stickers` |
| `thread` | `public` | `undefined` \| `APIChannel` | [`BaseMessage`](/api/classes/basemessage/).`thread` |
| `timestamp?` | `readonly` | `number` | [`BaseMessage`](/api/classes/basemessage/).`timestamp` |
| `tts` | `readonly` | `boolean` | [`BaseMessage`](/api/classes/basemessage/).`tts` |
| `type` | `public` | `MessageType` | [`BaseMessage`](/api/classes/basemessage/).`type` |
| `webhookId` | `public` | `string` | [`BaseMessage`](/api/classes/basemessage/).`webhookId` |
| `webhookToken` | `public` | `string` | - |

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

#### Inherited from

[`BaseMessage`](/api/classes/basemessage/).[`channel`](/api/classes/basemessage/#channel)

#### Source

[seyfert/src/structures/Message.ts:57](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Message.ts#L57)

***

### delete()

```ts
delete(reason?: string): Promise<never>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reason`? | `string` |

#### Returns

`Promise`\<`never`\>

#### Source

[seyfert/src/structures/Message.ts:175](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Message.ts#L175)

***

### edit()

```ts
edit(body: EditMessageWebhook): Promise<WebhookMessage>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | [`EditMessageWebhook`](/api/type-aliases/editmessagewebhook/) |

#### Returns

`Promise`\<[`WebhookMessage`](/api/classes/webhookmessage/)\>

#### Source

[seyfert/src/structures/Message.ts:167](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Message.ts#L167)

***

### fetch()

```ts
fetch(): Promise<RESTGetAPIWebhookWithTokenResult>
```

#### Returns

`Promise`\<`RESTGetAPIWebhookWithTokenResult`\>

#### Source

[seyfert/src/structures/Message.ts:163](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Message.ts#L163)

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

#### Inherited from

[`BaseMessage`](/api/classes/basemessage/).[`guild`](/api/classes/basemessage/#guild)

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

#### Inherited from

[`BaseMessage`](/api/classes/basemessage/).[`react`](/api/classes/basemessage/#react)

#### Source

[seyfert/src/structures/Message.ts:61](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Message.ts#L61)

***

### write()

```ts
write(body:     Object): Promise<null | WebhookMessage>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `Object` |
| `body.body` | `Omit`\<`RESTPostAPIWebhookWithTokenJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps` |
| `body.query`? | `RESTPostAPIWebhookWithTokenQuery` |

#### Returns

`Promise`\<`null` \| [`WebhookMessage`](/api/classes/webhookmessage/)\>

#### Source

[seyfert/src/structures/Message.ts:171](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Message.ts#L171)
