
import { infoEachPokePrinc, infoEachPoke} from './infoData.js';
import {searchPokemon} from './data.js';
import data from './data/pokemon/pokemon.js';
import {filterFunctions} from './filtros.js';
//import pokemon from './data/pokemon/pokemon.js';
console.log(data.pokemon);
//document.getElementById("home-main--button").addEventListener('click', infoPrincPokemon);
document.getElementById("main-logo-container").style.display = 'none';
document.getElementById("main-filter-container").style.display = 'none';
const allPokemon = data.pokemon;
console.log(typeof allPokemon);

let namePokemon = [];

let nameAllPokemon = [];


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
  console.log(elements);
  agregarClase(elements);
})

function agregarClase (elements) {
  for(var i = 0; i < elements.length; i++){
    elements[i].addEventListener('click',function(){
    alert('Hola' + ' ' + this.value);
    infoEachPoke(this);
    });
  }
}





let expanded = false

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

const searchPoke = document.getElementById("searchByNameButton");

/*searchPoke.addEventListener("click", function() {
  let namePokeToSearch = document.getElementById("namePokeToSearch").value.toLowerCase();
  //console.log(namePokeToSearch);
  let pokeFounded = searchPokemon(allPokemon, namePokeToSearch);
  //console.log(pokeFounded);
  let parentNodeEle = document.getElementById("home-pokemon-info-container");
  function removeElementClass(parentNodeElement, className) {
      let childClass = parentNodeElement.getElementsByClassName(className);
      let lenght = childClass.length;
      for (let i = lenght-1; i >= 0; i--) {
          childClass[i].parentNode.removeChild(childClass[i]);
      }
  }
  removeElementClass(parentNodeEle, "ind-info-pokemon-container");
  let pokeFoundedInfo = infoEachPokePrinc(pokeFounded[0]);
  console.log(pokeFounded[0]);
  document.getElementById('home-pokemon-info-container').innerHTML = pokeFoundedInfo;
  let container = document.getElementById('home-pokemon-info-container');
  let child = container.getElementsByClassName('buttonEachPokeC');
  console.log(child);
  agregarClase(child);
})*/
/*
console.log(allPokemon[0].name);
*/
let filterNumber = 2;
//let allPokemon = data.pokemon;
let conjunto=[];
let filtroFinal= [];
let resultFilterWeaknessesNumber=[];
weaknessesNumberFilterAdd();
function weaknessesNumberFilterAdd(){
  conjunto[filterNumber] = [];
  let namesToWeaknessesNumber = function(element){
    let memoria= element.weaknesses;
    if(memoria.length== filterNumber){
      let nameWeaknesses= element.name; 
      conjunto[filterNumber].push(nameWeaknesses);
    } 
  }
  allPokemon.forEach(namesToWeaknessesNumber);
  console.log(conjunto[filterNumber]);
  resultFilterWeaknessesNumber = conjunto[filterNumber];
  console.log(resultFilterWeaknessesNumber);

}


let typeDefinition= "grass"; 
let positionArrayType = 7;
let resultFilterType= [];

function pokemonTypeFilterAdd(){
  conjunto[typeDefinition] = [];
  let namesToPokemonType = function(element){
    let memoriaT= element.type;
    for (const value of memoriaT) {
      if(value ==typeDefinition){
        let nameType= element.name;
        conjunto[typeDefinition].push(nameType);
      }
    }
  }
  allPokemon.forEach(namesToPokemonType);
  console.log(conjunto[filterNumber]);


  /*for (let i = 0; i < allPokemon.length; i++) {
    allTypePokemon[i]= allPokemon[i].type;
    let pokeTypeArrayOrigin= allTypePokemon[i];
    for(let j = 0; j < pokeTypeArrayOrigin.length; j++){
      if (pokeTypeArrayOrigin[j]==typeDefinition){
        conjunto[typeDefinition].push(allPokemon[i].name);
      } 
    }
}*/
namePokePoke.splice(positionArrayType,1,conjunto[typeDefinition]);
  // PARA TENER ODOS LOS NOMBRES DE LOS FILROS EN UN SOLO ARREGLO.
  let TodosLosNombresJuntos = [];
  for (const value of namePokePoke){
    let iMas1= namePokePoke.indexOf(value) + 1;
    let iMenos6= namePokePoke.indexOf(value)-6;
    if(value == 'w'+ iMas1){
      //console.log('w'+ iMas1);
    } else if(value == 't' + iMenos6){
      //console.log('t'+ iMenos6);
    } else {
      let arrayN= value;
      //console.log(arrayN);
      for(const value of arrayN){
        let cadaNamePoke= value;
        //console.log(cadaNamePoke);
        TodosLosNombresJuntos.push(cadaNamePoke);
      }

    }
  }
}

