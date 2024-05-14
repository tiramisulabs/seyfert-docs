---
title: Using Cloudfare Worker
---
Seyfert supports cloudfare workers ¡YAY! you can setup it by configuring `seyfert.config.js` with `config.http` [see more info here](http://localhost:4321/guides/setup-project)

:::note

Since Cloudfare Workers doesn't support fs, using it with seyfert can be a little tricky because you will need to import each command/language/component
and load it manually

:::

:::danger

You need to put `compilerOptions.module` to `ESNext` in your `tsconfig.json` since cf workers only supports ESM

:::

and on our `index.ts` should follow the next example:

```ts copy
import '../seyfert.config.js'; // ye, importing our seyfert.config.js
import { HttpClient } from 'seyfert';

import Ping from './commands/ping.js'

const client = new HttpClient();

client.start()
  .then(async () => {
    // we need to load commands manually
    await client.commands!.load('', client, [Ping])
  });

export default {
  fetch(req: Request) {
    return client.fetch(req);
  }
}
```

and in the same when we load `components` and `langs`

```ts copy
import '../seyfert.config.js'; // ye, importing our seyfert.config.js
import { HttpClient } from 'seyfert';

// commands
import Ping from './commands/ping.js'

// langs
import EnLang from './languages/en.js'

// components
import ButtonC from './components/buttonHandle.js'

const client = new HttpClient();

client.start()
  .then(async () => {
    // we need to load commands manually
    await client.commands!.load('', client, [Ping])

    // load languages
    await client.langs!.load('', [{ name: 'en', file: EnLang}])

    // load components
    await client.components!.load('', client, [ButtonC])
  });

export default {
  fetch(req: Request) {
    return client.fetch(req);
  }
}
```

and we are ready to use seyfert with cloudfare workers