---
editUrl: false
next: false
prev: false
title: "Command"
---

## Extends

- `BaseCommand`

## Constructors

### new Command()

```ts
new Command(): Command
```

#### Returns

[`Command`](/api/classes/command/)

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
| `groups?` | `Record`\<`string`, `Object`\> | - | - |
| `guild_id?` | `string`[] | `BaseCommand.guild_id` | `BaseCommand.guild_id` |
| `middlewares` | `never`[] | `BaseCommand.middlewares` | `BaseCommand.middlewares` |
| `name` | `string` | `BaseCommand.name` | `BaseCommand.name` |
| `name_localizations?` | `Partial`\<`Record`\< \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"`, `string`\>\> | `BaseCommand.name_localizations` | `BaseCommand.name_localizations` |
| `nsfw?` | `boolean` | `BaseCommand.nsfw` | `BaseCommand.nsfw` |
| `options?` | [`CommandOption`](/api/type-aliases/commandoption/)[] \| [`SubCommand`](/api/classes/subcommand/)[] | `BaseCommand.options` | `BaseCommand.options` |
| `type` | `ApplicationCommandType` | `BaseCommand.type` | `BaseCommand.type` |

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

[seyfert/src/commands/applications/chat.ts:269](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/applications/chat.ts#L269)

***

### onInternalError()

```ts
onInternalError(client: UsingClient, error?: unknown): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](/api/interfaces/usingclient/) |
| `error`? | `unknown` |

#### Returns

`any`

#### Overrides

`BaseCommand.onInternalError`

#### Source

[seyfert/src/commands/applications/chat.ts:325](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/applications/chat.ts#L325)

***

### onMiddlewaresError()

```ts
onMiddlewaresError(context: CommandContext<Object, never>, error: string): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`CommandContext`](/api/classes/commandcontext/)\<`Object`, `never`\> |
| `error` | `string` |

#### Returns

`any`

#### Overrides

`BaseCommand.onMiddlewaresError`

#### Source

[seyfert/src/commands/applications/chat.ts:319](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/applications/chat.ts#L319)

***

### onOptionsError()

```ts
onOptionsError(context: CommandContext<Object, never>, metadata: OnOptionsReturnObject): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`CommandContext`](/api/classes/commandcontext/)\<`Object`, `never`\> |
| `metadata` | [`OnOptionsReturnObject`](/api/type-aliases/onoptionsreturnobject/) |

#### Returns

`any`

#### Overrides

`BaseCommand.onOptionsError`

#### Source

[seyfert/src/commands/applications/chat.ts:316](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/applications/chat.ts#L316)

***

### onPermissionsFail()

```ts
onPermissionsFail(context: CommandContext<Object, never>, permissions: PermissionStrings): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`CommandContext`](/api/classes/commandcontext/)\<`Object`, `never`\> |
| `permissions` | [`PermissionStrings`](/api/type-aliases/permissionstrings/) |

#### Returns

`any`

#### Overrides

`BaseCommand.onPermissionsFail`

#### Source

[seyfert/src/commands/applications/chat.ts:322](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/applications/chat.ts#L322)

***

### onRunError()

```ts
onRunError(context: CommandContext<any, never>, error: unknown): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`CommandContext`](/api/classes/commandcontext/)\<`any`, `never`\> |
| `error` | `unknown` |

#### Returns

`any`

#### Overrides

`BaseCommand.onRunError`

#### Source

[seyfert/src/commands/applications/chat.ts:313](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/applications/chat.ts#L313)

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

[seyfert/src/commands/applications/chat.ts:261](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/applications/chat.ts#L261)

***

### run()?

```ts
optional run(context: CommandContext<any, never>): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`CommandContext`](/api/classes/commandcontext/)\<`any`, `never`\> |

#### Returns

`any`

#### Inherited from

`BaseCommand.run`

#### Source

[seyfert/src/commands/applications/chat.ts:268](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/applications/chat.ts#L268)

***

### toJSON()

```ts
toJSON(): Object
```

#### Returns

`Object`

| Member | Type |
| :------ | :------ |
| `default_member_permissions` | `undefined` \| `string` |
| `description` | `string` |
| `description_localizations` | `undefined` \| `Partial`\<`Record`\<   \| `"id"`   \| `"en-US"`   \| `"en-GB"`   \| `"bg"`   \| `"zh-CN"`   \| `"zh-TW"`   \| `"hr"`   \| `"cs"`   \| `"da"`   \| `"nl"`   \| `"fi"`   \| `"fr"`   \| `"de"`   \| `"el"`   \| `"hi"`   \| `"hu"`   \| `"it"`   \| `"ja"`   \| `"ko"`   \| `"lt"`   \| `"no"`   \| `"pl"`   \| `"pt-BR"`   \| `"ro"`   \| `"ru"`   \| `"es-ES"`   \| `"es-419"`   \| `"sv-SE"`   \| `"th"`   \| `"tr"`   \| `"uk"`   \| `"vi"`, `string`\>\> |
| `dm_permission` | `boolean` |
| `guild_id` | `undefined` \| `string`[] |
| `name` | `string` |
| `name_localizations` | `undefined` \| `Partial`\<`Record`\<   \| `"id"`   \| `"en-US"`   \| `"en-GB"`   \| `"bg"`   \| `"zh-CN"`   \| `"zh-TW"`   \| `"hr"`   \| `"cs"`   \| `"da"`   \| `"nl"`   \| `"fi"`   \| `"fr"`   \| `"de"`   \| `"el"`   \| `"hi"`   \| `"hu"`   \| `"it"`   \| `"ja"`   \| `"ko"`   \| `"lt"`   \| `"no"`   \| `"pl"`   \| `"pt-BR"`   \| `"ro"`   \| `"ru"`   \| `"es-ES"`   \| `"es-419"`   \| `"sv-SE"`   \| `"th"`   \| `"tr"`   \| `"uk"`   \| `"vi"`, `string`\>\> |
| `nsfw` | `undefined` \| `boolean` |
| `options` | `APIApplicationCommandOption`[] |
| `type` | `number` |

#### Overrides

`BaseCommand.toJSON`

#### Source

[seyfert/src/commands/applications/chat.ts:281](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/applications/chat.ts#L281)