
import data from './data/pokemon/pokemon.js';
console.log(data.pokemon);

export function searchPokemon(data, pokeToSearch) {
  let pokemonFounded = data.filter((searchName) => {
    return searchName.name === pokeToSearch;
  });
  return pokemonFounded;
}

export const anotherExample = () => {
  return 'OMG';
};
