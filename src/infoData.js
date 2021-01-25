import data from './data/pokemon/pokemon.js';
import {searchEvolutions} from './data.js';

let allPokemon = data.pokemon;
let nameAllPokemon = [];

export const infoEachPokePrinc = (pokemon) => {
    let containerPrinc = `
    <div class = 'ind-info-pokemon-container'>
      <div class = 'img-pokemon-container'>
        <button class= "buttonEachPokeC" id= '${pokemon.num}'>
            <img src = '${pokemon.img}'>
        </button>
      </div>
      <div class = 'text-pokemon-container'>
        <p>${pokemon.name}</p>
        <p>${pokemon.num}</p>
      </div>
    </div>`
    nameAllPokemon.push(pokemon.name);
    return containerPrinc
  }

function infoEachPoke (pokemon) {
  //console.log(pokemon)
  let objectPoke = pokemon;
  let rarityPoke = objectPoke["pokemon-rarity"];
  let sizePoke= objectPoke.size;

  let dataSheet = `
      <div class = "data-sheet" id= "${objectPoke.name}">
        <div class = "exit-container">
          <button class = "exit-button">
            <img src= "./assets/icon-Xgray.svg" class= "exit-icon">
          </button>
        </div>
        <div class="data-sheet-head">
          <div class= "data-sheet-img-container">
            <img src = "${objectPoke.img}">
          </div>
          <div class="general-data">
            <h2>${objectPoke.name}</h2>
            <p>No. Pokedex: ${objectPoke.num}</p>
            <p>Tipo: ${objectPoke.type}</p>
            <p>Rareza: ${rarityPoke}</p>
          </div>
        </div>
      <div/>
      <div class="data-sheet-body">
          <div class="data-sheet-resistant-container" id= "data-sheet-resistant-container">
            <h3>Resistente:</h3>
          </div>
          <div class= "data-sheet-weaknesses-container" id= "data-sheet-weaknesses-container">
            <h3>Debilidades:</h3>
          </div>
          <div class="physical-data-container">
            <h4>Peso: </h4>
            <p>${sizePoke.weight}</p>
            <h4>Altura:</h4>
            <p>${sizePoke.height}</p>
          </div>
      </div>
      <div class="data-sheet-footer" id = "data-sheet-footer">
        <div class= "evolution-container" id="evolution-container">
          <div class= "preEvolution-container" id = "prevEvolution-container">
            <h4>Evoluciones anteriores</h4>
            <div class= "preEvolutionImg-container" id = "prevEvolutionImg-container"></div>
          </div>
          <div class= "currencyState-container" id = "currencyState-container">
            <h4>Estado actual</h4>
            <div class="currencyStateImg-container" id = "currencyStateImg-container" ></div>
          </div>
          <div class= "nextEvolution-container" id= "nextEvolution-container">
            <h4>Evoluciones próximas</h4>
            <div class= "nextEvolutionImg-container" id = "nextEvolutionImg-container"></div>
            <div class= "nextEvolutionCandies-container" id = "nextEvolutionCandies-container"></div>
          </div>
      </div>`
  return dataSheet
}

export const getFunction = (pokemon) => {
  //console.log(pokemon);
  let dataSheet = "";
  let element = document.getElementById(pokemon.num);
  //console.log(element);
    document.getElementById(pokemon.num).addEventListener('click', function () {
      //console.log('Hola');
    document.getElementById('data-sheet-container').style.display= 'flex';
    dataSheet = infoEachPoke(pokemon);
    //console.log(dataSheet);
    document.getElementById('data-sheet-container').innerHTML = dataSheet;
    otherCharacteristicsPoke('data-sheet-weaknesses-container', pokemon.weaknesses);
    otherCharacteristicsPoke('data-sheet-resistant-container', pokemon.resistant);
    evolutions(pokemon);
    let nodoABorrar = document.getElementById(pokemon.name);
    let exit = document.getElementsByClassName('exit-button');
    for (const buttonExit of exit) { 
      buttonExit.addEventListener('click', function () {
      nodoABorrar.parentNode.removeChild(nodoABorrar);
      document.getElementById('data-sheet-container').style.display = 'none';
  })}
  })
}

function otherCharacteristicsPoke (parentNode, property) {
  let parent = document.getElementById(parentNode);
  for (const element of property) {
    let pNode = document.createElement('p');
    let text = document.createTextNode(element);
    pNode.appendChild(text);
    parent.append(pNode);
  }
}

function evolutions (pokemon) {
  let currencyPoke = addImgs(pokemon);
  let nextEvolutions = [];
  let prevEvolutions = [];
  searchEvolutions(pokemon, 'next-evolution', nextEvolutions);
  searchEvolutions(pokemon, 'prev-evolution', prevEvolutions);
  let nextEvoCont = "";
  let prevEvoCont= "";
  let candiesCont = "";
  evaluate(nextEvolutions, nextEvoCont, 'nextEvolutionImg-container', 'nextEvolution-container');
  evaluate(prevEvolutions, prevEvoCont, 'prevEvolutionImg-container', 'prevEvolution-container');
  addCandies(nextEvolutions, candiesCont);
  document.getElementById('currencyStateImg-container').innerHTML = currencyPoke;
}

function evaluate (arrayEv, arrayCont, containeradd, containererase) {
  if (Object.keys(arrayEv).length!==0) {
    createContainersEv (arrayEv, arrayCont, containeradd);
  } else {
    document.getElementById(containererase).style.display= 'none';
  }
}

function createContainersEv (arrayEv, arrayCont, containeradd) {
  arrayEv.forEach((pokemon) => {
    arrayCont += addImgs (pokemon);
  });
  document.getElementById(containeradd).innerHTML= arrayCont;
  return arrayCont;
}

function addImgs (pokemon) {
  let containers = `
  <div class= 'imgEvolution-container'>
    <img src = ${pokemon.img}>
    <p>${pokemon.name}</p>
  </div>
  `
  return containers
}

function addCandies (arrayNextEv, arrayCandies) {
  arrayNextEv.forEach((pokemon) => {
    arrayCandies += createContCandy(pokemon);
  });
  document.getElementById("nextEvolutionCandies-container").innerHTML= arrayCandies;
  return arrayCandies
}

function createContCandy (pokemon) {
  let candies = pokemon.evolution['prev-evolution'][0]['candy-cost'];
  let candiesCont = `
  <p>${candies} caramelos</p>
  `;
  return candiesCont
}