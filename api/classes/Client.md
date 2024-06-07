[seyfert](../globals.md) / Client

# Class: Client\<Ready\>

## Extends

- `BaseClient`

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `Ready` *extends* `boolean` | `boolean` |

## Constructors

### new Client()

```ts
new Client<Ready>(options?: ClientOptions): Client<Ready>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | [`ClientOptions`](../interfaces/ClientOptions.md) |

#### Returns

[`Client`](Client.md)\<`Ready`\>

#### Overrides

`BaseClient.constructor`

#### Source

[seyfert/src/client/client.ts:52](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/client.ts#L52)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `__handleGuilds?` | `private` | `Set`\<`string`\> | `...` | - | - |
| `cache` | `public` | [`Cache`](Cache.md) | `undefined` | `BaseClient.cache` | `BaseClient.cache` |
| `channels` | `public` | `ChannelShorter` | `...` | `BaseClient.channels` | `BaseClient.channels` |
| `collectors` | `public` | `Collectors` | `...` | - | - |
| `commands?` | `public` | `CommandHandler` | `...` | `BaseClient.commands` | `BaseClient.commands` |
| `components?` | `public` | `ComponentHandler` | `...` | `BaseClient.components` | `BaseClient.components` |
| `debugger?` | `public` | [`Logger`](Logger.md) | `undefined` | `BaseClient.debugger` | `BaseClient.debugger` |
| `emojis` | `public` | `EmojiShorter` | `...` | `BaseClient.emojis` | `BaseClient.emojis` |
| `events?` | `public` | [`EventHandler`](EventHandler.md) | `...` | - | - |
| `gateway` | `public` | [`ShardManager`](ShardManager.md) | `undefined` | - | - |
| `guilds` | `public` | `GuildShorter` | `...` | `BaseClient.guilds` | `BaseClient.guilds` |
| `interactions` | `public` | `InteractionShorter` | `...` | `BaseClient.interactions` | `BaseClient.interactions` |
| `langs?` | `public` | [`LangsHandler`](LangsHandler.md) | `...` | `BaseClient.langs` | `BaseClient.langs` |
| `logger` | `public` | [`Logger`](Logger.md) | `...` | `BaseClient.logger` | `BaseClient.logger` |
| `me` | `public` | `If`\<`Ready`, [`ClientUser`](ClientUser.md), `null`\> | `undefined` | - | - |
| `memberUpdateHandler` | `public` | `MemberUpdateHandler` | `...` | - | - |
| `members` | `public` | `MemberShorter` | `...` | `BaseClient.members` | `BaseClient.members` |
| `messages` | `public` | `MessageShorter` | `...` | `BaseClient.messages` | `BaseClient.messages` |
| `middlewares?` | `public` | `Record`\<`string`, [`MiddlewareContext`](../type-aliases/MiddlewareContext.md)\> | `undefined` | `BaseClient.middlewares` | `BaseClient.middlewares` |
| `options` | `public` | `Omit`\<[`ClientOptions`](../interfaces/ClientOptions.md), `"commands"`\> & \{ `commands`: `MakeRequired`\<\{ `defaults`: \{ `onAfterRun`: (`context`: [`CommandContext`](CommandContext.md)\<\{\}, `never`\>, `error`: `unknown`) => `any`; `onBotPermissionsFail`: (`context`: [`CommandContext`](CommandContext.md)\<\{\}, `never`\>, `permissions`: [`PermissionStrings`](../type-aliases/PermissionStrings.md)) => `any`; `onInternalError`: (`client`: [`UsingClient`](../interfaces/UsingClient.md), `command`: [`Command`](Command.md) \| [`SubCommand`](SubCommand.md), `error`?: `unknown`) => `any`; `onMiddlewaresError`: (`context`: [`CommandContext`](CommandContext.md)\<\{\}, `never`\>, `error`: `string`) => `any`; `onOptionsError`: (`context`: [`CommandContext`](CommandContext.md)\<\{\}, `never`\>, `metadata`: [`OnOptionsReturnObject`](../type-aliases/OnOptionsReturnObject.md)) => `any`; `onPermissionsFail`: (`context`: [`CommandContext`](CommandContext.md)\<\{\}, `never`\>, `permissions`: [`PermissionStrings`](../type-aliases/PermissionStrings.md)) => `any`; `onRunError`: (`context`: [`CommandContext`](CommandContext.md)\<\{\}, `never`\>, `error`: `unknown`) => `any`; `props`: [`ExtraProps`](../interfaces/ExtraProps.md); \}; \} & \{ `argsParser`: (`content`: `string`, `command`: [`Command`](Command.md) \| [`SubCommand`](SubCommand.md), `message`: [`Message`](Message.md)) => `Record`\<`string`, `string`\>; `deferReplyResponse`: (`ctx`: [`CommandContext`](CommandContext.md)\<\{\}, `never`\>) => `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps`; `optionsParser`: (`self`: [`UsingClient`](../interfaces/UsingClient.md), `command`: [`Command`](Command.md) \| [`SubCommand`](SubCommand.md), `message`: `GatewayMessageCreateDispatchData`, `args`: `Partial`\<`Record`\<`string`, `string`\>\>, `resolved`: `MakeRequired`\<[`ContextOptionsResolved`](../type-aliases/ContextOptionsResolved.md)\>) => `Awaitable`\<\{ `errors`: \{ `error`: ...; `fullError`: ...; `name`: ...; \}[]; `options`: `APIApplicationCommandInteractionDataOption`[]; \}\>; `prefix`: (`message`: [`Message`](Message.md)) => `string`[] \| `Promise`\<`string`[]\>; `reply`: (`ctx`: [`CommandContext`](CommandContext.md)\<\{\}, `never`\>) => `boolean`; \}, `"argsParser"` \| `"optionsParser"`\>; \} | `undefined` | `BaseClient.options` | `BaseClient.options` |
| `presenceUpdateHandler` | `public` | `PresenceUpdateHandler` | `...` | - | - |
| `reactions` | `public` | `ReactionShorter` | `...` | `BaseClient.reactions` | `BaseClient.reactions` |
| `rest` | `public` | [`ApiHandler`](ApiHandler.md) | `undefined` | `BaseClient.rest` | `BaseClient.rest` |
| `roles` | `public` | `RoleShorter` | `...` | `BaseClient.roles` | `BaseClient.roles` |
| `templates` | `public` | `TemplateShorter` | `...` | `BaseClient.templates` | `BaseClient.templates` |
| `threads` | `public` | `ThreadShorter` | `...` | `BaseClient.threads` | `BaseClient.threads` |
| `users` | `public` | `UsersShorter` | `...` | `BaseClient.users` | `BaseClient.users` |
| `webhooks` | `public` | `WebhookShorter` | `...` | `BaseClient.webhooks` | `BaseClient.webhooks` |

## Accessors

### applicationId

```ts
get applicationId(): string
```

```ts
set applicationId(id: string): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`string`

