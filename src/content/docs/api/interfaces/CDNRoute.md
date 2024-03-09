---
editUrl: false
next: false
prev: false
title: "CDNRoute"
---

## Properties

| Property | Type |
| :------ | :------ |
| `embed` | `Object` |
| `embed.avatars` | `Object` |
| `embed.avatars.get` | `string` |

## Methods

### app-assets()

#### app-assets(appId)

```ts
app-assets(appId: string): Object
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `appId` | `string` |

##### Returns

`Object`

| Member | Type |
| :------ | :------ |
| `achievements` | `Object` |
| `get` | `string` |

##### Source

[seyfert/src/api/Routes/cdn.ts:38](https://github.com/potoland/potocuit/blob/fe122a1/src/api/Routes/cdn.ts#L38)

#### app-assets(id)

```ts
app-assets(id: "710982414301790216"): Object
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `"710982414301790216"` |

##### Returns

`Object`

| Member | Type |
| :------ | :------ |
| `store` | `Object` |

##### Source

[seyfert/src/api/Routes/cdn.ts:61](https://github.com/potoland/potocuit/blob/fe122a1/src/api/Routes/cdn.ts#L61)

***

### appIcons()

```ts
appIcons(appId: string): Object
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `appId` | `string` |

#### Returns

`Object`

| Member | Type |
| :------ | :------ |
| `get` | `string` |

#### Source

[seyfert/src/api/Routes/cdn.ts:35](https://github.com/potoland/potocuit/blob/fe122a1/src/api/Routes/cdn.ts#L35)

***

### avatars()

```ts
avatars(id: string): Object
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Object`

| Member | Type |
| :------ | :------ |
| `get` | `string` |

#### Source

[seyfert/src/api/Routes/cdn.ts:7](https://github.com/potoland/potocuit/blob/fe122a1/src/api/Routes/cdn.ts#L7)

***

### banners()

```ts
banners(id: string): Object
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Object`

| Member | Type |
| :------ | :------ |
| `get` | `string` |

#### Source

[seyfert/src/api/Routes/cdn.ts:19](https://github.com/potoland/potocuit/blob/fe122a1/src/api/Routes/cdn.ts#L19)

***

### discovery-splashes()

```ts
discovery-splashes(guidId: string): Object
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `guidId` | `string` |

#### Returns

`Object`

| Member | Type |
| :------ | :------ |
| `get` | `string` |

#### Source

[seyfert/src/api/Routes/cdn.ts:16](https://github.com/potoland/potocuit/blob/fe122a1/src/api/Routes/cdn.ts#L16)

***

### emojis()

```ts
emojis(id: string): Object
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Object`

| Member | Type |
| :------ | :------ |
| `get` | `string` |

#### Source

[seyfert/src/api/Routes/cdn.ts:32](https://github.com/potoland/potocuit/blob/fe122a1/src/api/Routes/cdn.ts#L32)

***

### guild-events()

```ts
guild-events(id: string): Object
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Object`

| Member | Type |
| :------ | :------ |
| `get` | `string` |

#### Source

[seyfert/src/api/Routes/cdn.ts:55](https://github.com/potoland/potocuit/blob/fe122a1/src/api/Routes/cdn.ts#L55)

***

### guilds()

```ts
guilds(id: string): Object
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Object`

| Member | Type |
| :------ | :------ |
| `users` | `Object` |

#### Source

[seyfert/src/api/Routes/cdn.ts:22](https://github.com/potoland/potocuit/blob/fe122a1/src/api/Routes/cdn.ts#L22)

***

### icons()

```ts
icons(guildId: string): Object
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `guildId` | `string` |

#### Returns

`Object`

| Member | Type |
| :------ | :------ |
| `get` | `string` |

#### Source

[seyfert/src/api/Routes/cdn.ts:10](https://github.com/potoland/potocuit/blob/fe122a1/src/api/Routes/cdn.ts#L10)

***

### role-icons()

```ts
role-icons(roleId: string): Object
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `roleId` | `string` |

#### Returns

`Object`

| Member | Type |
| :------ | :------ |
| `get` | `string` |

#### Source

[seyfert/src/api/Routes/cdn.ts:52](https://github.com/potoland/potocuit/blob/fe122a1/src/api/Routes/cdn.ts#L52)

***

### splashes()

```ts
splashes(guildId: string): Object
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `guildId` | `string` |

#### Returns

`Object`

| Member | Type |
| :------ | :------ |
| `get` | `string` |

#### Source

[seyfert/src/api/Routes/cdn.ts:13](https://github.com/potoland/potocuit/blob/fe122a1/src/api/Routes/cdn.ts#L13)

***

### stickers()

```ts
stickers(id: string): Object
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Object`

| Member | Type |
| :------ | :------ |
| `get` | `string` |

#### Source

[seyfert/src/api/Routes/cdn.ts:49](https://github.com/potoland/potocuit/blob/fe122a1/src/api/Routes/cdn.ts#L49)

***

### team-icons()

```ts
team-icons(teamId: string): Object
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `teamId` | `string` |

#### Returns

`Object`

| Member | Type |
| :------ | :------ |
| `get` | `string` |

#### Source

[seyfert/src/api/Routes/cdn.ts:46](https://github.com/potoland/potocuit/blob/fe122a1/src/api/Routes/cdn.ts#L46)
