---
editUrl: false
next: false
prev: false
title: "Message"
---

## Extends

- [`BaseMessage`](/api/classes/basemessage/).`ObjectToLower`\<`Omit`\<[`MessageData`](/api/type-aliases/messagedata/), `"timestamp"` \| `"author"` \| `"mentions"` \| `"components"`\>\>

## Constructors

### new Message(client, data)

```ts
new Message(client: BaseClient, data: MessageData): Message
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | `BaseClient` |
| `data` | [`MessageData`](/api/type-aliases/messagedata/) |

#### Returns

[`Message`](/api/classes/message/)

#### Inherited from

[`BaseMessage`](/api/classes/basemessage/).[`constructor`](/api/classes/basemessage/#constructors)

#### Source

[seyfert/src/structures/Message.ts:113](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Message.ts#L113)

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
| `components` | `public` | `MessageActionRowComponent`\<[`ActionRowMessageComponents`](/api/type-aliases/actionrowmessagecomponents/)\>[] | [`BaseMessage`](/api/classes/basemessage/).`components` |
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
| `mentions.users` | `public` | ([`GuildMember`](/api/classes/guildmember/) \| [`User`](/api/classes/user/))[] | - |
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
| `timestamp?` | `public` | `number` | [`BaseMessage`](/api/classes/basemessage/).`timestamp` |
| `tts` | `public` | `boolean` | [`BaseMessage`](/api/classes/basemessage/).`tts` |
| `type` | `public` | `MessageType` | [`BaseMessage`](/api/classes/basemessage/).`type` |
| `webhookId` | `public` | `undefined` \| `string` | [`BaseMessage`](/api/classes/basemessage/).`webhookId` |

## Accessors

### createdAt

```ts
get createdAt(): Date
```

createdAt gets the creation Date instace of the current object.

#### Returns

`Date`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:27](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/extra/DiscordBase.ts#L27)

***

### createdTimestamp

```ts
get createdTimestamp(): number
```

Create a timestamp for the current object.

#### Returns

`number`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:20](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/extra/DiscordBase.ts#L20)

***

### url

```ts
get url(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/Message.ts:48](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Message.ts#L48)

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

[seyfert/src/structures/Message.ts:57](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Message.ts#L57)

***

### crosspost()

```ts
crosspost(reason?: string): Promise<Message>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reason`? | `string` |

#### Returns

`Promise`\<[`Message`](/api/classes/message/)\>

#### Source

[seyfert/src/structures/Message.ts:145](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Message.ts#L145)

***

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

[seyfert/src/structures/Message.ts:141](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Message.ts#L141)

***

### edit()

```ts
edit(body: Omit<RESTPatchAPIChannelMessageJSONBody, "components" | "embeds"> & ResolverProps): Promise<Message>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `Omit`\<`RESTPatchAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps` |

#### Returns

`Promise`\<[`Message`](/api/classes/message/)\>

#### Source

[seyfert/src/structures/Message.ts:133](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Message.ts#L133)

***

### fetch()

```ts
fetch(): Promise<Message>
```

#### Returns

`Promise`\<[`Message`](/api/classes/message/)\>

#### Source

[seyfert/src/structures/Message.ts:117](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Message.ts#L117)

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

#### Inherited from

[`BaseMessage`](/api/classes/basemessage/).[`guild`](/api/classes/basemessage/#guild)

#### Source

[seyfert/src/structures/Message.ts:52](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Message.ts#L52)

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

[seyfert/src/structures/Message.ts:61](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Message.ts#L61)

***

### reply()

```ts
reply(body: Omit<Omit<RESTPostAPIChannelMessageJSONBody, "components" | "embeds"> & ResolverProps, "message_reference">, fail: boolean): Promise<Message>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `body` | `Omit`\<`Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`, `"message_reference"`\> | `undefined` |
| `fail` | `boolean` | `true` |

#### Returns

`Promise`\<[`Message`](/api/classes/message/)\>

#### Source

[seyfert/src/structures/Message.ts:121](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Message.ts#L121)

***

### write()

```ts
write(body: Omit<RESTPostAPIChannelMessageJSONBody, "components" | "embeds"> & ResolverProps): Promise<Message>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps` |

#### Returns

`Promise`\<[`Message`](/api/classes/message/)\>

#### Source

[seyfert/src/structures/Message.ts:137](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Message.ts#L137)
