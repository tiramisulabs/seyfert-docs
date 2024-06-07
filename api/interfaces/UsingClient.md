[seyfert](../globals.md) / UsingClient

# Interface: UsingClient

## Extends

- `BaseClient`

## Properties

| Property | Type | Default value | Inherited from |
| :------ | :------ | :------ | :------ |
| `cache` | [`Cache`](../classes/Cache.md) | `undefined` | `BaseClient.cache` |
| `channels` | `ChannelShorter` | `...` | `BaseClient.channels` |
| `commands?` | `CommandHandler` | `...` | `BaseClient.commands` |
| `components?` | `ComponentHandler` | `...` | `BaseClient.components` |
| `debugger?` | [`Logger`](../classes/Logger.md) | `undefined` | `BaseClient.debugger` |
| `emojis` | `EmojiShorter` | `...` | `BaseClient.emojis` |
| `guilds` | `GuildShorter` | `...` | `BaseClient.guilds` |
| `interactions` | `InteractionShorter` | `...` | `BaseClient.interactions` |
| `langs?` | [`LangsHandler`](../classes/LangsHandler.md) | `...` | `BaseClient.langs` |
| `logger` | [`Logger`](../classes/Logger.md) | `...` | `BaseClient.logger` |
| `members` | `MemberShorter` | `...` | `BaseClient.members` |
| `messages` | `MessageShorter` | `...` | `BaseClient.messages` |
| `middlewares?` | `Record`\<`string`, [`MiddlewareContext`](../type-aliases/MiddlewareContext.md)\> | `undefined` | `BaseClient.middlewares` |
| `options` | `BaseClientOptions` | `undefined` | `BaseClient.options` |
| `reactions` | `ReactionShorter` | `...` | `BaseClient.reactions` |
| `rest` | [`ApiHandler`](../classes/ApiHandler.md) | `undefined` | `BaseClient.rest` |
| `roles` | `RoleShorter` | `...` | `BaseClient.roles` |
| `templates` | `TemplateShorter` | `...` | `BaseClient.templates` |
| `threads` | `ThreadShorter` | `...` | `BaseClient.threads` |
| `users` | `UsersShorter` | `...` | `BaseClient.users` |
| `webhooks` | `WebhookShorter` | `...` | `BaseClient.webhooks` |

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
protected onPacket(..._packet: unknown[]): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`_packet` | `unknown`[] |

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseClient.onPacket`

#### Source

[seyfert/src/client/base.ts:276](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/base.ts#L276)

***

### setServices()

```ts
setServices(__namedParameters: ServicesOptions): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | `ServicesOptions` |

#### Returns

`void`

#### Inherited from

`BaseClient.setServices`

#### Source

[seyfert/src/client/base.ts:181](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/base.ts#L181)

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
start(options: Pick<DeepPartial<StartOptions>, 
  | "token"
  | "langsDir"
  | "commandsDir"
  | "componentsDir"
| "connection">): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `Pick`\<`DeepPartial`\<`StartOptions`\>, \| `"token"` \| `"langsDir"` \| `"commandsDir"` \| `"componentsDir"` \| `"connection"`\> |

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseClient.start`

#### Source

[seyfert/src/client/base.ts:243](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/base.ts#L243)

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

[`__InternalParseLocale`](../type-aliases/InternalParseLocale.md)\<[`DefaultLocale`](DefaultLocale.md)\> & \{
  `get`: [`DefaultLocale`](DefaultLocale.md);
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
