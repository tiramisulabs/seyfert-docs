---
title: Command Middlewares
---

In Seyfert middleware are functions that are called before the command is executed. You can use them to do verifications, logging, etc.

Let's create a basic middleware that logs in the command that is being executed.

## Creating a middleware

```ts title="logger.middleware.ts" wrap copy
import { createMiddleware } from "seyfert";

// The generic type tells the middleware what information it'll pass to the command
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

:::tip
This example uses `console.log` to log command details, if you want to make use of the built in logger to make your logs consistant or just to have the extra decoration you can call `middle.context.client.logger`.  
e.g. `middle.context.client.logger.info("Log message")`
:::

Now let's register the middlewares on seyfert but first we should create a file to export all our middleware

```ts title="middlewares.ts" wrap copy
import { loggerMiddleware } from "./path/to/logger.middleware";

export const middlewares = {
    // The key is the name of the middleware which will be used to reference it on the command
    logger: loggerMiddleware
}
```


```ts title="index.ts" ins={2,7-9,15-16} copy
import { Client, type ParseMiddlewares, type ParseClient } from "seyfert";
import { middlewares } from "./path/to/middlewares";

const client = new Client();

// Register the middlewares
client.setServices({
  middlewares: middlewares
});

declare module "seyfert" {
  interface UsingClient extends ParseClient<Client<true>> {}

  // Register the middlewares on seyfert types
  interface RegisteredMiddlewares
    extends ParseMiddlewares<typeof middlewares> {}
}
```

Now we can use the `logger` middleware on any command.

```ts title="ping.command.ts" {1} ins={8} copy
import { Middlewares, Declare, Command, type CommandContext } from "seyfert";

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

Now every time the `ping` command is executed, the logger middleware will log forward the command.

:::note
Middlewares are executed in the order in which they are added.
:::

## Stop middleware

As we had said you can use middlewares to do verifications, and you can stop the execution of the command if the verification fails.

Let's take a look adding some logic to the logger middleware.

```ts title="logger.middleware.ts" ins={2, 11-13} copy wrap 
import { createMiddleware } from "seyfert";
import { ChannelType } from 'seyfert/lib/types';

export const loggerMiddleware = createMiddleware<void>((middle) => {
  // Log the command
  console.log(
    `${middle.context.author.username} (${middle.context.author.id}) ran /(${middle.context.resolver.fullCommandName}`
  );

  // Check if the command is being executed in a guild
  if (middle.context.interaction.channel?.type === ChannelType.DM) {
    return middle.stop("This command can only be used in a guild.");
  }

  // Pass to the next middleware if the command is being executed in a guild
  middle.next();
});
```

Now every time the `ping` command is executed in a DM, the logger middleware will stop the execution of the command and send the error message to the handler. Learn how to handle errors [here](/commands/handling-errors#middleware-return-stop).

:::note
Notice you can access to the interaction data using `middle.context.interaction`
:::

On the other hand we could skip the interaction (ignore the interaction and literally do nothing) by using `middle.pass()`

```ts title="logger.middleware.ts" {11-12} copy
import { createMiddleware } from "seyfert";
import { ChannelType } from 'seyfert/lib/types';

export const loggerMiddleware = createMiddleware<void>((middle) => {
  // Log the command
  console.log(
    `${middle.context.author.username} (${middle.context.author.id}) ran /(${middle.context.resolver.fullCommandName}`
  );

  // Ignore the interaction if it's a DM
  if (middle.context.interaction.channel?.type === ChannelType.DM) {
    return middle.pass();
  }

  // Pass to the next middleware if the command is being executed in a guild
  middle.next();
});
```

## Passing data

The last thing we can do with middlewares is to pass data to the command. This can be useful to avoid repeating the same code in multiple commands for example fetching data from the database.

We'll continue with the logger middleware and pass some data to the command.

```ts title="logger.middleware.ts" ins={4-6,13} {8} copy
import { createMiddleware } from "seyfert";

// This interface is used to let the middleware know what type of data to pass to the command
interface LoggerData {
    time: number;
}

export const loggerMiddleware = createMiddleware<LoggerData>((middle) => {
    // Log the command
    console.log(`${middle.context.author.username} (${middle.context.author.id}) ran /${middle.context.resolver.fullCommandName}`);

    // Pass the data to the command
    middle.next({ time: Date.now() });
});
```

Now let's modify the `ping` command to receive the data.

:::note

If you want to pass data from more than one middleware you can use the `|` operator, for example `CommandContext<never, "logger" | "otherMiddleware">`

:::

```ts title="ping.command.ts" {9} ins={10-11} copy
import { Middlewares, Declare, Command, type CommandContext } from "seyfert";

@Declare({
    name: "ping",
    description: "Ping the bot"
})
@Middlewares(["logger"])
export default class PingCommand extends Command {
    async run(ctx: CommandContext<never, "logger">) {
        const time = ctx.metadata.logger.time;
        console.log(time);
        await ctx.reply({
            content: `Pong! Time: ${time}`,
        });
    }
}

```

## Global Middlewares

Global middlewares follow the same rule and structure explained above, with the brief difference that they have a unique property in the context and are declared separately.

```ts title="index.ts" {1,13} ins={3,5,9,19-20}
import { Client, type ParseMiddlewares, type ParseClient, type ParseGlobalMiddlewares } from 'seyfert';
import { middlewares } from "./path/to/middlewares";
import { global } from "./path/to/globals";

const globalMiddlewares: (keyof typeof global)[] = ['logger']

// Register middleware
const client = new Client({
  globalMiddlewares
});

client.setServices({
  middlewares: { ...global, ...middlewares },
});

declare module 'seyfert' {
  interface RegisteredMiddlewares
    extends ParseMiddlewares<typeof middlewares & typeof global> {}
  interface GlobalMetadata
    extends ParseGlobalMiddlewares<typeof global> {}
}
```
