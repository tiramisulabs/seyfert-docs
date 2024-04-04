---
title: Command Middlewares
---

On Seyfert middleware are functions that are called before the command is executed. You can use them to do verifications, logging, etc.

Let's create a basic middleware that logs the command that is being executed.

## Creating a middleware

```ts title="logger.middleware.ts" wrap copy
import { createMiddleware } from "seyfert";

// The generic type tells the middleware what information it will pass to the command
export const loggerMiddleware = createMiddleware<void>(
  (middle) => {
    // Log the command
    console.log(
      `${middle.context.author.username} (${middle.context.author.id}) ran /(${middle.context.resolver.fullCommandName}`
    );

    // Pass to the next middleware
    middle.next();
  }
);
```


Now let's register the middle on Seyfert [extending the client](guides/declare-module) but first we should create a command to export all our middleware

```ts title="middlewares.ts" wrap copy
import { loggerMiddleware } from "./path/to/logger.middleware";

export const middlewares = {
    // The key is the name of the middleware which will be used to reference it on the command
    logger: loggerMiddleware
}
```


```ts title="index.ts" ins={2,7-9,15-16} copy
import { ParseLocales, Client, ParseMiddlewares, ParseClient } from "seyfert";
import { middlewares } from "./path/to/middlewares";

const client = new Client();

// Register the middlewares
client.setServices({
  middlewares: middlewares
});

declare module "seyfert" {
  interface UsingClient extends ParseClient<Client<true>> {}

  // Register the middlewares on Seyfert types
  interface RegisteredMiddlewares
    extends ParseMiddlewares<typeof middlewares> {}
}
```

Now we can use the `logger` middleware on any command.

```ts title="ping.command.ts" copy
import { Middlewares, Declare, Command } from "seyfert";

@Declare({
	name: "ping",
	description: "Ping the bot"
})
// Note we are using the name "logger" to reference the middleware
@Middlewares(["logger"])
export default class PingCommand extends Command {
    async run(ctx: CommandContext) {
        await ctx.reply("Pong!");
    }
}
```

Now every time the `ping` command is executed, the logger middleware will log the command.

:::note
Middlewares are executed in the order they are added.
:::

## Stop middleware

As we said you can use middlewares to do verifications, and you can stop the execution of the command if the verification fails.

Let's take a look adding some logic to the logger middleware.

```ts title="logger.middleware.ts" ins={8-10} copy wrap
import { createMiddleware } from "seyfert";

export const loggerMiddleware = createMiddleware<void>((middle) => {
  // Log the command
  console.log(
    `${middle.context.author.username} (${middle.context.author.id}) ran /(${middle.context.resolver.fullCommandName}`
  );

  // Check if the command is being executed in a guild
  if (middle.context.interaction.channel?.type === ChannelType.DM) {
    middle.stop("This command can only be used in a guild.");
  }

  // Pass to the next middleware if the command is being executed in a guild
  middle.next();
});
```

Now every time the `ping` command is executed in a DM, the logger middleware will stop the execution of the command and send the error message to the handler. Learn how to handle errors [here](commands/command-class#middleware-return-stop).

:::note
Notice you can join to the interaction data by using `middle.context.interaction`
:::

On the other hand we could skip the interaction (ignore the interaction and literally do nothing) by using `middle.pass()`

```ts title="logger.middleware.ts" ins={9} copy
import { createMiddleware } from "seyfert";

export const loggerMiddleware = createMiddleware<void>((middle) => {
  // Log the command
  console.log(
    `${middle.context.author.username} (${middle.context.author.id}) ran /(${middle.context.resolver.fullCommandName}`
  );

  // Ignore the interaction if it's a DM
  if (middle.context.interaction.channel?.type === ChannelType.DM) {
    middle.pass();
  }

  // Pass to the next middleware if the command is being executed in a guild
  middle.next();
});

```

## Passing data

The last thing we can do with middlewares is to pass data to the command. This can be useful to avoid repeating the same code in multiple commands for example fetching data from the database.

We will continue with the logger middleware and pass some data to the command.

```ts title="logger.middleware.ts" copy
import { createMiddleware } from "seyfert";

// This interface will be used to let the middleware know what type of data it will pass to the command
interface LoggerData {
    time: number;
}

export const loggerMiddleware = createMiddleware<LoggerData>((middle) => {
    // Log the command
    console.log(`${middle.context.author.username} (${middle.context.author.id}) ran /(${middle.context.resolver.fullCommandName}`);

    // Pass the data to the command
    middle.next({ time: Date.now() });
});
```

Now let's modify the `ping` command to receive the data.

:::note

If you want to pass data from more than one middleware you can use the `|` operator, for example `CommandContext<never, "logger" | "otherMiddleware">`

:::

```ts title="ping.command.ts" ins={10-11} copy
import { Middlewares, Declare, Command } from "seyfert";

@Declare({
    name: "ping",
    description: "Ping the bot"
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

