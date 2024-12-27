---
title: Changelog
description: Seyfert changes
---

## 2.2.0 changes

**Breaking Changes:**
- Channel threads are no longer part of the main cache; they are now merged with channels.
- `WorkerAdapter` is no longer the default cache adapter of the WorkerClient.
- Changed `Context.guild`, `Context.channel`, and `Context.me` functions to use the `flow` mode by default.
- Removed `output` and `templates` locations from the configuration file.
- Removed `updateOnly` parameter from the `patch` method in the cache Adapter.

**Fixed:**
- Fixed issues with zombie connections.
- Fixed the `workerProxy` implementation in the `WorkerClient`.
- Fixed `edit` method in `GuildRole`.
- Fixed `ModalInteraction.member.roles` not returning the correct data.
- Fixed collector `refresh` callback.
- Fixed `guildMemberRemove` to get the correct `GuildMember` old object.

**Additions:**
- Added `Client.latency` to get the latency of all shards.
- `cache.disabledCache` can now be a function that dynamically returns `true`/`false` based on the `cacheType` parameter.
- Added `addRole` and `removeRole` methods to `BaseGuildMember`.
- Enhanced the error message for "config file not found."
- Component listeners now include an `onPass` function.
- Added support for the Soundboard API with functionalities to `get`, `upload`, `list`, and `delete`.
- Added a soundboard shorter in the `Client`.
- Added custom events in the `WorkerClient`.
- Introduced resharding, enabling automatic shard creation and deletion as needed in the WorkerClient.
- `attachment` objects now support `ArrayBuffer`, `Uint8ClampedArray`, and `Uint8Array` (types updated).
- `option.value` automatically infers the specified `option.choices` if available.
- `options.value` now returns the same type as specified in the `option.channel_types`.
- Introduced `Guild...Context` and `Context.inGuild()` to ensure guild data for commands not usable in DMs.
- Added a `deferUpdate` method for `ComponentContext`s.
- Embed setter methods (e.g., `addField`, `setDescription`) now support `undefined` as a valid parameter.
- Seyfert configuration is now extendable using `ExtendedRC` for types and `ExtendedRCLocations` for `config.locations`.
- Added a `generateOAuth2URL` utility in formatters.
- Added support for Deno and Bun.
- Introduced a shorter form for `voiceStates`, accessible via `client.voiceStates`.
- Improved Discord API error messages.
- Added an `onRatelimit` callback in ApiHandler (rest).
- Added webhook event types for `applicationAuthorized`, `entitlementCreated`, and `questUserEnrollment`.
- `HttpServerAdapter` now supports any type of `Client` (`HttpClient`, `Client`, or `WorkerClient`).
- Added `channel.messages.list()` to fetch all messages in a channel.
