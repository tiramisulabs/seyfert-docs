[seyfert](../globals.md) / StringSelectMenuInteraction

# Class: StringSelectMenuInteraction\<T\>

## Extends

- \{
  `api`: [`APIRoutes`](../type-aliases/APIRoutes.md);
  `appPermissions`: `PermissionsBitField`;
  `applicationId`: `string`;
  `authorizingIntegrationOwners`: \{\};
  `cache`: [`Cache`](Cache.md);
  `channel`: [`AllChannels`](../type-aliases/AllChannels.md);
  `channelId`: `string`;
  `client`: [`UsingClient`](../interfaces/UsingClient.md);
  `componentType`:   \| `Button`
     \| `StringSelect`
     \| `UserSelect`
     \| `RoleSelect`
     \| `MentionableSelect`
     \| `ChannelSelect`;
  `context`: `undefined` \| `InteractionContextType`;
  `createdAt`: `Date`;
  `createdTimestamp`: `number`;
  `customId`: `string`;
  `entitlements`: \{
     `applicationId`: `string`;
     `consumed`: `undefined` \| `boolean`;
     `deleted`: `boolean`;
     `endsAt`: `undefined` \| `string`;
     `guildId`: `undefined` \| `string`;
     `id`: `string`;
     `skuId`: `string`;
     `startsAt`: `undefined` \| `string`;
     `type`: `EntitlementType`;
     `userId`: `undefined` \| `string`;
    \}[];
  `guildId`: `undefined` \| `string`;
  `guildLocale`:   \| `undefined`
     \| `"id"`
     \| `"en-US"`
     \| `"en-GB"`
     \| `"bg"`
     \| `"zh-CN"`
     \| `"zh-TW"`
     \| `"hr"`
     \| `"cs"`
     \| `"da"`
     \| `"nl"`
     \| `"fi"`
     \| `"fr"`
     \| `"de"`
     \| `"el"`
     \| `"hi"`
     \| `"hu"`
     \| `"it"`
     \| `"ja"`
     \| `"ko"`
     \| `"lt"`
     \| `"no"`
     \| `"pl"`
     \| `"pt-BR"`
     \| `"ro"`
     \| `"ru"`
     \| `"es-ES"`
     \| `"es-419"`
     \| `"sv-SE"`
     \| `"th"`
     \| `"tr"`
     \| `"uk"`
     \| `"vi"`;
  `id`: `string`;
  `locale`:   \| `"id"`
     \| `"en-US"`
     \| `"en-GB"`
     \| `"bg"`
     \| `"zh-CN"`
     \| `"zh-TW"`
     \| `"hr"`
     \| `"cs"`
     \| `"da"`
     \| `"nl"`
     \| `"fi"`
     \| `"fr"`
     \| `"de"`
     \| `"el"`
     \| `"hi"`
     \| `"hu"`
     \| `"it"`
     \| `"ja"`
     \| `"ko"`
     \| `"lt"`
     \| `"no"`
     \| `"pl"`
     \| `"pt-BR"`
     \| `"ro"`
     \| `"ru"`
     \| `"es-ES"`
     \| `"es-419"`
     \| `"sv-SE"`
     \| `"th"`
     \| `"tr"`
     \| `"uk"`
     \| `"vi"`;
  `member`: `undefined` \| [`InteractionGuildMember`](InteractionGuildMember.md);
  `message`: [`Message`](Message.md);
  `replied`: `boolean` \| `Promise`\<`boolean`\>;
  `rest`: [`ApiHandler`](ApiHandler.md);
  `token`: `string`;
  `type`: `MessageComponent`;
  `user`: [`User`](User.md);
  `values`: `string`[];
  `version`: `1`;
  `deferReply`: `Promise`\<`void`\>;
  `deferUpdate`: `Promise`\<`void`\>;
  `deleteMessage`: `Promise`\<`undefined` \| `void`\>;
  `deleteResponse`: `Promise`\<`undefined` \| `void`\>;
  `editMessage`: `Promise`\<[`WebhookMessage`](WebhookMessage.md)\>;
  `editOrReply`: `Promise`\<`When`\<`FR`, [`WebhookMessage`](WebhookMessage.md), `void`\>\>;
  `editResponse`: `Promise`\<[`WebhookMessage`](WebhookMessage.md)\>;
  `fetchGuild`: `undefined` \| `Promise`\<[`Guild`](Guild.md)\<`"cached"`\> \| [`Guild`](Guild.md)\<`"api"`\>\>;
  `fetchMessage`: `Promise`\<`undefined` \| [`WebhookMessage`](WebhookMessage.md)\>;
  `fetchResponse`: `Promise`\<`undefined` \| [`WebhookMessage`](WebhookMessage.md)\>;
  `followup`: `Promise`\<[`WebhookMessage`](WebhookMessage.md)\>;
  `isButton`: `this is ButtonInteraction`;
  `isChannelSelectMenu`: `this is ChannelSelectMenuInteraction`;
  `isMentionableSelectMenu`: `this is MentionableSelectMenuInteraction`;
  `isRoleSelectMenu`: `this is RoleSelectMenuInteraction`;
  `isStringSelectMenu`: `this is StringSelectMenuInteraction<string[]>`;
  `isUserSelectMenu`: `this is UserSelectMenuInteraction`;
  `modal`: `Promise`\<`void`\>;
  `reply`: `Promise`\<`void`\>;
  `update`: `Promise`\<`void`\>;
  `write`: `Promise`\<`When`\<`FR`, [`WebhookMessage`](WebhookMessage.md), `void`\>\>;
 \}

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* `any`[] | `string`[] |

