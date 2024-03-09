---
editUrl: false
next: false
prev: false
title: "ComponentCommand"
---

## Constructors

### new ComponentCommand()

```ts
new ComponentCommand(): ComponentCommand
```

#### Returns

[`ComponentCommand`](/api/classes/componentcommand/)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `__filePath?` | `public` | `string` |
| `componentType` | `abstract` | `ComponentType` |
| `type` | `public` | `0` |

## Methods

### filter()

```ts
abstract filter(interaction: ComponentInteraction<boolean, APIMessageComponentInteraction> | StringSelectMenuInteraction<string[]>): boolean | Promise<boolean>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `interaction` | [`ComponentInteraction`](/api/classes/componentinteraction/)\<`boolean`, `APIMessageComponentInteraction`\> \| [`StringSelectMenuInteraction`](/api/classes/stringselectmenuinteraction/)\<`string`[]\> |

#### Returns

`boolean` \| `Promise`\<`boolean`\>

#### Source

[seyfert/src/components/command.ts:16](https://github.com/potoland/potocuit/blob/fe122a1/src/components/command.ts#L16)

***

### run()

```ts
abstract run(interaction: ComponentInteraction<boolean, APIMessageComponentInteraction> | StringSelectMenuInteraction<string[]>): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `interaction` | [`ComponentInteraction`](/api/classes/componentinteraction/)\<`boolean`, `APIMessageComponentInteraction`\> \| [`StringSelectMenuInteraction`](/api/classes/stringselectmenuinteraction/)\<`string`[]\> |

#### Returns

`any`

#### Source

[seyfert/src/components/command.ts:17](https://github.com/potoland/potocuit/blob/fe122a1/src/components/command.ts#L17)
