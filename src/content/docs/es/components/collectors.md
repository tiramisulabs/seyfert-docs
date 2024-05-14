---
title: Collectors
---

Ahora que has aprendido a manejar componentes de manera estática, podrías haberte preguntado cómo obtener más contexto sobre lo que sucedió antes de enviar el componente.

Seyfert incluye `colectores de componentes de mensajes`, que son una manera fácil de manejar esas interacciones recibidas de un mensaje específico y te permiten obtener más contexto sobre lo que sucedió antes de enviar el componente.

:::note

Si el proceso donde creaste el colector de componentes se detiene, el colector dejará de funcionar y las interacciones del mensaje no serán manejadas.
:::

## Construcción de colectores

Los colectores se construyen utilizando el método [`createComponentCollector`](/api/classes/basemessage#createcomponentcollector) en un mensaje, el cual es heredado por [`BaseMessage`](/api/classes/basemessage). Este método devuelve un objeto que representa un colector.

Aquí tienes un ejemplo de cómo construir un colector simple después de enviar un mensaje con un botón adjunto en un comando de `hola mundo`.

```ts ins={30} showLineNumbers copy
import {
  Button,
  ActionRow,
  Command,
  Declare,
  type CommandContext,
} from 'seyfert';

import { ButtonStyle } from 'seyfert/lib/types';

@Declare({
  name: 'hello',
  description: 'I will send you a hello world message',
})
export default class HelloWorldCommand extends Command {
  async run(ctx: CommandContext) {
    const button = new Button()
      .setCustomId('hello')
      .setLabel('Hello')
      .setStyle(ButtonStyle.Primary);

    const row = new ActionRow<Button>().setComponents([button]);

    // Para obtener el mensaje al que se le adjunta un botón, puedes configurar la fetchReply en "true".
    const message = await ctx.write(
      {
        content: 'You want a hello world. Click the button below.',
        components: [row],
      },
      true
    );

    const collector = message.createComponentCollector();
  }
}
```

## Manejo de interacciones dentro de un colector
Una vez creado el colector a partir de un mensaje, vamos a manejar la interacción del botón con la función `run` del colector.

Aquí tienes un ejemplo:

```ts ins={35-37} showLineNumbers copy
import {
  Button,
  ActionRow,
  Command,
  Declare,
  type CommandContext,
} from 'seyfert';

import { ButtonStyle } from 'seyfert/lib/types';

@Declare({
  name: 'hello',
  description: 'I will send you a hello world message',
})
export default class HelloWorldCommand extends Command {
  async run(ctx: CommandContext) {
    const button = new Button()
      .setCustomId('hello')
      .setLabel('Hello')
      .setStyle(ButtonStyle.Primary);

    const row = new ActionRow<Button>().setComponents([button]);

    const message = await ctx.write(
      {
        content: 'You want a hello world. Click the button below.',
        components: [row],
      },
      true
    );

    const collector = message.createComponentCollector();

    // estamos colocando el ID personalizado que hemos establecido en el botón como primer parámetro de la función.
    collector.run('hello', async (i) => {
      if (i.isButton()) return i.write({ content: 'Hello World 👋' });
    });
  }
}
```

## Filtrando interacciones
Podrías haber pensado en filtrar la interacción recibida en la función run para limitar, por ejemplo, al usuario que está interactuando con el botón.

Habrías añadido una condición dentro de la función run de esta manera:

```ts
if (i.user.id === ctx.author.id)
  return i.write({ content: 'Do not touch the button' });
```

Esto limitará el uso del botón solo al usuario que ejecutó el comando.

Pero Seyfert implementa simplemente una opción de `filter` al crear el colector, que espera una función de retorno que devuelva un booleano.

Vamos a implementar el filtro para filtrar al usuario que ejecutó la interacción y filtrar la interacción solo para las interacciones de botón.

```ts ins={33} showLineNumbers copy
import {
  Button,
  ActionRow,
  Command,
  Declare,
  type CommandContext,
} from 'seyfert';

import { ButtonStyle } from 'seyfert/lib/types';

@Declare({
  name: 'hello',
  description: 'I will send you a hello world message',
})
export default class HelloWorldCommand extends Command {
  async run(ctx: CommandContext) {
    const button = new Button()
      .setCustomId('hello')
      .setLabel('Hello')
      .setStyle(ButtonStyle.Primary);

    const row = new ActionRow<Button>().setComponents([button]);

    const message = await ctx.write(
      {
        content: 'You want a hello world. Click the button below.',
        components: [row],
      },
      true
    );

    const collector = message.createComponentCollector({
      filter: (i) => i.user.id === ctx.author.id && i.isButton(),
    });

    collector.run('hello', async (i) => {
      return i.write({ content: 'Hello World 👋' });
    });
  }
}
```

## Manejo del evento onStop del colector

Un colector podría detenerse, lo que significa que no recogerá más interacciones del mensaje. Para manejar la detención, debemos pasar una función de retorno a la opción `onStop` al crear el colector.

La función de retorno tomará dos parámetros:

- `reason`. Un texto que indica la razón por la cual el colector se ha detenido. Lo más común es `timeout` o `idle` si hemos agregado la propiedad de tiempo de espera o inactividad a nuestro colector. Puedes establecer la razón cuando detienes manualmente el colector dentro de la función `collector.stop()`.

- `refresh`. Una función que puedes ejecutar para refrescar el colector, haciendo que vuelva a recoger interacciones como lo hacía antes.

Aquí tienes un ejemplo de cómo añadimos un tiempo de inactividad al colector de 1000ms y luego, cada vez que entra en la función de retorno `onStop`, lo refrescamos.

```ts ins={34-38} showLineNumbers copy
import {
  Button,
  ActionRow,
  Command,
  Declare,
  type CommandContext,
} from 'seyfert';

import { ButtonStyle } from 'seyfert/lib/types';

@Declare({
  name: 'hello',
  description: 'I will send you a hello world message',
})
export default class HelloWorldCommand extends Command {
  async run(ctx: CommandContext) {
    const button = new Button()
      .setCustomId('hello')
      .setLabel('Hello')
      .setStyle(ButtonStyle.Primary);

    const row = new ActionRow<Button>().setComponents([button]);

    const message = await ctx.write(
      {
        content: 'You want a hello world. Click the button below.',
        components: [row],
      },
      true
    );

    const collector = message.createComponentCollector({
      filter: (i) => i.user.id === ctx.author.id && i.isButton(),
      onStop(reason, refresh) {
        //this will refresh the collector everytime it stops by timeout
        if (reason === 'idle') return refresh();
      },
      idle: 1e3, //1000ms
    });

    collector.run('hello', async (i) => {
      return i.write({ content: 'Hello World 👋' });
    });
  }
}
```

## Manejo de Modales con colectores

Dado que los modales no son componentes de mensajes, no es posible crear un `colector de componentes de mensajes`, pero Seyfert introduce la posibilidad de crearlo utilizando el método `run` dentro del constructor de modales, que espera una función de retorno que manejará las interacciones.

Aquí tienes un ejemplo utilizando `run` dentro del constructor de modales:

```ts showLineNumbers copy
import {
  Modal,
  Command,
  Declare,
  type ModalSubmitInteraction,
  type CommandContext,
} from 'seyfert';

@Declare({
  name: 'hello',
  description: 'I will send you a hello world message',
})
export default class HelloWorldCommand extends Command {
  async run(ctx: CommandContext) {
    const modal = new Modal()
      .setCustomId('hello')
      .setTitle('Hello')
      .run(this.handleModal);

    await ctx.interaction.modal(modal);
  }

  async handleModal(i: ModalSubmitInteraction) {
    return i.write({ content: 'Hello World 👋' });
  }
}
```
