---
title: Command Options
---

In this page we list all the options functions that you can use to create options for your commands, a briefly example how to setup commands was given in [Creating your first command](/getting-started/first-command#using-options)

In general each function takes the following parameters, then some functions have some specific parameters:
- **description**: The description of the option.
- **required**?: Whether the option is required.
- **value**?: Callback where you filter the value sent by discord before it reaches the main command. [How to use here](#using-the-value-callback)
## Type Options

### createStringOption
```ts 
@Options({
  choices: createStringOption({
    choices: [
      { name: 'The best library', value: 'seyfert' },
      { name: 'An odd typa stuff', value: 'oceanicjs' }
    ]
  }),
  autocomplete: createStringOption({
    autocomplete: (interaction) => {
      const select = ['bugs', 'actions', 'random'];
      const focus = interaction.getInput();
      return interaction.respond(
        select
          .filter((ch) => ch.includes(focus))
          .map((ch) => ({ name: ch, value: ch }))
      );
    }
  }),
  limitLength: createStringOption({
    max_length: 500,
    min_length: 200
  })
})
```
### createIntegerOption
```ts 
@Options({
  choices: createIntegerOption({
    choices: [
      { name: 'seyfert', value: 1 },
      { name: '?discord.js', value: 2 },
      { name: '??oceanicjs', value: 3 }
    ]
  }),
  autocomplete: createIntegerOption({
    autocomplete: (interaction) => {
      const select = ['1651611', '4616165156549', '15616416515616'];

      const focus = interaction.getInput();

      return interaction.respond(
        select
          .filter((ch) => ch.includes(`${focus}`))
          .map((ch) => ({ name: ch, value: parseInt(ch) }))
      );
    }
  }),
  limitValue: createIntegerOption({
    max_value: 500,
    min_value: 200
  })
})
```
### createNumberOption
```ts 
@Options({
  choices: createNumberOption({
    choices: [
      { name: 'seyfert', value: 1 },
      { name: '?discord.js', value: 2 },
      { name: '??Oceanicjs', value: 3 }
    ]
  }),
  autocomplete: createNumberOption({
    autocomplete: (interaction) => {
      // imagine javascript Number or Integer kekw
      const select = ['1651611', '4616165156549', '15616416515616'];

      const focus = interaction.getInput();

      return interaction.respond(
        select
          .filter((ch) => ch.includes(`${focus}`))
          .map((ch) => ({ name: ch, value: parseInt(ch) }))
      );
    }
  }),
  limitValue: createNumberOption({
    max_value: 500,
    min_value: 200
  })
})
```
### createChannelOption
```ts {2-4,7,10-13} 
@Options({
  channel: createChannelOption({
    description: 'This is a channel option',
  })
})

import { ChannelTypes } from 'seyfert/lib/types';

@Options({
  channelTypes: createChannelOption({
    description: 'This is a limited channel option',
    channel_types: [ChannelTypes.GuildVoice]
  })
})
```
### createBooleanOption
```ts {2-5} 
@Options({
  bool: createBooleanOption({
    description: 'This is a boolean option',
    required: true
  })
})
```
### createUserOption
```ts {2-5} 
@Options({
  user: createUserOption({
    description: 'This is a user option',
    required: true
  })
})
```
### createRoleOption
```ts {2-5} 
@Options({
  role: createRoleOption({
    description: 'This is a role option',
    required: true
  })
})
```
### createMentionableOption
```ts {2-5} 
@Options({
  mentionable: createMentionableOption({
    description: 'This is a mentionable option',
    required: true
  })
})
```
### createAttachmentOption
```ts {2-5} 
@Options({
  attachment: createAttachmentOption({
    description: 'This is a attachment option',
    required: true
  })
})
```
## Using the `value` callback

```ts ins={1} {6-9}
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
```