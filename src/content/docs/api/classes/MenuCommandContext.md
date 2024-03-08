---
editUrl: false
next: false
prev: false
title: "MenuCommandContext"
---

## Extends

- [`ExtendContext`](/api/interfaces/extendcontext/)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`MessageCommandInteraction`](/api/classes/messagecommandinteraction/) \| [`UserCommandInteraction`](/api/classes/usercommandinteraction/) | - |
| `M` extends keyof [`RegisteredMiddlewares`](/api/interfaces/registeredmiddlewares/) | `never` |

## Constructors

### new MenuCommandContext(client, interaction, shardId)

```ts
new MenuCommandContext<T, M>(
   client: UsingClient, 
   interaction: T, 
shardId: number): MenuCommandContext<T, M>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](/api/interfaces/usingclient/) |
| `interaction` | `T` |
| `shardId` | `number` |

#### Returns

[`MenuCommandContext`](/api/classes/menucommandcontext/)\<`T`, `M`\>

#### Inherited from

`ExtendContext.constructor`

#### Source

[seyfert/src/commands/applications/menucontext.ts:33](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/menucontext.ts#L33)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) |
| `globalMetadata` | `public` | [`GlobalMetadata`](/api/interfaces/globalmetadata/) |
| `interaction` | `readonly` | `T` |
| `metadata` | `public` | [`CommandMetadata`](/api/type-aliases/commandmetadata/)\<`UnionToTuple`\<`M`, []\>\> |
| `shardId` | `readonly` | `number` |

## Accessors

### author

```ts
get author(): User
```

#### Returns

[`User`](/api/classes/user/)

#### Source

[seyfert/src/commands/applications/menucontext.ts:136](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/menucontext.ts#L136)

***

### channelId

```ts
get channelId(): string
```

#### Returns

`string`

#### Source

[seyfert/src/commands/applications/menucontext.ts:132](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/menucontext.ts#L132)

***

### guildId

```ts
get guildId(): undefined | string
```

#### Returns

`undefined` \| `string`

#### Source

[seyfert/src/commands/applications/menucontext.ts:128](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/menucontext.ts#L128)

***

### member

```ts
get member(): undefined | InteractionGuildMember
```

#### Returns

`undefined` \| [`InteractionGuildMember`](/api/classes/interactionguildmember/)

#### Source

[seyfert/src/commands/applications/menucontext.ts:140](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/menucontext.ts#L140)

***

### modal

```ts
get modal(): (body: ModalCreateBodyRequest) => Promise<void> | (body: ModalCreateBodyRequest) => Promise<void>
```

#### Returns

(`body`: `ModalCreateBodyRequest`) => `Promise`\<`void`\> \| (`body`: `ModalCreateBodyRequest`) => `Promise`\<`void`\>

#### Source

[seyfert/src/commands/applications/menucontext.ts:68](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/menucontext.ts#L68)

***

### proxy

```ts
get proxy(): APIRoutes
```

#### Returns

[`APIRoutes`](/api/type-aliases/apiroutes/)

#### Source

[seyfert/src/commands/applications/menucontext.ts:42](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/menucontext.ts#L42)

***

### t

```ts
get t(): __InternalParseLocale<DefaultLocale> & Object
```

#### Returns

[`__InternalParseLocale`](/api/type-aliases/internalparselocale/)\<[`DefaultLocale`](/api/interfaces/defaultlocale/)\> & `Object`

#### Source

[seyfert/src/commands/applications/menucontext.ts:60](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/menucontext.ts#L60)

***

### target

```ts
get target(): InteractionTarget<T>
```

#### Returns

[`InteractionTarget`](/api/type-aliases/interactiontarget/)\<`T`\>

#### Source

[seyfert/src/commands/applications/menucontext.ts:47](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/menucontext.ts#L47)

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

[seyfert/src/commands/applications/menucontext.ts:92](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/menucontext.ts#L92)

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

[seyfert/src/commands/applications/menucontext.ts:93](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/menucontext.ts#L93)

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

[seyfert/src/commands/applications/menucontext.ts:72](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/menucontext.ts#L72)

***

### deleteResponse()

```ts
deleteResponse(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/commands/applications/menucontext.ts:80](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/menucontext.ts#L80)

***

### editOrReply()

```ts
editOrReply(body: Omit<RESTPatchAPIWebhookWithTokenMessageJSONBody, "components" | "embeds"> & ResolverProps | Omit<APIInteractionResponseCallbackData, "components" | "embeds"> & ResolverProps): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `Omit`\<`RESTPatchAPIWebhookWithTokenMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps` \| `Omit`\<`APIInteractionResponseCallbackData`, `"components"` \| `"embeds"`\> & `ResolverProps` |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/commands/applications/menucontext.ts:84](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/menucontext.ts#L84)

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

[seyfert/src/commands/applications/menucontext.ts:76](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/menucontext.ts#L76)

***

### fetchResponse()

```ts
fetchResponse(): Promise<undefined | WebhookMessage>
```

#### Returns

`Promise`\<`undefined` \| [`WebhookMessage`](/api/classes/webhookmessage/)\>

#### Source

[seyfert/src/commands/applications/menucontext.ts:88](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/menucontext.ts#L88)

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

[seyfert/src/commands/applications/menucontext.ts:113](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/menucontext.ts#L113)

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

[seyfert/src/commands/applications/menucontext.ts:114](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/menucontext.ts#L114)

***

### isChat()

```ts
isChat(): this is CommandContext<Object, never>
```

#### Returns

`this is CommandContext<Object, never>`

#### Source

[seyfert/src/commands/applications/menucontext.ts:144](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/menucontext.ts#L144)

***

### isMenu()

```ts
isMenu(): this is MenuCommandContext<any, never>
```

#### Returns

`this is MenuCommandContext<any, never>`

#### Source

[seyfert/src/commands/applications/menucontext.ts:148](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/menucontext.ts#L148)

***

### isMenuMessage()

```ts
isMenuMessage(): this is MenuCommandContext<MessageCommandInteraction<boolean>, never>
```

#### Returns

`this is MenuCommandContext<MessageCommandInteraction<boolean>, never>`

#### Source

[seyfert/src/commands/applications/menucontext.ts:156](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/menucontext.ts#L156)

***

### isMenuUser()

```ts
isMenuUser(): this is MenuCommandContext<UserCommandInteraction<boolean>, never>
```

#### Returns

`this is MenuCommandContext<UserCommandInteraction<boolean>, never>`

#### Source

[seyfert/src/commands/applications/menucontext.ts:152](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/menucontext.ts#L152)

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

[seyfert/src/commands/applications/menucontext.ts:100](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/menucontext.ts#L100)

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

[seyfert/src/commands/applications/menucontext.ts:101](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/menucontext.ts#L101)

***

### write()

```ts
write(body: Omit<APIInteractionResponseCallbackData, "components" | "embeds"> & ResolverProps): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `Omit`\<`APIInteractionResponseCallbackData`, `"components"` \| `"embeds"`\> & `ResolverProps` |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/commands/applications/menucontext.ts:64](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/menucontext.ts#L64)
