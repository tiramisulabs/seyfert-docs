---
title: Tiempo de espera (Cooldown)
---

Aunque puedes implementar tu propia lógica de cooldown, quizás quieras probar primero `@slipher/cooldown`.

```bash copy title="Instalando..."
npm add @slipher/cooldown
```

Primero necesitas agregar la propiedad `cooldown` al `client` como se muestra a continuación:

```ts
import { Client } from "seyfert";
import { CooldownManager } from "@slipher/cooldown";

const client = new Client();

client.start().then(() => {
	client.cooldown = new CooldownManager(client);
});

declare module "seyfert" {
	interface UsingClient extends ParseClient<Client<true>> {
		cooldown: CooldownManager;
	}
	// esto es para prevenir un @ts-expect-error en la línea anterior
	interface Client {
		cooldown: CooldownManager;
	}
}
```

Luego podemos usar el decorador `@Cooldown()` en nuestros comandos. Este decorador toma 3 argumentos:

| Propiedad  | Tipo           | Descripción                                   |
| ---------- | -------------- | --------------------------------------------- |
| type       | CooldownType   | El tipo de objetivo: puede ser usuario, servidor (guild) o canal. |
| interval   | number         | Tiempo en el que se renuevan los usos disponibles. |
| uses       | number         | Cantidad de veces que se puede usar el comando en el intervalo dado. |

```ts
import { Declare, Command } from "seyfert";
import { CooldownType, Cooldown } from "@slipher/cooldown";

@Declare({
	name: 'cool',
	description: 'Comando de referencia'
})
@Cooldown({
	type: CooldownType.User,
	interval: 1000 * 60, // 1 minuto
	uses: 2, // 2 usos por minuto
})
export default class extends Command {
  async run(ctx: CommandContext) {
    await ctx.write({
      content: `Un comando genial`
    });
  }

	onMiddlewaresError(context: CommandContext, error: string) {
		context.editOrReply({ content: error });
	}
}
```

Luego necesitamos crear un [middleware](/commands/middlewares) para manejar cuando un usuario está en tiempo de reutilización:

```ts
import { createMiddleware, Formatter } from 'seyfert';
import { TimestampStyle } from 'seyfert/lib/common';

export default createMiddleware<void>(async ({ context, next, stop }) => {
	
	const inCooldown = context.client.cooldown.context(context);

	typeof inCooldown === 'number'
		? stop(
				`Estás en tiempo de reutilización, inténtalo de nuevo ${Formatter.timestamp(new Date(Date.now() + inCooldown), TimestampStyle.RelativeTime)}`,
			)
		: next();
});
```
