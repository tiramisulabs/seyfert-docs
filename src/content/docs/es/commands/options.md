---
title: Opciones de un Comando
---

Cada función recibe los siguientes parámetros:
- **description**: La descripción de la opción.
- **required**: Si la opción es obligatoria.
- **value**? Callback donde se puede filtrar el valor enviado por Discord antes de que llegue al comando principal. [Cómo usar aquí](#using-the-value-callback)
## Tipos de opciones

### createStringOption
```ts 
@Options({
  choices: createStringOption({
    choices: [
      { name: 'The best library', value: 'seyfert' },
      { name: 'An odd stuff', value: 'oceanicjs' }
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
```ts {1-5,7,10-13} 
@Options({
  channel: createChannelOption({
    description: 'This is a channel option',
  })
})

import { ChannelTypes } from 'seyfert/lib/common';

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
## Usando el callback de `value`

```ts 
import { OKFunction } from 'seyfert';

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

En [Crear su primer comando](/es/guides/first-command#using-options) se ofrece un breve ejemplo.
