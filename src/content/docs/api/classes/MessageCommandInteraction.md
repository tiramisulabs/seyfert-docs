---
editUrl: false
next: false
prev: false
title: "MessageCommandInteraction"
---

## Extends

- [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/)\<`FromGuild`, `APIMessageApplicationCommandInteraction`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `FromGuild` extends `boolean` | `boolean` |

## Constructors

### new MessageCommandInteraction(client, interaction, __reply)

```ts
new MessageCommandInteraction<FromGuild>(
   client: UsingClient, 
   interaction: APIMessageApplicationCommandInteraction, 
__reply?: __InternalReplyFunction): MessageCommandInteraction<FromGuild>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](/api/interfaces/usingclient/) |
| `interaction` | `APIMessageApplicationCommandInteraction` |
| `__reply`? | `__InternalReplyFunction` |

#### Returns

[`MessageCommandInteraction`](/api/classes/messagecommandinteraction/)\<`FromGuild`\>

#### Inherited from

[`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).[`constructor`](/api/classes/applicationcommandinteraction/#constructors)

#### Source

[seyfert/src/structures/Interaction.ts:93](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Interaction.ts#L93)

## Properties

| Property | Modifier | Type | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `appPermissions?` | `public` | `PermissionsBitField` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`appPermissions` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`appPermissions` |
| `applicationId` | `public` | `string` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`applicationId` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`applicationId` |
| `channel?` | `public` | [`AllChannels`](/api/type-aliases/allchannels/) | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`channel` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`channel` |
| `channelId` | `public` | `undefined` \| `string` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`channelId` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`channelId` |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`client` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`client` |
| `data` | `public` | `Object` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`data` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`data` |
| `data.guildId` | `public` | `undefined` \| `string` | - | - |
| `data.id` | `public` | `string` | - | - |
| `data.name` | `public` | `string` | - | - |
| `data.resolved` | `public` | `Object` | - | - |
| `data.resolved.messages` | `public` | `Object` | - | - |
| `data.targetId` | `public` | `string` | - | - |
| `data.type` | `public` | `Message` | - | - |
| `entitlements` | `public` | `Object`[] | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`entitlements` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`entitlements` |
| `guildId` | `public` | `undefined` \| `string` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`guildId` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`guildId` |
| `guildLocale` | `public` |  \| `undefined` \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`guildLocale` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`guildLocale` |
| `id` | `public` | `string` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`id` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`id` |
| `locale` | `public` |  \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`locale` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`locale` |
| `member` | `public` | `When`\<`FromGuild`, [`InteractionGuildMember`](/api/classes/interactionguildmember/), `undefined`\> | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`member` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`member` |
| `message?` | `public` | [`Message`](/api/classes/message/) | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`message` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`message` |
| `replied?` | `public` | `boolean` \| `Promise`\<`boolean`\> | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`replied` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`replied` |
| `token` | `public` | `string` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`token` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`token` |
| `type` | `public` | `Message` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`type` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`type` |
| `user` | `public` | [`User`](/api/classes/user/) | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`user` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`user` |
| `version` | `public` | `1` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`version` | [`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).`version` |

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

[`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).[`createResponse`](/api/classes/applicationcommandinteraction/#createresponse)

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

[`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).[`deferReply`](/api/classes/applicationcommandinteraction/#deferreply)

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

[`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).[`deleteMessage`](/api/classes/applicationcommandinteraction/#deletemessage)

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

[`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).[`deleteResponse`](/api/classes/applicationcommandinteraction/#deleteresponse)

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

[`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).[`editMessage`](/api/classes/applicationcommandinteraction/#editmessage)

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

[`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).[`editOrReply`](/api/classes/applicationcommandinteraction/#editorreply)

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

[`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).[`editResponse`](/api/classes/applicationcommandinteraction/#editresponse)

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

[`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).[`fetchGuild`](/api/classes/applicationcommandinteraction/#fetchguild)

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

[`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).[`fetchMessage`](/api/classes/applicationcommandinteraction/#fetchmessage)

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

[`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).[`fetchResponse`](/api/classes/applicationcommandinteraction/#fetchresponse)

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

[`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).[`modal`](/api/classes/applicationcommandinteraction/#modal)

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

[`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).[`reply`](/api/classes/applicationcommandinteraction/#reply)

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

#### Inherited from

[`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).[`respond`](/api/classes/applicationcommandinteraction/#respond)

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

[`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).[`write`](/api/classes/applicationcommandinteraction/#write)

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

[`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).[`from`](/api/classes/applicationcommandinteraction/#from)

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

[`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).[`transformBody`](/api/classes/applicationcommandinteraction/#transformbody)

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

[`ApplicationCommandInteraction`](/api/classes/applicationcommandinteraction/).[`transformBodyRequest`](/api/classes/applicationcommandinteraction/#transformbodyrequest)

#### Source

[seyfert/src/structures/Interaction.ts:119](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/Interaction.ts#L119)
