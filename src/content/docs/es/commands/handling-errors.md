---
title: Extendiendo Comando
---

Con Seyfert puedes manejar errores de una manera organizada y también puedes tratarlos de diferentes formas dependiendo del tipo de error.

### Error al ejecutar un comando

Este es el error más común y se lanza cuando ocurre un error en el método `run`.

```ts twoslash {5}
import { Command, type CommandContext } from "seyfert";

export class HandlingErrors extends Command {
  async run(context: CommandContext) {
    throw new Error("Error, ehm, se detectó un jugador de lol");
  }

// @log: Esto responde con el mensaje de error anterior: "Error, ehm, se detectó un jugador de lol"
  async onRunError(context: CommandContext, error: unknown) {
    context.client.logger.fatal(error);
    await context.editOrReply({
      content: error instanceof Error ? error.message : `Error: ${error}`
    });
  }
}
```	

### Error al validar opciones

Este error se lanza cuando una opción falla en el método `value`.

```ts twoslash {14-17}
// @exactOptionalPropertyTypes: false
import {
  Command,
  createStringOption,
  Options,
  type CommandContext,
  type OnOptionsReturnObject,
  type OKFunction
} from "seyfert";
const isURL: ((url: string) => boolean) = () => false;
// ---cut---
const options = {
  url: createStringOption({
    description: 'cómo ser un gamer',
    value(data, ok: OKFunction<URL>, fail) {
        if (isURL(data.value)) return ok(new URL(data.value));

// @annotate: Esto activará el método onOptionsError
        fail('se esperaba una URL válida');
    },
  })
};

@Options(options)
export class HandlingErrors extends Command {
    async onOptionsError(
        context: CommandContext,
        metadata: OnOptionsReturnObject
    ) {
// @log: url: se esperaba una URL válida
    await context.editOrReply({
      content: Object.entries(metadata)
        .filter((_) => _[1].failed)
        .map((error) => `${error[0]}: ${error[1].value}`)
        .join("\n")
    });
  }
}
```

### Detener un middleware con un error

Cuando un middleware devuelve un stop, Seyfert genera este error y detiene el progreso del comando que se estaba manejando.

```ts twoslash {5}
const Devs = [''];
// ---cut---
import { createMiddleware } from "seyfert";

export default createMiddleware<void>(({ context, next, stop, pass }) => {
    if (!Devs.includes(context.author.id)) {
        return stop("El usuario no es un desarrollador");
    }
    next();
});
```

```ts twoslash
import { createMiddleware, type ParseMiddlewares } from 'seyfert';
const middleware = { OnlyDev: createMiddleware(() => {}) };
declare module 'seyfert' {
    interface RegisteredMiddlewares extends ParseMiddlewares<typeof middleware> {}
}
// ---cut---
import { Command, Middlewares, type CommandContext } from "seyfert";

@Middlewares(["OnlyDev"])
export class HandlingErrors extends Command {
    async onMiddlewaresError(context: CommandContext, error: string) {
        await context.editOrReply({
// @log: El usuario no es un desarrollador
            content: error
        });
    }
}

```

:::note
Aunque Seyfert ofrece una manera de manejar errores, puedes hacerlo de la forma que mejor se adapte a tus necesidades (te recomendamos la forma que mostramos, lol).
:::