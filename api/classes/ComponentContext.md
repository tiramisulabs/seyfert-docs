[seyfert](../globals.md) / ComponentContext

# Class: ComponentContext\<Type, M\>

Represents a context for interacting with components in a Discord bot.

## Extends

- `BaseContext`.[`ExtendContext`](../interfaces/ExtendContext.md)

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `Type` *extends* keyof [`ContextComponentCommandInteractionMap`](../interfaces/ContextComponentCommandInteractionMap.md) | keyof [`ContextComponentCommandInteractionMap`](../interfaces/ContextComponentCommandInteractionMap.md) | The type of component interaction. |
| `M` *extends* keyof [`RegisteredMiddlewares`](../interfaces/RegisteredMiddlewares.md) | `never` | - |

## Constructors

### new ComponentContext()

```ts
new ComponentContext<Type, M>(client: UsingClient, interaction: ContextComponentCommandInteractionMap[Type]): ComponentContext<Type, M>
```

Creates a new instance of the ComponentContext class.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) | The UsingClient instance. |
| `interaction` | [`ContextComponentCommandInteractionMap`](../interfaces/ContextComponentCommandInteractionMap.md)\[`Type`\] | The component interaction object. |

#### Returns

[`ComponentContext`](ComponentContext.md)\<`Type`, `M`\>

#### Inherited from

`BaseContext.constructor`

#### Source

[seyfert/src/components/componentcontext.ts:46](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L46)

## Properties

| Property | Modifier | Type | Default value | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | `undefined` | The UsingClient instance. | `BaseContext.client` |
| `command` | `public` | [`ComponentCommand`](ComponentCommand.md) | `undefined` | - | - |
| `globalMetadata` | `public` | [`GlobalMetadata`](../interfaces/GlobalMetadata.md) | `{}` | - | - |
| `interaction` | `public` | [`ContextComponentCommandInteractionMap`](../interfaces/ContextComponentCommandInteractionMap.md)\[`Type`\] | `undefined` | The component interaction object. | - |
| `metadata` | `public` | [`CommandMetadata`](../type-aliases/CommandMetadata.md)\<`UnionToTuple`\<`M`, []\>\> | `...` | - | - |

## Accessors

### author

```ts
get author(): User
```

Gets the author of the interaction.

#### Returns

[`User`](User.md)

#### Source

[seyfert/src/components/componentcontext.ts:196](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L196)

***

### channelId

```ts
get channelId(): string
```

Gets the ID of the channel of the interaction.

#### Returns

`string`

#### Source

[seyfert/src/components/componentcontext.ts:189](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L189)

***

### customId

```ts
get customId(): string
```

Gets the custom ID of the interaction.

#### Returns

`string`

#### Source

[seyfert/src/components/componentcontext.ts:67](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L67)

***

### guildId

```ts
get guildId(): undefined | string
```

Gets the ID of the guild of the interaction.

#### Returns

`undefined` \| `string`

#### Source

[seyfert/src/components/componentcontext.ts:182](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L182)

***

### member

```ts
get member(): undefined | InteractionGuildMember
```

Gets the member of the interaction.

#### Returns

`undefined` \| [`InteractionGuildMember`](InteractionGuildMember.md)

#### Source

[seyfert/src/components/componentcontext.ts:203](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L203)

***

### proxy

```ts
get proxy(): APIRoutes
```

Gets the proxy object.

#### Returns

[`APIRoutes`](../type-aliases/APIRoutes.md)

#### Source

