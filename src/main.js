/*import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);*/

import data from './data/pokemon/pokemon.js';
console.log(data.pokemon);

const pokemonData = document.getElementById("home-main--button");
pokemonData.addEventListener('click', showData, false);


let pokemonName = [];
let pokemonImage = [];

function showData () {
    const allPokemon = data.pokemon;
    let nameP = allPokemon[0];
    console.log(nameP);
    for (let i = 0; i < allPokemon.length; i++) {
        pokemonName[i] =  allPokemon[i].name;
        pokemonImage[i] = allPokemon[i].img;
      }
      console.log(pokemonName);
      document.getElementById("pokemon-container").innerHTML = pokemonName;
    }
    
    /*const pokemonName = allPokemon.name;
    console.log(pokemonName);
    for (const property in pokemonName) {
        console.log(`${property}: ${pokemonName[property]}`);
      }
    /*allPokemon.forEach(function (pokemon, index) {
        document.getElementById("pokemon-container").innerHTML += index + ":" + pokemon + "<br>";
    });¨*/

