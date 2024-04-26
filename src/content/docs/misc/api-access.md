---
title: Shorters and Proxy
---

# Shorters

Shorters are a simple combination of the seyfert methods and the discord api, in seyfert they are intended for easy user access to the methods of all discord objects without having to instantiate their representative class or if it does not exist. Saving a lot of resources in unnecessary data accesses.

Suppose we have a welcome system, in its database, it already has access to the id of the channel where to send its message, then why should it look for that channel in the cache? why should it get data it doesn't need just to send a message? That's where shorteners come in.

```ts copy ins={11-13}
import { createEvent } from 'seyfert';

const db = new Map<string, string>();

export default createEvent({
	data: { name: 'guildMemberAdd' },
	run: async (member, client) => {
		const channelId = db.get(member.guildId);
		if (!channelId) { return; }

		await client.messages.write(channelId, {
			content: `Welcome ${member} :wave:`,
		});
	},
});
```
This applies to all seyfert, the methods in the classes that represent discord objects are just an extra layer of the shorteners for easy access, for example, by default seyfert does not add cache properties to the objects, but they bring facilities to access them.

```ts copy wrap {11-12}
import { createEvent } from 'seyfert';

const db = new Map<string, string>();

export default createEvent({
	data: { name: 'guildMemberAdd' },
	run: async (member, client) => {
		const channelId = db.get(member.guildId);
		if (!channelId) return;

		// this is a fetch request to cache (force if you want direct api fetch)
		const guild = await member.guild();

		await client.messages.write(channelId, {
			content: `Welcome ${member} to ${guild.name} :wave:`,
		});
	},
});


```


# Proxy

:::caution[About Proxy section]
This section talks specifically about the implementation of the [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) object, not about the integration of a proxy in the rest.
:::

The proxy object is the layer below the shorters, it is in charge of creating a path with the code relying on the autocompletion of typescript, it is basically the api of discord made an incredibly fast object.

Is there anything that is not supported in seyfert? Then access it directly, let's create a thread directly with the discord api:

```ts wrap copy {10-18}
import { createEvent } from 'seyfert';

export default createEvent({
	data: { name: 'channelCreate' },
	run: async (channel, client) => {
		if (!channel.isThreadOnly()) return; 

		// assuming that channel.thread method does not exist
		// the "object" will follow the same structure as the discord endpoints have
		await client.proxy.channels(channel.id).threads.post({
			body: {
				name: 'First thread!',
				message: {
					content: 'Seyfert >',
				},
			},
			reason: "I'm always the first",
		});
	},
});
```
Proxy has access to all types of the discord api, so it will always be a way to stay ahead even within the development versions.