---
editUrl: false
next: false
prev: false
title: "CommandContext"
---

## Extends

- [`ExtendContext`](/api/interfaces/extendcontext/)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`OptionsRecord`](/api/type-aliases/optionsrecord/) | `Object` |
| `M` extends keyof [`RegisteredMiddlewares`](/api/interfaces/registeredmiddlewares/) | `never` |

## Constructors

### new CommandContext(client, data, resolver, shardId)

```ts
new CommandContext<T, M>(
   client: UsingClient, 
   data: Message | ChatInputCommandInteraction<boolean>, 
   resolver: OptionResolver, 
shardId: number): CommandContext<T, M>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](/api/interfaces/usingclient/) |
| `data` | [`Message`](/api/classes/message/) \| [`ChatInputCommandInteraction`](/api/classes/chatinputcommandinteraction/)\<`boolean`\> |
| `resolver` | [`OptionResolver`](/api/classes/optionresolver/) |
| `shardId` | `number` |

#### Returns

[`CommandContext`](/api/classes/commandcontext/)\<`T`, `M`\>

#### Inherited from

`ExtendContext.constructor`

#### Source

[seyfert/src/commands/applications/chatcontext.ts:34](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chatcontext.ts#L34)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) |
| `globalMetadata` | `public` | [`GlobalMetadata`](/api/interfaces/globalmetadata/) |
| `interaction` | `public` | [`ChatInputCommandInteraction`](/api/classes/chatinputcommandinteraction/)\<`boolean`\> |
| `message` | `public` | `undefined` |
| `messageResponse?` | `public` | `null` \| [`Message`](/api/classes/message/) |
| `metadata` | `public` | [`CommandMetadata`](/api/type-aliases/commandmetadata/)\<`UnionToTuple`\<`M`, []\>\> |
| `options` | `public` | [`ContextOptions`](/api/type-aliases/contextoptions/)\<`T`\> |
| `resolver` | `public` | [`OptionResolver`](/api/classes/optionresolver/) |
| `shardId` | `readonly` | `number` |

## Accessors

### author

```ts
get author(): User
```

#### Returns

[`User`](/api/classes/user/)

#### Source

[seyfert/src/commands/applications/chatcontext.ts:161](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chatcontext.ts#L161)

***

### channelId

```ts
get channelId(): string
```

#### Returns

`string`

#### Source

[seyfert/src/commands/applications/chatcontext.ts:157](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chatcontext.ts#L157)

***

### guildId

```ts
get guildId(): undefined | string
```

#### Returns

`undefined` \| `string`

#### Source

[seyfert/src/commands/applications/chatcontext.ts:153](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chatcontext.ts#L153)

***

### member

```ts
get member(): undefined | InteractionGuildMember
```

#### Returns

`undefined` \| [`InteractionGuildMember`](/api/classes/interactionguildmember/)

#### Source

[seyfert/src/commands/applications/chatcontext.ts:165](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chatcontext.ts#L165)

***

### proxy

```ts
get proxy(): APIRoutes
```

#### Returns

[`APIRoutes`](/api/type-aliases/apiroutes/)

#### Source

[seyfert/src/commands/applications/chatcontext.ts:51](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chatcontext.ts#L51)

***

### t

```ts
get t(): __InternalParseLocale<DefaultLocale> & Object
```

#### Returns

[`__InternalParseLocale`](/api/type-aliases/internalparselocale/)\<[`DefaultLocale`](/api/interfaces/defaultlocale/)\> & `Object`

#### Source

[seyfert/src/commands/applications/chatcontext.ts:55](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chatcontext.ts#L55)

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

`Promise`\<[`AllChannels`](/api/type-aliases/allchannels/)\>

##### Source

[seyfert/src/commands/applications/chatcontext.ts:101](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chatcontext.ts#L101)

#### channel(mode)

```ts
channel(mode?: "cache"): ReturnCache<AllChannels>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode`? | `"cache"` |

##### Returns

[`ReturnCache`](/api/type-aliases/returncache/)\<[`AllChannels`](/api/type-aliases/allchannels/)\>

##### Source

[seyfert/src/commands/applications/chatcontext.ts:102](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chatcontext.ts#L102)

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

`Promise`\<`void` \| [`Message`](/api/classes/message/)\>

#### Source

[seyfert/src/commands/applications/chatcontext.ts:67](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chatcontext.ts#L67)

***

### deleteResponse()

```ts
deleteResponse(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/commands/applications/chatcontext.ts:80](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chatcontext.ts#L80)

***

### editOrReply()

```ts
editOrReply(body: Omit<RESTPatchAPIWebhookWithTokenMessageJSONBody, "components" | "embeds"> & ResolverProps | Omit<APIInteractionResponseCallbackData, "components" | "embeds"> & ResolverProps): Promise<void | Message>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `Omit`\<`RESTPatchAPIWebhookWithTokenMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps` \| `Omit`\<`APIInteractionResponseCallbackData`, `"components"` \| `"embeds"`\> & `ResolverProps` |

#### Returns

`Promise`\<`void` \| [`Message`](/api/classes/message/)\>

#### Source

[seyfert/src/commands/applications/chatcontext.ts:85](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chatcontext.ts#L85)

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

#### Source

[seyfert/src/commands/applications/chatcontext.ts:75](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chatcontext.ts#L75)

***

### fetchResponse()

```ts
fetchResponse(): Promise<undefined | WebhookMessage>
```

#### Returns

`Promise`\<`undefined` \| [`WebhookMessage`](/api/classes/webhookmessage/)\>

#### Source

[seyfert/src/commands/applications/chatcontext.ts:93](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chatcontext.ts#L93)

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

`Promise`\<`undefined` \| [`Guild`](/api/classes/guild/)\<`"cached"` \| `"api"`\>\>

##### Source

[seyfert/src/commands/applications/chatcontext.ts:133](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chatcontext.ts#L133)

#### guild(mode)

```ts
guild(mode?: "cache"): ReturnCache<undefined | Guild<"cached">>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode`? | `"cache"` |

##### Returns

[`ReturnCache`](/api/type-aliases/returncache/)\<`undefined` \| [`Guild`](/api/classes/guild/)\<`"cached"`\>\>

##### Source

[seyfert/src/commands/applications/chatcontext.ts:134](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chatcontext.ts#L134)

***

### isChat()

```ts
isChat(): this is CommandContext<Object, never>
```

#### Returns

`this is CommandContext<Object, never>`

#### Source

[seyfert/src/commands/applications/chatcontext.ts:173](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chatcontext.ts#L173)

***

### isMenu()

```ts
isMenu(): this is MenuCommandContext<any, never>
```

#### Returns

`this is MenuCommandContext<any, never>`

#### Source

[seyfert/src/commands/applications/chatcontext.ts:177](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chatcontext.ts#L177)

***

### isMenuMessage()

```ts
isMenuMessage(): this is MenuCommandContext<MessageCommandInteraction<boolean>, never>
```

#### Returns

`this is MenuCommandContext<MessageCommandInteraction<boolean>, never>`

#### Source

[seyfert/src/commands/applications/chatcontext.ts:185](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chatcontext.ts#L185)

***

### isMenuUser()

```ts
isMenuUser(): this is MenuCommandContext<UserCommandInteraction<boolean>, never>
```

#### Returns

`this is MenuCommandContext<UserCommandInteraction<boolean>, never>`

#### Source

[seyfert/src/commands/applications/chatcontext.ts:181](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chatcontext.ts#L181)

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

`Promise`\<[`GuildMember`](/api/classes/guildmember/)\>

##### Source

[seyfert/src/commands/applications/chatcontext.ts:117](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chatcontext.ts#L117)

#### me(mode)

```ts
me(mode?: "cache"): ReturnCache<undefined | GuildMember>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode`? | `"cache"` |

##### Returns

[`ReturnCache`](/api/type-aliases/returncache/)\<`undefined` \| [`GuildMember`](/api/classes/guildmember/)\>

##### Source

[seyfert/src/commands/applications/chatcontext.ts:118](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chatcontext.ts#L118)

***

### write()

```ts
write(body: Omit<APIInteractionResponseCallbackData, "components" | "embeds"> & ResolverProps): Promise<void | Message>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `Omit`\<`APIInteractionResponseCallbackData`, `"components"` \| `"embeds"`\> & `ResolverProps` |

#### Returns

`Promise`\<`void` \| [`Message`](/api/classes/message/)\>

#### Source

[seyfert/src/commands/applications/chatcontext.ts:59](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chatcontext.ts#L59)
