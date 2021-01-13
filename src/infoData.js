import data from './data/pokemon/pokemon.js';
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
  //console.log(nameAllPokemon);
  let infoPrinPoke = infoPokeContainer(pokemon);
  return infoPrinPoke;
  }

export const infoEachPoke = (btnValNamePoke) => {
  document.getElementById("data-sheet-container").style.display = 'block';
  //console.log(nameAllPokemon);
  let namePoke = btnValNamePoke.value;
  //console.log(namePoke);
  let index = parseInt(nameAllPokemon.indexOf(namePoke));
  //console.log(index);
  let objectPoke = allPokemon[index];
  //console.log(objectPoke);
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
  console.log(exit);
  exit.addEventListener('click', function () {
    nodoABorrar.parentNode.removeChild(nodoABorrar);
    document.getElementById('data-sheet-container').style.display = 'none';
    //console.log(dataSheet);
  })


  otherCharacteristicsPoke('data-sheet-weaknesses-container', objectPoke.weaknesses);
  otherCharacteristicsPoke('data-sheet-resistant-container', objectPoke.resistant);

  function otherCharacteristicsPoke (parentNode, property) {
    let parent = document.getElementById(parentNode);
    console.log(parent);
    let numProperty = parseInt(property.length);
    for (let i = 0; i < numProperty; i++) {
      let pNode = document.createElement('p');
      let text = document.createTextNode(property[i])
      pNode.appendChild(text);
      parent.append(pNode);
    }
  }

  evolutions(objectPoke);
}


function evolutions (pokemon) {
  //obtener la propiedad evolución del objeto pokemon
  let objectEv = pokemon.evolution;
  console.log(objectEv);
  let parentDiv = document.getElementById('currencyStateImg-container');
  let imgContainer = document.createElement('div');
  let img = document.createElement('img');
  img.src = pokemon.img;
  imgContainer.className = 'imgEvolution-container';
  imgContainer.appendChild(img);
  console.log(imgContainer);
  parentDiv.append(imgContainer);
  let nextEvInfPar = [];
  let nextEvolutions = [];
  let prevEvolutions = [];

  evaluatePresence(objectEv['next-evolution'], 'next-evolution', "nextEvolutionImg-container", nextEvolutions, "nextEvolution-container");
  evaluatePresence(objectEv['prev-evolution'], 'prev-evolution', "prevEvolutionImg-container", prevEvolutions, "prevEvolution-container");

  function evaluatePresence(nextGen, evolution, container, arrays, nodeToErase) {
    console.log(arrays)
    console.log(nextGen);
    if (Array.isArray(nextGen)) {
      console.log('Soy un array');
        if (evolution == 'next-evolution') {
          searchEvol(nextGen, evolution, nextEvolutions)
          addImgsEv (container, nextEvolutions);
        } else {
      console.log('Veamos las evoluciones previas');
      searchEvol(nextGen, evolution, arrays);
      let orderPrev = prevEvolutions.reverse();
      console.log(orderPrev);
      addImgsEv (container, orderPrev)
        }
      }
          else {
          console.log('No lo soy');
          document.getElementById(nodeToErase).style.display = 'none';
        }
      }

    function searchEvol (nextGen, evolution, arrays) {
      console.log(evolution);
      //el parámetro nextGen se refiere al array next o prev evolution. Si este array existe (es array, se ejecuta la función)
      if (Array.isArray(nextGen)) {
      console.log('Soy un array');
      //se guarda el nombre de la prev o next evolution
      let nameNextEv = nextGen[0].name;
      console.log(nameNextEv);
      //se obtiene el índice de ese nombre dentro de los nombres obtenidos en otra función
      let indexNextEv = nameAllPokemon.indexOf(nameNextEv);
      console.log(indexNextEv);
      //se busca por índice el objeto dentro de la data
      let nextEv = allPokemon[indexNextEv];
      console.log(nextEv);
      //se obtiene la propiedad evolución de ese pokemon
      let nextEvInfoGral = nextEv.evolution;
      console.log(nextEvInfoGral);
      //se obtiene la info de la prev o next evolución para ser evaluado de nuevo (si existe o no ese array)
      nextEvInfPar = nextEvInfoGral[evolution];
      console.log(nextEvInfPar);
      //guarda el nombre de cada pokemon en un array
      arrays.push(nameNextEv);
      //se ejecuta de nuevo la función con la nueva info (next o prev evolution)
      searchEvol(nextEvInfPar, evolution, arrays);
      } else {
        console.log('No lo soy');
        console.log(arrays);
        }
      }

      function addImgsEv (container, evolutionss) {
        let evoContainers = document.getElementById(container);
        console.log(evolutionss.length);
        for (let i = 0; i < evolutionss.length; i++) {
          //evalúa el nombre de cada pokemon dentro del array
          let eachName = evolutionss[i];
          //obtener el índice de cada pokemon dentro del array de nombres
          let index = nameAllPokemon.indexOf(eachName);
          //obtener imagen de cada objeto pokemon dentro de toda la data
          let eachImg = allPokemon[index].img;
          console.log(eachName);
          console.log(index);
          console.log(eachImg);
          let imgContainerAllEv = document.createElement('div');
          let img = document.createElement('img');
          img.src = eachImg;
          imgContainerAllEv.className = 'imgEvolution-container';
          imgContainerAllEv.appendChild(img);
          console.log(imgContainerAllEv);
          evoContainers.append(imgContainerAllEv);
        }
      }
}
