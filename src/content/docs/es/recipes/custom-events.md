---
title: Custom Events
---
:::tip
Al igual que en otras secciones, se usara [module augmentation](/getting-started/declare-module), recomendamos leerla primero.
:::


Seyfert permite cargar, integrar y ejecutar "eventos" personalizados para poder llamarlos en cualquier lugar, se pondra en practica el uso de [modulos de musica](/recipes/music).
## Integrando
:::danger
Tome en cuenta que pueden existir eventos con el mismo nombre, en runtime se terminaran sobre-escribiendo
:::

Debe recordarse usted mismo que los eventos existen, vamos a typearlos:

```ts title="index.ts"
import type { ShoukakuEvents } from 'shoukaku';

type MappedEvents = {
    [K in keyof Omit<ShoukakuEvents, 'ready' | 'raw'>]: (...params: ShoukakuEvents[K]) => never;
};

declare module "seyfert" {
	interface CustomEvents extends MappedEvents {
		shoukakuReady: (...params: ShoukakuEvents['ready']) => never;
		shoukakuRaw: (...params: ShoukakuEvents['raw']) => never;
	}
}
```

### Cargando eventos

Esto solo esta aqui para flexear que no tienes que hacer nada, solo ponga sus eventos en la carpeta designada en `seyfert.config`.

```ts title="events/music/ready.ts"
import { createEvent } from 'seyfert';

export default createEvent({
	data: { name: "shoukakuReady", once: true },
	run: (name) => {
		console.log(`Lavalink ${name}: Ready!`);
	}
});
```

## Ejecutando

```ts title="index.ts" {3,28,30-32,38-40}
import { Client } from "seyfert";
import { Kazagumo } from "kazagumo";
import type { ShoukakuEvents } from 'shoukaku';
import { type NodeOption, Connectors } from "shoukaku";

const client = new Client();
const nodes: NodeOption[] = [
	{
		name: "Node",
		url: "localhost:2333",
		auth: "youshallnotpass",
		secure: false
	}
];

//Basic configuration, perfect for this case
client.kazagumo = new Kazagumo(
	{
		defaultSearchEngine: "youtube",
		send: (guildId, payload) =>
			client.gateway.send(client.gateway.calculateShardId(guildId), payload)
	},
	new Connectors.Seyfert(client),
	nodes
);

//To see whether the node is connected
client.kazagumo.shoukaku.on("ready", (...args) => client.events?.runCustom('ready', ...args));

type MappedEvents = {
    [K in keyof Omit<ShoukakuEvents, 'ready' | 'raw'>]: (...params: ShoukakuEvents[K]) => never;
};

declare module "seyfert" {
	interface Client {
		kazagumo: Kazagumo;
	}
	interface CustomEvents extends MappedEvents {
		shoukakuReady: (...params: ShoukakuEvents['ready']) => never;
		shoukakuRaw: (...params: ShoukakuEvents['raw']) => never;
	}
}

client.start().then(() => client.uploadCommands());
```