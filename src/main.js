
import data from './data/rickandmorty/rickandmorty.js';

const characters = data.results;
//console.log(characters.name[0])



function createCard(character) {

    const card =
    
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

function renderCards() {

    let container = document.getElementById('container-characters');
    let html = '';
  
    
    characters.forEach( e => html += createCard(e)); 
    
    /*
        
    for (let i = 0; i < characters.length; i++) {
        html += createCard(characters[i])
    } */

    container.innerHTML = html;

}

renderCards();
//ESTA PARTE ES LA DEL FILTRADO:
//filtrado por gender Female .....

/*
let genderFilter=
*/  


    const fiterCharacterGenderFemale=characters.filter(character => character.gender =="Female")
    const filterCharactersGenderMale = characters.filter(character => character.gender == "Male" )
    const filterCharactersGenderUnknown = characters.filter(character => character.gender == "unknown" )
    const filterCharactersSpecies = characters.filter(character => character.species.length)


        
        console.log (fiterCharacterGenderFemale);
        console.log (filterCharactersGenderMale);
        console.log (filterCharactersGenderUnknown);
       
        console.log (filterCharactersSpecies);

    



