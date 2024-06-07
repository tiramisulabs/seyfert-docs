[seyfert](../globals.md) / CallbackEventHandler

# Type alias: CallbackEventHandler

```ts
type CallbackEventHandler: { [K in keyof ClientEvents]: Function } & { [K in keyof CustomEvents]: Function };
```

## Source

[seyfert/src/events/event.ts:13](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/events/event.ts#L13)
