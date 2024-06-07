[seyfert](../globals.md) / Cache

# Class: Cache

## Constructors

### new Cache()

```ts
new Cache(
   intents: number, 
   adapter: Adapter, 
   disabledCache: (NonGuildBased | GuildBased | GuildRelated)[], 
   client?: UsingClient): Cache
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `intents` | `number` | `undefined` |
| `adapter` | [`Adapter`](../interfaces/Adapter.md) | `undefined` |
| `disabledCache` | ([`NonGuildBased`](../type-aliases/NonGuildBased.md) \| [`GuildBased`](../type-aliases/GuildBased.md) \| [`GuildRelated`](../type-aliases/GuildRelated.md))[] | `[]` |
| `client`? | [`UsingClient`](../interfaces/UsingClient.md) | `undefined` |

#### Returns

[`Cache`](Cache.md)

#### Source

[seyfert/src/cache/index.ts:97](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/index.ts#L97)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `adapter` | `public` | [`Adapter`](../interfaces/Adapter.md) | `undefined` |
| `channels?` | `public` | `Channels` | `undefined` |
| `disabledCache` | `readonly` | ([`NonGuildBased`](../type-aliases/NonGuildBased.md) \| [`GuildBased`](../type-aliases/GuildBased.md) \| [`GuildRelated`](../type-aliases/GuildRelated.md))[] | `[]` |
| `emojis?` | `public` | `Emojis` | `undefined` |
| `guilds?` | `public` | `Guilds` | `undefined` |
| `intents` | `public` | `number` | `undefined` |
| `members?` | `public` | `Members` | `undefined` |
| `messages?` | `public` | `Messages` | `undefined` |
| `overwrites?` | `public` | `Overwrites` | `undefined` |
| `presences?` | `public` | `Presences` | `undefined` |
| `roles?` | `public` | `Roles` | `undefined` |
| `stageInstances?` | `public` | `StageInstances` | `undefined` |
| `stickers?` | `public` | `Stickers` | `undefined` |
| `threads?` | `public` | `Threads` | `undefined` |
| `users?` | `public` | `Users` | `undefined` |
| `voiceStates?` | `public` | `VoiceStates` | `undefined` |

## Accessors

### hasChannelsIntent

```ts
get hasChannelsIntent(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/cache/index.ts:185](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/index.ts#L185)

***

### hasDirectMessages

```ts
get hasDirectMessages(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/cache/index.ts:205](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/index.ts#L205)

***

### hasEmojisAndStickersIntent

```ts
get hasEmojisAndStickersIntent(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/cache/index.ts:193](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/index.ts#L193)

***

### hasGuildMembersIntent

```ts
get hasGuildMembersIntent(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/cache/index.ts:189](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/index.ts#L189)

***

### hasGuildsIntent

```ts
get hasGuildsIntent(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/cache/index.ts:177](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/index.ts#L177)

***

### hasPrenseceUpdates

```ts
get hasPrenseceUpdates(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/cache/index.ts:201](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/index.ts#L201)

***

### hasRolesIntent

```ts
get hasRolesIntent(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/cache/index.ts:181](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/index.ts#L181)

***

### hasVoiceStatesIntent

```ts
get hasVoiceStatesIntent(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/cache/index.ts:197](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/index.ts#L197)

## Methods

### bulkGet()

```ts
bulkGet(keys: (readonly [NonGuildBased | GuildRelated, string] | readonly [GuildBased, string, string])[]): Promise<Partial<{
  channels: NonNullable<ReturnCache<undefined | AllChannels>>[];
  emojis: GuildEmoji[];
  guilds: Guild<"cached">[];
  members: GuildMember[];
  messages: Message[];
  overwrites: {
     allow: PermissionsBitField;
     deny: PermissionsBitField;
     guildId: string;
     id: string;
     type: number;
    }[][];
  presences: Omit<GatewayPresenceUpdate, "user"> & {
     id: string;
    } & {
     guild_id: string;
    }[];
  roles: GuildRole[];
  stageInstances: APIStageInstance & {
     guild_id: string;
    }[];
  stickers: Sticker[];
  threads: ThreadChannel[];
  users: User[];
  voiceStates: VoiceState[];
}>>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `keys` | (readonly [[`NonGuildBased`](../type-aliases/NonGuildBased.md) \| [`GuildRelated`](../type-aliases/GuildRelated.md), `string`] \| readonly [[`GuildBased`](../type-aliases/GuildBased.md), `string`, `string`])[] |

#### Returns

`Promise`\<`Partial`\<\{
  `channels`: `NonNullable`\<[`ReturnCache`](../type-aliases/ReturnCache.md)\<`undefined` \| [`AllChannels`](../type-aliases/AllChannels.md)\>\>[];
  `emojis`: [`GuildEmoji`](GuildEmoji.md)[];
  `guilds`: [`Guild`](Guild.md)\<`"cached"`\>[];
  `members`: [`GuildMember`](GuildMember.md)[];
  `messages`: [`Message`](Message.md)[];
  `overwrites`: \{
     `allow`: `PermissionsBitField`;
     `deny`: `PermissionsBitField`;
     `guildId`: `string`;
     `id`: `string`;
     `type`: `number`;
    \}[][];
  `presences`: `Omit`\<`GatewayPresenceUpdate`, `"user"`\> & \{
     `id`: `string`;
    \} & \{
     `guild_id`: `string`;
    \}[];
  `roles`: [`GuildRole`](GuildRole.md)[];
  `stageInstances`: `APIStageInstance` & \{
     `guild_id`: `string`;
    \}[];
  `stickers`: [`Sticker`](Sticker.md)[];
  `threads`: [`ThreadChannel`](ThreadChannel.md)[];
  `users`: [`User`](User.md)[];
  `voiceStates`: [`VoiceState`](VoiceState.md)[];
 \}\>\>

#### Source

[seyfert/src/cache/index.ts:209](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/index.ts#L209)

***

### bulkPatch()

```ts
bulkPatch(keys: (readonly [NonGuildBased, any, string] | readonly [GuildBased | GuildRelated, any, string, string])[]): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `keys` | (readonly [[`NonGuildBased`](../type-aliases/NonGuildBased.md), `any`, `string`] \| readonly [[`GuildBased`](../type-aliases/GuildBased.md) \| [`GuildRelated`](../type-aliases/GuildRelated.md), `any`, `string`, `string`])[] |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/cache/index.ts:282](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/index.ts#L282)

***

### bulkSet()

```ts
bulkSet(keys: (readonly [NonGuildBased, any, string] | readonly [GuildBased | GuildRelated, any, string, string])[]): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `keys` | (readonly [[`NonGuildBased`](../type-aliases/NonGuildBased.md), `any`, `string`] \| readonly [[`GuildBased`](../type-aliases/GuildBased.md) \| [`GuildRelated`](../type-aliases/GuildRelated.md), `any`, `string`, `string`])[] |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/cache/index.ts:373](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/index.ts#L373)

***

### flush()

```ts
flush(): void
```

#### Returns

`void`

#### Source

[seyfert/src/cache/index.ts:168](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/index.ts#L168)

***

### hasIntent()

```ts
hasIntent(intent: 
  | "DirectMessages"
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
  | "DirectMessageReactions"
  | "DirectMessageTyping"
  | "MessageContent"
  | "GuildScheduledEvents"
  | "AutoModerationConfiguration"
  | "AutoModerationExecution"
  | "GuildMessagePolls"
  | "DirectMessagePolls"): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `intent` |  \| `"DirectMessages"` \| `"Guilds"` \| `"GuildMembers"` \| `"GuildModeration"` \| `"GuildBans"` \| `"GuildEmojisAndStickers"` \| `"GuildIntegrations"` \| `"GuildWebhooks"` \| `"GuildInvites"` \| `"GuildVoiceStates"` \| `"GuildPresences"` \| `"GuildMessages"` \| `"GuildMessageReactions"` \| `"GuildMessageTyping"` \| `"DirectMessageReactions"` \| `"DirectMessageTyping"` \| `"MessageContent"` \| `"GuildScheduledEvents"` \| `"AutoModerationConfiguration"` \| `"AutoModerationExecution"` \| `"GuildMessagePolls"` \| `"DirectMessagePolls"` |

#### Returns

`boolean`

#### Source

[seyfert/src/cache/index.ts:173](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/index.ts#L173)

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

[seyfert/src/cache/index.ts:464](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/cache/index.ts#L464)
