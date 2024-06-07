[seyfert](../globals.md) / CommandContext

# Class: CommandContext\<T, M\>

## Extends

- `BaseContext`.[`ExtendContext`](../interfaces/ExtendContext.md)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`OptionsRecord`](../type-aliases/OptionsRecord.md) | \{\} |
| `M` *extends* keyof [`RegisteredMiddlewares`](../interfaces/RegisteredMiddlewares.md) | `never` |

## Constructors

### new CommandContext()

```ts
new CommandContext<T, M>(
   client: UsingClient, 
   data: Message | ChatInputCommandInteraction<boolean>, 
   resolver: OptionResolver, 
   shardId: number, 
command: Command | SubCommand): CommandContext<T, M>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `data` | [`Message`](Message.md) \| [`ChatInputCommandInteraction`](ChatInputCommandInteraction.md)\<`boolean`\> |
| `resolver` | [`OptionResolver`](OptionResolver.md) |
| `shardId` | `number` |
| `command` | [`Command`](Command.md) \| [`SubCommand`](SubCommand.md) |

#### Returns

[`CommandContext`](CommandContext.md)\<`T`, `M`\>

#### Inherited from

`BaseContext.constructor`

#### Source

[seyfert/src/commands/applications/chatcontext.ts:30](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chatcontext.ts#L30)

## Properties

| Property | Modifier | Type | Default value | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | `undefined` | `BaseContext.client` |
| `command` | `readonly` | [`Command`](Command.md) \| [`SubCommand`](SubCommand.md) | `undefined` | - |
| `globalMetadata` | `public` | [`GlobalMetadata`](../interfaces/GlobalMetadata.md) | `{}` | - |
| `interaction` | `public` | [`ChatInputCommandInteraction`](ChatInputCommandInteraction.md)\<`boolean`\> | `undefined` | - |
| `message` | `public` | `undefined` | `undefined` | - |
| `messageResponse?` | `public` | `null` \| [`Message`](Message.md) | `undefined` | - |
| `metadata` | `public` | [`CommandMetadata`](../type-aliases/CommandMetadata.md)\<`UnionToTuple`\<`M`, []\>\> | `...` | - |
| `options` | `public` | [`ContextOptions`](../type-aliases/ContextOptions.md)\<`T`\> | `...` | - |
| `resolver` | `readonly` | [`OptionResolver`](OptionResolver.md) | `undefined` | - |
| `shardId` | `readonly` | `number` | `undefined` | - |

## Accessors

### author

```ts
get author(): User
```

#### Returns

[`User`](User.md)

#### Source

[seyfert/src/commands/applications/chatcontext.ts:169](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chatcontext.ts#L169)

***

### channelId

```ts
get channelId(): string
```

#### Returns

`string`

#### Source

[seyfert/src/commands/applications/chatcontext.ts:165](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chatcontext.ts#L165)

***

### fullCommandName

```ts
get fullCommandName(): string
```

#### Returns

`string`

#### Source

[seyfert/src/commands/applications/chatcontext.ts:57](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chatcontext.ts#L57)

***

### guildId

```ts
get guildId(): undefined | string
```

#### Returns

`undefined` \| `string`

#### Source

[seyfert/src/commands/applications/chatcontext.ts:161](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chatcontext.ts#L161)

***

### member

```ts
get member(): undefined | InteractionGuildMember
```

#### Returns

`undefined` \| [`InteractionGuildMember`](InteractionGuildMember.md)

#### Source

[seyfert/src/commands/applications/chatcontext.ts:173](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chatcontext.ts#L173)

***

### proxy

```ts
get proxy(): APIRoutes
```

#### Returns

[`APIRoutes`](../type-aliases/APIRoutes.md)

#### Source

[seyfert/src/commands/applications/chatcontext.ts:49](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chatcontext.ts#L49)

***

### t

```ts
get t(): __InternalParseLocale<DefaultLocale> & {
  get: DefaultLocale;
}
```

#### Returns

[`__InternalParseLocale`](../type-aliases/InternalParseLocale.md)\<[`DefaultLocale`](../interfaces/DefaultLocale.md)\> & \{
  `get`: [`DefaultLocale`](../interfaces/DefaultLocale.md);
 \}

#### Source

[seyfert/src/commands/applications/chatcontext.ts:53](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chatcontext.ts#L53)

## Methods

### channel()

#### channel(mode)

```ts
channel(mode?: "rest" | "flow"): Promise<AllChannels>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode`? | `"rest"` \| `"flow"` |

##### Returns

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

##### Source

[seyfert/src/commands/applications/chatcontext.ts:109](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chatcontext.ts#L109)

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

[seyfert/src/commands/applications/chatcontext.ts:110](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chatcontext.ts#L110)

***

### deferReply()

```ts
deferReply(ephemeral: boolean): Promise<void | Message>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `ephemeral` | `boolean` | `false` |

