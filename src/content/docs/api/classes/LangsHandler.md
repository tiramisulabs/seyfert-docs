---
editUrl: false
next: false
prev: false
title: "LangsHandler"
---

## Extends

- `BaseHandler`

## Constructors

### new LangsHandler(logger)

```ts
new LangsHandler(logger: Logger): LangsHandler
```

Initializes a new instance of the BaseHandler class.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `logger` | [`Logger`](/api/classes/logger/) | The logger instance. |

#### Returns

[`LangsHandler`](/api/classes/langshandler/)

#### Inherited from

`BaseHandler.constructor`

#### Source

[seyfert/src/common/it/utils.ts:101](https://github.com/potoland/potocuit/blob/fe122a1/src/common/it/utils.ts#L101)

## Properties

| Property | Type |
| :------ | :------ |
| `aliases` | [`string`, ( \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"`)[]][] |
| `defaultLang?` | `string` |
| `values` | `Partial`\<`Record`\<`string`, `any`\>\> |

## Methods

### get()

```ts
get(userLocale: string): __InternalParseLocale<DefaultLocale> & Object
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `userLocale` | `string` |

#### Returns

[`__InternalParseLocale`](/api/type-aliases/internalparselocale/)\<[`DefaultLocale`](/api/interfaces/defaultlocale/)\> & `Object`

#### Source

[seyfert/src/langs/handler.ts:29](https://github.com/potoland/potocuit/blob/fe122a1/src/langs/handler.ts#L29)

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

[seyfert/src/langs/handler.ts:15](https://github.com/potoland/potocuit/blob/fe122a1/src/langs/handler.ts#L15)

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

[seyfert/src/langs/handler.ts:11](https://github.com/potoland/potocuit/blob/fe122a1/src/langs/handler.ts#L11)

***

### load()

```ts
load(dir: string): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/langs/handler.ts:34](https://github.com/potoland/potocuit/blob/fe122a1/src/langs/handler.ts#L34)
