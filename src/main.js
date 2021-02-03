//Importaciones
import {orderData, filterData, searchPokemon} from './data.js';

//Variables
const url = './data/pokemon/pokemon.json';
let btnAllData = document.getElementById('viewAll')
btnAllData.addEventListener("click", getData)
let containerAllData = document.getElementById("containerData")
let order = document.querySelector("#order")
let types = document.querySelector("#types")
let btnSearch = document.getElementById("search")
btnSearch.addEventListener("click", searchData)

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


        })
})
}
