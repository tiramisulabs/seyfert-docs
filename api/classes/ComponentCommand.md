[seyfert](../globals.md) / ComponentCommand

# Class: `abstract` ComponentCommand

## Constructors

### new ComponentCommand()

```ts
new ComponentCommand(): ComponentCommand
```

#### Returns

[`ComponentCommand`](ComponentCommand.md)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `__filePath?` | `public` | `string` | `undefined` |
| `componentType` | `abstract` | keyof [`ContextComponentCommandInteractionMap`](../interfaces/ContextComponentCommandInteractionMap.md) | `undefined` |
| `middlewares` | `public` | `never`[] | `[]` |
| `props` | `public` | [`ExtraProps`](../interfaces/ExtraProps.md) | `undefined` |
| `type` | `public` | `0` | `InteractionCommandType.COMPONENT` |

## Accessors

### cType

```ts
get cType(): number
```

#### Returns

`number`

#### Source

[seyfert/src/components/componentcommand.ts:24](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcommand.ts#L24)

## Methods

### filter()

```ts
abstract filter(context: ComponentContext<keyof ContextComponentCommandInteractionMap, never>): boolean | Promise<boolean>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`ComponentContext`](ComponentContext.md)\<keyof [`ContextComponentCommandInteractionMap`](../interfaces/ContextComponentCommandInteractionMap.md), `never`\> |

#### Returns

`boolean` \| `Promise`\<`boolean`\>

#### Source

[seyfert/src/components/componentcommand.ts:17](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcommand.ts#L17)

***

### onAfterRun()?

```ts
optional onAfterRun(context: ComponentContext<keyof ContextComponentCommandInteractionMap, never>, error: unknown): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`ComponentContext`](ComponentContext.md)\<keyof [`ContextComponentCommandInteractionMap`](../interfaces/ContextComponentCommandInteractionMap.md), `never`\> |
| `error` | `unknown` |

#### Returns

`any`

#### Source

[seyfert/src/components/componentcommand.ts:28](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcommand.ts#L28)

***

### onInternalError()?

```ts
optional onInternalError(client: UsingClient, error?: unknown): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `error`? | `unknown` |

#### Returns

`any`

#### Source

[seyfert/src/components/componentcommand.ts:31](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcommand.ts#L31)

***

### onMiddlewaresError()?

```ts
optional onMiddlewaresError(context: ComponentContext<keyof ContextComponentCommandInteractionMap, never>, error: string): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`ComponentContext`](ComponentContext.md)\<keyof [`ContextComponentCommandInteractionMap`](../interfaces/ContextComponentCommandInteractionMap.md), `never`\> |
| `error` | `string` |

#### Returns

`any`

#### Source

[seyfert/src/components/componentcommand.ts:30](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcommand.ts#L30)

***

### onRunError()?

```ts
optional onRunError(context: ComponentContext<keyof ContextComponentCommandInteractionMap, never>, error: unknown): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`ComponentContext`](ComponentContext.md)\<keyof [`ContextComponentCommandInteractionMap`](../interfaces/ContextComponentCommandInteractionMap.md), `never`\> |
| `error` | `unknown` |

#### Returns

`any`

#### Source

[seyfert/src/components/componentcommand.ts:29](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcommand.ts#L29)

***

### run()

```ts
abstract run(context: ComponentContext<keyof ContextComponentCommandInteractionMap, never>): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`ComponentContext`](ComponentContext.md)\<keyof [`ContextComponentCommandInteractionMap`](../interfaces/ContextComponentCommandInteractionMap.md), `never`\> |

#### Returns

`any`

#### Source

[seyfert/src/components/componentcommand.ts:18](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/componentcommand.ts#L18)
