---
editUrl: false
next: false
prev: false
title: "MenuCommandContext"
---

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`MessageCommandInteraction`](/api/classes/messagecommandinteraction/) \| [`UserCommandInteraction`](/api/classes/usercommandinteraction/) | - |
| `M` extends keyof [`RegisteredMiddlewares`](/api/interfaces/registeredmiddlewares/) | `never` |

## Implements

- [`ExtendContext`](/api/interfaces/extendcontext/)

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

#### Source

[seyfert/src/commands/applications/menucontext.ts:20](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/menucontext.ts#L20)

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

[seyfert/src/commands/applications/menucontext.ts:79](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/menucontext.ts#L79)

***

### member

```ts
get member(): undefined | InteractionGuildMember
```

#### Returns

`undefined` \| [`InteractionGuildMember`](/api/classes/interactionguildmember/)

#### Source

[seyfert/src/commands/applications/menucontext.ts:83](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/menucontext.ts#L83)

***

### proxy

```ts
get proxy(): APIRoutes
```

#### Returns

[`APIRoutes`](/api/type-aliases/apiroutes/)

#### Source

[seyfert/src/commands/applications/menucontext.ts:29](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/menucontext.ts#L29)

***

### t

```ts
get t(): __InternalParseLocale<DefaultLocale> & Object
```

#### Returns

`__InternalParseLocale`\<[`DefaultLocale`](/api/interfaces/defaultlocale/)\> & `Object`

#### Source

[seyfert/src/commands/applications/menucontext.ts:47](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/menucontext.ts#L47)

***

### target

```ts
get target(): InteractionTarget<T>
```

#### Returns

[`InteractionTarget`](/api/type-aliases/interactiontarget/)\<`T`\>

#### Source

[seyfert/src/commands/applications/menucontext.ts:34](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/menucontext.ts#L34)

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

[seyfert/src/commands/applications/menucontext.ts:59](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/menucontext.ts#L59)

***

### deleteResponse()

```ts
deleteResponse(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/commands/applications/menucontext.ts:67](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/menucontext.ts#L67)

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

[seyfert/src/commands/applications/menucontext.ts:71](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/menucontext.ts#L71)

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

[seyfert/src/commands/applications/menucontext.ts:63](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/menucontext.ts#L63)

***

### fetchResponse()

```ts
fetchResponse(): Promise<undefined | WebhookMessage>
```

#### Returns

`Promise`\<`undefined` \| [`WebhookMessage`](/api/classes/webhookmessage/)\>

#### Source

[seyfert/src/commands/applications/menucontext.ts:75](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/menucontext.ts#L75)

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

[seyfert/src/commands/applications/menucontext.ts:55](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/menucontext.ts#L55)

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

[seyfert/src/commands/applications/menucontext.ts:51](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/applications/menucontext.ts#L51)
