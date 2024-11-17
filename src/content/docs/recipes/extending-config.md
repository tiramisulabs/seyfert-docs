---
title: Extending the config file
---

:::caution[About types]
This only works as expected in .ts files, you will not see intellisense in .js files.

Likewise, only if you have specified the "seyfert.config.(ts|mts|cts)" path in "include" in your tsconfig.json
:::

You might have a configuration as such:
```ts
import { config } from "seyfert";

export default config.bot({
	locations: {
		base: "src",
		output: "dist",
		commands: "commands",
	},
	token: process.env.TOKEN!,
});
```

For instance, when adding some properties.

```ts
declare module 'seyfert' {
    interface ExtendedRC {
        prefix: string;
        // even more properties
    }
}
```

You will notice a type error in your seyfert.config.ts

If you did not see this error, maybe you missed a step.

~~Or you already had the prefix property on it~~
```bash
Property 'prefix' is missing in type '{ locations: ...
```

GREAT! So... how do I get the property?

As simple as:
```ts
const rc = await client.getRC();

console.log(rc.prefix);
```


What about locations?
:::caution[About locations]
Seyfert does NOT handle custom locations, that's your responsability. However, you may extend it.
:::
```ts
declare module 'seyfert' {
    interface ExtendedRCLocations {
        music: string;
    }
}
```

GREAT! So...
```ts
const rc = await client.getRC();

console.log(rc.locations.music);
```

The finished product would be something like this:
```ts
import { config } from "seyfert";

export default config.bot({
	locations: {
		base: "src",
		output: "dist",
		commands: "commands",
		music: "lavalink", // dist/lavalink
	},
	token: process.env.TOKEN!,
	prefix: "s!",
});
```