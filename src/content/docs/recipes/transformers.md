---
title: Transformers
---

## What is a transformer?

Basically, a transformer is a function that takes an object and transforms it into another value. In Seyfert, transformers are used to transform data coming from Discord into any values you need.

## How are they used?

Let's look at an example of a transformer.

```ts twoslash
import type { APIUser } from 'seyfert/lib/types';

interface MyUser {
    username: string;
    isAdmin: boolean;
    raw(): Promise<APIUser>;
}
//---cut---
import { Transformers } from 'seyfert';

Transformers.User = (client, data) => {
    return {
        username: data.username,
        isAdmin: Math.random() > 0.5,
        raw() {
            return client.users.raw(data.id);
        },
    };
};

/*
At this point, you should have a `declare module "seyfert"` in your project, 
if not, add it.
*/
declare module "seyfert" {
// Declaring the type this way will reflect in the typing throughout the entire project.
    interface CustomStructures {
        User: MyUser;
    }
// You can add as many transformers as you like with any type.
}
```

Let the autocomplete of your editor guide you and discover all the possibilities you have.
```ts twoslash
import { Transformers } from 'seyfert';

Transformers.GuildMember
              // ^|
```

## How can I use them?

For example, we defined a transformer for the user earlier, now let's see how we can use it.
```ts twoslash
import type { APIUser } from 'seyfert/lib/types';

interface MyUser {
    username: string;
    isAdmin: boolean;
    raw(): Promise<APIUser>;
}

declare module "seyfert" {
    interface CustomStructures {
        User: MyUser;
    }
}
//---cut---
import { type CommandContext, Command, Declare } from 'seyfert';

@Declare({
    name: 'ping',
    description: 'Ping!',
})
class Ping extends Command {
    async run(ctx: CommandContext) {
        const result = await ctx.author.raw();
                                     // ^|
        console.log(result.id, result.username);
    }
}
```

![A seyfert transformer](../../../../public/transformers.gif)