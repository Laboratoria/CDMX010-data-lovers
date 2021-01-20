
// import { example } from './data.js';
// // import data from './data/lol/lol.js';
//  import data from './data/pokemon/pokemon.json';
// // import data from './data/rickandmorty/rickandmorty.js';
<<<<<<< HEAD
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
=======
const resultado = document.getElementById('table-poke');
const url = './data/pokemon/pokemon.json';
let resultOrderAZ = document.getElementById('resultadosAZ');
let resultOrderZA = document.getElementById('resultadosZA');

// Funcion Leer Datos
>>>>>>> Valeria
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

<<<<<<< HEAD
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
=======
//Funcion Orden A-Z
const orderDataAZ = (pokemonesData) => {
    pokemonesData.sort(function compare(a,b) {
        if (a.name > b.name)
            return 1;
        if (a.name < b.name)
            return -1;
        return 0;
    })
    //Operador Terniarios
    // pokemonesData.sort((a, b) => (a.name > b.name) ? 1 : (b.name > a.name) ? -1 : 0);
    pokemonesData.forEach((position) => {
        let dataOrder  = `
        <td><img  src="${position.img}" height="100"/></td>
        <td>${position.num}</td>
        <td>${position.name}</td>
        <td>${position.generation.name}</td>
        <td class="fila1" id="details-r1">
             <a class="img"><img id="detail" src="img/pokebola.png"/></a>
         </td>
         `;
         resultOrderAZ.insertAdjacentHTML("beforeend", dataOrder);
    })
}

// Funcion Ordenamiento A-Z
// const orderAZ = (listaPokex) => {
//     let resultado = listaPokex;
//     listaPokex.sort(function compare(a,b) {
//         if (a.name < b.name) 
//             return -1;
//         if (a.name > b.name)
//             return 1;
//         return 0;  
//     })
//     // document.getElementById("resultadosAZ").insertAdjacentText = listaPokex;
//     console.log(listaPokex);
// }


//Funcion Ordenamiento Z-A
const orderDataZA = (pokemonesData) => {
    pokemonesData.sort(function compare(a,b) {
        if (a.name > b.name)
            return -1;
        if (a.name < b.name)
            return 1;
        return 0;
    })
    // Operador Terniario
    // pokemonesData.sort((a, b) => (a.name > b.name) ? -1 : (b.name > a.name) ? 1 : 0);
    pokemonesData.forEach((position) => {
        let dataOrder  = `
        <td><img  src="${position.img}" height="100"/></td>
        <td>${position.num}</td>
        <td>${position.name}</td>
        <td>${position.generation.name}</td>
        <td class="fila1" id="details-r1">
             <a class="img"><img id="detail" src="img/pokebola.png"/></a>
         </td>
         `;
         resultOrderZA.insertAdjacentHTML("beforeend", dataOrder);
    })
}

// Fetch Leer Data
fetch(url)
    .then(response => response.json())
    .then(data => {
        // debugger
        // renderPokemon(data.img)
        let pokemones = data.pokemon;
        renderData(pokemones);
    })

// Fetch Orden A-Z
    fetch (url)
    .then((response)=> response.json ())
    .then((data) => {
    // debugger
    let pokedex = data.pokemon;
    orderDataAZ(pokedex);
});

//Fetch Orden Z-A
fetch (url)
.then((response)=> response.json ())
.then((data) => {
// debugger
let dataInversa = data.pokemon;
orderDataZA(dataInversa);
});

>>>>>>> Valeria
