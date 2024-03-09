---
editUrl: false
next: false
prev: false
title: "ContextMenuCommand"
---

## Constructors

### new ContextMenuCommand()

```ts
new ContextMenuCommand(): ContextMenuCommand
```

#### Returns

[`ContextMenuCommand`](/api/classes/contextmenucommand/)

## Properties

| Property | Type |
| :------ | :------ |
| `__filePath?` | `string` |
| `__t?` | `Object` |
| `__t.description` | `undefined` \| `string` |
| `__t.name` | `undefined` \| `string` |
| `botPermissions?` | `bigint` |
| `default_member_permissions?` | `string` |
| `description` | `string` |
| `description_localizations?` | `Partial`\<`Record`\< \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"`, `string`\>\> |
| `dm?` | `boolean` |
| `guild_id?` | `string`[] |
| `middlewares` | `never`[] |
| `name` | `string` |
| `name_localizations?` | `Partial`\<`Record`\< \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"`, `string`\>\> |
| `nsfw?` | `boolean` |
| `type` | `User` \| `Message` |

## Methods

### onAfterRun()?

```ts
optional onAfterRun(context: MenuCommandContext<any, never>, error: unknown): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`MenuCommandContext`](/api/classes/menucommandcontext/)\<`any`, `never`\> |
| `error` | `unknown` |

#### Returns

`any`

#### Source

[seyfert/src/commands/applications/menu.ts:103](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/applications/menu.ts#L103)

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

#### Source

[seyfert/src/commands/applications/menu.ts:113](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/applications/menu.ts#L113)

***

### onMiddlewaresError()

```ts
onMiddlewaresError(context: MenuCommandContext<any, never>, error: string): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`MenuCommandContext`](/api/classes/menucommandcontext/)\<`any`, `never`\> |
| `error` | `string` |

#### Returns

`any`

#### Source

[seyfert/src/commands/applications/menu.ts:107](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/applications/menu.ts#L107)

***

### onPermissionsFail()

```ts
onPermissionsFail(context: MenuCommandContext<any, never>, permissions: PermissionStrings): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`MenuCommandContext`](/api/classes/menucommandcontext/)\<`any`, `never`\> |
| `permissions` | [`PermissionStrings`](/api/type-aliases/permissionstrings/) |

#### Returns

`any`

#### Source

[seyfert/src/commands/applications/menu.ts:110](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/applications/menu.ts#L110)

***

### onRunError()

```ts
onRunError(context: MenuCommandContext<any, never>, error: unknown): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`MenuCommandContext`](/api/classes/menucommandcontext/)\<`any`, `never`\> |
| `error` | `unknown` |

#### Returns

`any`

#### Source

[seyfert/src/commands/applications/menu.ts:104](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/applications/menu.ts#L104)

***

### reload()

```ts
reload(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/commands/applications/menu.ts:95](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/applications/menu.ts#L95)

***

### run()?

```ts
optional abstract run(context: MenuCommandContext<any, never>): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`MenuCommandContext`](/api/classes/menucommandcontext/)\<`any`, `never`\> |

#### Returns

`any`

#### Source

[seyfert/src/commands/applications/menu.ts:102](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/applications/menu.ts#L102)

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
| `dm_permission` | `undefined` \| `boolean` | - |
| `guild_id` | `undefined` \| `string`[] | - |
| `name` | `string` | - |
| `name_localizations` | `undefined` \| `Partial`\<`Record`\<   \| `"id"`   \| `"en-US"`   \| `"en-GB"`   \| `"bg"`   \| `"zh-CN"`   \| `"zh-TW"`   \| `"hr"`   \| `"cs"`   \| `"da"`   \| `"nl"`   \| `"fi"`   \| `"fr"`   \| `"de"`   \| `"el"`   \| `"hi"`   \| `"hu"`   \| `"it"`   \| `"ja"`   \| `"ko"`   \| `"lt"`   \| `"no"`   \| `"pl"`   \| `"pt-BR"`   \| `"ro"`   \| `"ru"`   \| `"es-ES"`   \| `"es-419"`   \| `"sv-SE"`   \| `"th"`   \| `"tr"`   \| `"uk"`   \| `"vi"`, `string`\>\> | - |
| `nsfw` | `undefined` \| `boolean` | - |
| `type` | `User` \| `Message` | - |

#### Source

[seyfert/src/commands/applications/menu.ts:81](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/applications/menu.ts#L81)
