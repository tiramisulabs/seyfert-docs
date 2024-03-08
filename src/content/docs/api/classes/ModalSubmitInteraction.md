---
editUrl: false
next: false
prev: false
title: "ModalSubmitInteraction"
---

## Extends

- `Omit`\<[`Interaction`](/api/classes/interaction/)\<`FromGuild`, `APIModalSubmitInteraction`\>, `"modal"`\>.[`BaseInteraction`](/api/classes/baseinteraction/)\<`FromGuild`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `FromGuild` extends `boolean` | `boolean` |

## Constructors

### new ModalSubmitInteraction(client, interaction, __reply)

```ts
new ModalSubmitInteraction<FromGuild>(
   client: UsingClient, 
   interaction: APIInteraction, 
__reply?: __InternalReplyFunction): ModalSubmitInteraction<FromGuild>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](/api/interfaces/usingclient/) |
| `interaction` | `APIInteraction` |
| `__reply`? | `__InternalReplyFunction` |

#### Returns

[`ModalSubmitInteraction`](/api/classes/modalsubmitinteraction/)\<`FromGuild`\>

#### Inherited from

[`BaseInteraction`](/api/classes/baseinteraction/).[`constructor`](/api/classes/baseinteraction/#constructors)

#### Source

[seyfert/src/structures/Interaction.ts:93](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L93)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `appPermissions?` | `public` | `PermissionsBitField` | [`BaseInteraction`](/api/classes/baseinteraction/).`appPermissions` |
| `applicationId` | `public` | `string` | [`BaseInteraction`](/api/classes/baseinteraction/).`applicationId` |
| `channel?` | `public` | [`AllChannels`](/api/type-aliases/allchannels/) | [`BaseInteraction`](/api/classes/baseinteraction/).`channel` |
| `channelId` | `public` | `undefined` \| `string` | [`BaseInteraction`](/api/classes/baseinteraction/).`channelId` |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | [`BaseInteraction`](/api/classes/baseinteraction/).`client` |
| `data` | `public` | `Object` | [`BaseInteraction`](/api/classes/baseinteraction/).`data` |
| `data.components` | `public` | `Object`[] | - |
| `data.customId` | `public` | `string` | - |
| `entitlements` | `public` | `Object`[] | [`BaseInteraction`](/api/classes/baseinteraction/).`entitlements` |
| `guildId` | `public` | `undefined` \| `string` | [`BaseInteraction`](/api/classes/baseinteraction/).`guildId` |
| `guildLocale` | `public` |  \| `undefined` \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"` | [`BaseInteraction`](/api/classes/baseinteraction/).`guildLocale` |
| `id` | `public` | `string` | [`BaseInteraction`](/api/classes/baseinteraction/).`id` |
| `locale` | `public` |  \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"` | [`BaseInteraction`](/api/classes/baseinteraction/).`locale` |
| `member` | `public` | `When`\<`FromGuild`, [`InteractionGuildMember`](/api/classes/interactionguildmember/), `undefined`\> | [`BaseInteraction`](/api/classes/baseinteraction/).`member` |
| `message?` | `public` | [`Message`](/api/classes/message/) | [`BaseInteraction`](/api/classes/baseinteraction/).`message` |
| `replied?` | `public` | `boolean` \| `Promise`\<`boolean`\> | [`BaseInteraction`](/api/classes/baseinteraction/).`replied` |
| `token` | `public` | `string` | [`BaseInteraction`](/api/classes/baseinteraction/).`token` |
| `user` | `public` | [`User`](/api/classes/user/) | [`BaseInteraction`](/api/classes/baseinteraction/).`user` |
| `version` | `public` | `1` | [`BaseInteraction`](/api/classes/baseinteraction/).`version` |

## Accessors

### components

```ts
get components(): Object[]
```

#### Returns

`Object`[]

#### Source

[seyfert/src/structures/Interaction.ts:644](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L644)

***

### createdAt

```ts
get createdAt(): Date
```

createdAt gets the creation Date instace of the current object.

#### Returns

`Date`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:27](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/DiscordBase.ts#L27)

***

### createdTimestamp

```ts
get createdTimestamp(): number
```

Create a timestamp for the current object.

#### Returns

`number`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:20](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/DiscordBase.ts#L20)

***

### customId

```ts
get customId(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/Interaction.ts:640](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L640)

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

`Omit.createResponse`

#### Source

[seyfert/src/structures/Interaction.ts:409](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L409)

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

[`BaseInteraction`](/api/classes/baseinteraction/).[`deferReply`](/api/classes/baseinteraction/#deferreply)

#### Source

[seyfert/src/structures/Interaction.ts:215](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L215)

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

`Omit.deleteMessage`

#### Source

[seyfert/src/structures/Interaction.ts:401](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L401)

***

### deleteResponse()

```ts
deleteResponse(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Omit.deleteResponse`

#### Source

[seyfert/src/structures/Interaction.ts:397](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L397)

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

`Omit.editMessage`

#### Source

[seyfert/src/structures/Interaction.ts:379](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L379)

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

`Omit.editOrReply`

#### Source

[seyfert/src/structures/Interaction.ts:367](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L367)

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

`Omit.editResponse`

#### Source

[seyfert/src/structures/Interaction.ts:393](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L393)

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

[`BaseInteraction`](/api/classes/baseinteraction/).[`fetchGuild`](/api/classes/baseinteraction/#fetchguild)

#### Source

[seyfert/src/structures/Interaction.ts:277](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L277)

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

`Omit.fetchMessage`

#### Source

[seyfert/src/structures/Interaction.ts:340](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L340)

***

### fetchResponse()

```ts
fetchResponse(): Promise<undefined | WebhookMessage>
```

#### Returns

`Promise`\<`undefined` \| [`WebhookMessage`](/api/classes/webhookmessage/)\>

#### Inherited from

`Omit.fetchResponse`

#### Source

[seyfert/src/structures/Interaction.ts:344](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L344)

***

### getInputValue()

#### getInputValue(customId, required)

```ts
getInputValue(customId: string, required: true): string
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `customId` | `string` |
| `required` | `true` |

##### Returns

`string`

##### Source

[seyfert/src/structures/Interaction.ts:648](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L648)

#### getInputValue(customId, required)

```ts
getInputValue(customId: string, required?: false): undefined | string
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `customId` | `string` |
| `required`? | `false` |

##### Returns

`undefined` \| `string`

##### Source

[seyfert/src/structures/Interaction.ts:649](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L649)

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

[`BaseInteraction`](/api/classes/baseinteraction/).[`reply`](/api/classes/baseinteraction/#reply)

#### Source

[seyfert/src/structures/Interaction.ts:189](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L189)

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

`Omit.write`

#### Source

[seyfert/src/structures/Interaction.ts:348](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L348)

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

[`BaseInteraction`](/api/classes/baseinteraction/).[`from`](/api/classes/baseinteraction/#from)

#### Source

[seyfert/src/structures/Interaction.ts:224](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L224)

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

[`BaseInteraction`](/api/classes/baseinteraction/).[`transformBody`](/api/classes/baseinteraction/#transformbody)

#### Source

[seyfert/src/structures/Interaction.ts:163](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L163)

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

[`BaseInteraction`](/api/classes/baseinteraction/).[`transformBodyRequest`](/api/classes/baseinteraction/#transformbodyrequest)

#### Source

[seyfert/src/structures/Interaction.ts:119](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L119)
