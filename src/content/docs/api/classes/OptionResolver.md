---
editUrl: false
next: false
prev: false
title: "OptionResolver"
---

## Constructors

### new OptionResolver(client, options, parent, guildId, resolved)

```ts
new OptionResolver(
   client: UsingClient, 
   options: APIApplicationCommandInteractionDataOption[], 
   parent?: Command, 
   guildId?: string, 
   resolved?: APIInteractionDataResolved): OptionResolver
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](/api/interfaces/usingclient/) |
| `options` | `APIApplicationCommandInteractionDataOption`[] |
| `parent`? | [`Command`](/api/classes/command/) |
| `guildId`? | `string` |
| `resolved`? | `APIInteractionDataResolved` |

#### Returns

[`OptionResolver`](/api/classes/optionresolver/)

#### Source

[seyfert/src/commands/optionresolver.ts:15](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/optionresolver.ts#L15)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `guildId?` | `public` | `string` |
| `hoistedOptions` | `public` | [`OptionResolved`](/api/interfaces/optionresolved/)[] |
| `options` | `readonly` | [`OptionResolved`](/api/interfaces/optionresolved/)[] |
| `parent?` | `public` | [`Command`](/api/classes/command/) |
| `resolved?` | `public` | `APIInteractionDataResolved` |

## Accessors

### fullCommandName

```ts
get fullCommandName(): string
```

#### Returns

`string`

#### Source

[seyfert/src/commands/optionresolver.ts:35](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/optionresolver.ts#L35)

## Methods

### get()

```ts
get(name: string): undefined | OptionResolved
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`OptionResolved`](/api/interfaces/optionresolved/)

#### Source

[seyfert/src/commands/optionresolver.ts:72](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/optionresolver.ts#L72)

***

### getAutocomplete()

```ts
getAutocomplete(): undefined | CommandAutocompleteOption
```

#### Returns

`undefined` \| [`CommandAutocompleteOption`](/api/type-aliases/commandautocompleteoption/)

#### Source

[seyfert/src/commands/optionresolver.ts:54](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/optionresolver.ts#L54)

***

### getAutocompleteValue()

```ts
getAutocompleteValue(): undefined | string
```

#### Returns

`undefined` \| `string`

#### Source

[seyfert/src/commands/optionresolver.ts:50](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/optionresolver.ts#L50)

***

### getChannel()

```ts
getChannel(name: string, required?: true): AllChannels
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `required`? | `true` |

#### Returns

[`AllChannels`](/api/type-aliases/allchannels/)

#### Source

[seyfert/src/commands/optionresolver.ts:120](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/optionresolver.ts#L120)

***

### getCommand()

```ts
getCommand(): undefined | Command | SubCommand
```

#### Returns

`undefined` \| [`Command`](/api/classes/command/) \| [`SubCommand`](/api/classes/subcommand/)

#### Source

[seyfert/src/commands/optionresolver.ts:41](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/optionresolver.ts#L41)

***

### getGroup()

```ts
getGroup(): null | string
```

#### Returns

`null` \| `string`

#### Source

[seyfert/src/commands/optionresolver.ts:68](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/optionresolver.ts#L68)

***

### getHoisted()

```ts
getHoisted(name: string): undefined | OptionResolved
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`OptionResolved`](/api/interfaces/optionresolved/)

#### Source

[seyfert/src/commands/optionresolver.ts:76](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/optionresolver.ts#L76)

***

### getParent()

```ts
getParent(): undefined | string
```

#### Returns

`undefined` \| `string`

#### Source

[seyfert/src/commands/optionresolver.ts:60](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/optionresolver.ts#L60)

***

### getString()

```ts
getString(name: string, required?: true): string
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `required`? | `true` |

#### Returns

`string`

#### Source

[seyfert/src/commands/optionresolver.ts:126](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/optionresolver.ts#L126)

***

### getSubCommand()

```ts
getSubCommand(): null | string
```

#### Returns

`null` \| `string`

#### Source

[seyfert/src/commands/optionresolver.ts:64](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/optionresolver.ts#L64)

***

### getValue()

```ts
getValue(name: string): 
  | undefined
  | string
  | number
  | boolean
  | Attachment
  | GuildRole
  | GuildMember
  | User
  | BaseChannel<ChannelType>
  | DMChannel
  | CategoryChannel
  | InteractionGuildMember
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

  \| `undefined`
  \| `string`
  \| `number`
  \| `boolean`
  \| [`Attachment`](/api/classes/attachment/)
  \| [`GuildRole`](/api/classes/guildrole/)
  \| [`GuildMember`](/api/classes/guildmember/)
  \| [`User`](/api/classes/user/)
  \| [`BaseChannel`](/api/classes/basechannel/)\<`ChannelType`\>
  \| [`DMChannel`](/api/classes/dmchannel/)
  \| [`CategoryChannel`](/api/classes/categorychannel/)
  \| [`InteractionGuildMember`](/api/classes/interactionguildmember/)

#### Source

[seyfert/src/commands/optionresolver.ts:80](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/optionresolver.ts#L80)

***

### transformOption()

```ts
transformOption(option: APIApplicationCommandInteractionDataOption, resolved?: APIInteractionDataResolved): OptionResolved
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `option` | `APIApplicationCommandInteractionDataOption` |
| `resolved`? | `APIInteractionDataResolved` |

#### Returns

[`OptionResolved`](/api/interfaces/optionresolved/)

#### Source

[seyfert/src/commands/optionresolver.ts:132](https://github.com/potoland/potocuit/blob/fe122a1/src/commands/optionresolver.ts#L132)
