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

:::note
Although you have extended the context, the properties you have added aren't typed in the CommandContext. To make them typed you will have to declare Seyfert module. See the [declare module guide](/guides/declare-module) for further information.