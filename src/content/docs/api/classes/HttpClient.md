---
editUrl: false
next: false
prev: false
title: "HttpClient"
---

## Extends

- `BaseClient`

## Constructors

### new HttpClient(options)

```ts
new HttpClient(options?: BaseClientOptions): HttpClient
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | `BaseClientOptions` |

#### Returns

[`HttpClient`](/api/classes/httpclient/)

#### Overrides

`BaseClient.constructor`

#### Source

[seyfert/src/client/httpclient.ts:31](https://github.com/potoland/potocuit/blob/fe122a1/src/client/httpclient.ts#L31)

## Properties

| Property | Type | Inherited from |
| :------ | :------ | :------ |
| `app` | `TemplatedApp` | - |
| `cache` | [`Cache`](/api/classes/cache/) | `BaseClient.cache` |
| `channels` | `Object` | `BaseClient.channels` |
| `channels.delete` | (`id`: `string`, `optional`: `Partial`\<`Object`\>) => `Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\> | - |
| `channels.edit` | (`id`: `string`, `body`: `RESTPatchAPIChannelJSONBody`, `optional`: `Partial`\<`Object`\>) => `Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\> | - |
| `channels.fetch` | (`id`: `string`, `force`?: `boolean`) => `Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\> | - |
| `channels.overwrites` | `Object` | - |
| `channels.overwrites.memberPermissions` | (`channelId`: `string`, `member`: [`GuildMember`](/api/classes/guildmember/), `checkAdmin`: `boolean`) => `Promise`\<`PermissionsBitField`\> | - |
| `channels.overwrites.overwritesFor` | (`channelId`: `string`, `member`: [`GuildMember`](/api/classes/guildmember/)) => `Promise`\<`Object`\> | - |
| `channels.overwrites.rolePermissions` | (`channelId`: `string`, `role`: [`GuildRole`](/api/classes/guildrole/), `checkAdmin`: `boolean`) => `Promise`\<`PermissionsBitField`\> | - |
| `channels.pins` | `Object` | - |
| `channels.pins.delete` | (`messageId`: `string`, `channelId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | - |
| `channels.pins.fetch` | (`channelId`: `string`) => `Promise`\<[`Message`](/api/classes/message/)[]\> | - |
| `channels.pins.set` | (`messageId`: `string`, `channelId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | - |
| `channels.typing` | (`id`: `string`) => `Promise`\<`never`\> | - |
| `commands` | `CommandHandler` | `BaseClient.commands` |
| `components` | `ComponentHandler` | `BaseClient.components` |
| `debugger?` | [`Logger`](/api/classes/logger/) | `BaseClient.debugger` |
| `guilds` | `Object` | `BaseClient.guilds` |
| `guilds.channels` | `Object` | - |
| `guilds.channels.create` | (`guildId`: `string`, `body`: `RESTPostAPIGuildChannelJSONBody`) => `Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\> | - |
| `guilds.channels.delete` | (`guildId`: `string`, `channelId`: `string`, `reason`?: `string`) => `Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\> | - |
| `guilds.channels.edit` | (`guildchannelId`: `string`, `channelId`: `string`, `body`: `RESTPatchAPIChannelJSONBody`, `reason`?: `string`) => `Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\> | - |
| `guilds.channels.editPositions` | (`guildId`: `string`, `body`: `RESTPatchAPIGuildChannelPositionsJSONBody`) => `Promise`\<`never`\> | - |
| `guilds.channels.fetch` | (`guildId`: `string`, `channelId`: `string`, `force`?: `boolean`) => `Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\> | - |
| `guilds.channels.list` | (`guildId`: `string`, `force`: `boolean`) => `Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)[]\> | - |
| `guilds.create` | (`body`: `RESTPostAPIGuildsJSONBody`) => `Promise`\<[`Guild`](/api/classes/guild/)\<`"api"`\>\> | - |
| `guilds.emojis` | `Object` | - |
| `guilds.emojis.create` | (`guildId`: `string`, `body`: `Omit`\<`RESTPostAPIGuildEmojiJSONBody`, `"image"`\> & `Object`) => `Promise`\<`void`\> | - |
| `guilds.emojis.delete` | (`guildId`: `string`, `emojiId`: `string`, `reason`?: `string`) => `Promise`\<`void`\> | - |
| `guilds.emojis.edit` | (`guildId`: `string`, `emojiId`: `string`, `body`: `RESTPatchAPIGuildEmojiJSONBody`, `reason`?: `string`) => `Promise`\<[`GuildEmoji`](/api/classes/guildemoji/)\> | - |
| `guilds.emojis.fetch` | (`guildId`: `string`, `emojiId`: `string`, `force`: `boolean`) => `Promise`\<[`GuildEmoji`](/api/classes/guildemoji/)\> | - |
| `guilds.emojis.list` | (`guildId`: `string`, `force`: `boolean`) => `Promise`\<[`GuildEmoji`](/api/classes/guildemoji/)[]\> | - |
| `guilds.fetch` | (`id`: `string`, `force`: `boolean`) => `Promise`\<[`Guild`](/api/classes/guild/)\<`"cached"`\> \| [`Guild`](/api/classes/guild/)\<`"api"`\>\> | - |
| `guilds.fetchSelf` | (`id`: `string`) => `Promise`\<[`GuildMember`](/api/classes/guildmember/)\> | - |
| `guilds.leave` | (`id`: `string`) => `Promise`\<`undefined` \| `void`\> | - |
| `guilds.list` | (`query`?: `RESTGetAPICurrentUserGuildsQuery`) => `Promise`\<[`AnonymousGuild`](/api/classes/anonymousguild/)[]\> | - |
| `guilds.moderation` | `Object` | - |
| `guilds.moderation.create` | (`guildId`: `string`, `body`: `RESTPostAPIAutoModerationRuleJSONBody`) => `Promise`\<`APIAutoModerationRule`\> | - |
| `guilds.moderation.delete` | (`guildId`: `string`, `ruleId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | - |
| `guilds.moderation.edit` | (`guildId`: `string`, `ruleId`: `string`, `body`: `Object`, `reason`?: `string`) => `Promise`\<`APIAutoModerationRule`\> | - |
| `guilds.moderation.fetch` | (`guildId`: `string`, `ruleId`: `string`) => `Promise`\<`APIAutoModerationRule`\> | - |
| `guilds.moderation.list` | (`guildId`: `string`) => `Promise`\<`RESTGetAPIAutoModerationRulesResult`\> | - |
| `guilds.stickers` | `Object` | - |
| `guilds.stickers.create` | (`guildId`: `string`, `request`: [`CreateStickerBodyRequest`](/api/interfaces/createstickerbodyrequest/), `reason`?: `string`) => `Promise`\<[`Sticker`](/api/classes/sticker/)\> | - |
| `guilds.stickers.delete` | (`guildId`: `string`, `stickerId`: `string`, `reason`?: `string`) => `Promise`\<`void`\> | - |
| `guilds.stickers.edit` | (`guildId`: `string`, `stickerId`: `string`, `body`: `RESTPatchAPIGuildStickerJSONBody`, `reason`?: `string`) => `Promise`\<[`Sticker`](/api/classes/sticker/)\> | - |
| `guilds.stickers.fetch` | (`guildId`: `string`, `stickerId`: `string`, `force`: `boolean`) => `Promise`\<[`Sticker`](/api/classes/sticker/)\> | - |
| `guilds.stickers.list` | (`guildId`: `string`) => `Promise`\<[`Sticker`](/api/classes/sticker/)[]\> | - |
| `guilds.widgetURL` | (`id`: `string`, `style`?: `GuildWidgetStyle`) => `Promise`\<`APIGuildWidgetSettings`\> | - |
| `langs` | [`LangsHandler`](/api/classes/langshandler/) | `BaseClient.langs` |
| `logger` | [`Logger`](/api/classes/logger/) | `BaseClient.logger` |
| `members` | `Object` | `BaseClient.members` |
| `members.add` | (`guildId`: `string`, `memberId`: `string`, `body`: `RESTPutAPIGuildMemberJSONBody`) => `Promise`\<`undefined` \| [`GuildMember`](/api/classes/guildmember/)\> | - |
| `members.ban` | (`guildId`: `string`, `memberId`: `string`, `body`?: `RESTPutAPIGuildBanJSONBody`, `reason`?: `string`) => `Promise`\<`void`\> | - |
| `members.edit` | (`guildId`: `string`, `memberId`: `string`, `body`: `RESTPatchAPIGuildMemberJSONBody`, `reason`?: `string`) => `Promise`\<[`GuildMember`](/api/classes/guildmember/)\> | - |
| `members.fetch` | (`guildId`: `string`, `memberId`: `string`, `force`: `boolean`) => `Promise`\<[`GuildMember`](/api/classes/guildmember/)\> | - |
| `members.kick` | (`guildId`: `string`, `memberId`: `string`, `reason`?: `string`) => `Promise`\<`void`\> | - |
| `members.list` | (`guildId`: `string`, `query`?: `RESTGetAPIGuildMembersQuery`, `force`: `boolean`) => `Promise`\<[`GuildMember`](/api/classes/guildmember/)[]\> | - |
| `members.resolve` | (`guildId`: `string`, `resolve`: `GuildMemberResolvable`) => `Promise`\<`undefined` \| [`GuildMember`](/api/classes/guildmember/)\> | - |
| `members.roles` | `Object` | - |
| `members.roles.add` | (`guildId`: `string`, `memberId`: `string`, `id`: `string`) => `Promise`\<`void`\> | - |
| `members.roles.remove` | (`guildId`: `string`, `memberId`: `string`, `id`: `string`) => `Promise`\<`void`\> | - |
| `members.search` | (`guildId`: `string`, `query`?: `RESTGetAPIGuildMembersSearchQuery`) => `Promise`\<[`GuildMember`](/api/classes/guildmember/)[]\> | - |
| `members.unban` | (`guildId`: `string`, `memberId`: `string`, `body`?: `RESTPutAPIGuildBanJSONBody`, `reason`?: `string`) => `Promise`\<`void`\> | - |
| `messages` | `Object` | `BaseClient.messages` |
| `messages.crosspost` | (`messageId`: `string`, `channelId`: `string`, `reason`?: `string`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `messages.delete` | (`messageId`: `string`, `channelId`: `string`, `reason`?: `string`) => `Promise`\<`void`\> | - |
| `messages.edit` | (`messageId`: `string`, `channelId`: `string`, `__namedParameters`: `Omit`\<`RESTPatchAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `messages.fetch` | (`messageId`: `string`, `channelId`: `string`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `messages.purge` | (`messages`: `string`[], `channelId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | - |
| `messages.reactions` | `Object` | - |
| `messages.reactions.add` | (`messageId`: `string`, `channelId`: `string`, `emoji`: `EmojiResolvable`) => `Promise`\<`never`\> | - |
| `messages.reactions.delete` | (`messageId`: `string`, `channelId`: `string`, `emoji`: `EmojiResolvable`, `userId`: `string`) => `Promise`\<`never`\> | - |
| `messages.reactions.fetch` | (`messageId`: `string`, `channelId`: `string`, `emoji`: `EmojiResolvable`, `query`?: `RESTGetAPIChannelMessageReactionUsersQuery`) => `Promise`\<[`User`](/api/classes/user/)[]\> | - |
| `messages.reactions.purge` | (`messageId`: `string`, `channelId`: `string`, `emoji`?: `EmojiResolvable`) => `Promise`\<`never`\> | - |
| `messages.write` | (`channelId`: `string`, `__namedParameters`: `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `middlewares?` | `Record`\<`string`, [`MiddlewareContext`](/api/type-aliases/middlewarecontext/)\> | `BaseClient.middlewares` |
| `options` | `undefined` \| `BaseClientOptions` | `BaseClient.options` |
| `publicKey` | `string` | - |
| `publicKeyHex` | `Buffer` | - |
| `rest` | [`ApiHandler`](/api/classes/apihandler/) | `BaseClient.rest` |
| `roles` | `Object` | `BaseClient.roles` |
| `roles.create` | (`guildId`: `string`, `body`: `RESTPostAPIGuildRoleJSONBody`, `reason`?: `string`) => `Promise`\<`any`\> | - |
| `roles.delete` | (`guildId`: `string`, `roleId`: `string`, `reason`?: `string`) => `Promise`\<`undefined` \| `void`\> | - |
| `roles.edit` | (`guildId`: `string`, `roleId`: `string`, `body`: `RESTPatchAPIGuildRoleJSONBody`, `reason`?: `string`) => `Promise`\<`any`\> | - |
| `roles.editPositions` | (`guildId`: `string`, `body`: `RESTPatchAPIGuildRolePositionsJSONBody`) => `Promise`\<[`GuildRole`](/api/classes/guildrole/)[]\> | - |
| `roles.list` | (`guildId`: `string`, `force`: `boolean`) => `Promise`\<[`GuildRole`](/api/classes/guildrole/)[]\> | - |
| `templates` | `Object` | `BaseClient.templates` |
| `templates.create` | (`guildId`: `string`, `body`: `RESTPostAPIGuildTemplatesJSONBody`) => `Promise`\<`APITemplate`\> | - |
| `templates.delete` | (`guildId`: `string`, `code`: `string`) => `Promise`\<`APITemplate`\> | - |
| `templates.edit` | (`guildId`: `string`, `code`: `string`, `body`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`Partial`\<`RESTPostAPIGuildTemplatesJSONBody`\>\>) => `Promise`\<`APITemplate`\> | - |
| `templates.fetch` | (`code`: `string`) => `Promise`\<`APITemplate`\> | - |
| `templates.list` | (`guildId`: `string`) => `Promise`\<`RESTGetAPIGuildTemplatesResult`\> | - |
| `templates.sync` | (`guildId`: `string`, `code`: `string`) => `Promise`\<`APITemplate`\> | - |
| `users` | `Object` | `BaseClient.users` |
| `users.createDM` | (`userId`: `string`, `force`: `boolean`) => `Promise`\<[`DMChannel`](/api/classes/dmchannel/)\> | - |
| `users.deleteDM` | (`userId`: `string`, `reason`?: `string`) => `Promise`\<[`DMChannel`](/api/classes/dmchannel/)\> | - |
| `users.fetch` | (`userId`: `string`, `force`: `boolean`) => `Promise`\<[`User`](/api/classes/user/)\> | - |
| `users.write` | (`userId`: `string`, `body`: `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](/api/classes/message/)\> | - |
| `webhooks` | `Object` | `BaseClient.webhooks` |
| `webhooks.delete` | (`webhookId`: `string`, `__namedParameters`: `Partial`\<`Object`\>) => `Promise`\<`never`\> | - |
| `webhooks.edit` | (`webhookId`: `string`, `body`: `RESTPatchAPIWebhookJSONBody` \| `RESTPatchAPIWebhookWithTokenJSONBody`, `__namedParameters`: `Partial`\<`Object`\>) => `Promise`\<`RESTGetAPIWebhookWithTokenResult`\> | - |
| `webhooks.fetch` | (`webhookId`: `string`, `token`?: `string`) => `Promise`\<[`Webhook`](/api/classes/webhook/)\> | - |
| `webhooks.messages` | `Object` | - |
| `webhooks.messages.delete` | (`webhookId`: `string`, `token`: `string`, `messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | - |
| `webhooks.messages.edit` | (`webhookId`: `string`, `token`: `string`, `__namedParameters`: `Object`) => `Promise`\<[`WebhookMessage`](/api/classes/webhookmessage/)\> | - |
| `webhooks.messages.fetch` | (`webhookId`: `string`, `token`: `string`, `messageId`: `string`, `threadId`?: `string`) => `Promise`\<`undefined` \| [`WebhookMessage`](/api/classes/webhookmessage/)\> | - |
| `webhooks.messages.write` | (`webhookId`: `string`, `token`: `string`, `__namedParameters`: `Object`) => `Promise`\<`null` \| [`WebhookMessage`](/api/classes/webhookmessage/)\> | - |

## Accessors

### applicationId

```ts
get applicationId(): string
```

```ts
set applicationId(id: string): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`string`

#### Source

[seyfert/src/client/base.ts:84](https://github.com/potoland/potocuit/blob/fe122a1/src/client/base.ts#L84)

***

### botId

```ts
get botId(): string
```

```ts
set botId(id: string): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`string`

#### Source

[seyfert/src/client/base.ts:76](https://github.com/potoland/potocuit/blob/fe122a1/src/client/base.ts#L76)

***

### proxy

```ts
get proxy(): APIRoutes
```

#### Returns

[`APIRoutes`](/api/type-aliases/apiroutes/)

#### Source

[seyfert/src/client/base.ts:88](https://github.com/potoland/potocuit/blob/fe122a1/src/client/base.ts#L88)

## Methods

### getRC()

```ts
getRC<T>(): Promise<Object & Omit<T, "debug" | "locations"> & Object>
```

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends `InternalRuntimeConfigHTTP` \| `InternalRuntimeConfig` | `InternalRuntimeConfigHTTP` \| `InternalRuntimeConfig` |

#### Returns

`Promise`\<`Object` & `Omit`\<`T`, `"debug"` \| `"locations"`\> & `Object`\>

#### Inherited from

`BaseClient.getRC`

#### Source

[seyfert/src/client/base.ts:217](https://github.com/potoland/potocuit/blob/fe122a1/src/client/base.ts#L217)

***

### loadCommands()

```ts
loadCommands(dir?: string): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dir`? | `string` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseClient.loadCommands`

#### Source

[seyfert/src/client/base.ts:189](https://github.com/potoland/potocuit/blob/fe122a1/src/client/base.ts#L189)

***

### loadComponents()

```ts
loadComponents(dir?: string): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dir`? | `string` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseClient.loadComponents`

#### Source

[seyfert/src/client/base.ts:197](https://github.com/potoland/potocuit/blob/fe122a1/src/client/base.ts#L197)

***

### loadLangs()

```ts
loadLangs(dir?: string): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dir`? | `string` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseClient.loadLangs`

#### Source

[seyfert/src/client/base.ts:205](https://github.com/potoland/potocuit/blob/fe122a1/src/client/base.ts#L205)

***

### onPacket()

```ts
onPacket(res: HttpResponse, req: HttpRequest): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `res` | `HttpResponse` |
| `req` | `HttpRequest` |

#### Returns

`Promise`\<`void`\>

#### Overrides

`BaseClient.onPacket`

#### Source

[seyfert/src/client/httpclient.ts:118](https://github.com/potoland/potocuit/blob/fe122a1/src/client/httpclient.ts#L118)

***

### setServices()

```ts
setServices(__namedParameters: ServicesOptions): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | `ServicesOptions` |

#### Returns

`void`

#### Inherited from

`BaseClient.setServices`

#### Source

[seyfert/src/client/base.ts:92](https://github.com/potoland/potocuit/blob/fe122a1/src/client/base.ts#L92)

***

### start()

```ts
start(options: DeepPartial<Omit<StartOptions, "connection">>): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `DeepPartial`\<`Omit`\<`StartOptions`, `"connection"`\>\> |

#### Returns

`Promise`\<`void`\>

#### Overrides

`BaseClient.start`

#### Source

[seyfert/src/client/httpclient.ts:96](https://github.com/potoland/potocuit/blob/fe122a1/src/client/httpclient.ts#L96)

***

### t()

```ts
t(locale: string): __InternalParseLocale<DefaultLocale> & Object
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `locale` | `string` |

#### Returns

[`__InternalParseLocale`](/api/type-aliases/internalparselocale/)\<[`DefaultLocale`](/api/interfaces/defaultlocale/)\> & `Object`

#### Inherited from

`BaseClient.t`

#### Source

[seyfert/src/client/base.ts:213](https://github.com/potoland/potocuit/blob/fe122a1/src/client/base.ts#L213)

***

### uploadCommands()

```ts
uploadCommands(applicationId?: string): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `applicationId`? | `string` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseClient.uploadCommands`

#### Source

[seyfert/src/client/base.ts:160](https://github.com/potoland/potocuit/blob/fe122a1/src/client/base.ts#L160)
