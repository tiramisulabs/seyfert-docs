[seyfert](../globals.md) / \_\_InternalParseLocale

# Type alias: \_\_InternalParseLocale\<T\>

```ts
type __InternalParseLocale<T>: { [K in keyof T]: T[K] extends Function ? Function : T[K] extends string ? Object : T[K] extends unknown[] ? Object : T[K] extends Record<string, any> ? __InternalParseLocale<T[K]> & Object : never };
```

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* `Record`\<`string`, `any`\> |

## Source

[seyfert/src/langs/router.ts:41](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/langs/router.ts#L41)
