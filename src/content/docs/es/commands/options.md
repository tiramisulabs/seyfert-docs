---
title: Opciones de un comando
---

Las opciones en Discord tienen por obligación una descripción. Además, en todas las opciones podemos establecer si será requerida y una función para moldear el valor.

## Tipos de opciones

Los posibles tipos de opciones en un comando son los siguientes:

### Texto

```ts twoslash
// @exactOptionalPropertyTypes: false
import { Options, createStringOption, Command } from 'seyfert';

@Options({
    normal: createStringOption({
        description: '',
    }),


    /// Opciones fijas
    choices: createStringOption({
        description: '',
        choices: [
            { name: 'The best library', value: 'seyfert' },
            { name: 'An odd stuff', value: 'meowdb' },
        ] as const,
    }),

    /// Autocompletado
    autocomplete: createStringOption({
        description: '',
        autocomplete: (interaction) => {
            // aquí la lógica

            const select = ['bugs', 'actions', 'random'];
            const focus = interaction.getInput();
            return interaction.respond(
                select
                    .filter((ch) => ch.includes(focus))
                    .map((ch) => ({ name: ch, value: ch }))
            );
        },
    }),

    /// Límites de carácteres
    limitLength: createStringOption({
        description: '',
        max_length: 500,
        min_length: 200,
    }),
})
class Ping extends Command {}
```

<details>
<summary>Ejemplo de autocompletado de TypeScript</summary>

```ts twoslash
// @exactOptionalPropertyTypes: false
import { Options, createStringOption, Command, CommandContext } from 'seyfert';

const options = {
    /// Opciones fijas
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

### Números enteros

```ts twoslash
// @exactOptionalPropertyTypes: false
import { Options, createIntegerOption, Command } from 'seyfert';

@Options({
    normal: createIntegerOption({
        description: '',
    }),
    
    /// Opciones fijas
    choices: createIntegerOption({
        description: '',
        choices: [
            { name: 'seyfert', value: 1 },
            { name: 'potocuit', value: 2 },
            { name: 'biscuit', value: 3 }
        ]
    }),

    /// Autocompletado
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

    /// Límites de valores
    limitValue: createIntegerOption({
        description: '',
        max_value: 500,
        min_value: 200
    })
})
class Ping extends Command {}
```

<br />

### Número

```ts twoslash
// @exactOptionalPropertyTypes: false
import { Options, createNumberOption, Command } from 'seyfert';

@Options({
    normal: createNumberOption({
        description: '',
    }),
   
    // Aplica lo mismo que el anterior (integer/enteros), pero para todos los números incluyendo decimales
})
class Ping extends Command {}
```

<br />

### Canales

```ts twoslash
// @exactOptionalPropertyTypes: false
import { Options, createChannelOption, Command } from 'seyfert';
import { ChannelType } from 'seyfert/lib/types';

@Options({
    channel: createChannelOption({
        description: '',
    }),

    /// Tipo específico de canal
    channelTypes: createChannelOption({
        description: 'This is a limited channel option',
        channel_types: [ChannelType.GuildVoice]
    })
})
class Ping extends Command {}
```

<br />

### Booleanos

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

### Usuarios

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

### Mencionables

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

### Archivos

```ts twoslash
// @exactOptionalPropertyTypes: false
import { Options, createAttachmentOption, Command } from 'seyfert';

@Options({
    attachment: createAttachmentOption({
        description: 'This is a attachment option',
        required: true
    })
})
class Ping extends Command {}
```

<br/>

## Moldeando el valor

Podemos transformar el valor de cualquier opción en algo más, para eso utilizamos el método `value` que recibe como parámetros el valor del dato y dos funciones: `ok` y `fail`.

```ts twoslash {8-11}
// @exactOptionalPropertyTypes: false
function isUrl(url: string): boolean { return true; }
// ---cut---
import { Options, createStringOption, Command } from 'seyfert';
import type { OKFunction, CommandContext } from 'seyfert';

const options = {
    url: createStringOption({
        description: 'how to be a gamer',

        value(data, ok: OKFunction<URL>, fail) {
            if (isUrl(data.value)) return ok(new URL(data.value));
            fail('expected a valid url');
        }
    })
}

@Options(options)
class Ping extends Command {
    run(ctx: CommandContext<typeof options>) {
        ctx.options.url;
                  // ^?
    }
}
```

Ahora el tipo de dato que recibe el valor del comando es `URL`, si no es así se lanzará un error.

En [crear su primer comando](/getting-started/first-command) se ofrece un ejemplo detallado para obtener autocompletado.
