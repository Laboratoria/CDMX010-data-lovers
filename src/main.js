import {rickandmorty} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

console.log(rickandmorty, data);
//const items = document.getElementById("items");
//const templateCard = document.getElementById("card-box").content;
const $cards = document.querySelector(".card"),

    $template = document.getElementById("card-box").content, 
    $fragment =document.createDocumentFragment(),
    $characters = data.results;
//console.log($characters);
//characters.forEach((role, ) => console.log (`${role.name}`));
    $characters.forEach((role) => {
        $template.querySelector("h2").textContent = role.name;
        $template.querySelector("img").setAttribute("src", role.image);
        $template.querySelector(".p1").textContent = "Status: " + role.status;
        $template.querySelector(".p2").textContent = "Specie: " + role.species;
        $template.querySelector(".p3").textContent = "Gender: " + role.gender;
        $template.querySelector(".p4").textContent = "Origin: " + role.origin.name;
        $template.querySelector(".p5").textContent = "Location: " + role.location.name;

        let $clone = document.importNode($template, true);
        $fragment.appendChild($clone);
    });

    $cards.appendChild($fragment);

    //console.log($cards);
/*const pintarData = (datos) => {
    datos.forEach((role) => {
        //templateCard.querrySelector("h2").textContent = role.name;
        let cardRole = `
        <article class = "box">
        <h2 class = "card-name">${role.name}</h2>
        <img src = "${role.image}">
        <p class = "card-text"> ${role.status}</p>
        <p class = "card-text"> ${role.species}</p>
        <p class = "card-text"> ${role.gender}</p>
        <p class = "card-text"> ${role.origin}</p>
        <p class = "card-text"> ${role.location}</p>
        </article>
        `;
        resultados.insertAdjacentHTML("beforeend", cardRole);
    });
}
pintarData(characters);*/
