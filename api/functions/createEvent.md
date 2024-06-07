[seyfert](../globals.md) / createEvent

# Function: createEvent()

```ts
function createEvent<E>(data: {
  data: {
     name: E;
     once: boolean;
    };
  run: (...args: EventContext<{
     data: {
        name: E;
       };
    }>) => any;
 }): {
  data: {
     name: E;
     once: boolean;
    };
  run: (...args: EventContext<{
     data: {
        name: E;
       };
    }>) => any;
}
```

Creates an event with the specified data and run function.

## Type parameters

| Type parameter |
| :------ |
| `E` *extends* [`ClientNameEvents`](../type-aliases/ClientNameEvents.md) |

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `object` | The event data. |
| `data.data` | `object` | - |
| `data.data.name` | `E` | - |
| `data.data.once`? | `boolean` | - |
| `data.run` | (...`args`: [`EventContext`](../type-aliases/EventContext.md)\<\{ `data`: \{ `name`: `E`; \}; \}\>) => `any` | - |

## Returns

```ts
{
  data: {
     name: E;
     once: boolean;
    };
  run: (...args: EventContext<{
     data: {
        name: E;
       };
    }>) => any;
}
```

The created event.

| Member | Type |
| :------ | :------ |
| `data` | \{
  `name`: `E`;
  `once`: `boolean`;
 \} |
| `data.name` | `E` |
| `data.once` | `boolean` |
| `run` | (...`args`: [`EventContext`](../type-aliases/EventContext.md)\<\{
  `data`: \{
     `name`: `E`;
    \};
 \}\>) => `any` |

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

[seyfert/src/index.ts:49](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/index.ts#L49)
