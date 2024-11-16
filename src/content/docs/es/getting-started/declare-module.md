---
title: Entendiendo `declare module`
---

:::tip

Esta técnica se denomina aumento de módulo, más información en la [documentación de typescript](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation)

:::

Debido a la versatilidad de Seyfert, puede resultar confuso entender exactamente cómo incluir contenidos en el proyecto, por lo que Seyfert incluye diferentes interfaces para que el desarrollador las utilice a la hora de definir sus propias reglas.

## Clientes

Seyfert incluye varios tipos de cliente para crear la instancia de un bot, esto puede crear confusión a la hora de llamar al cliente en cualquier parte de tu código, por lo que puedes especificar a typescript cuál estás utilizando:

```ts copy
declare module 'seyfert' {
  interface UsingClient extends ParseClient<Client<true>> {}
  // interface UsingClient extends ParseClient<WorkerClient<true>> { }
  // interface UsingClient extends ParseClient<HttpClient> { }
}
```

## Middlewares

Para que puedas utilizar tus middlewares en todas partes, de nuevo es necesario decirle a typescript qué son y cómo están compuestos.
Exporta todos los middlewares de tu código y pásalos a Seyfert:

```ts copy
import type * as allMiddlewares from './middlewares';

declare module 'seyfert' {
  interface RegisteredMiddlewares
    extends ParseMiddlewares<typeof allMiddlewares> {}
}
```

Esto es lo mismo que lo anterior, pero se aplica a los middlewares globales, aquellos que se ejecutan en cada comando incluso sin especificarlos en el comando.

```ts copy
import type * as allMiddlewares from './middlewares/globals';

declare module 'seyfert' {
  interface GlobalMetadata extends ParseMiddlewares<typeof globalMiddlewares> {}
}
```

## Lenguajes

En el sistema de lenguaje de Seyfert, se prioriza el lenguaje por defecto, incluyendo la tipificación proporcionada por typescript.

:::info
Es muy recomendable utilizar archivos `.ts`, `.js` para tus traducciones, ¡así podrás incluir funciones dentro de ellas y autocompletar!
:::

:::warning
Si utiliza json para esto (no recomendado), debe añadir `../` a la ruta en su `seyfert.config.mjs` ya que typescript ignora los archivos json que no se importan manualmente.
:::

```ts copy
import type * as defaultLang from './langs/en';

declare module 'seyfert' {
  interface DefaultLocale extends ParseLocales<typeof defaultLang> {}
}
```

## Ampliar el contexto

## Opciones internas

Dado que Seyfert acepta diferentes formas de operar, se hace más complicado mantener los tipos fieles a la realidad. Por eso existen `InternalOptions`, una interfaz que espera propiedades para transformar los tipos de Seyfert en algo más completo.

```ts copy
declare module 'seyfert' {
  interface InternalOptions {
    withPrefix: true | false;
    asyncCache: true | false;
  }
}
```

### withPrefix

Establecer esta propiedad a `true` indica a Seyfert que el contexto puede tener mensaje o interacción y ambos serán opcionales, por defecto `.interaction` siempre forma parte del contexto.

### asyncCache

Establecer esta propiedad a `true` le dice a Seyfert si la caché devolverá una promesa o no, por defecto Seyfert utiliza `MemoryAdapter` una caché RAM que no devuelve una promesa, pero `RedisAdapter` sí lo hace.
