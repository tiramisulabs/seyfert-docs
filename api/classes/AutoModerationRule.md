[seyfert](../globals.md) / AutoModerationRule

# Class: AutoModerationRule

## Extends

- `ObjectToLower`\<`APIAutoModerationRule`\>.`DiscordBase`\<`APIAutoModerationRule`\>

## Constructors

### new AutoModerationRule()

```ts
new AutoModerationRule(client: UsingClient, data: APIAutoModerationRule): AutoModerationRule
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `data` | `APIAutoModerationRule` |

#### Returns

[`AutoModerationRule`](AutoModerationRule.md)

#### Inherited from

`ObjectToLower<APIAutoModerationRule>.constructor`

#### Source

[seyfert/src/structures/AutoModerationRule.ts:13](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/AutoModerationRule.ts#L13)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `actions` | `public` | \{ `metadata`: `undefined` \| \{ `channelId`: `undefined` \| `string`; `customMessage`: `undefined` \| `string`; `durationSeconds`: `undefined` \| `number`; \}; `type`: `AutoModerationActionType`; \}[] | `ObjectToLower.actions` |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | - |
| `creatorId` | `public` | `string` | `ObjectToLower.creatorId` |
| `enabled` | `public` | `boolean` | `ObjectToLower.enabled` |
| `eventType` | `public` | `MessageSend` | `ObjectToLower.eventType` |
| `exemptChannels` | `public` | `string`[] | `ObjectToLower.exemptChannels` |
| `exemptRoles` | `public` | `string`[] | `ObjectToLower.exemptRoles` |
| `guildId` | `public` | `string` | `ObjectToLower.guildId` |
| `id` | `public` | `string` | `ObjectToLower.id` |
| `name` | `public` | `string` | `ObjectToLower.name` |
| `triggerMetadata` | `public` | \{ `allowList`: `undefined` \| `string`[]; `keywordFilter`: `undefined` \| `string`[]; `mentionRaidProtectionEnabled`: `undefined` \| `boolean`; `mentionTotalLimit`: `undefined` \| `number`; `presets`: `undefined` \| `AutoModerationRuleKeywordPresetType`[]; `regexPatterns`: `undefined` \| `string`[]; \} | `ObjectToLower.triggerMetadata` |
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

[seyfert/src/structures/AutoModerationRule.ts:33](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/AutoModerationRule.ts#L33)

***

### edit()

```ts
edit(body: {
  actions: undefined | {
     metadata: undefined | {
        channelId: undefined | string;
        customMessage: undefined | string;
        durationSeconds: undefined | number;
       };
     type: AutoModerationActionType;
    }[];
  enabled: undefined | boolean;
  eventType: undefined | MessageSend;
  exemptChannels: undefined | string[];
  exemptRoles: undefined | string[];
  name: undefined | string;
  triggerMetadata: undefined | {
     allowList: undefined | string[];
     keywordFilter: undefined | string[];
     mentionRaidProtectionEnabled: undefined | boolean;
     mentionTotalLimit: undefined | number;
     presets: undefined | AutoModerationRuleKeywordPresetType[];
     regexPatterns: undefined | string[];
    };
}, reason?: string): Promise<AutoModerationRule>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `object` |
| `body.actions` | `undefined` \| \{ `metadata`: `undefined` \| \{ `channelId`: `undefined` \| `string`; `customMessage`: `undefined` \| `string`; `durationSeconds`: `undefined` \| `number`; \}; `type`: `AutoModerationActionType`; \}[] |
| `body.enabled`? | `undefined` \| `boolean` |
| `body.eventType`? | `undefined` \| `MessageSend` |
| `body.exemptChannels`? | `undefined` \| `string`[] |
| `body.exemptRoles`? | `undefined` \| `string`[] |
| `body.name`? | `undefined` \| `string` |
| `body.triggerMetadata`? | `undefined` \| \{ `allowList`: `undefined` \| `string`[]; `keywordFilter`: `undefined` \| `string`[]; `mentionRaidProtectionEnabled`: `undefined` \| `boolean`; `mentionTotalLimit`: `undefined` \| `number`; `presets`: `undefined` \| `AutoModerationRuleKeywordPresetType`[]; `regexPatterns`: `undefined` \| `string`[]; \} |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AutoModerationRule`](AutoModerationRule.md)\>

#### Source

[seyfert/src/structures/AutoModerationRule.ts:29](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/AutoModerationRule.ts#L29)

***

### fetch()

```ts
fetch(): Promise<AutoModerationRule>
```

#### Returns

`Promise`\<[`AutoModerationRule`](AutoModerationRule.md)\>

#### Source

[seyfert/src/structures/AutoModerationRule.ts:25](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/AutoModerationRule.ts#L25)

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

`Promise`\<[`GuildMember`](GuildMember.md)\>

#### Source

[seyfert/src/structures/AutoModerationRule.ts:17](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/AutoModerationRule.ts#L17)

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

`Promise`\<[`Guild`](Guild.md)\<`"cached"`\> \| [`Guild`](Guild.md)\<`"api"`\>\>

#### Source

[seyfert/src/structures/AutoModerationRule.ts:21](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/AutoModerationRule.ts#L21)

***

### methods()

```ts
static methods(__namedParameters: {
  client: UsingClient;
  guildId: string;
 }): {
  create: (body: RESTPostAPIAutoModerationRuleJSONBody) => Promise<AutoModerationRule>;
  delete: (ruleId: string, reason?: string) => Promise<never>;
  edit: (ruleId: string, body: RESTPatchAPIAutoModerationRuleJSONBody, reason?: string) => Promise<AutoModerationRule>;
  fetch: (ruleId: string) => Promise<AutoModerationRule>;
  list: () => Promise<AutoModerationRule[]>;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | `object` |
| `__namedParameters.client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `__namedParameters.guildId` | `string` |

#### Returns

```ts
{
  create: (body: RESTPostAPIAutoModerationRuleJSONBody) => Promise<AutoModerationRule>;
  delete: (ruleId: string, reason?: string) => Promise<never>;
  edit: (ruleId: string, body: RESTPatchAPIAutoModerationRuleJSONBody, reason?: string) => Promise<AutoModerationRule>;
  fetch: (ruleId: string) => Promise<AutoModerationRule>;
  list: () => Promise<AutoModerationRule[]>;
}
```

| Member | Type | Value |
| :------ | :------ | :------ |
| `create` | (`body`: `RESTPostAPIAutoModerationRuleJSONBody`) => `Promise`\<[`AutoModerationRule`](AutoModerationRule.md)\> | ... |
| `delete` | (`ruleId`: `string`, `reason`?: `string`) => `Promise`\<`never`\> | ... |
| `edit` | (`ruleId`: `string`, `body`: `RESTPatchAPIAutoModerationRuleJSONBody`, `reason`?: `string`) => `Promise`\<[`AutoModerationRule`](AutoModerationRule.md)\> | ... |
| `fetch` | (`ruleId`: `string`) => `Promise`\<[`AutoModerationRule`](AutoModerationRule.md)\> | ... |
| `list` | () => `Promise`\<[`AutoModerationRule`](AutoModerationRule.md)[]\> | ... |

#### Source

[seyfert/src/structures/AutoModerationRule.ts:37](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/AutoModerationRule.ts#L37)
