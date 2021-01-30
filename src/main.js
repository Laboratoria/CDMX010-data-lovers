import data from './data/rickandmorty/rickandmorty.js';
import {rickandmorty, filterAlive, filterDead, filterFemale, filterMale, orderAz, } from './data.js';

console.log(rickandmorty);

const $dataCards= document.querySelector(".information"),
      $template= document.getElementById("card").content,
      $fragment= document.createDocumentFragment(),
      char= data.results;

      char.forEach( (allData) => {
          $template.querySelector("h2").textContent = allData.name;
          $template.querySelector("img").setAttribute("src",allData.image);
          $template.querySelector(".a1").textContent = allData.status;
          $template.querySelector(".a2").textContent = allData.species;
          $template.querySelector(".a3").textContent = allData.type;
          $template.querySelector(".a4").textContent = allData.gender;
          $template.querySelector(".a5").textContent = allData.origin.name;
          $template.querySelector(".a6").textContent = allData.location.name;

          let $clone = document.importNode($template, true);
            $fragment.appendChild($clone);
      });
      $dataCards.appendChild($fragment);
     
//FILTRADO VIVOS//

      const statusAlive = data.results;
      console.log(filterAlive(statusAlive, 'Alive'));
      let bo = document.getElementById("alive");
      bo.addEventListener("click", () =>  {
         document.getElementById("b").style.display = "none";
         document.getElementById("c").style.display = "block";
        let dataFilter= filterAlive(statusAlive, 'Alive');
        const $template= document.getElementById("aliveFilter").content,
              $dataCards= document.querySelector(".infoFilter"),
              $fragment= document.createDocumentFragment();
      
       //Toda la data//       
              dataFilter.forEach( (allData) => {
                $template.querySelector("h2").textContent = allData.name;
                $template.querySelector("img").setAttribute("src",allData.image);
                $template.querySelector(".a1").textContent = allData.status;
                $template.querySelector(".a2").textContent = allData.species;
                $template.querySelector(".a3").textContent = allData.type;
                $template.querySelector(".a4").textContent = allData.gender;
                $template.querySelector(".a5").textContent = allData.origin.name;
                $template.querySelector(".a6").textContent = allData.location.name;
      
                let $clone = document.importNode($template, true);
                  $fragment.appendChild($clone);
                
            });
      
            $dataCards.appendChild($fragment);
      });
//FILTRADO MUERTOS
      const statusDead = data.results;
     console.log(filterDead(statusDead, 'Dead'));
      let boo = document.getElementById("dead");
      boo.addEventListener("click", () =>  {
         document.getElementById("b").style.display = "none";
         document.getElementById("c").style.display = "block";
        let dataFilter = filterDead(statusDead, 'Dead');
        const $template= document.getElementById("aliveFilter").content,
              $dataCards= document.querySelector(".infoFilter"),
              $fragment= document.createDocumentFragment();
      
       //Toda la data//       
              dataFilter.forEach( (allData) => {
                $template.querySelector("h2").textContent = allData.name;
                $template.querySelector("img").setAttribute("src",allData.image);
                $template.querySelector(".a1").textContent = allData.status;
                $template.querySelector(".a2").textContent = allData.species;
                $template.querySelector(".a3").textContent = allData.type;
                $template.querySelector(".a4").textContent = allData.gender;
                $template.querySelector(".a5").textContent = allData.origin.name;
                $template.querySelector(".a6").textContent = allData.location.name;
      
                let $clone = document.importNode($template, true);
                  $fragment.appendChild($clone);
                
            });
      
            $dataCards.appendChild($fragment);
      });

      const genderFemale = data.results;
     console.log(filterFemale(genderFemale, 'Female'));
      let booo = document.getElementById("female");
      booo.addEventListener("click", () =>  {
         document.getElementById("b").style.display = "none";
         document.getElementById("c").style.display = "block";
        let dataFilter = filterFemale(genderFemale, 'Female');
        const $template= document.getElementById("aliveFilter").content,
              $dataCards= document.querySelector(".infoFilter"),
              $fragment= document.createDocumentFragment();
      
       //Toda la data//       
              dataFilter.forEach( (allData) => {
                $template.querySelector("h2").textContent = allData.name;
                $template.querySelector("img").setAttribute("src",allData.image);
                $template.querySelector(".a1").textContent = allData.status;
                $template.querySelector(".a2").textContent = allData.species;
                $template.querySelector(".a3").textContent = allData.type;
                $template.querySelector(".a4").textContent = allData.gender;
                $template.querySelector(".a5").textContent = allData.origin.name;
                $template.querySelector(".a6").textContent = allData.location.name;
      
                let $clone = document.importNode($template, true);
                  $fragment.appendChild($clone);
                
            });
      
            $dataCards.appendChild($fragment);
      });


      const genderMale = data.results;
     console.log(filterMale(genderMale, 'Male'));
      let boooo = document.getElementById("male");
      boooo.addEventListener("click", () =>  {
         document.getElementById("b").style.display = "none";
         document.getElementById("c").style.display = "block";
        let dataFilter = filterMale(genderMale, 'Male');
        const $template= document.getElementById("aliveFilter").content,
              $dataCards= document.querySelector(".infoFilter"),
              $fragment= document.createDocumentFragment();
                  
              dataFilter.forEach( (allData) => {
                $template.querySelector("h2").textContent = allData.name;
                $template.querySelector("img").setAttribute("src",allData.image);
                $template.querySelector(".a1").textContent = allData.status;
                $template.querySelector(".a2").textContent = allData.species;
                $template.querySelector(".a3").textContent = allData.type;
                $template.querySelector(".a4").textContent = allData.gender;
                $template.querySelector(".a5").textContent = allData.origin.name;
                $template.querySelector(".a6").textContent = allData.location.name;
      
                let $clone = document.importNode($template, true);
                  $fragment.appendChild($clone);
                
            });
      
            $dataCards.appendChild($fragment);
      });


