[seyfert](../globals.md) / ContextMenuCommand

# Class: `abstract` ContextMenuCommand

## Constructors

### new ContextMenuCommand()

```ts
new ContextMenuCommand(): ContextMenuCommand
```

#### Returns

[`ContextMenuCommand`](ContextMenuCommand.md)

## Properties

| Property | Type | Default value |
| :------ | :------ | :------ |
| `__filePath?` | `string` | `undefined` |
| `__t?` | \{ `description`: `undefined` \| `string`; `name`: `undefined` \| `string`; \} | `undefined` |
| `__t.description` | `undefined` \| `string` | `undefined` |
| `__t.name` | `undefined` \| `string` | `undefined` |
| `botPermissions?` | `bigint` | `undefined` |
| `contexts` | `InteractionContextType`[] | `[]` |
| `defaultMemberPermissions?` | `bigint` | `undefined` |
| `description` | `string` | `undefined` |
| `description_localizations?` | `Partial`\<`Record`\< \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"`, `string`\>\> | `undefined` |
| `dm?` | `boolean` | `undefined` |
| `guildId?` | `string`[] | `undefined` |
| `integrationTypes` | `ApplicationIntegrationType`[] | `[]` |
| `middlewares` | `never`[] | `[]` |
| `name` | `string` | `undefined` |
| `name_localizations?` | `Partial`\<`Record`\< \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"`, `string`\>\> | `undefined` |
| `nsfw?` | `boolean` | `undefined` |
| `props` | [`ExtraProps`](../interfaces/ExtraProps.md) | `{}` |
| `type` | `User` \| `Message` | `undefined` |

## Methods

### onAfterRun()?

```ts
optional onAfterRun(context: MenuCommandContext<any, never>, error: unknown): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`MenuCommandContext`](MenuCommandContext.md)\<`any`, `never`\> |
| `error` | `unknown` |

#### Returns

`any`

#### Source

[seyfert/src/commands/applications/menu.ts:57](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menu.ts#L57)

***

### onBotPermissionsFail()

```ts
onBotPermissionsFail(context: MenuCommandContext<any, never>, permissions: PermissionStrings): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`MenuCommandContext`](MenuCommandContext.md)\<`any`, `never`\> |
| `permissions` | [`PermissionStrings`](../type-aliases/PermissionStrings.md) |

#### Returns

`any`

#### Source

[seyfert/src/commands/applications/menu.ts:64](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menu.ts#L64)

***

### onInternalError()

```ts
onInternalError(client: UsingClient, error?: unknown): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `error`? | `unknown` |

#### Returns

`any`

#### Source

[seyfert/src/commands/applications/menu.ts:70](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menu.ts#L70)

***

### onMiddlewaresError()

```ts
onMiddlewaresError(context: MenuCommandContext<any, never>, error: string): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`MenuCommandContext`](MenuCommandContext.md)\<`any`, `never`\> |
| `error` | `string` |

#### Returns

`any`

#### Source

[seyfert/src/commands/applications/menu.ts:61](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menu.ts#L61)

***

### onPermissionsFail()

```ts
onPermissionsFail(context: MenuCommandContext<any, never>, permissions: PermissionStrings): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`MenuCommandContext`](MenuCommandContext.md)\<`any`, `never`\> |
| `permissions` | [`PermissionStrings`](../type-aliases/PermissionStrings.md) |

#### Returns

`any`

#### Source

[seyfert/src/commands/applications/menu.ts:67](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menu.ts#L67)

***

### onRunError()

```ts
onRunError(context: MenuCommandContext<any, never>, error: unknown): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`MenuCommandContext`](MenuCommandContext.md)\<`any`, `never`\> |
| `error` | `unknown` |

#### Returns

`any`

#### Source

[seyfert/src/commands/applications/menu.ts:58](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menu.ts#L58)

***

### reload()

```ts
reload(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/commands/applications/menu.ts:49](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menu.ts#L49)

***

### run()?

```ts
optional abstract run(context: MenuCommandContext<any, never>): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`MenuCommandContext`](MenuCommandContext.md)\<`any`, `never`\> |

#### Returns

`any`

#### Source

