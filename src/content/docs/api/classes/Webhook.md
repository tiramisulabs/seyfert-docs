---
editUrl: false
next: false
prev: false
title: "Webhook"
---

## Extends

- `DiscordBase`.`ObjectToLower`\<`Omit`\<`APIWebhook`, `"user"` \| `"source_guild"`\>\>

## Constructors

### new Webhook(client, data)

```ts
new Webhook(client: BaseClient, data: APIWebhook): Webhook
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | `BaseClient` |
| `data` | `APIWebhook` |

#### Returns

[`Webhook`](/api/classes/webhook/)

#### Inherited from

`DiscordBase.constructor`

#### Source

[seyfert/src/structures/Webhook.ts:25](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Webhook.ts#L25)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `applicationId` | `public` | `null` \| `string` | `ObjectToLower.applicationId` |
| `avatar` | `public` | `null` \| `string` | `ObjectToLower.avatar` |
| `channelId` | `public` | `string` | `ObjectToLower.channelId` |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | `DiscordBase.client` |
| `guildId` | `public` | `undefined` \| `string` | `ObjectToLower.guildId` |
| `id` | `public` | `string` | `DiscordBase.id` |
| `messages` | `public` | `Object` | - |
| `messages.delete` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | - |
| `messages.edit` | `public` | (`payload`: `Object`) => `Promise`\<[`WebhookMessage`](/api/classes/webhookmessage/)\> | - |
| `messages.write` | `public` | (`payload`: `Object`) => `Promise`\<`null` \| [`WebhookMessage`](/api/classes/webhookmessage/)\> | - |
| `name` | `public` | `null` \| `string` | `ObjectToLower.name` |
| `sourceChannel` | `public` | `undefined` \| `APIPartialChannel` | `ObjectToLower.sourceChannel` |
| `sourceGuild?` | `public` | `Partial`\<[`AnonymousGuild`](/api/classes/anonymousguild/)\> | - |
| `token` | `public` | `undefined` \| `string` | `ObjectToLower.token` |
| `type` | `public` | `WebhookType` | `ObjectToLower.type` |
| `url` | `public` | `undefined` \| `string` | `ObjectToLower.url` |
| `user?` | `public` | [`User`](/api/classes/user/) | - |

## Accessors

### createdAt

```ts
get createdAt(): Date
```

createdAt gets the creation Date instace of the current object.

#### Returns

`Date`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:27](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/DiscordBase.ts#L27)

***

### createdTimestamp

```ts
get createdTimestamp(): number
```

Create a timestamp for the current object.

#### Returns

`number`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:20](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/DiscordBase.ts#L20)

## Methods

### avatarURL()

```ts
avatarURL(options?: ImageURLOptions): null | string
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | [`ImageURLOptions`](/api/interfaces/imageurloptions/) |

#### Returns

`null` \| `string`

#### Source

[seyfert/src/structures/Webhook.ts:51](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Webhook.ts#L51)

***

### channel()

```ts
channel(force: boolean): Promise<undefined | BaseChannel<ChannelType> | DMChannel | CategoryChannel>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<`undefined` \| [`BaseChannel`](/api/classes/basechannel/)\<`ChannelType`\> \| [`DMChannel`](/api/classes/dmchannel/) \| [`CategoryChannel`](/api/classes/categorychannel/)\>

#### Source

[seyfert/src/structures/Webhook.ts:46](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Webhook.ts#L46)

***

### delete()

```ts
delete(reason?: string): Promise<never>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reason`? | `string` |

#### Returns

`Promise`\<`never`\>

#### Source

[seyfert/src/structures/Webhook.ts:67](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Webhook.ts#L67)

***

### edit()

```ts
edit(body: RESTPatchAPIWebhookJSONBody | RESTPatchAPIWebhookWithTokenJSONBody, reason?: string): Promise<RESTGetAPIWebhookWithTokenResult>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `RESTPatchAPIWebhookJSONBody` \| `RESTPatchAPIWebhookWithTokenJSONBody` |
| `reason`? | `string` |

#### Returns

`Promise`\<`RESTGetAPIWebhookWithTokenResult`\>

#### Source

[seyfert/src/structures/Webhook.ts:63](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Webhook.ts#L63)

***

### fetch()

```ts
fetch(): Promise<Webhook>
```

#### Returns

`Promise`\<[`Webhook`](/api/classes/webhook/)\>

#### Source

[seyfert/src/structures/Webhook.ts:59](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Webhook.ts#L59)

***

### guild()

```ts
guild(force: boolean): undefined | Promise<Guild<"cached"> | Guild<"api">>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`undefined` \| `Promise`\<[`Guild`](/api/classes/guild/)\<`"cached"`\> \| [`Guild`](/api/classes/guild/)\<`"api"`\>\>

#### Source

[seyfert/src/structures/Webhook.ts:41](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Webhook.ts#L41)

***

### messages()

```ts
static messages(__namedParameters:     Object): Object
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.client` | `BaseClient` |
| `__namedParameters.webhookId` | `string` |
| `__namedParameters.webhookToken` | `string` |

#### Returns

`Object`

| Member | Type | Value |
| :------ | :------ | :------ |
| `delete` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | - |
| `edit` | (`payload`: `Object`) => `Promise`\<[`WebhookMessage`](/api/classes/webhookmessage/)\> | - |
| `write` | (`payload`: `Object`) => `Promise`\<`null` \| [`WebhookMessage`](/api/classes/webhookmessage/)\> | - |

#### Source

[seyfert/src/structures/Webhook.ts:71](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Webhook.ts#L71)

***

### methods()

```ts
static methods(__namedParameters:     Object): Object
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.client` | `BaseClient` |
| `__namedParameters.webhookId` | `string` |
| `__namedParameters.webhookToken`? | `string` |

#### Returns

`Object`

| Member | Type | Value |
| :------ | :------ | :------ |
| `delete` | (`reason`?: `string`) => `Promise`\<`never`\> | - |
| `edit` | (`body`: `RESTPatchAPIWebhookJSONBody` \| `RESTPatchAPIWebhookWithTokenJSONBody`, `reason`?: `string`) => `Promise`\<`RESTGetAPIWebhookWithTokenResult`\> | - |
| `fetch` | () => `Promise`\<[`Webhook`](/api/classes/webhook/)\> | - |

#### Source

[seyfert/src/structures/Webhook.ts:82](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/Webhook.ts#L82)
