[seyfert](../globals.md) / Poll

# Class: Poll

## Extends

- `ObjectToLower`\<`Omit`\<`APIPoll`, `"expiry"`\>\>.`Base`

## Constructors

### new Poll()

```ts
new Poll(
   client: UsingClient, 
   data: APIPoll, 
   channelId: string, 
   messageId: string): Poll
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `data` | `APIPoll` |
| `channelId` | `string` |
| `messageId` | `string` |

#### Returns

[`Poll`](Poll.md)

#### Inherited from

`ObjectToLower<Omit<APIPoll, 'expiry'>>.constructor`

#### Source

[seyfert/src/structures/Poll.ts:11](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Poll.ts#L11)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `allowMultiselect` | `public` | `boolean` | `ObjectToLower.allowMultiselect` |
| `answers` | `public` | \{ `answerId`: `number`; `pollMedia`: \{ `emoji`: `undefined` \| \{ `animated`: `undefined` \| `boolean`; `id`: `null` \| `string`; `name`: `null` \| `string`; \}; `text`: `undefined` \| `string`; \}; \}[] | `ObjectToLower.answers` |
| `channelId` | `readonly` | `string` | - |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | - |
| `expiry` | `public` | `number` | - |
| `layoutType` | `public` | `Default` | `ObjectToLower.layoutType` |
| `messageId` | `readonly` | `string` | - |
| `question` | `public` | \{ `emoji`: `undefined` \| \{ `animated`: `undefined` \| `boolean`; `id`: `null` \| `string`; `name`: `null` \| `string`; \}; `text`: `undefined` \| `string`; \} | `ObjectToLower.question` |
| `question.emoji` | `public` | `undefined` \| \{ `animated`: `undefined` \| `boolean`; `id`: `null` \| `string`; `name`: `null` \| `string`; \} | - |
| `question.text` | `public` | `undefined` \| `string` | - |
| `results` | `public` | `undefined` \| \{ `answerCounts`: \{ `count`: `number`; `id`: `number`; `meVoted`: `boolean`; \}[]; `isFinalized`: `boolean`; \} | `ObjectToLower.results` |

## Methods

### end()

```ts
end(): Promise<Message>
```

#### Returns

`Promise`\<[`Message`](Message.md)\>

#### Source

[seyfert/src/structures/Poll.ts:21](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Poll.ts#L21)

***

### getAnswerVoters()

```ts
getAnswerVoters(id: ValidAnswerId): Promise<User[]>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `ValidAnswerId` |

#### Returns

`Promise`\<[`User`](User.md)[]\>

#### Source

[seyfert/src/structures/Poll.ts:25](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/Poll.ts#L25)
