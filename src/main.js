
import data from './data/rickandmorty/rickandmorty.js';

const characters = data.results;
console.log(characters[0].image)

// TODO: Crear una función que retorne una tarjeta
function createCard (character) {
    //template strings
    let card = `
        <div>
            <img src="${character.image}"></img>
            <p>${character.name}</p>
            <p>${character.status}</p>
            <p>${character.type}</p>
            <p>${character.gender}</p>
            <p>${character.origin.name}</p>
            <p>${character.location.name}</p>
           
        </div>
    `;

    return card;
}

// TODO: Función que muestra lás tarjetas

function renderCards() {
    let container = document.getElementById('container-characters');
    let html = '';
    // characters.forEach(character => html += createCard(character));
    for (let i = 0; i < characters.length; i++) {
        html += createCard(characters[i])
    }

    container.innerHTML = html;
}

renderCards();
