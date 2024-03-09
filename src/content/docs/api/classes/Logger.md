---
editUrl: false
next: false
prev: false
title: "Logger"
---

Represents a logger utility for logging messages with various log levels.

## Constructors

### new Logger(options)

```ts
new Logger(options: LoggerOptions): Logger
```

Constructs a new Logger instance with the provided options.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | `LoggerOptions` | The options for configuring the logger. |

#### Returns

[`Logger`](/api/classes/logger/)

#### Source

[seyfert/src/common/it/logger.ts:66](https://github.com/potoland/potocuit/blob/fe122a1/src/common/it/logger.ts#L66)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `options` | `readonly` | `Required`\<`LoggerOptions`\> | The options for configuring the logger. |
| `DEFAULT_OPTIONS` | `static` | `Required`\<`LoggerOptions`\> | The default options for the logger. |
| `colorFunctions` | `static` | `Map`\<`LogLevels`, (`str`: `string`) => `string`\> | A map containing color functions for different log levels. |
| `dirname` | `static` | `string` | - |
| `prefixes` | `static` | `Map`\<`LogLevels`, `string`\> | A map containing prefixes for different log levels. |
| `saveOnFile?` | `static` | `string`[] \| `"all"` | - |
| `streams` | `static` | `Partial`\<`Record`\<`string`, `WriteStream`\>\> | - |

## Accessors

### active

```ts
get active(): boolean
```

Gets whether the logger is active or not.

```ts
set active(active: boolean): void
```

Sets whether the logger is active or not.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `active` | `boolean` |

#### Returns

`boolean`

#### Source

[seyfert/src/common/it/logger.ts:102](https://github.com/potoland/potocuit/blob/fe122a1/src/common/it/logger.ts#L102)

***

### level

```ts
get level(): LogLevels
```

Gets the log level of the logger.

```ts
set level(level: LogLevels): void
```

Sets the log level of the logger.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `level` | `LogLevels` |

#### Returns

`LogLevels`

#### Source

[seyfert/src/common/it/logger.ts:80](https://github.com/potoland/potocuit/blob/fe122a1/src/common/it/logger.ts#L80)

***

### name

```ts
get name(): string
```

Gets the name of the logger.

```ts
set name(name: string): void
```

Sets the name of the logger.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Source

[seyfert/src/common/it/logger.ts:116](https://github.com/potoland/potocuit/blob/fe122a1/src/common/it/logger.ts#L116)

***

### saveOnFile

```ts
get saveOnFile(): boolean
```

```ts
set saveOnFile(saveOnFile: boolean): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `saveOnFile` | `boolean` |

#### Returns

`boolean`

#### Source

[seyfert/src/common/it/logger.ts:88](https://github.com/potoland/potocuit/blob/fe122a1/src/common/it/logger.ts#L88)

## Methods

### debug()

```ts
debug(...args: any[]): void
```

Logs a debug message.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`args` | `any`[] | The arguments to log. |

#### Returns

`void`

#### Source

[seyfert/src/common/it/logger.ts:154](https://github.com/potoland/potocuit/blob/fe122a1/src/common/it/logger.ts#L154)

***

### error()

```ts
error(...args: any[]): void
```

Logs an error message.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`args` | `any`[] | The arguments to log. |

#### Returns

`void`

#### Source

[seyfert/src/common/it/logger.ts:178](https://github.com/potoland/potocuit/blob/fe122a1/src/common/it/logger.ts#L178)

***

### fatal()

```ts
fatal(...args: any[]): void
```

Logs a fatal error message.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`args` | `any`[] | The arguments to log. |

#### Returns

`void`

#### Source

[seyfert/src/common/it/logger.ts:186](https://github.com/potoland/potocuit/blob/fe122a1/src/common/it/logger.ts#L186)

***

### info()

```ts
info(...args: any[]): void
```

Logs an info message.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`args` | `any`[] | The arguments to log. |

#### Returns

`void`

#### Source

[seyfert/src/common/it/logger.ts:162](https://github.com/potoland/potocuit/blob/fe122a1/src/common/it/logger.ts#L162)

***

### rawLog()

```ts
rawLog(level: LogLevels, ...args: unknown[]): void
```

Logs a message with the specified log level.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `level` | `LogLevels` | The log level. |
| ...`args` | `unknown`[] | The arguments to log. |

#### Returns

`void`

The logged message.

#### Source

[seyfert/src/common/it/logger.ts:126](https://github.com/potoland/potocuit/blob/fe122a1/src/common/it/logger.ts#L126)

***

### warn()

```ts
warn(...args: any[]): void
```

Logs a warning message.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`args` | `any`[] | The arguments to log. |

#### Returns

`void`

#### Source

[seyfert/src/common/it/logger.ts:170](https://github.com/potoland/potocuit/blob/fe122a1/src/common/it/logger.ts#L170)

***

### clearLogs()

```ts
static clearLogs(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/common/it/logger.ts:54](https://github.com/potoland/potocuit/blob/fe122a1/src/common/it/logger.ts#L54)

***

### customize()

```ts
static customize(cb: CustomCallback): void
```

Allows customization of the logging behavior by providing a custom callback function.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `cb` | `CustomCallback` | The custom callback function for logging. |

#### Returns

`void`

#### Example

```ts
Logger.customize((logger, level, args) => {
    // Custom logging implementation
});
```

#### Source

[seyfert/src/common/it/logger.ts:50](https://github.com/potoland/potocuit/blob/fe122a1/src/common/it/logger.ts#L50)

***

### noColor()

```ts
static noColor(msg: string): string
```

A function that returns the input string as is, without any color modification.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `msg` | `string` | The message to log. |

#### Returns

`string`

The input message as is.

#### Source

[seyfert/src/common/it/logger.ts:220](https://github.com/potoland/potocuit/blob/fe122a1/src/common/it/logger.ts#L220)
