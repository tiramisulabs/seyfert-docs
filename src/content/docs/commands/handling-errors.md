---
title: Extending Command
---

With seyfert you can handle errors in a organized way and you can handle errors in different ways depending on the error.

### Run throw error

This is the most common error and it is thrown when throw an error in the `run` method.

```ts {5}
import { Command, type CommandContext } from "seyfert";

export class HandlingErrors extends Command {
  async run(context: CommandContext) {
    throw new Error("Error, ehm, lol player detected");
  }

  // This will reply with the error message above "Error, ehm, lol player detected"
  async onRunError(context: CommandContext, error: unknown) {
    context.client.logger.fatal(error);
    await context.editOrReply({
      content: error instanceof Error ? error.message : `Error: ${error}`
    });
  }
}

```	

### Options throw error

This error is thrown when an option fails in the `value` method.

```ts {15}
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
    description: 'how to be a gamer',
    value(data, ok: OKFunction<URL>, fail) {
        if (isUrl(data.value)) return ok(new URL(data.value));
        fail('expected a valid url'); // This will fire the onOptionsError method
    }
  })
})
export class HandlingErrors extends Command {
  // url: expected a valid url
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

### Middleware return stop

When a middleware returns a stop, seyfert issues this error and stops the progress of the command to be handled.

```ts {2}
export default createMiddleware(({ context, next, stop, pass }) => {
  if (!Devs.includes(context.author.id)) return stop("User is not a developer");
  next();
});
```

```ts 
import { Command, Middlewares, type CommandContext } from "seyfert";

@Middlewares(["OnlyDev"])
export class HandlingErrors extends Command {
  async onMiddlewaresError(context: CommandContext, error: Error) {
    await context.editOrReply({
			//User is not a developer
      content: error.message
    });
  }
}

```

:::note

Although Seyfert offers a way to handle errors, you can handle them in a way that suits you best (we recommend the way we showed you lol).

:::