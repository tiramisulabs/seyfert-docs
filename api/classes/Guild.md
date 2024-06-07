[seyfert](../globals.md) / Guild

# Class: Guild\<State\>

## Extends

- `ObjectToLower`\<`Omit`\<`APIGuild`, `"stickers"` \| `"emojis"` \| `"roles"`\>\>.`DiscordBase`.\{
  `api`: [`APIRoutes`](../type-aliases/APIRoutes.md);
  `cache`: [`Cache`](Cache.md);
  `client`: [`UsingClient`](../interfaces/UsingClient.md);
  `createdAt`: `Date`;
  `createdTimestamp`: `number`;
  `partnered`: `boolean`;
  `rest`: [`ApiHandler`](ApiHandler.md);
  `verified`: `boolean`;
  `bannerURL`: `undefined` \| `string`;
  `fetch`: `Promise`\<[`Guild`](Guild.md)\<`"api"`\>\>;
  `iconURL`: `undefined` \| `string`;
  `splashURL`: `undefined` \| `string`;
  `toString`: `string`;
 \}

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `State` *extends* `StructStates` | `"api"` |

## Constructors

### new Guild()

```ts
new Guild<State>(client: UsingClient, data: APIGuild | GatewayGuildCreateDispatchData): Guild<State>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `data` | `APIGuild` \| `GatewayGuildCreateDispatchData` |

#### Returns

[`Guild`](Guild.md)\<`State`\>

#### Inherited from

ObjectToLower\<Omit\<APIGuild, 'stickers' \| 'emojis' \| 'roles'\>\>.constructor

#### Source

[seyfert/src/structures/Guild.ts:24](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Guild.ts#L24)

## Properties

| Property | Modifier | Type | Default value | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `afkChannelId` | `public` | `null` \| `string` | `undefined` | `ObjectToLower.afkChannelId` |
| `afkTimeout` | `public` |  \| `60` \| `300` \| `900` \| `1800` \| `3600` | `undefined` | `ObjectToLower.afkTimeout` |
| `api` | `public` | [`APIRoutes`](../type-aliases/APIRoutes.md) | `undefined` | `DiscordBase.api` |
| `applicationId` | `public` | `null` \| `string` | `undefined` | `ObjectToLower.applicationId` |
| `approximateMemberCount` | `public` | `undefined` \| `number` | `undefined` | `ObjectToLower.approximateMemberCount` |
| `approximatePresenceCount` | `public` | `undefined` \| `number` | `undefined` | `ObjectToLower.approximatePresenceCount` |
| `banner` | `public` | `null` \| `string` | `undefined` | `ObjectToLower.banner` |
| `cache` | `public` | [`Cache`](Cache.md) | `undefined` | `DiscordBase.cache` |
| `channels` | `public` | \{ `create`: (`body`: `RESTPostAPIGuildChannelJSONBody`) => `Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>; `delete`: (`id`: `string`, `reason`?: `string`) => `Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>; `edit`: (`id`: `string`, `body`: `RESTPatchAPIChannelJSONBody`, `reason`?: `string`) => `Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>; `editPositions`: (`body`: `RESTPatchAPIGuildChannelPositionsJSONBody`) => `Promise`\<`never`\>; `fetch`: (`id`: `string`, `force`: `boolean`) => `Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>; `list`: (`force`: `boolean`) => `Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)[]\>; \} | `...` | - |
| `channels.create` | `readonly` | (`body`: `RESTPostAPIGuildChannelJSONBody`) => `Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\> | `...` | - |
| `channels.delete` | `public` | (`id`: `string`, `reason`?: `string`) => `Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\> | `...` | - |
| `channels.edit` | `public` | (`id`: `string`, `body`: `RESTPatchAPIChannelJSONBody`, `reason`?: `string`) => `Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\> | `...` | - |
| `channels.editPositions` | `public` | (`body`: `RESTPatchAPIGuildChannelPositionsJSONBody`) => `Promise`\<`never`\> | `...` | - |
| `channels.fetch` | `public` | (`id`: `string`, `force`: `boolean`) => `Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\> | `...` | - |
| `channels.list` | `public` | (`force`: `boolean`) => `Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)[]\> | `...` | - |
| `client` | `public` | [`UsingClient`](../interfaces/UsingClient.md) | `undefined` | `DiscordBase.client` |
| `createdAt` | `public` | `Date` | `undefined` | `DiscordBase.createdAt` |
| `createdTimestamp` | `public` | `number` | `undefined` | `DiscordBase.createdTimestamp` |
| `defaultMessageNotifications` | `public` | `GuildDefaultMessageNotifications` | `undefined` | `ObjectToLower.defaultMessageNotifications` |
| `description` | `public` | `null` \| `string` | `undefined` | `ObjectToLower.description` |
| `discoverySplash` | `public` | `null` \| `string` | `undefined` | `ObjectToLower.discoverySplash` |
| `emojis` | `public` | \{ `create`: (`body`: `Omit`\<`RESTPostAPIGuildEmojiJSONBody`, `"image"`\> & \{ `image`: `ImageResolvable`; \}) => `Promise`\<[`GuildEmoji`](GuildEmoji.md)\>; `edit`: (`emojiId`: `string`, `body`: `RESTPatchAPIGuildEmojiJSONBody`, `reason`?: `string`) => `Promise`\<[`GuildEmoji`](GuildEmoji.md)\>; `fetch`: (`emojiId`: `string`, `force`: `boolean`) => `Promise`\<[`GuildEmoji`](GuildEmoji.md)\>; `list`: (`force`: `boolean`) => `Promise`\<[`GuildEmoji`](GuildEmoji.md)[]\>; \} | `...` | - |
| `emojis.create` | `public` | (`body`: `Omit`\<`RESTPostAPIGuildEmojiJSONBody`, `"image"`\> & \{ `image`: `ImageResolvable`; \}) => `Promise`\<[`GuildEmoji`](GuildEmoji.md)\> | `...` | - |
| `emojis.edit` | `public` | (`emojiId`: `string`, `body`: `RESTPatchAPIGuildEmojiJSONBody`, `reason`?: `string`) => `Promise`\<[`GuildEmoji`](GuildEmoji.md)\> | `...` | - |
| `emojis.fetch` | `public` | (`emojiId`: `string`, `force`: `boolean`) => `Promise`\<[`GuildEmoji`](GuildEmoji.md)\> | `...` | - |
| `emojis.list` | `public` | (`force`: `boolean`) => `Promise`\<[`GuildEmoji`](GuildEmoji.md)[]\> | `...` | - |
| `explicitContentFilter` | `public` | `GuildExplicitContentFilter` | `undefined` | `ObjectToLower.explicitContentFilter` |
| `features` | `public` | `GuildFeature`[] | `undefined` | `ObjectToLower.features` |
| `hubType` | `public` | `null` \| `GuildHubType` | `undefined` | `ObjectToLower.hubType` |
| `icon` | `public` | `null` \| `string` | `undefined` | `ObjectToLower.icon` |
| `iconHash` | `public` | `undefined` \| `null` \| `string` | `undefined` | `ObjectToLower.iconHash` |
| `id` | `public` | `string` | `undefined` | `ObjectToLower.id` |
| `joinedAt` | `public` | `StructPropState`\<`number`, `State`, `"create"`\> | `undefined` | - |
| `large` | `public` | `StructPropState`\<`boolean`, `State`, `"create"`\> | `undefined` | - |
| `maxMembers` | `public` | `undefined` \| `number` | `undefined` | `ObjectToLower.maxMembers` |
| `maxPresences` | `public` | `undefined` \| `null` \| `number` | `undefined` | `ObjectToLower.maxPresences` |
| `maxStageVideoChannelUsers` | `public` | `undefined` \| `number` | `undefined` | `ObjectToLower.maxStageVideoChannelUsers` |
| `maxVideoChannelUsers` | `public` | `undefined` \| `number` | `undefined` | `ObjectToLower.maxVideoChannelUsers` |
| `memberCount` | `public` | `StructPropState`\<`number`, `State`, `"create"`\> | `undefined` | - |
| `members` | `public` | \{ `add`: (`id`: `string`, `body`: `RESTPutAPIGuildMemberJSONBody`) => `Promise`\<`undefined` \| [`GuildMember`](GuildMember.md)\>; `ban`: (`id`: `string`, `body`?: `RESTPutAPIGuildBanJSONBody`, `reason`?: `string`) => `Promise`\<`void`\>; `edit`: (`id`: `string`, `body`: `RESTPatchAPIGuildMemberJSONBody`, `reason`?: `string`) => `Promise`\<[`GuildMember`](GuildMember.md)\>; `fetch`: (`memberId`: `string`, `force`: `boolean`) => `Promise`\<[`GuildMember`](GuildMember.md)\>; `kick`: (`id`: `string`, `reason`?: `string`) => `Promise`\<`void`\>; `list`: (`query`?: `RESTGetAPIGuildMembersQuery`, `force`: `boolean`) => `Promise`\<[`GuildMember`](GuildMember.md)[]\>; `resolve`: (`resolve`: `GuildMemberResolvable`) => `Promise`\<`undefined` \| [`GuildMember`](GuildMember.md)\>; `search`: (`query`?: `RESTGetAPIGuildMembersSearchQuery`) => `Promise`\<[`GuildMember`](GuildMember.md)[]\>; `unban`: (`id`: `string`, `body`?: `RESTPutAPIGuildBanJSONBody`, `reason`?: `string`) => `Promise`\<`void`\>; \} | `...` | - |
| `members.add` | `public` | (`id`: `string`, `body`: `RESTPutAPIGuildMemberJSONBody`) => `Promise`\<`undefined` \| [`GuildMember`](GuildMember.md)\> | `...` | - |
| `members.ban` | `public` | (`id`: `string`, `body`?: `RESTPutAPIGuildBanJSONBody`, `reason`?: `string`) => `Promise`\<`void`\> | `...` | - |
| `members.edit` | `public` | (`id`: `string`, `body`: `RESTPatchAPIGuildMemberJSONBody`, `reason`?: `string`) => `Promise`\<[`GuildMember`](GuildMember.md)\> | `...` | - |
| `members.fetch` | `public` | (`memberId`: `string`, `force`: `boolean`) => `Promise`\<[`GuildMember`](GuildMember.md)\> | `...` | - |
| `members.kick` | `public` | (`id`: `string`, `reason`?: `string`) => `Promise`\<`void`\> | `...` | - |
| `members.list` | `public` | (`query`?: `RESTGetAPIGuildMembersQuery`, `force`: `boolean`) => `Promise`\<[`GuildMember`](GuildMember.md)[]\> | `...` | - |
| `members.resolve` | `public` | (`resolve`: `GuildMemberResolvable`) => `Promise`\<`undefined` \| [`GuildMember`](GuildMember.md)\> | `...` | - |
| `members.search` | `public` | (`query`?: `RESTGetAPIGuildMembersSearchQuery`) => `Promise`\<[`GuildMember`](GuildMember.md)[]\> | `...` | - |
| `members.unban` | `public` | (`id`: `string`, `body`?: `RESTPutAPIGuildBanJSONBody`, `reason`?: `string`) => `Promise`\<`void`\> | `...` | - |
| `mfaLevel` | `public` | `GuildMFALevel` | `undefined` | `ObjectToLower.mfaLevel` |
| `moderationRules` | `public` | \{ `create`: (`body`: `RESTPostAPIAutoModerationRuleJSONBody`) => `Promise`\<[`AutoModerationRule`](AutoModerationRule.md)\>; `delete`: (`ruleId`: `string`, `reason`?: `string`) => `Promise`\<`never`\>; `edit`: (`ruleId`: `string`, `body`: `RESTPatchAPIAutoModerationRuleJSONBody`, `reason`?: `string`) => `Promise`\<[`AutoModerationRule`](AutoModerationRule.md)\>; `fetch`: (`ruleId`: `string`) => `Promise`\<[`AutoModerationRule`](AutoModerationRule.md)\>; `list`: () => `Promise`\<[`AutoModerationRule`](AutoModerationRule.md)[]\>; \} | `...` | - |
| `moderationRules.create` | `public` | (`body`: `RESTPostAPIAutoModerationRuleJSONBody`) => `Promise`\<[`AutoModerationRule`](AutoModerationRule.md)\> | `...` | - |
| `moderationRules.delete` | `public` | (`ruleId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | `...` | - |
| `moderationRules.edit` | `public` | (`ruleId`: `string`, `body`: `RESTPatchAPIAutoModerationRuleJSONBody`, `reason`?: `string`) => `Promise`\<[`AutoModerationRule`](AutoModerationRule.md)\> | `...` | - |
| `moderationRules.fetch` | `public` | (`ruleId`: `string`) => `Promise`\<[`AutoModerationRule`](AutoModerationRule.md)\> | `...` | - |
| `moderationRules.list` | `public` | () => `Promise`\<[`AutoModerationRule`](AutoModerationRule.md)[]\> | `...` | - |
| `name` | `public` | `string` | `undefined` | `ObjectToLower.name` |
| `nsfwLevel` | `public` | `GuildNSFWLevel` | `undefined` | `ObjectToLower.nsfwLevel` |
| `owner` | `public` | `undefined` \| `boolean` | `undefined` | `ObjectToLower.owner` |
| `ownerId` | `public` | `string` | `undefined` | `ObjectToLower.ownerId` |
| `partnered` | `public` | `boolean` | `undefined` | - |
| `permissions` | `public` | `undefined` \| `string` | `undefined` | `ObjectToLower.permissions` |
| `preferredLocale` | `public` | `string` | `undefined` | `ObjectToLower.preferredLocale` |
| `premiumProgressBarEnabled` | `public` | `boolean` | `undefined` | `ObjectToLower.premiumProgressBarEnabled` |
| `premiumSubscriptionCount` | `public` | `undefined` \| `number` | `undefined` | `ObjectToLower.premiumSubscriptionCount` |
| `premiumTier` | `public` | `GuildPremiumTier` | `undefined` | `ObjectToLower.premiumTier` |
| `publicUpdatesChannelId` | `public` | `null` \| `string` | `undefined` | `ObjectToLower.publicUpdatesChannelId` |
| `region` | `public` | `string` | `undefined` | `ObjectToLower.region` |
| `rest` | `public` | [`ApiHandler`](ApiHandler.md) | `undefined` | `DiscordBase.rest` |
| `roles` | `public` | \{ `create`: (`body`: `RESTPostAPIGuildRoleJSONBody`) => `Promise`\<[`GuildRole`](GuildRole.md)\>; `delete`: (`roleId`: `string`, `reason`?: `string`) => `Promise`\<[`GuildRole`](GuildRole.md)\>; `edit`: (`roleId`: `string`, `body`: `RESTPatchAPIGuildRoleJSONBody`, `reason`?: `string`) => `Promise`\<[`GuildRole`](GuildRole.md)\>; `editPositions`: (`body`: `RESTPatchAPIGuildRolePositionsJSONBody`) => `Promise`\<[`GuildRole`](GuildRole.md)[]\>; `list`: (`force`: `boolean`) => `Promise`\<[`GuildRole`](GuildRole.md)[]\>; \} | `...` | - |
| `roles.create` | `public` | (`body`: `RESTPostAPIGuildRoleJSONBody`) => `Promise`\<[`GuildRole`](GuildRole.md)\> | `...` | - |
| `roles.delete` | `public` | (`roleId`: `string`, `reason`?: `string`) => `Promise`\<[`GuildRole`](GuildRole.md)\> | `...` | - |
| `roles.edit` | `public` | (`roleId`: `string`, `body`: `RESTPatchAPIGuildRoleJSONBody`, `reason`?: `string`) => `Promise`\<[`GuildRole`](GuildRole.md)\> | `...` | - |
| `roles.editPositions` | `public` | (`body`: `RESTPatchAPIGuildRolePositionsJSONBody`) => `Promise`\<[`GuildRole`](GuildRole.md)[]\> | `...` | - |
| `roles.list` | `public` | (`force`: `boolean`) => `Promise`\<[`GuildRole`](GuildRole.md)[]\> | `...` | - |
| `rulesChannelId` | `public` | `null` \| `string` | `undefined` | `ObjectToLower.rulesChannelId` |
| `safetyAlertsChannelId` | `public` | `null` \| `string` | `undefined` | `ObjectToLower.safetyAlertsChannelId` |
| `splash` | `public` | `null` \| `string` | `undefined` | `ObjectToLower.splash` |
| `stickers` | `public` | \{ `create`: (`payload`: [`CreateStickerBodyRequest`](../interfaces/CreateStickerBodyRequest.md), `reason`?: `string`) => `Promise`\<[`Sticker`](Sticker.md)\>; `delete`: (`stickerId`: `string`, `reason`?: `string`) => `Promise`\<`void`\>; `edit`: (`stickerId`: `string`, `body`: `RESTPatchAPIGuildStickerJSONBody`, `reason`?: `string`) => `Promise`\<[`Sticker`](Sticker.md)\>; `fetch`: (`stickerId`: `string`, `force`: `boolean`) => `Promise`\<[`Sticker`](Sticker.md)\>; `list`: () => `Promise`\<[`Sticker`](Sticker.md)[]\>; \} | `...` | - |
| `stickers.create` | `public` | (`payload`: [`CreateStickerBodyRequest`](../interfaces/CreateStickerBodyRequest.md), `reason`?: `string`) => `Promise`\<[`Sticker`](Sticker.md)\> | `...` | - |
| `stickers.delete` | `public` | (`stickerId`: `string`, `reason`?: `string`) => `Promise`\<`void`\> | `...` | - |
| `stickers.edit` | `public` | (`stickerId`: `string`, `body`: `RESTPatchAPIGuildStickerJSONBody`, `reason`?: `string`) => `Promise`\<[`Sticker`](Sticker.md)\> | `...` | - |
| `stickers.fetch` | `public` | (`stickerId`: `string`, `force`: `boolean`) => `Promise`\<[`Sticker`](Sticker.md)\> | `...` | - |
| `stickers.list` | `public` | () => `Promise`\<[`Sticker`](Sticker.md)[]\> | `...` | - |
| `systemChannelFlags` | `public` | `GuildSystemChannelFlags` | `undefined` | `ObjectToLower.systemChannelFlags` |
| `systemChannelId` | `public` | `null` \| `string` | `undefined` | `ObjectToLower.systemChannelId` |
| `templates` | `public` | \{ `create`: (`body`: `RESTPostAPIGuildTemplatesJSONBody`) => `Promise`\<[`GuildTemplate`](GuildTemplate.md)\>; `delete`: (`code`: `string`) => `Promise`\<[`GuildTemplate`](GuildTemplate.md)\>; `edit`: (`code`: `string`, `body`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`Partial`\<`RESTPostAPIGuildTemplatesJSONBody`\>\>) => `Promise`\<[`GuildTemplate`](GuildTemplate.md)\>; `fetch`: (`code`: `string`) => `Promise`\<[`GuildTemplate`](GuildTemplate.md)\>; `list`: () => `Promise`\<[`GuildTemplate`](GuildTemplate.md)[]\>; `sync`: (`code`: `string`) => `Promise`\<[`GuildTemplate`](GuildTemplate.md)\>; \} | `...` | - |
| `templates.create` | `public` | (`body`: `RESTPostAPIGuildTemplatesJSONBody`) => `Promise`\<[`GuildTemplate`](GuildTemplate.md)\> | `...` | - |
| `templates.delete` | `public` | (`code`: `string`) => `Promise`\<[`GuildTemplate`](GuildTemplate.md)\> | `...` | - |
| `templates.edit` | `public` | (`code`: `string`, `body`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`Partial`\<`RESTPostAPIGuildTemplatesJSONBody`\>\>) => `Promise`\<[`GuildTemplate`](GuildTemplate.md)\> | `...` | - |
| `templates.fetch` | `public` | (`code`: `string`) => `Promise`\<[`GuildTemplate`](GuildTemplate.md)\> | `...` | - |
| `templates.list` | `public` | () => `Promise`\<[`GuildTemplate`](GuildTemplate.md)[]\> | `...` | - |
| `templates.sync` | `public` | (`code`: `string`) => `Promise`\<[`GuildTemplate`](GuildTemplate.md)\> | `...` | - |
| `unavailable?` | `public` | `StructPropState`\<`boolean`, `State`, `"create"`\> | `undefined` | - |
| `vanityUrlCode` | `public` | `null` \| `string` | `undefined` | `ObjectToLower.vanityUrlCode` |
| `verificationLevel` | `public` | `GuildVerificationLevel` | `undefined` | `ObjectToLower.verificationLevel` |
| `verified` | `public` | `boolean` | `undefined` | - |
| `webhooks` | `public` | \{ `list`: () => `Promise`\<[`Webhook`](Webhook.md)[]\>; \} | `...` | - |
| `webhooks.list` | `public` | () => `Promise`\<[`Webhook`](Webhook.md)[]\> | `...` | - |
| `welcomeScreen` | `public` | `undefined` \| \{ `description`: `null` \| `string`; `welcomeChannels`: \{ `channelId`: `string`; `description`: `string`; `emojiId`: `null` \| `string`; `emojiName`: `null` \| `string`; \}[]; \} | `undefined` | `ObjectToLower.welcomeScreen` |
| `widgetChannelId` | `public` | `undefined` \| `null` \| `string` | `undefined` | `ObjectToLower.widgetChannelId` |
| `widgetEnabled` | `public` | `undefined` \| `boolean` | `undefined` | `ObjectToLower.widgetEnabled` |

