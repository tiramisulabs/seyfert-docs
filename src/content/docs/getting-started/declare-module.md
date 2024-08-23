---
title: Understanding `declare module`
---

:::tip

This technique is called module augmentation, learn more in [typescript documentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation)

:::

Due to the versatility of seyfert, it can get confusing understanding exactly how to include content in the project, so seyfert includes various interfaces for the developer to use when defining their own rules.
## Clients

Seyfert includes several types of client to create the instance of a bot, this might create confusion when calling the client anywhere in your code, so you may specify to typescript which one you are using:
```ts copy
declare module 'seyfert' {
  interface UsingClient extends ParseClient<Client<true>> { }
  // interface UsingClient extends ParseClient<WorkerClient<true>> { }
  // interface UsingClient extends ParseClient<HttpClient> { }
} 
```

## Extends Context

As you may notice when you are extending the CommandContext, the properties you want to be either extended or added in are not typed. To do that we ought to declare Seyfert's module.

We have to edit the `ExtendContext` interface within Seyfert's module which expects to receive the data to add.

```ts showLineNumbers copy wrap ins={11-14}

declare module 'seyfert' {
    //we are using ReturnType which gives us the typeof the whatever the function context returns.
    interface ExtendContext extends ReturnType<typeof context>;
}

```
:::note 

The context variable in the example above is the one we are using to extend the context. For further information see [extending context guide](/misc/extendcontext).
::: 
## Internal Options

Since seyfert accepts different ways of operating, it becomes more complicated to keep the types true to reality. Because of that there is `InternalOptions`, an interface that expects properties to transform the seyfert types to something more complete.

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
Setting this property to `true` tells seyfert whether the cache will return a promise, by default seyfert uses `MemoryAdapter` a RAM cache which does not return a promise, but `RedisAdapter` does.