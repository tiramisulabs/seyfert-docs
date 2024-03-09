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
| `context?` | (`interaction`: [`ChatInputCommandInteraction`](/api/classes/chatinputcommandinteraction/)\<`boolean`\> \| [`UserCommandInteraction`](/api/classes/usercommandinteraction/)\<`boolean`\> \| [`MessageCommandInteraction`](/api/classes/messagecommandinteraction/)\<`boolean`\>) => `Object` | `BaseClientOptions.context` |
| `globalMiddlewares?` | readonly `never`[] | `BaseClientOptions.globalMiddlewares` |
| `presence?` | (`shardId`: `number`) => `GatewayPresenceUpdateData` | - |
| `shardEnd?` | `number` | - |
| `shardStart?` | `number` | - |
