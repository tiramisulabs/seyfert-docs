---
title: Escuchando Eventos
---

:::note

Esta sección sólo es necesaria para aplicaciones que usen la gateway, por lo que si tu bot está construido en aplicación http-only puedes saltarte esta sección.

:::

En primer lugar, debe indicarle a Seyfert dónde se crearán sus eventos, esto se hace desde su archivo de configuración.

```ts {11} title="seyfert.config.mjs" showLineNumbers
// @ts-check
const { config } = require('seyfert');

export default config.bot({
  token: process.env.BOT_TOKEN ?? "",
  intents: ["Guilds"],
  locations: {
    base: "src",
    output: "dist",
    commands: "commands",
    events: "events" // Aquí se indican los eventos
  }
});
```

Entonces puedes crear un listener exportando la función `createEvent` a un fichero dentro de la carpeta `events`. Veamos un ejemplo de cómo crear el evento `ready`:

```ts title="src/events/botReady.ts" showLineNumbers
import { createEvent } from "seyfert";

export default createEvent({
  data: { once: true, name: "botReady" },
  run(user, client) {
    client.logger.info(`${user.username} está listo`);
  }
})
```

Veamos otro ejemplo con el evento `guildDelete`:

```ts title="src/events/guildDelete.ts" showLineNumbers
import { createEvent } from "seyfert";

export default createEvent({
  data: { name: "guildDelete" },
  run(unGuild, client) {
    if (unGuild.unavailable) return;
    client.logger.info(`He sido expulsado de: ${unGuild.id}`);
  }
})
```

Y eso es todo, puedes crear tantos eventos como quieras. 
Para más información puedes consultar la lista de todos los eventos de la gateway [aquí](https://github.com/tiramisulabs/seyfert/blob/455ed12b0ebcb3ddf55bc8b3274b0ce904becc62/src/events/hooks/index.ts#L23).