## Accessors

### maxEmojis

```ts
get maxEmojis(): MaxEmojis
```

#### Returns

[`MaxEmojis`](../type-aliases/MaxEmojis.md)

#### Source

[seyfert/src/structures/Guild.ts:50](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Guild.ts#L50)

***

### maxStickers

```ts
get maxStickers(): MaxStickers
```

#### Returns

[`MaxStickers`](../type-aliases/MaxStickers.md)

#### Source

[seyfert/src/structures/Guild.ts:37](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Guild.ts#L37)

## Methods

### bannerURL()

```ts
bannerURL(options?: CDNUrlOptions): undefined | string
```

bannerURL gets the current guild banner as a string.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | [`CDNUrlOptions`](../interfaces/CDNUrlOptions.md) | Image options for the banner url. |

#### Returns

`undefined` \| `string`

Banner url or void

#### Link

https://discord.com/developers/docs/reference#image-formatting

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:67](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/BaseGuild.ts#L67)

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

`Promise`\<[`Guild`](Guild.md)\<`"api"`\>\>

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:32](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/BaseGuild.ts#L32)

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

`Promise`\<`null`\> \| `Promise`\<[`GuildMember`](GuildMember.md)\>

#### Source

[seyfert/src/structures/Guild.ts:63](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Guild.ts#L63)

***

### iconURL()

```ts
iconURL(options?: CDNUrlOptions): undefined | string
```

iconURL gets the current guild icon.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | [`CDNUrlOptions`](../interfaces/CDNUrlOptions.md) |

#### Returns

`undefined` \| `string`

#### Link

https://discord.com/developers/docs/reference#image-formatting

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:41](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/BaseGuild.ts#L41)

***

### splashURL()

```ts
splashURL(options?: CDNUrlOptions): undefined | string
```

splashURL gets the current guild splash as a string.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | [`CDNUrlOptions`](../interfaces/CDNUrlOptions.md) | Image options for the splash url. |

#### Returns

`undefined` \| `string`

Splash url or void.

#### Link

https://discord.com/developers/docs/reference#image-formatting

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:54](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/BaseGuild.ts#L54)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/extra/BaseGuild.ts:74](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/BaseGuild.ts#L74)
