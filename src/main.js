// import { example } from './data.js';
// // import data from './data/lol/lol.js';
//  import data from './data/pokemon/pokemon.json';
// // import data from './data/rickandmorty/rickandmorty.js';
// const tableElements = [document.getElementById('id-r1', 'name-r1', 'region-r1')];
// const resultado = document.getElementById('table-poke');
// function renderPokemon(imagen) {
//     $pokemon.setAttribute('src', imagen)
// }

fetch('./data/pokemon/pokemon.json')
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