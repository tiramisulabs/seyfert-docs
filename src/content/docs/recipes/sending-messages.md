---
title: Sending Messages
---

The basic feature of Discord Bots is sending messages across Discord. And in Seyfert, you can do it the easiest way.

First of all, we need to set up a basic `Hello World` command.

```ts twoslash title="src/commands/helloworld.ts" showLineNumbers
import { Command, Declare, type CommandContext } from 'seyfert';

@Declare({
  name: 'helloworld',
  description: 'Sends a basic hello world message.',
})
export default class HelloWorldCommand extends Command {
  async run(ctx: CommandContext) {}
}
```

Having set up our basic `Hello World` command, we are now ready to send our first message using the `CommandContext.write()` function.

```ts twoslash title="src/commands/helloworld.ts" ins={12} showLineNumbers
import { Command, Declare, type CommandContext } from 'seyfert';

@Declare({
  name: 'helloworld',
  description: 'Sends a basic hello world message.',
})
export default class HelloWorldCommand extends Command {
  async run(ctx: CommandContext) {
    return ctx.write({ content: 'Hello world 👋' });
  }
}
```

The `CommandContext.write()` function will respond to the command.

## EditOrReply

But what if we want to respond to the command or edit its response instead of just replying?

We can use the `CommandContext.editOrReply()` function. This function is used to reply to the command, or if a reply has already been sent, it will edit it.

This function is very useful if we want to develop a command that responds to the command or, if the command has been answered, edits the response. If we are only using a simple `CommandContext.write()`, a response will be sent in all cases.

Here’s an example of how to implement this function.

```ts twoslash title="src/commands/helloworld.ts" ins={5,9} showLineNumbers
import { Command, type CommandContext } from 'seyfert';

export default class HelloWorldCommand extends Command {
  async run(ctx: CommandContext) {
    await ctx.deferReply();

    // do something that takes time and is boring

    await ctx.editOrReply({ content: 'I did some stuff' });
  }
}
```

## Sending Messages Without a Response

While reading this guide, you may have thought about the possibility of simply sending a message to a channel instead of responding to a command.

Here we are. To send a simple message to a specific channel, we need to get its ID and then access the `BaseClient.messages` property and use the `write` function.

Here’s an example of how to send that message without replying to a command:

```ts twoslash title="src/commands/helloworld.ts" ins={5} showLineNumbers
import { Command, type CommandContext } from 'seyfert';

export default class HelloWorldCommand extends Command {
  async run(ctx: CommandContext) {
    return ctx.client.messages.write(ctx.channelId, { content: 'Hello world 👋' });
  }
}
```

## Sending Embeds

Discord adds the ability to send embedded messages within a channel.

To send these embedded messages with Seyfert, we need to construct the embed using the Embed builder. For more information about customizing the embedded message, you can check out the [Embed builder](https://github.com/tiramisulabs/seyfert/blob/455ed12b0ebcb3ddf55bc8b3274b0ce904becc62/src/builders/Embed.ts#L13) within this documentation.

Here’s an example of how to send an embed with a custom title and description.

```ts twoslash title="src/commands/helloworld.ts" {1} {"1. Ah yes, the builders.":6-9} ins={11} showLineNumbers
import { Embed, Command, type CommandContext } from 'seyfert';

export default class HelloWorldCommand extends Command {
  async run(ctx: CommandContext) {
    
    
    const embed = new Embed()
      .setTitle('My Amazing Embed')
      .setDescription('Hello world 👋');

    await ctx.write({ embeds: [embed] });
  }
}
```

## Sending Components Attached to the Message

Discord includes the ability to send components attached to a message within an `ActionRow`. These components can be [`Buttons`](https://github.com/tiramisulabs/seyfert/blob/455ed12b0ebcb3ddf55bc8b3274b0ce904becc62/src/builders/Button.ts#L8) or [`SelectMenus`](https://github.com/tiramisulabs/seyfert/blob/455ed12b0ebcb3ddf55bc8b3274b0ce904becc62/src/builders/SelectMenu.ts#L60).

Components are stored in an [`ActionRow`](https://github.com/tiramisulabs/seyfert/blob/455ed12b0ebcb3ddf55bc8b3274b0ce904becc62/src/builders/ActionRow.ts#L16), which can contain up to 5 different buttons and only one select menu and cannot contain another ActionRow inside.

In this example, we are going to send two action rows within the message. Each row will have a button and a [string select menu](https://github.com/tiramisulabs/seyfert/blob/455ed12b0ebcb3ddf55bc8b3274b0ce904becc62/src/builders/SelectMenu.ts#L276) attached, respectively.

```ts twoslash title="src/commands/helloworld.ts" ins={1-7} {"1. Building button": 14-21} {"2. Building selectmenu": 23-32} ins={32} showLineNumbers
import {
  ActionRow,
  Button,
  StringSelectMenu,
  StringSelectOption,
  Command,
  type CommandContext
} from 'seyfert';
import { ButtonStyle } from 'seyfert/lib/types'

export default class HelloWorldCommand extends Command {
  async run(ctx: CommandContext) {
   
   
    const button = new Button()
      .setCustomId('helloworld')
      .setLabel('Hello World')
      .setStyle(ButtonStyle.Primary);

    const buttonRow = new ActionRow<Button>().addComponents(button);



    const menu = new StringSelectMenu()
      .setCustomId('select-helloworld')
      .addOption(
        new StringSelectOption().setLabel('Hello').setValue('option_1')
      );

    const menuRow = new ActionRow<StringSelectMenu>().addComponents(menu);

    await ctx.write({ content: 'Hello world 👋', components: [buttonRow, menuRow] });
  }
}
```

:::note

For more information about components, check out the [component guide](/components/building-components).
:::