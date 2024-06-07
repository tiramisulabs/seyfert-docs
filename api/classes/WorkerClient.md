[seyfert](../globals.md) / WorkerClient

# Class: WorkerClient\<Ready\>

## Extends

- `BaseClient`

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `Ready` *extends* `boolean` | `boolean` |

## Constructors

### new WorkerClient()

```ts
new WorkerClient<Ready>(options?: WorkerClientOptions): WorkerClient<Ready>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | `WorkerClientOptions` |

#### Returns

[`WorkerClient`](WorkerClient.md)\<`Ready`\>

#### Overrides

`BaseClient.constructor`

#### Source

[seyfert/src/client/workerclient.ts:59](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/workerclient.ts#L59)

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
| `guilds` | `public` | `GuildShorter` | `...` | `BaseClient.guilds` | `BaseClient.guilds` |
| `interactions` | `public` | `InteractionShorter` | `...` | `BaseClient.interactions` | `BaseClient.interactions` |
| `langs?` | `public` | [`LangsHandler`](LangsHandler.md) | `...` | `BaseClient.langs` | `BaseClient.langs` |
| `logger` | `public` | [`Logger`](Logger.md) | `...` | `BaseClient.logger` | `BaseClient.logger` |
| `me` | `public` | `When`\<`Ready`, [`ClientUser`](ClientUser.md), `never`\> | `undefined` | - | - |
| `members` | `public` | `MemberShorter` | `...` | `BaseClient.members` | `BaseClient.members` |
| `messages` | `public` | `MessageShorter` | `...` | `BaseClient.messages` | `BaseClient.messages` |
| `middlewares?` | `public` | `Record`\<`string`, [`MiddlewareContext`](../type-aliases/MiddlewareContext.md)\> | `undefined` | `BaseClient.middlewares` | `BaseClient.middlewares` |
| `options` | `public` | `WorkerClientOptions` | `undefined` | `BaseClient.options` | `BaseClient.options` |
| `promises` | `public` | `Map`\<`string`, \{ `resolve`: (`value`: `any`) => `void`; `timeout`: `Timeout`; \}\> | `...` | - | - |
| `reactions` | `public` | `ReactionShorter` | `...` | `BaseClient.reactions` | `BaseClient.reactions` |
| `rest` | `public` | [`ApiHandler`](ApiHandler.md) | `undefined` | `BaseClient.rest` | `BaseClient.rest` |
| `roles` | `public` | `RoleShorter` | `...` | `BaseClient.roles` | `BaseClient.roles` |
| `shards` | `public` | `Map`\<`number`, `Shard`\> | `...` | - | - |
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

### latency

```ts
get latency(): number
```

#### Returns

`number`

#### Source

[seyfert/src/client/workerclient.ts:111](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/workerclient.ts#L111)

***

### proxy

```ts
get proxy(): APIRoutes
```

#### Returns

[`APIRoutes`](../type-aliases/APIRoutes.md)

#### Source

[seyfert/src/client/base.ts:177](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/base.ts#L177)

***

### workerId

```ts
get workerId(): number
```

#### Returns

`number`

#### Source

[seyfert/src/client/workerclient.ts:107](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/workerclient.ts#L107)

## Methods

### execute()

```ts
protected execute(..._options: unknown[]): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`_options` | `unknown`[] |

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseClient.execute`

#### Source

[seyfert/src/client/base.ts:234](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/base.ts#L234)

***

### generateNonce()

```ts
private generateNonce(large: boolean): string
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `large` | `boolean` | `true` |

#### Returns

`string`

#### Source

[seyfert/src/client/workerclient.ts:309](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/workerclient.ts#L309)

***

### generateSendPromise()

```ts
private generateSendPromise<T>(nonce: string, message: string): Promise<T>
```

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `nonce` | `string` | `undefined` |
| `message` | `string` | `'Timeout'` |

#### Returns

`Promise`\<`T`\>

#### Source

[seyfert/src/client/workerclient.ts:316](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/workerclient.ts#L316)

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

### handleManagerMessages()

```ts
protected handleManagerMessages(data: ManagerMessages): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `ManagerMessages` |

#### Returns

`Promise`\<`any`\>

#### Source

[seyfert/src/client/workerclient.ts:160](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/workerclient.ts#L160)

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

[seyfert/src/client/workerclient.ts:147](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/workerclient.ts#L147)

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
protected onPacket(packet: GatewayDispatchPayload, shardId: number): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `packet` | `GatewayDispatchPayload` |
| `shardId` | `number` |

#### Returns

`Promise`\<`void`\>

#### Overrides

`BaseClient.onPacket`

#### Source

[seyfert/src/client/workerclient.ts:338](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/workerclient.ts#L338)

***

### postMessage()

```ts
postMessage(body: any): boolean | void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `any` |

#### Returns

`boolean` \| `void`

#### Source

[seyfert/src/client/workerclient.ts:155](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/workerclient.ts#L155)

***

### setServices()

```ts
setServices(__namedParameters: ServicesOptions & {
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
| `__namedParameters` | `ServicesOptions` & \{ `handlers`: \{ `commands`: `CommandHandler` \| \{ `onCommand`: (`file`: () => ... \| ... \| ...) => `false` \| [`Command`](Command.md) \| [`ContextMenuCommand`](ContextMenuCommand.md) \| [`SubCommand`](SubCommand.md); `onSubCommand`: (`file`: () => [`SubCommand`](SubCommand.md)) => `false` \| [`SubCommand`](SubCommand.md); \}; `components`: `ComponentHandler` \| (`file`: () => [`ComponentCommand`](ComponentCommand.md) \| [`ModalCommand`](ModalCommand.md)) => `false` \| [`ComponentCommand`](ComponentCommand.md) \| [`ModalCommand`](ModalCommand.md); `langs`: [`LangsHandler`](LangsHandler.md) \| (`_locale`: `string`, `file`: `Record`\<`string`, `any`\>) => `false` \| `Record`\<`string`, `any`\>; \} & \{ `events`: (`file`: [`ClientEvent`](../interfaces/ClientEvent.md)) => `false` \| [`ClientEvent`](../interfaces/ClientEvent.md); \}; \} |

#### Returns

`void`

#### Overrides

`BaseClient.setServices`

#### Source

[seyfert/src/client/workerclient.ts:119](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/workerclient.ts#L119)

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
start(options: Omit<DeepPartial<StartOptions>, "token" | "httpConnection" | "connection">): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `Omit`\<`DeepPartial`\<`StartOptions`\>, `"token"` \| `"httpConnection"` \| `"connection"`\> |

#### Returns

`Promise`\<`void`\>

#### Overrides

`BaseClient.start`

#### Source

[seyfert/src/client/workerclient.ts:141](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/workerclient.ts#L141)

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

### tellWorker()

```ts
tellWorker(workerId: number, func: (_: this) => {}): Promise<unknown>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `workerId` | `number` |
| `func` | (`_`: `this`) => \{\} |

#### Returns

`Promise`\<`unknown`\>

#### Source

[seyfert/src/client/workerclient.ts:326](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/workerclient.ts#L326)

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
