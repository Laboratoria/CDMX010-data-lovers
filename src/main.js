
import { infoEachPokePrinc, infoEachPoke} from './infoData.js';
import {searchPokemon} from './data.js';
import data from './data/pokemon/pokemon.js';
//import pokemon from './data/pokemon/pokemon.js';
console.log(data.pokemon);
//document.getElementById("home-main--button").addEventListener('click', infoPrincPokemon);

let allPokemon = data.pokemon;
console.log(typeof allPokemon);
let namePokemon = [];

let nameAllPokemon = [];


let infoPrincPokemon = document.getElementById("home-main--button");

infoPrincPokemon.addEventListener("click", function () {
  document.getElementById("home-section-info-container").style.display = 'grid';
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
  setFunction(elements);
})

function setFunction (elements) {
  for(var i = 0; i < elements.length; i++){
    elements[i].addEventListener('click',function(){
    //alert('Hola' + ' ' + this.value);
    infoEachPoke(this);
    });
  }
}

let expanded = false;
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

//document.getElementById("selectPokemonType").addEventListener('click',  showCheckboxesType);

const searchPoke = document.getElementById("searchByNameButton");

searchPoke.addEventListener("click", function() {
  let namePokeToSearch = document.getElementById("namePokeToSearch").value.toLowerCase();
  let pokeFounded = searchPokemon(allPokemon, namePokeToSearch);
  let pokeFoundedInfo = infoEachPokePrinc(pokeFounded[0]);
  document.getElementById('home-pokemon-info-container').innerHTML = pokeFoundedInfo;
  let container = document.getElementById('home-pokemon-info-container');
  let child = container.getElementsByClassName('buttonEachPokeC');
  setFunction(child);
})
