[seyfert](../globals.md) / LangRouter

# Function: LangRouter()

```ts
function LangRouter(
   userLocale: string, 
   defaultLang: string, 
   langs: Partial<Record<string, any>>): (route: string[], args: any[]) => __InternalParseLocale<DefaultLocale> & {
  get: DefaultLocale;
}
```

## Parameters

| Parameter | Type |
| :------ | :------ |
| `userLocale` | `string` |
| `defaultLang` | `string` |
| `langs` | `Partial`\<`Record`\<`string`, `any`\>\> |

## Returns

`Function`

### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `route` | `string`[] | `undefined` |
| `args` | `any`[] | `[]` |

### Returns

[`__InternalParseLocale`](../type-aliases/InternalParseLocale.md)\<[`DefaultLocale`](../interfaces/DefaultLocale.md)\> & \{
  `get`: [`DefaultLocale`](../interfaces/DefaultLocale.md);
 \}

## Source

[seyfert/src/langs/router.ts:3](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/langs/router.ts#L3)
