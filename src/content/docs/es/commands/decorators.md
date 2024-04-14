---
title: Decoradores para el Comando
---

Echa un vistazo a los diferentes decoradores que Seyfert proporciona para crear comandos.

## `@Declare()` [API](/api/functions/declare)

Este decorador se utiliza para declarar un comando. Se utiliza para definir el nombre del comando, la descripción del comando y las opciones del comando.
- **name**: El nombre del comando barra.
- **description**: La descripción del comando barra.
- **dm**: Si el comando puede ser usado en DMs.
- **guildId**: Ids de servidores donde se puede publicar el comando.


## ``@Options()`` [API](/api/functions/options)

:::tip

Puede obtener más información al respecto [aquí](./options).

:::

Este decorador simplifica la configuración de comandos de barra utilizando un objeto de opción. 
Seyfert proporciona una serie de decoradores fáciles de usar diseñados para que la definición de opciones de comandos sea sencilla.


## ``@Middlewares()`` [API](/api/functions/middlewares)

Seyfert ofrece un avanzado sistema de middlewares totalmente typeados e increíblemente potente. 
Este sistema recibe una lista de middlewares, que son funciones que se ejecutan antes de que se ejecute un comando.

Puedes aprender a crear middlewares y utilizarlos [aquí](./middlewares).

# Decoradores relacionados con subcomandos

:::tip

Tenemos una sección dedicada a los subcomandos, puedes encontrarla [aquí](./subcomandos).

:::

## `@Groups()` y `@Group()`

Seyfert se encarga de todos los aspectos de los comandos por ti, incluido el sistema de grupos de comandos que expone Discord.

`@Groups()` es el decorador para indicar a un comando padre qué grupos tendrá y manejará.

`@Group()` es el decorador para indicar a un subcomando (comando hijo) a qué grupo pertenece.

## `@AutoLoad` [API](/api/functions/autoload)

Este decorador se utiliza para cargar automáticamente todos los archivos de subcomandos en el directorio donde se encuentra `parent`.