#### Returns

`Promise`\<`void` \| [`Message`](Message.md)\>

#### Source

[seyfert/src/commands/applications/chatcontext.ts:72](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chatcontext.ts#L72)

***

### deleteResponse()

```ts
deleteResponse(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/commands/applications/chatcontext.ts:85](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chatcontext.ts#L85)

***

### editOrReply()

```ts
editOrReply<FR>(body: Omit<RESTPatchAPIWebhookWithTokenMessageJSONBody, "components" | "embeds"> & ResolverProps | Omit<APIInteractionResponseCallbackData, "components" | "embeds" | "poll"> & SendResolverProps, fetchReply?: FR): Promise<When<FR, Message | WebhookMessage, void | Message | WebhookMessage>>
```

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `FR` *extends* `boolean` | `false` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `Omit`\<`RESTPatchAPIWebhookWithTokenMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps` \| `Omit`\<`APIInteractionResponseCallbackData`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps` |
| `fetchReply`? | `FR` |

#### Returns

`Promise`\<`When`\<`FR`, [`Message`](Message.md) \| [`WebhookMessage`](WebhookMessage.md), `void` \| [`Message`](Message.md) \| [`WebhookMessage`](WebhookMessage.md)\>\>

#### Source

[seyfert/src/commands/applications/chatcontext.ts:90](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chatcontext.ts#L90)

***

### editResponse()

```ts
editResponse(body: Omit<RESTPatchAPIWebhookWithTokenMessageJSONBody, "components" | "embeds"> & ResolverProps): Promise<Message | WebhookMessage>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `Omit`\<`RESTPatchAPIWebhookWithTokenMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps` |

#### Returns

`Promise`\<[`Message`](Message.md) \| [`WebhookMessage`](WebhookMessage.md)\>

#### Source

[seyfert/src/commands/applications/chatcontext.ts:80](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chatcontext.ts#L80)

***

### fetchResponse()

```ts
fetchResponse(): Promise<undefined | WebhookMessage>
```

#### Returns

`Promise`\<`undefined` \| [`WebhookMessage`](WebhookMessage.md)\>

#### Source

[seyfert/src/commands/applications/chatcontext.ts:101](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chatcontext.ts#L101)

***

### guild()

#### guild(mode)

```ts
guild(mode?: "rest" | "flow"): Promise<undefined | Guild<"cached" | "api">>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode`? | `"rest"` \| `"flow"` |

##### Returns

`Promise`\<`undefined` \| [`Guild`](Guild.md)\<`"cached"` \| `"api"`\>\>

##### Source

[seyfert/src/commands/applications/chatcontext.ts:141](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chatcontext.ts#L141)

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

[seyfert/src/commands/applications/chatcontext.ts:142](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chatcontext.ts#L142)

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

[seyfert/src/commands/applications/chatcontext.ts:181](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chatcontext.ts#L181)

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

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode`? | `"rest"` \| `"flow"` |

##### Returns

`Promise`\<[`GuildMember`](GuildMember.md)\>

##### Source

[seyfert/src/commands/applications/chatcontext.ts:125](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chatcontext.ts#L125)

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

[seyfert/src/commands/applications/chatcontext.ts:126](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chatcontext.ts#L126)

***

### write()

```ts
write<FR>(body: Omit<APIInteractionResponseCallbackData, "components" | "embeds" | "poll"> & SendResolverProps, fetchReply?: FR): Promise<When<FR, Message | WebhookMessage, void | Message | WebhookMessage>>
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

`Promise`\<`When`\<`FR`, [`Message`](Message.md) \| [`WebhookMessage`](WebhookMessage.md), `void` \| [`Message`](Message.md) \| [`WebhookMessage`](WebhookMessage.md)\>\>

#### Source

[seyfert/src/commands/applications/chatcontext.ts:61](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chatcontext.ts#L61)
