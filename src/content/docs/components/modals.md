---
title: Using Mmodals
---

Modals can also be created in Seyfert. They are created with a builder like other componets and then [`TextInput`](/api/classes/textinput) components inside an [`ActionRow`](/api/classes/actionrow) are attached to it.

Here is an example of how to create a modal with two text inputs:

```ts showLineNumbers copy

import {
    Modal,
    TextInput,
    ActionRow
} from 'seyfert'

import { TextInputStyle } from 'discord-api-types/v10'

const nameInput = new TextInput()
.setCustomId('name')
.setStyle(TextInputStyle.Short)
.setLabel('Name')

const row1 = new ActionRow<TextInput>().setComponents([nameInput]);

const ageInput = new TextInput()
.setCustomId('age')
.setStyle(TextInputStyle.Short)
.setLabel('Age')

const row2 = new ActionRow<TextInput>().setComponents([ageInput]);

const modal = new Modal()
.setCustomId('mymodal')
.setTitle('My Modal')
.setComponents([row1, row2])

```

## Handling Modals

To handle modals, as they aren't components, Seyfert provides `ModalCommmand` class which has the same logic as the `ComponentCommand` class.

```ts showLineNumbers copy

import { 
    ModalCommand ,
    type ModalSubmitInteraction
} from 'seyfert';

export class MyModal extends ModalCommand {

    filter(interaction: ModalSubmitInteraction){
        return interaction.customId === 'mymodal'
    }

    async run(interaction: ModalSubmitInteraction){

        //we are getting the textinput values by passing their custom id's in the getInputValue method.

        const name = interaction.getInputValue('name', true);

        const age = interaction.getInputValue('age', true);

        return await interaction.write({ content: `You are ${name} and have ${age} years` })

    }
}