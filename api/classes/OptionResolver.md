[seyfert](../globals.md) / OptionResolver

# Class: OptionResolver

## Constructors

### new OptionResolver()

```ts
new OptionResolver(
   client: UsingClient, 
   options: APIApplicationCommandInteractionDataOption[], 
   parent?: Command, 
   guildId?: string, 
   resolved?: ContextOptionsResolved): OptionResolver
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`UsingClient`](../interfaces/UsingClient.md) |
| `options` | `APIApplicationCommandInteractionDataOption`[] |
| `parent`? | [`Command`](Command.md) |
| `guildId`? | `string` |
| `resolved`? | [`ContextOptionsResolved`](../type-aliases/ContextOptionsResolved.md) |

#### Returns

[`OptionResolver`](OptionResolver.md)

#### Source

[seyfert/src/commands/optionresolver.ts:32](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/optionresolver.ts#L32)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `client` | `private` | [`UsingClient`](../interfaces/UsingClient.md) | `undefined` |
| `group` | `private` | `null` \| `string` | `null` |
| `guildId?` | `public` | `string` | `undefined` |
| `hoistedOptions` | `public` | [`OptionResolved`](../interfaces/OptionResolved.md)[] | `undefined` |
| `options` | `readonly` | [`OptionResolved`](../interfaces/OptionResolved.md)[] | `undefined` |
| `parent?` | `public` | [`Command`](Command.md) | `undefined` |
| `resolved?` | `public` | [`ContextOptionsResolved`](../type-aliases/ContextOptionsResolved.md) | `undefined` |
| `subCommand` | `private` | `null` \| `string` | `null` |

## Accessors

### fullCommandName

```ts
get fullCommandName(): string
```

#### Returns

`string`

#### Source

[seyfert/src/commands/optionresolver.ts:52](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/optionresolver.ts#L52)

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

`undefined` \| [`OptionResolved`](../interfaces/OptionResolved.md)

#### Source

[seyfert/src/commands/optionresolver.ts:89](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/optionresolver.ts#L89)

***

### getAutocomplete()

```ts
getAutocomplete(): undefined | CommandAutocompleteOption
```

#### Returns

`undefined` \| [`CommandAutocompleteOption`](../type-aliases/CommandAutocompleteOption.md)

#### Source

[seyfert/src/commands/optionresolver.ts:71](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/optionresolver.ts#L71)

***

### getAutocompleteValue()

```ts
getAutocompleteValue(): undefined | string
```

#### Returns

`undefined` \| `string`

#### Source

[seyfert/src/commands/optionresolver.ts:67](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/optionresolver.ts#L67)

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

[`AllChannels`](../type-aliases/AllChannels.md)

#### Source

[seyfert/src/commands/optionresolver.ts:137](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/optionresolver.ts#L137)

***

### getCommand()

```ts
getCommand(): undefined | Command | SubCommand
```

#### Returns

`undefined` \| [`Command`](Command.md) \| [`SubCommand`](SubCommand.md)

#### Source

[seyfert/src/commands/optionresolver.ts:58](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/optionresolver.ts#L58)

***

### getGroup()

```ts
getGroup(): null | string
```

#### Returns

`null` \| `string`

#### Source

[seyfert/src/commands/optionresolver.ts:85](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/optionresolver.ts#L85)

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

`undefined` \| [`OptionResolved`](../interfaces/OptionResolved.md)

#### Source

[seyfert/src/commands/optionresolver.ts:93](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/optionresolver.ts#L93)

***

### getParent()

```ts
getParent(): undefined | string
```

#### Returns

`undefined` \| `string`

#### Source

[seyfert/src/commands/optionresolver.ts:77](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/optionresolver.ts#L77)

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

[seyfert/src/commands/optionresolver.ts:143](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/optionresolver.ts#L143)

***

### getSubCommand()

```ts
getSubCommand(): null | string
```

#### Returns

`null` \| `string`

#### Source

[seyfert/src/commands/optionresolver.ts:81](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/optionresolver.ts#L81)

***

### getTypedOption()

```ts
private getTypedOption(name: string, allow: ApplicationCommandOptionType[]): OptionResolved
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `allow` | `ApplicationCommandOptionType`[] |

#### Returns

[`OptionResolved`](../interfaces/OptionResolved.md)

#### Source

[seyfert/src/commands/optionresolver.ts:126](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/optionresolver.ts#L126)

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
  \| [`Attachment`](Attachment.md)
  \| [`GuildRole`](GuildRole.md)
  \| [`GuildMember`](GuildMember.md)
  \| [`User`](User.md)
  \| [`BaseChannel`](BaseChannel.md)\<`ChannelType`\>
  \| [`DMChannel`](DMChannel.md)
  \| [`CategoryChannel`](CategoryChannel.md)
  \| [`InteractionGuildMember`](InteractionGuildMember.md)

#### Source

[seyfert/src/commands/optionresolver.ts:97](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/optionresolver.ts#L97)

***

### transformOption()

```ts
transformOption(option: APIApplicationCommandInteractionDataOption, resolved?: ContextOptionsResolved): OptionResolved
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `option` | `APIApplicationCommandInteractionDataOption` |
| `resolved`? | [`ContextOptionsResolved`](../type-aliases/ContextOptionsResolved.md) |

#### Returns

[`OptionResolved`](../interfaces/OptionResolved.md)

#### Source

[seyfert/src/commands/optionresolver.ts:149](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/optionresolver.ts#L149)
