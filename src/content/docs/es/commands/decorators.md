---
title: Command Decorators
---

Take a loot at the differente decorators that Seyfert provides to create commands.

## `@Declare()` [API](/api/functions/declare)

This decorator is used to declare a command. It is used to define the command name, the command description, and the command options.

- **name**: The name of the slash command.
- **description**: The description of the slash command.
- **dm**: If the command can be used in DMs.
- **guildId**: guildsIds where the command can be published.


## ``@Options()`` [API](/api/functions/options)

:::tip

You can learn more about it [here](./options).

:::

This decorator simplifies the setup of slash commands by using an option object. Seyfert provides a range of user-friendly decorators designed to make defining command options straightforward.


## ``@Middlewares()`` [API](/api/functions/middlewares)

Seyfert offers an advanced middleware system that is fully typed and incredibly powerful. This system takes in a list of middlewares, which are functions that run before a command is executed.

You can learn how to create middlewares and use them [here](./middlewares).

# Sub-command related decorators

:::tip

We have a dedicated section for sub-commands, you can find it [here](./subcommands).

:::

## `@Groups()` and `@Group()`

Seyfert handles all aspects of the commands for you, including the command group system that discord exposes.

`@Groups()` is the decorator to tell a parent command what groups it will have and handle.

`@Group()` is the decorator to tell a subcommand (child command) what group it belongs to.

## `@AutoLoad` [API](/api/functions/autoload)

This decorator is used to automatically load all the sub-command files in the directory where `parent` is located.