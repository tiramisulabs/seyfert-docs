---
title: Extending CommandContext
---

You may have encountered a situation where you want to receive custom data within the `CommandContext` of Seyfert.

To achieve this, simply set the `context` option when defining the Seyfert client. In this option, you need to use a function called `extendContext`, where you can handle the interaction or message of your command and return the custom data you want to add to the context. For example:

```ts twoslash copy wrap
import { Client, extendContext } from 'seyfert';

const context = extendContext((interaction) => {
  // Here you can add

  return {
    myCoolProp: 'seyfert>>'
  };
});

const client = new Client({ context });
```

:::warning
Even though you’ve extended the context, the properties you’ve added are not typed in the `CommandContext`. To type them, you will need to declare the Seyfert module. Check the [module declaration guide](/getting-started/declare-module) for more information.
:::