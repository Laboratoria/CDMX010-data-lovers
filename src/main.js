
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

let checkboxTypePokemon1 = document.getElementById('planta');
let checkboxTypePokemon2 = document.getElementById('fuego');
let checkboxTypePokemon3 = document.getElementById('agua');
let checkboxTypePokemon4 = document.getElementById('normal');
let checkboxTypePokemon5 = document.getElementById('electrico');
let checkboxTypePokemon6 = document.getElementById('bicho');
let checkboxTypePokemon7 = document.getElementById('volador');
let checkboxTypePokemon8 = document.getElementById('veneno');
let checkboxTypePokemon9 = document.getElementById('roca');
let checkboxTypePokemon10 = document.getElementById('tierra');
let checkboxTypePokemon11 = document.getElementById('fantasma');
let checkboxTypePokemon12 = document.getElementById('psiquico');
let checkboxTypePokemon13 = document.getElementById('acero');
let checkboxTypePokemon14 = document.getElementById('lucha');
let checkboxTypePokemon15 = document.getElementById('hielo');
let checkboxTypePokemon16 = document.getElementById('dragon');
let checkboxTypePokemon17 = document.getElementById('siniestro');
let checkboxTypePokemon18 = document.getElementById('hada');

let positionArrayType1 = 7;
let positionArrayType2 = 8;
let positionArrayType3 = 9;
let positionArrayType4 = 10;
let positionArrayType5 = 11;
let positionArrayType6 = 12;
let positionArrayType7 = 13;
let positionArrayType8 = 14;
let positionArrayType9 = 15;
let positionArrayType10 = 16;
let positionArrayType11 = 17;
let positionArrayType12 = 18;
let positionArrayType13 = 19;
let positionArrayType14 = 20;
let positionArrayType15 = 21;
let positionArrayType16 = 22;
let positionArrayType17 = 23;
let positionArrayType18 = 24;




let typeDefinition= "grass"; 
let positionArrayType = 7;
let resultFilterType= [];
function checkedChangesCheckboxes(checkboxTypePokemon, positionArrayType){
  checkboxTypePokemon.addEventListener('change', e => {
  if(e.target.checked){
    typeDefinition= checkboxTypePokemon.value;
    console.log(typeDefinition);
    console.log(positionArrayType);
    pokemonTypeFilterAdd();
    
  }else{
    alert('Adiossssss');
  }
});
}

checkedChangesCheckboxes(checkboxTypePokemon1, positionArrayType1);
checkedChangesCheckboxes(checkboxTypePokemon2, positionArrayType2);
checkedChangesCheckboxes(checkboxTypePokemon3, positionArrayType3);
checkedChangesCheckboxes(checkboxTypePokemon4, positionArrayType4);
checkedChangesCheckboxes(checkboxTypePokemon5, positionArrayType5);
checkedChangesCheckboxes(checkboxTypePokemon6, positionArrayType6);
checkedChangesCheckboxes(checkboxTypePokemon7, positionArrayType7);
checkedChangesCheckboxes(checkboxTypePokemon8, positionArrayType8);
checkedChangesCheckboxes(checkboxTypePokemon9, positionArrayType9);
checkedChangesCheckboxes(checkboxTypePokemon10, positionArrayType10);
checkedChangesCheckboxes(checkboxTypePokemon11, positionArrayType11);
checkedChangesCheckboxes(checkboxTypePokemon12, positionArrayType12);
checkedChangesCheckboxes(checkboxTypePokemon13, positionArrayType13);
checkedChangesCheckboxes(checkboxTypePokemon14, positionArrayType14);
checkedChangesCheckboxes(checkboxTypePokemon15, positionArrayType15);
checkedChangesCheckboxes(checkboxTypePokemon16, positionArrayType16);
checkedChangesCheckboxes(checkboxTypePokemon17, positionArrayType17);
checkedChangesCheckboxes(checkboxTypePokemon18, positionArrayType18);


let allPokemonData = data.pokemon;
verDatos();
function verDatos(){
  for (const property in allPokemonData) {
    console.log(`${allPokemonData[property]}`);
  }
  console.log(allPokemon.name);
}
console.log(pokemon);
//allPokemon = data.pokemon;
let weaknessesEachPokemon= [];
let filterNumber = 0;
let numberWeaknessesEachPokemon= [];
let namePokePoke = ['w1','w2','w3','w4','w5','w6','w7','t1','t2','t3','t4','t5','t6','t7','t8','t9','t10','t11','t12','t13','t14','t15','t16','t17','t18'];

let conjunto=[];
let filtroFinal= [];
let resultFilterWeaknessesNumber=[];
let conjuntoDEtipos= [];
function pokemonTypeFilterAdd(){
  conjunto[typeDefinition] = [];
  allPokemon.forEach((pokemon) => {
    conjuntoDEtipos= conjunto[typeDefinition].push(pokemon.type);
    console.log(conjuntoDEtipos)
  });
for (const property in allPokemon) {
  console.log(`${object[property]}`);
}
console.log(allPokemon.name);
  let namesToPokemonType = function(pokemon){
    let memoriaT= pokemon.type;
    for (const value of memoriaT) {
      if(value ==typeDefinition){
        let nameType= pokemon.name;
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

let radioWeaknesses1 = document.getElementById('one');
let radioWeaknesses2 = document.getElementById('two');
let radioWeaknesses3 = document.getElementById('three');
let radioWeaknesses4 = document.getElementById('four');
let radioWeaknesses5 = document.getElementById('five');
let radioWeaknesses6 = document.getElementById('six');
let radioWeaknesses7 = document.getElementById('seven');
let valorFiltro = 0;

function checkedChangesRadiosWeaknesses(radioWeaknesses){
  radioWeaknesses.addEventListener('change', e => {
  if(e.target.checked){
    valorFiltro = parseInt(radioWeaknesses.value)
    console.log(valorFiltro);
  }else{
    console.log(bye);
  }
});
}

checkedChangesRadiosWeaknesses(radioWeaknesses1);
checkedChangesRadiosWeaknesses(radioWeaknesses2);
checkedChangesRadiosWeaknesses(radioWeaknesses3);
checkedChangesRadiosWeaknesses(radioWeaknesses4);
checkedChangesRadiosWeaknesses(radioWeaknesses5);
checkedChangesRadiosWeaknesses(radioWeaknesses6);
checkedChangesRadiosWeaknesses(radioWeaknesses7);
