---
editUrl: false
next: false
prev: false
title: "StringSelectMenuInteraction"
---

## Extends

- `Object`

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends `any`[] | `string`[] |

## Constructors

### new StringSelectMenuInteraction(args)

```ts
new StringSelectMenuInteraction<T>(...args: any[]): StringSelectMenuInteraction<T>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `any`[] |

#### Returns

[`StringSelectMenuInteraction`](/api/classes/stringselectmenuinteraction/)\<`T`\>

#### Inherited from

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).constructor`

#### Source

[seyfert/src/common/types/util.ts:3](https://github.com/potoland/potocuit/blob/e332d7a/src/common/types/util.ts#L3)

## Properties

| Property | Modifier | Type | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `api` | `public` | [`APIRoutes`](/api/type-aliases/apiroutes/) | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).api` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).api` |
| `appPermissions?` | `public` | `PermissionsBitField` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).appPermissions` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).appPermissions` |
| `applicationId` | `public` | `string` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).applicationId` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).applicationId` |
| `cache` | `public` | `Cache` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).cache` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).cache` |
| `channel` | `public` | [`AllChannels`](/api/type-aliases/allchannels/) | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).channel` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).channel` |
| `channelId` | `public` | `string` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).channelId` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).channelId` |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).client` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).client` |
| `componentType` | `public` |  \| `Button` \| `StringSelect` \| `UserSelect` \| `RoleSelect` \| `MentionableSelect` \| `ChannelSelect` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).componentType` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).componentType` |
| `createdAt` | `public` | `Date` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).createdAt` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).createdAt` |
| `createdTimestamp` | `public` | `number` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).createdTimestamp` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).createdTimestamp` |
| `customId` | `public` | `string` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).customId` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).customId` |
| `data` | `public` | `Omit`\<`Object`, `"values"`\> & `Object` | - | - |
| `entitlements` | `public` | `Object`[] | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).entitlements` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).entitlements` |
| `guildId` | `public` | `undefined` \| `string` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).guildId` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).guildId` |
| `guildLocale` | `public` |  \| `undefined` \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).guildLocale` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).guildLocale` |
| `id` | `public` | `string` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).id` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).id` |
| `locale` | `public` |  \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).locale` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).locale` |
| `member` | `public` | `undefined` \| [`InteractionGuildMember`](/api/classes/interactionguildmember/) | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).member` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).member` |
| `message?` | `public` | [`Message`](/api/classes/message/) | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).message` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).message` |
| `replied?` | `public` | `boolean` \| `Promise`\<`boolean`\> | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).replied` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).replied` |
| `rest` | `public` | [`REST`](/api/classes/rest/) | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).rest` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).rest` |
| `token` | `public` | `string` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).token` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).token` |
| `type` | `public` | `MessageComponent` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).type` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).type` |
| `user` | `public` | [`User`](/api/classes/user/) | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).user` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).user` |
| `values` | `public` | `T` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).values` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).values` |
| `version` | `public` | `1` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).version` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).version` |

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

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).createResponse`

#### Source

[seyfert/src/structures/Interaction.ts:405](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Interaction.ts#L405)

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

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).deferReply`

#### Source

[seyfert/src/structures/Interaction.ts:215](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Interaction.ts#L215)

***

### deferUpdate()

```ts
deferUpdate(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Inherited from

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).deferUpdate`

#### Source

[seyfert/src/structures/Interaction.ts:459](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Interaction.ts#L459)

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

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).deleteMessage`

#### Source

[seyfert/src/structures/Interaction.ts:397](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Interaction.ts#L397)

***

### deleteResponse()

```ts
deleteResponse(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Inherited from

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).deleteResponse`

#### Source

[seyfert/src/structures/Interaction.ts:393](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Interaction.ts#L393)

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

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).editMessage`

#### Source

[seyfert/src/structures/Interaction.ts:375](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Interaction.ts#L375)

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

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).editOrReply`

#### Source

[seyfert/src/structures/Interaction.ts:363](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Interaction.ts#L363)

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

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).editResponse`

#### Source

[seyfert/src/structures/Interaction.ts:389](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Interaction.ts#L389)

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

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).fetchMessage`

#### Source

[seyfert/src/structures/Interaction.ts:336](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Interaction.ts#L336)

***

### fetchResponse()

```ts
fetchResponse(): Promise<undefined | WebhookMessage>
```

#### Returns

`Promise`\<`undefined` \| [`WebhookMessage`](/api/classes/webhookmessage/)\>

#### Inherited from

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).fetchResponse`

#### Source

[seyfert/src/structures/Interaction.ts:340](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Interaction.ts#L340)

***

### isButton()

```ts
isButton(): this is ButtonInteraction
```

#### Returns

`this is ButtonInteraction`

#### Inherited from

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).isButton`

#### Source

[seyfert/src/structures/Interaction.ts:473](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Interaction.ts#L473)

***

### isChannelSelectMenu()

```ts
isChannelSelectMenu(): this is ChannelSelectMenuInteraction
```

#### Returns

`this is ChannelSelectMenuInteraction`

#### Inherited from

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).isChannelSelectMenu`

#### Source

[seyfert/src/structures/Interaction.ts:477](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Interaction.ts#L477)

***

### isMentionableSelectMenu()

```ts
isMentionableSelectMenu(): this is MentionableSelectMenuInteraction
```

#### Returns

`this is MentionableSelectMenuInteraction`

#### Inherited from

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).isMentionableSelectMenu`

#### Source

[seyfert/src/structures/Interaction.ts:485](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Interaction.ts#L485)

***

### isRoleSelectMenu()

```ts
isRoleSelectMenu(): this is RoleSelectMenuInteraction
```

#### Returns

`this is RoleSelectMenuInteraction`

#### Inherited from

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).isRoleSelectMenu`

#### Source

[seyfert/src/structures/Interaction.ts:481](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Interaction.ts#L481)

***

### isStringSelectMenu()

```ts
isStringSelectMenu(): this is StringSelectMenuInteraction<string[]>
```

#### Returns

`this is StringSelectMenuInteraction<string[]>`

#### Inherited from

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).isStringSelectMenu`

#### Source

[seyfert/src/structures/Interaction.ts:493](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Interaction.ts#L493)

***

### isUserSelectMenu()

```ts
isUserSelectMenu(): this is UserSelectMenuInteraction
```

#### Returns

`this is UserSelectMenuInteraction`

#### Inherited from

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).isUserSelectMenu`

#### Source

[seyfert/src/structures/Interaction.ts:489](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Interaction.ts#L489)

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

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).modal`

#### Source

[seyfert/src/structures/Interaction.ts:356](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Interaction.ts#L356)

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

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).reply`

#### Source

[seyfert/src/structures/Interaction.ts:189](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Interaction.ts#L189)

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

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).update`

#### Source

[seyfert/src/structures/Interaction.ts:452](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Interaction.ts#L452)

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

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).write`

#### Source

[seyfert/src/structures/Interaction.ts:344](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/Interaction.ts#L344)
