[seyfert](../globals.md) / ModalContext

# Class: ModalContext\<M\>

Represents a context for interacting with components in a Discord bot.

## Template

The type of component interaction.

## Extends

- `BaseContext`.[`ExtendContext`](../interfaces/ExtendContext.md)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `M` *extends* keyof [`RegisteredMiddlewares`](../interfaces/RegisteredMiddlewares.md) | `never` |

## Constructors

### new ModalContext()

```ts
new ModalContext<M>(client: UsingClient, interaction: ModalSubmitInteraction<boolean>): ModalContext<M>
```

Creates a new instance of the ComponentContext class.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) | The UsingClient instance. |
| `interaction` | [`ModalSubmitInteraction`](ModalSubmitInteraction.md)\<`boolean`\> | The component interaction object. |

#### Returns

[`ModalContext`](ModalContext.md)\<`M`\>

#### Inherited from

`BaseContext.constructor`

#### Source

[seyfert/src/components/modalcontext.ts:34](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcontext.ts#L34)

## Properties

| Property | Modifier | Type | Default value | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | `undefined` | The UsingClient instance. | `BaseContext.client` |
| `command` | `public` | [`ModalCommand`](ModalCommand.md) | `undefined` | - | - |
| `globalMetadata` | `public` | [`GlobalMetadata`](../interfaces/GlobalMetadata.md) | `{}` | - | - |
| `interaction` | `public` | [`ModalSubmitInteraction`](ModalSubmitInteraction.md)\<`boolean`\> | `undefined` | The component interaction object. | - |
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

[seyfert/src/components/modalcontext.ts:178](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcontext.ts#L178)

***

### channelId

```ts
get channelId(): string
```

Gets the ID of the channel of the interaction.

#### Returns

`string`

#### Source

[seyfert/src/components/modalcontext.ts:171](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcontext.ts#L171)

***

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

[seyfert/src/components/modalcontext.ts:49](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcontext.ts#L49)

***

### customId

```ts
get customId(): string
```

#### Returns

`string`

#### Source

[seyfert/src/components/modalcontext.ts:45](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcontext.ts#L45)

***

### guildId

```ts
get guildId(): undefined | string
```

Gets the ID of the guild of the interaction.

#### Returns

`undefined` \| `string`

#### Source

[seyfert/src/components/modalcontext.ts:164](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcontext.ts#L164)

***

### member

```ts
get member(): undefined | InteractionGuildMember
```

Gets the member of the interaction.

#### Returns

`undefined` \| [`InteractionGuildMember`](InteractionGuildMember.md)

#### Source

[seyfert/src/components/modalcontext.ts:185](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcontext.ts#L185)

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

[seyfert/src/components/modalcontext.ts:56](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcontext.ts#L56)

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

[seyfert/src/components/modalcontext.ts:115](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcontext.ts#L115)

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

[seyfert/src/components/modalcontext.ts:116](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcontext.ts#L116)

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

[seyfert/src/components/modalcontext.ts:73](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcontext.ts#L73)

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

[seyfert/src/components/modalcontext.ts:101](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcontext.ts#L101)

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

[seyfert/src/components/modalcontext.ts:90](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcontext.ts#L90)

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

[seyfert/src/components/modalcontext.ts:81](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcontext.ts#L81)

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

[seyfert/src/components/modalcontext.ts:146](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcontext.ts#L146)

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

[seyfert/src/components/modalcontext.ts:147](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcontext.ts#L147)

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

[seyfert/src/commands/basecontext.ts:42](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/basecontext.ts#L42)

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

[seyfert/src/commands/basecontext.ts:46](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/basecontext.ts#L46)

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

[seyfert/src/commands/basecontext.ts:34](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/basecontext.ts#L34)

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

[seyfert/src/commands/basecontext.ts:54](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/basecontext.ts#L54)

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

[seyfert/src/components/modalcontext.ts:189](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcontext.ts#L189)

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

[seyfert/src/commands/basecontext.ts:50](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/basecontext.ts#L50)

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

[seyfert/src/commands/basecontext.ts:62](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/basecontext.ts#L62)

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

[seyfert/src/commands/basecontext.ts:58](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/basecontext.ts#L58)

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

[seyfert/src/components/modalcontext.ts:128](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcontext.ts#L128)

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

[seyfert/src/components/modalcontext.ts:129](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcontext.ts#L129)

***

### modal()

```ts
modal(body: ModalCreateBodyRequest): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `ModalCreateBodyRequest` |

#### Returns

`any`

#### Source

[seyfert/src/components/modalcontext.ts:105](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcontext.ts#L105)

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

[seyfert/src/components/modalcontext.ts:65](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcontext.ts#L65)
