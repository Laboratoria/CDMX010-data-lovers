import data from './data/pokemon/pokemon.js';
import { filterByRegion , filterByType, a , b, sortPokemonName, sortPokemonName2} from './data.js';

/* HU.01
Esta fución crea las tarjetas de cada pokemon desde Js y usa
Template literals y sus expresiones ${pokemon.img}
*/
export function createCard(pokemon) {
  let card = `
    <div class="pokemon-card">
      <img src="${pokemon.img}" alt="">
      <div class="circulo"></div>
      <h5 class="pokemon-id">${pokemon.num}</h5>
      <h5 class="pokemon-nombre">${pokemon.name}</h5>
      <h5 class="tipo">${pokemon.type}</h5>
    </div>
  `;
  return card;
}

/* HU.02
Esta funcion coloca la informacion en la tarjeta 
*/
function setCards(pokemones) {
  let containerCards = document.getElementById('contenedor-pokemon');
  let emptyCard = '';
  pokemones.forEach(poke => emptyCard += createCard(poke));
  containerCards.innerHTML = emptyCard;
}
setCards(data.pokemon);   

/* HU.03
2 funciones generales para los botones
Por region y por tipo
*/
let pokemonRegion = document.querySelectorAll('.region'); 
for(let i=0; i< pokemonRegion.length; i++){ //pasa x los 2 botones
  pokemonRegion[i].addEventListener('click',()=>{ // desde el index va a aplicar la función click
    let filterRegion = filterByRegion(pokemonRegion[i].id); //aplica la accion desde el index tomando el id
    setCards(filterRegion);
  });
}

let pokemonType = document.querySelectorAll('.types'); 
for(let i=0; i< pokemonType.length; i++){ 
  pokemonType[i].addEventListener('click',()=>{ 
    let filterType = filterByType(pokemonType[i].id);
    setCards(filterType);
  });
}

/* HU.04
2 funciones para aplicar orden/sort() en los numeros
de cada pokemon
*/

let orderFunction = document.querySelectorAll('.order'); 
for(let i=0; i< orderFunction.length; i++){ 
  orderFunction[i].addEventListener('click',()=>{ 
    let orderMyFunction = a(orderFunction[i].id);
      setCards(orderMyFunction);
    });
}

let orderFunction2 = document.querySelectorAll('.order2'); 
for(let i=0; i< orderFunction2.length; i++){ 
  orderFunction2[i].addEventListener('click',()=>{ 
    let orderMyFunction2 = b(orderFunction2[i].id);
      setCards(orderMyFunction2);
    });
}

/* HU.05
2 funciones para aplicar orden/sort() en los NOMBRES
de cada pokemon
*/

let sortAllNames = document.querySelectorAll('.sortNames');
for(let i=0; i< sortAllNames.length; i++){
  sortAllNames[i].addEventListener('click',()=>{
    let sortNames = sortPokemonName(sortAllNames[i].id);
    console.log(sortNames);
      setCards(sortNames);
    });
}

let sortAllNames2 = document.querySelectorAll('.sortNames1');
for(let i=0; i< sortAllNames2.length; i++){
  sortAllNames2[i].addEventListener('click',()=>{
    let sortNames2 = sortPokemonName2(sortAllNames2[i].id);
    console.log(sortNames2);
      setCards(sortNames2);
    });
}




// tarea: domContentLoaded - tarea: window.addEventListener

//Evento DOM para botones de ordenado por nombres
// let orderFunction = document.querySelectorAll('.order');
// for(let i=0; i< orderFunction.length; i++){
//   orderFunction[i].addEventListener('click',()=>{
//     let orderMyFunction = sortByNameAll(orderFunction[i].id);
//     let orderMyFunction = sortByNameAll(orderFunction[i].id);
//     setCards(orderMyFunction);
//   });
// }












/*01

OK, estas funciones están bien, son para seleccionar cada boton, region, tipo de planta, agua, etc.
Pero son MUCHAS, se tiene que hacer una fucion por boton o por accion.


let btnKanto = document.querySelector('.regionKanto');
btnKanto.addEventListener ('click', function () {
  const pokemonsKanto = filterByRegion('kanto');
  setCards(pokemonsKanto);
});

//evento DOM en botón para filtrar por región
let btnJohto = document.querySelector('.regionJohto');
btnJohto.addEventListener ('click', function () {
  const pokemonsJohto = filterByRegion('johto');
  setCards(pokemonsJohto);
});

//botón evento para filtrar por tipo planta
let btnPlanta = document.querySelector('.planta');
btnPlanta.addEventListener('click', function () {
  const pokemonsPlanta = filtrarTipoPlanta('grass');
  setCards(pokemonsPlanta);
});

let btnAgua = document.querySelector('.agua');
btnAgua.addEventListener('click', function () {
  const pokemonsAgua = filtrarTipoAgua('water');
  setCards(pokemonsAgua);
});

let btnFuego = document.querySelector('.fuego');
btnFuego.addEventListener('click', function () {
  const pokemonsFuego = filtrarTipoFuego('fire');
  setCards(pokemonsFuego);
});
*/


/*NA

// ESTA FUNCION COLOCA INFORMACION DE CADA POKEMON DESDE JS
function setCards(pokemones) {
 let containerCards = document.getElementById('contenedor-pokemon');
 let emptyCard = '';
 //pokemones.forEach(poke => emptyCard += createCard(poke));

  containerCards.innerHTML = emptyCard;
}
setCards(data.pokemon);// parametro

                        // tarea: domContentLoaded
                        // tarea: window.addEventListener

*/













