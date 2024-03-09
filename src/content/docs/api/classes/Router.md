---
editUrl: false
next: false
prev: false
title: "Router"
---

## Constructors

### new Router(rest)

```ts
new Router(rest: REST): Router
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rest` | [`REST`](/api/classes/rest/) |

#### Returns

[`Router`](/api/classes/router/)

#### Source

[seyfert/src/api/Router.ts:19](https://github.com/potoland/potocuit/blob/e332d7a/src/api/Router.ts#L19)

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

[seyfert/src/api/Router.ts:21](https://github.com/potoland/potocuit/blob/e332d7a/src/api/Router.ts#L21)

***

### noop()

```ts
noop(): void
```

#### Returns

`void`

#### Source

[seyfert/src/api/Router.ts:15](https://github.com/potoland/potocuit/blob/e332d7a/src/api/Router.ts#L15)