[seyfert/src/commands/applications/menu.ts:56](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menu.ts#L56)

***

### toJSON()

```ts
toJSON(): {
  contexts: InteractionContextType[];
  default_member_permissions: undefined | string;
  description: string;
  description_localizations: undefined | Partial<Record<
     | "id"
     | "en-US"
     | "en-GB"
     | "bg"
     | "zh-CN"
     | "zh-TW"
     | "hr"
     | "cs"
     | "da"
     | "nl"
     | "fi"
     | "fr"
     | "de"
     | "el"
     | "hi"
     | "hu"
     | "it"
     | "ja"
     | "ko"
     | "lt"
     | "no"
     | "pl"
     | "pt-BR"
     | "ro"
     | "ru"
     | "es-ES"
     | "es-419"
     | "sv-SE"
     | "th"
     | "tr"
     | "uk"
     | "vi", string>>;
  dm_permission: undefined | boolean;
  guild_id: undefined | string[];
  integration_types: ApplicationIntegrationType[];
  name: string;
  name_localizations: undefined | Partial<Record<
     | "id"
     | "en-US"
     | "en-GB"
     | "bg"
     | "zh-CN"
     | "zh-TW"
     | "hr"
     | "cs"
     | "da"
     | "nl"
     | "fi"
     | "fr"
     | "de"
     | "el"
     | "hi"
     | "hu"
     | "it"
     | "ja"
     | "ko"
     | "lt"
     | "no"
     | "pl"
     | "pt-BR"
     | "ro"
     | "ru"
     | "es-ES"
     | "es-419"
     | "sv-SE"
     | "th"
     | "tr"
     | "uk"
     | "vi", string>>;
  nsfw: undefined | boolean;
  type: User | Message;
}
```

#### Returns

```ts
{
  contexts: InteractionContextType[];
  default_member_permissions: undefined | string;
  description: string;
  description_localizations: undefined | Partial<Record<
     | "id"
     | "en-US"
     | "en-GB"
     | "bg"
     | "zh-CN"
     | "zh-TW"
     | "hr"
     | "cs"
     | "da"
     | "nl"
     | "fi"
     | "fr"
     | "de"
     | "el"
     | "hi"
     | "hu"
     | "it"
     | "ja"
     | "ko"
     | "lt"
     | "no"
     | "pl"
     | "pt-BR"
     | "ro"
     | "ru"
     | "es-ES"
     | "es-419"
     | "sv-SE"
     | "th"
     | "tr"
     | "uk"
     | "vi", string>>;
  dm_permission: undefined | boolean;
  guild_id: undefined | string[];
  integration_types: ApplicationIntegrationType[];
  name: string;
  name_localizations: undefined | Partial<Record<
     | "id"
     | "en-US"
     | "en-GB"
     | "bg"
     | "zh-CN"
     | "zh-TW"
     | "hr"
     | "cs"
     | "da"
     | "nl"
     | "fi"
     | "fr"
     | "de"
     | "el"
     | "hi"
     | "hu"
     | "it"
     | "ja"
     | "ko"
     | "lt"
     | "no"
     | "pl"
     | "pt-BR"
     | "ro"
     | "ru"
     | "es-ES"
     | "es-419"
     | "sv-SE"
     | "th"
     | "tr"
     | "uk"
     | "vi", string>>;
  nsfw: undefined | boolean;
  type: User | Message;
}
```

| Member | Type | Value |
| :------ | :------ | :------ |
| `contexts` | `InteractionContextType`[] | ... |
| `default_member_permissions` | `undefined` \| `string` | ... |
| `description` | `string` | ... |
| `description_localizations` | `undefined` \| `Partial`\<`Record`\<
  \| `"id"`
  \| `"en-US"`
  \| `"en-GB"`
  \| `"bg"`
  \| `"zh-CN"`
  \| `"zh-TW"`
  \| `"hr"`
  \| `"cs"`
  \| `"da"`
  \| `"nl"`
  \| `"fi"`
  \| `"fr"`
  \| `"de"`
  \| `"el"`
  \| `"hi"`
  \| `"hu"`
  \| `"it"`
  \| `"ja"`
  \| `"ko"`
  \| `"lt"`
  \| `"no"`
  \| `"pl"`
  \| `"pt-BR"`
  \| `"ro"`
  \| `"ru"`
  \| `"es-ES"`
  \| `"es-419"`
  \| `"sv-SE"`
  \| `"th"`
  \| `"tr"`
  \| `"uk"`
  \| `"vi"`, `string`\>\> | ... |
| `dm_permission` | `undefined` \| `boolean` | ... |
| `guild_id` | `undefined` \| `string`[] | ... |
| `integration_types` | `ApplicationIntegrationType`[] | ... |
| `name` | `string` | ... |
| `name_localizations` | `undefined` \| `Partial`\<`Record`\<
  \| `"id"`
  \| `"en-US"`
  \| `"en-GB"`
  \| `"bg"`
  \| `"zh-CN"`
  \| `"zh-TW"`
  \| `"hr"`
  \| `"cs"`
  \| `"da"`
  \| `"nl"`
  \| `"fi"`
  \| `"fr"`
  \| `"de"`
  \| `"el"`
  \| `"hi"`
  \| `"hu"`
  \| `"it"`
  \| `"ja"`
  \| `"ko"`
  \| `"lt"`
  \| `"no"`
  \| `"pl"`
  \| `"pt-BR"`
  \| `"ro"`
  \| `"ru"`
  \| `"es-ES"`
  \| `"es-419"`
  \| `"sv-SE"`
  \| `"th"`
  \| `"tr"`
  \| `"uk"`
  \| `"vi"`, `string`\>\> | ... |
| `nsfw` | `undefined` \| `boolean` | ... |
| `type` | `User` \| `Message` | ... |

#### Source

[seyfert/src/commands/applications/menu.ts:33](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/menu.ts#L33)
