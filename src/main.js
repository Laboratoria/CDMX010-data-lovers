//import { example } from './data.js';


//import data from './data/pokemon/pokemon.js';

const searchResult = document.getElementById("tbody");
const url = './data/pokemon/pokemon.json';

let pokedex = fetch (url)
    .then((response)=> response.json ())
    .then((data) => {
    let pokedex = data.pokemon;
     pokedex.sort(function compare (a, b) {
        if (a.name < b.name
        ) return -1;
        if (a.name > b.name
        ) return 1;
        return 0;
    });
    console.log(pokedex);
    })

function dataResults(pokedex){
    
    console.log(pokedex);
}
    /*const dataResults = (pokedex) => {
    pokedex.forEach((element) => {
    let dataPokedex = `
    <td><img src="${element.img}"/></td>
    <td>${element.num}</td>
    <td>${element.name}</td>
    <td>${element.generation.name}</td>
    <td class="fila1" id="details-r1">
     <a class="img"><img id="detail" src="img/pokebola.png"/></a>
    </td> 
    `;

   searchResult.insertAdjacentHTML ("beforeend", dataPokedex)*/