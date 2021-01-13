import { infoEachPokePrinc, infoEachPoke} from './infoData.js';
import {searchPokemon} from './data.js';
import data from './data/pokemon/pokemon.js';
//import pokemon from './data/pokemon/pokemon.js';
console.log(data.pokemon);
//document.getElementById("home-main--button").addEventListener('click', infoPrincPokemon);
document.getElementById("main-logo-container").style.display = 'none';
document.getElementById("main-filter-container").style.display = 'none';
let allPokemon = data.pokemon;
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
  //console.log(elements);
  agregarClase(elements);
})

function agregarClase (elements) {
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
  console.log(typeof pokeFounded[0]);
  console.log(typeof pokeFounded);
  console.log(pokeFounded[0]);
  document.getElementById('home-pokemon-info-container').innerHTML = pokeFoundedInfo;
  let container = document.getElementById('home-pokemon-info-container');
  let child = container.getElementsByClassName('buttonEachPokeC');
  console.log(child);
  agregarClase(child);
})

///////////FiltroDebilidades/////////////////
let filterNumber = 0;
let conjunto=[];
let filtroFinal= [];
let resultFilterWeaknessesNumber=[];

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
  //agregado Brenda
  getObjects(resultFilterWeaknessesNumber); //obtiene los elementos finales y crea contenedor de cada uno
}

//código agregado para mostrar resultados
let indexNamesFiltredFinal = [];
let objectsPokeFil = [];
function getObjects (nameFiltred) {
  nameFiltred.forEach((element) => {
    let indexNamesFiltred = nameAllPokemon.indexOf(element);
    indexNamesFiltredFinal.push(indexNamesFiltred);
    let objectsPoke = allPokemon[indexNamesFiltred];
    objectsPokeFil.push(objectsPoke);
    //console.log(objectsPoke);
  })
  let infoPrinPokeFil = "";
  objectsPokeFil.forEach((pokemon) => {
    infoPrinPokeFil += infoEachPokePrinc(pokemon);
  });
  document.getElementById('home-pokemon-info-container').innerHTML = infoPrinPokeFil;
  let container = document.getElementById('home-pokemon-info-container');
  let child = container.getElementsByClassName('buttonEachPokeC');
  console.log(child);
  agregarClase(child);
  console.log(infoPrinPokeFil);
}
//
/*
  if(resultFilterType.length==0){
    filtroFinal= resultFilterWeaknessesNumber;
  } else{
    for(const value of resultFilterWeaknessesNumber){
      let namepokeD= value;
      for(const value of resultFilterType){
        if(value == namepokeD){
          filtroFinal.push(value);
        }
      }
    }
  }
  console.log(filtroFinal);
  //mi código
  console.log(nameAllPokemon);
}*/

