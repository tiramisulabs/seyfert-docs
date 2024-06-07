[seyfert](../globals.md) / Logger

# Class: Logger

Represents a logger utility for logging messages with various log levels.

## Constructors

### new Logger()

```ts
new Logger(options: LoggerOptions): Logger
```

Constructs a new Logger instance with the provided options.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | `LoggerOptions` | The options for configuring the logger. |

#### Returns

[`Logger`](Logger.md)

#### Source

[seyfert/src/common/it/logger.ts:65](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/it/logger.ts#L65)

## Properties

| Property | Modifier | Type | Default value | Description |
| :------ | :------ | :------ | :------ | :------ |
| `options` | `readonly` | `Required`\<`LoggerOptions`\> | `undefined` | The options for configuring the logger. |
| `DEFAULT_OPTIONS` | `static` | `Required`\<`LoggerOptions`\> | `...` | The default options for the logger. |
| `__callback?` | `private` | `CustomCallback` | `undefined` | The custom callback function for logging. |
| `colorFunctions` | `static` | `Map`\<`LogLevels`, (`str`: `string`) => `string`\> | `...` | A map containing color functions for different log levels. |
| `createdDir?` | `private` | `true` | `undefined` | - |
| `dirname` | `static` | `string` | `'seyfert-logs'` | - |
| `prefixes` | `static` | `Map`\<`LogLevels`, `string`\> | `...` | A map containing prefixes for different log levels. |
| `saveOnFile?` | `static` | `string`[] \| `"all"` | `undefined` | - |
| `streams` | `static` | `Partial`\<`Record`\<`string`, `WriteStream`\>\> | `{}` | - |

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

[seyfert/src/common/it/logger.ts:101](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/it/logger.ts#L101)

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

[seyfert/src/common/it/logger.ts:79](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/it/logger.ts#L79)

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

[seyfert/src/common/it/logger.ts:115](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/it/logger.ts#L115)

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

[seyfert/src/common/it/logger.ts:87](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/it/logger.ts#L87)

## Methods

### \_\_write()

```ts
private __write(log: unknown[]): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `log` | `unknown`[] |

#### Returns

`void`

#### Source

[seyfert/src/common/it/logger.ts:190](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/it/logger.ts#L190)

***

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

[seyfert/src/common/it/logger.ts:154](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/it/logger.ts#L154)

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

[seyfert/src/common/it/logger.ts:178](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/it/logger.ts#L178)

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

[seyfert/src/common/it/logger.ts:186](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/it/logger.ts#L186)

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

[seyfert/src/common/it/logger.ts:162](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/it/logger.ts#L162)

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

[seyfert/src/common/it/logger.ts:125](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/it/logger.ts#L125)

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

[seyfert/src/common/it/logger.ts:170](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/it/logger.ts#L170)

***

### clearLogs()

```ts
static clearLogs(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Source

[seyfert/src/common/it/logger.ts:53](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/it/logger.ts#L53)

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

[seyfert/src/common/it/logger.ts:49](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/it/logger.ts#L49)

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

[seyfert/src/common/it/logger.ts:220](https://github.com/tiramisulabs/seyfert/blob/f061dccf3f80f27124661b050c96d4f946e6387d/src/common/it/logger.ts#L220)
