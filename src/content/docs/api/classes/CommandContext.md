---
editUrl: false
next: false
prev: false
title: "CommandContext"
---

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`OptionsRecord`](/api/type-aliases/optionsrecord/) | `Object` |
| `M` extends keyof [`RegisteredMiddlewares`](/api/interfaces/registeredmiddlewares/) | `never` |

## Implements

- [`ExtendContext`](/api/interfaces/extendcontext/)

## Constructors

### new CommandContext(client, interaction, resolver, shardId)

```ts
new CommandContext<T, M>(
   client: UsingClient, 
   interaction: ChatInputCommandInteraction<boolean>, 
   resolver: OptionResolver, 
shardId: number): CommandContext<T, M>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](/api/interfaces/usingclient/) |
| `interaction` | [`ChatInputCommandInteraction`](/api/classes/chatinputcommandinteraction/)\<`boolean`\> |
| `resolver` | [`OptionResolver`](/api/classes/optionresolver/) |
| `shardId` | `number` |

#### Returns

[`CommandContext`](/api/classes/commandcontext/)\<`T`, `M`\>

#### Source

[seyfert/src/commands/applications/chatcontext.ts:16](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/chatcontext.ts#L16)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) |
| `globalMetadata` | `public` | [`GlobalMetadata`](/api/interfaces/globalmetadata/) |
| `interaction` | `readonly` | [`ChatInputCommandInteraction`](/api/classes/chatinputcommandinteraction/)\<`boolean`\> |
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

[seyfert/src/commands/applications/chatcontext.ts:63](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/chatcontext.ts#L63)

***

### member

```ts
get member(): undefined | InteractionGuildMember
```

#### Returns

`undefined` \| [`InteractionGuildMember`](/api/classes/interactionguildmember/)

#### Source

[seyfert/src/commands/applications/chatcontext.ts:67](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/chatcontext.ts#L67)

***

### proxy

```ts
get proxy(): APIRoutes
```

#### Returns

[`APIRoutes`](/api/type-aliases/apiroutes/)

#### Source

[seyfert/src/commands/applications/chatcontext.ts:27](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/chatcontext.ts#L27)

***

### t

```ts
get t(): __InternalParseLocale<DefaultLocale> & Object
```

#### Returns

`__InternalParseLocale`\<[`DefaultLocale`](/api/interfaces/defaultlocale/)\> & `Object`

#### Source

[seyfert/src/commands/applications/chatcontext.ts:31](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/chatcontext.ts#L31)

## Methods

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

[seyfert/src/commands/applications/chatcontext.ts:43](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/chatcontext.ts#L43)

***

### deleteResponse()

```ts
deleteResponse(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/commands/applications/chatcontext.ts:51](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/chatcontext.ts#L51)

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

[seyfert/src/commands/applications/chatcontext.ts:55](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/chatcontext.ts#L55)

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

[seyfert/src/commands/applications/chatcontext.ts:47](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/chatcontext.ts#L47)

***

### fetchResponse()

```ts
fetchResponse(): Promise<undefined | WebhookMessage>
```

#### Returns

`Promise`\<`undefined` \| [`WebhookMessage`](/api/classes/webhookmessage/)\>

#### Source

[seyfert/src/commands/applications/chatcontext.ts:59](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/chatcontext.ts#L59)

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

[seyfert/src/commands/applications/chatcontext.ts:39](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/chatcontext.ts#L39)

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

[seyfert/src/commands/applications/chatcontext.ts:35](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/chatcontext.ts#L35)
