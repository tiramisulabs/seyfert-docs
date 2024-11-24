---
title: Extending Command
---

With Seyfert, you can handle errors in an organized way and treat them differently depending on the type of error.

### Error when executing a command

This is the most common error and occurs when an error is thrown in the `run` method.

```ts twoslash {5}
import { Command, type CommandContext } from "seyfert";

export class HandlingErrors extends Command {
  async run(context: CommandContext) {
    throw new Error("Error, ehm, lol player detected");
  }

// @log: This responds with the previous error message: "Error, ehm, lol player detected"
  async onRunError(context: CommandContext, error: unknown) {
    context.client.logger.fatal(error);
    await context.editOrReply({
      content: error instanceof Error ? error.message : `Error: ${error}`
    });
  }
}
```

### Error when validating options

This error is thrown when an option fails in the `value` method.

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
    description: 'how to be a gamer',
    value(data, ok: OKFunction<URL>, fail) {
        if (isURL(data.value)) return ok(new URL(data.value));

// @annotate: This will trigger the onOptionsError method
        fail('expected a valid URL');
    },
  })
};

@Options(options)
export class HandlingErrors extends Command {
    async onOptionsError(
        context: CommandContext,
        metadata: OnOptionsReturnObject
    ) {
// @log: url: expected a valid URL
    await context.editOrReply({
      content: Object.entries(metadata)
        .filter((_) => _[1].failed)
        .map((error) => `${error[0]}: ${error[1].value}`)
        .join("\n")
    });
  }
}
```

### Stop a middleware with an error

When a middleware returns a stop, Seyfert generates this error and stops the progress of the command being handled.

```ts twoslash {5}
const Devs = [''];
// ---cut---
import { createMiddleware } from "seyfert";

export default createMiddleware<void>(({ context, next, stop, pass }) => {
    if (!Devs.includes(context.author.id)) {
        return stop("User is not a developer");
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
// @log: User is not a developer
            content: error
        });
    }
}

```

:::note
Although Seyfert provides a way to handle errors, you can do it in the way that best suits your needs (we recommend the way we showed, lol).
:::