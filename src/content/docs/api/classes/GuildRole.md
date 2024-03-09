---
editUrl: false
next: false
prev: false
title: "GuildRole"
---

## Extends

- `DiscordBase`.`ObjectToLower`\<`APIRole`\>

## Constructors

### new GuildRole(client, data, guildId)

```ts
new GuildRole(
   client: BaseClient, 
   data: APIRole, 
   guildId: string): GuildRole
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | `BaseClient` |
| `data` | `APIRole` |
| `guildId` | `string` |

#### Returns

[`GuildRole`](/api/classes/guildrole/)

#### Inherited from

`DiscordBase.constructor`

#### Source

[seyfert/src/structures/GuildRole.ts:15](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildRole.ts#L15)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | `DiscordBase.client` |
| `color` | `public` | `number` | `ObjectToLower.color` |
| `flags` | `public` | `InPrompt` | `ObjectToLower.flags` |
| `guildId` | `readonly` | `string` | - |
| `hoist` | `public` | `boolean` | `ObjectToLower.hoist` |
| `icon` | `public` | `undefined` \| `null` \| `string` | `ObjectToLower.icon` |
| `id` | `public` | `string` | `DiscordBase.id` |
| `managed` | `public` | `boolean` | `ObjectToLower.managed` |
| `mentionable` | `public` | `boolean` | `ObjectToLower.mentionable` |
| `name` | `public` | `string` | `ObjectToLower.name` |
| `permissions` | `public` | `string` | `ObjectToLower.permissions` |
| `position` | `public` | `number` | `ObjectToLower.position` |
| `tags` | `public` | `undefined` \| `APIRoleTags` | `ObjectToLower.tags` |
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

[seyfert/src/structures/extra/DiscordBase.ts:27](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/extra/DiscordBase.ts#L27)

***

### createdTimestamp

```ts
get createdTimestamp(): number
```

Create a timestamp for the current object.

#### Returns

`number`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:20](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/extra/DiscordBase.ts#L20)

## Methods

### delete()

```ts
delete(reason?: string): Promise<undefined | void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reason`? | `string` |

#### Returns

`Promise`\<`undefined` \| `void`\>

#### Source

[seyfert/src/structures/GuildRole.ts:32](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildRole.ts#L32)

***

### edit()

```ts
edit(body: RESTPatchAPIGuildRoleJSONBody, reason?: string): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `RESTPatchAPIGuildRoleJSONBody` |
| `reason`? | `string` |

#### Returns

`Promise`\<`any`\>

#### Source

[seyfert/src/structures/GuildRole.ts:28](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildRole.ts#L28)

***

### guild()

```ts
guild(force: boolean): Promise<undefined | Guild<"cached"> | Guild<"api">>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<`undefined` \| [`Guild`](/api/classes/guild/)\<`"cached"`\> \| [`Guild`](/api/classes/guild/)\<`"api"`\>\>

#### Source

[seyfert/src/structures/GuildRole.ts:23](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildRole.ts#L23)

***

### methods()

```ts
static methods(ctx:     Object): Object
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ctx` | `Object` |
| `ctx.client` | `BaseClient` |
| `ctx.guildId` | `string` |

#### Returns

`Object`

| Member | Type | Value |
| :------ | :------ | :------ |
| `create` | (`body`: `RESTPostAPIGuildRoleJSONBody`) => `Promise`\<`any`\> | - |
| `delete` | (`roleId`: `string`, `reason`?: `string`) => `Promise`\<`undefined` \| `void`\> | - |
| `edit` | (`roleId`: `string`, `body`: `RESTPatchAPIGuildRoleJSONBody`, `reason`?: `string`) => `Promise`\<`any`\> | - |
| `editPositions` | (`body`: `RESTPatchAPIGuildRolePositionsJSONBody`) => `Promise`\<[`GuildRole`](/api/classes/guildrole/)[]\> | - |
| `list` | (`force`: `boolean`) => `Promise`\<[`GuildRole`](/api/classes/guildrole/)[]\> | - |

#### Source

[seyfert/src/structures/GuildRole.ts:36](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildRole.ts#L36)
