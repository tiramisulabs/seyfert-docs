---
editUrl: false
next: false
prev: false
title: "GuildTemplate"
---

## Extends

- `Base`.`ObjectToLower`\<`APITemplate`\>

## Constructors

### new GuildTemplate(client, data)

```ts
new GuildTemplate(client: BaseClient, data: APITemplate): GuildTemplate
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | `BaseClient` |
| `data` | `APITemplate` |

#### Returns

[`GuildTemplate`](/api/classes/guildtemplate/)

#### Inherited from

`Base.constructor`

#### Source

[seyfert/src/structures/GuildTemplate.ts:14](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildTemplate.ts#L14)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | `Base.client` |
| `code` | `public` | `string` | `ObjectToLower.code` |
| `createdAt` | `public` | `string` | `ObjectToLower.createdAt` |
| `creator` | `public` | `Object` | `ObjectToLower.creator` |
| `creator.accentColor` | `public` | `undefined` \| `null` \| `number` | - |
| `creator.avatar` | `public` | `null` \| `string` | - |
| `creator.avatarDecoration` | `public` | `undefined` \| `null` \| `string` | - |
| `creator.banner` | `public` | `undefined` \| `null` \| `string` | - |
| `creator.bot` | `public` | `undefined` \| `boolean` | - |
| `creator.discriminator` | `public` | `string` | - |
| `creator.email` | `public` | `undefined` \| `null` \| `string` | - |
| `creator.flags` | `public` | `undefined` \| `UserFlags` | - |
| `creator.globalName` | `public` | `null` \| `string` | - |
| `creator.id` | `public` | `string` | - |
| `creator.locale` | `public` | `undefined` \| `string` | - |
| `creator.mfaEnabled` | `public` | `undefined` \| `boolean` | - |
| `creator.premiumType` | `public` | `undefined` \| `UserPremiumType` | - |
| `creator.publicFlags` | `public` | `undefined` \| `UserFlags` | - |
| `creator.system` | `public` | `undefined` \| `boolean` | - |
| `creator.username` | `public` | `string` | - |
| `creator.verified` | `public` | `undefined` \| `boolean` | - |
| `creatorId` | `public` | `string` | `ObjectToLower.creatorId` |
| `description` | `public` | `null` \| `string` | `ObjectToLower.description` |
| `isDirty` | `public` | `null` \| `boolean` | `ObjectToLower.isDirty` |
| `name` | `public` | `string` | `ObjectToLower.name` |
| `serializedSourceGuild` | `public` | `Object` | `ObjectToLower.serializedSourceGuild` |
| `serializedSourceGuild.afkChannelId` | `public` | `undefined` \| `null` \| `string` \| `number` | - |
| `serializedSourceGuild.afkTimeout` | `public` |  \| `undefined` \| `1800` \| `3600` \| `60` \| `300` \| `900` | - |
| `serializedSourceGuild.channels` | `public` | `undefined` \| `APIGuildCreatePartialChannel`[] | - |
| `serializedSourceGuild.defaultMessageNotifications` | `public` | `undefined` \| `GuildDefaultMessageNotifications` | - |
| `serializedSourceGuild.description` | `public` | `null` \| `string` | - |
| `serializedSourceGuild.explicitContentFilter` | `public` | `undefined` \| `GuildExplicitContentFilter` | - |
| `serializedSourceGuild.iconHash` | `public` | `null` \| `string` | - |
| `serializedSourceGuild.name` | `public` | `string` | - |
| `serializedSourceGuild.preferredLocale` | `public` | `string` | - |
| `serializedSourceGuild.premiumProgressBarEnabled` | `public` | `undefined` \| `boolean` | - |
| `serializedSourceGuild.region` | `public` | `undefined` \| `string` | - |
| `serializedSourceGuild.roles` | `public` | `undefined` \| `APIGuildCreateRole`[] | - |
| `serializedSourceGuild.systemChannelFlags` | `public` | `undefined` \| `GuildSystemChannelFlags` | - |
| `serializedSourceGuild.systemChannelId` | `public` | `undefined` \| `null` \| `string` \| `number` | - |
| `serializedSourceGuild.verificationLevel` | `public` | `undefined` \| `GuildVerificationLevel` | - |
| `sourceGuildId` | `public` | `string` | `ObjectToLower.sourceGuildId` |
| `updatedAt` | `public` | `string` | `ObjectToLower.updatedAt` |
| `usageCount` | `public` | `number` | `ObjectToLower.usageCount` |

## Methods

### delete()

```ts
delete(): Promise<APITemplate>
```

#### Returns

`Promise`\<`APITemplate`\>

#### Source

[seyfert/src/structures/GuildTemplate.ts:35](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildTemplate.ts#L35)

***

### edit()

```ts
edit(body: AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<RESTPostAPIGuildTemplatesJSONBody>>): Promise<APITemplate>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`Partial`\<`RESTPostAPIGuildTemplatesJSONBody`\>\> |

#### Returns

`Promise`\<`APITemplate`\>

#### Source

[seyfert/src/structures/GuildTemplate.ts:31](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildTemplate.ts#L31)

***

### fetch()

```ts
fetch(): Promise<APITemplate>
```

#### Returns

`Promise`\<`APITemplate`\>

#### Source

[seyfert/src/structures/GuildTemplate.ts:23](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildTemplate.ts#L23)

***

### guild()

```ts
guild(force: boolean): Promise<Guild<"cached"> | Guild<"api">>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<[`Guild`](/api/classes/guild/)\<`"cached"`\> \| [`Guild`](/api/classes/guild/)\<`"api"`\>\>

#### Source

[seyfert/src/structures/GuildTemplate.ts:19](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildTemplate.ts#L19)

***

### sync()

```ts
sync(): Promise<APITemplate>
```

#### Returns

`Promise`\<`APITemplate`\>

#### Source

[seyfert/src/structures/GuildTemplate.ts:27](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildTemplate.ts#L27)

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
| `create` | (`body`: `RESTPostAPIGuildTemplatesJSONBody`) => `Promise`\<`APITemplate`\> | - |
| `delete` | (`code`: `string`) => `Promise`\<`APITemplate`\> | - |
| `edit` | (`code`: `string`, `body`: `AddUndefinedToPossiblyUndefinedPropertiesOfInterface`\<`Partial`\<`RESTPostAPIGuildTemplatesJSONBody`\>\>) => `Promise`\<`APITemplate`\> | - |
| `fetch` | (`code`: `string`) => `Promise`\<`APITemplate`\> | - |
| `list` | () => `Promise`\<`RESTGetAPIGuildTemplatesResult`\> | - |
| `sync` | (`code`: `string`) => `Promise`\<`APITemplate`\> | - |

#### Source

[seyfert/src/structures/GuildTemplate.ts:39](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/GuildTemplate.ts#L39)
