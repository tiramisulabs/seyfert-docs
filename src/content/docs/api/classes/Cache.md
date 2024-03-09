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

[seyfert/src/cache/index.ts:102](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/index.ts#L102)

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
| `overwrites?` | `public` | `Overwrites` |
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

[seyfert/src/cache/index.ts:182](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/index.ts#L182)

***

### hasDirectMessages

```ts
get hasDirectMessages(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/cache/index.ts:202](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/index.ts#L202)

***

### hasEmojisAndStickersIntent

```ts
get hasEmojisAndStickersIntent(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/cache/index.ts:190](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/index.ts#L190)

***

### hasGuildMembersIntent

```ts
get hasGuildMembersIntent(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/cache/index.ts:186](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/index.ts#L186)

***

### hasGuildsIntent

```ts
get hasGuildsIntent(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/cache/index.ts:174](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/index.ts#L174)

***

### hasPrenseceUpdates

```ts
get hasPrenseceUpdates(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/cache/index.ts:198](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/index.ts#L198)

***

### hasRolesIntent

```ts
get hasRolesIntent(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/cache/index.ts:178](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/index.ts#L178)

***

### hasVoiceStatesIntent

```ts
get hasVoiceStatesIntent(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/cache/index.ts:194](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/index.ts#L194)

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

[seyfert/src/cache/index.ts:206](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/index.ts#L206)

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

[seyfert/src/cache/index.ts:278](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/index.ts#L278)

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

[seyfert/src/cache/index.ts:365](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/index.ts#L365)

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

[seyfert/src/cache/index.ts:170](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/index.ts#L170)

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

[seyfert/src/cache/index.ts:452](https://github.com/potoland/potocuit/blob/fe122a1/src/cache/index.ts#L452)