//PRUEBAS//

const nameOrder = data.results; 
     console.log(orderAz(nameOrder,'name'));
     let abcOrder = document.getElementById("abc");
   abcOrder.addEventListener("click", () => {
      document.getElementById("b").style.display = "none";
      document.getElementById("c").style.display = "block";
  let orderData = orderAz(nameOrder, 'name');
  const $template= document.getElementById("aliveFilter").content,
  $dataCards= document.querySelector(".infoFilter"),
  $fragment= document.createDocumentFragment()

  orderData.forEach( (allData) => {
    $template.querySelector("h2").textContent = allData.name;
    $template.querySelector("img").setAttribute("src",allData.image);
    $template.querySelector(".a1").textContent = allData.status;
    $template.querySelector(".a2").textContent = allData.species;
    $template.querySelector(".a3").textContent = allData.type;
    $template.querySelector(".a4").textContent = allData.gender;
    $template.querySelector(".a5").textContent = allData.origin.name;
    $template.querySelector(".a6").textContent = allData.location.name;

    let $clone = document.importNode($template, true);
      $fragment.appendChild($clone);
    
});

$dataCards.appendChild($fragment);
});

//  de la Z a la A//
// const nameOrderZa = data.results; 
//      console.log(orderZa(nameOrderZa,'name'));
  
//    let abcOrderZa = document.getElementById("abc");
//    abcOrderZa.addEventListener("click", () => {
//       //aquí va lo que oculta la data//
//   let orderDataZa = orderZa(nameOrderZa, 'name');
//   const $template= document.getElementById("aliveFilter").content,
//   $dataCards= document.querySelector(".infoFilter"),
//   $fragment= document.createDocumentFragment()

//   orderDataZa.forEach( (allData) => {
//     $template.querySelector("h2").textContent = allData.name;
//     $template.querySelector("img").setAttribute("src",allData.image);
//     $template.querySelector(".a1").textContent = allData.status;
//     $template.querySelector(".a2").textContent = allData.species;
//     $template.querySelector(".a3").textContent = allData.type;
//     $template.querySelector(".a4").textContent = allData.gender;
//     $template.querySelector(".a5").textContent = allData.origin.name;
//     $template.querySelector(".a6").textContent = allData.location.name;

//     let $clone = document.importNode($template, true);
//       $fragment.appendChild($clone);
    
// });

// $dataCards.appendChild($fragment);
// });