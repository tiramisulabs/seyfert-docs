---
editUrl: false
next: false
prev: false
title: "LangRouter"
---

```ts
LangRouter(
   userLocale: string, 
   defaultLang: string, 
   langs: Partial<Record<string, any>>): (route: string[], args: any[]) => __InternalParseLocale<DefaultLocale> & Object
```

## Parameters

| Parameter | Type |
| :------ | :------ |
| `userLocale` | `string` |
| `defaultLang` | `string` |
| `langs` | `Partial`\<`Record`\<`string`, `any`\>\> |

## Returns

`Function`

> ### Parameters
>
> | Parameter | Type | Default value |
> | :------ | :------ | :------ |
> | `route` | `string`[] | `undefined` |
> | `args` | `any`[] | `[]` |
>
> ### Returns
>
> [`__InternalParseLocale`](/api/type-aliases/internalparselocale/)\<[`DefaultLocale`](/api/interfaces/defaultlocale/)\> & `Object`
>

## Source

[seyfert/src/langs/router.ts:3](https://github.com/potoland/potocuit/blob/c4fb0c1/src/langs/router.ts#L3)
