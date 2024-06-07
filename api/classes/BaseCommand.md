[seyfert](../globals.md) / BaseCommand

# Class: BaseCommand

## Extended by

- [`Command`](Command.md)
- [`SubCommand`](SubCommand.md)

## Constructors

### new BaseCommand()

```ts
new BaseCommand(): BaseCommand
```

#### Returns

[`BaseCommand`](BaseCommand.md)

## Properties

| Property | Type | Default value |
| :------ | :------ | :------ |
| `__autoload?` | `true` | `undefined` |
| `__filePath?` | `string` | `undefined` |
| `__t?` | \{ `description`: `undefined` \| `string`; `name`: `undefined` \| `string`; \} | `undefined` |
| `__t.description` | `undefined` \| `string` | `undefined` |
| `__t.name` | `undefined` \| `string` | `undefined` |
| `aliases?` | `string`[] | `undefined` |
| `botPermissions?` | `bigint` | `undefined` |
| `contexts` | `InteractionContextType`[] | `[]` |
| `defaultMemberPermissions?` | `bigint` | `undefined` |
| `description` | `string` | `undefined` |
| `description_localizations?` | `Partial`\<`Record`\< \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"`, `string`\>\> | `undefined` |
| `guildId?` | `string`[] | `undefined` |
| `ignore?` | [`IgnoreCommand`](../enumerations/IgnoreCommand.md) | `undefined` |
| `integrationTypes` | `ApplicationIntegrationType`[] | `[]` |
| `middlewares` | `never`[] | `[]` |
| `name` | `string` | `undefined` |
| `name_localizations?` | `Partial`\<`Record`\< \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"`, `string`\>\> | `undefined` |
| `nsfw?` | `boolean` | `undefined` |
| `options?` | [`CommandOption`](../type-aliases/CommandOption.md)[] \| [`SubCommand`](SubCommand.md)[] | `undefined` |
| `props` | [`ExtraProps`](../interfaces/ExtraProps.md) | `{}` |
| `type` | `number` | `undefined` |

## Methods

### onAfterRun()?

```ts
optional onAfterRun(context: CommandContext<{}, never>, error: unknown): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`CommandContext`](CommandContext.md)\<\{\}, `never`\> |
| `error` | `unknown` |

#### Returns

`any`

#### Source

[seyfert/src/commands/applications/chat.ts:301](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chat.ts#L301)

***

### onBotPermissionsFail()?

```ts
optional onBotPermissionsFail(context: CommandContext<{}, never>, permissions: PermissionStrings): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`CommandContext`](CommandContext.md)\<\{\}, `never`\> |
| `permissions` | [`PermissionStrings`](../type-aliases/PermissionStrings.md) |

#### Returns

`any`

#### Source

[seyfert/src/commands/applications/chat.ts:305](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chat.ts#L305)

***

### onInternalError()?

```ts
optional onInternalError(
   client: UsingClient, 
   command: Command | SubCommand, 
   error?: unknown): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `command` | [`Command`](Command.md) \| [`SubCommand`](SubCommand.md) |
| `error`? | `unknown` |

#### Returns

`any`

#### Source

[seyfert/src/commands/applications/chat.ts:307](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chat.ts#L307)

***

### onMiddlewaresError()?

```ts
optional onMiddlewaresError(context: CommandContext<{}, never>, error: string): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`CommandContext`](CommandContext.md)\<\{\}, `never`\> |
| `error` | `string` |

#### Returns

`any`

#### Source

[seyfert/src/commands/applications/chat.ts:304](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chat.ts#L304)

***

### onOptionsError()?

```ts
optional onOptionsError(context: CommandContext<{}, never>, metadata: OnOptionsReturnObject): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`CommandContext`](CommandContext.md)\<\{\}, `never`\> |
| `metadata` | [`OnOptionsReturnObject`](../type-aliases/OnOptionsReturnObject.md) |

#### Returns

`any`

#### Source

[seyfert/src/commands/applications/chat.ts:303](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chat.ts#L303)

***

### onPermissionsFail()?

```ts
optional onPermissionsFail(context: CommandContext<{}, never>, permissions: PermissionStrings): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`CommandContext`](CommandContext.md)\<\{\}, `never`\> |
| `permissions` | [`PermissionStrings`](../type-aliases/PermissionStrings.md) |

#### Returns

`any`

#### Source

[seyfert/src/commands/applications/chat.ts:306](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chat.ts#L306)

***

### onRunError()?

```ts
optional onRunError(context: CommandContext<{}, never>, error: unknown): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`CommandContext`](CommandContext.md)\<\{\}, `never`\> |
| `error` | `unknown` |

#### Returns

`any`

#### Source

[seyfert/src/commands/applications/chat.ts:302](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chat.ts#L302)

***

### reload()

```ts
reload(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/commands/applications/chat.ts:286](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chat.ts#L286)

***

### run()?

```ts
optional run(context: CommandContext<{}, never>): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`CommandContext`](CommandContext.md)\<\{\}, `never`\> |

#### Returns

`any`

#### Source

[seyfert/src/commands/applications/chat.ts:300](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chat.ts#L300)

***

### toJSON()

```ts
toJSON(): {
  contexts: InteractionContextType[];
  default_member_permissions: string;
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
  type: number;
}
```

#### Returns

```ts
{
  contexts: InteractionContextType[];
  default_member_permissions: string;
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
  type: number;
}
```

| Member | Type |
| :------ | :------ |
| `contexts` | `InteractionContextType`[] |
| `default_member_permissions` | `string` |
| `description` | `string` |
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
  \| `"vi"`, `string`\>\> |
| `guild_id` | `undefined` \| `string`[] |
| `integration_types` | `ApplicationIntegrationType`[] |
| `name` | `string` |
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
  \| `"vi"`, `string`\>\> |
| `nsfw` | `undefined` \| `boolean` |
| `type` | `number` |

#### Source

[seyfert/src/commands/applications/chat.ts:259](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chat.ts#L259)
