# Data Lovers: Pokémon
## Contenido

* [1. Sobre Pokémon Go](#1-sobre-pokémon-go)
* [2. Investigación inicial](#2-investigación-inicial)
* [3. Identificando areas de oportunidad del producto](#3-identificando-areas-de-oportunidad-del-producto)
* [4. Definición del producto](#4-Definición-del-producto)
* [5. Objetivos de aprendizaje](#5-objetivos-de-aprendizaje)
* [6. Checklist](#6-checklist)

## 1. Sobre Pokémon Go
Pokémon GO es una experiencia de juego internacional que cuenta con más de mil
millones de descargas y ha sido nombrada "el mejor juego para móviles" por
Game Developers Choice Awards y "la mejor aplicación del año" por TechCrunch
(tomado de Google Play). Los usuarios del juego se convierten en "Maestros/
entrenadores de Pokémon" y pueden:
- **Descubrir el mundo Pokémon:** explorar y descubrir nuevos Pokémon allá
  donde vayan.
- **Atrapar** distintos Pokémon para completar su Pokédex.
- **Pelear** contra Pokémon de otros entrenadores y conquistar un gimnasio.
- **Competir** en épicos combates contra otros entrenadores.
- **Hacer equipo** con otros entrenadores para atrapar poderosos Pokémon
  durante las incursiones.

## 2. Investigación Inicial
Para entender mejor qué necesidades complementarias a la app tienen los
usuarios, hicimos una rápida investigación (research) y estos son algunos
de los hallazgos.
- Los Pokémon tienen características únicas que determinan las decisiones que
  toma el usuario (tipo, debilidad, peso, multiplicador, etc.)
- Un maestro Pokémon antes de salir a casar los Pokémon tiene que:
  saber el top 10 de frecuencia de aparición de los Pokémon.
- Los Pokémon tienen distintos tipos y debilidades de combate. Estas
  características son importantes cuando un maestro Pokémon elige al Pokémon
  más adecuado para su batalla. Hay veces que tiene que elegir a los que
  tienen menos cantidad de debilidades y saber de que tipo son. Por ello, es
  importante para un maestro Pokémon poder ordenarlos por estas 2
  características.
- Los Pokémon evolucionan y es importante para un
  maestro Pokémon saber cuántas y cuáles son las evoluciones que tienen antes y
  después.
- Los Pokémon se alimentan de caramelos y un maestro Pokémon necesita saber
  cuántos caramelos necesita un Pokémon para evolucionar.

## 3. Identificando areas de oportunidad del producto
Realizamos las siguientes preguntas para encontrar las oportunidades en el producto:

**¿Quiénes son los principales usuarios del producto?**
-  Jugadores de Pokemon Go (modos: coleccionista, jugador PVP, entrenador (Gym))
- usuarios interesados en el tema aunque no sean jugadores de Pokémon Go.

**¿Cuáles son los objetivos de estos usuarios en relación con el producto?**
- Consultar a modo de Pokedex (Enciclopedia) la información de cada Pokémon
- Saber si tiene registrados/capturados todos los Pokémon de una región
- Consultar las evoluciones de un Pokémon
- Consultar los movimientos de ataque de un Pokémon para formar Equipos de combate PVP
- Obtener información para formar Equipos para incursiones
- Consultar contra qué tipos de Pokémon tiene ventaja y/o desventaja mi Pokémon en los combates

**¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?**
- Características únicas: Tipo, debilidad y # de evoluciones, peso y multiplicador
- Ranking (frecuencia de aparición)
- Número de caramelos para evolucionar y como conseguirlos (Km recorridos)
- Movimientos rápidos y cargado (especial)
- Km a recorrer para eclosionar un Huevo de Pokémon

**¿Cuándo utilizarían el producto?**
- Al formar equipos para combates en las ligas
- al capturar un nuevo Pokémon
- Al formar equipo para incursiones y enfrentarse a un determinado Pokémon
Encontramos que un usuario del tipo jugador entrenador PVP requiere consultar y hacer comparaciones de la información de cada Pokémon de una manera ágil, detallada y especifica, con el objetivo de planear una estrategia de juego para sus combates al realizar una mejor selección de sus Pokémon.
Es así que diseñamos una interfaz que pudiese satisfacer las necesidades de nuestro usuario proporcionándole diferentes métodos de búsqueda aplicados a la data existente de Pokémon.
Como conclusión, nuestro objetivo es:
Programar una interfaz interactiva que ayude a los usuarios a escoger información acerca de la data exitente de Pokemon GO utilizando el método de filtrado y ordenamiento de JavaScript.

## 4. Definición del producto
_Proceso de Diseño_
Nos interesa tener una interfaz sencilla, fácil de cargar en la que el usuario pueda acceder ágilmente a los botones de filtrado y ordenamiento. Nuestra gama cromática se compone por tres colores más el blanco. La idea era mantener la esencia de la imagen de Pokémon dándole un toque personalizado y que nos representara. En cuanto a la tipografía elegimos dos distintas fuentes con variaciones de peso para diferenciar tipos de datos y títulos.
iteraciones de producto de baja fidelidad búsqueda de internet y referencias

### Historias de usuario
El desarrollo de la interfaz fue gracias a la secuencia de las siguientes historias de usuario:
- 1. Yo como jugador de Pokémon Go quiero ver una lista de todos los Pokémon que existen para saber si los tengo registrados.
- 2. Yo como jugador de Pokémon Go, quiero poder ver una lista de todos los Pokémon que pertenecen a una región (que seleccione) para saber si ya tengo registrados (capturados) todos
- 3. Yo como usuario quiero filtrar la lista de los Pokémon por tipo para saber cuales son de cada tipo
- 4. Yo como usuario quiero poder ordenar de mayor a menor numero de Pokémon cuando busque por tipos y región para ubicarlos rápidamente en la lista.
- 5. Yo como usuario quiero poder ordenar alfabéticamente los nombres de los Pokémon para ubicarlos en la lista rápidamente.

### Documentación de bocetos
![image](/src/img/img_readme/01.jpg)
![image](/src/img/img_readme/02.png)
![image](/src/img/img_readme/03.png)
![image](/src/img/img_readme/04.png)
![image](/src/img/img_readme/05.png)

## 5. Objetivos de aprendizaje
El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

### HTML y CSS
* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] Uso de selectores de CSS.
* [ ] Construir tu aplicación respetando el diseño realizado (maquetación).
* [ ] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM y Web APIs
* [ ] Uso de selectores del DOM.
* [ ] Manejo de eventos del DOM.
* [ ] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript
* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [ ] Uso de bucles (for | for..in | for..of | while)
* [ ] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ ] Manipular arrays (filter | map | sort | reduce)
* [ ] Manipular objects (key | value)
* [ ] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [ ] Diferenciar entre expression y statements.
* [ ] Diferenciar entre tipos de datos atómicos y estructurados.

### Testing
* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo
* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y GitHub
* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |tags)

### UX
* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [ ] Planear y ejecutar tests de usabilidad.

## 4. Consideraciones generales
* Este proyecto se debe resolver en duplas.
* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).
* Tiempo para completarlo: Toma como referencia 4 semanas.

## 6. Checklist
* [ ] Usa VanillaJS.
* [ ] No hace uso de `this`.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.
