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

[seyfert/src/commands/optionresolver.ts:19](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/optionresolver.ts#L19)

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

[seyfert/src/commands/optionresolver.ts:39](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/optionresolver.ts#L39)

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

[seyfert/src/commands/optionresolver.ts:76](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/optionresolver.ts#L76)

***

### getAutocomplete()

```ts
getAutocomplete(): undefined | CommandAutocompleteOption
```

#### Returns

`undefined` \| [`CommandAutocompleteOption`](/api/type-aliases/commandautocompleteoption/)

#### Source

[seyfert/src/commands/optionresolver.ts:58](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/optionresolver.ts#L58)

***

### getAutocompleteValue()

```ts
getAutocompleteValue(): undefined | string
```

#### Returns

`undefined` \| `string`

#### Source

[seyfert/src/commands/optionresolver.ts:54](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/optionresolver.ts#L54)

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

[seyfert/src/commands/optionresolver.ts:124](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/optionresolver.ts#L124)

***

### getCommand()

```ts
getCommand(): undefined | SubCommand | Command
```

#### Returns

`undefined` \| [`SubCommand`](/api/classes/subcommand/) \| [`Command`](/api/classes/command/)

#### Source

[seyfert/src/commands/optionresolver.ts:45](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/optionresolver.ts#L45)

***

### getGroup()

```ts
getGroup(): null | string
```

#### Returns

`null` \| `string`

#### Source

[seyfert/src/commands/optionresolver.ts:72](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/optionresolver.ts#L72)

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

[seyfert/src/commands/optionresolver.ts:80](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/optionresolver.ts#L80)

***

### getParent()

```ts
getParent(): undefined | string
```

#### Returns

`undefined` \| `string`

#### Source

[seyfert/src/commands/optionresolver.ts:64](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/optionresolver.ts#L64)

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

[seyfert/src/commands/optionresolver.ts:130](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/optionresolver.ts#L130)

***

### getSubCommand()

```ts
getSubCommand(): null | string
```

#### Returns

`null` \| `string`

#### Source

[seyfert/src/commands/optionresolver.ts:68](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/optionresolver.ts#L68)

***

### getValue()

```ts
getValue(name: string): 
  | undefined
  | string
  | number
  | boolean
  | APIAttachment
  | InteractionGuildMember
  | User
  | BaseChannel<ChannelType>
  | DMChannel
  | CategoryChannel
  | GuildRole
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
  \| `APIAttachment`
  \| [`InteractionGuildMember`](/api/classes/interactionguildmember/)
  \| [`User`](/api/classes/user/)
  \| [`BaseChannel`](/api/classes/basechannel/)\<`ChannelType`\>
  \| [`DMChannel`](/api/classes/dmchannel/)
  \| [`CategoryChannel`](/api/classes/categorychannel/)
  \| [`GuildRole`](/api/classes/guildrole/)

#### Source

[seyfert/src/commands/optionresolver.ts:84](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/optionresolver.ts#L84)

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

[seyfert/src/commands/optionresolver.ts:136](https://github.com/potoland/potocuit/blob/e332d7a/src/commands/optionresolver.ts#L136)
