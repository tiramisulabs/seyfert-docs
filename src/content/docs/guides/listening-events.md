---
title: Listening discord events
---

:::note

This section is only necessary for gateway applications, so if your bot is build in http application-only you can skip this section.

:::

First of all, you must tell seyfert where your events will be created by updating your config file.

```ts {11} title="seyfert.config.js" showLineNumbers
// @ts-check
const { config } = require('seyfert');

module.exports = config.bot({
  token: process.env.BOT_TOKEN,
  intents: ["Guilds"],
  locations: {
    base: "src",
    output: "dist",
    commands: "commands",
    events: "events"
  }
});
```

Then you can create a listener by exporting `createEvent` function in file inside the `events` folder. Let's see an example of how create a ready event:

```ts title="src/events/botReady.ts" showLineNumbers
import { createEvent } from "seyfert";

export default createEvent({
  data: { once: true, name: "botReady" },
  async run(user, client, shard) {
    client.logger.info(`${user.username} is ready on shard #${shard}`);
  }
})
```

Let's check another example with `guildDelete` event:

```ts title="src/events/guildDelete.ts" showLineNumbers
import { createEvent } from "seyfert";

export default createEvent({
  data: { name: "guildDelete" },
  run(unguild, client) {
    client.logger.info(`I have been kicked out of: ${unguild.id}`);
  }
})
```

And that's all, you can create as many events as you want. For further information you can check the list of all gateway events [here](SOONTM).