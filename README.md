# Data Lovers

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. UX/UI "Historias de usuario, Descripción de Usuario, Prototipado."](#2-ux-ui)
* [3. Herramientas de Desarrollo](#3-entorno-de-desarrollo)
* [4. Desarrollo de Aplicación](#4-desarrollo-de-aplicacion)
* [5. Pruebas Unitarias](#5-pruebas-unitarias)

***

## 1. Resumen del proyecto

* [Pokémon](src/data/pokemon/pokemon.json):
  Con el objetivo de ofrecer a los usuarios de Pokemon Go una mejor experiencia para decidir qué pokémones pueden tener una mejor respuesta durante una batalla, es necesario conocer las características específicas de los 251 Pokémon de las regiones: Kanto y Johto. A partir de los resultados obtenidos durante la investigación de usuarios, el proyecto cuenta con un buscador para que el jugador pueda obtener información por nombre del pokémon, y un filtro para identificar y agrupar mediante características como: tipo, región, identificador, peso, estatura, ataques, habilidades, debilidades y cantidad de dulces para evolucionar. 
  [Pokémon GO](http://pokemongolive.com).
  - [Investigación con jugadores de Pokémon Go](src/data/pokemon/README.md)


## 2. UX/UI 

### Investigación 
Para el desarrollo del producto a partir de las necesidades de usuarios, realizamos 5 entrevistas. Debido a la contingencia por Covid - 19, estas entrevistas no podían ser presenciales y  se realizaron a través de plataformas de mensajería. Las preguntas fueron las siguientes: 
- ¿Qué información necesitas conocer sobre tus Pokémon antes de iniciar una batalla en Pokémon Go?
- En un listado extenso de Pokémones ¿Qué información te gustaría recibir? 
- En una tarjeta o card sobre un Pokémon ¿Qué información te gustaría obtener?
Una vez que las entrevistas fueron realizadas, el equipo de desarrollo trabajó en el prototipado de baja y alta calidad. Es importante mencionar que ambos se pusieron a consideración de los 5 usuarios, quienes realizaron sugerencias al diseño, basadas en sus necesidades y objetivos al consultar un Pokédex. 

### Diseño

## 3. Herramientas de Desarrollo

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

* Aquí editaremos conforme a proceso de desarrollo.

## 4. Desarrollo de Aplicación

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── EXTRA.md
├── README.md
├── package.json
├── src
|  ├── data (según con qué data trabajes)
|  |  ├── lol
|  |  |  ├── lol.js
|  |  |  ├── lol.json
|  |  |  └── README.md
|  |  ├── pokemon
|  |  |  ├── pokemon.js
|  |  |  ├── pokemon.json
|  |  |  └── README.md
|  |  └── rickandmorty
|  |     ├── rickandmorty.js
|  |     └── rickandmorty.json
|  |     └── README.md
|  |  └── athletes
|  |     ├── athletes.js
|  |     └── athletes.json
|  |     └── README.md
|  ├── data.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.spec.js

directory: 6 file: 17
```
* Unidad de testing en curso de JavaScript en LMS.
* Unidad de arreglos en curso de JavaScript en LMS.
* Unidad de objetos en curso de JavaScript en LMS.
* Unidad de funciones en curso de JavaScript en LMS.
* Unidad de DOM en curso de Browser JavaScript en LMS.
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-es.html)
* [expressions-vs-statements](https://2ality.com/2012/09/expressions-vs-statements.html)
* [expresión vs sentencia](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [datos atómicos vs datos estructurados](https://www.todojs.com/tipos-datos-javascript-es6/)
* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)

* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.


## 5. Pruebas Unitarias

Tendrás también que completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.