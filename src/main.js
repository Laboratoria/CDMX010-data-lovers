
import data from './data/rickandmorty/rickandmorty.js';

const characters = data.results;



function createCard (character) {

    let card =
    
    `
    <div class="card">

        <div>
            <img class="characterImage" src=${character.image}></img>
        </div>

        <div class="status">
            <P>STATUS:</P><P>${character.status}</P>
        </div>
     
        <div class="boxName">
            <H2 class="name">${character.name}</H2>
            <p> <b> SPECIES:</b> ${character.species}</p>
            <p> <b> GENDER:</b> ${character.gender}</p>
            <p> <b> ORIGIN:</b> ${character.origin.name}</p>    
        </div>
    
    </div>
      
    `
    ;
    return card;
}

createCard(characters[0]);

function renderCards() {

    let container = document.getElementById('container-characters');
    let html = '';
  
    
    characters.forEach( e => html += createCard(e)); 
    
    
        
    for (let i = 0; i < characters.length; i++) {
        html += createCard(characters[i])
    } 

    container.innerHTML = html;

}
renderCards();


