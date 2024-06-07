[seyfert](../globals.md) / MessagesMethods

# Class: MessagesMethods

## Extends

- [`BaseChannel`](BaseChannel.md)\<`ChannelType`\>.`DiscordBase`

## Extended by

- [`TextBaseGuildChannel`](TextBaseGuildChannel.md)

## Constructors

### new MessagesMethods()

```ts
new MessagesMethods(client: UsingClient, data: {
  id: string;
 }): MessagesMethods
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) | - |
| `data` | `object` | Unique ID of the object |
| `data.id` | `string` | - |

#### Returns

[`MessagesMethods`](MessagesMethods.md)

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`constructor`](BaseChannel.md#constructors)

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:7](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/DiscordBase.ts#L7)

## Properties

| Property | Modifier | Type | Default value | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | `undefined` | [`BaseChannel`](BaseChannel.md).`client` |
| `id` | `public` | `string` | `undefined` | [`BaseChannel`](BaseChannel.md).`id` |
| `messages` | `public` | \{ `crosspost`: (`messageId`: `string`, `reason`?: `string`) => `Promise`\<[`Message`](Message.md)\>; `delete`: (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`void`\>; `edit`: (`messageId`: `string`, `body`: `Omit`\<`RESTPatchAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](Message.md)\>; `fetch`: (`messageId`: `string`) => `Promise`\<[`Message`](Message.md)\>; `purge`: (`messages`: `string`[], `reason`?: `string`) => `Promise`\<`undefined` \| `void`\>; `write`: (`body`: `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps`) => `Promise`\<[`Message`](Message.md)\>; \} | `...` | - |
| `messages.crosspost` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<[`Message`](Message.md)\> | `...` | - |
| `messages.delete` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`void`\> | `...` | - |
| `messages.edit` | `public` | (`messageId`: `string`, `body`: `Omit`\<`RESTPatchAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](Message.md)\> | `...` | - |
| `messages.fetch` | `public` | (`messageId`: `string`) => `Promise`\<[`Message`](Message.md)\> | `...` | - |
| `messages.purge` | `public` | (`messages`: `string`[], `reason`?: `string`) => `Promise`\<`undefined` \| `void`\> | `...` | - |
| `messages.write` | `public` | (`body`: `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps`) => `Promise`\<[`Message`](Message.md)\> | `...` | - |
| `pins` | `public` | \{ `delete`: (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\>; `fetch`: () => `Promise`\<[`Message`](Message.md)[]\>; `set`: (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\>; \} | `...` | - |
| `pins.delete` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | `...` | - |
| `pins.fetch` | `public` | () => `Promise`\<[`Message`](Message.md)[]\> | `...` | - |
| `pins.set` | `public` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | `...` | - |
| `reactions` | `public` | \{ `add`: (`messageId`: `string`, `emoji`: `EmojiResolvable`) => `Promise`\<`void`\>; `delete`: (`messageId`: `string`, `emoji`: `EmojiResolvable`, `userId`: `string`) => `Promise`\<`void`\>; `fetch`: (`messageId`: `string`, `emoji`: `EmojiResolvable`, `query`?: `RESTGetAPIChannelMessageReactionUsersQuery`) => `Promise`\<[`User`](User.md)[]\>; `purge`: (`messageId`: `string`, `emoji`?: `EmojiResolvable`) => `Promise`\<`void`\>; \} | `...` | - |
| `reactions.add` | `public` | (`messageId`: `string`, `emoji`: `EmojiResolvable`) => `Promise`\<`void`\> | `...` | - |
| `reactions.delete` | `public` | (`messageId`: `string`, `emoji`: `EmojiResolvable`, `userId`: `string`) => `Promise`\<`void`\> | `...` | - |
| `reactions.fetch` | `public` | (`messageId`: `string`, `emoji`: `EmojiResolvable`, `query`?: `RESTGetAPIChannelMessageReactionUsersQuery`) => `Promise`\<[`User`](User.md)[]\> | `...` | - |
| `reactions.purge` | `public` | (`messageId`: `string`, `emoji`?: `EmojiResolvable`) => `Promise`\<`void`\> | `...` | - |
| `type` | `public` | `ChannelType` | `undefined` | [`BaseChannel`](BaseChannel.md).`type` |

## Accessors

### createdAt

```ts
get createdAt(): Date
```

createdAt gets the creation Date instace of the current object.

#### Returns

`Date`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:27](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/DiscordBase.ts#L27)

***

### createdTimestamp

```ts
get createdTimestamp(): number
```

Create a timestamp for the current object.

#### Returns

`number`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:20](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/DiscordBase.ts#L20)

***

### url

```ts
get url(): string
```

The URL to the channel

#### Returns

`string`

#### Source

[seyfert/src/structures/channels.ts:60](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L60)

## Methods

### delete()

```ts
delete(reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`delete`](BaseChannel.md#delete)

#### Source

[seyfert/src/structures/channels.ts:68](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L68)

***

### edit()

```ts
edit(body: RESTPatchAPIChannelJSONBody, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `RESTPatchAPIChannelJSONBody` |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`edit`](BaseChannel.md#edit)

#### Source

[seyfert/src/structures/channels.ts:72](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L72)

***

### fetch()

```ts
fetch(force: boolean): Promise<AllChannels>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`fetch`](BaseChannel.md#fetch)

#### Source

[seyfert/src/structures/channels.ts:64](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L64)

***

### is()

```ts
is<T>(channelTypes: T): this is IChannelTypes[T[number]]
```

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* keyof `IChannelTypes`[] |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channelTypes` | `T` |

#### Returns

`this is IChannelTypes[T[number]]`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`is`](BaseChannel.md#is)

#### Source

[seyfert/src/structures/channels.ts:135](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L135)

***

### isCategory()

```ts
isCategory(): this is CategoryChannel
```

#### Returns

`this is CategoryChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isCategory`](BaseChannel.md#iscategory)

#### Source

[seyfert/src/structures/channels.ts:115](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L115)

***

### isDM()

```ts
isDM(): this is DMChannel
```

#### Returns

`this is DMChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isDM`](BaseChannel.md#isdm)

#### Source

[seyfert/src/structures/channels.ts:91](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L91)

***

### isDirectory()

```ts
isDirectory(): this is DirectoryChannel
```

#### Returns

`this is DirectoryChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isDirectory`](BaseChannel.md#isdirectory)

#### Source

[seyfert/src/structures/channels.ts:103](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L103)

***

### isForum()

```ts
isForum(): this is ForumChannel
```

#### Returns

`this is ForumChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isForum`](BaseChannel.md#isforum)

#### Source

[seyfert/src/structures/channels.ts:95](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L95)

***

### isGuildTextable()

```ts
isGuildTextable(): this is AllGuildTextableChannels
```

#### Returns

`this is AllGuildTextableChannels`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isGuildTextable`](BaseChannel.md#isguildtextable)

#### Source

[seyfert/src/structures/channels.ts:127](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L127)

***

### isMedia()

```ts
isMedia(): this is MediaChannel
```

#### Returns

`this is MediaChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isMedia`](BaseChannel.md#ismedia)

#### Source

[seyfert/src/structures/channels.ts:87](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L87)

***

### isNews()

```ts
isNews(): this is NewsChannel
```

#### Returns

`this is NewsChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isNews`](BaseChannel.md#isnews)

#### Source

[seyfert/src/structures/channels.ts:119](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L119)

***

### isStage()

```ts
isStage(): this is StageChannel
```

#### Returns

`this is StageChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isStage`](BaseChannel.md#isstage)

#### Source

[seyfert/src/structures/channels.ts:83](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L83)

***

### isTextGuild()

```ts
isTextGuild(): this is TextGuildChannel
```

#### Returns

`this is TextGuildChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isTextGuild`](BaseChannel.md#istextguild)

#### Source

[seyfert/src/structures/channels.ts:111](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L111)

***

### isTextable()

```ts
isTextable(): this is AllTextableChannels
```

#### Returns

`this is AllTextableChannels`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isTextable`](BaseChannel.md#istextable)

#### Source

[seyfert/src/structures/channels.ts:123](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L123)

***

### isThread()

```ts
isThread(): this is ThreadChannel
```

#### Returns

`this is ThreadChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isThread`](BaseChannel.md#isthread)

#### Source

[seyfert/src/structures/channels.ts:99](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L99)

***

### isThreadOnly()

```ts
isThreadOnly(): this is MediaChannel | ForumChannel
```

#### Returns

this is MediaChannel \| ForumChannel

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isThreadOnly`](BaseChannel.md#isthreadonly)

#### Source

[seyfert/src/structures/channels.ts:131](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L131)

***

### isVoice()

```ts
isVoice(): this is VoiceChannel
```

#### Returns

`this is VoiceChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isVoice`](BaseChannel.md#isvoice)

#### Source

[seyfert/src/structures/channels.ts:107](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L107)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`toString`](BaseChannel.md#tostring)

#### Source

[seyfert/src/structures/channels.ts:79](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L79)

***

### typing()

```ts
typing(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/structures/channels.ts:215](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L215)

***

### messages()

```ts
static messages(ctx: {
  channelId: string;
  client: UsingClient;
 }): {
  crosspost: (messageId: string, reason?: string) => Promise<Message>;
  delete: (messageId: string, reason?: string) => Promise<void>;
  edit: (messageId: string, body: Omit<RESTPatchAPIChannelMessageJSONBody, "components" | "embeds"> & ResolverProps) => Promise<Message>;
  fetch: (messageId: string) => Promise<Message>;
  purge: (messages: string[], reason?: string) => Promise<undefined | void>;
  write: (body: Omit<RESTPostAPIChannelMessageJSONBody, "components" | "embeds" | "poll"> & SendResolverProps) => Promise<Message>;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ctx` | `object` |
| `ctx.channelId` | `string` |
| `ctx.client` | [`UsingClient`](../interfaces/UsingClient.md) |

#### Returns

```ts
{
  crosspost: (messageId: string, reason?: string) => Promise<Message>;
  delete: (messageId: string, reason?: string) => Promise<void>;
  edit: (messageId: string, body: Omit<RESTPatchAPIChannelMessageJSONBody, "components" | "embeds"> & ResolverProps) => Promise<Message>;
  fetch: (messageId: string) => Promise<Message>;
  purge: (messages: string[], reason?: string) => Promise<undefined | void>;
  write: (body: Omit<RESTPostAPIChannelMessageJSONBody, "components" | "embeds" | "poll"> & SendResolverProps) => Promise<Message>;
}
```

| Member | Type | Value |
| :------ | :------ | :------ |
| `crosspost` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<[`Message`](Message.md)\> | ... |
| `delete` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`void`\> | ... |
| `edit` | (`messageId`: `string`, `body`: `Omit`\<`RESTPatchAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps`) => `Promise`\<[`Message`](Message.md)\> | ... |
| `fetch` | (`messageId`: `string`) => `Promise`\<[`Message`](Message.md)\> | ... |
| `purge` | (`messages`: `string`[], `reason`?: `string`) => `Promise`\<`undefined` \| `void`\> | ... |
| `write` | (`body`: `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps`) => `Promise`\<[`Message`](Message.md)\> | ... |

#### Source

[seyfert/src/structures/channels.ts:223](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L223)

***

### pins()

```ts
static pins(ctx: {
  channelId: string;
  client: UsingClient;
 }): {
  delete: (messageId: string, reason?: string) => Promise<never>;
  fetch: () => Promise<Message[]>;
  set: (messageId: string, reason?: string) => Promise<never>;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ctx` | `object` |
| `ctx.channelId` | `string` |
| `ctx.client` | [`UsingClient`](../interfaces/UsingClient.md) |

#### Returns

```ts
{
  delete: (messageId: string, reason?: string) => Promise<never>;
  fetch: () => Promise<Message[]>;
  set: (messageId: string, reason?: string) => Promise<never>;
}
```

| Member | Type | Value |
| :------ | :------ | :------ |
| `delete` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | ... |
| `fetch` | () => `Promise`\<[`Message`](Message.md)[]\> | ... |
| `set` | (`messageId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | ... |

#### Source

[seyfert/src/structures/channels.ts:247](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L247)

***

### reactions()

```ts
static reactions(ctx: {
  channelId: string;
  client: UsingClient;
 }): {
  add: (messageId: string, emoji: EmojiResolvable) => Promise<void>;
  delete: (messageId: string, emoji: EmojiResolvable, userId: string) => Promise<void>;
  fetch: (messageId: string, emoji: EmojiResolvable, query?: RESTGetAPIChannelMessageReactionUsersQuery) => Promise<User[]>;
  purge: (messageId: string, emoji?: EmojiResolvable) => Promise<void>;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ctx` | `object` |
| `ctx.channelId` | `string` |
| `ctx.client` | [`UsingClient`](../interfaces/UsingClient.md) |

#### Returns

```ts
{
  add: (messageId: string, emoji: EmojiResolvable) => Promise<void>;
  delete: (messageId: string, emoji: EmojiResolvable, userId: string) => Promise<void>;
  fetch: (messageId: string, emoji: EmojiResolvable, query?: RESTGetAPIChannelMessageReactionUsersQuery) => Promise<User[]>;
  purge: (messageId: string, emoji?: EmojiResolvable) => Promise<void>;
}
```

| Member | Type | Value |
| :------ | :------ | :------ |
| `add` | (`messageId`: `string`, `emoji`: `EmojiResolvable`) => `Promise`\<`void`\> | ... |
| `delete` | (`messageId`: `string`, `emoji`: `EmojiResolvable`, `userId`: `string`) => `Promise`\<`void`\> | ... |
| `fetch` | (`messageId`: `string`, `emoji`: `EmojiResolvable`, `query`?: `RESTGetAPIChannelMessageReactionUsersQuery`) => `Promise`\<[`User`](User.md)[]\> | ... |
| `purge` | (`messageId`: `string`, `emoji`?: `EmojiResolvable`) => `Promise`\<`void`\> | ... |

#### Source

[seyfert/src/structures/channels.ts:236](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L236)

***

### transformMessageBody()

```ts
static transformMessageBody<T>(
   body: Omit<RESTPostAPIChannelMessageJSONBody, "components" | "embeds" | "poll"> & SendResolverProps | Omit<RESTPatchAPIChannelMessageJSONBody, "components" | "embeds"> & ResolverProps, 
   files: undefined | RawFile[], 
   self: UsingClient): T
```

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps` \| `Omit`\<`RESTPatchAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps` |
| `files` | `undefined` \| [`RawFile`](../interfaces/RawFile.md)[] |
| `self` | [`UsingClient`](../interfaces/UsingClient.md) |

#### Returns

`T`

#### Source

[seyfert/src/structures/channels.ts:255](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L255)
