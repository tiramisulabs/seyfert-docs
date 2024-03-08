---
editUrl: false
next: false
prev: false
title: "createEvent"
---

```ts
createEvent<E>(data:     Object): Object
```

Creates an event with the specified data and run function.

## Type parameters

| Type parameter |
| :------ |
| `E` extends [`ClientNameEvents`](/api/type-aliases/clientnameevents/) |

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `Object` | The event data. |
| `data.data` | `Object` | - |
| `data.data.name` | `E` | - |
| `data.data.once`? | `boolean` | - |
| `data.run` | (...`args`: [`EventContext`](/api/type-aliases/eventcontext/)\<`Object`\>) => `any` | - |

## Returns

`Object`

The created event.

| Member | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.name` | `E` |
| `data.once` | `boolean` |
| `run` | (...`args`: [`EventContext`](/api/type-aliases/eventcontext/)\<`Object`\>) => `any` |

## Example

```ts
const myEvent = createEvent({
  data: { name: 'ready', once: true },
  run: (user, client, shard) => {
    client.logger.info(`Start ${user.username} on shard #${shard}`);
  }
});
```

## Source

[seyfert/src/index.ts:43](https://github.com/potoland/potocuit/blob/c4fb0c1/src/index.ts#L43)
