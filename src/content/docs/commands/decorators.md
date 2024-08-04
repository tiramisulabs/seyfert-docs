---
title: Command Decorators
---

Take a loot at the differente decorators that seyfert provides to create commands.

## `@Declare()`

This decorator is used to declare a command. It is used to define the command name, the command description, and other things. Example was given in [Creating your first command](/guides/first-command)

The required parameters are:

- **name**: The name of the slash command.
- **description**: The description of the slash command.

for more information about the other parameters you can check the [interface herein](https://github.com/tiramisulabs/seyfert/blob/449be8ea3840fb31a36b1df84ef1b352fe350702/src/commands/decorators.ts#L14)

## ``@Options()``

This decorator simplifies the setup of slash commands by using an option object. Seyfert provides a range of user-friendly decorators designed to make defining command options that you can [see herein](./options)


## ``@Middlewares()``

Seyfert offers an advanced middleware system that is fully typed and incredibly powerful. This system takes in a list of middlewares, which are functions that run before a command is executed.

You can learn how to create middlewares and use them [herein](./middlewares).

# Commands group decorators

:::tip

We have a dedicated section for sub-commands, you can find it [herein](./subcommands).

:::

## `@Groups()` and `@Group()`

Seyfert handles all aspects of the commands for you, including the command group system that discord exposes.

`@Groups()` is the decorator to tell a parent command which groups it will have and handle.

`@Group()` is the decorator to tell a subcommand (child command) which group it belongs to.

# Other decorators

## `@AutoLoad`

This decorator is used to automatically load all the sub-command files in the directory where `parent` is located.