---
title: Extending Command
---

The command class is the one that provides all the utilities inside a command and prepares it to receive all the command metadata.

## Handling errors

Within Seyfert, there are different types of errors, depending on how critical the problem is.

### Run throw error

```ts 
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

```ts 
import {
  Command,
  createStringOption,
  Options,
  type CommandContext,
  type OnOptionsReturnObject
} from "seyfert";

@Options({
  url: createStringOption({
    description: 'how to be a gamer',
    value(data, ok: OKFunction<URL>, fail) {
        if (isUrl(data.value)) return ok(new URL(data.value));
        fail('expected a valid url');
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

:::note
Learn more about middleware utilities [here](#)
:::

```ts 
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
### Ignoring commands

If you want to ignore one specific type of command and prevent it from executing you can set the `ignore` option to the type of command you want to ignore.

```ts wrap showLineNumbers ins={7}
import { Command, Declare, IgnoreCommand } from 'seyfert';

// this command will only works with prefix commands as it ignores slash ones.
@Declare({
  name: 'mycommand',
  description: 'It is only my command'
  ignore: IgnoreCommand.Slash
})
export default class MyCommand extends Command {}; 