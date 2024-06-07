[seyfert](../globals.md) / GuildRole

# Class: GuildRole

## Extends

- `DiscordBase`.`ObjectToLower`\<`Omit`\<`APIRole`, `"permissions"`\>\>

## Constructors

### new GuildRole()

```ts
new GuildRole(
   client: UsingClient, 
   data: APIRole, 
   guildId: string): GuildRole
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `data` | `APIRole` |
| `guildId` | `string` |

#### Returns

[`GuildRole`](GuildRole.md)

#### Inherited from

`DiscordBase.constructor`

#### Source

[seyfert/src/structures/GuildRole.ts:16](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildRole.ts#L16)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | `DiscordBase.client` |
| `color` | `public` | `number` | `ObjectToLower.color` |
| `flags` | `public` | `InPrompt` | `ObjectToLower.flags` |
| `guildId` | `readonly` | `string` | - |
| `hoist` | `public` | `boolean` | `ObjectToLower.hoist` |
| `icon` | `public` | `undefined` \| `null` \| `string` | `ObjectToLower.icon` |
| `id` | `public` | `string` | `DiscordBase.id` |
| `managed` | `public` | `boolean` | `ObjectToLower.managed` |
| `mentionable` | `public` | `boolean` | `ObjectToLower.mentionable` |
| `name` | `public` | `string` | `ObjectToLower.name` |
| `permissions` | `public` | `PermissionsBitField` | - |
| `position` | `public` | `number` | `ObjectToLower.position` |
| `tags` | `public` | `undefined` \| \{ `availableForPurchase`: `undefined` \| `null`; `botId`: `undefined` \| `string`; `guildConnections`: `undefined` \| `null`; `integrationId`: `undefined` \| `string`; `premiumSubscriber`: `undefined` \| `null`; `subscriptionListingId`: `undefined` \| `string`; \} | `ObjectToLower.tags` |
| `unicodeEmoji` | `public` | `undefined` \| `null` \| `string` | `ObjectToLower.unicodeEmoji` |

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

### delete()

```ts
delete(reason?: string): Promise<GuildRole>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reason`? | `string` |

#### Returns

`Promise`\<[`GuildRole`](GuildRole.md)\>

#### Source

[seyfert/src/structures/GuildRole.ts:34](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildRole.ts#L34)

***

### edit()

```ts
edit(body: RESTPatchAPIGuildRoleJSONBody, reason?: string): Promise<GuildRole>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `RESTPatchAPIGuildRoleJSONBody` |
| `reason`? | `string` |

#### Returns

`Promise`\<[`GuildRole`](GuildRole.md)\>

#### Source

[seyfert/src/structures/GuildRole.ts:30](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildRole.ts#L30)

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

`undefined` \| `Promise`\<[`Guild`](Guild.md)\<`"cached"`\> \| [`Guild`](Guild.md)\<`"api"`\>\>

#### Source

[seyfert/src/structures/GuildRole.ts:25](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildRole.ts#L25)

***

### methods()

```ts
static methods(ctx: {
  client: UsingClient;
  guildId: string;
 }): {
  create: (body: RESTPostAPIGuildRoleJSONBody) => Promise<GuildRole>;
  delete: (roleId: string, reason?: string) => Promise<GuildRole>;
  edit: (roleId: string, body: RESTPatchAPIGuildRoleJSONBody, reason?: string) => Promise<GuildRole>;
  editPositions: (body: RESTPatchAPIGuildRolePositionsJSONBody) => Promise<GuildRole[]>;
  list: (force: boolean) => Promise<GuildRole[]>;
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
  create: (body: RESTPostAPIGuildRoleJSONBody) => Promise<GuildRole>;
  delete: (roleId: string, reason?: string) => Promise<GuildRole>;
  edit: (roleId: string, body: RESTPatchAPIGuildRoleJSONBody, reason?: string) => Promise<GuildRole>;
  editPositions: (body: RESTPatchAPIGuildRolePositionsJSONBody) => Promise<GuildRole[]>;
  list: (force: boolean) => Promise<GuildRole[]>;
}
```

| Member | Type | Value |
| :------ | :------ | :------ |
| `create` | (`body`: `RESTPostAPIGuildRoleJSONBody`) => `Promise`\<[`GuildRole`](GuildRole.md)\> | ... |
| `delete` | (`roleId`: `string`, `reason`?: `string`) => `Promise`\<[`GuildRole`](GuildRole.md)\> | ... |
| `edit` | (`roleId`: `string`, `body`: `RESTPatchAPIGuildRoleJSONBody`, `reason`?: `string`) => `Promise`\<[`GuildRole`](GuildRole.md)\> | ... |
| `editPositions` | (`body`: `RESTPatchAPIGuildRolePositionsJSONBody`) => `Promise`\<[`GuildRole`](GuildRole.md)[]\> | ... |
| `list` | (`force`: `boolean`) => `Promise`\<[`GuildRole`](GuildRole.md)[]\> | ... |

#### Source

[seyfert/src/structures/GuildRole.ts:38](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/GuildRole.ts#L38)
