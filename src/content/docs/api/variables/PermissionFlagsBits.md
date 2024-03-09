---
editUrl: false
next: false
prev: false
title: "PermissionFlagsBits"
---

```ts
const PermissionFlagsBits: Object;
```

https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags

These flags are exported as `BigInt`s and NOT numbers. Wrapping them in `Number()`
may cause issues, try to use BigInts as much as possible or modules that can
replicate them in some way

## Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `AddReactions` | `bigint` | Allows for the addition of reactions to messages<br /><br />Applies to channel types: Text, Voice, Stage |
| `Administrator` | `bigint` | Allows all permissions and bypasses channel permission overwrites |
| `AttachFiles` | `bigint` | Allows for uploading images and files<br /><br />Applies to channel types: Text, Voice, Stage |
| `BanMembers` | `bigint` | Allows banning members |
| `ChangeNickname` | `bigint` | Allows for modification of own nickname |
| `Connect` | `bigint` | Allows for joining of a voice channel<br /><br />Applies to channel types: Voice, Stage |
| `CreateEvents` | `bigint` | Allows for creating scheduled events, and editing and deleting those created by the current user<br /><br />Applies to channel types: Voice, Stage |
| `CreateGuildExpressions` | `bigint` | Allows for creating emojis, stickers, and soundboard sounds, and editing and deleting those created by the current user |
| `CreateInstantInvite` | `bigint` | Allows creation of instant invites<br /><br />Applies to channel types: Text, Voice, Stage |
| `CreatePrivateThreads` | `bigint` | Allows for creating private threads<br /><br />Applies to channel types: Text |
| `CreatePublicThreads` | `bigint` | Allows for creating public and announcement threads<br /><br />Applies to channel types: Text |
| `DeafenMembers` | `bigint` | Allows for deafening of members in a voice channel<br /><br />Applies to channel types: Voice |
| `EmbedLinks` | `bigint` | Links sent by users with this permission will be auto-embedded<br /><br />Applies to channel types: Text, Voice, Stage |
| `KickMembers` | `bigint` | Allows kicking members |
| `ManageChannels` | `bigint` | Allows management and editing of channels<br /><br />Applies to channel types: Text, Voice, Stage |
| `ManageEmojisAndStickers` | `bigint` | Allows management and editing of emojis, stickers, and soundboard sounds<br /><br />:::caution[Deprecated]<br />This is the old name for {@apilink PermissionFlagsBits#ManageGuildExpressions}<br />::: |
| `ManageEvents` | `bigint` | Allows for editing and deleting scheduled events created by all users<br /><br />Applies to channel types: Voice, Stage |
| `ManageGuild` | `bigint` | Allows management and editing of the guild |
| `ManageGuildExpressions` | `bigint` | Allows for editing and deleting emojis, stickers, and soundboard sounds created by all users |
| `ManageMessages` | `bigint` | Allows for deletion of other users messages<br /><br />Applies to channel types: Text, Voice, Stage |
| `ManageNicknames` | `bigint` | Allows for modification of other users nicknames |
| `ManageRoles` | `bigint` | Allows management and editing of roles<br /><br />Applies to channel types: Text, Voice, Stage |
| `ManageThreads` | `bigint` | Allows for deleting and archiving threads, and viewing all private threads<br /><br />Applies to channel types: Text |
| `ManageWebhooks` | `bigint` | Allows management and editing of webhooks<br /><br />Applies to channel types: Text, Voice, Stage |
| `MentionEveryone` | `bigint` | Allows for using the `@everyone` tag to notify all users in a channel,<br />and the `@here` tag to notify all online users in a channel<br /><br />Applies to channel types: Text, Voice, Stage |
| `ModerateMembers` | `bigint` | Allows for timing out users to prevent them from sending or reacting to messages in chat and threads,<br />and from speaking in voice and stage channels |
| `MoveMembers` | `bigint` | Allows for moving of members between voice channels<br /><br />Applies to channel types: Voice, Stage |
| `MuteMembers` | `bigint` | Allows for muting members in a voice channel<br /><br />Applies to channel types: Voice, Stage |
| `PrioritySpeaker` | `bigint` | Allows for using priority speaker in a voice channel<br /><br />Applies to channel types: Voice |
| `ReadMessageHistory` | `bigint` | Allows for reading of message history<br /><br />Applies to channel types: Text, Voice, Stage |
| `RequestToSpeak` | `bigint` | Allows for requesting to speak in stage channels<br /><br />Applies to channel types: Stage |
| `SendMessages` | `bigint` | Allows for sending messages in a channel and creating threads in a forum<br />(does not allow sending messages in threads)<br /><br />Applies to channel types: Text, Voice, Stage |
| `SendMessagesInThreads` | `bigint` | Allows for sending messages in threads<br /><br />Applies to channel types: Text |
| `SendTTSMessages` | `bigint` | Allows for sending of `/tts` messages<br /><br />Applies to channel types: Text, Voice, Stage |
| `SendVoiceMessages` | `bigint` | Allows sending voice messages<br /><br />Applies to channel types: Text, Voice, Stage |
| `Speak` | `bigint` | Allows for speaking in a voice channel<br /><br />Applies to channel types: Voice |
| `Stream` | `bigint` | Allows the user to go live<br /><br />Applies to channel types: Voice, Stage |
| `UseApplicationCommands` | `bigint` | Allows members to use application commands, including slash commands and context menu commands<br /><br />Applies to channel types: Text, Voice, Stage |
| `UseEmbeddedActivities` | `bigint` | Allows for using Activities (applications with the \{@apilink ApplicationFlags.Embedded\} flag) in a voice channel<br /><br />Applies to channel types: Voice |
| `UseExternalEmojis` | `bigint` | Allows the usage of custom emojis from other servers<br /><br />Applies to channel types: Text, Voice, Stage |
| `UseExternalSounds` | `bigint` | Allows the usage of custom soundboard sounds from other servers<br /><br />Applies to channel types: Voice |
| `UseExternalStickers` | `bigint` | Allows the usage of custom stickers from other servers<br /><br />Applies to channel types: Text, Voice, Stage |
| `UseSoundboard` | `bigint` | Allows for using soundboard in a voice channel<br /><br />Applies to channel types: Voice |
| `UseVAD` | `bigint` | Allows for using voice-activity-detection in a voice channel<br /><br />Applies to channel types: Voice |
| `ViewAuditLog` | `bigint` | Allows for viewing of audit logs |
| `ViewChannel` | `bigint` | Allows guild members to view a channel, which includes reading messages in text channels and joining voice channels<br /><br />Applies to channel types: Text, Voice, Stage |
| `ViewCreatorMonetizationAnalytics` | `bigint` | Allows for viewing role subscription insights |
| `ViewGuildInsights` | `bigint` | Allows for viewing guild insights |

## Source

seyfert/node\_modules/.pnpm/discord-api-types@0.37.73/node\_modules/discord-api-types/payloads/common.d.ts:9
