---
editUrl: false
next: false
prev: false
title: "Router"
---

## Constructors

### new Router(rest)

```ts
new Router(rest: ApiHandler): Router
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rest` | [`ApiHandler`](/api/classes/apihandler/) |

#### Returns

[`Router`](/api/classes/router/)

#### Source

[seyfert/src/api/Router.ts:20](https://github.com/potoland/potocuit/blob/fe122a1/src/api/Router.ts#L20)

## Methods

### createProxy()

```ts
createProxy(route: string[]): APIRoutes
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `route` | `string`[] |

#### Returns

[`APIRoutes`](/api/type-aliases/apiroutes/)

#### Source

[seyfert/src/api/Router.ts:22](https://github.com/potoland/potocuit/blob/fe122a1/src/api/Router.ts#L22)

***

### noop()

```ts
noop(): void
```

#### Returns

`void`

#### Source

[seyfert/src/api/Router.ts:16](https://github.com/potoland/potocuit/blob/fe122a1/src/api/Router.ts#L16)
