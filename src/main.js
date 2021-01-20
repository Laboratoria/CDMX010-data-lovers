import theAthletes from './data/athletes/athletes.js';
let losAtletas=theAthletes.athletes;
//console.log(theAthletes.athletes[0].name)
const butShowAll= document.getElementById("buttonShowAll");
butShowAll.addEventListener ("click", function showCards() {
    
let cardsFunction = losAtletas.map((e)=>{
    return `
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



