---
title: Introducción a los componentes
---

Los componentes de mensajes son elementos que se adjuntan en los mensajes con los cuales los usuarios pueden interactuar. Estos componentes incluyen: [`Buttons`](https://github.com/tiramisulabs/seyfert/blob/455ed12b0ebcb3ddf55bc8b3274b0ce904becc62/src/builders/Button.ts#L8), [`SelectMenus`](https://github.com/tiramisulabs/seyfert/blob/455ed12b0ebcb3ddf55bc8b3274b0ce904becc62/src/builders/SelectMenu.ts#L60) y [`TextInputs`](https://github.com/tiramisulabs/seyfert/blob/455ed12b0ebcb3ddf55bc8b3274b0ce904becc62/src/builders/Modal.ts#L113).

En esta guía vamos a cubrir:

* Creación de cada tipo de componente.

* Manejo de sus interacciones de manera estática.

* Uso de colectores.

:::info

También vamos a tratar los [`Modals`](https://github.com/tiramisulabs/seyfert/blob/455ed12b0ebcb3ddf55bc8b3274b0ce904becc62/src/builders/Modal.ts#L29). Aunque técnicamente no son componentes, ya que no se adjuntan dentro de un mensaje, pueden ser manejados de la misma manera que los otros componentes.
:::