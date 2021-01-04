import { humans } from "./data.js";

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
characters.forEach((character) => {
  templateCards += templateCard(character);
});

document.getElementById("grid").innerHTML = templateCards;
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

const human = characters.filter(function (characters) {
  return characters.species === "Human";
});

console.log(human);

// const btnMenu = document.querySelector(".icono");
// btnMenu.addEventListener("click", function () {
//   document.getElementById("menu").classList.toggle("desplazar");
// });
