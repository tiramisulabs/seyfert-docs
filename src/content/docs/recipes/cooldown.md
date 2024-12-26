---
title: Cooldown
---

Although you can implement your own cooldown logic, you might wanna try `@slipher/cooldown` first.

```bash copy title="Installing..."
npm add @slipher/cooldown
```

First you need to add `cooldown` property to `client` as shown below

```ts twoslash
import { Client, type UsingClient } from "seyfert";
import { CooldownManager } from "@slipher/cooldown";

const client = new Client() as UsingClient & Client;

client.start().then(() => {
	client.cooldown = new CooldownManager(client);
})

declare module "seyfert" {
	interface UsingClient {
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

```ts twoslash
import { Declare, Command, type CommandContext } from "seyfert";
import { CooldownType, Cooldown } from "@slipher/cooldown";

@Declare({
	name: 'cool',
	description: 'Reference command'
})
@Cooldown({
	type: CooldownType.User,
	interval: 1000 * 60,
	uses: {
		default: 2
	},
})
export default class Cool extends Command {
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

And then we need to create a [middleware](/commands/middlewares) for handle when the user is in cooldown:

```ts twoslash
import { CooldownManager } from "@slipher/cooldown";

declare module "seyfert" {
	interface UsingClient {
		cooldown: CooldownManager;
	}
}
// ---cut---
import { createMiddleware, Formatter } from 'seyfert';
import { TimestampStyle } from 'seyfert/lib/common';

export default createMiddleware<void>(async ({ context, next, stop }) => {
	const inCooldown = context.client.cooldown.context(context);

	typeof inCooldown === 'number'
		? stop(
				`You're in cooldown, try again ${Formatter.timestamp(new Date(Date.now() + inCooldown), TimestampStyle.RelativeTime)}`,
			)
		: next();
});
```