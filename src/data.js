
import data from './data/pokemon/pokemon.js';
let allPokemon = data.pokemon;
let evolution = 0;

export function searchPokemon(data, pokeToSearch) {
  let pokemonFounded = data.filter((searchName) => {
    return searchName.name === pokeToSearch;
  });
  return pokemonFounded;
}

export let searchEvolutions = (pokemon, evolName, array) => {
  function filterPokeEv (pokemon){
    evolution = pokemon.evolution;
    if (Object.keys(evolution).includes(evolName)) {
      let nextEvName = evolution[evolName][0]['name'];
      let nextEv = allPokemon.find((pokemon) => pokemon.name === nextEvName);
     // console.log(nextEv);
      if (evolName == 'next-evolution') {
        array.push(nextEv);
        filterPokeEv(nextEv);
      } else {
        array.unshift(nextEv);
        filterPokeEv(nextEv);
      }
    }
  }
  filterPokeEv(pokemon);
  return array;
}