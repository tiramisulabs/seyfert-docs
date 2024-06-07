[seyfert](../globals.md) / Message

# Class: Message

## Extends

- [`BaseMessage`](BaseMessage.md).`ObjectToLower`\<`Omit`\<[`MessageData`](../type-aliases/MessageData.md), 
  \| `"timestamp"`
  \| `"author"`
  \| `"mentions"`
  \| `"components"`
  \| `"poll"`
  \| `"embeds"`\>\>

## Constructors

### new Message()

```ts
new Message(client: UsingClient, data: MessageData): Message
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `data` | [`MessageData`](../type-aliases/MessageData.md) |

#### Returns

[`Message`](Message.md)

#### Inherited from

[`BaseMessage`](BaseMessage.md).[`constructor`](BaseMessage.md#constructors)

#### Source

[seyfert/src/structures/Message.ts:121](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L121)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `activity` | `public` | `undefined` \| \{ `partyId`: `undefined` \| `string`; `type`: `MessageActivityType`; \} | [`BaseMessage`](BaseMessage.md).`activity` |
| `application` | `public` | `undefined` \| \{ `approximateGuildCount`: `undefined` \| `number`; `bot`: `undefined` \| `APIUser`; `botPublic`: `undefined` \| `boolean`; `botRequireCodeGrant`: `undefined` \| `boolean`; `coverImage`: `undefined` \| `string`; `customInstallUrl`: `undefined` \| `string`; `description`: `undefined` \| `string`; `flags`: `undefined` \| `ApplicationFlags`; `guild`: `undefined` \| `APIPartialGuild`; `guildId`: `undefined` \| `string`; `icon`: `undefined` \| `null` \| `string`; `id`: `undefined` \| `string`; `installParams`: `undefined` \| `APIApplicationInstallParams`; `integrationTypesConfig`: `undefined` \| `APIApplicationIntegrationTypesConfigMap`; `interactionsEndpointUrl`: `undefined` \| `string`; `name`: `undefined` \| `string`; `owner`: `undefined` \| `APIUser`; `primarySkuId`: `undefined` \| `string`; `privacyPolicyUrl`: `undefined` \| `string`; `redirectUris`: `undefined` \| `string`[]; `roleConnectionsVerificationUrl`: `undefined` \| `string`; `rpcOrigins`: `undefined` \| `string`[]; `slug`: `undefined` \| `string`; `summary`: `undefined` \| `""`; `tags`: `undefined` \| [`string`, `string?`, `string?`, `string?`, `string?`]; `team`: `undefined` \| `null` \| `APITeam`; `termsOfServiceUrl`: `undefined` \| `string`; `verifyKey`: `undefined` \| `string`; \} | [`BaseMessage`](BaseMessage.md).`application` |
| `applicationId` | `public` | `undefined` \| `string` | [`BaseMessage`](BaseMessage.md).`applicationId` |
| `attachments` | `public` | \{ `contentType`: `undefined` \| `string`; `description`: `undefined` \| `string`; `durationSecs`: `undefined` \| `number`; `ephemeral`: `undefined` \| `boolean`; `filename`: `string`; `flags`: `undefined` \| `IsRemix`; `height`: `undefined` \| `null` \| `number`; `id`: `string`; `proxyUrl`: `string`; `size`: `number`; `url`: `string`; `waveform`: `undefined` \| `string`; `width`: `undefined` \| `null` \| `number`; \}[] | [`BaseMessage`](BaseMessage.md).`attachments` |
| `author` | `public` | [`User`](User.md) | [`BaseMessage`](BaseMessage.md).`author` |
| `call` | `public` | `undefined` \| \{ `endedTimestamp`: `undefined` \| `null` \| `string`; `participants`: `string`[]; \} | [`BaseMessage`](BaseMessage.md).`call` |
| `channelId` | `public` | `string` | [`BaseMessage`](BaseMessage.md).`channelId` |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | [`BaseMessage`](BaseMessage.md).`client` |
| `components` | `public` | `MessageActionRowComponent`\<[`ActionRowMessageComponents`](../type-aliases/ActionRowMessageComponents.md)\>[] | [`BaseMessage`](BaseMessage.md).`components` |
| `content` | `public` | `string` | [`BaseMessage`](BaseMessage.md).`content` |
| `editedTimestamp` | `public` | `null` \| `string` | [`BaseMessage`](BaseMessage.md).`editedTimestamp` |
| `embeds` | `public` | [`InMessageEmbed`](InMessageEmbed.md)[] | [`BaseMessage`](BaseMessage.md).`embeds` |
| `flags` | `public` | `undefined` \| `MessageFlags` | [`BaseMessage`](BaseMessage.md).`flags` |
| `guildId?` | `public` | `string` | [`BaseMessage`](BaseMessage.md).`guildId` |
| `id` | `public` | `string` | [`BaseMessage`](BaseMessage.md).`id` |
| `interaction` | `public` | `undefined` \| \{ `id`: `string`; `member`: `undefined` \| `PartialAPIMessageInteractionGuildMember`; `name`: `string`; `type`: `InteractionType`; `user`: \{ `accentColor`: `undefined` \| `null` \| `number`; `avatar`: `null` \| `string`; `avatarDecoration`: `undefined` \| `null` \| `string`; `avatarDecorationData`: `undefined` \| `null` \| \{ `asset`: `string`; `skuId`: `string`; \}; `banner`: `undefined` \| `null` \| `string`; `bot`: `undefined` \| `boolean`; `discriminator`: `string`; `email`: `undefined` \| `null` \| `string`; `flags`: `undefined` \| `UserFlags`; `globalName`: `null` \| `string`; `id`: `string`; `locale`: `undefined` \| `string`; `mfaEnabled`: `undefined` \| `boolean`; `premiumType`: `undefined` \| `UserPremiumType`; `publicFlags`: `undefined` \| `UserFlags`; `system`: `undefined` \| `boolean`; `username`: `string`; `verified`: `undefined` \| `boolean`; \}; \} | [`BaseMessage`](BaseMessage.md).`interaction` |
| `interactionMetadata` | `public` | `undefined` \| \{ `authorizingIntegrationOwners`: \{\}; `id`: `string`; `interactedMessageId`: `undefined` \| `string`; `originalResponseMessageId`: `undefined` \| `string`; `triggeringInteractionMetadata`: `undefined` \| `APIMessageInteractionMetadata`; `type`: `InteractionType`; `user`: \{ `accentColor`: `undefined` \| `null` \| `number`; `avatar`: `null` \| `string`; `avatarDecoration`: `undefined` \| `null` \| `string`; `avatarDecorationData`: `undefined` \| `null` \| \{ `asset`: `string`; `skuId`: `string`; \}; `banner`: `undefined` \| `null` \| `string`; `bot`: `undefined` \| `boolean`; `discriminator`: `string`; `email`: `undefined` \| `null` \| `string`; `flags`: `undefined` \| `UserFlags`; `globalName`: `null` \| `string`; `id`: `string`; `locale`: `undefined` \| `string`; `mfaEnabled`: `undefined` \| `boolean`; `premiumType`: `undefined` \| `UserPremiumType`; `publicFlags`: `undefined` \| `UserFlags`; `system`: `undefined` \| `boolean`; `username`: `string`; `verified`: `undefined` \| `boolean`; \}; \} | [`BaseMessage`](BaseMessage.md).`interactionMetadata` |
| `member?` | `public` | [`GuildMember`](GuildMember.md) | [`BaseMessage`](BaseMessage.md).`member` |
| `mentionChannels` | `public` | `undefined` \| \{ `guildId`: `string`; `id`: `string`; `name`: `string`; `type`: `ChannelType`; \}[] | [`BaseMessage`](BaseMessage.md).`mentionChannels` |
| `mentionEveryone` | `public` | `boolean` | [`BaseMessage`](BaseMessage.md).`mentionEveryone` |
| `mentionRoles` | `public` | `string`[] | [`BaseMessage`](BaseMessage.md).`mentionRoles` |
| `mentions` | `public` | \{ `channels`: `APIChannelMention`[]; `roles`: `string`[]; `users`: ([`GuildMember`](GuildMember.md) \| [`User`](User.md))[]; \} | [`BaseMessage`](BaseMessage.md).`mentions` |
| `mentions.channels` | `public` | `APIChannelMention`[] | - |
| `mentions.roles` | `public` | `string`[] | - |
| `mentions.users` | `public` | ([`GuildMember`](GuildMember.md) \| [`User`](User.md))[] | - |
| `messageReference` | `public` | `undefined` \| \{ `channelId`: `string`; `guildId`: `undefined` \| `string`; `messageId`: `undefined` \| `string`; \} | [`BaseMessage`](BaseMessage.md).`messageReference` |
| `nonce` | `public` | `undefined` \| `string` \| `number` | [`BaseMessage`](BaseMessage.md).`nonce` |
| `pinned` | `public` | `boolean` | [`BaseMessage`](BaseMessage.md).`pinned` |
| `poll?` | `public` | [`Poll`](Poll.md) | [`BaseMessage`](BaseMessage.md).`poll` |
| `position` | `public` | `undefined` \| `number` | [`BaseMessage`](BaseMessage.md).`position` |
| `reactions` | `public` | `undefined` \| \{ `burstColors`: `string`[]; `count`: `number`; `countDetails`: \{ `burst`: `number`; `normal`: `number`; \}; `emoji`: \{ `animated`: `undefined` \| `boolean`; `id`: `null` \| `string`; `name`: `null` \| `string`; \}; `me`: `boolean`; `meBurst`: `boolean`; \}[] | [`BaseMessage`](BaseMessage.md).`reactions` |
| `referencedMessage` | `public` | `undefined` \| `null` \| \{ `activity`: `undefined` \| `APIMessageActivity`; `application`: `undefined` \| `Partial`\<`APIApplication`\>; `applicationId`: `undefined` \| `string`; `attachments`: \{ `contentType`: `undefined` \| `string`; `description`: `undefined` \| `string`; `durationSecs`: `undefined` \| `number`; `ephemeral`: `undefined` \| `boolean`; `filename`: `string`; `flags`: `undefined` \| `IsRemix`; `height`: `undefined` \| `null` \| `number`; `id`: `string`; `proxyUrl`: `string`; `size`: `number`; `url`: `string`; `waveform`: `undefined` \| `string`; `width`: `undefined` \| `null` \| `number`; \}[]; `author`: \{ `accentColor`: `undefined` \| `null` \| `number`; `avatar`: `null` \| `string`; `avatarDecoration`: `undefined` \| `null` \| `string`; `avatarDecorationData`: `undefined` \| `null` \| \{ `asset`: `string`; `skuId`: `string`; \}; `banner`: `undefined` \| `null` \| `string`; `bot`: `undefined` \| `boolean`; `discriminator`: `string`; `email`: `undefined` \| `null` \| `string`; `flags`: `undefined` \| `UserFlags`; `globalName`: `null` \| `string`; `id`: `string`; `locale`: `undefined` \| `string`; `mfaEnabled`: `undefined` \| `boolean`; `premiumType`: `undefined` \| `UserPremiumType`; `publicFlags`: `undefined` \| `UserFlags`; `system`: `undefined` \| `boolean`; `username`: `string`; `verified`: `undefined` \| `boolean`; \}; `call`: `undefined` \| `APIMessageCall`; `channelId`: `string`; `components`: `undefined` \| `APIActionRowComponent`\<`APIMessageActionRowComponent`\>[]; `content`: `string`; `editedTimestamp`: `null` \| `string`; `embeds`: \{ `author`: `undefined` \| \{ `iconUrl`: `undefined` \| `string`; `name`: `string`; `proxyIconUrl`: `undefined` \| `string`; `url`: `undefined` \| `string`; \}; `color`: `undefined` \| `number`; `description`: `undefined` \| `string`; `fields`: `undefined` \| \{ `inline`: `undefined` \| `boolean`; `name`: `string`; `value`: `string`; \}[]; `footer`: `undefined` \| \{ `iconUrl`: `undefined` \| `string`; `proxyIconUrl`: `undefined` \| `string`; `text`: `string`; \}; `image`: `undefined` \| \{ `height`: `undefined` \| `number`; `proxyUrl`: `undefined` \| `string`; `url`: `string`; `width`: `undefined` \| `number`; \}; `provider`: `undefined` \| \{ `name`: `undefined` \| `string`; `url`: `undefined` \| `string`; \}; `thumbnail`: `undefined` \| \{ `height`: `undefined` \| `number`; `proxyUrl`: `undefined` \| `string`; `url`: `string`; `width`: `undefined` \| `number`; \}; `timestamp`: `undefined` \| `string`; `title`: `undefined` \| `string`; `type`: `undefined` \| `EmbedType`; `url`: `undefined` \| `string`; `video`: `undefined` \| \{ `height`: `undefined` \| `number`; `proxyUrl`: `undefined` \| `string`; `url`: `undefined` \| `string`; `width`: `undefined` \| `number`; \}; \}[]; `flags`: `undefined` \| `MessageFlags`; `id`: `string`; `interaction`: `undefined` \| `APIMessageInteraction`; `interactionMetadata`: `undefined` \| `APIMessageInteractionMetadata`; `mentionChannels`: `undefined` \| `APIChannelMention`[]; `mentionEveryone`: `boolean`; `mentionRoles`: `string`[]; `mentions`: \{ `accentColor`: `undefined` \| `null` \| `number`; `avatar`: `null` \| `string`; `avatarDecoration`: `undefined` \| `null` \| `string`; `avatarDecorationData`: `undefined` \| `null` \| \{ `asset`: `string`; `skuId`: `string`; \}; `banner`: `undefined` \| `null` \| `string`; `bot`: `undefined` \| `boolean`; `discriminator`: `string`; `email`: `undefined` \| `null` \| `string`; `flags`: `undefined` \| `UserFlags`; `globalName`: `null` \| `string`; `id`: `string`; `locale`: `undefined` \| `string`; `mfaEnabled`: `undefined` \| `boolean`; `premiumType`: `undefined` \| `UserPremiumType`; `publicFlags`: `undefined` \| `UserFlags`; `system`: `undefined` \| `boolean`; `username`: `string`; `verified`: `undefined` \| `boolean`; \}[]; `messageReference`: `undefined` \| `APIMessageReference`; `nonce`: `undefined` \| `string` \| `number`; `pinned`: `boolean`; `poll`: `undefined` \| `APIPoll`; `position`: `undefined` \| `number`; `reactions`: `undefined` \| `APIReaction`[]; `referencedMessage`: `undefined` \| `null` \| `APIMessage`; `resolved`: `undefined` \| `APIInteractionDataResolved`; `roleSubscriptionData`: `undefined` \| `APIMessageRoleSubscriptionData`; `stickerItems`: `undefined` \| `APIStickerItem`[]; `stickers`: `undefined` \| `APISticker`[]; `thread`: `undefined` \| `APIChannel`; `timestamp`: `string`; `tts`: `boolean`; `type`: `MessageType`; `webhookId`: `undefined` \| `string`; \} | [`BaseMessage`](BaseMessage.md).`referencedMessage` |
| `resolved` | `public` | `undefined` \| \{ `attachments`: `undefined` \| `Record`\<`string`, `APIAttachment`\>; `channels`: `undefined` \| `Record`\<`string`, `APIInteractionDataResolvedChannel`\>; `members`: `undefined` \| `Record`\<`string`, `APIInteractionDataResolvedGuildMember`\>; `roles`: `undefined` \| `Record`\<`string`, `APIRole`\>; `users`: `undefined` \| `Record`\<`string`, `APIUser`\>; \} | [`BaseMessage`](BaseMessage.md).`resolved` |
| `roleSubscriptionData` | `public` | `undefined` \| \{ `isRenewal`: `boolean`; `roleSubscriptionListingId`: `string`; `tierName`: `string`; `totalMonthsSubscribed`: `number`; \} | [`BaseMessage`](BaseMessage.md).`roleSubscriptionData` |
| `stickerItems` | `public` | `undefined` \| \{ `formatType`: `StickerFormatType`; `id`: `string`; `name`: `string`; \}[] | [`BaseMessage`](BaseMessage.md).`stickerItems` |
| `stickers` | `public` | `undefined` \| \{ `asset`: `undefined` \| `""`; `available`: `undefined` \| `boolean`; `description`: `null` \| `string`; `formatType`: `StickerFormatType`; `guildId`: `undefined` \| `string`; `id`: `string`; `name`: `string`; `packId`: `undefined` \| `string`; `sortValue`: `undefined` \| `number`; `tags`: `string`; `type`: `StickerType`; `user`: `undefined` \| \{ `accentColor`: `undefined` \| `null` \| `number`; `avatar`: `null` \| `string`; `avatarDecoration`: `undefined` \| `null` \| `string`; `avatarDecorationData`: `undefined` \| `null` \| `APIAvatarDecorationData`; `banner`: `undefined` \| `null` \| `string`; `bot`: `undefined` \| `boolean`; `discriminator`: `string`; `email`: `undefined` \| `null` \| `string`; `flags`: `undefined` \| `UserFlags`; `globalName`: `null` \| `string`; `id`: `string`; `locale`: `undefined` \| `string`; `mfaEnabled`: `undefined` \| `boolean`; `premiumType`: `undefined` \| `UserPremiumType`; `publicFlags`: `undefined` \| `UserFlags`; `system`: `undefined` \| `boolean`; `username`: `string`; `verified`: `undefined` \| `boolean`; \}; \}[] | [`BaseMessage`](BaseMessage.md).`stickers` |
| `thread` | `public` |  \| `undefined` \| \{ `flags`: `undefined` \| `ChannelFlags`; `id`: `string`; `lastMessageId`: `undefined` \| `null` \| `string`; `lastPinTimestamp`: `undefined` \| `null` \| `string`; `name`: `null`; `recipients`: `undefined` \| `APIUser`[]; `type`: `DM`; \} \| \{ `applicationId`: `undefined` \| `string`; `flags`: `undefined` \| `ChannelFlags`; `icon`: `undefined` \| `null` \| `string`; `id`: `string`; `lastMessageId`: `undefined` \| `null` \| `string`; `lastPinTimestamp`: `undefined` \| `null` \| `string`; `managed`: `undefined` \| `boolean`; `name`: `null` \| `string`; `ownerId`: `undefined` \| `string`; `recipients`: `undefined` \| `APIUser`[]; `type`: `GroupDM`; \} \| \{ `flags`: `undefined` \| `ChannelFlags`; `guildId`: `undefined` \| `string`; `id`: `string`; `name`: `string`; `nsfw`: `undefined` \| `boolean`; `parentId`: `undefined` \| `null` \| `string`; `permissionOverwrites`: `undefined` \| `APIOverwrite`[]; `position`: `number`; `type`: `GuildCategory`; \} \| \{ `availableTags`: \{ `emojiId`: `null` \| `string`; `emojiName`: `null` \| `string`; `id`: `string`; `moderated`: `boolean`; `name`: `string`; \}[]; `defaultAutoArchiveDuration`: `undefined` \| `ThreadAutoArchiveDuration`; `defaultForumLayout`: `ForumLayoutType`; `defaultReactionEmoji`: `null` \| `APIGuildForumDefaultReactionEmoji`; `defaultSortOrder`: `null` \| `SortOrderType`; `defaultThreadRateLimitPerUser`: `undefined` \| `number`; `flags`: `undefined` \| `ChannelFlags`; `guildId`: `undefined` \| `string`; `id`: `string`; `lastMessageId`: `undefined` \| `null` \| `string`; `lastPinTimestamp`: `undefined` \| `null` \| `string`; `name`: `string`; `nsfw`: `undefined` \| `boolean`; `parentId`: `undefined` \| `null` \| `string`; `permissionOverwrites`: `undefined` \| `APIOverwrite`[]; `position`: `number`; `rateLimitPerUser`: `undefined` \| `number`; `topic`: `undefined` \| `null` \| `string`; `type`: `GuildForum`; \} \| \{ `availableTags`: \{ `emojiId`: `null` \| `string`; `emojiName`: `null` \| `string`; `id`: `string`; `moderated`: `boolean`; `name`: `string`; \}[]; `defaultAutoArchiveDuration`: `undefined` \| `ThreadAutoArchiveDuration`; `defaultReactionEmoji`: `null` \| `APIGuildForumDefaultReactionEmoji`; `defaultSortOrder`: `null` \| `SortOrderType`; `defaultThreadRateLimitPerUser`: `undefined` \| `number`; `flags`: `undefined` \| `ChannelFlags`; `guildId`: `undefined` \| `string`; `id`: `string`; `lastMessageId`: `undefined` \| `null` \| `string`; `lastPinTimestamp`: `undefined` \| `null` \| `string`; `name`: `string`; `nsfw`: `undefined` \| `boolean`; `parentId`: `undefined` \| `null` \| `string`; `permissionOverwrites`: `undefined` \| `APIOverwrite`[]; `position`: `number`; `rateLimitPerUser`: `undefined` \| `number`; `topic`: `undefined` \| `null` \| `string`; `type`: `GuildMedia`; \} \| \{ `bitrate`: `undefined` \| `number`; `flags`: `undefined` \| `ChannelFlags`; `guildId`: `undefined` \| `string`; `id`: `string`; `lastMessageId`: `undefined` \| `null` \| `string`; `name`: `string`; `nsfw`: `undefined` \| `boolean`; `parentId`: `undefined` \| `null` \| `string`; `permissionOverwrites`: `undefined` \| `APIOverwrite`[]; `position`: `number`; `rateLimitPerUser`: `undefined` \| `number`; `rtcRegion`: `undefined` \| `null` \| `string`; `type`: `GuildStageVoice`; `userLimit`: `undefined` \| `number`; `videoQualityMode`: `undefined` \| `VideoQualityMode`; \} \| \{ `bitrate`: `undefined` \| `number`; `flags`: `undefined` \| `ChannelFlags`; `guildId`: `undefined` \| `string`; `id`: `string`; `lastMessageId`: `undefined` \| `null` \| `string`; `name`: `string`; `nsfw`: `undefined` \| `boolean`; `parentId`: `undefined` \| `null` \| `string`; `permissionOverwrites`: `undefined` \| `APIOverwrite`[]; `position`: `number`; `rateLimitPerUser`: `undefined` \| `number`; `rtcRegion`: `undefined` \| `null` \| `string`; `type`: `GuildVoice`; `userLimit`: `undefined` \| `number`; `videoQualityMode`: `undefined` \| `VideoQualityMode`; \} \| \{ `defaultAutoArchiveDuration`: `undefined` \| `ThreadAutoArchiveDuration`; `defaultThreadRateLimitPerUser`: `undefined` \| `number`; `flags`: `undefined` \| `ChannelFlags`; `guildId`: `undefined` \| `string`; `id`: `string`; `lastMessageId`: `undefined` \| `null` \| `string`; `lastPinTimestamp`: `undefined` \| `null` \| `string`; `name`: `string`; `nsfw`: `undefined` \| `boolean`; `parentId`: `undefined` \| `null` \| `string`; `permissionOverwrites`: `undefined` \| `APIOverwrite`[]; `position`: `number`; `rateLimitPerUser`: `undefined` \| `number`; `topic`: `undefined` \| `null` \| `string`; `type`: `GuildAnnouncement`; \} \| \{ `defaultAutoArchiveDuration`: `undefined` \| `ThreadAutoArchiveDuration`; `defaultThreadRateLimitPerUser`: `undefined` \| `number`; `flags`: `undefined` \| `ChannelFlags`; `guildId`: `undefined` \| `string`; `id`: `string`; `lastMessageId`: `undefined` \| `null` \| `string`; `lastPinTimestamp`: `undefined` \| `null` \| `string`; `name`: `string`; `nsfw`: `undefined` \| `boolean`; `parentId`: `undefined` \| `null` \| `string`; `permissionOverwrites`: `undefined` \| `APIOverwrite`[]; `position`: `number`; `rateLimitPerUser`: `undefined` \| `number`; `topic`: `undefined` \| `null` \| `string`; `type`: `GuildText`; \} \| \{ `appliedTags`: `string`[]; `flags`: `undefined` \| `ChannelFlags`; `guildId`: `undefined` \| `string`; `id`: `string`; `lastMessageId`: `undefined` \| `null` \| `string`; `lastPinTimestamp`: `undefined` \| `null` \| `string`; `member`: `undefined` \| `APIThreadMember`; `memberCount`: `undefined` \| `number`; `messageCount`: `undefined` \| `number`; `name`: `string`; `nsfw`: `undefined` \| `boolean`; `ownerId`: `undefined` \| `string`; `parentId`: `undefined` \| `null` \| `string`; `permissionOverwrites`: `undefined` \| `APIOverwrite`[]; `position`: `number`; `rateLimitPerUser`: `undefined` \| `number`; `threadMetadata`: `undefined` \| `APIThreadMetadata`; `totalMessageSent`: `undefined` \| `number`; `type`: `ThreadChannelType`; \} | [`BaseMessage`](BaseMessage.md).`thread` |
| `timestamp?` | `public` | `number` | [`BaseMessage`](BaseMessage.md).`timestamp` |
| `tts` | `public` | `boolean` | [`BaseMessage`](BaseMessage.md).`tts` |
| `type` | `public` | `MessageType` | [`BaseMessage`](BaseMessage.md).`type` |
| `webhookId` | `public` | `undefined` \| `string` | [`BaseMessage`](BaseMessage.md).`webhookId` |

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

***

### url

```ts
get url(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/Message.ts:63](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L63)

