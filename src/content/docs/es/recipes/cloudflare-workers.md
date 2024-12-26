---
title: Usando Cloudflare Workers
---

Seyfert es compatible con Cloudflare Workers, puedes configurarlo editando `seyfert.config.mjs` con `config.http` [ver más información aquí](/getting-started/setup-project#configuration).

:::note

Dado que Cloudflare Workers no soporta `fs`, usarlo con Seyfert puede ser un poco complicado, ya que tendrás que importar manualmente cada comando, idioma y componente y cargarlos uno por uno.

:::

:::danger

Debes configurar `compilerOptions.module` como `ESNext` en tu `tsconfig.json`, ya que los Cloudflare Workers solo son compatibles con ESM.

:::

Primero necesitarás instalar un adaptador para Seyfert, puedes hacerlo ejecutando:

```bash copy
npm add @slipher/generic-adapter
```

Y tu archivo `index.ts` debería seguir el siguiente ejemplo:

```ts copy
import '../seyfert.config.mjs'; // sí, importando nuestro seyfert.config.mjs
import { HttpClient } from 'seyfert';
import { GenericAdapter } from '@slipher/generic-adapter';

import Ping from './commands/ping.js';

const client = new HttpClient();
const adapter = new GenericAdapter(client);

client.start()
  .then(async () => {
    // necesitamos cargar los comandos manualmente
    await client.commands!.set('', client, [Ping]);
  });

adapter.start();

export default {
  fetch(req: Request) {
    return adapter.fetch(req);
  }
}
```

Lo mismo aplica al cargar tanto `components` como `langs`:

```ts copy
import '../seyfert.config.mjs'; // sí, importando nuestro seyfert.config.mjs
import { HttpClient } from 'seyfert';

// comandos
import Ping from './commands/ping.js';

// idiomas
import EnLang from './languages/en.js';

// componentes
import ButtonC from './components/buttonHandle.js';

const client = new HttpClient();

client.start()
  .then(async () => {
    // necesitamos cargar los comandos manualmente
    await client.commands!.set('', client, [Ping]);

    // cargar idiomas
    await client.langs!.set('', [{ name: 'en', file: EnLang }]);

    // cargar componentes
    await client.components!.set('', client, [ButtonC]);
  });

adapter.start();

export default {
  fetch(req: Request) {
    return adapter.fetch(req);
  }
}
```

Y desde este punto ya podemos usar Seyfert con Cloudflare Workers.
