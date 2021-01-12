//import { example } from './data.js';
//import data from './data/pokemon/pokemon.js';

import data from './data/pokemon/pokemon.js';
console.log(data.pokemon);

const buttonStart = document.getElementById('btnStart');
buttonStart.addEventListener('click', showNames);

let pokemonName = [];
let pokemonNum = [];
let pokemonImag = [];

//imprimiendo en pantalla nombre del primer Pokemón
/*function showNames() {
  const allPokemon = data.pokemon;
  let firstPokemon = allPokemon[2];
  console.log(firstPokemon)
  document.getElementById('pokedexContainer').innerHTML = firstPokemon.name
}*/

//imprimiendo en pantalla los nombres de todos los Pokémon
function showNames() {
  const allPokemon = data.pokemon;
  for (let i = 0; i < allPokemon.length; i++) {
    pokemonName[i] =  allPokemon[i].name;
  }
  console.log(pokemonName)
  document.getElementById('pokedexContainer').innerHTML = pokemonName;
}
