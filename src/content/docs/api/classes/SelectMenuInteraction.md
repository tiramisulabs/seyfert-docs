---
editUrl: false
next: false
prev: false
title: "SelectMenuInteraction"
---

## Extends

- [`ComponentInteraction`](/api/classes/componentinteraction/)

## Constructors

### new SelectMenuInteraction(client, interaction, __reply)

```ts
new SelectMenuInteraction(
   client: BaseClient, 
   interaction: APIMessageComponentSelectMenuInteraction, 
   __reply?: __InternalReplyFunction): SelectMenuInteraction
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | `BaseClient` |
| `interaction` | `APIMessageComponentSelectMenuInteraction` |
| `__reply`? | `__InternalReplyFunction` |

#### Returns

[`SelectMenuInteraction`](/api/classes/selectmenuinteraction/)

#### Overrides

[`ComponentInteraction`](/api/classes/componentinteraction/).[`constructor`](/api/classes/componentinteraction/#constructors)

#### Source

[seyfert/src/structures/Interaction.ts:509](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L509)

## Properties

| Property | Modifier | Type | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `appPermissions?` | `public` | `PermissionsBitField` | [`ComponentInteraction`](/api/classes/componentinteraction/).`appPermissions` | [`ComponentInteraction`](/api/classes/componentinteraction/).`appPermissions` |
| `applicationId` | `public` | `string` | [`ComponentInteraction`](/api/classes/componentinteraction/).`applicationId` | [`ComponentInteraction`](/api/classes/componentinteraction/).`applicationId` |
| `channel` | `public` | [`AllChannels`](/api/type-aliases/allchannels/) | [`ComponentInteraction`](/api/classes/componentinteraction/).`channel` | [`ComponentInteraction`](/api/classes/componentinteraction/).`channel` |
| `channelId` | `public` | `string` | [`ComponentInteraction`](/api/classes/componentinteraction/).`channelId` | [`ComponentInteraction`](/api/classes/componentinteraction/).`channelId` |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | [`ComponentInteraction`](/api/classes/componentinteraction/).`client` | [`ComponentInteraction`](/api/classes/componentinteraction/).`client` |
| `data` | `public` | `ObjectToLower`\<APIMessageSelectMenuInteractionData \| undefined & `APIMessageSelectMenuInteractionData`\> | [`ComponentInteraction`](/api/classes/componentinteraction/).`data` | [`ComponentInteraction`](/api/classes/componentinteraction/).`data` |
| `entitlements` | `public` | `Object`[] | [`ComponentInteraction`](/api/classes/componentinteraction/).`entitlements` | [`ComponentInteraction`](/api/classes/componentinteraction/).`entitlements` |
| `guildId` | `public` | `undefined` \| `string` | [`ComponentInteraction`](/api/classes/componentinteraction/).`guildId` | [`ComponentInteraction`](/api/classes/componentinteraction/).`guildId` |
| `guildLocale` | `public` |  \| `undefined` \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"` | [`ComponentInteraction`](/api/classes/componentinteraction/).`guildLocale` | [`ComponentInteraction`](/api/classes/componentinteraction/).`guildLocale` |
| `id` | `public` | `string` | [`ComponentInteraction`](/api/classes/componentinteraction/).`id` | [`ComponentInteraction`](/api/classes/componentinteraction/).`id` |
| `locale` | `public` |  \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"` | [`ComponentInteraction`](/api/classes/componentinteraction/).`locale` | [`ComponentInteraction`](/api/classes/componentinteraction/).`locale` |
| `member` | `public` | `undefined` \| [`InteractionGuildMember`](/api/classes/interactionguildmember/) | [`ComponentInteraction`](/api/classes/componentinteraction/).`member` | [`ComponentInteraction`](/api/classes/componentinteraction/).`member` |
| `message?` | `public` | [`Message`](/api/classes/message/) | [`ComponentInteraction`](/api/classes/componentinteraction/).`message` | [`ComponentInteraction`](/api/classes/componentinteraction/).`message` |
| `replied?` | `public` | `boolean` \| `Promise`\<`boolean`\> | [`ComponentInteraction`](/api/classes/componentinteraction/).`replied` | [`ComponentInteraction`](/api/classes/componentinteraction/).`replied` |
| `token` | `public` | `string` | [`ComponentInteraction`](/api/classes/componentinteraction/).`token` | [`ComponentInteraction`](/api/classes/componentinteraction/).`token` |
| `type` | `public` | `MessageComponent` | [`ComponentInteraction`](/api/classes/componentinteraction/).`type` | [`ComponentInteraction`](/api/classes/componentinteraction/).`type` |
| `user` | `public` | [`User`](/api/classes/user/) | [`ComponentInteraction`](/api/classes/componentinteraction/).`user` | [`ComponentInteraction`](/api/classes/componentinteraction/).`user` |
| `version` | `public` | `1` | [`ComponentInteraction`](/api/classes/componentinteraction/).`version` | [`ComponentInteraction`](/api/classes/componentinteraction/).`version` |

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

[seyfert/src/structures/Interaction.ts:473](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L473)

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

[seyfert/src/structures/Interaction.ts:469](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L469)

***

### values

```ts
get values(): string[]
```

#### Returns

`string`[]

#### Source

[seyfert/src/structures/Interaction.ts:517](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L517)

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

