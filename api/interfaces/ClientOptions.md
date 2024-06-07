[seyfert](../globals.md) / ClientOptions

# Interface: ClientOptions

## Extends

- `BaseClientOptions`

## Properties

| Property | Type | Overrides | Inherited from |
| :------ | :------ | :------ | :------ |
| `allowedMentions?` | `Omit`\<`APIAllowedMentions`, `"parse"`\> & \{ `parse`: (`"roles"` \| `"users"` \| `"everyone"`)[]; \} | `BaseClientOptions.allowedMentions` | `BaseClientOptions.allowedMentions` |
| `commands?` | \{ `defaults`: \{ `onAfterRun`: (`context`: [`CommandContext`](../classes/CommandContext.md)\<\{\}, `never`\>, `error`: `unknown`) => `any`; `onBotPermissionsFail`: (`context`: [`CommandContext`](../classes/CommandContext.md)\<\{\}, `never`\>, `permissions`: [`PermissionStrings`](../type-aliases/PermissionStrings.md)) => `any`; `onInternalError`: (`client`: [`UsingClient`](UsingClient.md), `command`: [`Command`](../classes/Command.md) \| [`SubCommand`](../classes/SubCommand.md), `error`?: `unknown`) => `any`; `onMiddlewaresError`: (`context`: [`CommandContext`](../classes/CommandContext.md)\<\{\}, `never`\>, `error`: `string`) => `any`; `onOptionsError`: (`context`: [`CommandContext`](../classes/CommandContext.md)\<\{\}, `never`\>, `metadata`: [`OnOptionsReturnObject`](../type-aliases/OnOptionsReturnObject.md)) => `any`; `onPermissionsFail`: (`context`: [`CommandContext`](../classes/CommandContext.md)\<\{\}, `never`\>, `permissions`: [`PermissionStrings`](../type-aliases/PermissionStrings.md)) => `any`; `onRunError`: (`context`: [`CommandContext`](../classes/CommandContext.md)\<\{\}, `never`\>, `error`: `unknown`) => `any`; `props`: [`ExtraProps`](ExtraProps.md); \}; \} & \{ `argsParser`: (`content`: `string`, `command`: [`Command`](../classes/Command.md) \| [`SubCommand`](../classes/SubCommand.md), `message`: [`Message`](../classes/Message.md)) => `Record`\<`string`, `string`\>; `deferReplyResponse`: (`ctx`: [`CommandContext`](../classes/CommandContext.md)\<\{\}, `never`\>) => `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"` \| `"poll"`\> & `SendResolverProps`; `optionsParser`: (`self`: [`UsingClient`](UsingClient.md), `command`: [`Command`](../classes/Command.md) \| [`SubCommand`](../classes/SubCommand.md), `message`: `GatewayMessageCreateDispatchData`, `args`: `Partial`\<`Record`\<`string`, `string`\>\>, `resolved`: `MakeRequired`\<[`ContextOptionsResolved`](../type-aliases/ContextOptionsResolved.md)\>) => `Awaitable`\<\{ `errors`: \{ `error`: `string`; `fullError`: [`MessageCommandOptionErrors`](../type-aliases/MessageCommandOptionErrors.md); `name`: `string`; \}[]; `options`: `APIApplicationCommandInteractionDataOption`[]; \}\>; `prefix`: (`message`: [`Message`](../classes/Message.md)) => `string`[] \| `Promise`\<`string`[]\>; `reply`: (`ctx`: [`CommandContext`](../classes/CommandContext.md)\<\{\}, `never`\>) => `boolean`; \} | `BaseClientOptions.commands` | `BaseClientOptions.commands` |
| `components?` | \{ `defaults`: \{ `onAfterRun`: (`context`: [`ComponentContext`](../classes/ComponentContext.md)\<keyof [`ContextComponentCommandInteractionMap`](ContextComponentCommandInteractionMap.md), `never`\>, `error`: `unknown`) => `any`; `onInternalError`: (`client`: [`UsingClient`](UsingClient.md), `error`?: `unknown`) => `any`; `onMiddlewaresError`: (`context`: [`ComponentContext`](../classes/ComponentContext.md)\<keyof [`ContextComponentCommandInteractionMap`](ContextComponentCommandInteractionMap.md), `never`\>, `error`: `string`) => `any`; `onRunError`: (`context`: [`ComponentContext`](../classes/ComponentContext.md)\<keyof [`ContextComponentCommandInteractionMap`](ContextComponentCommandInteractionMap.md), `never`\>, `error`: `unknown`) => `any`; \}; \} | `BaseClientOptions.components` | `BaseClientOptions.components` |
| `components.defaults?` | \{ `onAfterRun`: (`context`: [`ComponentContext`](../classes/ComponentContext.md)\<keyof [`ContextComponentCommandInteractionMap`](ContextComponentCommandInteractionMap.md), `never`\>, `error`: `unknown`) => `any`; `onInternalError`: (`client`: [`UsingClient`](UsingClient.md), `error`?: `unknown`) => `any`; `onMiddlewaresError`: (`context`: [`ComponentContext`](../classes/ComponentContext.md)\<keyof [`ContextComponentCommandInteractionMap`](ContextComponentCommandInteractionMap.md), `never`\>, `error`: `string`) => `any`; `onRunError`: (`context`: [`ComponentContext`](../classes/ComponentContext.md)\<keyof [`ContextComponentCommandInteractionMap`](ContextComponentCommandInteractionMap.md), `never`\>, `error`: `unknown`) => `any`; \} | - | - |
| `components.defaults.onAfterRun?` | (`context`: [`ComponentContext`](../classes/ComponentContext.md)\<keyof [`ContextComponentCommandInteractionMap`](ContextComponentCommandInteractionMap.md), `never`\>, `error`: `unknown`) => `any` | - | - |
| `components.defaults.onInternalError?` | (`client`: [`UsingClient`](UsingClient.md), `error`?: `unknown`) => `any` | - | - |
| `components.defaults.onMiddlewaresError?` | (`context`: [`ComponentContext`](../classes/ComponentContext.md)\<keyof [`ContextComponentCommandInteractionMap`](ContextComponentCommandInteractionMap.md), `never`\>, `error`: `string`) => `any` | - | - |
| `components.defaults.onRunError?` | (`context`: [`ComponentContext`](../classes/ComponentContext.md)\<keyof [`ContextComponentCommandInteractionMap`](ContextComponentCommandInteractionMap.md), `never`\>, `error`: `unknown`) => `any` | - | - |
| `context?` | (`interaction`: \| [`ChatInputCommandInteraction`](../classes/ChatInputCommandInteraction.md)\<`boolean`\> \| [`UserCommandInteraction`](../classes/UserCommandInteraction.md)\<`boolean`\> \| [`MessageCommandInteraction`](../classes/MessageCommandInteraction.md)\<`boolean`\> \| [`ComponentInteraction`](../classes/ComponentInteraction.md)\<`boolean`, `APIMessageComponentInteraction`\> \| [`ModalSubmitInteraction`](../classes/ModalSubmitInteraction.md)\<`boolean`\>) => \{\} | `BaseClientOptions.context` | `BaseClientOptions.context` |
| `gateway?` | \{ `compress`: `boolean`; `properties`: `Partial`\<`undefined` \| `IdentifyProperties`\>; \} | - | - |
| `gateway.compress?` | `boolean` | - | - |
| `gateway.properties?` | `Partial`\<`undefined` \| `IdentifyProperties`\> | - | - |
| `globalMiddlewares?` | readonly `never`[] | `BaseClientOptions.globalMiddlewares` | `BaseClientOptions.globalMiddlewares` |
| `handlePayload?` | (`shardId`: `number`, `packet`: `GatewayDispatchPayload`) => `unknown` | - | - |
| `modals?` | \{ `defaults`: \{ `onAfterRun`: (`context`: [`ModalContext`](../classes/ModalContext.md)\<`never`\>, `error`: `unknown`) => `any`; `onInternalError`: (`client`: [`UsingClient`](UsingClient.md), `error`?: `unknown`) => `any`; `onMiddlewaresError`: (`context`: [`ModalContext`](../classes/ModalContext.md)\<`never`\>, `error`: `string`) => `any`; `onRunError`: (`context`: [`ModalContext`](../classes/ModalContext.md)\<`never`\>, `error`: `unknown`) => `any`; \}; \} | `BaseClientOptions.modals` | `BaseClientOptions.modals` |
| `modals.defaults?` | \{ `onAfterRun`: (`context`: [`ModalContext`](../classes/ModalContext.md)\<`never`\>, `error`: `unknown`) => `any`; `onInternalError`: (`client`: [`UsingClient`](UsingClient.md), `error`?: `unknown`) => `any`; `onMiddlewaresError`: (`context`: [`ModalContext`](../classes/ModalContext.md)\<`never`\>, `error`: `string`) => `any`; `onRunError`: (`context`: [`ModalContext`](../classes/ModalContext.md)\<`never`\>, `error`: `unknown`) => `any`; \} | - | - |
| `modals.defaults.onAfterRun?` | (`context`: [`ModalContext`](../classes/ModalContext.md)\<`never`\>, `error`: `unknown`) => `any` | - | - |
| `modals.defaults.onInternalError?` | (`client`: [`UsingClient`](UsingClient.md), `error`?: `unknown`) => `any` | - | - |
| `modals.defaults.onMiddlewaresError?` | (`context`: [`ModalContext`](../classes/ModalContext.md)\<`never`\>, `error`: `string`) => `any` | - | - |
| `modals.defaults.onRunError?` | (`context`: [`ModalContext`](../classes/ModalContext.md)\<`never`\>, `error`: `unknown`) => `any` | - | - |
| `presence?` | (`shardId`: `number`) => `GatewayPresenceUpdateData` | - | - |
| `shards?` | \{ `end`: `number`; `start`: `number`; `total`: `number`; \} | - | - |
| `shards.end` | `number` | - | - |
| `shards.start` | `number` | - | - |
| `shards.total?` | `number` | - | - |

## Methods

### getRC()?

```ts
optional getRC(): Awaitable<InternalRuntimeConfigHTTP | InternalRuntimeConfig>
```

#### Returns

`Awaitable`\<`InternalRuntimeConfigHTTP` \| `InternalRuntimeConfig`\>

#### Inherited from

`BaseClientOptions.getRC`

#### Source

[seyfert/src/client/base.ts:416](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/client/base.ts#L416)