## Constructors

### new StringSelectMenuInteraction()

```ts
new StringSelectMenuInteraction<T>(...args: any[]): StringSelectMenuInteraction<T>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `any`[] |

#### Returns

[`StringSelectMenuInteraction`](StringSelectMenuInteraction.md)\<`T`\>

#### Inherited from

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).constructor`

#### Source

[seyfert/src/common/types/util.ts:3](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/types/util.ts#L3)

## Properties

| Property | Modifier | Type | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `api` | `public` | [`APIRoutes`](../type-aliases/APIRoutes.md) | `(SelectMenuInteraction as unknown as ToClass<
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
| `authorizingIntegrationOwners` | `public` | \{\} | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).authorizingIntegrationOwners` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).authorizingIntegrationOwners` |
| `cache` | `public` | [`Cache`](Cache.md) | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).cache` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).cache` |
| `channel` | `public` | [`AllChannels`](../type-aliases/AllChannels.md) | `(SelectMenuInteraction as unknown as ToClass<
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
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | `(SelectMenuInteraction as unknown as ToClass<
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
| `context` | `public` | `undefined` \| `InteractionContextType` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).context` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).context` |
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
| `data` | `public` | `Omit`\<\{ `componentType`: `StringSelect`; `customId`: `string`; `values`: `string`[]; \}, `"values"`\> & \{ `values`: `T`; \} | - | - |
| `entitlements` | `public` | \{ `applicationId`: `string`; `consumed`: `undefined` \| `boolean`; `deleted`: `boolean`; `endsAt`: `undefined` \| `string`; `guildId`: `undefined` \| `string`; `id`: `string`; `skuId`: `string`; `startsAt`: `undefined` \| `string`; `type`: `EntitlementType`; `userId`: `undefined` \| `string`; \}[] | `(SelectMenuInteraction as unknown as ToClass<
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
| `member` | `public` | `undefined` \| [`InteractionGuildMember`](InteractionGuildMember.md) | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).member` | `(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).member` |
| `message` | `public` | [`Message`](Message.md) | `(SelectMenuInteraction as unknown as ToClass<
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
| `rest` | `public` | [`ApiHandler`](ApiHandler.md) | `(SelectMenuInteraction as unknown as ToClass<
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
| `user` | `public` | [`User`](User.md) | `(SelectMenuInteraction as unknown as ToClass<
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

[seyfert/src/structures/Interaction.ts:227](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L227)

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

[seyfert/src/structures/Interaction.ts:456](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L456)

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

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).deleteMessage`

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

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).deleteResponse`

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

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).editMessage`

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

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).editOrReply`

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

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).editResponse`

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

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).fetchGuild`

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

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).fetchMessage`

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

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).fetchResponse`

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

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).followup`

#### Source

[seyfert/src/structures/Interaction.ts:410](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L410)

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

[seyfert/src/structures/Interaction.ts:470](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L470)

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

[seyfert/src/structures/Interaction.ts:474](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L474)

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

[seyfert/src/structures/Interaction.ts:482](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L482)

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

[seyfert/src/structures/Interaction.ts:478](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L478)

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

[seyfert/src/structures/Interaction.ts:490](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L490)

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

[seyfert/src/structures/Interaction.ts:486](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L486)

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

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).reply`

#### Source

[seyfert/src/structures/Interaction.ts:216](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L216)

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

[seyfert/src/structures/Interaction.ts:449](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L449)

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

`(SelectMenuInteraction as unknown as ToClass<
	Omit<SelectMenuInteraction, 'data'>,
	StringSelectMenuInteraction
>).write`

#### Source

[seyfert/src/structures/Interaction.ts:363](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Interaction.ts#L363)
