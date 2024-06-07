[seyfert](../globals.md) / SelectMenuInteraction

# Class: SelectMenuInteraction

## Extends

- [`ComponentInteraction`](ComponentInteraction.md)

## Extended by

- [`ChannelSelectMenuInteraction`](ChannelSelectMenuInteraction.md)
- [`MentionableSelectMenuInteraction`](MentionableSelectMenuInteraction.md)
- [`RoleSelectMenuInteraction`](RoleSelectMenuInteraction.md)
- [`UserSelectMenuInteraction`](UserSelectMenuInteraction.md)

## Constructors

### new SelectMenuInteraction()

```ts
new SelectMenuInteraction(
   client: UsingClient, 
   interaction: APIMessageComponentSelectMenuInteraction, 
   __reply?: __InternalReplyFunction): SelectMenuInteraction
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `interaction` | `APIMessageComponentSelectMenuInteraction` |
| `__reply`? | `__InternalReplyFunction` |

#### Returns

[`SelectMenuInteraction`](SelectMenuInteraction.md)

#### Overrides

[`ComponentInteraction`](ComponentInteraction.md).[`constructor`](ComponentInteraction.md#constructors)

#### Source

[seyfert/src/structures/Interaction.ts:502](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L502)

## Properties

| Property | Modifier | Type | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `__reply?` | `protected` | `__InternalReplyFunction` | [`ComponentInteraction`](ComponentInteraction.md).`__reply` | [`ComponentInteraction`](ComponentInteraction.md).`__reply` |
| `appPermissions?` | `public` | `PermissionsBitField` | [`ComponentInteraction`](ComponentInteraction.md).`appPermissions` | [`ComponentInteraction`](ComponentInteraction.md).`appPermissions` |
| `applicationId` | `public` | `string` | [`ComponentInteraction`](ComponentInteraction.md).`applicationId` | [`ComponentInteraction`](ComponentInteraction.md).`applicationId` |
| `authorizingIntegrationOwners` | `public` | \{\} | [`ComponentInteraction`](ComponentInteraction.md).`authorizingIntegrationOwners` | [`ComponentInteraction`](ComponentInteraction.md).`authorizingIntegrationOwners` |
| `channel` | `public` | [`AllChannels`](../type-aliases/AllChannels.md) | [`ComponentInteraction`](ComponentInteraction.md).`channel` | [`ComponentInteraction`](ComponentInteraction.md).`channel` |
| `channelId` | `public` | `string` | [`ComponentInteraction`](ComponentInteraction.md).`channelId` | [`ComponentInteraction`](ComponentInteraction.md).`channelId` |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | [`ComponentInteraction`](ComponentInteraction.md).`client` | [`ComponentInteraction`](ComponentInteraction.md).`client` |
| `context` | `public` | `undefined` \| `InteractionContextType` | [`ComponentInteraction`](ComponentInteraction.md).`context` | [`ComponentInteraction`](ComponentInteraction.md).`context` |
| `data` | `public` | `ObjectToLower`\<APIMessageSelectMenuInteractionData \| undefined & `APIMessageSelectMenuInteractionData`\> | [`ComponentInteraction`](ComponentInteraction.md).`data` | [`ComponentInteraction`](ComponentInteraction.md).`data` |
| `entitlements` | `public` | \{ `applicationId`: `string`; `consumed`: `undefined` \| `boolean`; `deleted`: `boolean`; `endsAt`: `undefined` \| `string`; `guildId`: `undefined` \| `string`; `id`: `string`; `skuId`: `string`; `startsAt`: `undefined` \| `string`; `type`: `EntitlementType`; `userId`: `undefined` \| `string`; \}[] | [`ComponentInteraction`](ComponentInteraction.md).`entitlements` | [`ComponentInteraction`](ComponentInteraction.md).`entitlements` |
| `guildId` | `public` | `undefined` \| `string` | [`ComponentInteraction`](ComponentInteraction.md).`guildId` | [`ComponentInteraction`](ComponentInteraction.md).`guildId` |
| `guildLocale` | `public` |  \| `undefined` \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"` | [`ComponentInteraction`](ComponentInteraction.md).`guildLocale` | [`ComponentInteraction`](ComponentInteraction.md).`guildLocale` |
| `id` | `public` | `string` | [`ComponentInteraction`](ComponentInteraction.md).`id` | [`ComponentInteraction`](ComponentInteraction.md).`id` |
| `locale` | `public` |  \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"` | [`ComponentInteraction`](ComponentInteraction.md).`locale` | [`ComponentInteraction`](ComponentInteraction.md).`locale` |
| `member` | `public` | `undefined` \| [`InteractionGuildMember`](InteractionGuildMember.md) | [`ComponentInteraction`](ComponentInteraction.md).`member` | [`ComponentInteraction`](ComponentInteraction.md).`member` |
| `message` | `public` | [`Message`](Message.md) | [`ComponentInteraction`](ComponentInteraction.md).`message` | [`ComponentInteraction`](ComponentInteraction.md).`message` |
| `replied?` | `public` | `boolean` \| `Promise`\<`boolean`\> | [`ComponentInteraction`](ComponentInteraction.md).`replied` | [`ComponentInteraction`](ComponentInteraction.md).`replied` |
| `token` | `public` | `string` | [`ComponentInteraction`](ComponentInteraction.md).`token` | [`ComponentInteraction`](ComponentInteraction.md).`token` |
| `type` | `public` | `MessageComponent` | [`ComponentInteraction`](ComponentInteraction.md).`type` | [`ComponentInteraction`](ComponentInteraction.md).`type` |
| `user` | `public` | [`User`](User.md) | [`ComponentInteraction`](ComponentInteraction.md).`user` | [`ComponentInteraction`](ComponentInteraction.md).`user` |
| `version` | `public` | `1` | [`ComponentInteraction`](ComponentInteraction.md).`version` | [`ComponentInteraction`](ComponentInteraction.md).`version` |

