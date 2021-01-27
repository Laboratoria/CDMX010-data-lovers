import theAthletes from './data/athletes/athletes.js';

const butShowAll= document.getElementById("buttonShowAll");
butShowAll.addEventListener ("click", function showCards() {
    
    let cardsFunction = losAtletas.map((e)=>{
        return  `
        <div class="cardAthletes">
        <img class="logochico" src="assets/logo rio de janeiro.png">
        <h1 class="name">Name: ${e.name}</h1>
        <h2>Gender: ${e.gender}</h2>
        <h2>Height: ${e.height}</h2>
        <h2>Weight: ${e.weight}</h2>
        <h2>Sport: ${e.sport}</h2>
        <h2>Team: ${e.team}</h2>
        <h2>Age: ${e.age}</h2>
        <h2>Event: ${e.event}</h2>
        <h2>Medal: ${e.medal}</h2>
        </div>
        `
    }).join(" ");
    document.getElementById("resultados").innerHTML= cardsFunction
});


const selectGender = document.querySelector("#genderFilter");
const selectMedal = document.querySelector("#medalFilter");
const selectTeam = document.querySelector("#teamFilter");
const buttonSearch = document.getElementById("buttonsearch2");

let cards = (athlete) => {
    let card = `
    <div class="cardAthletes">
    <img class="logochico" src="assets/logo rio de janeiro.png">
    <h1 class="name">Name: ${athlete.name}</h1>
    <h2>Gender: ${athlete.gender}</h2>
    <h2>Height: ${athlete.height}</h2>
    <h2>Weight: ${athlete.weight}</h2>
    <h2>Sport: ${athlete.sport}</h2>
    <h2>Team: ${athlete.team}</h2>
    <h2>Age: ${athlete.age}</h2>
    <h2>Event: ${athlete.event}</h2>
    <h2>Medal: ${athlete.medal}</h2>
    </div>
    `;
    return card;
}

buttonSearch.addEventListener("click", function theGenderFilter() {
    let athletesFilter = theAthletes.athletes;
    let html1 = ""
    let results = document.querySelector("#resultados");
   
    let filterGender = athletesFilter.filter( athlete => athlete.gender === selectGender.value && athlete.medal === selectMedal.value && athlete.team === selectTeam.value)
    filterGender.forEach( athlete => { html1 += cards(athlete)})
       
    console.log('filterGender',filterGender);

    console.log(theGenderFilter);
    console.log(filterGender);
    console.log(selectGender.value);
    console.log(selectMedal.value);
    
    results.innerHTML= html1;
});



/*//lo mio
// import data from './data/rickandmorty/rickandmorty.js';
const showAll = document.getElementById('button1');
showAll.addEventListener ('click', function useMap() {
    const losAthletes= theAthletes.athletes;
    const unosAthletes= losAthletes.map((e) => {
        return `
        <div id="tarjets">
        <p> Name: ${e.name}</p>
        <p> Gender: ${e.gender}</p>
        <p> Height: ${e.height}</p>
        <p> Weight: ${e.weight}</p>
        <p> Sport: ${e.sport}</p>
        <p> Team: ${e.team}</p>
        <p> Noc: ${e.noc}</p>
        <p> Age: ${e.age}</p>
        <p> Event: ${e.event}</p>
        <p> Medal: ${e.medal}</p>
        </div>
        `    
        }).join(" ");
    document.getElementById("tarjet").innerHTML=unosAthletes;   
    const cardStyle  = document.getElementById('tarjet');
        cardStyle.style.padding = '5px';
        cardStyle.style.display = flex-box;
        cardStyle.style.justifyContent = space-between;
                });
/*const showAll2 = document.getElementById('button1');
showAll2.addEventListener ('click', function useForEach() {
    const losAthletes= theAthletes.athletes;
    const unosAthletes= losAthletes.forEach( e => {
        console.log(unosAthletes);
        const card =  `
        <div id="tarjets">
        <p> Name: ${e.name}</p>
        <p> Gender: ${e.gender}</p>
        <p> Height: ${e.height}</p>
        <p> Weight: ${e.weight}</p>
        <p> Sport: ${e.sport}</p>
        <p> Team: ${e.team}</p>
        <p> Noc: ${e.noc}</p>
        <p> Age: ${e.age}</p>
        <p> Event: ${e.event}</p>
        <p> Medal: ${e.medal}</p>
        </div>
        ` 
    const cards = document.createElement("div");
    cards.innerHTML = card;
    document.body.main.article.appendChild(cards.firstChild);
});
});
let athletesFilter = theAthletes.athletes;
athletesFilter.filter(function(athFilter) {
    return athFilter.gender === "F";
})
.map(function(athFilter) {
    return athFilter.gender;
});
import {theAthletes} from "./data/athletes/athletes.js"
// import data from './data/rickandmorty/rickandmorty.js';
const showAll = document.getElementById('button1');
showAll.addEventListener ('click', function useMap() {
    const losAthletes= theAthletes.athletes;
    const unosAthletes= losAthletes.map((e) => {
        return `
        <div id="tarjets">
        <p> Name: ${e.name}</p>
        <p> Gender: ${e.gender}</p>
        <p> Height: ${e.height}</p>
        <p> Weight: ${e.weight}</p>
        <p> Sport: ${e.sport}</p>
        <p> Team: ${e.team}</p>
        <p> Noc: ${e.noc}</p>
        <p> Age: ${e.age}</p>
        <p> Event: ${e.event}</p>
        <p> Medal: ${e.medal}</p>
        </div>
        `    
        }).join(" ");
    document.getElementById("tarjet").innerHTML=unosAthletes;   
    const cardStyle  = document.getElementById('tarjet');
        cardStyle.style.padding = '5px';
        cardStyle.style.display = flex-box;
        cardStyle.style.justifyContent = space-between;
                });
/*const showAll2 = document.getElementById('button1');
showAll2.addEventListener ('click', function useForEach() {
    const losAthletes= theAthletes.athletes;
    const unosAthletes= losAthletes.forEach( e => {
        console.log(unosAthletes);
        const card =  `
        <div id="tarjets">
        <p> Name: ${e.name}</p>
        <p> Gender: ${e.gender}</p>
        <p> Height: ${e.height}</p>
        <p> Weight: ${e.weight}</p>
        <p> Sport: ${e.sport}</p>
        <p> Team: ${e.team}</p>
        <p> Noc: ${e.noc}</p>
        <p> Age: ${e.age}</p>
        <p> Event: ${e.event}</p>
        <p> Medal: ${e.medal}</p>
        </div>
        ` 
    const cards = document.createElement("div");
    cards.innerHTML = card;
    document.body.main.article.appendChild(cards.firstChild);
});
});*/