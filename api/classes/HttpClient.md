[seyfert](../globals.md) / HttpClient

# Class: HttpClient

## Extends

- `BaseClient`

## Constructors

### new HttpClient()

```ts
new HttpClient(options?: BaseClientOptions): HttpClient
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | `BaseClientOptions` |

#### Returns

[`HttpClient`](HttpClient.md)

#### Overrides

`BaseClient.constructor`

#### Source

[seyfert/src/client/httpclient.ts:36](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/httpclient.ts#L36)

## Properties

| Property | Type | Default value | Inherited from |
| :------ | :------ | :------ | :------ |
| `app?` | `TemplatedApp` | `undefined` | - |
| `cache` | [`Cache`](Cache.md) | `undefined` | `BaseClient.cache` |
| `channels` | `ChannelShorter` | `...` | `BaseClient.channels` |
| `commands?` | `CommandHandler` | `...` | `BaseClient.commands` |
| `components?` | `ComponentHandler` | `...` | `BaseClient.components` |
| `debugger?` | [`Logger`](Logger.md) | `undefined` | `BaseClient.debugger` |
| `emojis` | `EmojiShorter` | `...` | `BaseClient.emojis` |
| `guilds` | `GuildShorter` | `...` | `BaseClient.guilds` |
| `interactions` | `InteractionShorter` | `...` | `BaseClient.interactions` |
| `langs?` | [`LangsHandler`](LangsHandler.md) | `...` | `BaseClient.langs` |
| `logger` | [`Logger`](Logger.md) | `...` | `BaseClient.logger` |
| `members` | `MemberShorter` | `...` | `BaseClient.members` |
| `messages` | `MessageShorter` | `...` | `BaseClient.messages` |
| `middlewares?` | `Record`\<`string`, [`MiddlewareContext`](../type-aliases/MiddlewareContext.md)\> | `undefined` | `BaseClient.middlewares` |
| `options` | `BaseClientOptions` | `undefined` | `BaseClient.options` |
| `publicKey` | `string` | `undefined` | - |
| `publicKeyHex` | `Buffer` | `undefined` | - |
| `reactions` | `ReactionShorter` | `...` | `BaseClient.reactions` |
| `rest` | [`ApiHandler`](ApiHandler.md) | `undefined` | `BaseClient.rest` |
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
protected execute(options: DeepPartial<{
  port: number;
  publicKey: string;
  useUWS: boolean;
}>): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `DeepPartial`\<\{ `port`: `number`; `publicKey`: `string`; `useUWS`: `boolean`; \}\> |

#### Returns

`Promise`\<`void`\>

#### Overrides

`BaseClient.execute`

#### Source

[seyfert/src/client/httpclient.ts:69](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/httpclient.ts#L69)

***

### fetch()

```ts
fetch(req: Request): Promise<Response>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `req` | `Request` |

#### Returns

`Promise`\<`Response`\>

#### Source

[seyfert/src/client/httpclient.ts:146](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/httpclient.ts#L146)

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
protected onPacket(res: HttpResponse, req: HttpRequest): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `res` | `HttpResponse` |
| `req` | `HttpRequest` |

#### Returns

`Promise`\<`void`\>

#### Overrides

`BaseClient.onPacket`

#### Source

[seyfert/src/client/httpclient.ts:216](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/httpclient.ts#L216)

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
start(options: DeepPartial<Omit<StartOptions, "eventsDir" | "connection">>): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `DeepPartial`\<`Omit`\<`StartOptions`, `"eventsDir"` \| `"connection"`\>\> |

#### Returns

`Promise`\<`void`\>

#### Overrides

`BaseClient.start`

#### Source

[seyfert/src/client/httpclient.ts:106](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/httpclient.ts#L106)

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

### verifySignature()

```ts
protected verifySignature(res: HttpResponse, req: HttpRequest): Promise<undefined | APIInteraction>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `res` | `HttpResponse` |
| `req` | `HttpRequest` |

#### Returns

`Promise`\<`undefined` \| `APIInteraction`\>

#### Source

[seyfert/src/client/httpclient.ts:130](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/httpclient.ts#L130)

***

### verifySignatureGenericRequest()

```ts
protected verifySignatureGenericRequest(req: Request): Promise<undefined | APIInteraction>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `req` | `Request` |

#### Returns

`Promise`\<`undefined` \| `APIInteraction`\>

#### Source

[seyfert/src/client/httpclient.ts:113](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/httpclient.ts#L113)

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

***

### readJson()

```ts
static protected readJson<T>(res: HttpResponse): Promise<T>
```

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `Record`\<`string`, `any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `res` | `HttpResponse` |

#### Returns

`Promise`\<`T`\>

#### Source

[seyfert/src/client/httpclient.ts:46](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/httpclient.ts#L46)
