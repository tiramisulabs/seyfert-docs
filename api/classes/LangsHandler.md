[seyfert](../globals.md) / LangsHandler

# Class: LangsHandler

## Extends

- `BaseHandler`

## Constructors

### new LangsHandler()

```ts
new LangsHandler(logger: Logger): LangsHandler
```

Initializes a new instance of the BaseHandler class.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `logger` | [`Logger`](Logger.md) | The logger instance. |

#### Returns

[`LangsHandler`](LangsHandler.md)

#### Inherited from

`BaseHandler.constructor`

#### Source

[seyfert/src/common/it/utils.ts:100](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/it/utils.ts#L100)

## Properties

| Property | Modifier | Type | Default value | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `aliases` | `public` | [`string`, ( \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"`)[]][] | `[]` | - | - |
| `defaultLang?` | `public` | `string` | `undefined` | - | - |
| `logger` | `protected` | [`Logger`](Logger.md) | `undefined` | The logger instance. | `BaseHandler.logger` |
| `values` | `public` | `Partial`\<`Record`\<`string`, `any`\>\> | `{}` | - | - |

## Methods

### callback()

```ts
callback(_locale: string, file: Record<string, any>): false | Record<string, any>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_locale` | `string` |
| `file` | `Record`\<`string`, `any`\> |

#### Returns

`false` \| `Record`\<`string`, `any`\>

#### Source

[seyfert/src/langs/handler.ts:52](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/langs/handler.ts#L52)

***

### filter()

```ts
protected filter(path: string): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`boolean`

#### Overrides

`BaseHandler.filter`

#### Source

[seyfert/src/langs/handler.ts:7](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/langs/handler.ts#L7)

***

### get()

```ts
get(userLocale: string): __InternalParseLocale<DefaultLocale> & {
  get: DefaultLocale;
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `userLocale` | `string` |

#### Returns

[`__InternalParseLocale`](../type-aliases/InternalParseLocale.md)\<[`DefaultLocale`](../interfaces/DefaultLocale.md)\> & \{
  `get`: [`DefaultLocale`](../interfaces/DefaultLocale.md);
 \}

#### Source

[seyfert/src/langs/handler.ts:34](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/langs/handler.ts#L34)

***

### getFiles()

```ts
protected getFiles(dir: string): Promise<string[]>
```

Recursively retrieves all files in a directory.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string` | The directory path. |

#### Returns

`Promise`\<`string`[]\>

A Promise that resolves to an array of file paths.

#### Inherited from

`BaseHandler.getFiles`

#### Source

[seyfert/src/common/it/utils.ts:114](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/it/utils.ts#L114)

***

### getKey()

```ts
getKey(lang: string, message: string): undefined | string
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `lang` | `string` |
| `message` | `string` |

#### Returns

`undefined` \| `string`

#### Source

[seyfert/src/langs/handler.ts:16](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/langs/handler.ts#L16)

***

### getLocale()

```ts
getLocale(locale: string): string
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `locale` | `string` |

#### Returns

`string`

#### Source

[seyfert/src/langs/handler.ts:12](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/langs/handler.ts#L12)

***

### load()

```ts
load(dir: string, instances?: {
  file: Record<string, any>;
  name: string;
}[]): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dir` | `string` |
| `instances`? | \{ `file`: `Record`\<`string`, `any`\>; `name`: `string`; \}[] |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/langs/handler.ts:39](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/langs/handler.ts#L39)

***

### loadFiles()

```ts
protected loadFiles<T>(paths: string[]): Promise<T[]>
```

Loads files from given paths.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* \{\} |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `paths` | `string`[] | The paths of the files to load. |

#### Returns

`Promise`\<`T`[]\>

A Promise that resolves to an array of loaded files.

#### Inherited from

`BaseHandler.loadFiles`

#### Source

[seyfert/src/common/it/utils.ts:133](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/it/utils.ts#L133)

***

### loadFilesK()

```ts
protected loadFilesK<T>(paths: string[]): Promise<{
  file: T;
  name: string;
  path: string;
}[]>
```

Loads files from given paths along with additional information.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `paths` | `string`[] | The paths of the files to load. |

#### Returns

`Promise`\<\{
  `file`: `T`;
  `name`: `string`;
  `path`: `string`;
 \}[]\>

A Promise that resolves to an array of objects containing name, file, and path.

#### Inherited from

`BaseHandler.loadFilesK`

#### Source

[seyfert/src/common/it/utils.ts:142](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/it/utils.ts#L142)

***

### setHandlers()

```ts
setHandlers(__namedParameters: {
  callback: (_locale: string, file: Record<string, any>) => false | Record<string, any>;
 }): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | `object` |
| `__namedParameters.callback` | (`_locale`: `string`, `file`: `Record`\<`string`, `any`\>) => `false` \| `Record`\<`string`, `any`\> |

#### Returns

`void`

#### Source

[seyfert/src/langs/handler.ts:48](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/langs/handler.ts#L48)
