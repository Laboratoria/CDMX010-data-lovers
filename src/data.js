
import data from './data/pokemon/pokemon.js';
let allPokemon = data.pokemon;

export function searchPokemon(data, pokeToSearch) {
  let pokemonFounded = data.find((searchName) => {
    return searchName.name === pokeToSearch;
  });
  return pokemonFounded;
}

export let searchEvolutions = (pokemon, evolName, array) => {
  function filterPokeEv (pokemon){
    let evolution = pokemon.evolution;
    if (Object.keys(evolution).includes(evolName)) {
      let nextEvName = evolution[evolName][0]['name'];
      let nextEv = allPokemon.find((pokemon) => pokemon.name === nextEvName);
      if (nextEv !== undefined) {
        if (evolName == 'next-evolution') {
          array.push(nextEv);
          filterPokeEv(nextEv);
        } else {
          array.unshift(nextEv);
          filterPokeEv(nextEv);
        }
      }
    }
  }
  filterPokeEv(pokemon);
  return array;
}