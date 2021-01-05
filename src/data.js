// estas funciones son de ejemplo
import { characters } from "./main.js";

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

export let templateCards = "";
characters.forEach((character) => {
  templateCards += templateCard(character);
});

export const human = characters.filter(
  (character) => character.species === "Human"
);

export const anotherExample = () => {
  return "OMG";
};
