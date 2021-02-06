import data from './data/pokemon/pokemon.js';

/*HU.03
Fórmula de filter() method, para filtrar por region
*/
export const filterByRegion = (region) => {
  const pokemons = data.pokemon.filter(item =>{
    return item.generation.name === region;
  })
  return pokemons;
};

/*HU.03
Fórmula de filter() method, para filtrar por tipos
*/
export const filterByType = (type) => {
  const filterType = data.pokemon.filter(poke=>{
    return poke.type.includes(type)});
  return filterType;
};

/*HU.04
Fórmulas de sort() method, para ordenar por números
*/
export function a(){
  const sortBy = data.pokemon.sort((a,b)=> b.num - a.num);
  console.log(sortBy);
  return sortBy;
}
console.log(a);

export function b(){
  const sortByB = data.pokemon.sort((a,b)=> a.num - b.num);
  console.log(sortByB);
  return sortByB;
}
console.log(b);


/* HU.05
Fórmulas de sort() en los NOMBRES
de cada pokemon
*/

export const sortPokemonName = () => {
  const sortByName = data.pokemon.sort((prev,next)=>{
    if (prev.name > next.name){
      return 1;
    }
    if (prev.name <  next.name){
      return -1;
    }
    return 0;
  });
  console.log(sortPokemonName)
  return sortByName
};

export const sortPokemonName2 = () => {
  const sortByName2 = data.pokemon.sort((prev,next)=>{
    if (prev.name > next.name){
      return -1;
    }
    if (prev.name <  next.name){
      return 1;
    }
    return 0;
  });
  console.log(sortPokemonName2)
  return sortByName2
};



// export function  sortPokemonName(){
//   const sortName = data.pokemon.sort ((prev,next) =>
//   prev.name -next.name);
//   return sortName
// }










/* 05

Esta es la primera función que logramos, NOS AYUDÓ RAUL,
es para filtrar por región

import data from './data/pokemon/pokemon.js';
//import { createCard } from './main.js';

export const filterByRegion = (region) => {
  const pokemons = data.pokemon.filter(item =>{
    return item.generation.name === region;
  })
  return pokemons;
};
*/


/* 04

Todas estas funciones las desarrollamos con el método de Ana, usan .incluse()  FUNCIONAN BIEN
pero son muchas, tenemos que hacer 1 por cada filtrado


//ESTA FUNCION SIRVE PARA FILTRAR POR TIPO PLANTA

export function filtrarTipoPlanta () {

  const typeGrass = data.pokemon.filter(plant => plant.type.includes('grass'));
  return typeGrass;
}
console.log(filtrarTipoPlanta);

//ESTA FUNCION SIRVE PARA FILTRAR POR TIPO AGUA
export function filtrarTipoAgua () {

  const typeWater = data.pokemon.filter(agua => agua.type.includes('water'));
  return typeWater;
}
console.log(filtrarTipoAgua);

// ESTA FUNCION SIRVE PARA FILTRAR POR TIPO FUEGO
export function filtrarTipoFuego () {

  const typeFire = data.pokemon.filter(fuego => fuego.type.includes('fire'));
  return typeFire;
}
console.log(filtrarTipoFuego);

*/


/*03 ESTA ES UNA IDEA DE ANDRE, YA NO LA CONTINUAMOS
export function filtrarTipoPlanta () {
  let emptyCard = ''
  let containerCards = document.getElementById('contenedor-pokemon');
  const typeGrass1 = data.pokemon.filter(plant => plant.type[0] === 'grass');
  const typeGrass2 = data.pokemon.filter(planta => planta.type[1] === 'grass');
  let allGrass = [];
  allGrass.push(typeGrass1);
  allGrass.push(typeGrass2);
  allGrass.forEach((pokemonesPlanta) => emptyCard += createCard(pokemonesPlanta))
  containerCards.innerHTML = emptyCard;
}

console.log(filtrarTipoPlanta);
*/


/* 01
okokokokokoko ESTA FUNCION LA HICOMOS MIRIAM Y YO, EXCLUYE 3 POKEMONES PERO IMPRIME EN PANTALLA

export function filtrarTipoPlanta () {


  const typeGrass1 = data.pokemon.filter(plant => plant.type[0] === 'grass');
  const typeGrass2 = data.pokemon.filter(planta => planta.type[1] === 'grass');
  return typeGrass1, typeGrass2;
}

console.log(filtrarTipoPlanta);

*/


/*02
ESTA FUNCION la hicimos con Andre, SIRVE PERO NO INCLUYE 3 POKEMONES Y NO IMPRIME EN PANTALLA
export function filtrarTipoPlanta () {
  const typeGrass1 = data.pokemon.filter(plant => plant.type[0] === 'grass');
  const typeGrass2 = data.pokemon.filter(planta => planta.type[1] === 'grass');
  let allGrass = [];
  allGrass.push(typeGrass1);
  allGrass.push(typeGrass2);

  return allGrass;
}

console.log(filtrarTipoPlanta);*/






















/*

export function filtrarTipoPlanta () {
  const type = pokemon.type[];
  const result = data.pokemon.filter(planta => planta.type[])

console.log(result);
}

array.prototype.includes()
new array 
// expected output: Array ["exuberant", "destruction", "present"]

*/


/*
export function filtrarTipoPlanta () {


  const typeGrass1 = data.pokemon.filter(plant => plant.type[0] === 'grass').includes();
  const typeGrass2 = data.pokemon.filter(planta => planta.type[1] === 'grass');
  return typeGrass1/*, typeGrass2;
}

console.log(filtrarTipoPlanta);
*/


/* OK PRIMER PASO

export const getPokemonKanto = data.pokemon.filter(item =>{
  return item.generation.name === 'kanto';
});

export const getPokemonJohto = data.pokemon.filter(item =>{
  return item.generation.name === 'johto';
});

*/

// tarea: domContentLoaded
// tarea: window.addEventListener




