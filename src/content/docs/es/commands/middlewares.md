---
title: Middlewares de Comando
---

En Seyfert, los middlewares son funciones que se llaman antes de que se ejecute el comando. Puedes usarlos para realizar verificaciones, registrar información, etc.

Vamos a crear un middleware básico que registre el comando que se está ejecutando.

## Creando un middleware

```ts title="logger.middleware.ts" wrap copy
import { createMiddleware } from "seyfert";

// El tipo genérico le dice al middleware qué información pasará al comando
export const loggerMiddleware = createMiddleware<void>(
  (middle) => {
    // Registrar el comando
    console.log(
      `${middle.context.author.username} (${middle.context.author.id}) ejecutó /(${middle.context.resolver.fullCommandName}`
    );

    // Pasar al siguiente middleware
    middle.next();
  }
);
```

Ahora vamos a registrar el middleware en Seyfert [extendiendo el cliente](guides/declare-module), pero primero debemos crear un comando para exportar todos nuestros middlewares

```ts title="middlewares.ts" wrap copy
import { loggerMiddleware } from "./path/to/logger.middleware";

export const middlewares = {
    // La clave es el nombre del middleware que se usará para referenciarlo en el comando
    logger: loggerMiddleware
}
```

```ts title="index.ts" ins={2,7-9,15-16} copy
import { ParseLocales, Client, ParseMiddlewares, ParseClient } from "seyfert";
import { middlewares } from "./path/to/middlewares";

const client = new Client();

// Registrar los middlewares
client.setServices({
  middlewares: middlewares
});

declare module "seyfert" {
  interface UsingClient extends ParseClient<Client<true>> {}

  // Registrar los middlewares en los tipos de Seyfert
  interface RegisteredMiddlewares
    extends ParseMiddlewares<typeof middlewares> {}
}
```

Ahora podemos usar el middleware `logger` en cualquier comando.

```ts title="ping.command.ts" copy
import { Middlewares, Declare, Command } from "seyfert";

@Declare({
	name: "ping",
	description: "Haz ping al bot"
})
// Nota que estamos usando el nombre "logger" para referenciar al middleware
@Middlewares(["logger"])
export default class PingCommand extends Command {
    async run(ctx: CommandContext) {
        await ctx.reply("Pong!");
    }
}
```

Ahora cada vez que se ejecute el comando `ping`, el middleware logger registrará el comando.

:::note
Los middlewares se ejecutan en el orden en que se agregan.
:::

## Middleware de parada

Como dijimos, puedes usar middlewares para hacer verificaciones, y puedes detener la ejecución del comando si la verificación falla.

Vamos a ver agregando algo de lógica al middleware de registro.

```ts title="logger.middleware.ts" ins={8-10} copy wrap
import { createMiddleware } from "seyfert";

export const loggerMiddleware = createMiddleware<void>((middle) => {
  // Registrar el comando
  console.log(
    `${middle.context.author.username} (${middle.context.author.id}) ejecutó /(${middle.context.resolver.fullCommandName}`
  );

  // Verificar si el comando se está ejecutando en un servidor
  if (middle.context.interaction.channel?.type === ChannelType.DM) {
    middle.stop("Este comando solo se puede usar en un servidor.");
  }

  // Pasar al siguiente middleware si el comando se está ejecutando en un servidor
  middle.next();
});
```

Ahora cada vez que el comando `ping` se ejecute en un DM, el middleware de registro detendrá la ejecución del comando y enviará el mensaje de error al manejador. Aprende cómo manejar errores [aquí](commands/command-class#middleware-return-stop).

:::note
Observa que puedes unirte a los datos de interacción usando `middle.context.interaction`
:::

Por otro lado, podríamos ignorar la interacción (ignorar la interacción y literalmente no hacer nada) usando `middle.pass()`

```ts title="logger.middleware.ts" ins={9} copy
import { createMiddleware } from "seyfert";

export const loggerMiddleware = createMiddleware<void>((middle) => {
  // Registrar el comando
  console.log(
    `${middle.context.author.username} (${middle.context.author.id}) ejecutó /(${middle.context.resolver.fullCommandName}`
  );

  // Ignorar la interacción si es un DM
  if (middle.context.interaction.channel?.type === ChannelType.DM) {
    middle.pass();
  }

  // Pasar al siguiente middleware si el comando se está ejecutando en un servidor
  middle.next();
});
```

## Pasando datos

Lo último que podemos hacer con middlewares es pasar datos al comando. Esto puede ser útil para evitar repetir el mismo código en múltiples comandos, por ejemplo, obteniendo datos de la base de datos.

Continuaremos con el middleware de registro y pasaremos algunos datos al comando.

```ts title="logger.middleware.ts" copy
import { createMiddleware } from "seyfert";

// Esta interfaz se usará para que el middleware sepa qué tipo de datos pasará al comando
interface LoggerData {
    time: number;
}

export const loggerMiddleware = createMiddleware<LoggerData>((middle) => {
    // Registrar el comando
    console.log(`${middle.context.author.username} (${middle.context.author.id}) ejecutó /(${middle.context.resolver.fullCommandName}`);

    // Pasar los datos al comando
    middle.next({ time: Date.now() });
});
```

Ahora modifiquemos el comando `ping` para recibir los datos.

:::note

Si quieres pasar datos de más de un middleware, puedes usar el operador `|`, por ejemplo `CommandContext<never, "logger" | "otherMiddleware">`

:::

```ts title="ping.command.ts" ins={10-11} copy
import { Middlewares, Declare, Command } from "seyfert";

@Declare({
    name: "ping",
    description: "Haz ping al bot"
})
@Middlewares(["logger"])
export default class PingCommand extends Command {
    async run(ctx: CommandContext<never, "logger">) {
        const time = ctx.middleware.metadata.logger.time;
        console.log(time);
        await ctx.reply({
            content: `Pong! Time: ${data.time}`,
        });
    }
}
```