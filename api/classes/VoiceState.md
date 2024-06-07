[seyfert](../globals.md) / VoiceState

# Class: VoiceState

## Extends

- `Base`.`ObjectToLower`\<`Omit`\<`VoiceStateResource`, `"member"`\>\>

## Constructors

### new VoiceState()

```ts
new VoiceState(client: UsingClient, data: GatewayVoiceState): VoiceState
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `data` | `GatewayVoiceState` |

#### Returns

[`VoiceState`](VoiceState.md)

#### Inherited from

`Base.constructor`

#### Source

[seyfert/src/structures/VoiceState.ts:11](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/VoiceState.ts#L11)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `channelId` | `public` | `null` \| `string` | `ObjectToLower.channelId` |
| `client` | `readonly` | [`UsingClient`](../interfaces/UsingClient.md) | `Base.client` |
| `deaf` | `public` | `boolean` | `ObjectToLower.deaf` |
| `guildId` | `public` | `string` | `ObjectToLower.guildId` |
| `mute` | `public` | `boolean` | `ObjectToLower.mute` |
| `requestToSpeakTimestamp` | `public` | `null` \| `string` | `ObjectToLower.requestToSpeakTimestamp` |
| `selfDeaf` | `public` | `boolean` | `ObjectToLower.selfDeaf` |
| `selfMute` | `public` | `boolean` | `ObjectToLower.selfMute` |
| `selfStream` | `public` | `undefined` \| `boolean` | `ObjectToLower.selfStream` |
| `selfVideo` | `public` | `boolean` | `ObjectToLower.selfVideo` |
| `sessionId` | `public` | `string` | `ObjectToLower.sessionId` |
| `suppress` | `public` | `boolean` | `ObjectToLower.suppress` |
| `userId` | `public` | `string` | `ObjectToLower.userId` |
| `withMember?` | `protected` | [`GuildMember`](GuildMember.md) | - |

## Methods

### channel()

```ts
channel(force?: boolean): Promise<undefined | BaseChannel<ChannelType> | DMChannel | CategoryChannel>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `force`? | `boolean` |

#### Returns

`Promise`\<`undefined` \| [`BaseChannel`](BaseChannel.md)\<`ChannelType`\> \| [`DMChannel`](DMChannel.md) \| [`CategoryChannel`](CategoryChannel.md)\>

#### Source

[seyfert/src/structures/VoiceState.ts:30](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/VoiceState.ts#L30)

***

### disconnect()

```ts
disconnect(reason?: string): Promise<GuildMember>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reason`? | `string` |

#### Returns

`Promise`\<[`GuildMember`](GuildMember.md)\>

#### Source

[seyfert/src/structures/VoiceState.ts:49](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/VoiceState.ts#L49)

***

### isMuted()

```ts
isMuted(): boolean
```

#### Returns

`boolean`

#### Source

[seyfert/src/structures/VoiceState.ts:18](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/VoiceState.ts#L18)

***

### member()

```ts
member(force?: boolean): Promise<GuildMember>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `force`? | `boolean` |

#### Returns

`Promise`\<[`GuildMember`](GuildMember.md)\>

#### Source

[seyfert/src/structures/VoiceState.ts:22](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/VoiceState.ts#L22)

***

### setChannel()

```ts
setChannel(channel_id: null | string, reason?: string): Promise<GuildMember>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channel_id` | `null` \| `string` |
| `reason`? | `string` |

#### Returns

`Promise`\<[`GuildMember`](GuildMember.md)\>

#### Source

[seyfert/src/structures/VoiceState.ts:53](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/VoiceState.ts#L53)

***

### setDeaf()

```ts
setDeaf(deaf: boolean, reason?: string): Promise<GuildMember>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `deaf` | `boolean` | `!this.deaf` |
| `reason`? | `string` | `undefined` |

#### Returns

`Promise`\<[`GuildMember`](GuildMember.md)\>

#### Source

[seyfert/src/structures/VoiceState.ts:42](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/VoiceState.ts#L42)

***

### setMute()

```ts
setMute(mute: boolean, reason?: string): Promise<GuildMember>
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `mute` | `boolean` | `!this.mute` |
| `reason`? | `string` | `undefined` |

#### Returns

`Promise`\<[`GuildMember`](GuildMember.md)\>

#### Source

[seyfert/src/structures/VoiceState.ts:35](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/VoiceState.ts#L35)

***

### user()

```ts
user(force?: boolean): Promise<User>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `force`? | `boolean` |

#### Returns

`Promise`\<[`User`](User.md)\>

#### Source

[seyfert/src/structures/VoiceState.ts:26](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/structures/VoiceState.ts#L26)
