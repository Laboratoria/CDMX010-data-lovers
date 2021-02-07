import data from './data/rickandmorty/rickandmorty.js';
import {filterAlive, filterDead, filterFemale, filterMale, orderAz, } from './data.js';

document.addEventListener('DOMContentLoaded',()=>{
    showCards(char)
})

const char = data.results;

    function Card(personaje) {
        return `
                <div class="information" >
                   <h2>${personaje.name}</h2>
                   <img src= "${personaje.image}"
                   <br>
                   <p>Status: ${personaje.status}</p>
                   <p>Specie: ${personaje.species}</p>
                   <p>Gender: ${personaje.gender}</p>
                   <p>Origin: ${personaje.origin.name}</p>
                <p>Location: ${personaje.location.name}</p>
                </div>
        
               `
    }

    function showCards(personajes) {
        const Cards = document.getElementById('container')
        
        let conteiner = ''
        personajes.forEach((personaje) =>  {
            conteiner += Card(personaje)
        });
       
        Cards.innerHTML = conteiner;

    }


    let bottonAlive = document.getElementById("alive")
    bottonAlive.addEventListener("click", () => {
    const personajes = filterAlive(char, 'Alive')
     
      showCards(personajes)

});

    // let bottonAlive = document.getElementById("alive")
    //     bottonAlive.addEventListener("click", () => {
    //     const personajes = filterAlive(char, 'Alive')
         
    //       showCards(personajes)
    //       console.log(filterAlive(char, 'Alive'));
    // });

    let bottonDead = document.getElementById("dead")
        bottonDead.addEventListener("click", () => {
        const personajes = filterDead(char, 'Dead')
         
          showCards(personajes)

    });

    let bottonFemale = document.getElementById("female")
        bottonFemale.addEventListener("click", () => {
        const personajes = filterFemale(char, 'Female')
         
          showCards(personajes)

    });

    let bottonMale = document.getElementById("male")
        bottonMale.addEventListener("click", () => {
        const personajes = filterMale(char, 'Male')
         
          showCards(personajes)
        

    });

    let bottonABC = document.getElementById("abc")
        bottonABC.addEventListener("click", () => {
        const personajes = orderAz(char,)
         
          showCards(personajes)

    });

