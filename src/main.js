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
const drop_btn = document.querySelector(".drop-menu");
const menu_wrapper = document.querySelector(".wrapper");
const menu_bar = document.querySelector(".menu-bar");
const specie_drop = document.querySelector(".specie-drop");
const gender_drop = document.querySelector(".gender-drop");
const location_drop = document.querySelector(".location-drop");
const species_items = document.querySelector(".species-items");
const gender_items = document.querySelector(".gender-items");
const location_items = document.querySelector(".location-items");
const back_species = document.querySelector(".back-species");
const back_gender = document.querySelector(".back-gender");
const back_location = document.querySelector(".back-location");
drop_btn.onclick = () => {
  menu_wrapper.classList.toggle("show");
};
species_items.onclick = () => {
  menu_bar.style.marginLeft = "-400px";
  setTimeout(() => {
    specie_drop.style.display = "block";
  }, 100);
};
gender_items.onclick = () => {
  menu_bar.style.marginLeft = "-400px";
  setTimeout(() => {
    gender_drop.style.display = "block";
  }, 100);
};
location_items.onclick = () => {
  menu_bar.style.marginLeft = "-400px";
  setTimeout(() => {
    location_drop.style.display = "block";
  }, 100);
};
back_species.onclick = () => {
  menu_bar.style.marginLeft = "0px";
  specie_drop.style.display = "none";
};
back_gender.onclick = () => {
  menu_bar.style.marginLeft = "0px";
  gender_drop.style.display = "none";
};
back_location.onclick = () => {
  menu_bar.style.marginLeft = "0px";
  location_drop.style.display = "none";
};

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

function mostrarFiltros() {}