***

### user

```ts
get user(): User
```

#### Returns

[`User`](User.md)

#### Source

[seyfert/src/structures/Message.ts:55](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L55)

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

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Inherited from

[`BaseMessage`](BaseMessage.md).[`channel`](BaseMessage.md#channel)

#### Source

[seyfert/src/structures/Message.ts:72](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L72)

***

### createComponentCollector()

```ts
createComponentCollector(options?: ListenerOptions): {
  run: any;
  stop: any;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | [`ListenerOptions`](../interfaces/ListenerOptions.md) |

#### Returns

```ts
{
  run: any;
  stop: any;
}
```

| Member | Type |
| :------ | :------ |
| `run` | `any` |
| `stop` | `any` |

#### Inherited from

[`BaseMessage`](BaseMessage.md).[`createComponentCollector`](BaseMessage.md#createcomponentcollector)

#### Source

[seyfert/src/structures/Message.ts:59](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L59)

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

`Promise`\<[`Message`](Message.md)\>

#### Source

[seyfert/src/structures/Message.ts:153](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L153)

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

[seyfert/src/structures/Message.ts:149](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L149)

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

`Promise`\<[`Message`](Message.md)\>

#### Source

[seyfert/src/structures/Message.ts:141](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L141)

***

### fetch()

```ts
fetch(): Promise<Message>
```

#### Returns

`Promise`\<[`Message`](Message.md)\>

#### Source

[seyfert/src/structures/Message.ts:125](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L125)

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

#### Inherited from

[`BaseMessage`](BaseMessage.md).[`guild`](BaseMessage.md#guild)

#### Source

[seyfert/src/structures/Message.ts:67](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L67)

***

### react()

```ts
react(emoji: EmojiResolvable): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `emoji` | `EmojiResolvable` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BaseMessage`](BaseMessage.md).[`react`](BaseMessage.md#react)

#### Source

[seyfert/src/structures/Message.ts:76](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L76)

***

### reply()

```ts
reply(body: Omit<Omit<RESTPostAPIChannelMessageJSONBody, "components" | "embeds" | "poll"> & SendResolverProps, "message_reference">, fail: boolean): Promise<Message>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `body` | `Omit`\<`Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps`, `"message_reference"`\> | `undefined` |
| `fail` | `boolean` | `true` |

#### Returns

`Promise`\<[`Message`](Message.md)\>

#### Source

[seyfert/src/structures/Message.ts:129](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L129)

***

### write()

```ts
write(body: Omit<RESTPostAPIChannelMessageJSONBody, "components" | "embeds" | "poll"> & SendResolverProps): Promise<Message>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps` |

#### Returns

`Promise`\<[`Message`](Message.md)\>

#### Source

[seyfert/src/structures/Message.ts:145](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Message.ts#L145)
