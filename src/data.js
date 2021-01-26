import data from './data/pokemon/pokemon.js';


export const filterByRegion = (region) => {
  const pokemons = data.pokemon.filter(item =>{
    return item.generation.name === region
  })

  return pokemons;
}

export const getPokemonKanto = data.pokemon.filter(item =>{
  return item.generation.name === 'kanto'
})

export const getPokemonJohto = data.pokemon.filter(item =>{
  return item.generation.name === 'johto'
})



//import data from './data/pokemon/pokemon.js';
//import { createCard } from './main.js';


// tarea: domContentLoaded
// tarea: window.addEventListener









/*
function cartasKanto () {
  let result;
  if (card === 'kanto) 

}
*/

/*

let pkm = [];

const allPokemon = pkm;
console.log(allPokemon);


let pokemonRegion = allPokemon.filter(e => e.name === 'kanto');
console.log(pokemonRegion);

*/

/*export const pokemonRegion= () => { //PARA USAR ESTA FUNCIÓN EN OTRO JS DE TIPO MODULO
  //treaer la data
  //manipular la data por fecth y manipularla
  //¿cómo acceder a los elementos de la lista?
  //
 //map/filter/  acción de filtrar u ordenar
  return 'pokemonRegion';
};*/



