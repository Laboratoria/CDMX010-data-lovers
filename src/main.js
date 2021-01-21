import data from "./data/rickandmorty/rickandmorty.js";
import {
  templateCard,
  filterSearch,
  filterElements,
  sortElements,
  renderModals,
  findCharacter,
} from "./data.js";
//variable global para tener acceso a todo el arreglo desde cualquier funcion
window.characters = data.results;

const menuElements = document.querySelectorAll(".menu-element");
console.log(menuElements);
const inputSearch = document.getElementById("search");
const modalContent = document.getElementById("content");
const modal = document.getElementById("modal");
//recibe listado de los personajes
function renderCards(list) {
  let elements = "";
  //construye los HTML
  list.forEach((character) => {
    elements += templateCard(character);
  });
  document.getElementById("data").innerHTML = elements;
}
//Filtrado gral
const filterCards = (e) => {
  console.log("click", e.target);
  const filterType = e.target.dataset.filter;
  console.log(filterType);
  const filterValue = e.target.dataset.value;
  window.characters = filterElements(data.results, filterType, filterValue);

  renderCards(window.characters);
  modalLisener();
};

const showModal = (e) => {
  const valueCard = parseInt(e.target.dataset.id);
  console.log(valueCard);
  const characterInfo = findCharacter(window.characters, valueCard);
  modalContent.innerHTML = renderModals(characterInfo);
  modal.classList.toggle("modal-active");
};

const modalLisener = () => {
  const cardsElements = document.querySelectorAll(".card");
  cardsElements.forEach((cardElement) => {
    cardElement.addEventListener("click", showModal);
  });
};
//FUNCION DE ORDENADO
document.getElementById("sort").addEventListener("change", (e) => {
  console.log(e.target.value);
  const sortedElements = sortElements(window.characters, e.target.value);
  console.log(sortedElements);

  renderCards(sortedElements);
  modalLisener();
});

//filtrado por nombre
inputSearch.addEventListener("change", function (e) {
  let text = e.currentTarget.value;
  console.log(text);
  const names = filterSearch(data.results, text);
  console.log(names);
  renderCards(names);
  modalLisener();
});
menuElements.forEach((menuElement) => {
  menuElement.addEventListener("click", filterCards);
});
modal.addEventListener("click", () => {
  modal.classList.toggle("modal-active");
});

//renderiza todos
renderCards(data.results);
//asocia el evento clic a cada una de las tarjetas para abrir el modal
modalLisener();
