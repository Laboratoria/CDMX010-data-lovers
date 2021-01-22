import data from './data/pokemon/pokemon.js';

import { getPokemonKanto, getPokemonJohto, filterByRegion } from './data.js';
console.log(getPokemonKanto, getPokemonJohto);

// ESTA FUNCION CREA LAS TARJETAS DE CADA POKEMON DESDE JS ${pokemon.img}
export function createCard(pokemon) {
  let card = `
    <div class="pokemon-card">
      <img src="${pokemon.img}" alt="">
      <div class="circulo"></div>
      <h5 class="pokemon-id">${pokemon.num}</h5>
      <h5 class="pokemon-nombre">${pokemon.name}</h5>
      <h5 class="tipo">${pokemon.type}</h5>
    </div>
  `;
  return card;
}

// ESTA FUNCION COLOCA INFORMACION DE CADA POKEMON DESDE JS
function setCards(pokemones) { //recibe un argumento
  let containerCards = document.getElementById('contenedor-pokemon');
  let emptyCard = '';
  pokemones.forEach(poke => emptyCard += createCard(poke));

  containerCards.innerHTML = emptyCard;
}

setCards(data.pokemon);// parametro

// tarea: domContentLoaded
// tarea: window.addEventListener

//botón evento para filtrar por región

let btnKanto = document.querySelector('.regionKanto'); //selecciono el boton kanto
btnKanto.addEventListener ('click',function () {
  const pokemonsKanto = filterByRegion('kanto'); //funcion para el filtrado de kanto
  console.log(pokemonsKanto); //ver que estoy trayendo la información
  setCards(pokemonsKanto); //
  //console.log(setCards(pokemonsKanto));
  document.querySelector('.regionKanto').innerHTML = setCards(pokemonsKanto); //pintar esa funcion en la pantalla
})











/*
export let pokemonKanto = 2 + 2;
console.log(pokemonKanto);


export let uno = ${pokemon.name};
*/




