---
title: Collectors
---

Now that you've learned how to handle components statically, you might have wondered how to get more context about what happened before sending the component.

Seyfert includes `message component collectors`, which are an easy way to handle interactions received from a specific message and allow you to get more context about what happened before sending the component.

:::note

If the process where you created the component collector stops, the collector will cease to function, and message interactions will no longer be handled.
:::

## Building Collectors

Collectors are built using the [`createComponentCollector`](https://github.com/tiramisulabs/seyfert/blob/455ed12b0ebcb3ddf55bc8b3274b0ce904becc62/src/components/handler.ts#L39) method on a message, which is inherited by [`BaseMessage`](https://github.com/tiramisulabs/seyfert/blob/455ed12b0ebcb3ddf55bc8b3274b0ce904becc62/src/structures/Message.ts#L44). This method returns an object representing a collector.

Here's an example of how to build a simple collector after sending a message with an attached button in a "hello world" command.

```ts twoslash ins={30} showLineNumbers copy
import {
  Button,
  ActionRow,
  Command,
  Declare,
  type CommandContext,
} from 'seyfert';

import { ButtonStyle } from 'seyfert/lib/types';

@Declare({
  name: 'hello',
  description: 'I will send you a hello world message',
})
export default class HelloWorldCommand extends Command {
  async run(ctx: CommandContext) {
    const button = new Button()
      .setCustomId('hello')
      .setLabel('Hello')
      .setStyle(ButtonStyle.Primary);

    const row = new ActionRow<Button>().setComponents([button]);

    // To get the message with the attached button, you can set the fetchReply to "true".
    const message = await ctx.write(
      {
        content: 'Do you want a hello world? Click the button below.',
        components: [row],
      },
      true
    );

    const collector = message.createComponentCollector();
  }
}
```

## Handling Interactions Within a Collector
Once the collector is created from a message, we'll handle the button interaction with the collector's `run` function.

Here’s an example:

```ts twoslash ins={35-37} showLineNumbers copy
import {
  Button,
  ActionRow,
  Command,
  Declare,
  type CommandContext,
} from 'seyfert';

import { ButtonStyle } from 'seyfert/lib/types';

@Declare({
  name: 'hello',
  description: 'I will send you a hello world message',
})
export default class HelloWorldCommand extends Command {
  async run(ctx: CommandContext) {
    const button = new Button()
      .setCustomId('hello')
      .setLabel('Hello')
      .setStyle(ButtonStyle.Primary);

    const row = new ActionRow<Button>().setComponents([button]);

    const message = await ctx.write(
      {
        content: 'Do you want a hello world? Click the button below.',
        components: [row],
      },
      true
    );

    const collector = message.createComponentCollector();

    // we are passing the custom ID set on the button as the first parameter of the function.
    collector.run('hello', async (i) => {
      if (i.isButton()) return i.write({ content: 'Hello World 👋' });
    });
  }
}
```

## Filtering Interactions
You might have considered filtering the received interaction in the run function to limit, for example, to the user who is interacting with the button.

You would add a condition inside the run function like this:

```ts
if (i.user.id === ctx.author.id)
  return i.write({ content: 'Do not touch the button' });
```

This would limit the button's usage only to the user who executed the command.

However, Seyfert simply implements a `filter` option when creating the collector, which expects a return function that returns a boolean.

Let’s implement the filter to restrict the user who executed the interaction and filter the interaction to only button interactions.

```ts twoslash ins={33} showLineNumbers copy
import {
  Button,
  ActionRow,
  Command,
  Declare,
  type CommandContext,
} from 'seyfert';

import { ButtonStyle } from 'seyfert/lib/types';

@Declare({
  name: 'hello',
  description: 'I will send you a hello world message',
})
export default class HelloWorldCommand extends Command {
  async run(ctx: CommandContext) {
    const button = new Button()
      .setCustomId('hello')
      .setLabel('Hello')
      .setStyle(ButtonStyle.Primary);

    const row = new ActionRow<Button>().setComponents([button]);

    const message = await ctx.write(
      {
        content: 'Do you want a hello world? Click the button below.',
        components: [row],
      },
      true
    );

    const collector = message.createComponentCollector({
      filter: (i) => i.user.id === ctx.author.id && i.isButton(),
    });

    collector.run('hello', async (i) => {
      return i.write({ content: 'Hello World 👋' });
    });
  }
}
```

## Handling the Collector's onStop Event

A collector may stop, meaning it will no longer collect interactions from the message. To handle this stop, we need to pass a return function to the `onStop` option when creating the collector.

The return function will take two parameters:

- `reason`. A string indicating the reason why the collector stopped. The most common are `timeout` or `idle` if we’ve added a timeout or idle property to our collector. You can set the reason when manually stopping the collector within the `collector.stop()` function.
  
- `refresh`. A function that you can run to refresh the collector, causing it to resume collecting interactions as it did before.

Here’s an example of how we add an idle timeout of 1000ms to the collector and refresh it every time it enters the `onStop` return function.

```ts twoslash ins={34-38} showLineNumbers copy
import {
  Button,
  ActionRow,
  Command,
  Declare,
  type CommandContext,
} from 'seyfert';

import { ButtonStyle } from 'seyfert/lib/types';

@Declare({
  name: 'hello',
  description: 'I will send you a hello world message',
})
export default class HelloWorldCommand extends Command {
  async run(ctx: CommandContext) {
    const button = new Button()
      .setCustomId('hello')
      .setLabel('Hello')
      .setStyle(ButtonStyle.Primary);

    const row = new ActionRow<Button>().setComponents([button]);

    const message = await ctx.write(
      {
        content: 'Do you want a hello world? Click the button below.',
        components: [row],
      },
      true
    );

    const collector = message.createComponentCollector({
      filter: (i) => i.user.id === ctx.author.id && i.isButton(),
      onStop(reason, refresh) {
        //this will refresh the collector everytime it stops by timeout
        if (reason === 'idle') return refresh();
      },
      idle: 1e3, //1000ms
    });

    collector.run('hello', async (i) => {
      return i.write({ content: 'Hello World 👋' });
    });
  }
}
```

## Handling Modals with Collectors

Since modals are not message components, it’s not possible to create a `message component collector`, but Seyfert introduces the ability to create it using the `run` method within the modal constructor, which expects a return function that will handle the interactions.

Here’s an example using `run` within the modal constructor:

```ts twoslash showLineNumbers copy
import {
  Modal,
  Command,
  Declare,
  type ModalSubmitInteraction,
  type CommandContext,
} from 'seyfert';

@Declare({
  name: 'hello',
  description: 'I will send you a hello world message',
})
export default class HelloWorldCommand extends Command {
  async run(ctx: CommandContext) {
    const modal = new Modal()
      .setCustomId('hello')
      .setTitle('Hello')
      .run(this.handleModal);

    await ctx.interaction.modal(modal);
  }

  async handleModal(i: ModalSubmitInteraction) {
    return i.write({ content: 'Hello World 👋' });
  }
}
```