[`ComponentInteraction`](/api/classes/componentinteraction/).[`createResponse`](/api/classes/componentinteraction/#createresponse)

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

[`ComponentInteraction`](/api/classes/componentinteraction/).[`deferReply`](/api/classes/componentinteraction/#deferreply)

#### Source

[seyfert/src/structures/Interaction.ts:215](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L215)

***

### deferUpdate()

```ts
deferUpdate(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ComponentInteraction`](/api/classes/componentinteraction/).[`deferUpdate`](/api/classes/componentinteraction/#deferupdate)

#### Source

[seyfert/src/structures/Interaction.ts:463](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L463)

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

[`ComponentInteraction`](/api/classes/componentinteraction/).[`deleteMessage`](/api/classes/componentinteraction/#deletemessage)

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

[`ComponentInteraction`](/api/classes/componentinteraction/).[`deleteResponse`](/api/classes/componentinteraction/#deleteresponse)

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

[`ComponentInteraction`](/api/classes/componentinteraction/).[`editMessage`](/api/classes/componentinteraction/#editmessage)

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

[`ComponentInteraction`](/api/classes/componentinteraction/).[`editOrReply`](/api/classes/componentinteraction/#editorreply)

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

[`ComponentInteraction`](/api/classes/componentinteraction/).[`editResponse`](/api/classes/componentinteraction/#editresponse)

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

[`ComponentInteraction`](/api/classes/componentinteraction/).[`fetchGuild`](/api/classes/componentinteraction/#fetchguild)

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

[`ComponentInteraction`](/api/classes/componentinteraction/).[`fetchMessage`](/api/classes/componentinteraction/#fetchmessage)

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

[`ComponentInteraction`](/api/classes/componentinteraction/).[`fetchResponse`](/api/classes/componentinteraction/#fetchresponse)

#### Source

[seyfert/src/structures/Interaction.ts:344](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L344)

***

### isButton()

```ts
isButton(): this is ButtonInteraction
```

#### Returns

`this is ButtonInteraction`

#### Inherited from

[`ComponentInteraction`](/api/classes/componentinteraction/).[`isButton`](/api/classes/componentinteraction/#isbutton)

#### Source

[seyfert/src/structures/Interaction.ts:477](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L477)

***

### isChannelSelectMenu()

```ts
isChannelSelectMenu(): this is ChannelSelectMenuInteraction
```

#### Returns

`this is ChannelSelectMenuInteraction`

#### Inherited from

[`ComponentInteraction`](/api/classes/componentinteraction/).[`isChannelSelectMenu`](/api/classes/componentinteraction/#ischannelselectmenu)

#### Source

[seyfert/src/structures/Interaction.ts:481](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L481)

***

### isMentionableSelectMenu()

```ts
isMentionableSelectMenu(): this is MentionableSelectMenuInteraction
```

#### Returns

`this is MentionableSelectMenuInteraction`

#### Inherited from

[`ComponentInteraction`](/api/classes/componentinteraction/).[`isMentionableSelectMenu`](/api/classes/componentinteraction/#ismentionableselectmenu)

#### Source

[seyfert/src/structures/Interaction.ts:489](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L489)

***

### isRoleSelectMenu()

```ts
isRoleSelectMenu(): this is RoleSelectMenuInteraction
```

#### Returns

`this is RoleSelectMenuInteraction`

#### Inherited from

[`ComponentInteraction`](/api/classes/componentinteraction/).[`isRoleSelectMenu`](/api/classes/componentinteraction/#isroleselectmenu)

#### Source

[seyfert/src/structures/Interaction.ts:485](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L485)

***

### isStringSelectMenu()

```ts
isStringSelectMenu(): this is StringSelectMenuInteraction<string[]>
```

#### Returns

`this is StringSelectMenuInteraction<string[]>`

#### Inherited from

[`ComponentInteraction`](/api/classes/componentinteraction/).[`isStringSelectMenu`](/api/classes/componentinteraction/#isstringselectmenu)

#### Source

[seyfert/src/structures/Interaction.ts:497](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L497)

***

### isUserSelectMenu()

```ts
isUserSelectMenu(): this is UserSelectMenuInteraction
```

#### Returns

`this is UserSelectMenuInteraction`

#### Inherited from

[`ComponentInteraction`](/api/classes/componentinteraction/).[`isUserSelectMenu`](/api/classes/componentinteraction/#isuserselectmenu)

#### Source

[seyfert/src/structures/Interaction.ts:493](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L493)

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

[`ComponentInteraction`](/api/classes/componentinteraction/).[`modal`](/api/classes/componentinteraction/#modal)

#### Source

[seyfert/src/structures/Interaction.ts:360](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L360)

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

[`ComponentInteraction`](/api/classes/componentinteraction/).[`reply`](/api/classes/componentinteraction/#reply)

#### Source

[seyfert/src/structures/Interaction.ts:189](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L189)

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

[`ComponentInteraction`](/api/classes/componentinteraction/).[`update`](/api/classes/componentinteraction/#update)

#### Source

[seyfert/src/structures/Interaction.ts:456](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L456)

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

[`ComponentInteraction`](/api/classes/componentinteraction/).[`write`](/api/classes/componentinteraction/#write)

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

[`ComponentInteraction`](/api/classes/componentinteraction/).[`from`](/api/classes/componentinteraction/#from)

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

[`ComponentInteraction`](/api/classes/componentinteraction/).[`transformBody`](/api/classes/componentinteraction/#transformbody)

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

[`ComponentInteraction`](/api/classes/componentinteraction/).[`transformBodyRequest`](/api/classes/componentinteraction/#transformbodyrequest)

#### Source

[seyfert/src/structures/Interaction.ts:119](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L119)
