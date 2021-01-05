import { human, templateCards } from "./data.js";

// import data from './data/lol/lol.js';
//import data from "./data/pokemon/pokemon.js";
import data from "./data/rickandmorty/rickandmorty.js";

export const characters = data.results;

//const human = characters.filter((character) => character.species === "Human");

//document.getElementById("grid").innerHTML = human;
document.getElementById("grid").innerHTML = templateCards;

//boton y funcionalidad del menu

let menu = document.getElementById("menu");
function showMenu() {
  let menus = document.getElementById("menus");
}
menu.addEventListener("click", showMenu);
if (menus.classList.cotains("menus")) {
  console.log("mostrar");
} else {
  console.log("ocultar");
}
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

console.log(human);
