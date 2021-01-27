
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

let botonAlive = document.getElementById("alive");

    botonAlive.addEventListener('click', function(){
        let container2 = document.getElementById("container-characters");
        let html2 = ""

            const aliveFilter = characters.filter(character => character.status === "Alive");
                aliveFilter.forEach((character) => html2 += createCard(character));
                container2.innerHTML=html2;
    }
    );

let botonDead = document.getElementById("dead");

    botonDead.addEventListener('click', function(){
        let container2 = document.getElementById("container-characters");
        let html2 = ""

            const deadFilter = characters.filter(character => character.status === "Dead");
                deadFilter.forEach((character) => html2 += createCard(character));
                container2.innerHTML=html2;
    }
    );



    const fiterCharacterGenderFemale=characters.filter(character => character.gender =="Female")
    const filterCharactersGenderMale = characters.filter(character => character.gender == "Male" )
    const filterCharactersGenderUnknown = characters.filter(character => character.gender == "unknown" )
    const filterCharactersSpecies = characters.filter(character => character.species.length)
    const fiterCharacterAlive=characters.filter(character => character.status =="Alive")
    const filterCharactersDead = characters.filter(character => character.status == "Dead")

         


        //console.log (fiterCharacterGenderFemale);
        //console.log (filterCharactersGenderMale);
        //console.log (filterCharactersGenderUnknown);
       
        //console.log (filterCharactersSpecies);
        //console.log (fiterCharacterAlive);
        //console.log (filterCharactersDead);

        

