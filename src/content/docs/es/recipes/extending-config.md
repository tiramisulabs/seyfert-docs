---
title: Extendiendo el archivo de configuración
---

:::caution[Sobre los tipos]
Esto solo funciona como se espera en archivos .ts, no verás intellisense en archivos .js.

Asimismo, solo funcionará si has especificado la ruta de "seyfert.config.(ts|mts|cts)" en la sección "include" de tu tsconfig.json.
:::

Podrías tener una configuración como la siguiente:
```ts
import { config } from "seyfert";

export default config.bot({
	locations: {
		base: "dist",
		commands: "commands",
	},
	token: process.env.TOKEN!,
});
```

Por ejemplo, al agregar algunas propiedades.

```ts
declare module 'seyfert' {
    interface ExtendedRC {
        prefix: string;
        // incluso más propiedades
    }
}
```

Notarás un error de tipo en tu archivo seyfert.config.ts.

Si no ves este error, tal vez omitiste un paso.

~~O ya tenías la propiedad `prefix` incluida.~~
```bash
Property 'prefix' is missing in type '{ locations: ...
```

¡GENIAL! Entonces... ¿cómo obtengo la propiedad?

Tan simple como:
```ts
const rc = await client.getRC();

console.log(rc.prefix);
```

¿Qué pasa con las ubicaciones?
:::caution[Sobre las ubicaciones]
Seyfert NO maneja ubicaciones personalizadas, esa es tu responsabilidad. Sin embargo, puedes extenderlas.
:::
```ts
declare module 'seyfert' {
    interface ExtendedRCLocations {
        music: string;
    }
}
```

¡GENIAL! Entonces...
```ts
const rc = await client.getRC();

console.log(rc.locations.music);
```

El producto terminado sería algo como esto:
```ts
import { config } from "seyfert";

export default config.bot({
	locations: {
		base: "dist",
		commands: "commands",
		music: "lavalink", // dist/lavalink
	},
	token: process.env.TOKEN!,
	prefix: "s!",
});
```
