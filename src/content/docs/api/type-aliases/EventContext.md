---
editUrl: false
next: false
prev: false
title: "EventContext"
---

```ts
type EventContext<T>: Parameters<CallbackEventHandler[T["data"]["name"]]>;
```

## Type parameters

| Type parameter |
| :------ |
| `T` extends `Object` |

## Source

[seyfert/src/events/event.ts:18](https://github.com/potoland/potocuit/blob/fe122a1/src/events/event.ts#L18)
