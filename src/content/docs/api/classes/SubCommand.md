---
editUrl: false
next: false
prev: false
title: "SubCommand"
---

## Extends

- `BaseCommand`

## Constructors

### new SubCommand()

```ts
new SubCommand(): SubCommand
```

#### Returns

[`SubCommand`](/api/classes/subcommand/)

#### Inherited from

`BaseCommand.constructor`

## Properties

| Property | Type | Overrides | Inherited from |
| :------ | :------ | :------ | :------ |
| `__d?` | `true` | `BaseCommand.__d` | `BaseCommand.__d` |
| `__filePath?` | `string` | `BaseCommand.__filePath` | `BaseCommand.__filePath` |
| `__t?` | `Object` | `BaseCommand.__t` | `BaseCommand.__t` |
| `__t.description` | `undefined` \| `string` | - | - |
| `__t.name` | `undefined` \| `string` | - | - |
| `__tGroups?` | `Record`\<`string`, `Object`\> | `BaseCommand.__tGroups` | `BaseCommand.__tGroups` |
| `botPermissions?` | `bigint` | `BaseCommand.botPermissions` | `BaseCommand.botPermissions` |
| `default_member_permissions?` | `string` | `BaseCommand.default_member_permissions` | `BaseCommand.default_member_permissions` |
| `description` | `string` | `BaseCommand.description` | `BaseCommand.description` |
| `description_localizations?` | `Partial`\<`Record`\< \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"`, `string`\>\> | `BaseCommand.description_localizations` | `BaseCommand.description_localizations` |
| `dm?` | `boolean` | `BaseCommand.dm` | `BaseCommand.dm` |
| `group?` | `string` | - | - |
| `guild_id?` | `string`[] | `BaseCommand.guild_id` | `BaseCommand.guild_id` |
| `middlewares` | `never`[] | `BaseCommand.middlewares` | `BaseCommand.middlewares` |
| `name` | `string` | `BaseCommand.name` | `BaseCommand.name` |
| `name_localizations?` | `Partial`\<`Record`\< \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"`, `string`\>\> | `BaseCommand.name_localizations` | `BaseCommand.name_localizations` |
| `nsfw?` | `boolean` | `BaseCommand.nsfw` | `BaseCommand.nsfw` |
| `options?` | [`CommandOption`](/api/type-aliases/commandoption/)[] | `BaseCommand.options` | `BaseCommand.options` |
| `type` | `ApplicationCommandOptionType` | `BaseCommand.type` | `BaseCommand.type` |

## Methods

### onAfterRun()?

```ts
optional onAfterRun(context: CommandContext<any, never>, error: unknown): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`CommandContext`](/api/classes/commandcontext/)\<`any`, `never`\> |
| `error` | `unknown` |

#### Returns

`any`

#### Inherited from

`BaseCommand.onAfterRun`

#### Source

[seyfert/src/commands/applications/chat.ts:269](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chat.ts#L269)

***

### onInternalError()?

```ts
optional onInternalError(client: UsingClient, error?: unknown): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](/api/interfaces/usingclient/) |
| `error`? | `unknown` |

#### Returns

`any`

#### Inherited from

`BaseCommand.onInternalError`

#### Source

[seyfert/src/commands/applications/chat.ts:274](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chat.ts#L274)

***

### onMiddlewaresError()?

```ts
optional onMiddlewaresError(context: CommandContext<Object, never>, error: string): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`CommandContext`](/api/classes/commandcontext/)\<`Object`, `never`\> |
| `error` | `string` |

#### Returns

`any`

#### Inherited from

`BaseCommand.onMiddlewaresError`

#### Source

[seyfert/src/commands/applications/chat.ts:272](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chat.ts#L272)

***

### onOptionsError()?

```ts
optional onOptionsError(context: CommandContext<Object, never>, metadata: OnOptionsReturnObject): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`CommandContext`](/api/classes/commandcontext/)\<`Object`, `never`\> |
| `metadata` | [`OnOptionsReturnObject`](/api/type-aliases/onoptionsreturnobject/) |

