[seyfert](../globals.md) / EventContext

# Type alias: EventContext\<T\>

```ts
type EventContext<T>: Parameters<CallbackEventHandler[T["data"]["name"]]>;
```

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* \{
  `data`: \{
     `name`: [`ClientNameEvents`](ClientNameEvents.md);
    \};
 \} |

## Source

[seyfert/src/events/event.ts:18](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/events/event.ts#L18)
