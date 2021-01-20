import data from "./data/rickandmorty/rickandmorty.js";
import {
  templateCard,
  filterSearch,
  filterElements,
  sortElements,
  openModals,
} from "./data.js";
//variable global para tener acceso a todo el arreglo desde cualquier funcion
window.characters = data.results;

//recibe listado de los personajes
function renderCards(list) {
  let elements = "";
  //construye los HTML
  list.forEach((character) => {
    elements += templateCard(character);
  });
  document.getElementById("data").innerHTML = elements;
} //renderiza todos
renderCards(data.results);
const menuElements = document.getElementsByClassName("menu-element");
console.log(menuElements);
const inputSearch = document.getElementById("search");
//Filtrado gral
const filterCards = (e) => {
  console.log("click", e.target);
  const filterType = e.target.dataset.filter;
  console.log(filterType);
  const filterValue = e.target.dataset.value;
  window.characters = filterElements(data.results, filterType, filterValue);
  return renderCards(window.characters);
};
Array.from(menuElements).forEach((menuElement) => {
  menuElement.addEventListener("click", filterCards);
});
//FUNCION DE ORDENADO
document.getElementById("sort").addEventListener("change", (e) => {
  console.log(e.target.value);
  const sortedElements = sortElements(window.characters, e.target.value);
  console.log(sortedElements);
  renderCards(sortedElements);
});
//filtrado por nombre
inputSearch.addEventListener("change", function (e) {
  let text = e.currentTarget.value;
  console.log(text);
  const names = filterSearch(data.results, text);
  console.log(names);
  renderCards(names);
});

//datos de modal
/*function modalsInfo(table) {
  let info = "";
  table.forEach((datosGrales) => {
    info += modals(datosGrales);
  });
  document.getElementById("div-img-modal").innerHTML = info;
}

modalsInfo(data.results);*/
