[seyfert](../globals.md) / EventHandler

# Class: EventHandler

## Extends

- `BaseHandler`

## Constructors

### new EventHandler()

```ts
new EventHandler(client: Client<boolean> | WorkerClient<boolean>): EventHandler
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md)\<`boolean`\> \| [`WorkerClient`](WorkerClient.md)\<`boolean`\> |

#### Returns

[`EventHandler`](EventHandler.md)

#### Overrides

`BaseHandler.constructor`

#### Source

[seyfert/src/events/handler.ts:18](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/events/handler.ts#L18)

## Properties

| Property | Modifier | Type | Default value | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `client` | `protected` | [`Client`](Client.md)\<`boolean`\> \| [`WorkerClient`](WorkerClient.md)\<`boolean`\> | `undefined` | - | - |
| `logger` | `protected` | [`Logger`](Logger.md) | `undefined` | The logger instance. | `BaseHandler.logger` |
| `values` | `public` | `Partial`\<`Record`\< \| `"APPLICATION_COMMAND_PERMISSIONS_UPDATE"` \| `"CHANNEL_CREATE"` \| `"CHANNEL_DELETE"` \| `"CHANNEL_PINS_UPDATE"` \| `"CHANNEL_UPDATE"` \| `"GUILD_BAN_ADD"` \| `"GUILD_BAN_REMOVE"` \| `"GUILD_CREATE"` \| `"GUILD_DELETE"` \| `"GUILD_EMOJIS_UPDATE"` \| `"GUILD_INTEGRATIONS_UPDATE"` \| `"GUILD_MEMBER_ADD"` \| `"GUILD_MEMBER_REMOVE"` \| `"GUILD_MEMBERS_CHUNK"` \| `"GUILD_MEMBER_UPDATE"` \| `"GUILD_ROLE_CREATE"` \| `"GUILD_ROLE_DELETE"` \| `"GUILD_ROLE_UPDATE"` \| `"GUILD_STICKERS_UPDATE"` \| `"GUILD_UPDATE"` \| `"INTEGRATION_CREATE"` \| `"INTEGRATION_DELETE"` \| `"INTEGRATION_UPDATE"` \| `"INTERACTION_CREATE"` \| `"INVITE_CREATE"` \| `"INVITE_DELETE"` \| `"MESSAGE_CREATE"` \| `"MESSAGE_DELETE"` \| `"MESSAGE_DELETE_BULK"` \| `"MESSAGE_REACTION_ADD"` \| `"MESSAGE_REACTION_REMOVE"` \| `"MESSAGE_REACTION_REMOVE_ALL"` \| `"MESSAGE_REACTION_REMOVE_EMOJI"` \| `"MESSAGE_UPDATE"` \| `"PRESENCE_UPDATE"` \| `"STAGE_INSTANCE_CREATE"` \| `"STAGE_INSTANCE_DELETE"` \| `"STAGE_INSTANCE_UPDATE"` \| `"READY"` \| `"RESUMED"` \| `"THREAD_CREATE"` \| `"THREAD_DELETE"` \| `"THREAD_LIST_SYNC"` \| `"THREAD_MEMBERS_UPDATE"` \| `"THREAD_MEMBER_UPDATE"` \| `"THREAD_UPDATE"` \| `"TYPING_START"` \| `"USER_UPDATE"` \| `"VOICE_SERVER_UPDATE"` \| `"VOICE_STATE_UPDATE"` \| `"WEBHOOKS_UPDATE"` \| `"MESSAGE_POLL_VOTE_ADD"` \| `"MESSAGE_POLL_VOTE_REMOVE"` \| `"GUILD_SCHEDULED_EVENT_CREATE"` \| `"GUILD_SCHEDULED_EVENT_UPDATE"` \| `"GUILD_SCHEDULED_EVENT_DELETE"` \| `"GUILD_SCHEDULED_EVENT_USER_ADD"` \| `"GUILD_SCHEDULED_EVENT_USER_REMOVE"` \| `"AUTO_MODERATION_RULE_CREATE"` \| `"AUTO_MODERATION_RULE_UPDATE"` \| `"AUTO_MODERATION_RULE_DELETE"` \| `"AUTO_MODERATION_ACTION_EXECUTION"` \| `"GUILD_AUDIT_LOG_ENTRY_CREATE"` \| `"ENTITLEMENT_CREATE"` \| `"ENTITLEMENT_UPDATE"` \| `"ENTITLEMENT_DELETE"` \| `"BOT_READY"` \| `"WORKER_READY"` \| `"RAW"`, [`EventValue`](../type-aliases/EventValue.md)\>\> | `{}` | - | - |

## Methods

### callback()

```ts
callback(file: ClientEvent): false | ClientEvent
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `file` | [`ClientEvent`](../interfaces/ClientEvent.md) |

