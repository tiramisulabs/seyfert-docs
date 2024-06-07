[seyfert](../globals.md) / PollBuilder

# Class: PollBuilder

## Constructors

### new PollBuilder()

```ts
new PollBuilder(data: DeepPartial<RESTAPIPollCreate>): PollBuilder
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `DeepPartial`\<`RESTAPIPollCreate`\> |

#### Returns

[`PollBuilder`](PollBuilder.md)

#### Source

[seyfert/src/builders/Poll.ts:7](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Poll.ts#L7)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `data` | `public` | `DeepPartial`\<`RESTAPIPollCreate`\> | `{}` |

## Methods

### addAnswers()

```ts
addAnswers(...answers: RestOrArray<PollMedia>): PollBuilder
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`answers` | `RestOrArray`\<[`PollMedia`](../type-aliases/PollMedia.md)\> |

#### Returns

[`PollBuilder`](PollBuilder.md)

#### Source

[seyfert/src/builders/Poll.ts:11](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Poll.ts#L11)

***

### allowMultiselect()

```ts
allowMultiselect(value: boolean): PollBuilder
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `value` | `boolean` | `true` |

#### Returns

[`PollBuilder`](PollBuilder.md)

#### Source

[seyfert/src/builders/Poll.ts:36](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Poll.ts#L36)

***

### resolvedPollMedia()

```ts
private resolvedPollMedia(data: PollMedia): {
  emoji: resolve;
  text: data.text;
 } | {
  emoji: resolve;
  text: data.text;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`PollMedia`](../type-aliases/PollMedia.md) |

#### Returns

\{
  `emoji`: `resolve`;
  `text`: `data.text`;
 \} \| \{
  `emoji`: `resolve`;
  `text`: `data.text`;
 \}

#### Source

[seyfert/src/builders/Poll.ts:45](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Poll.ts#L45)

***

### setAnswers()

```ts
setAnswers(...answers: RestOrArray<PollMedia>): PollBuilder
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`answers` | `RestOrArray`\<[`PollMedia`](../type-aliases/PollMedia.md)\> |

#### Returns

[`PollBuilder`](PollBuilder.md)

#### Source

[seyfert/src/builders/Poll.ts:18](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Poll.ts#L18)

***

### setDuration()

```ts
setDuration(hours: number): PollBuilder
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `hours` | `number` |

#### Returns

[`PollBuilder`](PollBuilder.md)

#### Source

[seyfert/src/builders/Poll.ts:31](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Poll.ts#L31)

***

### setQuestion()

```ts
setQuestion(data: PollMedia): PollBuilder
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`PollMedia`](../type-aliases/PollMedia.md) |

#### Returns

[`PollBuilder`](PollBuilder.md)

#### Source

[seyfert/src/builders/Poll.ts:23](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Poll.ts#L23)

***

### toJSON()

```ts
toJSON(): RESTAPIPollCreate
```

#### Returns

`RESTAPIPollCreate`

#### Source

[seyfert/src/builders/Poll.ts:41](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/builders/Poll.ts#L41)
