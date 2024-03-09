---
editUrl: false
next: false
prev: false
title: "AllChannels"
---

```ts
type AllChannels: 
  | BaseChannel<ChannelType>
  | BaseGuildChannel
  | TextGuildChannel
  | DMChannel
  | VoiceChannel
  | MediaChannel
  | ForumChannel
  | ThreadChannel
  | CategoryChannel
  | NewsChannel
  | DirectoryChannel
  | StageChannel;
```

## Source

[seyfert/src/structures/channels.ts:509](https://github.com/potoland/potocuit/blob/e332d7a/src/structures/channels.ts#L509)
