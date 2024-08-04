---
title: Using Cloudflare Workers
---
Seyfert supports Cloudflare Workers, you can setup it by configuring `seyfert.config.js` with `config.http` [see more info here](/guides/setup-project)

:::note

Since Cloudflare Workers doesn't support fs, using it with seyfert might be a little tricky as you may have to import each command/language/component
and load it manually

:::

:::danger

You must set `compilerOptions.module` to `ESNext` in your `tsconfig.json` since cf workers only supports ESM

:::

and your `index.ts` shall follow the following example:

```ts copy
import '../seyfert.config.js'; // ye, importing our seyfert.config.js
import { HttpClient } from 'seyfert';

import Ping from './commands/ping.js';

const client = new HttpClient();

client.start()
  .then(async () => {
    // we need to load commands manually
    await client.commands!.load('', client, [Ping]);
  });

export default {
  fetch(req: Request) {
    return client.fetch(req);
  }
}
```

and the same when we load both `components` and `langs`

```ts copy
import '../seyfert.config.js'; // ye, importing our seyfert.config.js
import { HttpClient } from 'seyfert';

// commands
import Ping from './commands/ping.js';

// langs
import EnLang from './languages/en.js';

// components
import ButtonC from './components/buttonHandle.js';

const client = new HttpClient();

client.start()
  .then(async () => {
    // we need to load commands manually
    await client.commands!.load('', client, [Ping]);

    // load languages
    await client.langs!.load('', [{ name: 'en', file: EnLang}]);

    // load components
    await client.components!.load('', client, [ButtonC]);
  });

export default {
  fetch(req: Request) {
    return client.fetch(req);
  }
}
```

and then onwards we can use seyfert with Cloudflare Workers.
