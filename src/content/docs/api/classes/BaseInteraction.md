---
editUrl: false
next: false
prev: false
title: "BaseInteraction"
---

## Extends

- `ObjectToLower`\<`Omit`\<`APIBaseInteraction`\<`InteractionType`, `any`\>, 
  \| `"user"`
  \| `"member"`
  \| `"message"`
  \| `"channel"`
  \| `"type"`
  \| `"app_permissions"`\>\>.`DiscordBase`\<`Type`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `FromGuild` extends `boolean` | `boolean` |
| `Type` extends `APIInteraction` | `APIInteraction` |

## Constructors

### new BaseInteraction(client, interaction, __reply)

```ts
new BaseInteraction<FromGuild, Type>(
   client: UsingClient, 
   interaction: Type, 
__reply?: __InternalReplyFunction): BaseInteraction<FromGuild, Type>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](/api/interfaces/usingclient/) |
| `interaction` | `Type` |
| `__reply`? | `__InternalReplyFunction` |

#### Returns

[`BaseInteraction`](/api/classes/baseinteraction/)\<`FromGuild`, `Type`\>

#### Inherited from

`ObjectToLower<
		Omit<
			APIBaseInteraction<InteractionType, any>,
			'user' | 'member' | 'message' | 'channel' | 'type' | 'app_permissions'
		>
	>.constructor`

#### Source

[seyfert/src/structures/Interaction.ts:93](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L93)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `appPermissions?` | `public` | `PermissionsBitField` | - |
| `applicationId` | `public` | `string` | `ObjectToLower.applicationId` |
| `channel?` | `public` | [`AllChannels`](/api/type-aliases/allchannels/) | - |
| `channelId` | `public` | `undefined` \| `string` | `ObjectToLower.channelId` |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | - |
| `data` | `public` | `any` | `ObjectToLower.data` |
| `entitlements` | `public` | `Object`[] | `ObjectToLower.entitlements` |
| `guildId` | `public` | `undefined` \| `string` | `ObjectToLower.guildId` |
| `guildLocale` | `public` |  \| `undefined` \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"` | `ObjectToLower.guildLocale` |
| `id` | `public` | `string` | `ObjectToLower.id` |
| `locale` | `public` |  \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"` | `ObjectToLower.locale` |
| `member` | `public` | `When`\<`FromGuild`, [`InteractionGuildMember`](/api/classes/interactionguildmember/), `undefined`\> | - |
| `message?` | `public` | [`Message`](/api/classes/message/) | - |
| `replied?` | `public` | `boolean` \| `Promise`\<`boolean`\> | - |
| `token` | `public` | `string` | `ObjectToLower.token` |
| `user` | `public` | [`User`](/api/classes/user/) | - |
| `version` | `public` | `1` | `ObjectToLower.version` |

## Accessors

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

#### Source

[seyfert/src/structures/Interaction.ts:215](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L215)

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

#### Source

[seyfert/src/structures/Interaction.ts:277](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L277)

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

#### Source

[seyfert/src/structures/Interaction.ts:189](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L189)

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

#### Source

[seyfert/src/structures/Interaction.ts:119](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L119)
