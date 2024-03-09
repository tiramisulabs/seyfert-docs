---
editUrl: false
next: false
prev: false
title: "ModalCommand"
---

## Constructors

### new ModalCommand()

```ts
new ModalCommand(): ModalCommand
```

#### Returns

[`ModalCommand`](/api/classes/modalcommand/)

## Properties

| Property | Type |
| :------ | :------ |
| `__filePath?` | `string` |
| `type` | `1` |

## Methods

### filter()

```ts
abstract filter(interaction: ModalSubmitInteraction<boolean>): boolean | Promise<boolean>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `interaction` | [`ModalSubmitInteraction`](/api/classes/modalsubmitinteraction/)\<`boolean`\> |

#### Returns

`boolean` \| `Promise`\<`boolean`\>

#### Source

[seyfert/src/components/command.ts:26](https://github.com/potoland/potocuit/blob/fe122a1/src/components/command.ts#L26)

***

### run()

```ts
abstract run(interaction: ModalSubmitInteraction<boolean>): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `interaction` | [`ModalSubmitInteraction`](/api/classes/modalsubmitinteraction/)\<`boolean`\> |

#### Returns

`any`

#### Source

[seyfert/src/components/command.ts:27](https://github.com/potoland/potocuit/blob/fe122a1/src/components/command.ts#L27)
