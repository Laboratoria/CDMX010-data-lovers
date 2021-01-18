//import { example } from './data.js';
import data from './data/pokemon/pokemon.js';
console.log(data);

// ESTA FUNCION CREA LAS TARJETAS DE CADA POKEMON DESDE JS ${pokemon.img}
function createCard(pokemon) {
  let card = `
    <div class="pokemon-card">
      <img src="" alt="">
      <div class="circulo"></div>   
      <h5 class="pokemon-id">${pokemon.id}</h5>
      <h5 class="pokemon-nombre">${pokemon.name}</h5>
      <h5 class="tipo">${pokemon.type}</h5>
    </div>
  `;

  return card;
};


// ESTA FUNCION COLOCA INFORMACION DE CADA POKEMON DESDE JS 
function setCards() {
  let containerCards = document.getElementById('contenedor-pokemon');
  let emptyCard = '';
  data.pokemon.forEach(poke => emptyCard += createCard(poke));

  containerCards.innerHTML = emptyCard;
};

setCards();

// tarea: domContentLoaded
// tarea: window.addEventListener

