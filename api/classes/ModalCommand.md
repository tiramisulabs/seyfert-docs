[seyfert](../globals.md) / ModalCommand

# Class: `abstract` ModalCommand

## Constructors

### new ModalCommand()

```ts
new ModalCommand(): ModalCommand
```

#### Returns

[`ModalCommand`](ModalCommand.md)

## Properties

| Property | Type | Default value |
| :------ | :------ | :------ |
| `__filePath?` | `string` | `undefined` |
| `middlewares` | `never`[] | `[]` |
| `props` | [`ExtraProps`](../interfaces/ExtraProps.md) | `undefined` |
| `type` | `1` | `InteractionCommandType.MODAL` |

## Methods

### filter()

```ts
abstract filter(context: ModalContext<never>): boolean | Promise<boolean>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`ModalContext`](ModalContext.md)\<`never`\> |

#### Returns

`boolean` \| `Promise`\<`boolean`\>

#### Source

[seyfert/src/components/modalcommand.ts:11](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcommand.ts#L11)

***

### onAfterRun()?

```ts
optional onAfterRun(context: ModalContext<never>, error: unknown): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`ModalContext`](ModalContext.md)\<`never`\> |
| `error` | `unknown` |

#### Returns

`any`

#### Source

[seyfert/src/components/modalcommand.ts:18](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcommand.ts#L18)

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

[seyfert/src/components/modalcommand.ts:21](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcommand.ts#L21)

***

### onMiddlewaresError()?

```ts
optional onMiddlewaresError(context: ModalContext<never>, error: string): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`ModalContext`](ModalContext.md)\<`never`\> |
| `error` | `string` |

#### Returns

`any`

#### Source

[seyfert/src/components/modalcommand.ts:20](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcommand.ts#L20)

***

### onRunError()?

```ts
optional onRunError(context: ModalContext<never>, error: unknown): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`ModalContext`](ModalContext.md)\<`never`\> |
| `error` | `unknown` |

#### Returns

`any`

#### Source

[seyfert/src/components/modalcommand.ts:19](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcommand.ts#L19)

***

### run()

```ts
abstract run(context: ModalContext<never>): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`ModalContext`](ModalContext.md)\<`never`\> |

#### Returns

`any`

#### Source

[seyfert/src/components/modalcommand.ts:12](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/components/modalcommand.ts#L12)
