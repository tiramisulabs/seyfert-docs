---
title: Command Options
---

Options in Discord commands are required to have a description. Additionally, for all options, we can set whether they are required and include a function to transform their value.

## Option Types

The possible types of options in a command are as follows:

### Text

```ts twoslash
// @exactOptionalPropertyTypes: false
import { Options, createStringOption, Command } from 'seyfert';

@Options({
    normal: createStringOption({
        description: '',
    }),

    /// Fixed choices
    choices: createStringOption({
        description: '',
        choices: [
            { name: 'The best library', value: 'seyfert' },
            { name: 'An odd stuff', value: 'meowdb' },
        ] as const,
    }),

    /// Autocomplete
    autocomplete: createStringOption({
        description: '',
        autocomplete: (interaction) => {
            // logic here

            const select = ['bugs', 'actions', 'random'];
            const focus = interaction.getInput();
            return interaction.respond(
                select
                    .filter((ch) => ch.includes(focus))
                    .map((ch) => ({ name: ch, value: ch }))
            );
        },
    }),

    /// Character limits
    limitLength: createStringOption({
        description: '',
        max_length: 500,
        min_length: 200,
    }),
})
class Ping extends Command {}
```

<details>
<summary>TypeScript autocomplete example</summary>

```ts twoslash
// @exactOptionalPropertyTypes: false
import { Options, createStringOption, Command, CommandContext } from 'seyfert';

const options = {
    /// Fixed choices
    best: createStringOption({
        description: '',
        choices: [
            { name: 'The best library', value: 'seyfert' },
            { name: 'An odd stuff', value: 'meowdb' },
        ] as const,
    }),
};

@Options(options)
class Ping extends Command {
    async run(ctx: CommandContext<typeof options>) {
        ctx.options.best;
        //          ^?
    }
}
```
</details>

<br />

### Integers

```ts twoslash
// @exactOptionalPropertyTypes: false
import { Options, createIntegerOption, Command } from 'seyfert';

@Options({
    normal: createIntegerOption({
        description: '',
    }),
    
    /// Fixed choices
    choices: createIntegerOption({
        description: '',
        choices: [
            { name: 'seyfert', value: 1 },
            { name: 'potocuit', value: 2 },
            { name: 'biscuit', value: 3 }
        ]
    }),

    /// Autocomplete
    autocomplete: createIntegerOption({
        description: '',
        autocomplete: (interaction) => {
            const select = ['1651611', '4616165156549', '15616416515616'];

            const focus = interaction.getInput();

            return interaction.respond(
                select
                    .filter((ch) => ch.includes(focus))
                    .map((ch) => ({ name: ch, value: parseInt(ch) }))
            );
        }
    }),

    /// Value limits
    limitValue: createIntegerOption({
        description: '',
        max_value: 500,
        min_value: 200
    })
})
class Ping extends Command {}
```

<br />

### Numbers

```ts twoslash
// @exactOptionalPropertyTypes: false
import { Options, createNumberOption, Command } from 'seyfert';

@Options({
    normal: createNumberOption({
        description: '',
    }),
   
    // Same logic as integers but applies to all numbers, including decimals
})
class Ping extends Command {}
```

<br />

### Channels

```ts twoslash
// @exactOptionalPropertyTypes: false
import { Options, createChannelOption, Command } from 'seyfert';
import { ChannelType } from 'seyfert/lib/types';

@Options({
    channel: createChannelOption({
        description: '',
    }),

    /// Specific channel type
    channelTypes: createChannelOption({
        description: 'This is a limited channel option',
        channel_types: [ChannelType.GuildVoice]
    })
})
class Ping extends Command {}
```

<br />

### Booleans

```ts twoslash
// @exactOptionalPropertyTypes: false
import { Options, createBooleanOption, Command } from 'seyfert';

@Options({
    bool: createBooleanOption({
        description: 'This is a boolean option',
        required: true
    })
})
class Ping extends Command {}
```

<br />

### Users

```ts twoslash
// @exactOptionalPropertyTypes: false
import { Options, createUserOption, Command } from 'seyfert';

@Options({
    user: createUserOption({
        description: 'This is a user option',
        required: true
    })
})
class Ping extends Command {}
```

<br />

### Roles

```ts twoslash
// @exactOptionalPropertyTypes: false
import { Options, createRoleOption, Command } from 'seyfert';

@Options({
    role: createRoleOption({
        description: 'This is a role option',
        required: true
    })
})
class Ping extends Command {}
```

<br />

### Mentionables

```ts twoslash
// @exactOptionalPropertyTypes: false
import { Options, createMentionableOption, Command } from 'seyfert';

@Options({
    mentionable: createMentionableOption({
        description: 'This is a mentionable option',
        required: true
    })
})
class Ping extends Command {}
```

<br />

### Attachments

```ts twoslash
// @exactOptionalPropertyTypes: false
import { Options, createAttachmentOption, Command } from 'seyfert';

@Options({
    attachment: createAttachmentOption({
        description: 'This is an attachment option',
        required: true
    })
})
class Ping extends Command {}
```

<br/>

## Transforming the Value

We can transform the value of any option using the `value` method, which takes the data value and two functions: `ok` and `fail`.

```ts twoslash {8-11}
// @exactOptionalPropertyTypes: false
function isUrl(url: string): boolean { return true; }
// ---cut---
import { Options, createStringOption, Command } from 'seyfert';
import type { OKFunction } from 'seyfert';

@Options({
    url: createStringOption({
        description: 'how to be a gamer',

        value(data, ok: OKFunction<URL>, fail) {
            if (isUrl(data.value)) return ok(new URL(data.value));
            fail('expected a valid url');
        }
    })
})
class Ping extends Command {}
```

Now, the command’s option value is of type `URL`. If it’s not valid, an error will be thrown.

Refer to [Creating Your First Command](/getting-started/first-command) for a detailed example of enabling autocomplete.
