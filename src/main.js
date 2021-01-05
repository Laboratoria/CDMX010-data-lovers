import { humans } from "./data.js";

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
const human = characters.filter(function (character) {
  return character.species === "Human";
});
human.forEach((character) => {
  templateCards += templateCard(character);
});

document.getElementById("data").innerHTML = templateCards;