[seyfert/src/commands/basecontext.ts:14](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/basecontext.ts#L14)

***

### t

```ts
get t(): __InternalParseLocale<DefaultLocale> & {
  get: DefaultLocale;
}
```

Gets the language object for the interaction's locale.

#### Returns

[`__InternalParseLocale`](../type-aliases/InternalParseLocale.md)\<[`DefaultLocale`](../interfaces/DefaultLocale.md)\> & \{
  `get`: [`DefaultLocale`](../interfaces/DefaultLocale.md);
 \}

#### Source

[seyfert/src/components/componentcontext.ts:60](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L60)

## Methods

### channel()

#### channel(mode)

```ts
channel(mode?: "rest" | "flow"): Promise<AllChannels>
```

Gets the channel of the interaction.

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `mode`? | `"rest"` \| `"flow"` | The mode to fetch the channel. |

##### Returns

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

A promise that resolves to the channel.

##### Source

[seyfert/src/components/componentcontext.ts:133](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L133)

#### channel(mode)

```ts
channel(mode?: "cache"): ReturnCache<AllChannels>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode`? | `"cache"` |

##### Returns

[`ReturnCache`](../type-aliases/ReturnCache.md)\<[`AllChannels`](../type-aliases/AllChannels.md)\>

##### Source

[seyfert/src/components/componentcontext.ts:134](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L134)

***

### deferReply()

```ts
deferReply(ephemeral: boolean): Promise<void>
```

Defers the reply to the interaction.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ephemeral` | `boolean` | `false` | Whether the reply should be ephemeral or not. |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/components/componentcontext.ts:84](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L84)

***

### deleteResponse()

```ts
deleteResponse(): Promise<undefined | void>
```

Deletes the response of the interaction.

#### Returns

`Promise`\<`undefined` \| `void`\>

A promise that resolves when the response is deleted.

#### Source

[seyfert/src/components/componentcontext.ts:120](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L120)

***

### editOrReply()

```ts
editOrReply<FR>(body: Omit<RESTPatchAPIWebhookWithTokenMessageJSONBody, "components" | "embeds"> & ResolverProps | Omit<APIInteractionResponseCallbackData, "components" | "embeds" | "poll"> & SendResolverProps, fetchReply?: FR): Promise<When<FR, Message | WebhookMessage, void | Message | WebhookMessage>>
```

Edits the response or replies to the interaction.

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `FR` *extends* `boolean` | `false` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `body` | `Omit`\<`RESTPatchAPIWebhookWithTokenMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps` \| `Omit`\<`APIInteractionResponseCallbackData`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps` | The body of the response or updated body of the interaction. |
| `fetchReply`? | `FR` | Whether to fetch the reply or not. |

#### Returns

`Promise`\<`When`\<`FR`, [`Message`](Message.md) \| [`WebhookMessage`](WebhookMessage.md), `void` \| [`Message`](Message.md) \| [`WebhookMessage`](WebhookMessage.md)\>\>

#### Source

[seyfert/src/components/componentcontext.ts:109](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L109)

***

### editResponse()

```ts
editResponse(body: Omit<RESTPatchAPIWebhookWithTokenMessageJSONBody, "components" | "embeds"> & ResolverProps): Promise<WebhookMessage>
```

Edits the response of the interaction.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `body` | `Omit`\<`RESTPatchAPIWebhookWithTokenMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps` | The updated body of the response. |

#### Returns

`Promise`\<[`WebhookMessage`](WebhookMessage.md)\>

#### Source

[seyfert/src/components/componentcontext.ts:92](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L92)

***

### guild()

#### guild(mode)

```ts
guild(mode?: "rest" | "flow"): Promise<undefined | Guild<"cached" | "api">>
```

Gets the guild of the interaction.

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `mode`? | `"rest"` \| `"flow"` | The mode to fetch the guild. |

##### Returns

`Promise`\<`undefined` \| [`Guild`](Guild.md)\<`"cached"` \| `"api"`\>\>

A promise that resolves to the guild.

##### Source

[seyfert/src/components/componentcontext.ts:164](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L164)

#### guild(mode)

```ts
guild(mode?: "cache"): ReturnCache<undefined | Guild<"cached">>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode`? | `"cache"` |

##### Returns

[`ReturnCache`](../type-aliases/ReturnCache.md)\<`undefined` \| [`Guild`](Guild.md)\<`"cached"`\>\>

##### Source

[seyfert/src/components/componentcontext.ts:165](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L165)

***

### isButton()

```ts
isButton(): this is ComponentContext<"Button", never>
```

#### Returns

`this is ComponentContext<"Button", never>`

#### Inherited from

`BaseContext.isButton`

#### Source

[seyfert/src/components/componentcontext.ts:211](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L211)

***

### isChannelSelectMenu()

```ts
isChannelSelectMenu(): this is ComponentContext<"ChannelSelect", never>
```

#### Returns

`this is ComponentContext<"ChannelSelect", never>`

#### Inherited from

`BaseContext.isChannelSelectMenu`

#### Source

[seyfert/src/components/componentcontext.ts:215](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L215)

***

### isChat()

```ts
isChat(): this is CommandContext<Object, never>
```

#### Returns

`this is CommandContext<Object, never>`

#### Inherited from

`BaseContext.isChat`

#### Source

[seyfert/src/commands/basecontext.ts:18](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/basecontext.ts#L18)

***

### isComponent()

```ts
isComponent(): this is ComponentContext<keyof ContextComponentCommandInteractionMap, never>
```

#### Returns

`this is ComponentContext<keyof ContextComponentCommandInteractionMap, never>`

#### Inherited from

`BaseContext.isComponent`

#### Source

[seyfert/src/components/componentcontext.ts:207](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L207)

***

### isMentionableSelectMenu()

```ts
isMentionableSelectMenu(): this is ComponentContext<"MentionableSelect", never>
```

#### Returns

`this is ComponentContext<"MentionableSelect", never>`

#### Inherited from

`BaseContext.isMentionableSelectMenu`

#### Source

[seyfert/src/components/componentcontext.ts:223](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L223)

***

### isMenu()

```ts
isMenu(): this is MenuCommandContext<UserCommandInteraction<boolean> | MessageCommandInteraction<boolean>, never>
```

#### Returns

this is MenuCommandContext\<UserCommandInteraction\<boolean\> \| MessageCommandInteraction\<boolean\>, never\>

#### Inherited from

`BaseContext.isMenu`

#### Source

[seyfert/src/commands/basecontext.ts:22](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/basecontext.ts#L22)

***

### isMenuMessage()

```ts
isMenuMessage(): this is MenuCommandContext<MessageCommandInteraction<boolean>, never>
```

#### Returns

`this is MenuCommandContext<MessageCommandInteraction<boolean>, never>`

#### Inherited from

`BaseContext.isMenuMessage`

#### Source

[seyfert/src/commands/basecontext.ts:30](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/basecontext.ts#L30)

***

### isMenuUser()

```ts
isMenuUser(): this is MenuCommandContext<UserCommandInteraction<boolean>, never>
```

#### Returns

`this is MenuCommandContext<UserCommandInteraction<boolean>, never>`

#### Inherited from

`BaseContext.isMenuUser`

#### Source

[seyfert/src/commands/basecontext.ts:26](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/basecontext.ts#L26)

***

### isModal()

```ts
isModal(): this is ModalContext<never>
```

#### Returns

`this is ModalContext<never>`

#### Inherited from

`BaseContext.isModal`

#### Source

[seyfert/src/commands/basecontext.ts:38](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/basecontext.ts#L38)

***

### isRoleSelectMenu()

```ts
isRoleSelectMenu(): this is ComponentContext<"RoleSelect", never>
```

#### Returns

`this is ComponentContext<"RoleSelect", never>`

#### Inherited from

`BaseContext.isRoleSelectMenu`

#### Source

[seyfert/src/components/componentcontext.ts:219](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L219)

***

### isStringSelectMenu()

```ts
isStringSelectMenu(): this is ComponentContext<"StringSelect", never>
```

#### Returns

`this is ComponentContext<"StringSelect", never>`

#### Inherited from

`BaseContext.isStringSelectMenu`

#### Source

[seyfert/src/components/componentcontext.ts:231](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L231)

***

### isUserSelectMenu()

```ts
isUserSelectMenu(): this is ComponentContext<"UserSelect", never>
```

#### Returns

`this is ComponentContext<"UserSelect", never>`

#### Inherited from

`BaseContext.isUserSelectMenu`

#### Source

[seyfert/src/components/componentcontext.ts:227](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L227)

***

### me()

#### me(mode)

```ts
me(mode?: "rest" | "flow"): Promise<GuildMember>
```

Gets the bot member in the guild of the interaction.

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `mode`? | `"rest"` \| `"flow"` | The mode to fetch the member. |

##### Returns

`Promise`\<[`GuildMember`](GuildMember.md)\>

A promise that resolves to the bot member.

##### Source

[seyfert/src/components/componentcontext.ts:146](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L146)

#### me(mode)

```ts
me(mode?: "cache"): ReturnCache<undefined | GuildMember>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode`? | `"cache"` |

##### Returns

[`ReturnCache`](../type-aliases/ReturnCache.md)\<`undefined` \| [`GuildMember`](GuildMember.md)\>

##### Source

[seyfert/src/components/componentcontext.ts:147](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L147)

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

#### Source

[seyfert/src/components/componentcontext.ts:124](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L124)

***

### update()

```ts
update(body: Omit<APIInteractionResponseCallbackData, "components" | "embeds"> & ResolverProps): Promise<void>
```

Updates the interaction with new data.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `body` | `Omit`\<`APIInteractionResponseCallbackData`, `"components"` \| `"embeds"`\> & `ResolverProps` | The updated body of the interaction. |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/components/componentcontext.ts:100](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L100)

***

### write()

```ts
write<FR>(body: Omit<APIInteractionResponseCallbackData, "components" | "embeds" | "poll"> & SendResolverProps, fetchReply?: FR): Promise<When<FR, WebhookMessage, void>>
```

Writes a response to the interaction.

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `FR` *extends* `boolean` | `false` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `body` | `Omit`\<`APIInteractionResponseCallbackData`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps` | The body of the response. |
| `fetchReply`? | `FR` | Whether to fetch the reply or not. |

#### Returns

`Promise`\<`When`\<`FR`, [`WebhookMessage`](WebhookMessage.md), `void`\>\>

#### Source

[seyfert/src/components/componentcontext.ts:76](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcontext.ts#L76)
