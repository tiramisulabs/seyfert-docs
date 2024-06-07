[seyfert](../globals.md) / VoiceChannelMethods

# Class: VoiceChannelMethods

## Extends

- [`BaseChannel`](BaseChannel.md)\<`ChannelType`\>.`DiscordBase`

## Extended by

- [`VoiceChannel`](VoiceChannel.md)
- [`StageChannel`](StageChannel.md)

## Constructors

### new VoiceChannelMethods()

```ts
new VoiceChannelMethods(client: UsingClient, data: {
  id: string;
 }): VoiceChannelMethods
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) | - |
| `data` | `object` | Unique ID of the object |
| `data.id` | `string` | - |

#### Returns

[`VoiceChannelMethods`](VoiceChannelMethods.md)

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`constructor`](BaseChannel.md#constructors)

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:7](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/DiscordBase.ts#L7)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | [`BaseChannel`](BaseChannel.md).`client` |
| `guildId?` | `public` | `string` | - |
| `id` | `public` | `string` | [`BaseChannel`](BaseChannel.md).`id` |
| `type` | `public` | `ChannelType` | [`BaseChannel`](BaseChannel.md).`type` |

## Accessors

### createdAt

```ts
get createdAt(): Date
```

createdAt gets the creation Date instace of the current object.

#### Returns

`Date`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:27](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/DiscordBase.ts#L27)

***

### createdTimestamp

```ts
get createdTimestamp(): number
```

Create a timestamp for the current object.

#### Returns

`number`

#### Source

[seyfert/src/structures/extra/DiscordBase.ts:20](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/extra/DiscordBase.ts#L20)

***

### url

```ts
get url(): string
```

The URL to the channel

#### Returns

`string`

#### Source

[seyfert/src/structures/channels.ts:60](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L60)

## Methods

### delete()

```ts
delete(reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`delete`](BaseChannel.md#delete)

#### Source

[seyfert/src/structures/channels.ts:68](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L68)

***

### edit()

```ts
edit(body: RESTPatchAPIChannelJSONBody, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `body` | `RESTPatchAPIChannelJSONBody` |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`edit`](BaseChannel.md#edit)

#### Source

[seyfert/src/structures/channels.ts:72](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L72)

***

### fetch()

```ts
fetch(force: boolean): Promise<AllChannels>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`fetch`](BaseChannel.md#fetch)

#### Source

[seyfert/src/structures/channels.ts:64](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L64)

***

### is()

```ts
is<T>(channelTypes: T): this is IChannelTypes[T[number]]
```

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* keyof `IChannelTypes`[] |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channelTypes` | `T` |

#### Returns

`this is IChannelTypes[T[number]]`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`is`](BaseChannel.md#is)

#### Source

[seyfert/src/structures/channels.ts:135](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L135)

***

### isCategory()

```ts
isCategory(): this is CategoryChannel
```

#### Returns

`this is CategoryChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isCategory`](BaseChannel.md#iscategory)

#### Source

[seyfert/src/structures/channels.ts:115](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L115)

***

### isDM()

```ts
isDM(): this is DMChannel
```

#### Returns

`this is DMChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isDM`](BaseChannel.md#isdm)

#### Source

[seyfert/src/structures/channels.ts:91](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L91)

***

### isDirectory()

```ts
isDirectory(): this is DirectoryChannel
```

#### Returns

`this is DirectoryChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isDirectory`](BaseChannel.md#isdirectory)

#### Source

[seyfert/src/structures/channels.ts:103](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L103)

***

### isForum()

```ts
isForum(): this is ForumChannel
```

#### Returns

`this is ForumChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isForum`](BaseChannel.md#isforum)

#### Source

[seyfert/src/structures/channels.ts:95](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L95)

***

### isGuildTextable()

```ts
isGuildTextable(): this is AllGuildTextableChannels
```

#### Returns

`this is AllGuildTextableChannels`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isGuildTextable`](BaseChannel.md#isguildtextable)

#### Source

[seyfert/src/structures/channels.ts:127](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L127)

***

### isMedia()

```ts
isMedia(): this is MediaChannel
```

#### Returns

`this is MediaChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isMedia`](BaseChannel.md#ismedia)

#### Source

[seyfert/src/structures/channels.ts:87](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L87)

***

### isNews()

```ts
isNews(): this is NewsChannel
```

#### Returns

`this is NewsChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isNews`](BaseChannel.md#isnews)

#### Source

[seyfert/src/structures/channels.ts:119](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L119)

***

### isStage()

```ts
isStage(): this is StageChannel
```

#### Returns

`this is StageChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isStage`](BaseChannel.md#isstage)

#### Source

[seyfert/src/structures/channels.ts:83](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L83)

***

### isTextGuild()

```ts
isTextGuild(): this is TextGuildChannel
```

#### Returns

`this is TextGuildChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isTextGuild`](BaseChannel.md#istextguild)

#### Source

[seyfert/src/structures/channels.ts:111](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L111)

***

### isTextable()

```ts
isTextable(): this is AllTextableChannels
```

#### Returns

`this is AllTextableChannels`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isTextable`](BaseChannel.md#istextable)

#### Source

[seyfert/src/structures/channels.ts:123](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L123)

***

### isThread()

```ts
isThread(): this is ThreadChannel
```

#### Returns

`this is ThreadChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isThread`](BaseChannel.md#isthread)

#### Source

[seyfert/src/structures/channels.ts:99](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L99)

***

### isThreadOnly()

```ts
isThreadOnly(): this is MediaChannel | ForumChannel
```

#### Returns

this is MediaChannel \| ForumChannel

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isThreadOnly`](BaseChannel.md#isthreadonly)

#### Source

[seyfert/src/structures/channels.ts:131](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L131)

***

### isVoice()

```ts
isVoice(): this is VoiceChannel
```

#### Returns

`this is VoiceChannel`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`isVoice`](BaseChannel.md#isvoice)

#### Source

[seyfert/src/structures/channels.ts:107](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L107)

***

### setBitrate()

```ts
setBitrate(bitrate: null | number, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `bitrate` | `null` \| `number` |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Source

[seyfert/src/structures/channels.ts:354](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L354)

***

### setRTC()

```ts
setRTC(rtc_region: null | string, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rtc_region` | `null` \| `string` |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Source

[seyfert/src/structures/channels.ts:362](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L362)

***

### setUserLimit()

```ts
setUserLimit(user_limit: null | number, reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `user_limit` | `null` \| `number` |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Source

[seyfert/src/structures/channels.ts:358](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L358)

***

### setVideoQuality()

```ts
setVideoQuality(quality: "Auto" | "Full", reason?: string): Promise<AllChannels>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `quality` | `"Auto"` \| `"Full"` |
| `reason`? | `string` |

#### Returns

`Promise`\<[`AllChannels`](../type-aliases/AllChannels.md)\>

#### Source

[seyfert/src/structures/channels.ts:366](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L366)

***

### setVoiceState()

```ts
setVoiceState(status: null | string): Promise<never>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `status` | `null` \| `string` | `null` |

#### Returns

`Promise`\<`never`\>

#### Source

[seyfert/src/structures/channels.ts:370](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L370)

***

### states()

```ts
states(): Promise<VoiceState[]>
```

#### Returns

`Promise`\<[`VoiceState`](VoiceState.md)[]\>

#### Source

[seyfert/src/structures/channels.ts:374](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L374)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Inherited from

[`BaseChannel`](BaseChannel.md).[`toString`](BaseChannel.md#tostring)

#### Source

[seyfert/src/structures/channels.ts:79](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/channels.ts#L79)
