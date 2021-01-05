import { humans } from "./data.js";

// import data from './data/lol/lol.js';
//import data from "./data/pokemon/pokemon.js";
import data from "./data/rickandmorty/rickandmorty.js";

function templateCard(props) {
  return `<div class="cards" data-id="${props.id}">
    <div class="card" >
      <div class="card-image">
        <img src="${props.image}" />
      </div>
      <div class="details">
        <p class="card-name"><h2>${props.name}</h2></p>
        <p class="card-status">Estatus: ${props.status}</p>
        <p class="card-specie">Especie: ${props.species}</p>
        <p class="card-origin">Origen: ${props.origin.name}</p>
        <p class="card-gender">Genero: ${props.gender}</p>
      </div>
    </div>
  </div>`;
}

let templateCards = "";
const characters = data.results;
characters.forEach((character) => {
  templateCards += templateCard(character);
});

document.getElementById("data").innerHTML = templateCards;
/*
let human = "";
for (let i = 0; i < characters.length; i++) {
  if (characters[i].species === "Human") human.push(characters[i]);
}

const isHuman = function (character) {
  return character.species === "Human";
};
//let human = characters.filter(isHuman);
*/

const human = characters.filter(function (character) {
  return character.species === "Human";
});

console.log(human);

// const btnMenu = document.querySelector(".icono");
// btnMenu.addEventListener("click", function () {
//   document.getElementById("menu").classList.toggle("desplazar");
// });
