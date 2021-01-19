import { infoEachPokePrinc, infoEachPoke} from './infoData.js';
import {searchEvolutions, searchPokemon} from './data.js';
import data from './data/pokemon/pokemon.js';
import{weaknessesNumberFilterAdd, weaknessesNumberFilterQuit, pokemonTypeFilterAdd, pokemonTypeFilterQuit}from'./filtros.js';


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
let expanded2 = false;
function showCheckboxesNumber() {
  let checkboxes = document.getElementById("checkboxesNumber");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
    if(expanded2==true){
      document.getElementById("selectPokemonType").click();
    }
    
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

document.getElementById("selectWeaknessesNumber").addEventListener('click', showCheckboxesNumber);

function showCheckboxesType() {
  let checkboxes = document.getElementById("checkboxesType");
  if (!expanded2) {
    checkboxes.style.display = "block";
    expanded2 = true;
    if(expanded==true){
      document.getElementById("selectWeaknessesNumber").click();
    }
    //document.getElementById("selectWeaknessesNumber").click();
  } else {
      checkboxes.style.display = "none";
      expanded2 = false;
    }
}

document.getElementById("selectPokemonType").addEventListener('click',  showCheckboxesType);

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

//  VARIABLE FINAL DE TODOS LOS FILTROS ///
let finalFilter = nameAllPokemon;

/// AL PRESIONAR ENTER EN EL BUSCADOR SE EJECUTA LA FUNCIÓN DEL BOTÓN SEARCH
let input = document.getElementById('namePokeToSearch');
input.addEventListener("keyup", e => {
  console.log(e.key);
  if(e.key=='Enter'){
    console.log('e.key');
    e.preventDefault();
    document.getElementById("searchByNameButton").click();
  /// AL ESCRIBIR EN EL INPUT SEARCH SE EJECUTA LA FUNCIÓN "REAL TIME SEARCH"
  }else{
    realTimeSearch();
  }
});

//FUNCIÓN "REAL TIME SEARCH"
function realTimeSearch(){
  finalFilter = [];
  let texto = input.value.toLowerCase();
  for( const nombre of nameAllPokemon){
    if(nombre.indexOf(texto)!==-1){
      finalFilter.push(nombre);
    }
  }
  getObjects(finalFilter);
}

// AL PRESIONAR EL BOTON "X" (CLEAR) DEL INPUT SEARCH
input.onsearch= ()=>{
  finalFilter= nameAllPokemon
  getObjects(finalFilter);
}



//código agregado para mostrar resultados

function getObjects (nameFiltred) {
let indexNamesFiltredFinal = []; //metí esta variable  la función para que quedara vacía en cada función
let objectsPokeFil = []; // y esta también :)
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
  //console.log(child);
  setFunction(child);
  //console.log(infoPrinPokeFil);
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


////////VARIABLES PARA FILTRO DEBILIDADES Y TIPO///////
//let finalFilter = nameAllPokemon;
let valorFiltro = 0;
let filterNumber = 0;
let typeDefinition= "grass"; 
let positionArrayType = 7;

///////////FILTRO NUM DEBILIDADES/////////////////
let radioWeaknesses1 = document.getElementById('one');
let radioWeaknesses2 = document.getElementById('two');
let radioWeaknesses3 = document.getElementById('three');
let radioWeaknesses4 = document.getElementById('four');
let radioWeaknesses5 = document.getElementById('five');
let radioWeaknesses6 = document.getElementById('six');
let radioWeaknesses7 = document.getElementById('seven');
let radioQuitFilter = document.getElementById('removeFilterLink');
let labelQuitFilter = document.getElementById('removeFilterOption');
labelQuitFilter.style.display= 'none';

function checkedChangesRadiosWeaknesses(radioWeaknesses){
  radioWeaknesses.addEventListener('change', e => {
    if(e.target.checked){
      valorFiltro = parseInt(radioWeaknesses.value);
      console.log(valorFiltro);
      filterNumber= valorFiltro; 
      finalFilter= weaknessesNumberFilterAdd(filterNumber, allPokemon, finalFilter);
      document.getElementById('removeFilterOption').style.display= 'block';
      getObjects(finalFilter);
      if(finalFilter.length==0){
        alert('oops! No hay pokemones que cumplan con estas características, prueba con otro filtrado');
      }
    }
  });
}

//////////QUITAR FILTRO NUM DEBILIDADES//////////
function removeNumberWeaknesseFilter(){
  radioQuitFilter.addEventListener('change', e => {
    if(e.target.checked){
      finalFilter= weaknessesNumberFilterQuit(finalFilter, nameAllPokemon);
      labelQuitFilter.style.display= 'none';
      getObjects(finalFilter);
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
removeNumberWeaknesseFilter();

/////////////FILTRO POKEMON TYPE//////////////////////////
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
    finalFilter= pokemonTypeFilterAdd(typeDefinition, allPokemon, positionArrayType, finalFilter);
    getObjects(finalFilter);
    if(finalFilter.length==0){
      alert('oops! No hay pokemones que cumplan con estas características, prueba con otro filtrado');
    }
  }else{ /////QUITAR FILTRO TIPO POKEMON///////////
    typeDefinition= checkboxTypePokemon.value;
    positionArrayType = positionArrayTypeDefinition;
    console.log(typeDefinition);
    console.log(positionArrayType);
    finalFilter= pokemonTypeFilterQuit(positionArrayType, finalFilter, nameAllPokemon);
    getObjects(finalFilter);
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

// UNCHECKED FILTROS PRESENTES AL DAR CLICK AL INPUT SEARCH//
input.addEventListener('click', ()=>{
  if(radioQuitFilter.checked){
    console.log('no hay filtro por debilidades');

  }else{
    radioQuitFilter.click();
  }
  if(checkboxTypePokemon1.checked){
    checkboxTypePokemon1.click();
  }
  if(checkboxTypePokemon2.checked){
    checkboxTypePokemon2.click();
  }
  if(checkboxTypePokemon3.checked){
    checkboxTypePokemon3.click();
  }
  if(checkboxTypePokemon4.checked){
    checkboxTypePokemon4.click();
  }
  if(checkboxTypePokemon5.checked){
    checkboxTypePokemon5.click();
  }
  if(checkboxTypePokemon6.checked){
    checkboxTypePokemon6.click();
  }
  if(checkboxTypePokemon7.checked){
    checkboxTypePokemon7.click();
  }
  if(checkboxTypePokemon8.checked){
    checkboxTypePokemon8.click();
  }
  if(checkboxTypePokemon9.checked){
    checkboxTypePokemon9.click();
  }
  if(checkboxTypePokemon10.checked){
    checkboxTypePokemon10.click();
  }
  if(checkboxTypePokemon11.checked){
    checkboxTypePokemon11.click();
  }
  if(checkboxTypePokemon12.checked){
    checkboxTypePokemon12.click();
  }
  if(checkboxTypePokemon13.checked){
    checkboxTypePokemon13.click();
  }
  if(checkboxTypePokemon14.checked){
    checkboxTypePokemon14.click();
  }
  if(checkboxTypePokemon15.checked){
    checkboxTypePokemon15.click();
  }
  if(checkboxTypePokemon16.checked){
    checkboxTypePokemon16.click();
  }
  if(checkboxTypePokemon17.checked){
    checkboxTypePokemon17.click();
  }
  if(checkboxTypePokemon18.checked){
    checkboxTypePokemon18.click();
  }
})
