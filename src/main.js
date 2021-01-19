
// import { example } from './data.js';
// // import data from './data/lol/lol.js';
//  import data from './data/pokemon/pokemon.json';
// // import data from './data/rickandmorty/rickandmorty.js';
<<<<<<< HEAD
// const tableElements = [document.getElementById('id-r1', 'name-r1', 'region-r1')];
// const resultado = document.getElementById('table-poke');
// function renderPokemon(imagen) {
//     $pokemon.setAttribute('src', imagen)
// }
=======

const resultado = document.getElementById('table-poke');
const url = './data/pokemon/pokemon.json';

>>>>>>> e6e97dd512fe216984ddf1256ee7f54e4f087885

fetch(url)
    .then(response => response.json())
    .then(data => {
         debugger
         console.log(data);
         let pokemones = data.pokemon;
         console.log(pokemones);
        // renderPokemon(data.img)
        // let pokemones = data.pokemon;
        // renderData(pokemones);
    })

<<<<<<< HEAD
// const renderData = (pokemones) => {
//     pokemones.forEach((index) => {
//         let dataPokemones = `
//        <td><img  src="${index.img}" height="100"/></td>
//        <td>${index.num}</td>
//        <td>${index.name}</td>
//        <td>${index.generation.name}</td>
//        <td class="fila1" id="details-r1">
//             <a class="img"><img id="detail" src="img/pokebola.png"/></a>
//         </td>
//         `;
//         resultado.insertAdjacentHTML("beforeend", dataPokemones);
//     });
// }
=======
const renderData = (pokemones) => {
    pokemones.forEach((index) => {
        let dataPokemones = `
       <td><img  src="${index.img}" height="100"/></td>
       <td>${index.num}</td>
       <td>${index.name}</td>
       <td>${index.generation.name}</td>
       <td class="fila1" id="details-r1">
            <a class="img"><img id="detail" src="img/pokebola.png"/></a>
        </td>
        `;
        resultado.insertAdjacentHTML("beforeend", dataPokemones);
    });
}

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
<<<<<<< HEAD
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
>>>>>>> talia
>>>>>>> c9fd450bf920ddcb6fc4d2bd7d7e0f18d0ed9715
=======
});
>>>>>>> e6e97dd512fe216984ddf1256ee7f54e4f087885
