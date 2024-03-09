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

[seyfert/src/structures/channels.ts:540](https://github.com/potoland/potocuit/blob/fe122a1/src/structures/channels.ts#L540)
