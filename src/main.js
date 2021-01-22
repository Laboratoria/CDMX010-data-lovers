// import { example } from './data.js';
// // import data from './data/lol/lol.js';
//  import data from './data/pokemon/pokemon.json';
// // import data from './data/rickandmorty/rickandmorty.js';
const resultado = document.getElementById('table-poke');
const url = './data/pokemon/pokemon.json';
let resultOrderAZ = document.getElementById('resultadosAZ');
let resultOrderZA = document.getElementById('resultadosZA');
let links = document.getElementById('links');

//Funcion Leer Datos-Paginacion
// function readData(url) {
//     if (url) {
//         resultado.innerHTML = "";

//         fetch(url)
//             .then(response => response.json())
//             .then(response => {
//                 for(let i of response.pokemon) {
//                     fetch(i.url)
//                         .then(x => x.json())
//                         .then(x => {
//                             resultado.innerHTML +=  `
//                             <td><img  src="${index.img}" height="100"/></td>
//                             <td>${index.num}</td>
//                             <td>${index.name}</td>
//                             <td>${index.generation.name}</td>
//                             <td><a href="#"><img src="./img/pokebola.png" alt=""></a></td>
//                              `;
//                         });
//                 };
//                 links.innerHTML = (response.previous) ? `<button onclick="updatePokemons('${response.previous}')">Atrás</button>` : "";
//         //Botón hacia adelante
//         links.innerHTML += (response.next) ? `<button onclick="updatePokemons('${response.next}')">Siguiente</button>` : "";
//             });
//     }
// }

// Funcion Leer Datos
const renderData = (pokemones) => {
    pokemones.forEach((index) => {
        let dataPokemones = `
       <td><img  src="${index.img}" height="100"/></td>
       <td>${index.num}</td>
       <td>${index.name}</td>
       <td>${index.generation.name}</td>
       <td><a href="#"><img src="./img/pokebola.png" alt=""></a></td>
        `;
        resultado.insertAdjacentHTML("beforeend", dataPokemones);
    });
}

//Funcion Orden A-Z
// const orderDataAZ = (pokemonesData) => {
//     pokemonesData.sort(function compare(a,b) {
//         if (a.name > b.name)
//             return 1;
//         if (a.name < b.name)
//             return -1;
//         return 0;
//     })
//     //Operador Terniarios
//     // pokemonesData.sort((a, b) => (a.name > b.name) ? 1 : (b.name > a.name) ? -1 : 0);
//     pokemonesData.forEach((position) => {
//         let dataOrder  = `
//         <td><img  src="${position.img}" height="100"/></td>
//         <td>${position.num}</td>
//         <td>${position.name}</td>
//         <td>${position.generation.name}</td>
//         <td class="fila1" id="details-r1">
//              <a class="img"><img id="detail" src="img/pokebola.png"/></a>
//          </td>
//          `;
//          resultOrderAZ.insertAdjacentHTML("beforeend", dataOrder);
//     })
// }

//Funcion Ordenamiento Z-A
// const orderDataZA = (pokemonesData) => {
//     pokemonesData.sort(function compare(a,b) {
//         if (a.name > b.name)
//             return -1;
//         if (a.name < b.name)
//             return 1;
//         return 0;
//     })
//     // Operador Terniario
//     // pokemonesData.sort((a, b) => (a.name > b.name) ? -1 : (b.name > a.name) ? 1 : 0);
//     pokemonesData.forEach((position) => {
//         let dataOrder  = `
//         <td><img  src="${position.img}" height="100"/></td>
//         <td>${position.num}</td>
//         <td>${position.name}</td>
//         <td>${position.generation.name}</td>
//         <td class="fila1" id="details-r1">
//              <a class="img">${<img id="detail" src="img/pokebola.png"/>}</a>
//          </td>
//          `;
//          resultOrderZA.insertAdjacentHTML("beforeend", dataOrder);
//     })
// }

// Fetch Leer Data
fetch(url)
    .then(response => response.json())
    .then(data => {
        // debugger
        // renderPokemon(data.img)
        let pokemones = data.pokemon;
        renderData(pokemones);

        $(document).ready(function(){
            $('#example').DataTable({
                data: pokemones,
                columns : [
                    {img: "Pokemon"},
                    {num: "Identificador"},
                    {name: "Nombre"},
                    {generation: "Region"},
                    {details: "Detalles"},
                ]
            });
        });
    })

// // Fetch Orden A-Z
//     fetch (url)
//     .then((response)=> response.json ())
//     .then((data) => {
//     // debugger
//     let pokedex = data.pokemon;
//     orderDataAZ(pokedex);
// });

// //Fetch Orden Z-A
// fetch (url)
// .then((response)=> response.json ())
// .then((data) => {
// // debugger
// let dataInversa = data.pokemon;
// orderDataZA(dataInversa);
// });

