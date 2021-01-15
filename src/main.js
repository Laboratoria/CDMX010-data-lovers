//import { example } from './data.js';
//import data from './data/pokemon/pokemon.js';

import data from './data/pokemon/pokemon.js';
console.log(data.pokemon);

//variable del elemento HTML donde me mostrara el Pokémon
let pokeDom=document.querySelector('.pokeContainer1')

//para mostrar directo en el html sin crear un botón
document.addEventListener("DOMContentLoaded",()=>{
  let pokemons=getData()
  setHTML(pokemons)
})

//obteniendo el 1er objeto del gran array, capturando a Bulbasaur
const allPokemon = data.pokemon;

function setHTML(poke){
  let {img, num, name, about, type}=poke; //destructuración para extraer los objetos del arreglo
  let html=`
  <img src='${img}' >
  ${num} El pokemon se llama ${name} y tambien ${about} TIPO ${type}`
  console.log(html);
  //implementar appenchild para hacer su tarjeta desde acá

  pokeDom.innerHTML=html;
}

function getData(){
  let firstPokemon = allPokemon[0]; // este es objeto Bulbasaur
  console.log(allPokemon[0]);
  return firstPokemon;
}


/*/////parte de botón todos los nombres
//evento DOM
let cardDom=document.querySelector('.pokeContainer2')
let pokemonName = [];

const buttonStart = document.getElementById('btnStart');
buttonStart.addEventListener('click', showAllNames);

function showAllNames() {
  const allPokemon = data.pokemon;
  console.log(allPokemon)
  for (let i = 0; i < allPokemon.length; i++) {
    pokemonName[i] =  allPokemon[i].name;

  }
  console.log(pokemonName)
  cardDom.innerHTML = pokemonName;
}*/
