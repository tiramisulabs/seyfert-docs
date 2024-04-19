---
title: Extending CommandContext
---

You may have encountered a situation when you want to receive custom data within Seyfert [CommmandContext](/api/classes/commandcontext).

This is possible within Seyfert all you need to do is setting the `context` option when defining Seyfert's client, which expects the data you want to add to the context to be returned in the first parameter callback of a function predefined by Seyfert called `extendContext`.

```ts showLineNumbers copy wrap
import { Client, extendContext } from 'seyfert';

const context = extendContext((interaction) => {
    //here you can handle your custom context with the interaction/message of your command

    return {
        myCoolProp: 'seyfert>>'
    }
})

const client = new Client({ context });
```

As you may notice the properties you want to be added in the CommandContext are not typed. To do that we have to declare the module as we did previously. 

We have to edit the `ExtendContext` interface within Seyfert module which expects to receive the data to add. 

```ts showLineNumbers copy wrap ins={11-14}

import { Client, extendContext } from 'seyfert';

const context = extendContext((interaction) => {
    return {
        myCoolProp: 'seyfert>>'
    }
})

const client = new Client({ context });

declare module 'seyfert' {
    //we are using ReturnType which gives us the typeof the whatever the function context returns.
    interface ExtendContext extends ReturnType<typeof context>;
}