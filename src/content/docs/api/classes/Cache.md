---
editUrl: false
next: false
prev: false
title: "Cache"
---

## Constructors

### new Cache(intents, adapter, asyncCache, disabledCache, client)

```ts
new Cache(
   intents: number, 
   adapter: Adapter, 
   asyncCache: boolean, 
   disabledCache: (NonGuildBased | GuildBased | GuildRelated)[], 
   client?: BaseClient): Cache
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `intents` | `number` | `undefined` |
| `adapter` | [`Adapter`](/api/interfaces/adapter/) | `undefined` |
| `asyncCache` | `boolean` | `false` |
| `disabledCache` | ([`NonGuildBased`](/api/type-aliases/nonguildbased/) \| [`GuildBased`](/api/type-aliases/guildbased/) \| [`GuildRelated`](/api/type-aliases/guildrelated/))[] | `[]` |
| `client`? | `BaseClient` | `undefined` |

#### Returns

[`Cache`](/api/classes/cache/)

#### Source

[seyfert/src/cache/index.ts:92](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/index.ts#L92)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `adapter` | `public` | [`Adapter`](/api/interfaces/adapter/) |
| `asyncCache` | `public` | `boolean` |
| `channels?` | `public` | `Channels` |
| `disabledCache` | `readonly` | ([`NonGuildBased`](/api/type-aliases/nonguildbased/) \| [`GuildBased`](/api/type-aliases/guildbased/) \| [`GuildRelated`](/api/type-aliases/guildrelated/))[] |
| `emojis?` | `public` | `Emojis` |
| `guilds?` | `public` | `Guilds` |
| `intents` | `public` | `number` |
| `members?` | `public` | `Members` |
| `presences?` | `public` | `Presences` |
| `roles?` | `public` | `Roles` |
| `stageInstances?` | `public` | `StageInstances` |
| `stickers?` | `public` | `Stickers` |
| `threads?` | `public` | `Threads` |
| `users?` | `public` | `Users` |
| `voiceStates?` | `public` | `VoiceStates` |

## Accessors

### hasChannelsIntent

```ts
get hasChannelsIntent(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/cache/index.ts:169](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/index.ts#L169)

***

### hasDirectMessages

```ts
get hasDirectMessages(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/cache/index.ts:189](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/index.ts#L189)

***

### hasEmojisAndStickersIntent

```ts
get hasEmojisAndStickersIntent(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/cache/index.ts:177](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/index.ts#L177)

***

### hasGuildMembersIntent

```ts
get hasGuildMembersIntent(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/cache/index.ts:173](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/index.ts#L173)

***

### hasGuildsIntent

```ts
get hasGuildsIntent(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/cache/index.ts:161](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/index.ts#L161)

***

### hasPrenseceUpdates

```ts
get hasPrenseceUpdates(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/cache/index.ts:185](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/index.ts#L185)

***

### hasRolesIntent

```ts
get hasRolesIntent(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/cache/index.ts:165](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/index.ts#L165)

***

### hasVoiceStatesIntent

```ts
get hasVoiceStatesIntent(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/cache/index.ts:181](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/index.ts#L181)

## Methods

### bulkGet()

```ts
bulkGet(keys: (readonly [NonGuildBased | GuildRelated, string] | readonly [GuildBased, string, string])[]): Promise<Partial<Object>>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `keys` | (readonly [[`NonGuildBased`](/api/type-aliases/nonguildbased/) \| [`GuildRelated`](/api/type-aliases/guildrelated/), `string`] \| readonly [[`GuildBased`](/api/type-aliases/guildbased/), `string`, `string`])[] |

#### Returns

`Promise`\<`Partial`\<`Object`\>\>

#### Source

[seyfert/src/cache/index.ts:193](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/index.ts#L193)

***

### bulkPatch()

```ts
bulkPatch(keys: (readonly [NonGuildBased, any, string] | readonly [GuildBased | GuildRelated, any, string, string])[]): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `keys` | (readonly [[`NonGuildBased`](/api/type-aliases/nonguildbased/), `any`, `string`] \| readonly [[`GuildBased`](/api/type-aliases/guildbased/) \| [`GuildRelated`](/api/type-aliases/guildrelated/), `any`, `string`, `string`])[] |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/cache/index.ts:264](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/index.ts#L264)

***

### bulkSet()

```ts
bulkSet(keys: (readonly [NonGuildBased, any, string] | readonly [GuildBased | GuildRelated, any, string, string])[]): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `keys` | (readonly [[`NonGuildBased`](/api/type-aliases/nonguildbased/), `any`, `string`] \| readonly [[`GuildBased`](/api/type-aliases/guildbased/) \| [`GuildRelated`](/api/type-aliases/guildrelated/), `any`, `string`, `string`])[] |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/cache/index.ts:348](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/index.ts#L348)

***

### hasIntent()

```ts
hasIntent(intent: 
  | "Guilds"
  | "GuildMembers"
  | "GuildModeration"
  | "GuildBans"
  | "GuildEmojisAndStickers"
  | "GuildIntegrations"
  | "GuildWebhooks"
  | "GuildInvites"
  | "GuildVoiceStates"
  | "GuildPresences"
  | "GuildMessages"
  | "GuildMessageReactions"
  | "GuildMessageTyping"
  | "DirectMessages"
  | "DirectMessageReactions"
  | "DirectMessageTyping"
  | "MessageContent"
  | "GuildScheduledEvents"
  | "AutoModerationConfiguration"
  | "AutoModerationExecution"): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `intent` |  \| `"Guilds"` \| `"GuildMembers"` \| `"GuildModeration"` \| `"GuildBans"` \| `"GuildEmojisAndStickers"` \| `"GuildIntegrations"` \| `"GuildWebhooks"` \| `"GuildInvites"` \| `"GuildVoiceStates"` \| `"GuildPresences"` \| `"GuildMessages"` \| `"GuildMessageReactions"` \| `"GuildMessageTyping"` \| `"DirectMessages"` \| `"DirectMessageReactions"` \| `"DirectMessageTyping"` \| `"MessageContent"` \| `"GuildScheduledEvents"` \| `"AutoModerationConfiguration"` \| `"AutoModerationExecution"` |

#### Returns

`boolean`

#### Source

[seyfert/src/cache/index.ts:157](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/index.ts#L157)

***

### onPacket()

```ts
onPacket(event: GatewayDispatchPayload): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | `GatewayDispatchPayload` |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/cache/index.ts:432](https://github.com/potoland/potocuit/blob/c4fb0c1/src/cache/index.ts#L432)
