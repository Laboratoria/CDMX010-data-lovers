
import { infoEachPokePrinc, setClass} from './infoData.js';
import {searchPokemon} from './data.js';
import data from './data/pokemon/pokemon.js';
//import pokemon from './data/pokemon/pokemon.js';
//console.log(data.pokemon);
document.getElementById("main-logo-container").style.display = 'none';
document.getElementById("main-filter-container").style.display = 'none';
const allPokemon = data.pokemon;
//console.log(typeof allPokemon);
let namePokemon = [];
let nameAllPokemon = [];

//Función para mostrar todos los pokemones
let infoPrincPokemon = document.getElementById("home-main--button");
infoPrincPokemon.addEventListener("click", function () {
  document.getElementById("home-main-section--welcome").style.display = 'none';
  document.getElementById("home-main-section--img").style.display = 'none';
  document.getElementById("main-logo-container").style.display = 'flex';
  document.getElementById("main-filter-container").style.display = 'flex';
  let infoPrinPoke = "";
  allPokemon.forEach((pokemon) => {
    infoPrinPoke += infoEachPokePrinc(pokemon);
    namePokemon = nameAllPokemon.push(pokemon.name);
  });
  document.getElementById('home-pokemon-info-container').innerHTML = (infoPrinPoke);
  let elements = document.getElementsByClassName('buttonEachPokeC');
  //console.log(elements);
  setClass(elements);
})

//Funciones de caja de filtros
function showCheckboxesNumber() {
  let checkboxes = document.getElementById("checkboxesNumber");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}
document.getElementById("selectWeaknessesNumber").addEventListener('click', showCheckboxesNumber);

function showCheckboxesType() {
  let checkboxes = document.getElementById("checkboxesType");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
      checkboxes.style.display = "none";
      expanded = false;
    }
}
document.getElementById("selectPokemonType").addEventListener('click',  showCheckboxesType);

//Función de búsqueda
const searchPoke = document.getElementById("searchByNameButton");
searchPoke.addEventListener("click", function() {
  let namePokeToSearch = document.getElementById("namePokeToSearch").value.toLowerCase();
  //console.log(namePokeToSearch);
  let pokeFounded = searchPokemon(allPokemon, namePokeToSearch);
  //console.log(pokeFounded);
  let pokeFoundedInfo = infoEachPokePrinc(pokeFounded[0]);
  console.log(pokeFounded[0]);
  document.getElementById('home-pokemon-info-container').innerHTML = pokeFoundedInfo;
  let container = document.getElementById('home-pokemon-info-container');
  let child = container.getElementsByClassName('buttonEachPokeC');
  console.log(child);
  setClass(child);
})