#### Returns

`false` \| [`ClientEvent`](../interfaces/ClientEvent.md)

#### Source

[seyfert/src/events/handler.ts:160](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/events/handler.ts#L160)

***

### execute()

```ts
execute(name: 
  | "APPLICATION_COMMAND_PERMISSIONS_UPDATE"
  | "CHANNEL_CREATE"
  | "CHANNEL_DELETE"
  | "CHANNEL_PINS_UPDATE"
  | "CHANNEL_UPDATE"
  | "GUILD_BAN_ADD"
  | "GUILD_BAN_REMOVE"
  | "GUILD_CREATE"
  | "GUILD_DELETE"
  | "GUILD_EMOJIS_UPDATE"
  | "GUILD_INTEGRATIONS_UPDATE"
  | "GUILD_MEMBER_ADD"
  | "GUILD_MEMBER_REMOVE"
  | "GUILD_MEMBERS_CHUNK"
  | "GUILD_MEMBER_UPDATE"
  | "GUILD_ROLE_CREATE"
  | "GUILD_ROLE_DELETE"
  | "GUILD_ROLE_UPDATE"
  | "GUILD_STICKERS_UPDATE"
  | "GUILD_UPDATE"
  | "INTEGRATION_CREATE"
  | "INTEGRATION_DELETE"
  | "INTEGRATION_UPDATE"
  | "INTERACTION_CREATE"
  | "INVITE_CREATE"
  | "INVITE_DELETE"
  | "MESSAGE_CREATE"
  | "MESSAGE_DELETE"
  | "MESSAGE_DELETE_BULK"
  | "MESSAGE_REACTION_ADD"
  | "MESSAGE_REACTION_REMOVE"
  | "MESSAGE_REACTION_REMOVE_ALL"
  | "MESSAGE_REACTION_REMOVE_EMOJI"
  | "MESSAGE_UPDATE"
  | "PRESENCE_UPDATE"
  | "STAGE_INSTANCE_CREATE"
  | "STAGE_INSTANCE_DELETE"
  | "STAGE_INSTANCE_UPDATE"
  | "READY"
  | "RESUMED"
  | "THREAD_CREATE"
  | "THREAD_DELETE"
  | "THREAD_LIST_SYNC"
  | "THREAD_MEMBERS_UPDATE"
  | "THREAD_MEMBER_UPDATE"
  | "THREAD_UPDATE"
  | "TYPING_START"
  | "USER_UPDATE"
  | "VOICE_SERVER_UPDATE"
  | "VOICE_STATE_UPDATE"
  | "WEBHOOKS_UPDATE"
  | "MESSAGE_POLL_VOTE_ADD"
  | "MESSAGE_POLL_VOTE_REMOVE"
  | "GUILD_SCHEDULED_EVENT_CREATE"
  | "GUILD_SCHEDULED_EVENT_UPDATE"
  | "GUILD_SCHEDULED_EVENT_DELETE"
  | "GUILD_SCHEDULED_EVENT_USER_ADD"
  | "GUILD_SCHEDULED_EVENT_USER_REMOVE"
  | "AUTO_MODERATION_RULE_CREATE"
  | "AUTO_MODERATION_RULE_UPDATE"
  | "AUTO_MODERATION_RULE_DELETE"
  | "AUTO_MODERATION_ACTION_EXECUTION"
  | "GUILD_AUDIT_LOG_ENTRY_CREATE"
  | "ENTITLEMENT_CREATE"
  | "ENTITLEMENT_UPDATE"
  | "ENTITLEMENT_DELETE"
  | "BOT_READY"
  | "WORKER_READY"
| "RAW", ...args: [GatewayDispatchPayload, Client<true> | WorkerClient<true>, number]): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` |  \| `"APPLICATION_COMMAND_PERMISSIONS_UPDATE"` \| `"CHANNEL_CREATE"` \| `"CHANNEL_DELETE"` \| `"CHANNEL_PINS_UPDATE"` \| `"CHANNEL_UPDATE"` \| `"GUILD_BAN_ADD"` \| `"GUILD_BAN_REMOVE"` \| `"GUILD_CREATE"` \| `"GUILD_DELETE"` \| `"GUILD_EMOJIS_UPDATE"` \| `"GUILD_INTEGRATIONS_UPDATE"` \| `"GUILD_MEMBER_ADD"` \| `"GUILD_MEMBER_REMOVE"` \| `"GUILD_MEMBERS_CHUNK"` \| `"GUILD_MEMBER_UPDATE"` \| `"GUILD_ROLE_CREATE"` \| `"GUILD_ROLE_DELETE"` \| `"GUILD_ROLE_UPDATE"` \| `"GUILD_STICKERS_UPDATE"` \| `"GUILD_UPDATE"` \| `"INTEGRATION_CREATE"` \| `"INTEGRATION_DELETE"` \| `"INTEGRATION_UPDATE"` \| `"INTERACTION_CREATE"` \| `"INVITE_CREATE"` \| `"INVITE_DELETE"` \| `"MESSAGE_CREATE"` \| `"MESSAGE_DELETE"` \| `"MESSAGE_DELETE_BULK"` \| `"MESSAGE_REACTION_ADD"` \| `"MESSAGE_REACTION_REMOVE"` \| `"MESSAGE_REACTION_REMOVE_ALL"` \| `"MESSAGE_REACTION_REMOVE_EMOJI"` \| `"MESSAGE_UPDATE"` \| `"PRESENCE_UPDATE"` \| `"STAGE_INSTANCE_CREATE"` \| `"STAGE_INSTANCE_DELETE"` \| `"STAGE_INSTANCE_UPDATE"` \| `"READY"` \| `"RESUMED"` \| `"THREAD_CREATE"` \| `"THREAD_DELETE"` \| `"THREAD_LIST_SYNC"` \| `"THREAD_MEMBERS_UPDATE"` \| `"THREAD_MEMBER_UPDATE"` \| `"THREAD_UPDATE"` \| `"TYPING_START"` \| `"USER_UPDATE"` \| `"VOICE_SERVER_UPDATE"` \| `"VOICE_STATE_UPDATE"` \| `"WEBHOOKS_UPDATE"` \| `"MESSAGE_POLL_VOTE_ADD"` \| `"MESSAGE_POLL_VOTE_REMOVE"` \| `"GUILD_SCHEDULED_EVENT_CREATE"` \| `"GUILD_SCHEDULED_EVENT_UPDATE"` \| `"GUILD_SCHEDULED_EVENT_DELETE"` \| `"GUILD_SCHEDULED_EVENT_USER_ADD"` \| `"GUILD_SCHEDULED_EVENT_USER_REMOVE"` \| `"AUTO_MODERATION_RULE_CREATE"` \| `"AUTO_MODERATION_RULE_UPDATE"` \| `"AUTO_MODERATION_RULE_DELETE"` \| `"AUTO_MODERATION_ACTION_EXECUTION"` \| `"GUILD_AUDIT_LOG_ENTRY_CREATE"` \| `"ENTITLEMENT_CREATE"` \| `"ENTITLEMENT_UPDATE"` \| `"ENTITLEMENT_DELETE"` \| `"BOT_READY"` \| `"WORKER_READY"` \| `"RAW"` |
| ...`args` | [`GatewayDispatchPayload`, [`Client`](Client.md)\<`true`\> \| [`WorkerClient`](WorkerClient.md)\<`true`\>, `number`] |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/events/handler.ts:50](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/events/handler.ts#L50)

***

### filter()

```ts
protected filter(path: string): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`boolean`

#### Overrides

`BaseHandler.filter`

#### Source

[seyfert/src/events/handler.ts:24](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/events/handler.ts#L24)

***

### getFiles()

```ts
protected getFiles(dir: string): Promise<string[]>
```

Recursively retrieves all files in a directory.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string` | The directory path. |

#### Returns

`Promise`\<`string`[]\>

A Promise that resolves to an array of file paths.

#### Inherited from

`BaseHandler.getFiles`

#### Source

[seyfert/src/common/it/utils.ts:114](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/it/utils.ts#L114)

***

### load()

```ts
load(eventsDir: string, instances?: {
  file: ClientEvent;
  path: string;
}[]): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventsDir` | `string` |
| `instances`? | \{ `file`: [`ClientEvent`](../interfaces/ClientEvent.md); `path`: `string`; \}[] |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/events/handler.ts:28](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/events/handler.ts#L28)

***

### loadFiles()

```ts
protected loadFiles<T>(paths: string[]): Promise<T[]>
```

Loads files from given paths.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* \{\} |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `paths` | `string`[] | The paths of the files to load. |

#### Returns

`Promise`\<`T`[]\>

A Promise that resolves to an array of loaded files.

#### Inherited from

`BaseHandler.loadFiles`

#### Source

[seyfert/src/common/it/utils.ts:133](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/it/utils.ts#L133)

***

### loadFilesK()

```ts
protected loadFilesK<T>(paths: string[]): Promise<{
  file: T;
  name: string;
  path: string;
}[]>
```

Loads files from given paths along with additional information.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `paths` | `string`[] | The paths of the files to load. |

#### Returns

`Promise`\<\{
  `file`: `T`;
  `name`: `string`;
  `path`: `string`;
 \}[]\>

A Promise that resolves to an array of objects containing name, file, and path.

#### Inherited from

`BaseHandler.loadFilesK`

#### Source

[seyfert/src/common/it/utils.ts:142](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/it/utils.ts#L142)

***

### onFail()

```ts
onFail(event: 
  | "APPLICATION_COMMAND_PERMISSIONS_UPDATE"
  | "CHANNEL_CREATE"
  | "CHANNEL_DELETE"
  | "CHANNEL_PINS_UPDATE"
  | "CHANNEL_UPDATE"
  | "GUILD_BAN_ADD"
  | "GUILD_BAN_REMOVE"
  | "GUILD_CREATE"
  | "GUILD_DELETE"
  | "GUILD_EMOJIS_UPDATE"
  | "GUILD_INTEGRATIONS_UPDATE"
  | "GUILD_MEMBER_ADD"
  | "GUILD_MEMBER_REMOVE"
  | "GUILD_MEMBERS_CHUNK"
  | "GUILD_MEMBER_UPDATE"
  | "GUILD_ROLE_CREATE"
  | "GUILD_ROLE_DELETE"
  | "GUILD_ROLE_UPDATE"
  | "GUILD_STICKERS_UPDATE"
  | "GUILD_UPDATE"
  | "INTEGRATION_CREATE"
  | "INTEGRATION_DELETE"
  | "INTEGRATION_UPDATE"
  | "INTERACTION_CREATE"
  | "INVITE_CREATE"
  | "INVITE_DELETE"
  | "MESSAGE_CREATE"
  | "MESSAGE_DELETE"
  | "MESSAGE_DELETE_BULK"
  | "MESSAGE_REACTION_ADD"
  | "MESSAGE_REACTION_REMOVE"
  | "MESSAGE_REACTION_REMOVE_ALL"
  | "MESSAGE_REACTION_REMOVE_EMOJI"
  | "MESSAGE_UPDATE"
  | "PRESENCE_UPDATE"
  | "STAGE_INSTANCE_CREATE"
  | "STAGE_INSTANCE_DELETE"
  | "STAGE_INSTANCE_UPDATE"
  | "READY"
  | "RESUMED"
  | "THREAD_CREATE"
  | "THREAD_DELETE"
  | "THREAD_LIST_SYNC"
  | "THREAD_MEMBERS_UPDATE"
  | "THREAD_MEMBER_UPDATE"
  | "THREAD_UPDATE"
  | "TYPING_START"
  | "USER_UPDATE"
  | "VOICE_SERVER_UPDATE"
  | "VOICE_STATE_UPDATE"
  | "WEBHOOKS_UPDATE"
  | "MESSAGE_POLL_VOTE_ADD"
  | "MESSAGE_POLL_VOTE_REMOVE"
  | "GUILD_SCHEDULED_EVENT_CREATE"
  | "GUILD_SCHEDULED_EVENT_UPDATE"
  | "GUILD_SCHEDULED_EVENT_DELETE"
  | "GUILD_SCHEDULED_EVENT_USER_ADD"
  | "GUILD_SCHEDULED_EVENT_USER_REMOVE"
  | "AUTO_MODERATION_RULE_CREATE"
  | "AUTO_MODERATION_RULE_UPDATE"
  | "AUTO_MODERATION_RULE_DELETE"
  | "AUTO_MODERATION_ACTION_EXECUTION"
  | "GUILD_AUDIT_LOG_ENTRY_CREATE"
  | "ENTITLEMENT_CREATE"
  | "ENTITLEMENT_UPDATE"
  | "ENTITLEMENT_DELETE"
  | "BOT_READY"
  | "WORKER_READY"
  | "RAW", err: unknown): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `event` |  \| `"APPLICATION_COMMAND_PERMISSIONS_UPDATE"` \| `"CHANNEL_CREATE"` \| `"CHANNEL_DELETE"` \| `"CHANNEL_PINS_UPDATE"` \| `"CHANNEL_UPDATE"` \| `"GUILD_BAN_ADD"` \| `"GUILD_BAN_REMOVE"` \| `"GUILD_CREATE"` \| `"GUILD_DELETE"` \| `"GUILD_EMOJIS_UPDATE"` \| `"GUILD_INTEGRATIONS_UPDATE"` \| `"GUILD_MEMBER_ADD"` \| `"GUILD_MEMBER_REMOVE"` \| `"GUILD_MEMBERS_CHUNK"` \| `"GUILD_MEMBER_UPDATE"` \| `"GUILD_ROLE_CREATE"` \| `"GUILD_ROLE_DELETE"` \| `"GUILD_ROLE_UPDATE"` \| `"GUILD_STICKERS_UPDATE"` \| `"GUILD_UPDATE"` \| `"INTEGRATION_CREATE"` \| `"INTEGRATION_DELETE"` \| `"INTEGRATION_UPDATE"` \| `"INTERACTION_CREATE"` \| `"INVITE_CREATE"` \| `"INVITE_DELETE"` \| `"MESSAGE_CREATE"` \| `"MESSAGE_DELETE"` \| `"MESSAGE_DELETE_BULK"` \| `"MESSAGE_REACTION_ADD"` \| `"MESSAGE_REACTION_REMOVE"` \| `"MESSAGE_REACTION_REMOVE_ALL"` \| `"MESSAGE_REACTION_REMOVE_EMOJI"` \| `"MESSAGE_UPDATE"` \| `"PRESENCE_UPDATE"` \| `"STAGE_INSTANCE_CREATE"` \| `"STAGE_INSTANCE_DELETE"` \| `"STAGE_INSTANCE_UPDATE"` \| `"READY"` \| `"RESUMED"` \| `"THREAD_CREATE"` \| `"THREAD_DELETE"` \| `"THREAD_LIST_SYNC"` \| `"THREAD_MEMBERS_UPDATE"` \| `"THREAD_MEMBER_UPDATE"` \| `"THREAD_UPDATE"` \| `"TYPING_START"` \| `"USER_UPDATE"` \| `"VOICE_SERVER_UPDATE"` \| `"VOICE_STATE_UPDATE"` \| `"WEBHOOKS_UPDATE"` \| `"MESSAGE_POLL_VOTE_ADD"` \| `"MESSAGE_POLL_VOTE_REMOVE"` \| `"GUILD_SCHEDULED_EVENT_CREATE"` \| `"GUILD_SCHEDULED_EVENT_UPDATE"` \| `"GUILD_SCHEDULED_EVENT_DELETE"` \| `"GUILD_SCHEDULED_EVENT_USER_ADD"` \| `"GUILD_SCHEDULED_EVENT_USER_REMOVE"` \| `"AUTO_MODERATION_RULE_CREATE"` \| `"AUTO_MODERATION_RULE_UPDATE"` \| `"AUTO_MODERATION_RULE_DELETE"` \| `"AUTO_MODERATION_ACTION_EXECUTION"` \| `"GUILD_AUDIT_LOG_ENTRY_CREATE"` \| `"ENTITLEMENT_CREATE"` \| `"ENTITLEMENT_UPDATE"` \| `"ENTITLEMENT_DELETE"` \| `"BOT_READY"` \| `"WORKER_READY"` \| `"RAW"` |
| `err` | `unknown` |

#### Returns

`void`

#### Source

[seyfert/src/events/handler.ts:22](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/events/handler.ts#L22)

***

### reload()

```ts
reload(name: 
  | "APPLICATION_COMMAND_PERMISSIONS_UPDATE"
  | "CHANNEL_CREATE"
  | "CHANNEL_DELETE"
  | "CHANNEL_PINS_UPDATE"
  | "CHANNEL_UPDATE"
  | "GUILD_BAN_ADD"
  | "GUILD_BAN_REMOVE"
  | "GUILD_CREATE"
  | "GUILD_DELETE"
  | "GUILD_EMOJIS_UPDATE"
  | "GUILD_INTEGRATIONS_UPDATE"
  | "GUILD_MEMBER_ADD"
  | "GUILD_MEMBER_REMOVE"
  | "GUILD_MEMBERS_CHUNK"
  | "GUILD_MEMBER_UPDATE"
  | "GUILD_ROLE_CREATE"
  | "GUILD_ROLE_DELETE"
  | "GUILD_ROLE_UPDATE"
  | "GUILD_STICKERS_UPDATE"
  | "GUILD_UPDATE"
  | "INTEGRATION_CREATE"
  | "INTEGRATION_DELETE"
  | "INTEGRATION_UPDATE"
  | "INTERACTION_CREATE"
  | "INVITE_CREATE"
  | "INVITE_DELETE"
  | "MESSAGE_CREATE"
  | "MESSAGE_DELETE"
  | "MESSAGE_DELETE_BULK"
  | "MESSAGE_REACTION_ADD"
  | "MESSAGE_REACTION_REMOVE"
  | "MESSAGE_REACTION_REMOVE_ALL"
  | "MESSAGE_REACTION_REMOVE_EMOJI"
  | "MESSAGE_UPDATE"
  | "PRESENCE_UPDATE"
  | "STAGE_INSTANCE_CREATE"
  | "STAGE_INSTANCE_DELETE"
  | "STAGE_INSTANCE_UPDATE"
  | "READY"
  | "RESUMED"
  | "THREAD_CREATE"
  | "THREAD_DELETE"
  | "THREAD_LIST_SYNC"
  | "THREAD_MEMBERS_UPDATE"
  | "THREAD_MEMBER_UPDATE"
  | "THREAD_UPDATE"
  | "TYPING_START"
  | "USER_UPDATE"
  | "VOICE_SERVER_UPDATE"
  | "VOICE_STATE_UPDATE"
  | "WEBHOOKS_UPDATE"
  | "MESSAGE_POLL_VOTE_ADD"
  | "MESSAGE_POLL_VOTE_REMOVE"
  | "GUILD_SCHEDULED_EVENT_CREATE"
  | "GUILD_SCHEDULED_EVENT_UPDATE"
  | "GUILD_SCHEDULED_EVENT_DELETE"
  | "GUILD_SCHEDULED_EVENT_USER_ADD"
  | "GUILD_SCHEDULED_EVENT_USER_REMOVE"
  | "AUTO_MODERATION_RULE_CREATE"
  | "AUTO_MODERATION_RULE_UPDATE"
  | "AUTO_MODERATION_RULE_DELETE"
  | "AUTO_MODERATION_ACTION_EXECUTION"
  | "GUILD_AUDIT_LOG_ENTRY_CREATE"
  | "ENTITLEMENT_CREATE"
  | "ENTITLEMENT_UPDATE"
  | "ENTITLEMENT_DELETE"
  | "BOT_READY"
  | "WORKER_READY"
| "RAW"): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` |  \| `"APPLICATION_COMMAND_PERMISSIONS_UPDATE"` \| `"CHANNEL_CREATE"` \| `"CHANNEL_DELETE"` \| `"CHANNEL_PINS_UPDATE"` \| `"CHANNEL_UPDATE"` \| `"GUILD_BAN_ADD"` \| `"GUILD_BAN_REMOVE"` \| `"GUILD_CREATE"` \| `"GUILD_DELETE"` \| `"GUILD_EMOJIS_UPDATE"` \| `"GUILD_INTEGRATIONS_UPDATE"` \| `"GUILD_MEMBER_ADD"` \| `"GUILD_MEMBER_REMOVE"` \| `"GUILD_MEMBERS_CHUNK"` \| `"GUILD_MEMBER_UPDATE"` \| `"GUILD_ROLE_CREATE"` \| `"GUILD_ROLE_DELETE"` \| `"GUILD_ROLE_UPDATE"` \| `"GUILD_STICKERS_UPDATE"` \| `"GUILD_UPDATE"` \| `"INTEGRATION_CREATE"` \| `"INTEGRATION_DELETE"` \| `"INTEGRATION_UPDATE"` \| `"INTERACTION_CREATE"` \| `"INVITE_CREATE"` \| `"INVITE_DELETE"` \| `"MESSAGE_CREATE"` \| `"MESSAGE_DELETE"` \| `"MESSAGE_DELETE_BULK"` \| `"MESSAGE_REACTION_ADD"` \| `"MESSAGE_REACTION_REMOVE"` \| `"MESSAGE_REACTION_REMOVE_ALL"` \| `"MESSAGE_REACTION_REMOVE_EMOJI"` \| `"MESSAGE_UPDATE"` \| `"PRESENCE_UPDATE"` \| `"STAGE_INSTANCE_CREATE"` \| `"STAGE_INSTANCE_DELETE"` \| `"STAGE_INSTANCE_UPDATE"` \| `"READY"` \| `"RESUMED"` \| `"THREAD_CREATE"` \| `"THREAD_DELETE"` \| `"THREAD_LIST_SYNC"` \| `"THREAD_MEMBERS_UPDATE"` \| `"THREAD_MEMBER_UPDATE"` \| `"THREAD_UPDATE"` \| `"TYPING_START"` \| `"USER_UPDATE"` \| `"VOICE_SERVER_UPDATE"` \| `"VOICE_STATE_UPDATE"` \| `"WEBHOOKS_UPDATE"` \| `"MESSAGE_POLL_VOTE_ADD"` \| `"MESSAGE_POLL_VOTE_REMOVE"` \| `"GUILD_SCHEDULED_EVENT_CREATE"` \| `"GUILD_SCHEDULED_EVENT_UPDATE"` \| `"GUILD_SCHEDULED_EVENT_DELETE"` \| `"GUILD_SCHEDULED_EVENT_USER_ADD"` \| `"GUILD_SCHEDULED_EVENT_USER_REMOVE"` \| `"AUTO_MODERATION_RULE_CREATE"` \| `"AUTO_MODERATION_RULE_UPDATE"` \| `"AUTO_MODERATION_RULE_DELETE"` \| `"AUTO_MODERATION_ACTION_EXECUTION"` \| `"GUILD_AUDIT_LOG_ENTRY_CREATE"` \| `"ENTITLEMENT_CREATE"` \| `"ENTITLEMENT_UPDATE"` \| `"ENTITLEMENT_DELETE"` \| `"BOT_READY"` \| `"WORKER_READY"` \| `"RAW"` |

#### Returns

`Promise`\<`any`\>

#### Source

[seyfert/src/events/handler.ts:134](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/events/handler.ts#L134)

***

### reloadAll()

```ts
reloadAll(stopIfFail: boolean): Promise<void>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `stopIfFail` | `boolean` | `true` |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/events/handler.ts:144](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/events/handler.ts#L144)

***

### runCustom()

```ts
runCustom<T>(name: T, ...args: Parameters<CustomEvents[T]>): Promise<void>
```

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `never` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `T` |
| ...`args` | `Parameters`\<[`CustomEvents`](../interfaces/CustomEvents.md)\[`T`\]\> |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/events/handler.ts:117](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/events/handler.ts#L117)

***

### runEvent()

```ts
runEvent(
   name: 
  | "APPLICATION_COMMAND_PERMISSIONS_UPDATE"
  | "CHANNEL_CREATE"
  | "CHANNEL_DELETE"
  | "CHANNEL_PINS_UPDATE"
  | "CHANNEL_UPDATE"
  | "GUILD_BAN_ADD"
  | "GUILD_BAN_REMOVE"
  | "GUILD_CREATE"
  | "GUILD_DELETE"
  | "GUILD_EMOJIS_UPDATE"
  | "GUILD_INTEGRATIONS_UPDATE"
  | "GUILD_MEMBER_ADD"
  | "GUILD_MEMBER_REMOVE"
  | "GUILD_MEMBERS_CHUNK"
  | "GUILD_MEMBER_UPDATE"
  | "GUILD_ROLE_CREATE"
  | "GUILD_ROLE_DELETE"
  | "GUILD_ROLE_UPDATE"
  | "GUILD_STICKERS_UPDATE"
  | "GUILD_UPDATE"
  | "INTEGRATION_CREATE"
  | "INTEGRATION_DELETE"
  | "INTEGRATION_UPDATE"
  | "INTERACTION_CREATE"
  | "INVITE_CREATE"
  | "INVITE_DELETE"
  | "MESSAGE_CREATE"
  | "MESSAGE_DELETE"
  | "MESSAGE_DELETE_BULK"
  | "MESSAGE_REACTION_ADD"
  | "MESSAGE_REACTION_REMOVE"
  | "MESSAGE_REACTION_REMOVE_ALL"
  | "MESSAGE_REACTION_REMOVE_EMOJI"
  | "MESSAGE_UPDATE"
  | "PRESENCE_UPDATE"
  | "STAGE_INSTANCE_CREATE"
  | "STAGE_INSTANCE_DELETE"
  | "STAGE_INSTANCE_UPDATE"
  | "READY"
  | "RESUMED"
  | "THREAD_CREATE"
  | "THREAD_DELETE"
  | "THREAD_LIST_SYNC"
  | "THREAD_MEMBERS_UPDATE"
  | "THREAD_MEMBER_UPDATE"
  | "THREAD_UPDATE"
  | "TYPING_START"
  | "USER_UPDATE"
  | "VOICE_SERVER_UPDATE"
  | "VOICE_STATE_UPDATE"
  | "WEBHOOKS_UPDATE"
  | "MESSAGE_POLL_VOTE_ADD"
  | "MESSAGE_POLL_VOTE_REMOVE"
  | "GUILD_SCHEDULED_EVENT_CREATE"
  | "GUILD_SCHEDULED_EVENT_UPDATE"
  | "GUILD_SCHEDULED_EVENT_DELETE"
  | "GUILD_SCHEDULED_EVENT_USER_ADD"
  | "GUILD_SCHEDULED_EVENT_USER_REMOVE"
  | "AUTO_MODERATION_RULE_CREATE"
  | "AUTO_MODERATION_RULE_UPDATE"
  | "AUTO_MODERATION_RULE_DELETE"
  | "AUTO_MODERATION_ACTION_EXECUTION"
  | "GUILD_AUDIT_LOG_ENTRY_CREATE"
  | "ENTITLEMENT_CREATE"
  | "ENTITLEMENT_UPDATE"
  | "ENTITLEMENT_DELETE"
  | "BOT_READY"
  | "WORKER_READY"
  | "RAW", 
   client: Client<boolean> | WorkerClient<boolean>, 
   packet: any, 
shardId: number): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` |  \| `"APPLICATION_COMMAND_PERMISSIONS_UPDATE"` \| `"CHANNEL_CREATE"` \| `"CHANNEL_DELETE"` \| `"CHANNEL_PINS_UPDATE"` \| `"CHANNEL_UPDATE"` \| `"GUILD_BAN_ADD"` \| `"GUILD_BAN_REMOVE"` \| `"GUILD_CREATE"` \| `"GUILD_DELETE"` \| `"GUILD_EMOJIS_UPDATE"` \| `"GUILD_INTEGRATIONS_UPDATE"` \| `"GUILD_MEMBER_ADD"` \| `"GUILD_MEMBER_REMOVE"` \| `"GUILD_MEMBERS_CHUNK"` \| `"GUILD_MEMBER_UPDATE"` \| `"GUILD_ROLE_CREATE"` \| `"GUILD_ROLE_DELETE"` \| `"GUILD_ROLE_UPDATE"` \| `"GUILD_STICKERS_UPDATE"` \| `"GUILD_UPDATE"` \| `"INTEGRATION_CREATE"` \| `"INTEGRATION_DELETE"` \| `"INTEGRATION_UPDATE"` \| `"INTERACTION_CREATE"` \| `"INVITE_CREATE"` \| `"INVITE_DELETE"` \| `"MESSAGE_CREATE"` \| `"MESSAGE_DELETE"` \| `"MESSAGE_DELETE_BULK"` \| `"MESSAGE_REACTION_ADD"` \| `"MESSAGE_REACTION_REMOVE"` \| `"MESSAGE_REACTION_REMOVE_ALL"` \| `"MESSAGE_REACTION_REMOVE_EMOJI"` \| `"MESSAGE_UPDATE"` \| `"PRESENCE_UPDATE"` \| `"STAGE_INSTANCE_CREATE"` \| `"STAGE_INSTANCE_DELETE"` \| `"STAGE_INSTANCE_UPDATE"` \| `"READY"` \| `"RESUMED"` \| `"THREAD_CREATE"` \| `"THREAD_DELETE"` \| `"THREAD_LIST_SYNC"` \| `"THREAD_MEMBERS_UPDATE"` \| `"THREAD_MEMBER_UPDATE"` \| `"THREAD_UPDATE"` \| `"TYPING_START"` \| `"USER_UPDATE"` \| `"VOICE_SERVER_UPDATE"` \| `"VOICE_STATE_UPDATE"` \| `"WEBHOOKS_UPDATE"` \| `"MESSAGE_POLL_VOTE_ADD"` \| `"MESSAGE_POLL_VOTE_REMOVE"` \| `"GUILD_SCHEDULED_EVENT_CREATE"` \| `"GUILD_SCHEDULED_EVENT_UPDATE"` \| `"GUILD_SCHEDULED_EVENT_DELETE"` \| `"GUILD_SCHEDULED_EVENT_USER_ADD"` \| `"GUILD_SCHEDULED_EVENT_USER_REMOVE"` \| `"AUTO_MODERATION_RULE_CREATE"` \| `"AUTO_MODERATION_RULE_UPDATE"` \| `"AUTO_MODERATION_RULE_DELETE"` \| `"AUTO_MODERATION_ACTION_EXECUTION"` \| `"GUILD_AUDIT_LOG_ENTRY_CREATE"` \| `"ENTITLEMENT_CREATE"` \| `"ENTITLEMENT_UPDATE"` \| `"ENTITLEMENT_DELETE"` \| `"BOT_READY"` \| `"WORKER_READY"` \| `"RAW"` |
| `client` | [`Client`](Client.md)\<`boolean`\> \| [`WorkerClient`](WorkerClient.md)\<`boolean`\> |
| `packet` | `any` |
| `shardId` | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/events/handler.ts:89](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/events/handler.ts#L89)

***

### setHandlers()

```ts
setHandlers(__namedParameters: {
  callback: (file: ClientEvent) => false | ClientEvent;
 }): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | `object` |
| `__namedParameters.callback` | (`file`: [`ClientEvent`](../interfaces/ClientEvent.md)) => `false` \| [`ClientEvent`](../interfaces/ClientEvent.md) |

#### Returns

`void`

#### Source

[seyfert/src/events/handler.ts:156](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/events/handler.ts#L156)
