---
title: Extendiendo Comandos
---

La clase de comando es la que proporciona todas las utilidades dentro de un comando y lo prepara para recibir todos los metadatos del comando.

## Manejo de errores

Dentro de Seyfert, hay diferentes tipos de errores, dependiendo de cuán crítico sea el problema.

### Error de ejecución

```ts
import { Command, type CommandContext } from "seyfert";

export class HandlingErrors extends Command {
  async run(context: CommandContext) {
    throw new Error("Error, ehm, jugador de lol detectado");
  }

  // Esto responderá con el mensaje de error anterior "Error, ehm, jugador de lol detectado"
  async onRunError(context: CommandContext, error: unknown) {
    context.client.logger.fatal(error);
    await context.editOrReply({
      content: error instanceof Error ? error.message : `Error: ${error}`
    });
  }
}
```

### Error en opciones

```ts 
import {
  Command,
  createStringOption,
  Options,
  type CommandContext,
  type OnOptionsReturnObject,
  type OKFunction
} from "seyfert";

@Options({
  url: createStringOption({
    description: 'cómo ser un gamer',
    value(data, ok: OKFunction<URL>, fail) {
        if (isUrl(data.value)) return ok(new URL(data.value));
        fail('se esperaba una URL válida');
    }
  })
})
export class HandlingErrors extends Command {
  // url: se esperaba una URL válida
  async onOptionsError(
    context: CommandContext,
    metadata: OnOptionsReturnObject
  ) {
    await context.editOrReply({
      content: Object.entries(metadata)
        .filter((_) => _[1].failed)
        .map((error) => `${error[0]}: ${error[1].value}`)
        .join("\n")
    });
  }
}
```

### Detención por middleware

Cuando un middleware retorna una detención, Seyfert emite este error y detiene el progreso del comando para ser manejado.

:::note
Aprende más sobre las utilidades de middleware [aquí](#)
:::

```ts 
export default createMiddleware(({ context, next, stop, pass }) => {
  if (!Devs.includes(context.author.id)) return stop("El usuario no es desarrollador");
  next();
});
```

```ts 
import { Command, Middlewares, type CommandContext } from "seyfert";

@Middlewares(["OnlyDev"])
export class HandlingErrors extends Command {
  async onMiddlewaresError(context: CommandContext, error: Error) {
    await context.editOrReply({
			//El usuario no es desarrollador
      content: error.message
    });
  }
}
```