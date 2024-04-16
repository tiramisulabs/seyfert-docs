---
title: Collectors
---

Now that you have learned how to handle components in a static way, you could have asked yourself how I get more context about what had happened before sending the component. 

Seyfert includes `message components collectors` which are an easy way to handle does interactions received from an specific message and make you able to get more context about what had happened before sending the component.

:::note

If the process where you created the component collector is killed the collector will stop and the interactions of the message won't be handled.
:::

## Building collectors

Collectors are built using [`createComponentCollector`](/api/classes/basemessage#createcomponentcollector) method in a message, which is inherited by [`BaseMessage`](/api/classes/basemessage). This method returns an object representing a collector.

Here is an example of how to build a simple collector after sending a message with one button attached to it in a `hello world` command.

```ts showLineNumbers copy

import {
  Button,
  ActionRow,
  Command,
  Declare,
  type CommandContext
} from 'seyfert';

import { ButtonStyle } from 'seyfert/lib/types';

@Declare({
  name: 'hello',
  description: 'I will send you a hello world message'
})
export default class HelloWorldCommand extends Command {
  async run(ctx: CommandContext) {
    const button = new Button()
      .setCustomId('hello')
      .setLabel('Hello')
      .setStyle(ButtonStyle.Primary);

    const row = new ActionRow<Button>().setComponents([button]);

    // get the message by setting fetchReply to true
    const message = await ctx.write(
      {
        content: 'You want a hello world. Click the button below.',
        components: [row]
      },
      true
    );

    const collector = message.createComponentCollector();
  }
}
```

## Handling interactions within a collector

Having created a collector from a message we are going to handle the interaction of the button with the `run` function of the collector.

Here is an example:

```ts ins={35-37} showLineNumbers copy

import {
  Button,
  ActionRow,
  Command,
  Declare,
  type CommandContext
} from 'seyfert';

import { ButtonStyle } from 'seyfert/lib/types';

@Declare({
  name: 'hello',
  description: 'I will send you a hello world message'
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
        content: 'You want a hello world. Click the button below.',
        components: [row]
      },
      true
    );

    const collector = message.createComponentCollector();

    // we are putting the custom id we have set into the button in the first param of the function.
    collector.run('hello', async (i) => {
      if (i.isButton()) return await i.write({ content: 'Hello World 👋' });
    });
  }
}

```

## Filtering interactions

You might have thought about filtering the interaction received in the run function for limiting, for example the user who is interacting with the button. 

You would have added a condition inside the run function like this:

```ts 

if (i.user.id === ctx.author.id)
  return i.write({ content: 'Do not touch the button' });

```

This will limit the use of the button to only the one which run the command. 

But seyfert implements just a simply `filter` option when creating the collector which expects a callback that returns a boolean.

We are going to implement the filter for filtering the user who ran the interaction and filter the interaction only for button interactions.

```ts ins={33} showLineNumbers copy

import {
  Button,
  ActionRow,
  Command,
  Declare,
  type CommandContext
} from 'seyfert';

import { ButtonStyle } from 'seyfert/lib/types';

@Declare({
  name: 'hello',
  description: 'I will send you a hello world message'
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
        content: 'You want a hello world. Click the button below.',
        components: [row]
      },
      true
    );

    const collector = message.createComponentCollector({
      filter: (i) => i.user.id === ctx.author.id && i.isButton()
    });

    collector.run('hello', async (i) => {
      return await i.write({ content: 'Hello World 👋' });
    });
  }
}


```

## Handling collector onStop

A collector could stop this mean the collector won't be collecting more interactions of the message. To handle the stop we have to pass a callback into `onStop` option when creating the collector.

The callback will take two parameters:

* `reason`. A string which indicates the reason of why the collector has stopped. The most common is `timeout` or `idle` if we added the timeout or idle property to our collector. You can set the reason when you manually stop the collector within the `collector.stop()` function.

* `refresh`. A function which you can execute to refresh the collector, making it collecting interactions as it did before.

Here is an example of how we add an idle to the collector of 1000ms and then everytime it enters into `onStop` callback we refresh it.

```ts ins={34-38} showLineNumbers copy
import {
  Button,
  ActionRow,
  Command,
  Declare,
  type CommandContext
} from 'seyfert';

import { ButtonStyle } from 'seyfert/lib/types';

@Declare({
  name: 'hello',
  description: 'I will send you a hello world message'
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
        content: 'You want a hello world. Click the button below.',
        components: [row]
      },
      true
    );

    const collector = message.createComponentCollector({
      filter: (i) => i.user.id === ctx.author.id && i.isButton(),
      onStop(reason, refresh) {
        //this will refresh the collector everytime it stops by timeout
        if (reason === 'idle') return refresh();
      },
      idle: 1e3 //1000ms
    });

    collector.run('hello', async (i) => {
      return await i.write({ content: 'Hello World 👋' });
    });
  }
}
```

## Handling Modals with collectors

As modals aren't message components there is not possibility to create a `message components collector` but Seyfert introduces the possiblity to create it by using the `run` method within the modal builder which expects a callback that will handle the interactions. 

Here is an example using the `run` within the modal builder:

```ts showLineNumbers copy
import {
  Modal,
  Command,
  Declare,
  type ModalSubmitInteraction,
  type CommandContext
} from 'seyfert';

@Declare({
  name: 'hello',
  description: 'I will send you a hello world message'
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
    return await i.write({ content: 'Hello World 👋' });
  }
}


```