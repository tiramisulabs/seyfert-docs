[seyfert](../globals.md) / GuildTemplate

# Class: GuildTemplate

## Extends

- `Base`.`ObjectToLower`\<`APITemplate`\>

## Constructors

### new GuildTemplate()

```ts
new GuildTemplate(client: UsingClient, data: APITemplate): GuildTemplate
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `data` | `APITemplate` |

#### Returns

[`GuildTemplate`](GuildTemplate.md)

#### Inherited from

`Base.constructor`

#### Source

[seyfert/src/structures/GuildTemplate.ts:13](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildTemplate.ts#L13)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | `Base.client` |
| `code` | `public` | `string` | `ObjectToLower.code` |
| `createdAt` | `public` | `string` | `ObjectToLower.createdAt` |
| `creator` | `public` | \{ `accentColor`: `undefined` \| `null` \| `number`; `avatar`: `null` \| `string`; `avatarDecoration`: `undefined` \| `null` \| `string`; `avatarDecorationData`: `undefined` \| `null` \| \{ `asset`: `string`; `skuId`: `string`; \}; `banner`: `undefined` \| `null` \| `string`; `bot`: `undefined` \| `boolean`; `discriminator`: `string`; `email`: `undefined` \| `null` \| `string`; `flags`: `undefined` \| `UserFlags`; `globalName`: `null` \| `string`; `id`: `string`; `locale`: `undefined` \| `string`; `mfaEnabled`: `undefined` \| `boolean`; `premiumType`: `undefined` \| `UserPremiumType`; `publicFlags`: `undefined` \| `UserFlags`; `system`: `undefined` \| `boolean`; `username`: `string`; `verified`: `undefined` \| `boolean`; \} | `ObjectToLower.creator` |
| `creator.accentColor` | `public` | `undefined` \| `null` \| `number` | - |
| `creator.avatar` | `public` | `null` \| `string` | - |
| `creator.avatarDecoration` | `public` | `undefined` \| `null` \| `string` | - |
| `creator.avatarDecorationData` | `public` | `undefined` \| `null` \| \{ `asset`: `string`; `skuId`: `string`; \} | - |
| `creator.banner` | `public` | `undefined` \| `null` \| `string` | - |
| `creator.bot` | `public` | `undefined` \| `boolean` | - |
| `creator.discriminator` | `public` | `string` | - |
| `creator.email` | `public` | `undefined` \| `null` \| `string` | - |
| `creator.flags` | `public` | `undefined` \| `UserFlags` | - |
| `creator.globalName` | `public` | `null` \| `string` | - |
| `creator.id` | `public` | `string` | - |
| `creator.locale` | `public` | `undefined` \| `string` | - |
| `creator.mfaEnabled` | `public` | `undefined` \| `boolean` | - |
| `creator.premiumType` | `public` | `undefined` \| `UserPremiumType` | - |
| `creator.publicFlags` | `public` | `undefined` \| `UserFlags` | - |
| `creator.system` | `public` | `undefined` \| `boolean` | - |
| `creator.username` | `public` | `string` | - |
| `creator.verified` | `public` | `undefined` \| `boolean` | - |
| `creatorId` | `public` | `string` | `ObjectToLower.creatorId` |
| `description` | `public` | `null` \| `string` | `ObjectToLower.description` |
| `isDirty` | `public` | `null` \| `boolean` | `ObjectToLower.isDirty` |
| `name` | `public` | `string` | `ObjectToLower.name` |
| `serializedSourceGuild` | `public` | \{ `afkChannelId`: `undefined` \| `null` \| `string` \| `number`; `afkTimeout`: \| `undefined` \| `1800` \| `3600` \| `60` \| `300` \| `900`; `channels`: `undefined` \| ( \| \{ `flags`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ChannelFlags`\>; `id`: `undefined` \| `string` \| `number`; `name`: `string`; `nsfw`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `boolean`\>; `parentId`: `undefined` \| `null` \| `string` \| `number`; `permissionOverwrites`: `undefined` \| \{ `allow`: `undefined` \| `null` \| `string`; `deny`: `undefined` \| `null` \| `string`; `id`: `string` \| `number`; `type`: `OverwriteType`; \}[]; `position`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `type`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `GuildCategory`\>; \} \| \{ `availableTags`: `undefined` \| \{ `emojiId`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`null` \| `string`\>; `emojiName`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`null` \| `string`\>; `id`: `string`; `moderated`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`boolean`\>; `name`: `string`; \}[]; `defaultAutoArchiveDuration`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ThreadAutoArchiveDuration`\>; `defaultForumLayout`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ForumLayoutType`\>; `defaultReactionEmoji`: `undefined` \| `null` \| \{ `emojiId`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`null` \| `string`\>; `emojiName`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`null` \| `string`\>; \}; `defaultSortOrder`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `null` \| `SortOrderType`\>; `defaultThreadRateLimitPerUser`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `flags`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ChannelFlags`\>; `id`: `undefined` \| `string` \| `number`; `name`: `string`; `nsfw`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `boolean`\>; `parentId`: `undefined` \| `null` \| `string` \| `number`; `permissionOverwrites`: `undefined` \| \{ `allow`: `undefined` \| `null` \| `string`; `deny`: `undefined` \| `null` \| `string`; `id`: `string` \| `number`; `type`: `OverwriteType`; \}[]; `position`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `rateLimitPerUser`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `topic`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `null` \| `string`\>; `type`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `GuildForum`\>; \} \| \{ `availableTags`: `undefined` \| \{ `emojiId`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`null` \| `string`\>; `emojiName`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`null` \| `string`\>; `id`: `string`; `moderated`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`boolean`\>; `name`: `string`; \}[]; `defaultAutoArchiveDuration`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ThreadAutoArchiveDuration`\>; `defaultReactionEmoji`: `undefined` \| `null` \| \{ `emojiId`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`null` \| `string`\>; `emojiName`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`null` \| `string`\>; \}; `defaultSortOrder`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `null` \| `SortOrderType`\>; `defaultThreadRateLimitPerUser`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `flags`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ChannelFlags`\>; `id`: `undefined` \| `string` \| `number`; `name`: `string`; `nsfw`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `boolean`\>; `parentId`: `undefined` \| `null` \| `string` \| `number`; `permissionOverwrites`: `undefined` \| \{ `allow`: `undefined` \| `null` \| `string`; `deny`: `undefined` \| `null` \| `string`; `id`: `string` \| `number`; `type`: `OverwriteType`; \}[]; `position`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `rateLimitPerUser`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `topic`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `null` \| `string`\>; `type`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `GuildMedia`\>; \} \| \{ `bitrate`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `flags`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ChannelFlags`\>; `id`: `undefined` \| `string` \| `number`; `name`: `string`; `nsfw`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `boolean`\>; `parentId`: `undefined` \| `null` \| `string` \| `number`; `permissionOverwrites`: `undefined` \| \{ `allow`: `undefined` \| `null` \| `string`; `deny`: `undefined` \| `null` \| `string`; `id`: `string` \| `number`; `type`: `OverwriteType`; \}[]; `position`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `rateLimitPerUser`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `rtcRegion`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `null` \| `string`\>; `type`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `GuildStageVoice`\>; `userLimit`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `videoQualityMode`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `VideoQualityMode`\>; \} \| \{ `bitrate`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `flags`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ChannelFlags`\>; `id`: `undefined` \| `string` \| `number`; `name`: `string`; `nsfw`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `boolean`\>; `parentId`: `undefined` \| `null` \| `string` \| `number`; `permissionOverwrites`: `undefined` \| \{ `allow`: `undefined` \| `null` \| `string`; `deny`: `undefined` \| `null` \| `string`; `id`: `string` \| `number`; `type`: `OverwriteType`; \}[]; `position`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `rateLimitPerUser`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `rtcRegion`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `null` \| `string`\>; `type`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `GuildVoice`\>; `userLimit`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `videoQualityMode`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `VideoQualityMode`\>; \} \| \{ `defaultAutoArchiveDuration`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ThreadAutoArchiveDuration`\>; `defaultThreadRateLimitPerUser`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `flags`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ChannelFlags`\>; `id`: `undefined` \| `string` \| `number`; `name`: `string`; `nsfw`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `boolean`\>; `parentId`: `undefined` \| `null` \| `string` \| `number`; `permissionOverwrites`: `undefined` \| \{ `allow`: `undefined` \| `null` \| `string`; `deny`: `undefined` \| `null` \| `string`; `id`: `string` \| `number`; `type`: `OverwriteType`; \}[]; `position`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `rateLimitPerUser`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `topic`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `null` \| `string`\>; `type`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `GuildAnnouncement`\>; \} \| \{ `defaultAutoArchiveDuration`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ThreadAutoArchiveDuration`\>; `defaultThreadRateLimitPerUser`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `flags`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ChannelFlags`\>; `id`: `undefined` \| `string` \| `number`; `name`: `string`; `nsfw`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `boolean`\>; `parentId`: `undefined` \| `null` \| `string` \| `number`; `permissionOverwrites`: `undefined` \| \{ `allow`: `undefined` \| `null` \| `string`; `deny`: `undefined` \| `null` \| `string`; `id`: `string` \| `number`; `type`: `OverwriteType`; \}[]; `position`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `rateLimitPerUser`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `topic`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `null` \| `string`\>; `type`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `GuildText`\>; \} \| \{ `flags`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ChannelFlags`\>; `id`: `undefined` \| `string` \| `number`; `name`: `string`; `nsfw`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `boolean`\>; `parentId`: `undefined` \| `null` \| `string` \| `number`; `permissionOverwrites`: `undefined` \| \{ `allow`: `undefined` \| `null` \| `string`; `deny`: `undefined` \| `null` \| `string`; `id`: `string` \| `number`; `type`: `OverwriteType`; \}[]; `position`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `rateLimitPerUser`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `type`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ThreadChannelType`\>; \})[]; `defaultMessageNotifications`: `undefined` \| `GuildDefaultMessageNotifications`; `description`: `null` \| `string`; `explicitContentFilter`: `undefined` \| `GuildExplicitContentFilter`; `iconHash`: `null` \| `string`; `name`: `string`; `preferredLocale`: `string`; `premiumProgressBarEnabled`: `undefined` \| `boolean`; `region`: `undefined` \| `string`; `roles`: `undefined` \| \{ `color`: `undefined` \| `null` \| `number`; `hoist`: `undefined` \| `null` \| `boolean`; `icon`: `undefined` \| `null` \| `string`; `id`: `string` \| `number`; `mentionable`: `undefined` \| `null` \| `boolean`; `name`: `undefined` \| `null` \| `string`; `permissions`: `undefined` \| `null` \| `string`; `unicodeEmoji`: `undefined` \| `null` \| `string`; \}[]; `systemChannelFlags`: `undefined` \| `GuildSystemChannelFlags`; `systemChannelId`: `undefined` \| `null` \| `string` \| `number`; `verificationLevel`: `undefined` \| `GuildVerificationLevel`; \} | `ObjectToLower.serializedSourceGuild` |
| `serializedSourceGuild.afkChannelId` | `public` | `undefined` \| `null` \| `string` \| `number` | - |
| `serializedSourceGuild.afkTimeout` | `public` |  \| `undefined` \| `1800` \| `3600` \| `60` \| `300` \| `900` | - |
| `serializedSourceGuild.channels` | `public` | `undefined` \| ( \| \{ `flags`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ChannelFlags`\>; `id`: `undefined` \| `string` \| `number`; `name`: `string`; `nsfw`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `boolean`\>; `parentId`: `undefined` \| `null` \| `string` \| `number`; `permissionOverwrites`: `undefined` \| \{ `allow`: `undefined` \| `null` \| `string`; `deny`: `undefined` \| `null` \| `string`; `id`: `string` \| `number`; `type`: `OverwriteType`; \}[]; `position`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `type`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `GuildCategory`\>; \} \| \{ `availableTags`: `undefined` \| \{ `emojiId`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`null` \| `string`\>; `emojiName`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`null` \| `string`\>; `id`: `string`; `moderated`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`boolean`\>; `name`: `string`; \}[]; `defaultAutoArchiveDuration`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ThreadAutoArchiveDuration`\>; `defaultForumLayout`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ForumLayoutType`\>; `defaultReactionEmoji`: `undefined` \| `null` \| \{ `emojiId`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`null` \| `string`\>; `emojiName`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`null` \| `string`\>; \}; `defaultSortOrder`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `null` \| `SortOrderType`\>; `defaultThreadRateLimitPerUser`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `flags`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ChannelFlags`\>; `id`: `undefined` \| `string` \| `number`; `name`: `string`; `nsfw`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `boolean`\>; `parentId`: `undefined` \| `null` \| `string` \| `number`; `permissionOverwrites`: `undefined` \| \{ `allow`: `undefined` \| `null` \| `string`; `deny`: `undefined` \| `null` \| `string`; `id`: `string` \| `number`; `type`: `OverwriteType`; \}[]; `position`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `rateLimitPerUser`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `topic`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `null` \| `string`\>; `type`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `GuildForum`\>; \} \| \{ `availableTags`: `undefined` \| \{ `emojiId`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`null` \| `string`\>; `emojiName`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`null` \| `string`\>; `id`: `string`; `moderated`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`boolean`\>; `name`: `string`; \}[]; `defaultAutoArchiveDuration`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ThreadAutoArchiveDuration`\>; `defaultReactionEmoji`: `undefined` \| `null` \| \{ `emojiId`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`null` \| `string`\>; `emojiName`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`null` \| `string`\>; \}; `defaultSortOrder`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `null` \| `SortOrderType`\>; `defaultThreadRateLimitPerUser`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `flags`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ChannelFlags`\>; `id`: `undefined` \| `string` \| `number`; `name`: `string`; `nsfw`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `boolean`\>; `parentId`: `undefined` \| `null` \| `string` \| `number`; `permissionOverwrites`: `undefined` \| \{ `allow`: `undefined` \| `null` \| `string`; `deny`: `undefined` \| `null` \| `string`; `id`: `string` \| `number`; `type`: `OverwriteType`; \}[]; `position`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `rateLimitPerUser`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `topic`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `null` \| `string`\>; `type`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `GuildMedia`\>; \} \| \{ `bitrate`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `flags`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ChannelFlags`\>; `id`: `undefined` \| `string` \| `number`; `name`: `string`; `nsfw`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `boolean`\>; `parentId`: `undefined` \| `null` \| `string` \| `number`; `permissionOverwrites`: `undefined` \| \{ `allow`: `undefined` \| `null` \| `string`; `deny`: `undefined` \| `null` \| `string`; `id`: `string` \| `number`; `type`: `OverwriteType`; \}[]; `position`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `rateLimitPerUser`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `rtcRegion`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `null` \| `string`\>; `type`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `GuildStageVoice`\>; `userLimit`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `videoQualityMode`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `VideoQualityMode`\>; \} \| \{ `bitrate`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `flags`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ChannelFlags`\>; `id`: `undefined` \| `string` \| `number`; `name`: `string`; `nsfw`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `boolean`\>; `parentId`: `undefined` \| `null` \| `string` \| `number`; `permissionOverwrites`: `undefined` \| \{ `allow`: `undefined` \| `null` \| `string`; `deny`: `undefined` \| `null` \| `string`; `id`: `string` \| `number`; `type`: `OverwriteType`; \}[]; `position`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `rateLimitPerUser`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `rtcRegion`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `null` \| `string`\>; `type`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `GuildVoice`\>; `userLimit`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `videoQualityMode`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `VideoQualityMode`\>; \} \| \{ `defaultAutoArchiveDuration`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ThreadAutoArchiveDuration`\>; `defaultThreadRateLimitPerUser`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `flags`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ChannelFlags`\>; `id`: `undefined` \| `string` \| `number`; `name`: `string`; `nsfw`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `boolean`\>; `parentId`: `undefined` \| `null` \| `string` \| `number`; `permissionOverwrites`: `undefined` \| \{ `allow`: `undefined` \| `null` \| `string`; `deny`: `undefined` \| `null` \| `string`; `id`: `string` \| `number`; `type`: `OverwriteType`; \}[]; `position`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `rateLimitPerUser`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `topic`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `null` \| `string`\>; `type`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `GuildAnnouncement`\>; \} \| \{ `defaultAutoArchiveDuration`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ThreadAutoArchiveDuration`\>; `defaultThreadRateLimitPerUser`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `flags`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ChannelFlags`\>; `id`: `undefined` \| `string` \| `number`; `name`: `string`; `nsfw`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `boolean`\>; `parentId`: `undefined` \| `null` \| `string` \| `number`; `permissionOverwrites`: `undefined` \| \{ `allow`: `undefined` \| `null` \| `string`; `deny`: `undefined` \| `null` \| `string`; `id`: `string` \| `number`; `type`: `OverwriteType`; \}[]; `position`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `rateLimitPerUser`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `topic`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `null` \| `string`\>; `type`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `GuildText`\>; \} \| \{ `flags`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ChannelFlags`\>; `id`: `undefined` \| `string` \| `number`; `name`: `string`; `nsfw`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `boolean`\>; `parentId`: `undefined` \| `null` \| `string` \| `number`; `permissionOverwrites`: `undefined` \| \{ `allow`: `undefined` \| `null` \| `string`; `deny`: `undefined` \| `null` \| `string`; `id`: `string` \| `number`; `type`: `OverwriteType`; \}[]; `position`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `rateLimitPerUser`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `number`\>; `type`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`undefined` \| `ThreadChannelType`\>; \})[] | - |
| `serializedSourceGuild.defaultMessageNotifications` | `public` | `undefined` \| `GuildDefaultMessageNotifications` | - |
| `serializedSourceGuild.description` | `public` | `null` \| `string` | - |
| `serializedSourceGuild.explicitContentFilter` | `public` | `undefined` \| `GuildExplicitContentFilter` | - |
| `serializedSourceGuild.iconHash` | `public` | `null` \| `string` | - |
| `serializedSourceGuild.name` | `public` | `string` | - |
| `serializedSourceGuild.preferredLocale` | `public` | `string` | - |
| `serializedSourceGuild.premiumProgressBarEnabled` | `public` | `undefined` \| `boolean` | - |
| `serializedSourceGuild.region` | `public` | `undefined` \| `string` | - |
| `serializedSourceGuild.roles` | `public` | `undefined` \| \{ `color`: `undefined` \| `null` \| `number`; `hoist`: `undefined` \| `null` \| `boolean`; `icon`: `undefined` \| `null` \| `string`; `id`: `string` \| `number`; `mentionable`: `undefined` \| `null` \| `boolean`; `name`: `undefined` \| `null` \| `string`; `permissions`: `undefined` \| `null` \| `string`; `unicodeEmoji`: `undefined` \| `null` \| `string`; \}[] | - |
| `serializedSourceGuild.systemChannelFlags` | `public` | `undefined` \| `GuildSystemChannelFlags` | - |
| `serializedSourceGuild.systemChannelId` | `public` | `undefined` \| `null` \| `string` \| `number` | - |
| `serializedSourceGuild.verificationLevel` | `public` | `undefined` \| `GuildVerificationLevel` | - |
| `sourceGuildId` | `public` | `string` | `ObjectToLower.sourceGuildId` |
| `updatedAt` | `public` | `string` | `ObjectToLower.updatedAt` |
| `usageCount` | `public` | `number` | `ObjectToLower.usageCount` |

