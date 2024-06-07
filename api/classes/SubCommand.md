[seyfert](../globals.md) / SubCommand

# Class: `abstract` SubCommand

## Extends

- [`BaseCommand`](BaseCommand.md)

## Constructors

### new SubCommand()

```ts
new SubCommand(): SubCommand
```

#### Returns

[`SubCommand`](SubCommand.md)

#### Inherited from

[`BaseCommand`](BaseCommand.md).[`constructor`](BaseCommand.md#constructors)

## Properties

| Property | Type | Default value | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `__autoload?` | `true` | `undefined` | [`BaseCommand`](BaseCommand.md).`__autoload` | [`BaseCommand`](BaseCommand.md).`__autoload` |
| `__filePath?` | `string` | `undefined` | [`BaseCommand`](BaseCommand.md).`__filePath` | [`BaseCommand`](BaseCommand.md).`__filePath` |
| `__t?` | \{ `description`: `undefined` \| `string`; `name`: `undefined` \| `string`; \} | `undefined` | [`BaseCommand`](BaseCommand.md).`__t` | [`BaseCommand`](BaseCommand.md).`__t` |
| `__t.description` | `undefined` \| `string` | `undefined` | - | - |
| `__t.name` | `undefined` \| `string` | `undefined` | - | - |
| `aliases?` | `string`[] | `undefined` | [`BaseCommand`](BaseCommand.md).`aliases` | [`BaseCommand`](BaseCommand.md).`aliases` |
| `botPermissions?` | `bigint` | `undefined` | [`BaseCommand`](BaseCommand.md).`botPermissions` | [`BaseCommand`](BaseCommand.md).`botPermissions` |
| `contexts` | `InteractionContextType`[] | `[]` | [`BaseCommand`](BaseCommand.md).`contexts` | [`BaseCommand`](BaseCommand.md).`contexts` |
| `defaultMemberPermissions?` | `bigint` | `undefined` | [`BaseCommand`](BaseCommand.md).`defaultMemberPermissions` | [`BaseCommand`](BaseCommand.md).`defaultMemberPermissions` |
| `description` | `string` | `undefined` | [`BaseCommand`](BaseCommand.md).`description` | [`BaseCommand`](BaseCommand.md).`description` |
| `description_localizations?` | `Partial`\<`Record`\< \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"`, `string`\>\> | `undefined` | [`BaseCommand`](BaseCommand.md).`description_localizations` | [`BaseCommand`](BaseCommand.md).`description_localizations` |
| `group?` | `string` | `undefined` | - | - |
| `guildId?` | `string`[] | `undefined` | [`BaseCommand`](BaseCommand.md).`guildId` | [`BaseCommand`](BaseCommand.md).`guildId` |
| `ignore?` | [`IgnoreCommand`](../enumerations/IgnoreCommand.md) | `undefined` | [`BaseCommand`](BaseCommand.md).`ignore` | [`BaseCommand`](BaseCommand.md).`ignore` |
| `integrationTypes` | `ApplicationIntegrationType`[] | `[]` | [`BaseCommand`](BaseCommand.md).`integrationTypes` | [`BaseCommand`](BaseCommand.md).`integrationTypes` |
| `middlewares` | `never`[] | `[]` | [`BaseCommand`](BaseCommand.md).`middlewares` | [`BaseCommand`](BaseCommand.md).`middlewares` |
| `name` | `string` | `undefined` | [`BaseCommand`](BaseCommand.md).`name` | [`BaseCommand`](BaseCommand.md).`name` |
| `name_localizations?` | `Partial`\<`Record`\< \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"`, `string`\>\> | `undefined` | [`BaseCommand`](BaseCommand.md).`name_localizations` | [`BaseCommand`](BaseCommand.md).`name_localizations` |
| `nsfw?` | `boolean` | `undefined` | [`BaseCommand`](BaseCommand.md).`nsfw` | [`BaseCommand`](BaseCommand.md).`nsfw` |
| `options?` | [`CommandOption`](../type-aliases/CommandOption.md)[] | `undefined` | [`BaseCommand`](BaseCommand.md).`options` | [`BaseCommand`](BaseCommand.md).`options` |
| `props` | [`ExtraProps`](../interfaces/ExtraProps.md) | `{}` | [`BaseCommand`](BaseCommand.md).`props` | [`BaseCommand`](BaseCommand.md).`props` |
| `type` | `ApplicationCommandOptionType` | `ApplicationCommandOptionType.Subcommand` | [`BaseCommand`](BaseCommand.md).`type` | [`BaseCommand`](BaseCommand.md).`type` |

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

#### Inherited from

[`BaseCommand`](BaseCommand.md).[`onAfterRun`](BaseCommand.md#onafterrun)

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

#### Inherited from

[`BaseCommand`](BaseCommand.md).[`onBotPermissionsFail`](BaseCommand.md#onbotpermissionsfail)

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

#### Inherited from

[`BaseCommand`](BaseCommand.md).[`onInternalError`](BaseCommand.md#oninternalerror)

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

#### Inherited from

[`BaseCommand`](BaseCommand.md).[`onMiddlewaresError`](BaseCommand.md#onmiddlewareserror)

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

#### Inherited from

[`BaseCommand`](BaseCommand.md).[`onOptionsError`](BaseCommand.md#onoptionserror)

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

#### Inherited from

[`BaseCommand`](BaseCommand.md).[`onPermissionsFail`](BaseCommand.md#onpermissionsfail)

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

#### Inherited from

[`BaseCommand`](BaseCommand.md).[`onRunError`](BaseCommand.md#onrunerror)

#### Source

[seyfert/src/commands/applications/chat.ts:302](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chat.ts#L302)

***

### reload()

```ts
reload(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BaseCommand`](BaseCommand.md).[`reload`](BaseCommand.md#reload)

#### Source

[seyfert/src/commands/applications/chat.ts:286](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chat.ts#L286)

***

### run()

```ts
abstract run(context: CommandContext<any, never>): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`CommandContext`](CommandContext.md)\<`any`, `never`\> |

#### Returns

`any`

#### Overrides

[`BaseCommand`](BaseCommand.md).[`run`](BaseCommand.md#run)

#### Source

[seyfert/src/commands/applications/chat.ts:370](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chat.ts#L370)

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
  options: APIApplicationCommandBasicOption[];
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
  options: APIApplicationCommandBasicOption[];
  type: number;
}
```

| Member | Type | Value |
| :------ | :------ | :------ |
| `contexts` | `InteractionContextType`[] | - |
| `default_member_permissions` | `string` | - |
| `description` | `string` | - |
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
  \| `"vi"`, `string`\>\> | - |
| `guild_id` | `undefined` \| `string`[] | - |
| `integration_types` | `ApplicationIntegrationType`[] | - |
| `name` | `string` | - |
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
  \| `"vi"`, `string`\>\> | - |
| `nsfw` | `undefined` \| `boolean` | - |
| `options` | `APIApplicationCommandBasicOption`[] | ... |
| `type` | `number` | - |

#### Overrides

[`BaseCommand`](BaseCommand.md).[`toJSON`](BaseCommand.md#tojson)

#### Source

[seyfert/src/commands/applications/chat.ts:362](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/chat.ts#L362)
