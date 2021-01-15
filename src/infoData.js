import data from './data/pokemon/pokemon.js';
import {searchEvolutions} from './data.js';
console.log(data.pokemon);

let allPokemon = data.pokemon;
let namePokemon = [];
let nameAllPokemon = [];



export const infoEachPokePrinc = (pokemon) => {
  function infoPokeContainer (pokemon) {
    return `
    <div class = 'ind-info-pokemon-container' id= 'ind-info-pokemon-container'>
      <div class = 'img-pokemon-container'>
        <button class= "buttonEachPokeC" value='${pokemon.name}'>
          <a>
            <img src = '${pokemon.img}'>
          </a>
        </button>
      </div>
      <div class = 'text-pokemon-container'>
        <p>${pokemon.name}</p>
        <p>${pokemon.num}</p>
      </div>
    </div>`
  };
  namePokemon = nameAllPokemon.push(pokemon.name);
  let infoPrinPoke = infoPokeContainer(pokemon);
  return infoPrinPoke;
  }

export const infoEachPoke = (btnValNamePoke) => {
  document.getElementById("data-sheet-container").style.display = 'block';
  let namePoke = btnValNamePoke.value;
  let index = parseInt(nameAllPokemon.indexOf(namePoke));
  let objectPoke = allPokemon[index];
  let rarityPoke = objectPoke["pokemon-rarity"];
  let sizePoke= objectPoke.size;

  let dataSheet = `
      <div class = "data-sheet" id= "${objectPoke.name}">
        <div class = "exit-container">
          <button class = "exit-button" id= "${objectPoke.num}">
            <img src= "./assets/icon-Xgray.svg" class= "exit-icon">
          </button>
        </div>
        <div class="data-sheet-head">
          <div class= "data-sheet-img-container">
            <img src = "${objectPoke.img}">
          </div>
          <div class="general-data">
            <h2>${objectPoke.name}</h2>
            <br>
            <p>No. Pokedex: ${objectPoke.num}</p>
            <p>Tipo: ${objectPoke.type}</p>
            <p>Rareza: ${rarityPoke}</p>
          </div>
        </div>
      <div/>
      <div class="data-sheet-body">
        <div class="data-sheet-body-section1">
          <div class="data-sheet-resistant-container" id= "data-sheet-resistant-container">
            <h3>Resistente:</h3>
          </div>
          <div class= "data-sheet-weaknesses-container" id= "data-sheet-weaknesses-container">
            <h3>Debilidades:</h3>
          </div>
        </div>
        <div class="data-sheet-body-section2">
          <div class="physical-data-container">
            <h4>Peso: </h4>
            <p>${sizePoke.weight}</p>
            <h4>Altura:</h4>
            <p>${sizePoke.height}</p>
          </div>
        </div>
      </div>
      <div class="data-sheet-footer" id = "data-sheet-footer">
        <div class= "evolution-container" id="evolution-container">
          <div class= "preEvolution-container" id = "prevEvolution-container">
            <h1>Evoluciones anteriores</h1>
            <div class= "preEvolutionImg-container" id = "prevEvolutionImg-container"></div>
          </div>
          <div class= "currencyState-container" id = "currencyState-container">
            <h1>Estado actual</h1>
            <div class="currencyStateImg-container" id = "currencyStateImg-container" ></div>
          </div>
          <div class= "nextEvolution-container" id= "nextEvolution-container">
            <h1>Evoluciones próximas</h1>
            <div class= "nextEvolutionImg-container" id = "nextEvolutionImg-container"></div>
          </div>
      </div>`
  document.getElementById('data-sheet-container').innerHTML = dataSheet;
  //Borrar ficha técnica
  let nodoABorrar = document.getElementById(objectPoke.name);
  let exit = document.getElementById(objectPoke.num);
  exit.addEventListener('click', function () {
    nodoABorrar.parentNode.removeChild(nodoABorrar);
    document.getElementById('data-sheet-container').style.display = 'none';
  })


  otherCharacteristicsPoke('data-sheet-weaknesses-container', objectPoke.weaknesses);
  otherCharacteristicsPoke('data-sheet-resistant-container', objectPoke.resistant);
  evolutions(objectPoke);
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
  evaluate(nextEvolutions, nextEvoCont, 'nextEvolutionImg-container', 'nextEvolution-container');
  evaluate(prevEvolutions, prevEvoCont, 'prevEvolutionImg-container', 'prevEvolution-container');
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
    arrayCont += addImgs (pokemon[0]);
  });
  document.getElementById(containeradd).innerHTML= arrayCont;
  console.log(arrayCont);
  return arrayCont;
}

function addImgs (pokemon) {
  let containers = `
  <div class= 'imgEvolution-container'>
    <img src = ${pokemon.img}>
  </div>
  `
  return containers
}