// estas funciones son de ejemplo
//import data from "./data/pokemon/pokemon.js"
export const URL= "./data/pokemon/pokemon.json";
export const container = document.getElementById("pokemonlist")
fetch(URL)
.then((res)=> res.json())
.then((data)=> {
  let items = data.pokemon;
  console.log(items);
  printData(items)
});
//export const pokemons= data.pokemon;
//const container= document.getElementById("pokemonlist");
export const printData = (datos) =>{
datos.forEach((e)=>{
  let cards = ` 
  <a href="#" class="w30">
  <img src = "${e.img}"/>
    <p> ${e.name} </p>
    </a>
  `;
  container.insertAdjacentHTML("beforeend",cards);
}
)
};

/*export const anotherExample = () => {
  return 'OMG';
};

/* estas funciones son de ejemplo
import data  from './data/pokemon/pokemon.js'

export const prueba = data.pokemon.map(function(bar){
  //return '<p>'+bar.name+' '+bar.type+'</p>'
  return `
  <div class="pokemon-box">
  <p>${bar.name}</p>
  <p>${bar.type}</p>
  <img src="${bar.img}">

  </div>
  ` 
})

export const pokemons = data.pokemon

export const filterByType = (type) => { // type = 'poison'
  const pokemonsByType = pokemons.filter(function(pokemon) {
    return pokemon.type.includes(type)
  })

  return pokemonsByType
}

console.log(filterByType('poison'));



export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
*/