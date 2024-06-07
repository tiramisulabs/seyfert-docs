[seyfert](../globals.md) / Webhook

# Class: Webhook

Represents a Discord webhook.

## Extends

- `DiscordBase`.`ObjectToLower`\<`Omit`\<`APIWebhook`, `"user"` \| `"source_guild"`\>\>

## Constructors

### new Webhook()

```ts
new Webhook(client: UsingClient, data: APIWebhook): Webhook
```

Constructs a new Webhook instance.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) | The Discord client instance. |
| `data` | `APIWebhook` | The data representing the webhook. |

#### Returns

[`Webhook`](Webhook.md)

#### Inherited from

`DiscordBase.constructor`

#### Source

[seyfert/src/structures/Webhook.ts:41](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Webhook.ts#L41)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `applicationId` | `public` | `null` \| `string` | - | `ObjectToLower.applicationId` |
| `avatar` | `public` | `null` \| `string` | - | `ObjectToLower.avatar` |
| `channelId` | `public` | `string` | - | `ObjectToLower.channelId` |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | - | `DiscordBase.client` |
| `guildId` | `public` | `undefined` \| `string` | - | `ObjectToLower.guildId` |
| `id` | `public` | `string` | - | `DiscordBase.id` |
| `messages` | `public` | \{ `delete`: (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\>; `edit`: (`payload`: \{ `body`: `Omit`\<`RESTPatchAPIWebhookWithTokenMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`; `messageId`: `string`; `query`: `RESTGetAPIWebhookWithTokenMessageQuery`; \}) => `Promise`\<[`WebhookMessage`](WebhookMessage.md)\>; `write`: (`payload`: \{ `body`: `Omit`\<`RESTPostAPIWebhookWithTokenJSONBody`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps`; `query`: `RESTPostAPIWebhookWithTokenQuery`; \}) => `Promise`\<`null` \| [`WebhookMessage`](WebhookMessage.md)\>; \} | Methods related to interacting with messages through the webhook. | - |
| `messages.delete` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | Deletes a message sent through the webhook. | - |
| `messages.edit` | `public` | (`payload`: \{ `body`: `Omit`\<`RESTPatchAPIWebhookWithTokenMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`; `messageId`: `string`; `query`: `RESTGetAPIWebhookWithTokenMessageQuery`; \}) => `Promise`\<[`WebhookMessage`](WebhookMessage.md)\> | Edits a message sent through the webhook. | - |
| `messages.write` | `public` | (`payload`: \{ `body`: `Omit`\<`RESTPostAPIWebhookWithTokenJSONBody`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps`; `query`: `RESTPostAPIWebhookWithTokenQuery`; \}) => `Promise`\<`null` \| [`WebhookMessage`](WebhookMessage.md)\> | Writes a message through the webhook. | - |
| `name` | `public` | `null` \| `string` | - | `ObjectToLower.name` |
| `sourceChannel` | `public` | `undefined` \| \{ `id`: `string`; `name`: `undefined` \| `null` \| `string`; `type`: `ChannelType`; \} | - | `ObjectToLower.sourceChannel` |
| `sourceGuild?` | `public` | `Partial`\<[`AnonymousGuild`](AnonymousGuild.md)\> | The source guild of the webhook, if applicable. | - |
| `token` | `public` | `undefined` \| `string` | - | `ObjectToLower.token` |
| `type` | `public` | `WebhookType` | - | `ObjectToLower.type` |
| `url` | `public` | `undefined` \| `string` | - | `ObjectToLower.url` |
| `user?` | `public` | [`User`](User.md) | The user associated with the webhook, if applicable. | - |

## Accessors

### createdAt

```ts
get createdAt(): Date
```

createdAt gets the creation Date instace of the current object.

#### Returns

`Date`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:27](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/DiscordBase.ts#L27)

***

### createdTimestamp

```ts
get createdTimestamp(): number
```

Create a timestamp for the current object.

#### Returns

`number`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:20](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/DiscordBase.ts#L20)

## Methods

### avatarURL()

```ts
avatarURL(options?: CDNUrlOptions): null | string
```

Retrieves the avatar URL of the webhook.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | [`CDNUrlOptions`](../interfaces/CDNUrlOptions.md) | The image options for the avatar. |

#### Returns

`null` \| `string`

The avatar URL of the webhook, or null if no avatar is set.

#### Source

[seyfert/src/structures/Webhook.ts:82](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Webhook.ts#L82)

***

### channel()

```ts
channel(force: boolean): Promise<undefined | BaseChannel<ChannelType> | DMChannel | CategoryChannel>
```

Fetches the channel associated with the webhook.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `force` | `boolean` | `false` | Whether to force fetching the channel even if it's already cached. |

#### Returns

`Promise`\<`undefined` \| [`BaseChannel`](BaseChannel.md)\<`ChannelType`\> \| [`DMChannel`](DMChannel.md) \| [`CategoryChannel`](CategoryChannel.md)\>

A promise that resolves to the channel associated with the webhook, or undefined if not applicable.

#### Source

[seyfert/src/structures/Webhook.ts:72](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Webhook.ts#L72)

***

### delete()

```ts
delete(reason?: string): Promise<never>
```

Deletes the webhook.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `reason`? | `string` | The reason for deleting the webhook. |

#### Returns

`Promise`\<`never`\>

A promise that resolves when the webhook is successfully deleted.

#### Source

[seyfert/src/structures/Webhook.ts:113](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Webhook.ts#L113)

***

### edit()

```ts
edit(body: RESTPatchAPIWebhookJSONBody | RESTPatchAPIWebhookWithTokenJSONBody, reason?: string): Promise<Webhook>
```

Edits the webhook.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `body` | `RESTPatchAPIWebhookJSONBody` \| `RESTPatchAPIWebhookWithTokenJSONBody` | The new webhook data. |
| `reason`? | `string` | The reason for editing the webhook. |

#### Returns

`Promise`\<[`Webhook`](Webhook.md)\>

A promise that resolves when the webhook is successfully edited.

#### Source

[seyfert/src/structures/Webhook.ts:104](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Webhook.ts#L104)

***

### fetch()

```ts
fetch(): Promise<Webhook>
```

Fetches the webhook data from the Discord API.

#### Returns

`Promise`\<[`Webhook`](Webhook.md)\>

A promise that resolves to the fetched webhook data.

#### Source

[seyfert/src/structures/Webhook.ts:94](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Webhook.ts#L94)

***

### guild()

```ts
guild(force: boolean): undefined | Promise<Guild<"cached"> | Guild<"api">>
```

Fetches the guild associated with the webhook.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `force` | `boolean` | `false` | Whether to force fetching the guild even if it's already cached. |

#### Returns

`undefined` \| `Promise`\<[`Guild`](Guild.md)\<`"cached"`\> \| [`Guild`](Guild.md)\<`"api"`\>\>

A promise that resolves to the guild associated with the webhook, or undefined if not applicable.

#### Source

[seyfert/src/structures/Webhook.ts:62](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Webhook.ts#L62)

***

### messages()

```ts
static messages(__namedParameters: {
  client: UsingClient;
  webhookId: string;
  webhookToken: string;
 }): {
  delete: (messageId: string, reason?: string) => Promise<never>;
  edit: (payload: {
     body: Omit<RESTPatchAPIWebhookWithTokenMessageJSONBody, "components" | "embeds"> & ResolverProps;
     messageId: string;
     query: RESTGetAPIWebhookWithTokenMessageQuery;
    }) => Promise<WebhookMessage>;
  write: (payload: {
     body: Omit<RESTPostAPIWebhookWithTokenJSONBody, "components" | "embeds" | "poll"> & SendResolverProps;
     query: RESTPostAPIWebhookWithTokenQuery;
    }) => Promise<null | WebhookMessage>;
}
```

Static methods related to interacting with messages through webhooks.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | `object` |
| `__namedParameters.client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `__namedParameters.webhookId` | `string` |
| `__namedParameters.webhookToken` | `string` |

#### Returns

```ts
{
  delete: (messageId: string, reason?: string) => Promise<never>;
  edit: (payload: {
     body: Omit<RESTPatchAPIWebhookWithTokenMessageJSONBody, "components" | "embeds"> & ResolverProps;
     messageId: string;
     query: RESTGetAPIWebhookWithTokenMessageQuery;
    }) => Promise<WebhookMessage>;
  write: (payload: {
     body: Omit<RESTPostAPIWebhookWithTokenJSONBody, "components" | "embeds" | "poll"> & SendResolverProps;
     query: RESTPostAPIWebhookWithTokenQuery;
    }) => Promise<null | WebhookMessage>;
}
```

| Member | Type | Value | Description |
| :------ | :------ | :------ | :------ |
| `delete` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | ... | Deletes a message sent through the webhook. |
| `edit` | (`payload`: \{
  `body`: `Omit`\<`RESTPatchAPIWebhookWithTokenMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`;
  `messageId`: `string`;
  `query`: `RESTGetAPIWebhookWithTokenMessageQuery`;
 \}) => `Promise`\<[`WebhookMessage`](WebhookMessage.md)\> | ... | Edits a message sent through the webhook. |
| `write` | (`payload`: \{
  `body`: `Omit`\<`RESTPostAPIWebhookWithTokenJSONBody`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps`;
  `query`: `RESTPostAPIWebhookWithTokenQuery`;
 \}) => `Promise`\<`null` \| [`WebhookMessage`](WebhookMessage.md)\> | ... | Writes a message through the webhook. |

#### Source

[seyfert/src/structures/Webhook.ts:120](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Webhook.ts#L120)

***

### methods()

```ts
static methods(__namedParameters: {
  client: UsingClient;
  webhookId: string;
  webhookToken: string;
 }): {
  delete: (reason?: string) => Promise<never>;
  edit: (body: RESTPatchAPIWebhookJSONBody | RESTPatchAPIWebhookWithTokenJSONBody, reason?: string) => Promise<Webhook>;
  fetch: () => Promise<Webhook>;
}
```

Static methods related to managing webhooks.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | `object` |
| `__namedParameters.client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `__namedParameters.webhookId` | `string` |
| `__namedParameters.webhookToken`? | `string` |

#### Returns

```ts
{
  delete: (reason?: string) => Promise<never>;
  edit: (body: RESTPatchAPIWebhookJSONBody | RESTPatchAPIWebhookWithTokenJSONBody, reason?: string) => Promise<Webhook>;
  fetch: () => Promise<Webhook>;
}
```

| Member | Type | Value | Description |
| :------ | :------ | :------ | :------ |
| `delete` | (`reason`?: `string`) => `Promise`\<`never`\> | ... | Deletes the webhook. |
| `edit` | (`body`: `RESTPatchAPIWebhookJSONBody` \| `RESTPatchAPIWebhookWithTokenJSONBody`, `reason`?: `string`) => `Promise`\<[`Webhook`](Webhook.md)\> | ... | Edits the webhook. |
| `fetch` | () => `Promise`\<[`Webhook`](Webhook.md)\> | ... | Fetches the webhook data from the Discord API. |

#### Source

[seyfert/src/structures/Webhook.ts:136](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Webhook.ts#L136)