function weaknessesNumberFilterQuit(){
  resultFilterWeaknessesNumber =[];
  if(resultFilterType.length==0){
    filtroFinal= resultFilterWeaknessesNumber;
    console.log('no hay ningun filtro');
  } else{
    filtroFinal= resultFilterType; 
  }
    console.log(filtroFinal);
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
      valorFiltro = parseInt(radioWeaknesses.value);
      console.log(valorFiltro);
      filterNumber= valorFiltro; 
    weaknessesNumberFilterAdd();
    }else{
      valorFiltro = parseInt(radioWeaknesses.value);
    console.log(valorFiltro);
    filterNumber= valorFiltro; 
    console.log('borrar');
    weaknessesNumberFilterQuit();
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

  /*
/////////////FILTRO POKEMON TYPE//////////////////////////
let namePokePoke = ['w','t1','t2','t3','t4','t5','t6','t7','t8','t9','t10','t11','t12','t13','t14','t15','t16','t17','t18'];
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
  console.log(allPokemon);
  console.log(conjunto[filterNumber]);
namePokePoke.splice(positionArrayType,1,conjunto[typeDefinition]);
  // PARA TENER TODOS LOS NOMBRES DE LOS FILROS EN UN SOLO ARREGLO.
  let TodosLosNombresJuntos = [];
  for (const value of namePokePoke){
    let posisionValue = namePokePoke.indexOf(value);
    if(value == 'w'){
      //console.log('w'+ iMas1);
    } else if(value == 't' + posisionValue){
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
  console.log(namePokePoke);
  console.log(TodosLosNombresJuntos);
  let deleteNamesRepeat = TodosLosNombresJuntos.filter((item,index)=>{
    return TodosLosNombresJuntos.indexOf(item) === index;
  })
  console.log(deleteNamesRepeat);
  resultFilterType= deleteNamesRepeat;
  //AQUI EMPIEZA EL DEBUGGGGGGGG
  if(resultFilterType.length==0){
    filtroFinal= resultFilterWeaknessesNumber;
  } else{
    for(const value of resultFilterWeaknessesNumber){
      let namepokeD= value;
      for(const value of resultFilterType){
        if(value == namepokeD){
          filtroFinal.push(value);
        }
      }
    }
  }
  console.log(filtroFinal);
}
//pokemonTypeFilter()
function pokemonTypeFilterQuit(){
  let filterTypeNumber= positionArrayType;
  console.log(filterTypeNumber);
  namePokePoke.splice(positionArrayType,1,'t' + filterTypeNumber);
  console.log(namePokePoke); 
  // PARA TENER TODOS LOS NOMBRES DE LOS FILROS EN UN SOLO ARREGLO.
  let TodosLosNombresJuntos = [];
  for (const value of namePokePoke){
    let posisionValue = namePokePoke.indexOf(value);
    if(value == 'w'){
      //console.log('w'+ iMas1);
    } else if(value == 't' + posisionValue){
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
  console.log(TodosLosNombresJuntos);
  resultFilterType= TodosLosNombresJuntos;
  //console.log(resultFilterType);
  //AQUÍ EMPIEZA EL DEBUGGGG
  if(resultFilterType.length==0){
    filtroFinal= resultFilterWeaknessesNumber;
  } else if(resultFilterType.length!=0 && resultFilterType.length==0){
    filtroFinal= resultFilterType; 
  } else if(resultFilterType.length!=0 && resultFilterType.length!=0){
    for(const value of resultFilterWeaknessesNumber){
      let namepokeD= value;
      for(const value of resultFilterType){
        if(value == namepokeD){
          filtroFinal.push(value);
        }
      }
    }
  }
    console.log(filtroFinal);
}
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
let positionArrayType1 = 1;
let positionArrayType2 = 2;
let positionArrayType3 = 3;
let positionArrayType4 = 4;
let positionArrayType5 = 5;
let positionArrayType6 = 6;
let positionArrayType7 = 7;
let positionArrayType8 = 8;
let positionArrayType9 = 9;
let positionArrayType10 = 10;
let positionArrayType11 = 11;
let positionArrayType12 = 12;
let positionArrayType13 = 13;
let positionArrayType14 = 14;
let positionArrayType15 = 15;
let positionArrayType16 = 16;
let positionArrayType17 = 17;
let positionArrayType18 = 18;
function checkedChangesCheckboxes(checkboxTypePokemon, positionArrayTypeDefinition){
  checkboxTypePokemon.addEventListener('change', e => {
  if(e.target.checked){
    typeDefinition= checkboxTypePokemon.value;
    positionArrayType = positionArrayTypeDefinition;
    console.log(typeDefinition);
    console.log(positionArrayType);
    pokemonTypeFilterAdd();
    
  }else{
    typeDefinition= checkboxTypePokemon.value;
    positionArrayType = positionArrayTypeDefinition;
    console.log(typeDefinition);
    console.log(positionArrayType);
    pokemonTypeFilterQuit();
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
checkedChangesCheckboxes(checkboxTypePokemon18, positionArrayType18);*/