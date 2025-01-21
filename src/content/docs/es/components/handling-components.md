---
title: Manejando Componentes
---

## Actualización de la configuración de Seyfert

Después de haber enviado el componente dentro de un canal, es hora de manejar la interacción desde el componente.

Para manejarlas, debemos indicarle a Seyfert dónde estarán ubicados los componentes en nuestro proyecto. Debemos hacer esto dentro de nuestro archivo de configuración de Seyfert.

```js twoslash title="seyfert.config.mjs" showLineNumbers copy ins={11}
// @ts-check
import { config } from "seyfert";

export default config.bot({
  token: process.env.BOT_TOKEN ?? "",
  intents: ["Guilds"],
  locations: {
    base: "dist",
    commands: "commands",
    events: "events",
    components: 'components'
  }
});
```

Habiendo enviado el componente dentro de un canal, es momento de manejar la interacción del componente.

Primero vamos a crear un archivo dentro del directorio que hemos establecido al inicio de nuestro proyecto para los componentes.

Luego vamos a crear una clase que extienda de [`ComponentCommand`](https://github.com/tiramisulabs/seyfert/blob/455ed12b0ebcb3ddf55bc8b3274b0ce904becc62/src/components/componentcommand.ts#L14), algo similar a lo que hacemos con comandos simples, y después vamos a establecer el tipo de componente que queremos manejar (`Buttons` o cualquier tipo de `SelectMenu`).

En este ejemplo, he creado un componente para responder `Hello World` a la interacción. He establecido el customId del botón como `hello-world`.

```ts showLineNumbers copy

import { ComponentCommand } from 'seyfert';

export default class HelloWorldButton extends ComponentCommand {
    componentType = 'Button' as const;
}
```

## Filtrando interacciones de componentes

Ahora queremos que el manejador solo maneje las interacciones creadas por el botón `HelloWorld`, por lo que usaremos el customId que debemos establecer en todos los componentes.

Para filtrar las interacciones, estamos utilizando una función heredada por la clase `ComponentCommand` en la que debemos devolver un booleano.

```ts ins={6-10} showLineNumbers copy

import { ComponentCommand, type ComponentContext } from 'seyfert';

export default class HelloWorldButton extends ComponentCommand {
  componentType = 'Button' as const;

  filter(ctx: ComponentContext<typeof this.componentType>) {
    // estamos verificando si el customId de la interacción es el mismo que el establecido en el botón.

    return ctx.customId === 'hello-world';
  }
}
```

## Ejecutando el manejador de componentes

Si la función de filtro tiene éxito y devuelve `true`, el manejador ejecutará una función `run` con la lógica de tu código.

```ts twoslash ins={14-19} showLineNumbers copy

import { ComponentCommand, type ComponentContext } from 'seyfert';

import { MessageFlags } from 'seyfert/lib/types';

export default class HelloWorldButton extends ComponentCommand {
  componentType = 'Button' as const;

  // esto también puede ser una promesa.

  filter(ctx: ComponentContext<typeof this.componentType>) {
    return ctx.customId === 'hello-world';
  }

  async run(ctx: ComponentContext<typeof this.componentType>) {
    return ctx.write({
      content: 'Hello World 👋',
      flags: MessageFlags.Ephemeral
    });
  }
}

```