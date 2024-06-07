[seyfert](../globals.md) / ModalSubmitInteraction

# Class: ModalSubmitInteraction\<FromGuild\>

## Extends

- `Omit`\<[`Interaction`](Interaction.md)\<`FromGuild`, `APIModalSubmitInteraction`\>, `"modal"`\>.[`BaseInteraction`](BaseInteraction.md)\<`FromGuild`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `FromGuild` *extends* `boolean` | `boolean` |

## Constructors

### new ModalSubmitInteraction()

```ts
new ModalSubmitInteraction<FromGuild>(
   client: UsingClient, 
   interaction: APIInteraction, 
__reply?: __InternalReplyFunction): ModalSubmitInteraction<FromGuild>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `interaction` | `APIInteraction` |
| `__reply`? | `__InternalReplyFunction` |

#### Returns

[`ModalSubmitInteraction`](ModalSubmitInteraction.md)\<`FromGuild`\>

#### Inherited from

[`BaseInteraction`](BaseInteraction.md).[`constructor`](BaseInteraction.md#constructors)

#### Source

[seyfert/src/structures/Interaction.ts:92](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L92)

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
| `data` | `public` | \{ `components`: \{ `components`: \{ `customId`: `string`; `type`: `ComponentType`; `value`: `string`; \}[]; `type`: `ActionRow`; \}[]; `customId`: `string`; \} | [`BaseInteraction`](BaseInteraction.md).`data` |
| `data.components` | `public` | \{ `components`: \{ `customId`: `string`; `type`: `ComponentType`; `value`: `string`; \}[]; `type`: `ActionRow`; \}[] | - |
| `data.customId` | `public` | `string` | - |
| `entitlements` | `public` | \{ `applicationId`: `string`; `consumed`: `undefined` \| `boolean`; `deleted`: `boolean`; `endsAt`: `undefined` \| `string`; `guildId`: `undefined` \| `string`; `id`: `string`; `skuId`: `string`; `startsAt`: `undefined` \| `string`; `type`: `EntitlementType`; `userId`: `undefined` \| `string`; \}[] | [`BaseInteraction`](BaseInteraction.md).`entitlements` |
| `guildId` | `public` | `undefined` \| `string` | [`BaseInteraction`](BaseInteraction.md).`guildId` |
| `guildLocale` | `public` |  \| `undefined` \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"` | [`BaseInteraction`](BaseInteraction.md).`guildLocale` |
| `id` | `public` | `string` | [`BaseInteraction`](BaseInteraction.md).`id` |
| `locale` | `public` |  \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"` | [`BaseInteraction`](BaseInteraction.md).`locale` |
| `member` | `public` | `When`\<`FromGuild`, [`InteractionGuildMember`](InteractionGuildMember.md), `undefined`\> | [`BaseInteraction`](BaseInteraction.md).`member` |
| `message?` | `public` | [`Message`](Message.md) | [`BaseInteraction`](BaseInteraction.md).`message` |
| `replied?` | `public` | `boolean` \| `Promise`\<`boolean`\> | [`BaseInteraction`](BaseInteraction.md).`replied` |
| `token` | `public` | `string` | [`BaseInteraction`](BaseInteraction.md).`token` |
| `user` | `public` | [`User`](User.md) | [`BaseInteraction`](BaseInteraction.md).`user` |
| `version` | `public` | `1` | [`BaseInteraction`](BaseInteraction.md).`version` |

## Accessors

### components

```ts
get components(): {
  components: {
     customId: string;
     type: ComponentType;
     value: string;
    }[];
  type: ActionRow;
 }[]
```

#### Returns

\{
  `components`: \{
     `customId`: `string`;
     `type`: `ComponentType`;
     `value`: `string`;
    \}[];
  `type`: `ActionRow`;
 \}[]

#### Source

[seyfert/src/structures/Interaction.ts:637](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L637)

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

[seyfert/src/structures/Interaction.ts:633](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L633)

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

`Omit.deleteMessage`

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

`Omit.deleteResponse`

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

`Omit.editMessage`

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

`Omit.editOrReply`

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

`Omit.editResponse`

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

[`BaseInteraction`](BaseInteraction.md).[`fetchGuild`](BaseInteraction.md#fetchguild)

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

`Omit.fetchMessage`

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

`Omit.fetchResponse`

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

`Omit.followup`

#### Source

[seyfert/src/structures/Interaction.ts:410](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L410)

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

[seyfert/src/structures/Interaction.ts:641](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L641)

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

[seyfert/src/structures/Interaction.ts:642](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L642)

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

[`BaseInteraction`](BaseInteraction.md).[`reply`](BaseInteraction.md#reply)

#### Source

[seyfert/src/structures/Interaction.ts:216](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L216)

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

`Omit.write`

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
