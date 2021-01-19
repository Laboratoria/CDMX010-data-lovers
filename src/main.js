
import { infoEachPokePrinc, infoEachPoke} from './infoData.js';
import {searchEvolutions, searchPokemon} from './data.js';
import data from './data/pokemon/pokemon.js';

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
  let pokeFounded = 0;
  let namePokeToSearch = document.getElementById("namePokeToSearch").value.toLowerCase();
  document.getElementById('home-pokemon-info-container').style.display='none';
  if (nameAllPokemon.includes(namePokeToSearch)) {
    document.getElementById('main-errormsg-container').style.display='none';
    document.getElementById('main-searchPoke-container').style.display='flex';
    pokeFounded = searchPokemon(allPokemon, namePokeToSearch);
    let pokeFoundedInfo = infoEachPokePrinc(pokeFounded[0]);
    document.getElementById('main-searchPoke-container').innerHTML = pokeFoundedInfo;
    let container = document.getElementById('main-searchPoke-container');
    let child = container.getElementsByClassName('buttonEachPokeC');
    setFunction(child);
  } else {
    document.getElementById('main-errormsg-container').style.display='flex';
    document.getElementById('main-searchPoke-container').style.display='none';
    let container = `
      <div class="main-errormsg">
        <div class="main-errormsg-message">
          <p>¡Ups! No encontramos ningun pokemon con ese nombre</p>
        </div>
        <figure>
          <img src="./assets/pikachu-search.png">
        </figure>
      </div>
      <div>
        <button class= "main-errormsg-button-back" id= "main-errormsg-button-back">Regresar al inicio</button>
      </div>
    `
    document.getElementById('main-errormsg-container').innerHTML = container;
    document.getElementById('main-errormsg-button-back').addEventListener("click", function() {
    document.getElementById('home-pokemon-info-container').style.display='block';
    });
  }
  
  document.getElementById('main-searchPoke-container');
  let button = document.createElement('button');
  button.className = 'main-search-button-back';
  button.innerText= 'Regresar al inicio';
  button.setAttribute = ('onclick');
  button.onclick = function () {document.getElementById('home-pokemon-info-container').style.display='grid';};
  document.getElementById('main-searchPoke-container').appendChild(button);
})



/*searchPoke.addEventListener("click", function() {
  document.getElementById('home-pokemon-info-container').style.display= 'none';
  //document.getElementById('home-section-info-container').style.display= 'flex';
  let namePokeToSearch = document.getElementById("namePokeToSearch").value.toLowerCase();
  let pokeFounded = searchPokemon(allPokemon, namePokeToSearch);
  let pokeFoundedInfo = infoEachPokePrinc(pokeFounded[0]);
  document.getElementById('main-searchPoke-container').style.display= 'flex';
  document.getElementById('main-searchPoke-container').innerHTML = pokeFoundedInfo;
  let container = document.getElementById('main-searchPoke-container');
  let child = container.getElementsByClassName('buttonEachPokeC');
  setFunction(child);
})*/