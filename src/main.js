import {rickandmorty} from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

console.log(rickandmorty, data);

const $dataCards= document.querySelector(".information"),
      $template= document.getElementById("card").content,
      $fragment= document.createDocumentFragment(),
      char= data.results;

      char.forEach( (allData) => {
          $template.querySelector("h2").textContent = allData.name;
          $template.querySelector("img").setAttribute("src",allData.image);
          $template.querySelector(".a1").textContent = allData.status;
          $template.querySelector(".a2").textContent = allData.species;
          $template.querySelector(".a3").textContent = allData.type;
          $template.querySelector(".a4").textContent = allData.gender;
          $template.querySelector(".a5").textContent = allData.origin.name;
          $template.querySelector(".a6").textContent = allData.location.name;

          let $clone = document.importNode($template, true);
            $fragment.appendChild($clone);
      });

      $dataCards.appendChild($fragment);
      //console.log($dataCards);




     /* let tarjetas=document.getElementById("tarjetas")
let tarjets =""
let pokemons = data.pokemon.forEach(p=>{
    tarjets +=`
    <article class="pokemon">
    <img src ="${p.image}">
    <h2 class = "card title">${p.name}</p>
    <p class = "card-text">${p.num}</p
    <p class = "card-text">${p.type}</p>
    </article>
    `
    console.log(tarjets)
    tarjetas.innerHTML=tarjets;
});

console.log(pokemons);

console.log(data);*/



      

