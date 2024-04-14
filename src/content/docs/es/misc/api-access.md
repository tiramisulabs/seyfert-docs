---
title: Shorters y Proxy
---

# Shorters

Los **Shorters** son una combinación simple de los métodos de Seyfert y la API de Discord, en Seyfert están destinados a facilitar el acceso de los usuarios a los métodos de todos los objetos de Discord sin necesidad de instanciar su clase representativa o incluso si esta no existe. Esto ahorra muchos recursos en accesos a datos innecesarios.

Supongamos que tenemos un sistema de bienvenida; en su base de datos ya tiene acceso al ID del canal donde enviar su mensaje, entonces, ¿por qué debería buscar ese canal en la caché? ¿Por qué debería obtener datos que no necesita solo para enviar un mensaje? Ahí es donde entran en juego los **Shorters**.

```ts copy ins={13-15}
import { createEvent } from 'seyfert';

const db = new Map<string, string>();

export default createEvent({
  data: { name: 'guildMemberAdd' },
  run: async (member, client) => {
    const channelId = db.get(member.guildId);
    if (!channelId) {
      return;
    }

    await client.messages.write(channelId, {
      content: `Welcome ${member} :wave:`,
    });
  },
});
```

Esto se aplica a todo Seyfert: los métodos en las clases que representan objetos de Discord son solo una capa extra de los **Shorters** para facilitar el acceso. Por ejemplo, por defecto Seyfert no añade propiedades de caché a los objetos, pero proporciona facilidades para acceder a ellas.

```ts copy wrap {11-12}
import { createEvent } from 'seyfert';

const db = new Map<string, string>();

export default createEvent({
  data: { name: 'guildMemberAdd' },
  run: async (member, client) => {
    const channelId = db.get(member.guildId);
    if (!channelId) return;

    // this is a fetch request to cache (force if you want direct api fetch)
    const guild = await member.guild();

    await client.messages.write(channelId, {
      content: `Welcome ${member} to ${guild.name} :wave:`,
    });
  },
});
```

# Proxy

:::caution[Sección sobre Proxy]
Esta sección habla específicamente sobre la implementación del objeto [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy), no sobre la integración de un proxy en el resto.
:::

El objeto proxy es la capa que está debajo de los **Shorters** y se encarga de crear un camino con el código apoyándose en el autocompletado de TypeScript. Es básicamente la API de Discord convertida en un objeto increíblemente rápido.

¿Hay algo que no esté soportado en Seyfert? Entonces accédalo directamente, vamos a crear un hilo directamente con la API de Discord:

```ts wrap copy {10-15}
import { createEvent } from 'seyfert';

export default createEvent({
  data: { name: 'channelCreate' },
  run: async (channel, client) => {
    if (!channel.isThreadOnly()) return;

    // assuming that channel.thread method does not exist
    // the "object" will follow the same structure as the discord endpoints have
    await client.proxy.channels(channel.id).threads.post({
      body: {
        name: 'First thread!',
        message: {
          content: 'Seyfert >',
        },
      },
      reason: "I'm always the first",
    });
  },
});
```

El Proxy tiene acceso a todos los tipos de la API de Discord, por lo que siempre será una forma de mantenerse adelante, incluso dentro de las versiones de desarrollo.
