---
title: Enviando Mensajes
---

La característica básica de los Bots de Discord es enviar mensajes en todo Discord. Y en Seyfert puedes enviarlos de la manera más fácil.

Primero que nada, tenemos que configurar un comando básico de `Hola mundo`.

```ts title="src/commands/helloworld.ts" showLineNumbers
import { Command, Declare } from 'seyfert';

@Declare({
  name: 'helloworld',
  description: 'Envía un mensaje básico de hola mundo.',
})
export default class HelloWorldCommand extends Command {
  async run(ctx: CommandContext) {}
}
```

Habiendo configurado nuestro comando básico de `Hola mundo`, estamos listos para enviar nuestro primer mensaje usando la función `CommandContext.write()`.

```ts title="src/commands/helloworld.ts" ins={12} showLineNumbers
import { Command, Declare } from 'seyfert';

@Declare({
  name: 'helloworld',
  description: 'Envía un mensaje básico de hola mundo.',
})
export default class HelloWorldCommand extends Command {
  async run(ctx: CommandContext) {
    return ctx.write({ content: 'Hola mundo 👋' });
  }
}
```

La función `CommandContext.write()` responderá al comando.

## EditOrReply

Pero, ¿qué pasa si queremos responder al comando o editar su respuesta en lugar de simplemente responder?

Podemos usar la función `CommandContext.editOrReply()`. Esta función se utiliza para responder al comando o, si la respuesta ya ha sido enviada, editarla.

Esta función es muy útil si queremos desarrollar un comando que responda al comando o, si el comando fue respondido, la respuesta será editada. Si solo estamos usando un `CommandContext.write()` simple, enviaremos una respuesta en todos los casos.

Aquí hay un ejemplo de cómo implementar esta función.

```ts title="src/commands/helloworld.ts" ins={3,7} showLineNumbers
export default class HelloWorldCommand extends Command {
  async run(ctx: CommandContext) {
    await ctx.deferReply();

    // hacer algo que toma tiempo y es aburrido

    await ctx.editOrReply({ content: 'Hice cosas' });
  }
}
```

## Enviando mensajes sin una respuesta

Leyendo esta guía podrías haber pensado en la posibilidad de solo enviar un mensaje a un canal en lugar de responder a un comando.

Aquí estamos. Para enviar un mensaje simple a un canal específico, necesitamos recuperar su id y luego acceder a la propiedad `BaseClient.messages` y ejecutar la función `write`.

Aquí hay un ejemplo de cómo enviar ese mensaje sin responder a un comando:

```ts title="src/commands/helloworld.ts" ins={3} showLineNumbers
export default class HelloWorldCommand extends Command {
  async run(ctx: CommandContext) {
    return ctx.client.messages.write(ctx.channelId, { content: 'Hola mundo 👋' });
  }
}
```

## Enviando Embeds

Discord añade la posibilidad de enviar mensajes incrustados dentro de un canal.

Para enviar esos mensajes incrustados con Seyfert, tendremos que construir el embed con el constructor de Embed. Para obtener más información sobre la personalización del mensaje incrustado, puedes consultar el [constructor de Embed](/api/classes/embed) dentro de esta documentación.

Aquí hay un ejemplo de cómo enviar un embed con un título y descripción personalizados.

```ts title="src/commands/helloworld.ts" {1} {"1. Ah sí, los constructores.":6-9} ins={11} showLineNumbers
import { Embed } from 'seyfert';

export default class HelloWorldCommand extends Command {
  async run(ctx: CommandContext) {


    const embed = new Embed()
      .setTitle('Mi Embed Asombroso')
      .setDescription('Hola mundo 👋');

    ctx.write({ embeds: [embed] });
  }
}
```

## Enviando componentes adjuntos al mensaje

Discord incluye la posibilidad de enviar componentes adjuntos al mensaje dentro de un `ActionRow`. Estos componentes pueden ser [`Buttons`](/api/classes/button) o [`SelectMenus`](/api/classes/selectmenu/).

Los componentes se almacenan en un [`ActionRow`](https://github.com/tiramisulabs/seyfert/blob/455ed12b0ebcb3ddf55bc8b3274b0ce904becc62/src/builders/ActionRow.ts#L16) que puede contener hasta 5 botones diferentes y solo un menú de selección y no puede contener otro ActionRow en su interior.

En este ejemplo vamos a enviar dos filas de acciones dentro del mensaje. Cada fila va a tener un botón y un [menú de selección de cadena](/api/classes/stringselectmenu) adjuntos respectivamente.

```ts title="src/commands/helloworld.ts" ins={1-7} {"1. Construir botón": 12-19} {"2. Construir selectmenu": 21-29} ins={30} showLineNumbers
import {
  ActionRow,
  Button,
  StringSelectMenu,
  ButtonStyle,
  StringSelectOption,
} from 'seyfert';

export default class HelloWorldCommand extends Command {
  async run(ctx: CommandContext) {


    const button = new Button()
      .setCustomId('helloworld')
      .setLabel('Hola mundo')
      .setStyle(ButtonStyle.Primary);

    const buttonRow = new ActionRow<Button>().addComponents(button);



    const menu = new StringSelectMenu()
      .setCustomId('select-helloworld')
      .addOption(
        new StringSelectOption().setLabel('Hello').setValue('option_1')
      );

    const menuRow = new ActionRow<StringSelectMenu>().addComponents(menu);

    ctx.write({ content: 'Hola mundo 👋', components: [buttonRow, menuRow] });
  }
}
```

:::note

Para más información sobre componentes, consulta la [guía de componentes](../components/introduction).
:::
