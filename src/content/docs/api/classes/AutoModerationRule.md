---
editUrl: false
next: false
prev: false
title: "AutoModerationRule"
---

## Extends

- `ObjectToLower`\<`APIAutoModerationRule`\>.`DiscordBase`\<`APIAutoModerationRule`\>

## Constructors

### new AutoModerationRule(client, data)

```ts
new AutoModerationRule(client: BaseClient, data: APIAutoModerationRule): AutoModerationRule
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | `BaseClient` |
| `data` | `APIAutoModerationRule` |

#### Returns

[`AutoModerationRule`](/api/classes/automoderationrule/)

#### Inherited from

`ObjectToLower<APIAutoModerationRule>.constructor`

#### Source

[seyfert/src/structures/AutoModerationRule.ts:14](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/AutoModerationRule.ts#L14)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `actions` | `public` | `Object`[] | `ObjectToLower.actions` |
| `client` | `readonly` | [`UsingClient`](/api/interfaces/usingclient/) | - |
| `creatorId` | `public` | `string` | `ObjectToLower.creatorId` |
| `enabled` | `public` | `boolean` | `ObjectToLower.enabled` |
| `eventType` | `public` | `MessageSend` | `ObjectToLower.eventType` |
| `exemptChannels` | `public` | `string`[] | `ObjectToLower.exemptChannels` |
| `exemptRoles` | `public` | `string`[] | `ObjectToLower.exemptRoles` |
| `guildId` | `public` | `string` | `ObjectToLower.guildId` |
| `id` | `public` | `string` | `ObjectToLower.id` |
| `name` | `public` | `string` | `ObjectToLower.name` |
| `triggerMetadata` | `public` | `Object` | `ObjectToLower.triggerMetadata` |
| `triggerMetadata.allowList` | `public` | `undefined` \| `string`[] | - |
| `triggerMetadata.keywordFilter` | `public` | `undefined` \| `string`[] | - |
| `triggerMetadata.mentionRaidProtectionEnabled` | `public` | `undefined` \| `boolean` | - |
| `triggerMetadata.mentionTotalLimit` | `public` | `undefined` \| `number` | - |
| `triggerMetadata.presets` | `public` | `undefined` \| `AutoModerationRuleKeywordPresetType`[] | - |
| `triggerMetadata.regexPatterns` | `public` | `undefined` \| `string`[] | - |
| `triggerType` | `public` | `AutoModerationRuleTriggerType` | `ObjectToLower.triggerType` |

## Accessors

### createdAt

```ts
get createdAt(): Date
```

createdAt gets the creation Date instace of the current object.

#### Returns

`Date`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:27](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/DiscordBase.ts#L27)

***

### createdTimestamp

```ts
get createdTimestamp(): number
```

Create a timestamp for the current object.

#### Returns

`number`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:20](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/extra/DiscordBase.ts#L20)

## Methods

### delete()

```ts
delete(reason?: string): Promise<never>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reason`? | `string` |

#### Returns

`Promise`\<`never`\>

#### Source

[seyfert/src/structures/AutoModerationRule.ts:34](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/AutoModerationRule.ts#L34)

***

### edit()

```ts
edit(body:     Object, reason?: string): Promise<APIAutoModerationRule>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `Object` |
| `body.actions` | `undefined` \| `APIAutoModerationAction`[] |
| `body.enabled`? | `undefined` \| `boolean` |
| `body.eventType`? | `undefined` \| `MessageSend` |
| `body.exemptChannels`? | `undefined` \| `string`[] |
| `body.exemptRoles`? | `undefined` \| `string`[] |
| `body.name`? | `undefined` \| `string` |
| `body.triggerMetadata`? | `undefined` \| `APIAutoModerationRuleTriggerMetadata` |
| `reason`? | `string` |

#### Returns

`Promise`\<`APIAutoModerationRule`\>

#### Source

[seyfert/src/structures/AutoModerationRule.ts:30](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/AutoModerationRule.ts#L30)

***

### fetch()

```ts
fetch(): Promise<APIAutoModerationRule>
```

#### Returns

`Promise`\<`APIAutoModerationRule`\>

#### Source

[seyfert/src/structures/AutoModerationRule.ts:26](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/AutoModerationRule.ts#L26)

***

### fetchCreator()

```ts
fetchCreator(force: boolean): Promise<GuildMember>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<[`GuildMember`](/api/classes/guildmember/)\>

#### Source

[seyfert/src/structures/AutoModerationRule.ts:18](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/AutoModerationRule.ts#L18)

***

### guild()

```ts
guild(force: boolean): Promise<Guild<"cached"> | Guild<"api">>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<[`Guild`](/api/classes/guild/)\<`"cached"`\> \| [`Guild`](/api/classes/guild/)\<`"api"`\>\>

#### Source

[seyfert/src/structures/AutoModerationRule.ts:22](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/AutoModerationRule.ts#L22)

***

### methods()

```ts
static methods(__namedParameters:     Object): Object
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.client` | `BaseClient` |
| `__namedParameters.guildId` | `string` |

#### Returns

`Object`

| Member | Type | Value |
| :------ | :------ | :------ |
| `create` | (`body`: `RESTPostAPIAutoModerationRuleJSONBody`) => `Promise`\<`APIAutoModerationRule`\> | - |
| `delete` | (`ruleId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | - |
| `edit` | (`ruleId`: `string`, `body`: `RESTPatchAPIAutoModerationRuleJSONBody`, `reason`?: `string`) => `Promise`\<`APIAutoModerationRule`\> | - |
| `fetch` | (`ruleId`: `string`) => `Promise`\<`APIAutoModerationRule`\> | - |
| `list` | () => `Promise`\<`RESTGetAPIAutoModerationRulesResult`\> | - |

#### Source

[seyfert/src/structures/AutoModerationRule.ts:38](https://github.com/potoland/potocuit/blob/c4fb0c1/src/structures/AutoModerationRule.ts#L38)
