---
editUrl: false
next: false
prev: false
title: "EventHandler"
---

## Extends

- `BaseHandler`

## Constructors

### new EventHandler(logger)

```ts
new EventHandler(logger: Logger): EventHandler
```

Initializes a new instance of the BaseHandler class.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `logger` | [`Logger`](/api/classes/logger/) | The logger instance. |

#### Returns

[`EventHandler`](/api/classes/eventhandler/)

#### Inherited from

`BaseHandler.constructor`

#### Source

[seyfert/src/common/it/utils.ts:101](https://github.com/potoland/potocuit/blob/fe122a1/src/common/it/utils.ts#L101)

## Properties

| Property | Type |
| :------ | :------ |
| `values` | `Partial`\<`Record`\< \| `"APPLICATION_COMMAND_PERMISSIONS_UPDATE"` \| `"CHANNEL_CREATE"` \| `"CHANNEL_DELETE"` \| `"CHANNEL_PINS_UPDATE"` \| `"CHANNEL_UPDATE"` \| `"GUILD_BAN_ADD"` \| `"GUILD_BAN_REMOVE"` \| `"GUILD_CREATE"` \| `"GUILD_DELETE"` \| `"GUILD_EMOJIS_UPDATE"` \| `"GUILD_INTEGRATIONS_UPDATE"` \| `"GUILD_MEMBER_ADD"` \| `"GUILD_MEMBER_REMOVE"` \| `"GUILD_MEMBERS_CHUNK"` \| `"GUILD_MEMBER_UPDATE"` \| `"GUILD_ROLE_CREATE"` \| `"GUILD_ROLE_DELETE"` \| `"GUILD_ROLE_UPDATE"` \| `"GUILD_STICKERS_UPDATE"` \| `"GUILD_UPDATE"` \| `"INTEGRATION_CREATE"` \| `"INTEGRATION_DELETE"` \| `"INTEGRATION_UPDATE"` \| `"INTERACTION_CREATE"` \| `"INVITE_CREATE"` \| `"INVITE_DELETE"` \| `"MESSAGE_CREATE"` \| `"MESSAGE_DELETE"` \| `"MESSAGE_DELETE_BULK"` \| `"MESSAGE_REACTION_ADD"` \| `"MESSAGE_REACTION_REMOVE"` \| `"MESSAGE_REACTION_REMOVE_ALL"` \| `"MESSAGE_REACTION_REMOVE_EMOJI"` \| `"MESSAGE_UPDATE"` \| `"PRESENCE_UPDATE"` \| `"STAGE_INSTANCE_CREATE"` \| `"STAGE_INSTANCE_DELETE"` \| `"STAGE_INSTANCE_UPDATE"` \| `"READY"` \| `"RESUMED"` \| `"THREAD_CREATE"` \| `"THREAD_DELETE"` \| `"THREAD_LIST_SYNC"` \| `"THREAD_MEMBERS_UPDATE"` \| `"THREAD_MEMBER_UPDATE"` \| `"THREAD_UPDATE"` \| `"TYPING_START"` \| `"USER_UPDATE"` \| `"VOICE_SERVER_UPDATE"` \| `"VOICE_STATE_UPDATE"` \| `"WEBHOOKS_UPDATE"` \| `"GUILD_SCHEDULED_EVENT_CREATE"` \| `"GUILD_SCHEDULED_EVENT_UPDATE"` \| `"GUILD_SCHEDULED_EVENT_DELETE"` \| `"GUILD_SCHEDULED_EVENT_USER_ADD"` \| `"GUILD_SCHEDULED_EVENT_USER_REMOVE"` \| `"AUTO_MODERATION_RULE_CREATE"` \| `"AUTO_MODERATION_RULE_UPDATE"` \| `"AUTO_MODERATION_RULE_DELETE"` \| `"AUTO_MODERATION_ACTION_EXECUTION"` \| `"GUILD_AUDIT_LOG_ENTRY_CREATE"` \| `"ENTITLEMENT_CREATE"` \| `"ENTITLEMENT_UPDATE"` \| `"ENTITLEMENT_DELETE"` \| `"RAW"` \| `"WORKER_READY"` \| `"BOT_READY"`, `EventValue`\>\> |

## Accessors

### OnFail

```ts
set OnFail(cb: OnFailCallback): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cb` | `OnFailCallback` |

#### Source

[seyfert/src/events/handler.ts:28](https://github.com/potoland/potocuit/blob/fe122a1/src/events/handler.ts#L28)

## Methods

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
  | "RAW"
  | "WORKER_READY"
| "BOT_READY", ...args: [GatewayDispatchPayload, Client<true> | WorkerClient<true>, number]): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` |  \| `"APPLICATION_COMMAND_PERMISSIONS_UPDATE"` \| `"CHANNEL_CREATE"` \| `"CHANNEL_DELETE"` \| `"CHANNEL_PINS_UPDATE"` \| `"CHANNEL_UPDATE"` \| `"GUILD_BAN_ADD"` \| `"GUILD_BAN_REMOVE"` \| `"GUILD_CREATE"` \| `"GUILD_DELETE"` \| `"GUILD_EMOJIS_UPDATE"` \| `"GUILD_INTEGRATIONS_UPDATE"` \| `"GUILD_MEMBER_ADD"` \| `"GUILD_MEMBER_REMOVE"` \| `"GUILD_MEMBERS_CHUNK"` \| `"GUILD_MEMBER_UPDATE"` \| `"GUILD_ROLE_CREATE"` \| `"GUILD_ROLE_DELETE"` \| `"GUILD_ROLE_UPDATE"` \| `"GUILD_STICKERS_UPDATE"` \| `"GUILD_UPDATE"` \| `"INTEGRATION_CREATE"` \| `"INTEGRATION_DELETE"` \| `"INTEGRATION_UPDATE"` \| `"INTERACTION_CREATE"` \| `"INVITE_CREATE"` \| `"INVITE_DELETE"` \| `"MESSAGE_CREATE"` \| `"MESSAGE_DELETE"` \| `"MESSAGE_DELETE_BULK"` \| `"MESSAGE_REACTION_ADD"` \| `"MESSAGE_REACTION_REMOVE"` \| `"MESSAGE_REACTION_REMOVE_ALL"` \| `"MESSAGE_REACTION_REMOVE_EMOJI"` \| `"MESSAGE_UPDATE"` \| `"PRESENCE_UPDATE"` \| `"STAGE_INSTANCE_CREATE"` \| `"STAGE_INSTANCE_DELETE"` \| `"STAGE_INSTANCE_UPDATE"` \| `"READY"` \| `"RESUMED"` \| `"THREAD_CREATE"` \| `"THREAD_DELETE"` \| `"THREAD_LIST_SYNC"` \| `"THREAD_MEMBERS_UPDATE"` \| `"THREAD_MEMBER_UPDATE"` \| `"THREAD_UPDATE"` \| `"TYPING_START"` \| `"USER_UPDATE"` \| `"VOICE_SERVER_UPDATE"` \| `"VOICE_STATE_UPDATE"` \| `"WEBHOOKS_UPDATE"` \| `"GUILD_SCHEDULED_EVENT_CREATE"` \| `"GUILD_SCHEDULED_EVENT_UPDATE"` \| `"GUILD_SCHEDULED_EVENT_DELETE"` \| `"GUILD_SCHEDULED_EVENT_USER_ADD"` \| `"GUILD_SCHEDULED_EVENT_USER_REMOVE"` \| `"AUTO_MODERATION_RULE_CREATE"` \| `"AUTO_MODERATION_RULE_UPDATE"` \| `"AUTO_MODERATION_RULE_DELETE"` \| `"AUTO_MODERATION_ACTION_EXECUTION"` \| `"GUILD_AUDIT_LOG_ENTRY_CREATE"` \| `"ENTITLEMENT_CREATE"` \| `"ENTITLEMENT_UPDATE"` \| `"ENTITLEMENT_DELETE"` \| `"RAW"` \| `"WORKER_READY"` \| `"BOT_READY"` |
| ...`args` | [`GatewayDispatchPayload`, [`Client`](/api/classes/client/)\<`true`\> \| [`WorkerClient`](/api/classes/workerclient/)\<`true`\>, `number`] |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/events/handler.ts:47](https://github.com/potoland/potocuit/blob/fe122a1/src/events/handler.ts#L47)

***

### load()

```ts
load(eventsDir: string): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventsDir` | `string` |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/events/handler.ts:32](https://github.com/potoland/potocuit/blob/fe122a1/src/events/handler.ts#L32)

***

### reload()

```ts
reload(name: ClientNameEvents): Promise<any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | [`ClientNameEvents`](/api/type-aliases/clientnameevents/) |

#### Returns

`Promise`\<`any`\>

#### Source

[seyfert/src/events/handler.ts:105](https://github.com/potoland/potocuit/blob/fe122a1/src/events/handler.ts#L105)

***

### reloadAll()

```ts
reloadAll(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/events/handler.ts:116](https://github.com/potoland/potocuit/blob/fe122a1/src/events/handler.ts#L116)

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
  | "RAW"
  | "WORKER_READY"
  | "BOT_READY", 
   client: Client<boolean> | WorkerClient<boolean>, 
   packet: any, 
shardId: number): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` |  \| `"APPLICATION_COMMAND_PERMISSIONS_UPDATE"` \| `"CHANNEL_CREATE"` \| `"CHANNEL_DELETE"` \| `"CHANNEL_PINS_UPDATE"` \| `"CHANNEL_UPDATE"` \| `"GUILD_BAN_ADD"` \| `"GUILD_BAN_REMOVE"` \| `"GUILD_CREATE"` \| `"GUILD_DELETE"` \| `"GUILD_EMOJIS_UPDATE"` \| `"GUILD_INTEGRATIONS_UPDATE"` \| `"GUILD_MEMBER_ADD"` \| `"GUILD_MEMBER_REMOVE"` \| `"GUILD_MEMBERS_CHUNK"` \| `"GUILD_MEMBER_UPDATE"` \| `"GUILD_ROLE_CREATE"` \| `"GUILD_ROLE_DELETE"` \| `"GUILD_ROLE_UPDATE"` \| `"GUILD_STICKERS_UPDATE"` \| `"GUILD_UPDATE"` \| `"INTEGRATION_CREATE"` \| `"INTEGRATION_DELETE"` \| `"INTEGRATION_UPDATE"` \| `"INTERACTION_CREATE"` \| `"INVITE_CREATE"` \| `"INVITE_DELETE"` \| `"MESSAGE_CREATE"` \| `"MESSAGE_DELETE"` \| `"MESSAGE_DELETE_BULK"` \| `"MESSAGE_REACTION_ADD"` \| `"MESSAGE_REACTION_REMOVE"` \| `"MESSAGE_REACTION_REMOVE_ALL"` \| `"MESSAGE_REACTION_REMOVE_EMOJI"` \| `"MESSAGE_UPDATE"` \| `"PRESENCE_UPDATE"` \| `"STAGE_INSTANCE_CREATE"` \| `"STAGE_INSTANCE_DELETE"` \| `"STAGE_INSTANCE_UPDATE"` \| `"READY"` \| `"RESUMED"` \| `"THREAD_CREATE"` \| `"THREAD_DELETE"` \| `"THREAD_LIST_SYNC"` \| `"THREAD_MEMBERS_UPDATE"` \| `"THREAD_MEMBER_UPDATE"` \| `"THREAD_UPDATE"` \| `"TYPING_START"` \| `"USER_UPDATE"` \| `"VOICE_SERVER_UPDATE"` \| `"VOICE_STATE_UPDATE"` \| `"WEBHOOKS_UPDATE"` \| `"GUILD_SCHEDULED_EVENT_CREATE"` \| `"GUILD_SCHEDULED_EVENT_UPDATE"` \| `"GUILD_SCHEDULED_EVENT_DELETE"` \| `"GUILD_SCHEDULED_EVENT_USER_ADD"` \| `"GUILD_SCHEDULED_EVENT_USER_REMOVE"` \| `"AUTO_MODERATION_RULE_CREATE"` \| `"AUTO_MODERATION_RULE_UPDATE"` \| `"AUTO_MODERATION_RULE_DELETE"` \| `"AUTO_MODERATION_ACTION_EXECUTION"` \| `"GUILD_AUDIT_LOG_ENTRY_CREATE"` \| `"ENTITLEMENT_CREATE"` \| `"ENTITLEMENT_UPDATE"` \| `"ENTITLEMENT_DELETE"` \| `"RAW"` \| `"WORKER_READY"` \| `"BOT_READY"` |
| `client` | [`Client`](/api/classes/client/)\<`boolean`\> \| [`WorkerClient`](/api/classes/workerclient/)\<`boolean`\> |
| `packet` | `any` |
| `shardId` | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/events/handler.ts:88](https://github.com/potoland/potocuit/blob/fe122a1/src/events/handler.ts#L88)
