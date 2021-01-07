import data from "./data/rickandmorty/rickandmorty.js";
import { filterHumans, templateCard, filterAliens } from "./data.js";

//recibe listado de los personajes
function renderCards(list) {
  let elements = "";
  //construye los HTML
  list.forEach((character) => {
    elements += templateCard(character);
  });
  document.getElementById("data").innerHTML = elements;
}
//renderiza todos
renderCards(data.results);

//boton y funcionalidad del menu

let btn = document.getElementById("btn");
function showMenu() {
  let menu = document.getElementById("nav");
  if (menu.classList.contains("ocultar-menus")) {
    menu.classList.remove("ocultar-menus");
    menu.classList.add("mostrar-menus");
  } else {
    menu.classList.add("ocultar-menus");
    menu.classList.remove("mostrar-menus");
  }
}
btn.addEventListener("click", showMenu);

//filtrado de humanos
const btnHumans = document.getElementById("humans");
//filtrar humanos del arreglo original
btnHumans.addEventListener("click", function () {
  const humans = filterHumans(data.results);
  renderCards(humans);
});
//filtrado de aliens
const btnAliens = document.getElementById("aliens");
btnAliens.addEventListener("click", function () {
  const aliens = filterAliens(data.results);
  renderCards(aliens);
});

// mostrar submenu
/*let tiposFiltros = document.getElementsByClassName("tipos");
for (let i = 0; i < tiposFiltros.length; i++) {
  tiposFiltros[i].addEventListener("click", mostrarFiltros);
}
function mostrarFiltros() {}
*/