#### Source

[seyfert/src/client/base.ts:173](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/base.ts#L173)

***

### botId

```ts
get botId(): string
```

```ts
set botId(id: string): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`string`

#### Source

[seyfert/src/client/base.ts:165](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/base.ts#L165)

***

### proxy

```ts
get proxy(): APIRoutes
```

#### Returns

[`APIRoutes`](../type-aliases/APIRoutes.md)

#### Source

[seyfert/src/client/base.ts:177](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/base.ts#L177)

## Methods

### execute()

```ts
protected execute(options: {
  intents: number;
  token: string;
}): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.intents`? | `number` |
| `options.token`? | `string` |

#### Returns

`Promise`\<`void`\>

#### Overrides

`BaseClient.execute`

#### Source

[seyfert/src/client/client.ts:106](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/client.ts#L106)

***

### getRC()

```ts
getRC<T>(): Promise<{
  debug: !!debug;
 } & Omit<T, "locations" | "debug"> & {
  base: string;
  commands: undefined | string;
  components: undefined | string;
  events: undefined | string;
  langs: undefined | string;
  output: string;
  templates: undefined | string;
}>
```

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* `InternalRuntimeConfigHTTP` \| `InternalRuntimeConfig` | `InternalRuntimeConfigHTTP` \| `InternalRuntimeConfig` |

#### Returns

`Promise`\<\{
  `debug`: `!!debug`;
 \} & `Omit`\<`T`, `"locations"` \| `"debug"`\> & \{
  `base`: `string`;
  `commands`: `undefined` \| `string`;
  `components`: `undefined` \| `string`;
  `events`: `undefined` \| `string`;
  `langs`: `undefined` \| `string`;
  `output`: `string`;
  `templates`: `undefined` \| `string`;
 \}\>

#### Inherited from

`BaseClient.getRC`

#### Source

[seyfert/src/client/base.ts:346](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/base.ts#L346)

***

### loadCommands()

```ts
loadCommands(dir?: string): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dir`? | `string` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseClient.loadCommands`

#### Source

[seyfert/src/client/base.ts:318](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/base.ts#L318)

***

### loadComponents()

```ts
loadComponents(dir?: string): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dir`? | `string` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseClient.loadComponents`

#### Source

[seyfert/src/client/base.ts:326](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/base.ts#L326)

***

### loadEvents()

```ts
loadEvents(dir?: string): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dir`? | `string` |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/client/client.ts:98](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/client.ts#L98)

***

### loadLangs()

```ts
loadLangs(dir?: string): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dir`? | `string` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseClient.loadLangs`

#### Source

[seyfert/src/client/base.ts:334](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/base.ts#L334)

***

### onPacket()

```ts
protected onPacket(shardId: number, packet: GatewayDispatchPayload): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `shardId` | `number` |
| `packet` | `GatewayDispatchPayload` |

#### Returns

`Promise`\<`void`\>

#### Overrides

`BaseClient.onPacket`

#### Source

[seyfert/src/client/client.ts:168](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/client.ts#L168)

***

### setServices()

```ts
setServices(__namedParameters: ServicesOptions & {
  gateway: ShardManager;
  handlers: {
     commands: CommandHandler | {
        onCommand: (file: () => ... | ... | ...) => false | Command | ContextMenuCommand | SubCommand;
        onSubCommand: (file: () => SubCommand) => false | SubCommand;
       };
     components: ComponentHandler | (file: () => ComponentCommand | ModalCommand) => false | ComponentCommand | ModalCommand;
     langs: LangsHandler | (_locale: string, file: Record<string, any>) => false | Record<string, any>;
    } & {
     events: (file: ClientEvent) => false | ClientEvent;
    };
 }): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | `ServicesOptions` & \{ `gateway`: [`ShardManager`](ShardManager.md); `handlers`: \{ `commands`: `CommandHandler` \| \{ `onCommand`: (`file`: () => ... \| ... \| ...) => `false` \| [`Command`](Command.md) \| [`ContextMenuCommand`](ContextMenuCommand.md) \| [`SubCommand`](SubCommand.md); `onSubCommand`: (`file`: () => [`SubCommand`](SubCommand.md)) => `false` \| [`SubCommand`](SubCommand.md); \}; `components`: `ComponentHandler` \| (`file`: () => [`ComponentCommand`](ComponentCommand.md) \| [`ModalCommand`](ModalCommand.md)) => `false` \| [`ComponentCommand`](ComponentCommand.md) \| [`ModalCommand`](ModalCommand.md); `langs`: [`LangsHandler`](LangsHandler.md) \| (`_locale`: `string`, `file`: `Record`\<`string`, `any`\>) => `false` \| `Record`\<`string`, `any`\>; \} & \{ `events`: (`file`: [`ClientEvent`](../interfaces/ClientEvent.md)) => `false` \| [`ClientEvent`](../interfaces/ClientEvent.md); \}; \} |

#### Returns

`void`

#### Overrides

`BaseClient.setServices`

#### Source

[seyfert/src/client/client.ts:65](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/client.ts#L65)

***

### shouldUploadCommands()

```ts
shouldUploadCommands(cachePath: string): Promise<boolean>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cachePath` | `string` |

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`BaseClient.shouldUploadCommands`

#### Source

[seyfert/src/client/base.ts:280](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/base.ts#L280)

***

### start()

```ts
start(options: Omit<DeepPartial<StartOptions>, "httpConnection">, execute: boolean): Promise<void>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `options` | `Omit`\<`DeepPartial`\<`StartOptions`\>, `"httpConnection"`\> | `{}` |
| `execute` | `boolean` | `true` |

#### Returns

`Promise`\<`void`\>

#### Overrides

`BaseClient.start`

#### Source

[seyfert/src/client/client.ts:131](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/client.ts#L131)

***

### t()

```ts
t(locale: string): __InternalParseLocale<DefaultLocale> & {
  get: DefaultLocale;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `locale` | `string` |

#### Returns

[`__InternalParseLocale`](../type-aliases/InternalParseLocale.md)\<[`DefaultLocale`](../interfaces/DefaultLocale.md)\> & \{
  `get`: [`DefaultLocale`](../interfaces/DefaultLocale.md);
 \}

#### Inherited from

`BaseClient.t`

#### Source

[seyfert/src/client/base.ts:342](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/base.ts#L342)

***

### uploadCommands()

```ts
uploadCommands(applicationId?: string): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `applicationId`? | `string` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseClient.uploadCommands`

#### Source

[seyfert/src/client/base.ts:287](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/base.ts#L287)

***

### assertString()

```ts
static protected assertString(value: unknown, message?: string): asserts value is string
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `unknown` |
| `message`? | `string` |

#### Returns

`asserts value is string`

#### Inherited from

`BaseClient.assertString`

#### Source

[seyfert/src/client/base.ts:82](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/base.ts#L82)

***

### getBotIdFromToken()

```ts
static protected getBotIdFromToken(token: string): string
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`string`

#### Inherited from

`BaseClient.getBotIdFromToken`

#### Source

[seyfert/src/client/base.ts:88](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/base.ts#L88)
