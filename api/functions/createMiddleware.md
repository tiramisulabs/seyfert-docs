[seyfert](../globals.md) / createMiddleware

# Function: createMiddleware()

```ts
function createMiddleware<T, C>(data: MiddlewareContext<T, C>): MiddlewareContext<T, C>
```

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | `any` |
| `C` *extends* [`MenuCommandContext`](../classes/MenuCommandContext.md)\<[`UserCommandInteraction`](../classes/UserCommandInteraction.md)\<`boolean`\> \| [`MessageCommandInteraction`](../classes/MessageCommandInteraction.md)\<`boolean`\>, `never`\> \| [`CommandContext`](../classes/CommandContext.md)\<\{\}, `never`\> \| [`ComponentContext`](../classes/ComponentContext.md)\<keyof [`ContextComponentCommandInteractionMap`](../interfaces/ContextComponentCommandInteractionMap.md), `never`\> \| [`ModalContext`](../classes/ModalContext.md)\<`never`\> | [`MenuCommandContext`](../classes/MenuCommandContext.md)\<[`UserCommandInteraction`](../classes/UserCommandInteraction.md)\<`boolean`\> \| [`MessageCommandInteraction`](../classes/MessageCommandInteraction.md)\<`boolean`\>, `never`\> \| [`CommandContext`](../classes/CommandContext.md)\<\{\}, `never`\> \| [`ComponentContext`](../classes/ComponentContext.md)\<keyof [`ContextComponentCommandInteractionMap`](../interfaces/ContextComponentCommandInteractionMap.md), `never`\> \| [`ModalContext`](../classes/ModalContext.md)\<`never`\> |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`MiddlewareContext`](../type-aliases/MiddlewareContext.md)\<`T`, `C`\> |

## Returns

[`MiddlewareContext`](../type-aliases/MiddlewareContext.md)\<`T`, `C`\>

## Source

[seyfert/src/commands/applications/options.ts:89](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/applications/options.ts#L89)
