[seyfert](../globals.md) / Options

# Function: Options()

```ts
function Options(options: OptionsRecord | () => SubCommand[]): <T>(target: T) => (...args: any[]) => __class<T> & T
```

## Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`OptionsRecord`](../type-aliases/OptionsRecord.md) \| () => [`SubCommand`](../classes/SubCommand.md)[] |

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

[seyfert/src/commands/decorators.ts:125](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/decorators.ts#L125)
