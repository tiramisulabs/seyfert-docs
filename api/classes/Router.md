[seyfert](../globals.md) / Router

# Class: Router

## Constructors

### new Router()

```ts
new Router(rest: ApiHandler): Router
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rest` | [`ApiHandler`](ApiHandler.md) |

#### Returns

[`Router`](Router.md)

#### Source

[seyfert/src/api/Router.ts:20](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/Router.ts#L20)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `rest` | `private` | [`ApiHandler`](ApiHandler.md) |

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

[`APIRoutes`](../type-aliases/APIRoutes.md)

#### Source

[seyfert/src/api/Router.ts:22](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/Router.ts#L22)

***

### noop()

```ts
noop(): void
```

#### Returns

`void`

#### Source

[seyfert/src/api/Router.ts:16](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/Router.ts#L16)