## Accessors

### componentType

```ts
get componentType(): 
  | Button
  | StringSelect
  | UserSelect
  | RoleSelect
  | MentionableSelect
  | ChannelSelect
```

#### Returns

  \| `Button`
  \| `StringSelect`
  \| `UserSelect`
  \| `RoleSelect`
  \| `MentionableSelect`
  \| `ChannelSelect`

#### Source

[seyfert/src/structures/Interaction.ts:466](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L466)

***

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

### customId

```ts
get customId(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/Interaction.ts:462](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L462)

***

### values

```ts
get values(): string[]
```

#### Returns

`string`[]

#### Source

[seyfert/src/structures/Interaction.ts:510](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L510)

## Methods

### deferReply()

```ts
deferReply(flags?: MessageFlags): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `flags`? | `MessageFlags` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ComponentInteraction`](ComponentInteraction.md).[`deferReply`](ComponentInteraction.md#deferreply)

#### Source

[seyfert/src/structures/Interaction.ts:227](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L227)

***

### deferUpdate()

```ts
deferUpdate(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ComponentInteraction`](ComponentInteraction.md).[`deferUpdate`](ComponentInteraction.md#deferupdate)

#### Source

[seyfert/src/structures/Interaction.ts:456](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L456)

***

### deleteMessage()

```ts
deleteMessage(messageId: string): Promise<undefined | void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageId` | `string` |

#### Returns

`Promise`\<`undefined` \| `void`\>

#### Inherited from

[`ComponentInteraction`](ComponentInteraction.md).[`deleteMessage`](ComponentInteraction.md#deletemessage)

#### Source

[seyfert/src/structures/Interaction.ts:406](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L406)

***

### deleteResponse()

```ts
deleteResponse(): Promise<undefined | void>
```

#### Returns

`Promise`\<`undefined` \| `void`\>

#### Inherited from

[`ComponentInteraction`](ComponentInteraction.md).[`deleteResponse`](ComponentInteraction.md#deleteresponse)

#### Source

[seyfert/src/structures/Interaction.ts:402](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L402)

***

### editMessage()

```ts
editMessage(messageId: string, body: Omit<RESTPatchAPIWebhookWithTokenMessageJSONBody, "components" | "embeds"> & ResolverProps): Promise<WebhookMessage>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageId` | `string` |
| `body` | `Omit`\<`RESTPatchAPIWebhookWithTokenMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps` |

#### Returns

`Promise`\<[`WebhookMessage`](WebhookMessage.md)\>

#### Inherited from

[`ComponentInteraction`](ComponentInteraction.md).[`editMessage`](ComponentInteraction.md#editmessage)

#### Source

[seyfert/src/structures/Interaction.ts:394](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L394)

***

### editOrReply()

```ts
editOrReply<FR>(body: Omit<APIInteractionResponseCallbackData, "components" | "embeds" | "poll"> & SendResolverProps, fetchReply?: FR): Promise<When<FR, WebhookMessage, void>>
```

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `FR` *extends* `boolean` | `false` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `Omit`\<`APIInteractionResponseCallbackData`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps` |
| `fetchReply`? | `FR` |

#### Returns

`Promise`\<`When`\<`FR`, [`WebhookMessage`](WebhookMessage.md), `void`\>\>

#### Inherited from

[`ComponentInteraction`](ComponentInteraction.md).[`editOrReply`](ComponentInteraction.md#editorreply)

#### Source

[seyfert/src/structures/Interaction.ts:382](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L382)

***

### editResponse()

```ts
editResponse(body: Omit<RESTPatchAPIWebhookWithTokenMessageJSONBody, "components" | "embeds"> & ResolverProps): Promise<WebhookMessage>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `Omit`\<`RESTPatchAPIWebhookWithTokenMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps` |

#### Returns

`Promise`\<[`WebhookMessage`](WebhookMessage.md)\>

#### Inherited from

[`ComponentInteraction`](ComponentInteraction.md).[`editResponse`](ComponentInteraction.md#editresponse)

#### Source

[seyfert/src/structures/Interaction.ts:398](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L398)

***

### fetchGuild()

```ts
fetchGuild(force: boolean): undefined | Promise<Guild<"cached"> | Guild<"api">>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`undefined` \| `Promise`\<[`Guild`](Guild.md)\<`"cached"`\> \| [`Guild`](Guild.md)\<`"api"`\>\>

#### Inherited from

[`ComponentInteraction`](ComponentInteraction.md).[`fetchGuild`](ComponentInteraction.md#fetchguild)

#### Source

[seyfert/src/structures/Interaction.ts:289](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L289)

***

### fetchMessage()

```ts
fetchMessage(messageId: string): Promise<undefined | WebhookMessage>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageId` | `string` |

#### Returns

`Promise`\<`undefined` \| [`WebhookMessage`](WebhookMessage.md)\>

#### Inherited from

[`ComponentInteraction`](ComponentInteraction.md).[`fetchMessage`](ComponentInteraction.md#fetchmessage)

#### Source

[seyfert/src/structures/Interaction.ts:355](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L355)

***

### fetchResponse()

```ts
fetchResponse(): Promise<undefined | WebhookMessage>
```

#### Returns

`Promise`\<`undefined` \| [`WebhookMessage`](WebhookMessage.md)\>

#### Inherited from

[`ComponentInteraction`](ComponentInteraction.md).[`fetchResponse`](ComponentInteraction.md#fetchresponse)

#### Source

[seyfert/src/structures/Interaction.ts:359](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L359)

***

### followup()

```ts
followup(body: Omit<RESTPostAPIWebhookWithTokenJSONBody, "components" | "embeds" | "poll"> & SendResolverProps): Promise<WebhookMessage>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `Omit`\<`RESTPostAPIWebhookWithTokenJSONBody`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps` |

#### Returns

`Promise`\<[`WebhookMessage`](WebhookMessage.md)\>

#### Inherited from

[`ComponentInteraction`](ComponentInteraction.md).[`followup`](ComponentInteraction.md#followup)

#### Source

[seyfert/src/structures/Interaction.ts:410](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L410)

***

### isButton()

```ts
isButton(): this is ButtonInteraction
```

#### Returns

`this is ButtonInteraction`

#### Inherited from

[`ComponentInteraction`](ComponentInteraction.md).[`isButton`](ComponentInteraction.md#isbutton)

#### Source

[seyfert/src/structures/Interaction.ts:470](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L470)

***

### isChannelSelectMenu()

```ts
isChannelSelectMenu(): this is ChannelSelectMenuInteraction
```

#### Returns

`this is ChannelSelectMenuInteraction`

#### Inherited from

[`ComponentInteraction`](ComponentInteraction.md).[`isChannelSelectMenu`](ComponentInteraction.md#ischannelselectmenu)

#### Source

[seyfert/src/structures/Interaction.ts:474](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L474)

***

### isMentionableSelectMenu()

```ts
isMentionableSelectMenu(): this is MentionableSelectMenuInteraction
```

#### Returns

`this is MentionableSelectMenuInteraction`

#### Inherited from

[`ComponentInteraction`](ComponentInteraction.md).[`isMentionableSelectMenu`](ComponentInteraction.md#ismentionableselectmenu)

#### Source

[seyfert/src/structures/Interaction.ts:482](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L482)

***

### isRoleSelectMenu()

```ts
isRoleSelectMenu(): this is RoleSelectMenuInteraction
```

#### Returns

`this is RoleSelectMenuInteraction`

#### Inherited from

[`ComponentInteraction`](ComponentInteraction.md).[`isRoleSelectMenu`](ComponentInteraction.md#isroleselectmenu)

#### Source

[seyfert/src/structures/Interaction.ts:478](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L478)

***

### isStringSelectMenu()

```ts
isStringSelectMenu(): this is StringSelectMenuInteraction<string[]>
```

#### Returns

`this is StringSelectMenuInteraction<string[]>`

#### Inherited from

[`ComponentInteraction`](ComponentInteraction.md).[`isStringSelectMenu`](ComponentInteraction.md#isstringselectmenu)

#### Source

[seyfert/src/structures/Interaction.ts:490](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L490)

***

### isUserSelectMenu()

```ts
isUserSelectMenu(): this is UserSelectMenuInteraction
```

#### Returns

`this is UserSelectMenuInteraction`

#### Inherited from

[`ComponentInteraction`](ComponentInteraction.md).[`isUserSelectMenu`](ComponentInteraction.md#isuserselectmenu)

#### Source

[seyfert/src/structures/Interaction.ts:486](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L486)

***

### modal()

```ts
modal(body: ModalCreateBodyRequest): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `ModalCreateBodyRequest` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ComponentInteraction`](ComponentInteraction.md).[`modal`](ComponentInteraction.md#modal)

#### Source

[seyfert/src/structures/Interaction.ts:375](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L375)

***

### reply()

```ts
reply(body: ReplyInteractionBody): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | [`ReplyInteractionBody`](../type-aliases/ReplyInteractionBody.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ComponentInteraction`](ComponentInteraction.md).[`reply`](ComponentInteraction.md#reply)

#### Source

[seyfert/src/structures/Interaction.ts:216](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L216)

***

### update()

```ts
update(data: Omit<APIInteractionResponseCallbackData, "components" | "embeds"> & ResolverProps): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Omit`\<`APIInteractionResponseCallbackData`, `"components"` \| `"embeds"`\> & `ResolverProps` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ComponentInteraction`](ComponentInteraction.md).[`update`](ComponentInteraction.md#update)

#### Source

[seyfert/src/structures/Interaction.ts:449](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L449)

***

### write()

```ts
write<FR>(body: Omit<APIInteractionResponseCallbackData, "components" | "embeds" | "poll"> & SendResolverProps, fetchReply?: FR): Promise<When<FR, WebhookMessage, void>>
```

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `FR` *extends* `boolean` | `false` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `Omit`\<`APIInteractionResponseCallbackData`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps` |
| `fetchReply`? | `FR` |

#### Returns

`Promise`\<`When`\<`FR`, [`WebhookMessage`](WebhookMessage.md), `void`\>\>

#### Inherited from

[`ComponentInteraction`](ComponentInteraction.md).[`write`](ComponentInteraction.md#write)

#### Source

[seyfert/src/structures/Interaction.ts:363](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L363)

***

### from()

```ts
static from(
   client: UsingClient, 
   gateway: APIInteraction, 
   __reply?: __InternalReplyFunction): 
  | RoleSelectMenuInteraction
  | UserSelectMenuInteraction
  | MentionableSelectMenuInteraction
  | ChannelSelectMenuInteraction
  | StringSelectMenuInteraction<string[]>
  | AutocompleteInteraction<boolean>
  | ChatInputCommandInteraction<boolean>
  | UserCommandInteraction<boolean>
  | MessageCommandInteraction<boolean>
  | ButtonInteraction
  | ModalSubmitInteraction<boolean>
| BaseInteraction<boolean, APIPingInteraction>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `gateway` | `APIInteraction` |
| `__reply`? | `__InternalReplyFunction` |

#### Returns

  \| [`RoleSelectMenuInteraction`](RoleSelectMenuInteraction.md)
  \| [`UserSelectMenuInteraction`](UserSelectMenuInteraction.md)
  \| [`MentionableSelectMenuInteraction`](MentionableSelectMenuInteraction.md)
  \| [`ChannelSelectMenuInteraction`](ChannelSelectMenuInteraction.md)
  \| [`StringSelectMenuInteraction`](StringSelectMenuInteraction.md)\<`string`[]\>
  \| [`AutocompleteInteraction`](AutocompleteInteraction.md)\<`boolean`\>
  \| [`ChatInputCommandInteraction`](ChatInputCommandInteraction.md)\<`boolean`\>
  \| [`UserCommandInteraction`](UserCommandInteraction.md)\<`boolean`\>
  \| [`MessageCommandInteraction`](MessageCommandInteraction.md)\<`boolean`\>
  \| [`ButtonInteraction`](ButtonInteraction.md)
  \| [`ModalSubmitInteraction`](ModalSubmitInteraction.md)\<`boolean`\>
  \| [`BaseInteraction`](BaseInteraction.md)\<`boolean`, `APIPingInteraction`\>

#### Inherited from

[`ComponentInteraction`](ComponentInteraction.md).[`from`](ComponentInteraction.md#from)

#### Source

[seyfert/src/structures/Interaction.ts:236](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L236)

***

### transformBody()

```ts
static transformBody<T>(
   body: Omit<RESTPostAPIChannelMessageJSONBody, "components" | "embeds" | "poll"> & SendResolverProps | Omit<RESTPatchAPIChannelMessageJSONBody, "components" | "embeds"> & ResolverProps | Omit<RESTPostAPIWebhookWithTokenJSONBody, "components" | "embeds" | "poll"> & SendResolverProps | Omit<RESTPatchAPIWebhookWithTokenMessageJSONBody, "components" | "embeds"> & ResolverProps, 
   files: undefined | RawFile[], 
   self: UsingClient): T
```

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps` \| `Omit`\<`RESTPatchAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps` \| `Omit`\<`RESTPostAPIWebhookWithTokenJSONBody`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps` \| `Omit`\<`RESTPatchAPIWebhookWithTokenMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps` |
| `files` | `undefined` \| [`RawFile`](../interfaces/RawFile.md)[] |
| `self` | [`UsingClient`](../interfaces/UsingClient.md) |

#### Returns

`T`

#### Inherited from

[`ComponentInteraction`](ComponentInteraction.md).[`transformBody`](ComponentInteraction.md#transformbody)

#### Source

[seyfert/src/structures/Interaction.ts:174](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L174)

***

### transformBodyRequest()

```ts
static transformBodyRequest(
   body: ReplyInteractionBody, 
   files: undefined | RawFile[], 
   self: UsingClient): APIInteractionResponse
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | [`ReplyInteractionBody`](../type-aliases/ReplyInteractionBody.md) |
| `files` | `undefined` \| [`RawFile`](../interfaces/RawFile.md)[] |
| `self` | [`UsingClient`](../interfaces/UsingClient.md) |

#### Returns

`APIInteractionResponse`

#### Inherited from

[`ComponentInteraction`](ComponentInteraction.md).[`transformBodyRequest`](ComponentInteraction.md#transformbodyrequest)

#### Source

[seyfert/src/structures/Interaction.ts:118](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L118)