#### Returns

`any`

#### Inherited from

`BaseCommand.onOptionsError`

#### Source

[seyfert/src/commands/applications/chat.ts:271](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chat.ts#L271)

***

### onPermissionsFail()?

```ts
optional onPermissionsFail(context: CommandContext<Object, never>, permissions: PermissionStrings): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`CommandContext`](/api/classes/commandcontext/)\<`Object`, `never`\> |
| `permissions` | [`PermissionStrings`](/api/type-aliases/permissionstrings/) |

#### Returns

`any`

#### Inherited from

`BaseCommand.onPermissionsFail`

#### Source

[seyfert/src/commands/applications/chat.ts:273](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chat.ts#L273)

***

### onRunError()?

```ts
optional onRunError(context: CommandContext<any, never>, error: unknown): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`CommandContext`](/api/classes/commandcontext/)\<`any`, `never`\> |
| `error` | `unknown` |

#### Returns

`any`

#### Inherited from

`BaseCommand.onRunError`

#### Source

[seyfert/src/commands/applications/chat.ts:270](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chat.ts#L270)

***

### reload()

```ts
reload(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseCommand.reload`

#### Source

[seyfert/src/commands/applications/chat.ts:261](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chat.ts#L261)

***

### run()

```ts
abstract run(context: CommandContext<any, never>): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`CommandContext`](/api/classes/commandcontext/)\<`any`, `never`\> |

#### Returns

`any`

#### Overrides

`BaseCommand.run`

#### Source

[seyfert/src/commands/applications/chat.ts:344](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chat.ts#L344)

***

### toJSON()

```ts
toJSON(): Object
```

#### Returns

`Object`

| Member | Type | Value |
| :------ | :------ | :------ |
| `default_member_permissions` | `undefined` \| `string` | - |
| `description` | `string` | - |
| `description_localizations` | `undefined` \| `Partial`\<`Record`\<   \| `"id"`   \| `"en-US"`   \| `"en-GB"`   \| `"bg"`   \| `"zh-CN"`   \| `"zh-TW"`   \| `"hr"`   \| `"cs"`   \| `"da"`   \| `"nl"`   \| `"fi"`   \| `"fr"`   \| `"de"`   \| `"el"`   \| `"hi"`   \| `"hu"`   \| `"it"`   \| `"ja"`   \| `"ko"`   \| `"lt"`   \| `"no"`   \| `"pl"`   \| `"pt-BR"`   \| `"ro"`   \| `"ru"`   \| `"es-ES"`   \| `"es-419"`   \| `"sv-SE"`   \| `"th"`   \| `"tr"`   \| `"uk"`   \| `"vi"`, `string`\>\> | - |
| `dm_permission` | `boolean` | - |
| `guild_id` | `undefined` \| `string`[] | - |
| `name` | `string` | - |
| `name_localizations` | `undefined` \| `Partial`\<`Record`\<   \| `"id"`   \| `"en-US"`   \| `"en-GB"`   \| `"bg"`   \| `"zh-CN"`   \| `"zh-TW"`   \| `"hr"`   \| `"cs"`   \| `"da"`   \| `"nl"`   \| `"fi"`   \| `"fr"`   \| `"de"`   \| `"el"`   \| `"hi"`   \| `"hu"`   \| `"it"`   \| `"ja"`   \| `"ko"`   \| `"lt"`   \| `"no"`   \| `"pl"`   \| `"pt-BR"`   \| `"ro"`   \| `"ru"`   \| `"es-ES"`   \| `"es-419"`   \| `"sv-SE"`   \| `"th"`   \| `"tr"`   \| `"uk"`   \| `"vi"`, `string`\>\> | - |
| `nsfw` | `undefined` \| `boolean` | - |
| `options` | `APIApplicationCommandBasicOption`[] | - |
| `type` | `number` | - |

#### Overrides

`BaseCommand.toJSON`

#### Source

[seyfert/src/commands/applications/chat.ts:335](https://github.com/potoland/potocuit/blob/c4fb0c1/src/commands/applications/chat.ts#L335)
