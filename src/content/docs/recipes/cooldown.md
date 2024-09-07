---
title: Cooldown
---

Although you can implement your own cooldown logic, you might wanna try `@slipher/cooldown` first.

```bash copy title="Installing..."
npm add @slipher/cooldown
```

First you need to add `cooldown` property to `client` as shown below

```ts
import { Client } from "seyfert";
import { CooldownManager } from "@slipher/cooldown";

const client = new Client();


client.start().then(() => {
	client.cooldown = new CooldownManager(client);
})

declare module "seyfert" {
	interface UsingClient extends ParseClient<Client<true>> {
		cooldown: CooldownManager;
	}
	// this is for prevent a @ts-expect-error above
	interface Client {
		cooldown: CooldownManager;
	}
}

```

And then we can use `@Cooldown()` decorator in our commands, it takes 3 arguments:

| Property   | Type          | Description                           |
| ---------- | ------------- | ------------------------------------- |
| type       | CooldownType  | target type, can be user, guild or channel |
| interval   | number        | time to refresh uses                  |
| uses       | number        | how many uses user can use this command in the given interval |

```ts
import { Declare, Command } from "seyfert";
import { CooldownType, Cooldown } from "@slipher/cooldown";

@Declare({
	name: 'cool',
	description: 'Reference command'
})
@Cooldown({
	type: CooldownType.User,
	interval: 1000 * 60,
	uses: 2,
})
export default class extends Command {
  async run(ctx: CommandContext) {
    await ctx.write({
      content: `A cool command`
    });
  }

	onMiddlewaresError(context: CommandContext, error: string) {
		context.editOrReply({ content: error })
	}
}
```

And then we need to create a [middleware]("/commands/middlewares") for handle when the user is in cooldown:

```ts
import { type CommandContext, createMiddleware, Formatter } from 'seyfert';
import { TimestampStyle } from 'seyfert/lib/common';

export default createMiddleware<void, CommandContext>(async ({ context, next, stop }) => {
	const resolve = resolveTarget(context);
	if (!resolve) return next();

	const inCooldown = await context.client.cooldown.use(context.command.name, resolve);

	typeof inCooldown === 'number'
		? stop(
				`You are in cooldown, try again ${Formatter.timestamp(new Date(Date.now() + inCooldown), TimestampStyle.RelativeTime)}`,
			)
		: next();
});

export function resolveTarget(context: CommandContext) {
	const data = context.command.cooldown;
	if (!data) return;

	switch (data.type) {
		case 'user':
			return context.author.id;
		case 'guild':
			return context.guildId;
		case 'channel':
			return context.channelId;
	}
}
```