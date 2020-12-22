import data from './data/pokemon/pokemon.js';
console.log(data.pokemon);
//Se une la función "poke" al botón:
document.getElementById("home-main--button").addEventListener('click', infoPrincPokemon);
//Función "poke"
document.getElementById("main-logo-container").style.display = 'none';
document.getElementById("main-order-container").style.display = 'none';
document.getElementById("main-filter-container").style.display = 'none';

let namePokemon = [];
let numberPokemon = [];
let imgPokemon = [];

function infoPrincPokemon () {
    document.getElementById("home-main--section").style.display = 'none';
    document.getElementById("main-logo-container").style.display = 'block';
    document.getElementById("main-order-container").style.display = 'block';
    document.getElementById("main-filter-container").style.display = 'block';
    let allPokemon = data.pokemon;
    for (let i = 0; i < allPokemon.length; i++){
        namePokemon[i] = allPokemon[i].name;
        imgPokemon[i] = allPokemon[i].img;
        numberPokemon[i] = allPokemon[i].num;
        let infoPokeContainer = document.createElement("div");
        let imgPokeContainer = document.createElement("div");
        let buttonPoke = document.createElement("button");
        let linkPoke = document.createElement("a");
        let imgPoke = document.createElement("img");
        let pPoke = document.createElement("p");
        let pokeName = document.createTextNode(namePokemon[i]);
        let pokeNum = document.createTextNode(numberPokemon[i]);
        infoPokeContainer.appendChild(imgPokeContainer);
        imgPokeContainer.appendChild(buttonPoke);
        buttonPoke.appendChild(linkPoke);
        linkPoke.appendChild(imgPoke);
        infoPokeContainer.appendChild(pPoke);
        pPoke.appendChild(pokeName);
        pPoke.appendChild(pokeNum);
        infoPokeContainer.className = 'ind-info-pokemon-container';
        /*infoPokeContainer.idName = 'pokemon00' + numberPokemon[i];*/
        imgPokeContainer.className = 'img-pokemon-container';
        buttonPoke.className = 'button-infoPoke';
        buttonPoke.setAttribute = ('onclick');
        buttonPoke.onclick = function () {infoEachPoke(namePokemon[i]);};
        imgPoke.src = imgPokemon[i];
        document.getElementById("home-pokemon-info-container").appendChild(infoPokeContainer);
        }

        function infoEachPoke (name) {
          console.log(name);
          let index = parseInt(namePokemon.indexOf(name));
          console.log(typeof index);
          /*console.log(allPokemon.name[index]);*/
          let namePoke = allPokemon[index].name;
          let numPoke = allPokemon[index].num;
          let imgPoke = allPokemon[index].img;
          console.log(namePoke + " " + numPoke + " " + imgPoke);
          document.getElementById("home-section-info-container").style.display = 'none';
        }
      }
