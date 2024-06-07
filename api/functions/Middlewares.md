[seyfert](../globals.md) / Middlewares

# Function: Middlewares()

```ts
function Middlewares(cbs: readonly never[]): <T>(target: T) => (...args: any[]) => __class<T> & T
```

## Parameters

| Parameter | Type |
| :------ | :------ |
| `cbs` | readonly `never`[] |

## Returns

`Function`

### Type parameters

| Type parameter |
| :------ |
| `T` *extends* (...`args`: `any`[]) => \{\} |

### Parameters

| Parameter | Type |
| :------ | :------ |
| `target` | `T` |

### Returns

(...`args`: `any`[]) => `__class`\<`T`\> & `T`

## Source

[seyfert/src/commands/decorators.ts:150](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/decorators.ts#L150)
