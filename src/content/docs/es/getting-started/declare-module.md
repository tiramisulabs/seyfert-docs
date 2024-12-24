---
title: Entendiendo 'declare module'
---

:::tip
Esta técnica, conocida como extensión de módulo (*Module Augmentation*), se explica con más detalle en la [documentación oficial de TypeScript](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation).

En esta sección no entraremos en profundidad sobre cómo funciona, pero explicaremos lo necesario para aplicarla correctamente dentro de Seyfert.
:::

> Los siguientes códigos puedes utilizarlos dentro de cualquier archivo TypeScript de tu proyecto. Lo recomendable es colocar un único `declare module 'seyfert'` en el archivo principal `src/index.ts` que contenga todo lo necesario para tu bot.

## Clientes

Seyfert ofrece varios [tipos de cliente](./setup-project) para instanciar tu bot, lo que podría generar confusión al referenciar el cliente en distintas partes de tu código. Para evitar esto, puedes indicarle a TypeScript qué tipo de cliente estás utilizando. Asegúrate de elegir solo una de las siguientes tres implementaciones:

```ts twoslash {"Gateway":4-5} {"HTTP":7-8} {"Worker":10-11} copy
import type { ParseClient, Client, HttpClient, WorkerClient } from 'seyfert';

declare module 'seyfert' {

    interface UsingClient extends ParseClient<Client<true>> { }
  
  
    interface UsingClient extends ParseClient<HttpClient> { }
  
  
    interface UsingClient extends ParseClient<WorkerClient<true>> { }
}
```

## Intermediarios (Middlewares)

Para utilizar tus middlewares en todo el proyecto, es necesario nuevamente informar a TypeScript sobre su estructura y composición. Exporta todos los middlewares de tu código y proporciónaselos a Seyfert de la siguiente manera:

```ts {2,5} copy
// Suponiendo que exportaste todos los middlewares de './middlewares';
import type * as allMiddlewares from './middlewares';

declare module 'seyfert' {
    interface RegisteredMiddlewares extends ParseMiddlewares<typeof allMiddlewares> {}
}
```

Esto se aplica de manera similar a los middlewares globales, los cuales se ejecutan automáticamente en cada comando, incluso si no han sido especificados explícitamente en él.

```ts {2,5} copy
// Suponiendo que exportaste todos los middlewares de './globalMiddlewares';
import type * as allMiddlewares from './globalMiddlewares';

declare module 'seyfert' {
    interface GlobalMetadata extends ParseMiddlewares<typeof globalMiddlewares> {}
}
```

> Si aún no sabes qué es un middleware, puedes revisar sus casos de uso y estructura en su [respectiva sección](../commands/middlewares).

## Idiomas

Para configurar correctamente los tipos para los idiomas, se recomienda establecer un idioma principal o base que siempre actualices. Así, todos los tipos se derivarán de este idioma, lo que facilitará mantener el resto de las traducciones al día.

:::note
A pesar de que puedes utilizar archivos `.json` para almacenar los idiomas, es muy recomendable utilizar archivos `.ts`, `.js`, ¡así podrás incluir funciones dentro de ellos y autocompletar!
:::


```ts {2,5} copy
// Suponiendo que tu lenguaje base (principal) está en './langs/en';
import type * as defaultLang from './langs/en';

declare module 'seyfert' {
    interface DefaultLocale extends ParseLocales<typeof defaultLang> {}
}
```

> Si aún no sabías que Seyfert cuenta con un sistema de idiomas automático, te recomendamos visitar la [sección dedicada a esto](../i18n/languages).
 
## Contextos

A menudo necesitamos extender los contextos para agregar propiedades o métodos útiles, lo que también requiere actualizar los tipos.

Si has utilizado `extendContext` para esto, puedes utilizar el siguiente código para inferir el tipo que devuelve tu función y añadirlo al contexto:

```ts twoslash {3,6} copy
import { extendContext } from 'seyfert';

const context = extendContext((ctx) => ({ nutria: 'tierna' }));

declare module 'seyfert' {
    interface ExtendContext extends ReturnType<typeof context> {}
}
```

> Si aún no sabías que con Seyfert puedes modificar y extender el contexto de forma sencilla, puedes revisar su [respectiva sección](../commands/extend-commandcontext).

## Propiedades de comando

A menudo necesitamos categorizar algunos comandos, o simplemente ponerles un identificador para algo.

Para esto, podemos usar `ExtraProps`:

```ts twoslash {3,6} copy
// @errors: 2741 2322
import { Client, Declare, Command } from 'seyfert';
// ---cut---
const client = new Client({
    commands: {
        defaults: {
            props: {
                categoria: 'none'
            }
        }
    }
});

@Declare({
    name: 'test',
    description: 'comando de prueba',
    props: {}
})
class Test extends Command {}

declare module 'seyfert' {
    interface ExtraProps {
        soloParaAdmins: boolean;
        deshabilitado?: true;
        categoria?: string
    }
}
```

## Opciones internas

Como Seyfert admite diversas formas de operar, es necesario añadir tipos según lo requieran nuestras implementaciones. Para ello, existe `InternalOptions`, una interfaz diseñada para incluir propiedades que transformen los tipos de Seyfert en algo más completo.

```ts twoslash copy
import 'seyfert';
// ---cut---
declare module 'seyfert' {
    interface InternalOptions {
        withPrefix: true; // o false
        asyncCache: false; // o true
    }
}
```

### withPrefix

Establecer esta propiedad en `true` indica a Seyfert que el contexto puede incluir un mensaje o una interacción, siendo ambos opcionales. De forma predeterminada, `.interaction` siempre está presente en el contexto.

### asyncCache

Establecer esta propiedad en `true` indica a Seyfert si la caché devolverá una promesa. Por defecto, Seyfert utiliza `MemoryAdapter`, una caché en RAM que no devuelve promesas, mientras que [`RedisAdapter`](https://npmjs.com/package/@slipher/redis-adapter) sí lo hace.


## Configuración

En Seyfert, puedes agregar más propiedades al archivo de configuración `seyfert.config.mjs`, independientemente de si estás utilizando la configuración `http` o `bot`. Esto se puede lograr utilizando `ExtendedRC` de la siguiente manera:

```ts twoslash
import 'seyfert';
// ---cut---
declare module 'seyfert' {
    interface ExtendedRC {
        developers: string[];
        // más propiedades aquí...
    }
}
```


## Ubicaciones

Al igual que es posible extender la configuración base de Seyfert, también puedes ampliar el objeto de las ubicaciones de tus carpetas (locations) utilizando `ExtendedRCLocations`. Esto se realiza de la siguiente manera:

```ts twoslash
import 'seyfert';
// ---cut---
declare module 'seyfert' {
    interface ExtendedRCLocations {
        models: string;
        // más propiedades aquí...
    }
}
```
