[seyfert](../globals.md) / Groups

# Function: Groups()

```ts
function Groups(groups: Record<string, {
  aliases: string[];
  defaultDescription: string;
  description: [
     | "id"
     | "en-US"
     | "en-GB"
     | "bg"
     | "zh-CN"
     | "zh-TW"
     | "hr"
     | "cs"
     | "da"
     | "nl"
     | "fi"
     | "fr"
     | "de"
     | "el"
     | "hi"
     | "hu"
     | "it"
     | "ja"
     | "ko"
     | "lt"
     | "no"
     | "pl"
     | "pt-BR"
     | "ro"
     | "ru"
     | "es-ES"
     | "es-419"
     | "sv-SE"
     | "th"
     | "tr"
     | "uk"
     | "vi", string][];
  name: [
     | "id"
     | "en-US"
     | "en-GB"
     | "bg"
     | "zh-CN"
     | "zh-TW"
     | "hr"
     | "cs"
     | "da"
     | "nl"
     | "fi"
     | "fr"
     | "de"
     | "el"
     | "hi"
     | "hu"
     | "it"
     | "ja"
     | "ko"
     | "lt"
     | "no"
     | "pl"
     | "pt-BR"
     | "ro"
     | "ru"
     | "es-ES"
     | "es-419"
     | "sv-SE"
     | "th"
     | "tr"
     | "uk"
     | "vi", string][];
 }>): <T>(target: T) => (...args: any[]) => __class<T> & T
```

## Parameters

| Parameter | Type |
| :------ | :------ |
| `groups` | `Record`\<`string`, \{ `aliases`: `string`[]; `defaultDescription`: `string`; `description`: [ \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"`, `string`][]; `name`: [ \| `"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"`, `string`][]; \}\> |

## Returns

`Function`

### Type parameters

| Type parameter |
| :------ |
| `T` *extends* (...`args`: `any`[]) => \{\} |

### Parameters

| Parameter | Type |
| :------ | :------ |
| `target` | `T` |

### Returns

(...`args`: `any`[]) => `__class`\<`T`\> & `T`

## Source

[seyfert/src/commands/decorators.ts:92](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/commands/decorators.ts#L92)
