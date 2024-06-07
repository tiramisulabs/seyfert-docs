[seyfert](../globals.md) / ApplicationCommandInteraction

# Class: ApplicationCommandInteraction\<FromGuild, Type\>

## Extends

- [`Interaction`](Interaction.md)\<`FromGuild`, `Type`\>

## Extended by

- [`ChatInputCommandInteraction`](ChatInputCommandInteraction.md)
- [`UserCommandInteraction`](UserCommandInteraction.md)
- [`MessageCommandInteraction`](MessageCommandInteraction.md)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `FromGuild` *extends* `boolean` | `boolean` |
| `Type` *extends* `APIApplicationCommandInteraction` | `APIApplicationCommandInteraction` |

## Constructors

### new ApplicationCommandInteraction()

```ts
new ApplicationCommandInteraction<FromGuild, Type>(
   client: UsingClient, 
   interaction: Type, 
__reply?: __InternalReplyFunction): ApplicationCommandInteraction<FromGuild, Type>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `interaction` | `Type` |
| `__reply`? | `__InternalReplyFunction` |

#### Returns

[`ApplicationCommandInteraction`](ApplicationCommandInteraction.md)\<`FromGuild`, `Type`\>

#### Inherited from

[`Interaction`](Interaction.md).[`constructor`](Interaction.md#constructors)

#### Source

[seyfert/src/structures/Interaction.ts:92](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L92)

## Properties

| Property | Modifier | Type | Default value | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `__reply?` | `protected` | `__InternalReplyFunction` | `undefined` | [`Interaction`](Interaction.md).`__reply` |
| `appPermissions?` | `public` | `PermissionsBitField` | `undefined` | [`Interaction`](Interaction.md).`appPermissions` |
| `applicationId` | `public` | `string` | `undefined` | [`Interaction`](Interaction.md).`applicationId` |
| `authorizingIntegrationOwners` | `public` | \{\} | `undefined` | [`Interaction`](Interaction.md).`authorizingIntegrationOwners` |
| `channel?` | `public` | [`AllChannels`](../type-aliases/AllChannels.md) | `undefined` | [`Interaction`](Interaction.md).`channel` |
| `channelId` | `public` | `undefined` \| `string` | `undefined` | [`Interaction`](Interaction.md).`channelId` |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | `undefined` | [`Interaction`](Interaction.md).`client` |
| `context` | `public` | `undefined` \| `InteractionContextType` | `undefined` | [`Interaction`](Interaction.md).`context` |
| `data` | `public` |  \| `undefined` \| \{\}[] \| \{\} \| \{\}[] \| \{\} | `undefined` | [`Interaction`](Interaction.md).`data` |
| `entitlements` | `public` | \{ `applicationId`: `string`; `consumed`: `undefined` \| `boolean`; `deleted`: `boolean`; `endsAt`: `undefined` \| `string`; `guildId`: `undefined` \| `string`; `id`: `string`; `skuId`: `string`; `startsAt`: `undefined` \| `string`; `type`: `EntitlementType`; `userId`: `undefined` \| `string`; \}[] | `undefined` | [`Interaction`](Interaction.md).`entitlements` |
| `guildId` | `public` | `undefined` \| `string` | `undefined` | [`Interaction`](Interaction.md).`guildId` |
| `guildLocale` | `public` |  \| `undefined` \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"` | `undefined` | [`Interaction`](Interaction.md).`guildLocale` |
| `id` | `public` | `string` | `undefined` | [`Interaction`](Interaction.md).`id` |
| `locale` | `public` |  \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"` | `undefined` | [`Interaction`](Interaction.md).`locale` |
| `member` | `public` | `When`\<`FromGuild`, [`InteractionGuildMember`](InteractionGuildMember.md), `undefined`\> | `undefined` | [`Interaction`](Interaction.md).`member` |
| `message?` | `public` | [`Message`](Message.md) | `undefined` | [`Interaction`](Interaction.md).`message` |
| `replied?` | `public` | `boolean` \| `Promise`\<`boolean`\> | `undefined` | [`Interaction`](Interaction.md).`replied` |
| `token` | `public` | `string` | `undefined` | [`Interaction`](Interaction.md).`token` |
| `type` | `public` | `ApplicationCommandType` | `ApplicationCommandType.ChatInput` | - |
| `user` | `public` | [`User`](User.md) | `undefined` | [`Interaction`](Interaction.md).`user` |
| `version` | `public` | `1` | `undefined` | [`Interaction`](Interaction.md).`version` |

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

[`Interaction`](Interaction.md).[`deferReply`](Interaction.md#deferreply)

#### Source

[seyfert/src/structures/Interaction.ts:227](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L227)

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

[`Interaction`](Interaction.md).[`deleteMessage`](Interaction.md#deletemessage)

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

[`Interaction`](Interaction.md).[`deleteResponse`](Interaction.md#deleteresponse)

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

[`Interaction`](Interaction.md).[`editMessage`](Interaction.md#editmessage)

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

[`Interaction`](Interaction.md).[`editOrReply`](Interaction.md#editorreply)

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

[`Interaction`](Interaction.md).[`editResponse`](Interaction.md#editresponse)

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

[`Interaction`](Interaction.md).[`fetchGuild`](Interaction.md#fetchguild)

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

[`Interaction`](Interaction.md).[`fetchMessage`](Interaction.md#fetchmessage)

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

[`Interaction`](Interaction.md).[`fetchResponse`](Interaction.md#fetchresponse)

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

[`Interaction`](Interaction.md).[`followup`](Interaction.md#followup)

#### Source

[seyfert/src/structures/Interaction.ts:410](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L410)

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

[`Interaction`](Interaction.md).[`modal`](Interaction.md#modal)

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

[`Interaction`](Interaction.md).[`reply`](Interaction.md#reply)

#### Source

[seyfert/src/structures/Interaction.ts:216](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L216)

***

### respond()

```ts
respond(data: APIInteractionResponseChannelMessageWithSource | APIInteractionResponseDeferredChannelMessageWithSource | APIInteractionResponseDeferredMessageUpdate | APIInteractionResponseUpdateMessage): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `APIInteractionResponseChannelMessageWithSource` \| `APIInteractionResponseDeferredChannelMessageWithSource` \| `APIInteractionResponseDeferredMessageUpdate` \| `APIInteractionResponseUpdateMessage` |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/structures/Interaction.ts:420](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L420)

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

[`Interaction`](Interaction.md).[`write`](Interaction.md#write)

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

[`Interaction`](Interaction.md).[`from`](Interaction.md#from)

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

[`Interaction`](Interaction.md).[`transformBody`](Interaction.md#transformbody)

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

[`Interaction`](Interaction.md).[`transformBodyRequest`](Interaction.md#transformbodyrequest)

#### Source

[seyfert/src/structures/Interaction.ts:118](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L118)
