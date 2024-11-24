---
title: Understanding 'declare module'
---

:::tip
This technique, known as Module Augmentation, is explained in more detail in the [official TypeScript documentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation).

In this section, we won’t dive deeply into how it works, but we’ll explain what’s necessary to apply it correctly within Seyfert.
:::

> The following code snippets can be used in any TypeScript file in your project. However, it’s recommended to place a single `declare module 'seyfert'` in the main file `src/index.ts` that contains everything your bot needs.

## Clients

Seyfert provides several [client types](./setup-project) to instantiate your bot, which could cause confusion when referencing the client in different parts of your code. To avoid this, you can specify the client type you're using to TypeScript. Be sure to choose only one of the following three implementations:

```ts twoslash {"Gateway":4-5} {"HTTP":7-8} {"Worker":10-11} copy
import type { ParseClient, Client, HttpClient, WorkerClient } from 'seyfert';

declare module 'seyfert' {

    interface UsingClient extends ParseClient<Client<true>> { }
  
  
    interface UsingClient extends ParseClient<HttpClient> { }
  
  
    interface UsingClient extends ParseClient<WorkerClient<true>> { }
}
```

## Middlewares

To use your middlewares throughout the project, you need to inform TypeScript about their structure and composition. Export all middlewares from your code and provide them to Seyfert as follows:

```ts {2,5} copy
// Assuming you exported all middlewares from './middlewares';
import type * as allMiddlewares from './middlewares';

declare module 'seyfert' {
    interface RegisteredMiddlewares extends ParseMiddlewares<typeof allMiddlewares> {}
}
```

This applies similarly to global middlewares, which are automatically executed on every command, even if they aren’t explicitly specified in it.

```ts {2,5} copy
// Assuming you exported all global middlewares from './globalMiddlewares';
import type * as globalMiddlewares from './globalMiddlewares';

declare module 'seyfert' {
    interface GlobalMetadata extends ParseMiddlewares<typeof globalMiddlewares> {}
}
```

> If you’re not yet familiar with middlewares, you can review their use cases and structure in their [dedicated section](../commands/middlewares).

## Languages

To correctly configure types for languages, it’s recommended to establish a primary or base language that you always update. This way, all types will derive from this language, making it easier to keep the rest of the translations up to date.

:::note
Although you can use `.json` files to store languages, it’s highly recommended to use `.ts` or `.js` files. This allows you to include functions and benefit from autocomplete!
:::

```ts {2,5} copy
// Assuming your base language is located in './langs/en';
import type * as defaultLang from './langs/en';

declare module 'seyfert' {
    interface DefaultLocale extends ParseLocales<typeof defaultLang> {}
}
```

> If you didn’t know that Seyfert has an automatic language system, we recommend visiting the [dedicated section on this](../i18n/languages).

## Contexts

We often need to extend contexts to add useful properties or methods, which also requires updating the types.

If you’ve used `extendContext` for this, you can use the following code to infer the type returned by your function and add it to the context:

```ts twoslash {3,6} copy
import { extendContext } from 'seyfert';

const context = extendContext((ctx) => ({ juli: '' }));

declare module 'seyfert' {
    interface ExtendContext extends ReturnType<typeof context> {}
}
```

> If you’re not yet familiar with how Seyfert allows you to easily modify and extend the context, you can review its [dedicated section](../commands/extend-commandcontext).

## Internal Options

Since Seyfert supports various modes of operation, it’s necessary to add types as required by your implementations. For this, `InternalOptions` exists as an interface designed to include properties that transform Seyfert types into something more comprehensive.

```ts twoslash copy
import 'seyfert';
//---cut---
declare module 'seyfert' {
    interface InternalOptions {
        withPrefix: true; // or false
        asyncCache: false; // or true
    }
}
```

### withPrefix

Setting this property to `true` tells Seyfert that the context can include either a message or an interaction, both of which will be optional. By default, `.interaction` is always present in the context.

### asyncCache

Setting this property to `true` tells Seyfert whether the cache will return a promise. By default, Seyfert uses `MemoryAdapter`, a RAM cache that doesn’t return promises, while `RedisAdapter` does.

## Configuration

In Seyfert, you can add more properties to the configuration file `seyfert.config.mjs`, regardless of whether you’re using the `http` or `bot` configuration. This can be done using `ExtendedRC` as follows:

```ts twoslash
import 'seyfert';
//---cut---
declare module 'seyfert' {
    interface ExtendedRC {
        developers: string[];
        // more properties here...
    }
}
```

## Locations

Just as you can extend Seyfert’s base configuration, you can also extend the folder locations object using `ExtendedRCLocations`. This can be done as follows:

```ts twoslash
import 'seyfert';
//---cut---
declare module 'seyfert' {
    interface ExtendedRCLocations {
        models: string;
        // more properties here...
    }
}
```
