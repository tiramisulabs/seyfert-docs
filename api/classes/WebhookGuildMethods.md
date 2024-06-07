[seyfert](../globals.md) / WebhookGuildMethods

# Class: WebhookGuildMethods

## Extends

- `DiscordBase`

## Constructors

### new WebhookGuildMethods()

```ts
new WebhookGuildMethods(client: UsingClient, data: {
  id: string;
 }): WebhookGuildMethods
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) | - |
| `data` | `object` | Unique ID of the object |
| `data.id` | `string` | - |

#### Returns

[`WebhookGuildMethods`](WebhookGuildMethods.md)

#### Inherited from

`DiscordBase.constructor`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:7](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/DiscordBase.ts#L7)

## Properties

| Property | Modifier | Type | Default value | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | `undefined` | `DiscordBase.client` |
| `id` | `public` | `string` | `undefined` | `DiscordBase.id` |
| `webhooks` | `public` | \{ `list`: () => `Promise`\<[`Webhook`](Webhook.md)[]\>; \} | `...` | - |
| `webhooks.list` | `public` | () => `Promise`\<[`Webhook`](Webhook.md)[]\> | `...` | - |

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

### guild()

```ts
static guild(ctx: {
  client: UsingClient;
  guildId: string;
 }): {
  list: () => Promise<Webhook[]>;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ctx` | `object` |
| `ctx.client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `ctx.guildId` | `string` |

#### Returns

```ts
{
  list: () => Promise<Webhook[]>;
}
```

| Member | Type | Value |
| :------ | :------ | :------ |
| `list` | () => `Promise`\<[`Webhook`](Webhook.md)[]\> | ... |

#### Source

[seyfert/src/structures/channels.ts:386](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L386)
