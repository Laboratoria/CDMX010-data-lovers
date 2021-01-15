import data from "./data/rickandmorty/rickandmorty.js";
import { templateCard, order_desc, order_asc, filterSearch } from "./data.js";

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

//FILTRADO

const raceElements = document.getElementsByName("race");
let dataFiltered;

for (let i = 0; i < raceElements.length; i++) {
  raceElements[i].addEventListener("click", function (e) {
    const value = e.target.dataset.value;
    if (value === "Human" || value === "Alien") {
      let newArraySpecie = data.results.filter(
        (character) => character.species === value
      );
      dataFiltered = newArraySpecie;
      return renderCards(newArraySpecie);
    }
    if (value === "Female" || value === "Male") {
      let newArrayGender = data.results.filter(
        (character) => character.gender === value
      );
      dataFiltered = newArrayGender;
      return renderCards(newArrayGender);
    }
    if (value === "Alive" || value === "Dead") {
      let newArrayStatus = data.results.filter(
        (character) => character.status === value
      );
      dataFiltered = newArrayStatus;
      return renderCards(dataFiltered);
    }
    return dataFiltered;
  });
}

/*const array = origin;
let repetidos = {};
array.forEach(function(numero){
  repetidos[numero] = (repetidos[numero] || 0) + 1;
});*/

//boton y funcionalidad del menu
const drop_btn = document.querySelector(".drop-menu");
const drop_btn_order = document.querySelector(".drop-menu-order");
const menu_wrapper = document.querySelector(".wrapper");
const menu_wrapper_order = document.querySelector(".wrapper-order");
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
let desButton = document.getElementById("desc");
let ascButton = document.getElementById("asc");

drop_btn.onclick = () => {
  menu_wrapper.classList.toggle("show");
};
drop_btn_order.onclick = () => {
  menu_wrapper_order.classList.toggle("show");
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

//VENTANA MODAL
let modal = document.getElementById("myModal");
let btn = document.querySelector(".btnmodal");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

desButton.addEventListener("click", () =>
  renderCards(order_desc(dataFiltered))
);
ascButton.addEventListener("click", () => renderCards(order_asc(dataFiltered)));

//filtrado por nombre
let inputSeach = document.getElementById("seach");
inputSeach.addEventListener("change", function (e) {
  let text = e.currentTarget.value;
  console.log(text);
  const names = filterSearch(data.results, text);
  console.log(names);
  renderCards(names);
});