## Methods

### delete()

```ts
delete(): Promise<GuildTemplate>
```

#### Returns

`Promise`\<[`GuildTemplate`](GuildTemplate.md)\>

#### Source

[seyfert/src/structures/GuildTemplate.ts:34](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildTemplate.ts#L34)

***

### edit()

```ts
edit(body: AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<RESTPostAPIGuildTemplatesJSONBody>>): Promise<GuildTemplate>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`Partial`\<`RESTPostAPIGuildTemplatesJSONBody`\>\> |

#### Returns

`Promise`\<[`GuildTemplate`](GuildTemplate.md)\>

#### Source

[seyfert/src/structures/GuildTemplate.ts:30](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildTemplate.ts#L30)

***

### fetch()

```ts
fetch(): Promise<GuildTemplate>
```

#### Returns

`Promise`\<[`GuildTemplate`](GuildTemplate.md)\>

#### Source

[seyfert/src/structures/GuildTemplate.ts:22](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildTemplate.ts#L22)

***

### guild()

```ts
guild(force: boolean): Promise<Guild<"cached"> | Guild<"api">>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<[`Guild`](Guild.md)\<`"cached"`\> \| [`Guild`](Guild.md)\<`"api"`\>\>

#### Source

[seyfert/src/structures/GuildTemplate.ts:18](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildTemplate.ts#L18)

***

### sync()

```ts
sync(): Promise<GuildTemplate>
```

#### Returns

`Promise`\<[`GuildTemplate`](GuildTemplate.md)\>

#### Source

[seyfert/src/structures/GuildTemplate.ts:26](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildTemplate.ts#L26)

***

### methods()

```ts
static methods(ctx: {
  client: UsingClient;
  guildId: string;
 }): {
  create: (body: RESTPostAPIGuildTemplatesJSONBody) => Promise<GuildTemplate>;
  delete: (code: string) => Promise<GuildTemplate>;
  edit: (code: string, body: AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<RESTPostAPIGuildTemplatesJSONBody>>) => Promise<GuildTemplate>;
  fetch: (code: string) => Promise<GuildTemplate>;
  list: () => Promise<GuildTemplate[]>;
  sync: (code: string) => Promise<GuildTemplate>;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ctx` | `object` |
| `ctx.client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `ctx.guildId` | `string` |

#### Returns

```ts
{
  create: (body: RESTPostAPIGuildTemplatesJSONBody) => Promise<GuildTemplate>;
  delete: (code: string) => Promise<GuildTemplate>;
  edit: (code: string, body: AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<RESTPostAPIGuildTemplatesJSONBody>>) => Promise<GuildTemplate>;
  fetch: (code: string) => Promise<GuildTemplate>;
  list: () => Promise<GuildTemplate[]>;
  sync: (code: string) => Promise<GuildTemplate>;
}
```

| Member | Type | Value |
| :------ | :------ | :------ |
| `create` | (`body`: `RESTPostAPIGuildTemplatesJSONBody`) => `Promise`\<[`GuildTemplate`](GuildTemplate.md)\> | ... |
| `delete` | (`code`: `string`) => `Promise`\<[`GuildTemplate`](GuildTemplate.md)\> | ... |
| `edit` | (`code`: `string`, `body`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`Partial`\<`RESTPostAPIGuildTemplatesJSONBody`\>\>) => `Promise`\<[`GuildTemplate`](GuildTemplate.md)\> | ... |
| `fetch` | (`code`: `string`) => `Promise`\<[`GuildTemplate`](GuildTemplate.md)\> | ... |
| `list` | () => `Promise`\<[`GuildTemplate`](GuildTemplate.md)[]\> | ... |
| `sync` | (`code`: `string`) => `Promise`\<[`GuildTemplate`](GuildTemplate.md)\> | ... |

#### Source

[seyfert/src/structures/GuildTemplate.ts:38](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildTemplate.ts#L38)
