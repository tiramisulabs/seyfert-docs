---
title: Building components
---

Having sent the component within a channel it's about time you want to handle the interaction from the component.

First of all we are going to create a file inside the directory that we have set at the start of our project for the components.

Then we are going to create a class which extends [`ComponentCommand`](/api/classes/componentcommand), something like we do with simple commands, and then we are going to set the type of the component we want to handle (`Buttons` or anytype of `SelectMenu`)


In this example I have created a component to reply `Hello World` to the interaction. I have set the customId of the button to `hello-world`.

```ts showLineNumbers copy

import { ComponentCommand } from 'seyfert';

export class HelloWorldButton extends ComponentCommand {
    componentType = 'Button' as const;
}
```

## Filtering component interactions

Now we want the handler to handle only the interactions created by the `HelloWorld` button so we will use the customId we have to set in all the components.

To filter the interactions we are using a function inherited by the `ComponentCommand` class in which we have to return a boolean.

```ts ins={14-19} showLineNumbers copy

import {
    ComponentCommand,
    type ComponentContext
} from 'seyfert';

export class HelloWorldButton extends ComponentCommand {
    componentType = 'Button' as const;

    filter(ctx: ComponentContext<typeof this.componentType>){

        //we are checking if the customId of the interaction is the same that the one set in my button

        return ctx.customId === 'hello-world';
    }
}
```

## Running the component handler

If the filter function success and returns `true` the handler will execute a `run` function with your code logic.

```ts ins={22-26} showLineNumbers copy

import {
    ComponentCommand,
    type ComponentContext
} from 'seyfert';

import {
    MessageFlags
} from 'discord-api-types/v10';


export class HelloWorldButton extends ComponentCommand {
    componentType = 'Button' as const;

    //this can be a promise too.

    filter(ctx: ComponentContext<typeof this.componentType>){

        return ctx.customId === 'hello-world';
    }

    async run(ctx: ComponentContext<typeof this.componentType>){

        return await ctx.write({ content: 'Hello World 👋', flags: MessageFlags.Ephemeral })

    }
}
```