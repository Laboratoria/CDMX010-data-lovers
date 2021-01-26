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

let losAtletas=theAthletes.athletes;
let cards =(e)=>{
    let card = `
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
`;
    return card;
}

const buttonSearch3 = document.getElementById("buttonsearch2")
buttonSearch3.addEventListener("click", function teamFiltered() {
let teamUser=document.getElementById("teamInput").value;

let filterTeam= losAtletas.filter(x => x.team == teamUser)
let teamFiltered= filterTeam.map((e)=>{
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
document.getElementById("resultados").innerHTML= teamFiltered
});




/*let athletesData = "./data/athletes/athletes.json"

fetch("./data/athletes/athletes.json")
.then(res=>res.json())
//.then(data=> console.log(data)
.then(data=> console.log(data.athletes))
.catch(error=>console.log(error))

console.log(athletesData.length)*/



/*let athletesData = "./data/athletes/athletes.json"

fetch("./data/athletes/athletes.json")
.then(res=>res.json())
//.then(data=> console.log(data)
.then(data=> console.log(data["athletes"][0]["name"]))
.catch(error=>console.log(error))



console.log(athletesData.leght)*/
