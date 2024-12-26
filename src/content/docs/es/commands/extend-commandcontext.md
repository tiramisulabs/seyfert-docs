---
title: Extendiendo CommandContext
---

Es posible que te hayas encontrado en una situación en la que deseas recibir datos personalizados dentro del `CommandContext` de Seyfert.

Para lograrlo, simplemente configura la opción `context` al definir el cliente de Seyfert. En esta opción, necesitas usar una función llamada `extendContext`, donde puedes manejar la interacción o mensaje de tu comando y devolver los datos personalizados que quieres agregar al contexto. Por ejemplo:

```ts twoslash copy wrap
import { Client, extendContext } from 'seyfert';

const context = extendContext((interaction) => {
  // Aquí puedes añadir

  return {
    myCoolProp: 'seyfert>>'
  };
});

const client = new Client({ context });
```

:::warning
Aunque hayas extendido el contexto, las propiedades que has añadido no están tipadas en el `CommandContext`. Para tiparlas, tendrás que declarar el módulo de Seyfert. Consulta la [guía de declaración de módulos](/getting-started/declare-module) para más información.
:::
