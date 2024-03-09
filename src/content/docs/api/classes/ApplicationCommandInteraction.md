---
editUrl: false
next: false
prev: false
title: "ApplicationCommandInteraction"
---

## Extends

- [`Interaction`](/api/classes/interaction/)\<`FromGuild`, `Type`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `FromGuild` extends `boolean` | `boolean` |
| `Type` extends `APIApplicationCommandInteraction` | `APIApplicationCommandInteraction` |

## Constructors

### new ApplicationCommandInteraction(client, interaction, __reply)

```ts
new ApplicationCommandInteraction<FromGuild, Type>(
   client: UsingClient, 
   interaction: Type, 
__reply?: __InternalReplyFunction): ApplicationCommandInteraction<FromGuild, Type>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](/api/interfaces/usingclient/) |
| `interaction` | `Type` |
| `__reply`? | `__InternalReplyFunction` |

#### Returns

[`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/)\<`FromGuild`, `Type`\>

#### Inherited from

[`Interaction`](/api/classes/interaction/).[`constructor`](/api/classes/interaction/#constructors)

#### Source

[seyfert/src/structures/Interaction.ts:93](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Interaction.ts#L93)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `appPermissions?` | `public` | `PermissionsBitField` | [`Interaction`](/api/classes/interaction/).`appPermissions` |
| `applicationId` | `public` | `string` | [`Interaction`](/api/classes/interaction/).`applicationId` |
| `channel?` | `public` | [`AllChannels`](/api/type-aliases/allchannels/) | [`Interaction`](/api/classes/interaction/).`channel` |
| `channelId` | `public` | `undefined` \| `string` | [`Interaction`](/api/classes/interaction/).`channelId` |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | [`Interaction`](/api/classes/interaction/).`client` |
| `data` | `public` | `any` | [`Interaction`](/api/classes/interaction/).`data` |
| `entitlements` | `public` | `Object`[] | [`Interaction`](/api/classes/interaction/).`entitlements` |
| `guildId` | `public` | `undefined` \| `string` | [`Interaction`](/api/classes/interaction/).`guildId` |
| `guildLocale` | `public` |  \| `undefined` \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"` | [`Interaction`](/api/classes/interaction/).`guildLocale` |
| `id` | `public` | `string` | [`Interaction`](/api/classes/interaction/).`id` |
| `locale` | `public` |  \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"` | [`Interaction`](/api/classes/interaction/).`locale` |
| `member` | `public` | `When`\<`FromGuild`, [`InteractionGuildMember`](/api/classes/interactionguildmember/), `undefined`\> | [`Interaction`](/api/classes/interaction/).`member` |
| `message?` | `public` | [`Message`](/api/classes/message/) | [`Interaction`](/api/classes/interaction/).`message` |
| `replied?` | `public` | `boolean` \| `Promise`\<`boolean`\> | [`Interaction`](/api/classes/interaction/).`replied` |
| `token` | `public` | `string` | [`Interaction`](/api/classes/interaction/).`token` |
| `type` | `public` | `ApplicationCommandType` | - |
| `user` | `public` | [`User`](/api/classes/user/) | [`Interaction`](/api/classes/interaction/).`user` |
| `version` | `public` | `1` | [`Interaction`](/api/classes/interaction/).`version` |

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

## Methods

### createResponse()

```ts
createResponse(__namedParameters: Omit<RESTPostAPIWebhookWithTokenJSONBody, "components" | "embeds"> & ResolverProps): Promise<Message>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | `Omit`\<`RESTPostAPIWebhookWithTokenJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps` |

#### Returns

`Promise`\<[`Message`](/api/classes/message/)\>

#### Inherited from

[`Interaction`](/api/classes/interaction/).[`createResponse`](/api/classes/interaction/#createresponse)

#### Source

[seyfert/src/structures/Interaction.ts:409](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Interaction.ts#L409)

***

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

[`Interaction`](/api/classes/interaction/).[`deferReply`](/api/classes/interaction/#deferreply)

#### Source

[seyfert/src/structures/Interaction.ts:215](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Interaction.ts#L215)

***

### deleteMessage()

```ts
deleteMessage(messageId: string): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageId` | `string` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Interaction`](/api/classes/interaction/).[`deleteMessage`](/api/classes/interaction/#deletemessage)

#### Source

[seyfert/src/structures/Interaction.ts:401](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Interaction.ts#L401)

***

### deleteResponse()

```ts
deleteResponse(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Interaction`](/api/classes/interaction/).[`deleteResponse`](/api/classes/interaction/#deleteresponse)

#### Source

[seyfert/src/structures/Interaction.ts:397](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Interaction.ts#L397)

***

### editMessage()

```ts
editMessage(messageId: string, body: Omit<RESTPatchAPIWebhookWithTokenMessageJSONBody, "components" | "embeds"> & ResolverProps): Promise<Message>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageId` | `string` |
| `body` | `Omit`\<`RESTPatchAPIWebhookWithTokenMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps` |

#### Returns

`Promise`\<[`Message`](/api/classes/message/)\>

#### Inherited from

[`Interaction`](/api/classes/interaction/).[`editMessage`](/api/classes/interaction/#editmessage)

#### Source

[seyfert/src/structures/Interaction.ts:379](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Interaction.ts#L379)

***

### editOrReply()

```ts
editOrReply<FR>(body: Omit<APIInteractionResponseCallbackData, "components" | "embeds"> & ResolverProps, fetchReply?: FR): Promise<When<FR, WebhookMessage, void>>
```

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `FR` extends `boolean` | `false` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `Omit`\<`APIInteractionResponseCallbackData`, `"components"` \| `"embeds"`\> & `ResolverProps` |
| `fetchReply`? | `FR` |

#### Returns

`Promise`\<`When`\<`FR`, [`WebhookMessage`](/api/classes/webhookmessage/), `void`\>\>

#### Inherited from

[`Interaction`](/api/classes/interaction/).[`editOrReply`](/api/classes/interaction/#editorreply)

#### Source

[seyfert/src/structures/Interaction.ts:367](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Interaction.ts#L367)

***

### editResponse()

```ts
editResponse(body: Omit<RESTPatchAPIWebhookWithTokenMessageJSONBody, "components" | "embeds"> & ResolverProps): Promise<Message>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `Omit`\<`RESTPatchAPIWebhookWithTokenMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps` |

#### Returns

`Promise`\<[`Message`](/api/classes/message/)\>

#### Inherited from

[`Interaction`](/api/classes/interaction/).[`editResponse`](/api/classes/interaction/#editresponse)

#### Source

[seyfert/src/structures/Interaction.ts:393](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Interaction.ts#L393)

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

`undefined` \| `Promise`\<[`Guild`](/api/classes/guild/)\<`"cached"`\> \| [`Guild`](/api/classes/guild/)\<`"api"`\>\>

#### Inherited from

[`Interaction`](/api/classes/interaction/).[`fetchGuild`](/api/classes/interaction/#fetchguild)

#### Source

[seyfert/src/structures/Interaction.ts:277](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Interaction.ts#L277)

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

`Promise`\<`undefined` \| [`WebhookMessage`](/api/classes/webhookmessage/)\>

#### Inherited from

[`Interaction`](/api/classes/interaction/).[`fetchMessage`](/api/classes/interaction/#fetchmessage)

#### Source

[seyfert/src/structures/Interaction.ts:340](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Interaction.ts#L340)

***

### fetchResponse()

```ts
fetchResponse(): Promise<undefined | WebhookMessage>
```

#### Returns

`Promise`\<`undefined` \| [`WebhookMessage`](/api/classes/webhookmessage/)\>

#### Inherited from

[`Interaction`](/api/classes/interaction/).[`fetchResponse`](/api/classes/interaction/#fetchresponse)

#### Source

[seyfert/src/structures/Interaction.ts:344](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Interaction.ts#L344)

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

[`Interaction`](/api/classes/interaction/).[`modal`](/api/classes/interaction/#modal)

#### Source

[seyfert/src/structures/Interaction.ts:360](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Interaction.ts#L360)

***

### reply()

```ts
reply(body: ReplyInteractionBody): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | [`ReplyInteractionBody`](/api/type-aliases/replyinteractionbody/) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Interaction`](/api/classes/interaction/).[`reply`](/api/classes/interaction/#reply)

#### Source

[seyfert/src/structures/Interaction.ts:189](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Interaction.ts#L189)

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

[seyfert/src/structures/Interaction.ts:428](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Interaction.ts#L428)

***

### write()

```ts
write<FR>(body: Omit<APIInteractionResponseCallbackData, "components" | "embeds"> & ResolverProps, fetchReply?: FR): Promise<When<FR, WebhookMessage, void>>
```

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `FR` extends `boolean` | `false` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `Omit`\<`APIInteractionResponseCallbackData`, `"components"` \| `"embeds"`\> & `ResolverProps` |
| `fetchReply`? | `FR` |

#### Returns

`Promise`\<`When`\<`FR`, [`WebhookMessage`](/api/classes/webhookmessage/), `void`\>\>

#### Inherited from

[`Interaction`](/api/classes/interaction/).[`write`](/api/classes/interaction/#write)

#### Source

[seyfert/src/structures/Interaction.ts:348](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Interaction.ts#L348)

***

### from()

```ts
static from(
   client: BaseClient, 
   gateway: APIInteraction, 
__reply?: __InternalReplyFunction): StringSelectMenuInteraction<string[]> | AutocompleteInteraction<boolean> | BaseInteraction<boolean, APIPingInteraction>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | `BaseClient` |
| `gateway` | `APIInteraction` |
| `__reply`? | `__InternalReplyFunction` |

#### Returns

[`StringSelectMenuInteraction`](/api/classes/stringselectmenuinteraction/)\<`string`[]\> \| [`AutocompleteInteraction`](/api/classes/autocompleteinteraction/)\<`boolean`\> \| [`BaseInteraction`](/api/classes/baseinteraction/)\<`boolean`, `APIPingInteraction`\>

#### Inherited from

[`Interaction`](/api/classes/interaction/).[`from`](/api/classes/interaction/#from)

#### Source

[seyfert/src/structures/Interaction.ts:224](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Interaction.ts#L224)

***

### transformBody()

```ts
static transformBody<T>(body: Omit<RESTPostAPIChannelMessageJSONBody, "components" | "embeds"> & ResolverProps | Omit<RESTPatchAPIChannelMessageJSONBody, "components" | "embeds"> & ResolverProps | Omit<RESTPostAPIWebhookWithTokenJSONBody, "components" | "embeds"> & ResolverProps | Omit<RESTPatchAPIWebhookWithTokenMessageJSONBody, "components" | "embeds"> & ResolverProps): T
```

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps` \| `Omit`\<`RESTPatchAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps` \| `Omit`\<`RESTPostAPIWebhookWithTokenJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps` \| `Omit`\<`RESTPatchAPIWebhookWithTokenMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps` |

#### Returns

`T`

#### Inherited from

[`Interaction`](/api/classes/interaction/).[`transformBody`](/api/classes/interaction/#transformbody)

#### Source

[seyfert/src/structures/Interaction.ts:163](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Interaction.ts#L163)

***

### transformBodyRequest()

```ts
static transformBodyRequest(body: ReplyInteractionBody): APIInteractionResponse
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | [`ReplyInteractionBody`](/api/type-aliases/replyinteractionbody/) |

#### Returns

`APIInteractionResponse`

#### Inherited from

[`Interaction`](/api/classes/interaction/).[`transformBodyRequest`](/api/classes/interaction/#transformbodyrequest)

#### Source

[seyfert/src/structures/Interaction.ts:119](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Interaction.ts#L119)
