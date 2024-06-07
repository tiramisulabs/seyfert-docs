[seyfert](../globals.md) / MenuCommandContext

# Class: MenuCommandContext\<T, M\>

## Extends

- `BaseContext`.[`ExtendContext`](../interfaces/ExtendContext.md)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`MessageCommandInteraction`](MessageCommandInteraction.md) \| [`UserCommandInteraction`](UserCommandInteraction.md) | - |
| `M` *extends* keyof [`RegisteredMiddlewares`](../interfaces/RegisteredMiddlewares.md) | `never` |

## Constructors

### new MenuCommandContext()

```ts
new MenuCommandContext<T, M>(
   client: UsingClient, 
   interaction: T, 
   shardId: number, 
command: ContextMenuCommand): MenuCommandContext<T, M>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `interaction` | `T` |
| `shardId` | `number` |
| `command` | [`ContextMenuCommand`](ContextMenuCommand.md) |

#### Returns

[`MenuCommandContext`](MenuCommandContext.md)\<`T`, `M`\>

#### Inherited from

`BaseContext.constructor`

#### Source

[seyfert/src/commands/applications/menucontext.ts:36](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menucontext.ts#L36)

## Properties

| Property | Modifier | Type | Default value | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | `undefined` | `BaseContext.client` |
| `command` | `readonly` | [`ContextMenuCommand`](ContextMenuCommand.md) | `undefined` | - |
| `globalMetadata` | `public` | [`GlobalMetadata`](../interfaces/GlobalMetadata.md) | `{}` | - |
| `interaction` | `readonly` | `T` | `undefined` | - |
| `metadata` | `public` | [`CommandMetadata`](../type-aliases/CommandMetadata.md)\<`UnionToTuple`\<`M`, []\>\> | `...` | - |
| `shardId` | `readonly` | `number` | `undefined` | - |

## Accessors

### author

```ts
get author(): User
```

#### Returns

[`User`](User.md)

#### Source

[seyfert/src/commands/applications/menucontext.ts:148](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menucontext.ts#L148)

***

### channelId

```ts
get channelId(): string
```

#### Returns

`string`

#### Source

[seyfert/src/commands/applications/menucontext.ts:144](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menucontext.ts#L144)

***

### fullCommandName

```ts
get fullCommandName(): string
```

#### Returns

`string`

#### Source

[seyfert/src/commands/applications/menucontext.ts:66](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menucontext.ts#L66)

***

### guildId

```ts
get guildId(): undefined | string
```

#### Returns

`undefined` \| `string`

#### Source

[seyfert/src/commands/applications/menucontext.ts:140](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menucontext.ts#L140)

***

### member

```ts
get member(): undefined | InteractionGuildMember
```

#### Returns

`undefined` \| [`InteractionGuildMember`](InteractionGuildMember.md)

#### Source

[seyfert/src/commands/applications/menucontext.ts:152](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menucontext.ts#L152)

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

#### Returns

[`__InternalParseLocale`](../type-aliases/InternalParseLocale.md)\<[`DefaultLocale`](../interfaces/DefaultLocale.md)\> & \{
  `get`: [`DefaultLocale`](../interfaces/DefaultLocale.md);
 \}

#### Source

[seyfert/src/commands/applications/menucontext.ts:62](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menucontext.ts#L62)

***

### target

```ts
get target(): InteractionTarget<T>
```

#### Returns

[`InteractionTarget`](../type-aliases/InteractionTarget.md)\<`T`\>

#### Source

[seyfert/src/commands/applications/menucontext.ts:49](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menucontext.ts#L49)

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

[seyfert/src/commands/applications/menucontext.ts:104](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menucontext.ts#L104)

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

[seyfert/src/commands/applications/menucontext.ts:105](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menucontext.ts#L105)

***

### deferReply()

```ts
deferReply(ephemeral: boolean): Promise<void>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `ephemeral` | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/commands/applications/menucontext.ts:81](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menucontext.ts#L81)

***

### deleteResponse()

```ts
deleteResponse(): Promise<undefined | void>
```

#### Returns

`Promise`\<`undefined` \| `void`\>

#### Source

[seyfert/src/commands/applications/menucontext.ts:89](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menucontext.ts#L89)

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

[seyfert/src/commands/applications/menucontext.ts:93](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menucontext.ts#L93)

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

#### Source

[seyfert/src/commands/applications/menucontext.ts:85](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menucontext.ts#L85)

***

### fetchResponse()

```ts
fetchResponse(): Promise<undefined | WebhookMessage>
```

#### Returns

`Promise`\<`undefined` \| [`WebhookMessage`](WebhookMessage.md)\>

#### Source

[seyfert/src/commands/applications/menucontext.ts:100](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menucontext.ts#L100)

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

[seyfert/src/commands/applications/menucontext.ts:125](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menucontext.ts#L125)

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

[seyfert/src/commands/applications/menucontext.ts:126](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menucontext.ts#L126)

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

[seyfert/src/commands/applications/menucontext.ts:156](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menucontext.ts#L156)

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

[seyfert/src/commands/applications/menucontext.ts:164](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menucontext.ts#L164)

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

[seyfert/src/commands/applications/menucontext.ts:160](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menucontext.ts#L160)

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

[seyfert/src/commands/applications/menucontext.ts:112](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menucontext.ts#L112)

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

[seyfert/src/commands/applications/menucontext.ts:113](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menucontext.ts#L113)

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

[seyfert/src/commands/applications/menucontext.ts:77](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menucontext.ts#L77)

***

### write()

```ts
write<FR>(body: Omit<APIInteractionResponseCallbackData, "components" | "embeds" | "poll"> & SendResolverProps, fetchReply?: FR): Promise<When<FR, WebhookMessage, void | WebhookMessage>>
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

`Promise`\<`When`\<`FR`, [`WebhookMessage`](WebhookMessage.md), `void` \| [`WebhookMessage`](WebhookMessage.md)\>\>

#### Source

[seyfert/src/commands/applications/menucontext.ts:70](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menucontext.ts#L70)
