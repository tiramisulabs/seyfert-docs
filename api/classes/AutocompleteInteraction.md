[seyfert](../globals.md) / AutocompleteInteraction

# Class: AutocompleteInteraction\<FromGuild\>

## Extends

- `ObjectToLower`\<`Omit`\<`APIApplicationCommandAutocompleteInteraction`, 
  \| `"user"`
  \| `"member"`
  \| `"type"`
  \| `"data"`
  \| `"message"`
  \| `"channel"`
  \| `"app_permissions"`\>\>.[`BaseInteraction`](BaseInteraction.md)\<`FromGuild`, `APIApplicationCommandAutocompleteInteraction`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `FromGuild` *extends* `boolean` | `boolean` |

## Constructors

### new AutocompleteInteraction()

```ts
new AutocompleteInteraction<FromGuild>(
   client: UsingClient, 
   interaction: APIApplicationCommandAutocompleteInteraction, 
   resolver?: OptionResolver, 
__reply?: __InternalReplyFunction): AutocompleteInteraction<FromGuild>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `interaction` | `APIApplicationCommandAutocompleteInteraction` |
| `resolver`? | [`OptionResolver`](OptionResolver.md) |
| `__reply`? | `__InternalReplyFunction` |

#### Returns

[`AutocompleteInteraction`](AutocompleteInteraction.md)\<`FromGuild`\>

#### Inherited from

[`BaseInteraction`](BaseInteraction.md).[`constructor`](BaseInteraction.md#constructors)

#### Source

[seyfert/src/structures/Interaction.ts:319](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L319)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `__reply?` | `protected` | `__InternalReplyFunction` | [`BaseInteraction`](BaseInteraction.md).`__reply` |
| `appPermissions?` | `public` | `PermissionsBitField` | [`BaseInteraction`](BaseInteraction.md).`appPermissions` |
| `applicationId` | `public` | `string` | [`BaseInteraction`](BaseInteraction.md).`applicationId` |
| `authorizingIntegrationOwners` | `public` | \{\} | [`BaseInteraction`](BaseInteraction.md).`authorizingIntegrationOwners` |
| `channel?` | `public` | [`AllChannels`](../type-aliases/AllChannels.md) | [`BaseInteraction`](BaseInteraction.md).`channel` |
| `channelId` | `public` | `undefined` \| `string` | [`BaseInteraction`](BaseInteraction.md).`channelId` |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | [`BaseInteraction`](BaseInteraction.md).`client` |
| `context` | `public` | `undefined` \| `InteractionContextType` | [`BaseInteraction`](BaseInteraction.md).`context` |
| `data` | `public` | \{ `guildId`: `undefined` \| `string`; `id`: `string`; `name`: `string`; `options`: ( \| \{ `name`: `string`; `options`: `undefined` \| ( \| \{ `name`: `string`; `type`: `Attachment`; `value`: `string`; \} \| \{ `name`: `string`; `type`: `Boolean`; `value`: `boolean`; \} \| \{ `name`: `string`; `type`: `Channel`; `value`: `string`; \} \| \{ `focused`: `undefined` \| `boolean`; `name`: `string`; `type`: `Integer`; `value`: `number`; \} \| \{ `name`: `string`; `type`: `Mentionable`; `value`: `string`; \} \| \{ `focused`: `undefined` \| `boolean`; `name`: `string`; `type`: `Number`; `value`: `number`; \} \| \{ `name`: `string`; `type`: `Role`; `value`: `string`; \} \| \{ `focused`: `undefined` \| `boolean`; `name`: `string`; `type`: `String`; `value`: `string`; \} \| \{ `name`: `string`; `type`: `User`; `value`: `string`; \})[]; `type`: `Subcommand`; \} \| \{ `name`: `string`; `type`: `Attachment`; `value`: `string`; \} \| \{ `name`: `string`; `type`: `Boolean`; `value`: `boolean`; \} \| \{ `name`: `string`; `type`: `Channel`; `value`: `string`; \} \| \{ `focused`: `undefined` \| `boolean`; `name`: `string`; `type`: `Integer`; `value`: `number`; \} \| \{ `name`: `string`; `type`: `Mentionable`; `value`: `string`; \} \| \{ `focused`: `undefined` \| `boolean`; `name`: `string`; `type`: `Number`; `value`: `number`; \} \| \{ `name`: `string`; `type`: `Role`; `value`: `string`; \} \| \{ `focused`: `undefined` \| `boolean`; `name`: `string`; `type`: `String`; `value`: `string`; \} \| \{ `name`: `string`; `type`: `User`; `value`: `string`; \} \| \{ `name`: `string`; `options`: \{ `name`: `string`; `options`: `undefined` \| ( \| \{ `name`: `string`; `type`: `Attachment`; `value`: `string`; \} \| \{ `name`: `string`; `type`: `Boolean`; `value`: `boolean`; \} \| \{ `name`: `string`; `type`: `Channel`; `value`: `string`; \} \| \{ `focused`: ... \| ... \| ...; `name`: `string`; `type`: `Integer`; `value`: `number`; \} \| \{ `name`: `string`; `type`: `Mentionable`; `value`: `string`; \} \| \{ `focused`: ... \| ... \| ...; `name`: `string`; `type`: `Number`; `value`: `number`; \} \| \{ `name`: `string`; `type`: `Role`; `value`: `string`; \} \| \{ `focused`: ... \| ... \| ...; `name`: `string`; `type`: `String`; `value`: `string`; \} \| \{ `name`: `string`; `type`: `User`; `value`: `string`; \})[]; `type`: `Subcommand`; \}[]; `type`: `SubcommandGroup`; \})[]; `resolved`: `undefined` \| \{ `attachments`: `undefined` \| `Record`\<`string`, `APIAttachment`\>; `channels`: `undefined` \| `Record`\<`string`, `APIInteractionDataResolvedChannel`\>; `members`: `undefined` \| `Record`\<`string`, `APIInteractionDataResolvedGuildMember`\>; `roles`: `undefined` \| `Record`\<`string`, `APIRole`\>; `users`: `undefined` \| `Record`\<`string`, `APIUser`\>; \}; `type`: `ChatInput`; \} | [`BaseInteraction`](BaseInteraction.md).`data` |
| `data.guildId` | `public` | `undefined` \| `string` | - |
| `data.id` | `public` | `string` | - |
| `data.name` | `public` | `string` | - |
| `data.options` | `public` | ( \| \{ `name`: `string`; `options`: `undefined` \| ( \| \{ `name`: `string`; `type`: `Attachment`; `value`: `string`; \} \| \{ `name`: `string`; `type`: `Boolean`; `value`: `boolean`; \} \| \{ `name`: `string`; `type`: `Channel`; `value`: `string`; \} \| \{ `focused`: `undefined` \| `boolean`; `name`: `string`; `type`: `Integer`; `value`: `number`; \} \| \{ `name`: `string`; `type`: `Mentionable`; `value`: `string`; \} \| \{ `focused`: `undefined` \| `boolean`; `name`: `string`; `type`: `Number`; `value`: `number`; \} \| \{ `name`: `string`; `type`: `Role`; `value`: `string`; \} \| \{ `focused`: `undefined` \| `boolean`; `name`: `string`; `type`: `String`; `value`: `string`; \} \| \{ `name`: `string`; `type`: `User`; `value`: `string`; \})[]; `type`: `Subcommand`; \} \| \{ `name`: `string`; `type`: `Attachment`; `value`: `string`; \} \| \{ `name`: `string`; `type`: `Boolean`; `value`: `boolean`; \} \| \{ `name`: `string`; `type`: `Channel`; `value`: `string`; \} \| \{ `focused`: `undefined` \| `boolean`; `name`: `string`; `type`: `Integer`; `value`: `number`; \} \| \{ `name`: `string`; `type`: `Mentionable`; `value`: `string`; \} \| \{ `focused`: `undefined` \| `boolean`; `name`: `string`; `type`: `Number`; `value`: `number`; \} \| \{ `name`: `string`; `type`: `Role`; `value`: `string`; \} \| \{ `focused`: `undefined` \| `boolean`; `name`: `string`; `type`: `String`; `value`: `string`; \} \| \{ `name`: `string`; `type`: `User`; `value`: `string`; \} \| \{ `name`: `string`; `options`: \{ `name`: `string`; `options`: `undefined` \| ( \| \{ `name`: `string`; `type`: `Attachment`; `value`: `string`; \} \| \{ `name`: `string`; `type`: `Boolean`; `value`: `boolean`; \} \| \{ `name`: `string`; `type`: `Channel`; `value`: `string`; \} \| \{ `focused`: ... \| ... \| ...; `name`: `string`; `type`: `Integer`; `value`: `number`; \} \| \{ `name`: `string`; `type`: `Mentionable`; `value`: `string`; \} \| \{ `focused`: ... \| ... \| ...; `name`: `string`; `type`: `Number`; `value`: `number`; \} \| \{ `name`: `string`; `type`: `Role`; `value`: `string`; \} \| \{ `focused`: ... \| ... \| ...; `name`: `string`; `type`: `String`; `value`: `string`; \} \| \{ `name`: `string`; `type`: `User`; `value`: `string`; \})[]; `type`: `Subcommand`; \}[]; `type`: `SubcommandGroup`; \})[] | - |
| `data.resolved` | `public` | `undefined` \| \{ `attachments`: `undefined` \| `Record`\<`string`, `APIAttachment`\>; `channels`: `undefined` \| `Record`\<`string`, `APIInteractionDataResolvedChannel`\>; `members`: `undefined` \| `Record`\<`string`, `APIInteractionDataResolvedGuildMember`\>; `roles`: `undefined` \| `Record`\<`string`, `APIRole`\>; `users`: `undefined` \| `Record`\<`string`, `APIUser`\>; \} | - |
| `data.type` | `public` | `ChatInput` | - |
| `entitlements` | `public` | \{ `applicationId`: `string`; `consumed`: `undefined` \| `boolean`; `deleted`: `boolean`; `endsAt`: `undefined` \| `string`; `guildId`: `undefined` \| `string`; `id`: `string`; `skuId`: `string`; `startsAt`: `undefined` \| `string`; `type`: `EntitlementType`; `userId`: `undefined` \| `string`; \}[] | [`BaseInteraction`](BaseInteraction.md).`entitlements` |
| `guildId` | `public` | `undefined` \| `string` | [`BaseInteraction`](BaseInteraction.md).`guildId` |
| `guildLocale` | `public` |  \| `undefined` \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"` | [`BaseInteraction`](BaseInteraction.md).`guildLocale` |
| `id` | `public` | `string` | [`BaseInteraction`](BaseInteraction.md).`id` |
| `locale` | `public` |  \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"` | [`BaseInteraction`](BaseInteraction.md).`locale` |
| `member` | `public` | `When`\<`FromGuild`, [`InteractionGuildMember`](InteractionGuildMember.md), `undefined`\> | [`BaseInteraction`](BaseInteraction.md).`member` |
| `message?` | `public` | [`Message`](Message.md) | [`BaseInteraction`](BaseInteraction.md).`message` |
| `options` | `public` | [`OptionResolver`](OptionResolver.md) | - |
| `replied?` | `public` | `boolean` \| `Promise`\<`boolean`\> | [`BaseInteraction`](BaseInteraction.md).`replied` |
| `token` | `public` | `string` | [`BaseInteraction`](BaseInteraction.md).`token` |
| `type` | `public` | `ApplicationCommandAutocomplete` | - |
| `user` | `public` | [`User`](User.md) | [`BaseInteraction`](BaseInteraction.md).`user` |
| `version` | `public` | `1` | [`BaseInteraction`](BaseInteraction.md).`version` |

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

[`BaseInteraction`](BaseInteraction.md).[`deferReply`](BaseInteraction.md#deferreply)

#### Source

[seyfert/src/structures/Interaction.ts:227](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L227)

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

[`BaseInteraction`](BaseInteraction.md).[`fetchGuild`](BaseInteraction.md#fetchguild)

#### Source

[seyfert/src/structures/Interaction.ts:289](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L289)

***

### getInput()

```ts
getInput(): string
```

#### Returns

`string`

#### Source

[seyfert/src/structures/Interaction.ts:337](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L337)

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

[`BaseInteraction`](BaseInteraction.md).[`reply`](BaseInteraction.md#reply)

#### Intenal

#### Source

[seyfert/src/structures/Interaction.ts:346](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L346)

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

[seyfert/src/structures/Interaction.ts:341](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L341)

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

[`BaseInteraction`](BaseInteraction.md).[`from`](BaseInteraction.md#from)

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

[`BaseInteraction`](BaseInteraction.md).[`transformBody`](BaseInteraction.md#transformbody)

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

[`BaseInteraction`](BaseInteraction.md).[`transformBodyRequest`](BaseInteraction.md#transformbodyrequest)

#### Source

[seyfert/src/structures/Interaction.ts:118](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L118)
