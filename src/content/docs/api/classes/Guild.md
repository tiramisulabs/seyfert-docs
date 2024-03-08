---
editUrl: false
next: false
prev: false
title: "Guild"
---

## Extends

- `ObjectToLower`\<`Omit`\<`APIGuild`, `"stickers"` \| `"emojis"` \| `"roles"`\>\>.`DiscordBase`.`Object`

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `State` extends `StructStates` | `"api"` |

## Constructors

### new Guild(client, data)

```ts
new Guild<State>(client: BaseClient, data: APIGuild | GatewayGuildCreateDispatchData): Guild<State>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | `BaseClient` |
| `data` | `APIGuild` \| `GatewayGuildCreateDispatchData` |

#### Returns

[`Guild`](/api/classes/guild/)\<`State`\>

#### Inherited from

`ObjectToLower<Omit<APIGuild, 'stickers' | 'emojis' | 'roles'>>.constructor`

#### Source

[seyfert/src/structures/Guild.ts:24](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Guild.ts#L24)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `afkChannelId` | `public` | `null` \| `string` | `ObjectToLower.afkChannelId` |
| `afkTimeout` | `public` |  \| `60` \| `300` \| `900` \| `1800` \| `3600` | `ObjectToLower.afkTimeout` |
| `api` | `public` | [`APIRoutes`](/api/type-aliases/apiroutes/) | `DiscordBase.api` |
| `applicationId` | `public` | `null` \| `string` | `ObjectToLower.applicationId` |
| `approximateMemberCount` | `public` | `undefined` \| `number` | `ObjectToLower.approximateMemberCount` |
| `approximatePresenceCount` | `public` | `undefined` \| `number` | `ObjectToLower.approximatePresenceCount` |
| `banner` | `public` | `null` \| `string` | `ObjectToLower.banner` |
| `cache` | `public` | [`Cache`](/api/classes/cache/) | `DiscordBase.cache` |
| `channels` | `public` | `Object` | - |
| `channels.create` | `readonly` | (`body`: `RESTPostAPIGuildChannelJSONBody`) => `Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\> | - |
| `channels.delete` | `public` | (`id`: `string`, `reason`?: `string`) => `Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\> | - |
| `channels.edit` | `public` | (`id`: `string`, `body`: `RESTPatchAPIChannelJSONBody`, `reason`?: `string`) => `Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\> | - |
| `channels.editPositions` | `public` | (`body`: `RESTPatchAPIGuildChannelPositionsJSONBody`) => `Promise`\<`never`\> | - |
| `channels.fetch` | `public` | (`id`: `string`, `force`: `boolean`) => `Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\> | - |
| `channels.list` | `public` | (`force`: `boolean`) => `Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)[]\> | - |
| `client` | `public` | [`UsingClient`](/api/interfaces/usingclient/) | `DiscordBase.client` |
| `createdAt` | `public` | `Date` | `DiscordBase.createdAt` |
| `createdTimestamp` | `public` | `number` | `DiscordBase.createdTimestamp` |
| `defaultMessageNotifications` | `public` | `GuildDefaultMessageNotifications` | `ObjectToLower.defaultMessageNotifications` |
| `description` | `public` | `null` \| `string` | `ObjectToLower.description` |
| `discoverySplash` | `public` | `null` \| `string` | `ObjectToLower.discoverySplash` |
| `emojis` | `public` | `Object` | - |
| `emojis.create` | `public` | (`body`: `Omit`\<`RESTPostAPIGuildEmojiJSONBody`, `"image"`\> & `Object`) => `Promise`\<`void`\> | - |
| `emojis.edit` | `public` | (`emojiId`: `string`, `body`: `RESTPatchAPIGuildEmojiJSONBody`, `reason`?: `string`) => `Promise`\<[`GuildEmoji`](/api/classes/guildemoji/)\> | - |
| `emojis.fetch` | `public` | (`emojiId`: `string`, `force`: `boolean`) => `Promise`\<[`GuildEmoji`](/api/classes/guildemoji/)\> | - |
| `emojis.list` | `public` | (`force`: `boolean`) => `Promise`\<[`GuildEmoji`](/api/classes/guildemoji/)[]\> | - |
| `explicitContentFilter` | `public` | `GuildExplicitContentFilter` | `ObjectToLower.explicitContentFilter` |
| `features` | `public` | `GuildFeature`[] | `ObjectToLower.features` |
| `hubType` | `public` | `null` \| `GuildHubType` | `ObjectToLower.hubType` |
| `icon` | `public` | `null` \| `string` | `ObjectToLower.icon` |
| `iconHash` | `public` | `undefined` \| `null` \| `string` | `ObjectToLower.iconHash` |
| `id` | `public` | `string` | `ObjectToLower.id` |
| `joinedAt` | `public` | `StructPropState`\<`number`, `State`, `"create"`\> | - |
| `large` | `public` | `StructPropState`\<`boolean`, `State`, `"create"`\> | - |
| `maxMembers` | `public` | `undefined` \| `number` | `ObjectToLower.maxMembers` |
| `maxPresences` | `public` | `undefined` \| `null` \| `number` | `ObjectToLower.maxPresences` |
| `maxStageVideoChannelUsers` | `public` | `undefined` \| `number` | `ObjectToLower.maxStageVideoChannelUsers` |
| `maxVideoChannelUsers` | `public` | `undefined` \| `number` | `ObjectToLower.maxVideoChannelUsers` |
| `memberCount` | `public` | `StructPropState`\<`number`, `State`, `"create"`\> | - |
| `members` | `public` | `Object` | - |
| `members.add` | `public` | (`id`: `string`, `body`: `RESTPutAPIGuildMemberJSONBody`) => `Promise`\<`undefined` \| [`GuildMember`](/api/classes/guildmember/)\> | - |
| `members.ban` | `public` | (`id`: `string`, `body`?: `RESTPutAPIGuildBanJSONBody`, `reason`?: `string`) => `Promise`\<`void`\> | - |
| `members.edit` | `public` | (`id`: `string`, `body`: `RESTPatchAPIGuildMemberJSONBody`, `reason`?: `string`) => `Promise`\<[`GuildMember`](/api/classes/guildmember/)\> | - |
| `members.fetch` | `public` | (`memberId`: `string`, `force`: `boolean`) => `Promise`\<[`GuildMember`](/api/classes/guildmember/)\> | - |
| `members.kick` | `public` | (`id`: `string`, `reason`?: `string`) => `Promise`\<`void`\> | - |
| `members.list` | `public` | (`query`?: `RESTGetAPIGuildMembersQuery`, `force`: `boolean`) => `Promise`\<[`GuildMember`](/api/classes/guildmember/)[]\> | - |
| `members.resolve` | `public` | (`resolve`: `GuildMemberResolvable`) => `Promise`\<`undefined` \| [`GuildMember`](/api/classes/guildmember/)\> | - |
| `members.search` | `public` | (`query`?: `RESTGetAPIGuildMembersSearchQuery`) => `Promise`\<[`GuildMember`](/api/classes/guildmember/)[]\> | - |
| `members.unban` | `public` | (`id`: `string`, `body`?: `RESTPutAPIGuildBanJSONBody`, `reason`?: `string`) => `Promise`\<`void`\> | - |
| `mfaLevel` | `public` | `GuildMFALevel` | `ObjectToLower.mfaLevel` |
| `moderationRules` | `public` | `Object` | - |
| `moderationRules.create` | `public` | (`body`: `RESTPostAPIAutoModerationRuleJSONBody`) => `Promise`\<`APIAutoModerationRule`\> | - |
| `moderationRules.delete` | `public` | (`ruleId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | - |
| `moderationRules.edit` | `public` | (`ruleId`: `string`, `body`: `RESTPatchAPIAutoModerationRuleJSONBody`, `reason`?: `string`) => `Promise`\<`APIAutoModerationRule`\> | - |
| `moderationRules.fetch` | `public` | (`ruleId`: `string`) => `Promise`\<`APIAutoModerationRule`\> | - |
| `moderationRules.list` | `public` | () => `Promise`\<`RESTGetAPIAutoModerationRulesResult`\> | - |
| `name` | `public` | `string` | `ObjectToLower.name` |
| `nsfwLevel` | `public` | `GuildNSFWLevel` | `ObjectToLower.nsfwLevel` |
| `owner` | `public` | `undefined` \| `boolean` | `ObjectToLower.owner` |
| `ownerId` | `public` | `string` | `ObjectToLower.ownerId` |
| `partnered` | `public` | `boolean` | - |
| `permissions` | `public` | `undefined` \| `string` | `ObjectToLower.permissions` |
| `preferredLocale` | `public` | `string` | `ObjectToLower.preferredLocale` |
| `premiumProgressBarEnabled` | `public` | `boolean` | `ObjectToLower.premiumProgressBarEnabled` |
| `premiumSubscriptionCount` | `public` | `undefined` \| `number` | `ObjectToLower.premiumSubscriptionCount` |
| `premiumTier` | `public` | `GuildPremiumTier` | `ObjectToLower.premiumTier` |
| `publicUpdatesChannelId` | `public` | `null` \| `string` | `ObjectToLower.publicUpdatesChannelId` |
| `region` | `public` | `string` | `ObjectToLower.region` |
| `rest` | `public` | [`ApiHandler`](/api/classes/apihandler/) | `DiscordBase.rest` |
| `roles` | `public` | `Object` | - |
| `roles.create` | `public` | (`body`: `RESTPostAPIGuildRoleJSONBody`) => `Promise`\<`any`\> | - |
| `roles.delete` | `public` | (`roleId`: `string`, `reason`?: `string`) => `Promise`\<`undefined` \| `void`\> | - |
| `roles.edit` | `public` | (`roleId`: `string`, `body`: `RESTPatchAPIGuildRoleJSONBody`, `reason`?: `string`) => `Promise`\<`any`\> | - |
| `roles.editPositions` | `public` | (`body`: `RESTPatchAPIGuildRolePositionsJSONBody`) => `Promise`\<[`GuildRole`](/api/classes/guildrole/)[]\> | - |
| `roles.list` | `public` | (`force`: `boolean`) => `Promise`\<[`GuildRole`](/api/classes/guildrole/)[]\> | - |
| `rulesChannelId` | `public` | `null` \| `string` | `ObjectToLower.rulesChannelId` |
| `safetyAlertsChannelId` | `public` | `null` \| `string` | `ObjectToLower.safetyAlertsChannelId` |
| `splash` | `public` | `null` \| `string` | `ObjectToLower.splash` |
| `stickers` | `public` | `Object` | - |
| `stickers.create` | `public` | (`payload`: [`CreateStickerBodyRequest`](/api/interfaces/createstickerbodyrequest/), `reason`?: `string`) => `Promise`\<[`Sticker`](/api/classes/sticker/)\> | - |
| `stickers.delete` | `public` | (`stickerId`: `string`, `reason`?: `string`) => `Promise`\<`void`\> | - |
| `stickers.edit` | `public` | (`stickerId`: `string`, `body`: `RESTPatchAPIGuildStickerJSONBody`, `reason`?: `string`) => `Promise`\<[`Sticker`](/api/classes/sticker/)\> | - |
| `stickers.fetch` | `public` | (`stickerId`: `string`, `force`: `boolean`) => `Promise`\<[`Sticker`](/api/classes/sticker/)\> | - |
| `stickers.list` | `public` | () => `Promise`\<[`Sticker`](/api/classes/sticker/)[]\> | - |
| `systemChannelFlags` | `public` | `GuildSystemChannelFlags` | `ObjectToLower.systemChannelFlags` |
| `systemChannelId` | `public` | `null` \| `string` | `ObjectToLower.systemChannelId` |
| `templates` | `public` | `Object` | - |
| `templates.create` | `public` | (`body`: `RESTPostAPIGuildTemplatesJSONBody`) => `Promise`\<`APITemplate`\> | - |
| `templates.delete` | `public` | (`code`: `string`) => `Promise`\<`APITemplate`\> | - |
| `templates.edit` | `public` | (`code`: `string`, `body`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`Partial`\<`RESTPostAPIGuildTemplatesJSONBody`\>\>) => `Promise`\<`APITemplate`\> | - |
| `templates.fetch` | `public` | (`code`: `string`) => `Promise`\<`APITemplate`\> | - |
| `templates.list` | `public` | () => `Promise`\<`RESTGetAPIGuildTemplatesResult`\> | - |
| `templates.sync` | `public` | (`code`: `string`) => `Promise`\<`APITemplate`\> | - |
| `unavailable?` | `public` | `StructPropState`\<`boolean`, `State`, `"create"`\> | - |
| `vanityUrlCode` | `public` | `null` \| `string` | `ObjectToLower.vanityUrlCode` |
| `verificationLevel` | `public` | `GuildVerificationLevel` | `ObjectToLower.verificationLevel` |
| `verified` | `public` | `boolean` | - |
| `webhooks` | `public` | `Object` | - |
| `webhooks.list` | `public` | () => `Promise`\<[`Webhook`](/api/classes/webhook/)[]\> | - |
| `welcomeScreen` | `public` | `undefined` \| `APIGuildWelcomeScreen` | `ObjectToLower.welcomeScreen` |
| `widgetChannelId` | `public` | `undefined` \| `null` \| `string` | `ObjectToLower.widgetChannelId` |
| `widgetEnabled` | `public` | `undefined` \| `boolean` | `ObjectToLower.widgetEnabled` |

## Accessors

### maxEmojis

```ts
get maxEmojis(): MaxEmojis
```

#### Returns

[`MaxEmojis`](/api/type-aliases/maxemojis/)

#### Source

[seyfert/src/structures/Guild.ts:50](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Guild.ts#L50)

***

### maxStickers

```ts
get maxStickers(): MaxStickers
```

#### Returns

[`MaxStickers`](/api/type-aliases/maxstickers/)

#### Source

[seyfert/src/structures/Guild.ts:37](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Guild.ts#L37)

## Methods

### bannerURL()

```ts
bannerURL(options?: ImageURLOptions): undefined | string
```

bannerURL gets the current guild banner as a string.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | [`ImageURLOptions`](/api/interfaces/imageurloptions/) | Image options for the banner url. |

#### Returns

`undefined` \| `string`

Banner url or void

#### Link

https://discord.com/developers/docs/reference#image-formatting

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:67](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/BaseGuild.ts#L67)

***

### fetch()

```ts
fetch(...args: []): Promise<Guild<"api">>
```

Fetch guild on API

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | [] |

#### Returns

`Promise`\<[`Guild`](/api/classes/guild/)\<`"api"`\>\>

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:32](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/BaseGuild.ts#L32)

***

### fetchOwner()

```ts
fetchOwner(force: boolean): Promise<null> | Promise<GuildMember>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<`null`\> \| `Promise`\<[`GuildMember`](/api/classes/guildmember/)\>

#### Source

[seyfert/src/structures/Guild.ts:63](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Guild.ts#L63)

***

### iconURL()

```ts
iconURL(options?: ImageURLOptions): undefined | string
```

iconURL gets the current guild icon.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | [`ImageURLOptions`](/api/interfaces/imageurloptions/) |

#### Returns

`undefined` \| `string`

#### Link

https://discord.com/developers/docs/reference#image-formatting

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:41](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/BaseGuild.ts#L41)

***

### splashURL()

```ts
splashURL(options?: ImageURLOptions): undefined | string
```

splashURL gets the current guild splash as a string.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | [`ImageURLOptions`](/api/interfaces/imageurloptions/) | Image options for the splash url. |

#### Returns

`undefined` \| `string`

Splash url or void.

#### Link

https://discord.com/developers/docs/reference#image-formatting

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:54](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/BaseGuild.ts#L54)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:74](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/BaseGuild.ts#L74)
