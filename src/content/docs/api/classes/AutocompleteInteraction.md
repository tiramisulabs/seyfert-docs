---
editUrl: false
next: false
prev: false
title: "AutocompleteInteraction"
---

## Extends

- `ObjectToLower`\<`Omit`\<`APIApplicationCommandAutocompleteInteraction`, 
  \| `"user"`
  \| `"member"`
  \| `"type"`
  \| `"data"`
  \| `"message"`
  \| `"channel"`
  \| `"app_permissions"`\>\>.[`BaseInteraction`](/api/classes/baseinteraction/)\<`FromGuild`, `APIApplicationCommandAutocompleteInteraction`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `FromGuild` extends `boolean` | `boolean` |

## Constructors

### new AutocompleteInteraction(client, interaction, __reply)

```ts
new AutocompleteInteraction<FromGuild>(
   client: BaseClient, 
   interaction: APIApplicationCommandAutocompleteInteraction, 
__reply?: __InternalReplyFunction): AutocompleteInteraction<FromGuild>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | `BaseClient` |
| `interaction` | `APIApplicationCommandAutocompleteInteraction` |
| `__reply`? | `__InternalReplyFunction` |

#### Returns

[`AutocompleteInteraction`](/api/classes/autocompleteinteraction/)\<`FromGuild`\>

#### Inherited from

[`BaseInteraction`](/api/classes/baseinteraction/).[`constructor`](/api/classes/baseinteraction/#constructors)

#### Source

[seyfert/src/structures/Interaction.ts:307](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L307)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `appPermissions?` | `public` | `PermissionsBitField` | [`BaseInteraction`](/api/classes/baseinteraction/).`appPermissions` |
| `applicationId` | `public` | `string` | [`BaseInteraction`](/api/classes/baseinteraction/).`applicationId` |
| `channel?` | `public` | [`AllChannels`](/api/type-aliases/allchannels/) | [`BaseInteraction`](/api/classes/baseinteraction/).`channel` |
| `channelId` | `public` | `undefined` \| `string` | [`BaseInteraction`](/api/classes/baseinteraction/).`channelId` |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | [`BaseInteraction`](/api/classes/baseinteraction/).`client` |
| `data` | `public` | `Object` | [`BaseInteraction`](/api/classes/baseinteraction/).`data` |
| `data.guildId` | `public` | `undefined` \| `string` | - |
| `data.id` | `public` | `string` | - |
| `data.name` | `public` | `string` | - |
| `data.options` | `public` | ( \| `Object` \| `Object` \| `Object` \| `Object` \| `Object` \| `Object` \| `Object` \| `Object` \| `Object` \| `Object` \| `Object`)[] | - |
| `data.resolved` | `public` | `undefined` \| `APIInteractionDataResolved` | - |
| `data.type` | `public` | `ChatInput` | - |
| `entitlements` | `public` | `Object`[] | [`BaseInteraction`](/api/classes/baseinteraction/).`entitlements` |
| `guildId` | `public` | `undefined` \| `string` | [`BaseInteraction`](/api/classes/baseinteraction/).`guildId` |
| `guildLocale` | `public` |  \| `undefined` \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"` | [`BaseInteraction`](/api/classes/baseinteraction/).`guildLocale` |
| `id` | `public` | `string` | [`BaseInteraction`](/api/classes/baseinteraction/).`id` |
| `locale` | `public` |  \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"` | [`BaseInteraction`](/api/classes/baseinteraction/).`locale` |
| `member` | `public` | `When`\<`FromGuild`, [`InteractionGuildMember`](/api/classes/interactionguildmember/), `undefined`\> | [`BaseInteraction`](/api/classes/baseinteraction/).`member` |
| `message?` | `public` | [`Message`](/api/classes/message/) | [`BaseInteraction`](/api/classes/baseinteraction/).`message` |
| `options` | `public` | [`OptionResolver`](/api/classes/optionresolver/) | - |
| `replied?` | `public` | `boolean` \| `Promise`\<`boolean`\> | [`BaseInteraction`](/api/classes/baseinteraction/).`replied` |
| `token` | `public` | `string` | [`BaseInteraction`](/api/classes/baseinteraction/).`token` |
| `type` | `public` | `ApplicationCommandAutocomplete` | - |
| `user` | `public` | [`User`](/api/classes/user/) | [`BaseInteraction`](/api/classes/baseinteraction/).`user` |
| `version` | `public` | `1` | [`BaseInteraction`](/api/classes/baseinteraction/).`version` |

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

#### Inherited from

[`BaseInteraction`](/api/classes/baseinteraction/).[`deferReply`](/api/classes/baseinteraction/#deferreply)

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

#### Inherited from

[`BaseInteraction`](/api/classes/baseinteraction/).[`fetchGuild`](/api/classes/baseinteraction/#fetchguild)

#### Source

[seyfert/src/structures/Interaction.ts:277](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L277)

***

### getInput()

```ts
getInput(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/Interaction.ts:322](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L322)

***

### reply()

```ts
reply(..._args: unknown[]): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`_args` | `unknown`[] |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BaseInteraction`](/api/classes/baseinteraction/).[`reply`](/api/classes/baseinteraction/#reply)

#### Intenal

#### Source

[seyfert/src/structures/Interaction.ts:331](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L331)

***

### respond()

```ts
respond(choices: undefined | APIApplicationCommandOptionChoice<string | number>[]): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `choices` | `undefined` \| `APIApplicationCommandOptionChoice`\<`string` \| `number`\>[] |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/structures/Interaction.ts:326](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Interaction.ts#L326)

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
