import {theAthletes} from './data/athletes/athletes.js';

const butShowAll= document.getElementById("buttonShowAll");
butShowAll.addEventListener ("click", function showCards() {
    const losAtletas = theAthletes.athletes;
    let cardsFunction = losAtletas.map((athlete)=>{
        return  `
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
        `
    }).join(" ");
    document.getElementById("resultados").innerHTML= cardsFunction
});

// ya aniadi las variables

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
    console.log(selectTeam.value);
    
    results.innerHTML= html1;
    

    const theTotal = filterGender.length;
    let element = document.createElement("p")
    element.textContent = `${theTotal} Total`
    const nav = document.querySelector("#totalFilter");
    nav.appendChild(element);
    
    nav.innerHTML = theTotal;
    console.log(filterGender.length);

});  

const losAtletas2 = theAthletes.athletes;
losAtletas2.sort( function (a,b) {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
});

// muestra una lista con total de los equipos ganadores 

document.getElementById("allCountries").addEventListener("click", function () {
    const importedAthletes=theAthletes.athletes;
    let countries = importedAthletes.slice(0);
    countries.sort(function(a,b) {
         var x = a.team.toLowerCase(); 
         var y = b.team.toLowerCase(); 
        return x < y ? -1 : x > y ? 1 : 0;
    });
    let countriesOne = [...new Set(countries.map(item => item.team))];
  
    //const countTeams=countriesOne.length;
    //let element = document.createElement("p");
    //element.textContent = `${countTeams} Equipos ganaron medallas `;
    //const parrafonuevo = document.querySelector("#totalTeams");
    //parrafonuevo.appendChild(element);
    //parrafonuevo.innerHTML =  element.textContent;
    //console.log(countTeams);
    //console.log(countriesOne.length);
    //<div id="totalTeams"></div>  
    
    let cardsFunction22 = () => {
        let containerCards22 = document.getElementById("card");
      let html = `
       <div class="cardTeam" >
                 <img src="assets/logo rio de janeiro.png" class="mediumLogo">
                              
       </div>
      <table>  
        <tr>
        `;
          countriesOne.map(( country ) => {
            let card22 = `
                 <td class="itemTeam"> ${country} </td> 
                 `
                html += card22 ;                     
          }); 
          html += `
        </tr>
      </table>
          `; 
      containerCards22.innerHTML = html;
    };
    cardsFunction22()
  });
  
  