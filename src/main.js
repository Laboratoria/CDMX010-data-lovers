import { example } from "./data.js";

// import data from './data/lol/lol.js';
//import data from "./data/pokemon/pokemon.js";
import data from "./data/rickandmorty/rickandmorty.js";

function templateCard(props) {
  return `<div class="card" data-id="${props.id}">
    <div class="card-image">
      <img src="${props.image}" />
    </div>
    <p class="card-name">${props.name}</p>
    <p class="card-status">${props.status}</p>
    <p class="card-specie">${props.species}</p>
    <p class="card-origin">${props.origin.name}</p>
    <p class="card-gender">${props.gender}</p>
    <p class="card-location">${props.location.name}</p>
  </div>`;
}

let templateCards = "";
const characters = data.results;
for (let i = 0, len = characters.length; i < len; i++) {
  templateCards += templateCard(characters[i]);
}

document.getElementById("grid").innerHTML = templateCards;

// const btnMenu = document.querySelector(".icono");
// btnMenu.addEventListener("click", function () {
//   document.getElementById("menu").classList.toggle("desplazar");
// });
