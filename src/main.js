<<<<<<< HEAD

// import { example } from './data.js';
// // import data from './data/lol/lol.js';
//  import data from './data/pokemon/pokemon.json';
// // import data from './data/rickandmorty/rickandmorty.js';
const resultado = document.getElementById('table-poke');
const url = './data/pokemon/pokemon.json';
<<<<<<< HEAD
//Ordenar lista de nombre A - Z
const orderAz = (listaPokex) => {
    listaPokex.sort(function compare(a, b) {
    if  (a.name < b.name
    ) return -1;
    if (a.name > b.name
    ) return 1;
      return 0;
    })
    console.log(listaPokex)
};

//Ordenar lista de nombres Z - A
const orderZa = (listaPokex_) => {
    listaPokex_.sort(function compare(b, a) {
    if (a.name < b.name
    ) return 1;
    if (a.name > b.name
    ) return -1;
      return 0;
    })
    console.log(listaPokex_)
};

//Método Fetch
fetch(url)
    .then(response => response.json())
    .then(data => {
        // debugger
        // renderPokemon(data.img)
        let pokemones = data.pokemon;
        renderData(pokemones);
    })

=======
let resultOrderAZ = document.getElementById('resultadosAZ');
let resultOrderZA = document.getElementById('resultadosZA');
let links = document.getElementById('links');

//Funcion Leer Datos-Paginacion
// function readData(url) {
//     if (url) {
//         resultado.innerHTML = "";
=======
//Importaciones
import {orderData, filterData, searchPokemon} from './data.js';
>>>>>>> Valeria

//Variables
const url = './data/pokemon/pokemon.json';
let btnAllData = document.getElementById('viewAll')
btnAllData.addEventListener("click", getData)
let containerAllData = document.getElementById("containerData")
let order = document.querySelector("#order")
let types = document.querySelector("#types")
let btnSearch = document.getElementById("search")
btnSearch.addEventListener("click", searchData)

<<<<<<< HEAD
// Funcion Leer Datos
>>>>>>> a03a87c631c23d25d8311829e9c3acbe73ab5311
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
<<<<<<< HEAD
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
=======
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
>>>>>>> Valeria

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
=======
//Funcion principal
function getData() {
    //Peticion-promesa y data en HTML
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let pokemones = data.pokemon;
            //251 Pokemones 
            document.getElementById("containerData").innerHTML="";
            pokemones.forEach((index) => {
                containerAllData.innerHTML += `
                    <div class="card">
                    <div class="img-container">
                        <img src="${index.img}">
                    </div>
                    <div class="info">
                        <span class= "number"> ${index.num}</span> 
                        <h3>${index.name}</h3>
                        <small class="type">Type: <span>${index.type}</span></small>
                    </div>
                    <div class="weight">
                        <small class="type">Weight: <span>${index.size.weight}</span></small>
                    </div>
                    <div class="height">
                        <small class="type">Height: <span>${index.size.height}</span></small>
                    </div>
                    </div>
                `
            });
    }); // Termina la peticion a ApiPoke --Local
}

// Evento orderData
>>>>>>> Valeria
fetch(url)
.then((response) => response.json())
.then((data) => {
    let pokemones = data.pokemon;
    order.addEventListener('change', (e) => {
        let orderPoke = orderData(pokemones,e.target.value);
        // console.log(orderPoke);
        document.getElementById("containerData").innerHTML="";
        orderPoke.forEach((index) => {
            containerAllData.innerHTML += `
            <div class="card">
            <div class="img-container">
                <img src="${index.img}">
            </div>
            <div class="info">
                <span class= "number"> ${index.num}</span> 
                <h3>${index.name}</h3>
                <small class="type">Type: <span>${index.type}</span></small>
            </div>
            <div class="weight">
                <small class="type">Weight: <span>${index.size.weight}</span></small>
            </div>
            <div class="height">
                <small class="type">Height: <span>${index.size.height}</span></small>
            </div>
            </div>
            `;
        })
    })
})

//Evento filtro
fetch(url)
.then((response) => response.json())
.then((data) => {
    let pokemones = data.pokemon;
    types.addEventListener('change', (e) => {
        let typePoke = filterData(pokemones,e.target.value);
        // console.log(typePoke);
        document.getElementById("containerData").innerHTML="";
        typePoke.forEach((index) => {
            containerAllData.innerHTML += `
            <div class="card">
            <div class="img-container">
                <img src="${index.img}">
            </div>
            <div class="info">
                <span class= "number"> ${index.num}</span> 
                <h3>${index.name}</h3>
                <small class="type">Type: <span>${index.type}</span></small>
            </div>
            <div class="weight">
                <small class="type">Weight: <span>${index.size.weight}</span></small>
            </div>
            <div class="height">
                <small class="type">Height: <span>${index.size.height}</span></small>
            </div>
            </div>
            `;
        })
    })
})

//Evento Buscar por nombre
function searchData() {
    fetch(url)
    .then((response)=> response.json())
    .then((data) => {
        let pokemones = data.pokemon;
        let textName = (document.getElementById("namePoke").value).toLowerCase();
        let pokemonSearch = searchPokemon(pokemones,textName);
        document.getElementById("containerData").innerHTML="";

        pokemonSearch.forEach((index) => {containerAllData.innerHTML += `
        <div class="card">
        <div class="img-container">
            <img src="${index.img}">
        </div>
        <div class="info">
            <span class= "number"> ${index.num}</span> 
            <h3>${index.name}</h3>
            <small class="type">Type: <span>${index.type}</span></small>
        </div>
        <div class="weight">
            <small class="type">Weight: <span>${index.size.weight}</span></small>
        </div>
        <div class="height">
            <small class="type">Height: <span>${index.size.height}</span></small>
        </div>
        </div>
        `;


<<<<<<< HEAD
<<<<<<< HEAD
let pokedexList = fetch (url)
    .then((response)=> response.json ())
    .then((data) => {
    let pokedexList = data.pokemon;
    pokedexList.sort(function compare (b, a) {
   if (b.name < a.name
   ) return 1;
   if (b.name > a.name
   ) return -1;
   return 0;
});
    console.log(pokedexList)
});

=======
>>>>>>> a03a87c631c23d25d8311829e9c3acbe73ab5311
=======
        })
})
}
>>>>>>> Valeria
