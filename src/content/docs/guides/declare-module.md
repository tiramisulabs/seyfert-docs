---
title: Understanding `declare module`
---

:::tip

This technique is called module augmentation, learn more in [typescript documentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation)

:::

Due to the versatility of seyfert, it can be confusing to understand exactly how to include content in the project, so seyfert includes different interfaces for the developer to use when defining their own rules.
## Clients

Seyfert includes several types of client to create the instance of a bot, this can create confusion when calling the client anywhere in your code, so you can specify to typescript which one you are using:
```ts copy
declare module 'seyfert' {
  interface UsingClient extends ParseClient<Client<true>> { }
  // interface UsingClient extends ParseClient<WorkerClient<true>> { }
  // interface UsingClient extends ParseClient<HttpClient> { }
} 
```

## Middlewares

In order for you to be able to use your middlewares everywhere, it is again necessary to tell typescript what they are and how they are made up. Export all the middlewares in your code and pass them to seyfert:
```ts copy
import type * as allMiddlewares from './middlewares'

declare module 'seyfert' {
  interface RegisteredMiddlewares extends ParseMiddlewares<typeof allMiddlewares> { }
}
```
This is the same as above, but applies to global middlewares, those that are executed in every command even without specifying them.

```ts copy
import type * as allMiddlewares from './middlewares/globals'

declare module 'seyfert' {
  interface GlobalMetadata extends ParseMiddlewares<typeof globalMiddlewares> { }
} 
```
## Languages

In the Seyfert language system, the default language is prioritized, including the typing provided by typescript.

:::info
It is highly recommended to use `.ts`, `.js` files for your translations, so you can include functions inside them and autocomplete!
:::

:::warning
If you use json for this (not recommended), you must add `../` to the path in your `seyfert.config.js` as typescript ignores json files that are not imported manually.
:::

```ts copy
import type * as defaultLang from './langs/en'

declare module 'seyfert' {
  interface DefaultLocale extends ParseLocales<typeof defaultLang> { }   
} 
```

## Extends Context



## Internal Options

Since seyfert accepts different ways of operating, it becomes more complicated to keep the types true to reality. Because of that there are `InternalOptions`, an interface that expects properties to transform the seyfert types to something more complete.

```ts copy
declare module 'seyfert' {
	interface InternalOptions {
		withPrefix: true | false;
		asyncCache: true | false;
	}
}
```

### withPrefix
Setting this property to `true` tells seyfert that the context can have either message or interaction and both will be optional, by default `.interaction` is always part of the context.

### asyncCache
Setting this property to `true` tells seyfert whether the cache will return a promise or not, by default seyfert uses `MemoryAdapter` a RAM cache which does not return a promise, but `RedisAdapter` does.