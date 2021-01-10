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
      <div class = 'text-pokemon-container' id= '${pokemon.name}'>
        <p>${pokemon.name}</p>
        <p>${pokemon.num}</p>
      </div>
    </div>`
  };
  namePokemon = nameAllPokemon.push(pokemon.name);
  let infoPrinPoke = infoPokeContainer(pokemon);
  return infoPrinPoke;
  }

export const setClass = (elements) => {
  for(var i = 0; i < elements.length; i++){
    elements[i].addEventListener('click',function() {
    infoEachPoke(this);
    });
  }
}

export const infoEachPoke = (btnValNamePoke) => {
  document.getElementById("data-sheet-container").style.display = 'block';
  console.log(nameAllPokemon);
  let namePoke = btnValNamePoke.value;
  console.log(namePoke);
  let index = parseInt(nameAllPokemon.indexOf(namePoke));
  console.log(index);
  let objectPoke = allPokemon[index];
  console.log(objectPoke);
  let rarityPoke = objectPoke["pokemon-rarity"];
  let resistantPoke = objectPoke.resistant;
  console.log(resistantPoke);
  let numberResistantPoke = resistantPoke.length;
  console.log(numberResistantPoke);
  let resistantPokemon = [];
  for (let i = 0; i < numberResistantPoke; i++){
    resistantPokemon[i] = resistantPoke[i];
  }

  let dataSheet = `
      <div class = "data-sheet" id= "${objectPoke.name}">
        <div class = "exit-container">
          <button class = "exit-button">
            <img>
          </button>
        </div>
        <div class="data-sheet-head">
          <div>
            <img src = "${objectPoke.img}">
          </div>
          <div class="general-data">
            <h2>${objectPoke.name}</h2>
            <br>
            <p>No. Pokedex: ${objectPoke.num}</p>
            <p>Tipo: ${objectPoke.type}<p/>
            <p>Rareza: ${rarityPoke}</p>
          </div>
        </div>
      <div/>
      <div class="data-sheet-body">
        <div class="data-sheet-body-section1">
          <div class="data-sheet-resistant-container">
            <h3>Resistente:<h3/>
            <p></p>
            <p>${resistantPokemon[1]}</p>
            <p>${resistantPokemon[2]}</p>
            <p>${resistantPokemon[3]}</p>
            <p>${resistantPokemon[4]}</p>
            <p>${resistantPokemon[5]}</p>
          </div>
          <div class= "data-sheet-weaknesses-container">
            <h3>Debilidades:</h3>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div class="data-sheet-body-section2">
          <div class="physical-data-container">
            <h4>Peso: </h4>
            <p>${objectPoke.weight}</p>
            <h4>Altura:</h4>
            <p>${objectPoke.height}</p>
          </div>
        </div>
      </div>
      <div class="data-sheet-footer"></div>`
    document.getElementById('data-sheet-container').innerHTML = dataSheet;
    console.log(dataSheet);
}
