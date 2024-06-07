[seyfert](../globals.md) / CDNRoute

# Interface: CDNRoute

## Properties

| Property | Type |
| :------ | :------ |
| `embed` | \{ `avatars`: \{ `get`: `string`; \}; \} |
| `embed.avatars` | \{ `get`: `string`; \} |
| `embed.avatars.get` | `string` |

## Methods

### app-assets()

#### app-assets(appId)

```ts
app-assets(appId: string): {
  achievements: {
     icons: {
        get: string;
       };
    };
  get: string;
}
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `appId` | `string` |

##### Returns

```ts
{
  achievements: {
     icons: {
        get: string;
       };
    };
  get: string;
}
```

| Member | Type |
| :------ | :------ |
| `achievements` | \{
  `icons`: \{
     `get`: `string`;
    \};
 \} |
| `get` | `string` |

##### Source

[seyfert/src/api/Routes/cdn.ts:50](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/Routes/cdn.ts#L50)

#### app-assets(id)

```ts
app-assets(id: "710982414301790216"): {
  store: {
     get: string;
    };
}
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `"710982414301790216"` |

##### Returns

```ts
{
  store: {
     get: string;
    };
}
```

| Member | Type |
| :------ | :------ |
| `store` | \{
  `get`: `string`;
 \} |

##### Source

[seyfert/src/api/Routes/cdn.ts:73](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/Routes/cdn.ts#L73)

***

### appIcons()

```ts
appIcons(appId: string): {
  get: string;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `appId` | `string` |

#### Returns

```ts
{
  get: string;
}
```

| Member | Type |
| :------ | :------ |
| `get` | `string` |

#### Source

[seyfert/src/api/Routes/cdn.ts:47](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/Routes/cdn.ts#L47)

***

### avatar-decorations()

```ts
avatar-decorations(userId: string): {
  get: string;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

```ts
{
  get: string;
}
```

| Member | Type |
| :------ | :------ |
| `get` | `string` |

#### Source

[seyfert/src/api/Routes/cdn.ts:13](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/Routes/cdn.ts#L13)

***

### avatars()

```ts
avatars(id: string): {
  get: string;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

```ts
{
  get: string;
}
```

| Member | Type |
| :------ | :------ |
| `get` | `string` |

#### Source

[seyfert/src/api/Routes/cdn.ts:10](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/Routes/cdn.ts#L10)

***

### banners()

```ts
banners(id: string): {
  get: string;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

```ts
{
  get: string;
}
```

| Member | Type |
| :------ | :------ |
| `get` | `string` |

#### Source

[seyfert/src/api/Routes/cdn.ts:28](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/Routes/cdn.ts#L28)

***

### channel-icons()

```ts
channel-icons(channelId: string): {
  get: string;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channelId` | `string` |

#### Returns

```ts
{
  get: string;
}
```

| Member | Type |
| :------ | :------ |
| `get` | `string` |

#### Source

[seyfert/src/api/Routes/cdn.ts:16](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/Routes/cdn.ts#L16)

***

### discovery-splashes()

```ts
discovery-splashes(guidId: string): {
  get: string;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `guidId` | `string` |

#### Returns

```ts
{
  get: string;
}
```

| Member | Type |
| :------ | :------ |
| `get` | `string` |

#### Source

[seyfert/src/api/Routes/cdn.ts:25](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/Routes/cdn.ts#L25)

***

### emojis()

```ts
emojis(id: string): {
  get: string;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

```ts
{
  get: string;
}
```

| Member | Type |
| :------ | :------ |
| `get` | `string` |

#### Source

[seyfert/src/api/Routes/cdn.ts:44](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/Routes/cdn.ts#L44)

***

### guild-events()

#### guild-events(eventId)

```ts
guild-events(eventId: string): {
  get: string;
}
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventId` | `string` |

##### Returns

```ts
{
  get: string;
}
```

| Member | Type |
| :------ | :------ |
| `get` | `string` |

##### Source

[seyfert/src/api/Routes/cdn.ts:41](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/Routes/cdn.ts#L41)

#### guild-events(id)

```ts
guild-events(id: string): {
  get: string;
}
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

##### Returns

```ts
{
  get: string;
}
```

| Member | Type |
| :------ | :------ |
| `get` | `string` |

##### Source

[seyfert/src/api/Routes/cdn.ts:67](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/Routes/cdn.ts#L67)

***

### guilds()

```ts
guilds(id: string): {
  users: {
     avatars: {
        get: string;
       };
     banners: {
        get: string;
       };
    };
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

```ts
{
  users: {
     avatars: {
        get: string;
       };
     banners: {
        get: string;
       };
    };
}
```

| Member | Type |
| :------ | :------ |
| `users` | \{
  `avatars`: \{
     `get`: `string`;
    \};
  `banners`: \{
     `get`: `string`;
    \};
 \} |

#### Source

[seyfert/src/api/Routes/cdn.ts:31](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/Routes/cdn.ts#L31)

***

### icons()

```ts
icons(guildId: string): {
  get: string;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `guildId` | `string` |

#### Returns

```ts
{
  get: string;
}
```

| Member | Type |
| :------ | :------ |
| `get` | `string` |

#### Source

[seyfert/src/api/Routes/cdn.ts:19](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/Routes/cdn.ts#L19)

***

### role-icons()

```ts
role-icons(roleId: string): {
  get: string;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `roleId` | `string` |

#### Returns

```ts
{
  get: string;
}
```

| Member | Type |
| :------ | :------ |
| `get` | `string` |

#### Source

[seyfert/src/api/Routes/cdn.ts:64](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/Routes/cdn.ts#L64)

***

### splashes()

```ts
splashes(guildId: string): {
  get: string;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `guildId` | `string` |

#### Returns

```ts
{
  get: string;
}
```

| Member | Type |
| :------ | :------ |
| `get` | `string` |

#### Source

[seyfert/src/api/Routes/cdn.ts:22](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/Routes/cdn.ts#L22)

***

### stickers()

```ts
stickers(id: string): {
  get: string;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

```ts
{
  get: string;
}
```

| Member | Type |
| :------ | :------ |
| `get` | `string` |

#### Source

[seyfert/src/api/Routes/cdn.ts:61](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/Routes/cdn.ts#L61)

***

### team-icons()

```ts
team-icons(teamId: string): {
  get: string;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `teamId` | `string` |

#### Returns

```ts
{
  get: string;
}
```

| Member | Type |
| :------ | :------ |
| `get` | `string` |

#### Source

[seyfert/src/api/Routes/cdn.ts:58](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/api/Routes/cdn.ts#L58)
