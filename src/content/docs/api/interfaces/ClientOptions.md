---
editUrl: false
next: false
prev: false
title: "ClientOptions"
---

## Extends

- `BaseClientOptions`

## Properties

| Property | Type | Inherited from |
| :------ | :------ | :------ |
| `commands?` | `Object` | - |
| `commands.argsParser?` | (`content`: `string`, `command`: [`Command`](/api/classes/command/) \| [`SubCommand`](/api/classes/subcommand/)) => `Record`\<`string`, `string`\> | - |
| `commands.deferReplyResponse?` | (`ctx`: [`CommandContext`](/api/classes/commandcontext/)\<`Object`, `never`\>) => `Omit`\<`RESTPostAPIChannelMessageJSONBody`, `"components"` \| `"embeds"`\> & `ResolverProps` | - |
| `commands.prefix` | (`message`: [`Message`](/api/classes/message/)) => `string`[] \| `Promise`\<`string`[]\> | - |
| `commands.reply?` | (`ctx`: [`CommandContext`](/api/classes/commandcontext/)\<`Object`, `never`\>) => `boolean` | - |
| `context?` | (`interaction`: [`ChatInputCommandInteraction`](/api/classes/chatinputcommandinteraction/)\<`boolean`\> \| [`UserCommandInteraction`](/api/classes/usercommandinteraction/)\<`boolean`\> \| [`MessageCommandInteraction`](/api/classes/messagecommandinteraction/)\<`boolean`\>) => `Object` | `BaseClientOptions.context` |
| `globalMiddlewares?` | readonly `never`[] | `BaseClientOptions.globalMiddlewares` |
| `handlePayload?` | (`shardId`: `number`, `packet`: `GatewayDispatchPayload`) => `unknown` | - |
| `presence?` | (`shardId`: `number`) => `GatewayPresenceUpdateData` | - |
| `shards?` | `Object` | - |
| `shards.end` | `number` | - |
| `shards.start` | `number` | - |
