---
title: Building components
---

Components are built with a builder, which is a JavaScript class, which represents it. Within this builder you can customize the component such it's text or it's color.

There are diffrent types of components' builders with diffrent customization but all have a common property: the custom Id. A unique identifier which is used for handling the interactions of the component.

All the builders are sent within an [`ActionRow`](/api/classes/actionrow). Each message can contain a maxium of 5 actions row.

Here is how we create a basic ActionRow:

```ts {"Set all the components within this ActionRow": 4-5} {"Add components to the ActionRow": 6-7} showLineNumbers

import { ActionRow } from 'seyfert'

const row = new ActionRow()

.setComponents()

.addComponents()

```