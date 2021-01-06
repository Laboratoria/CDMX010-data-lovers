
import data from './data/pokemon/pokemon.js';
console.log(data.pokemon);
//Se une la función "poke" al botón:
document.getElementById("home-main--button").addEventListener('click', infoPrincPokemon);
//Función "poke"
document.getElementById("main-logo-container").style.display = 'none';
document.getElementById("main-filter-container").style.display = 'none';


let namePokemon = [];
let numberPokemon = [];
let imgPokemon = [];

function infoPrincPokemon () {
    document.getElementById("home-main-section--welcome").style.display = 'none';
    document.getElementById("home-main-section--img").style.display = 'none';
    document.getElementById("main-logo-container").style.display = 'flex';
    document.getElementById("main-filter-container").style.display = 'flex';
    let allPokemon = data.pokemon;
    for (let i = 0; i < allPokemon.length; i++) {
        namePokemon[i] = allPokemon[i].name;
        imgPokemon[i] = allPokemon[i].img;
        numberPokemon[i] = allPokemon[i].num;
        let infoPokeContainer = document.createElement("div");
        let imgPokeContainer = document.createElement("div");
        let buttonPoke = document.createElement("button");
        let linkPoke = document.createElement("a");
        let imgPoke = document.createElement("img");
        let divpPoke = document.createElement("div");
        let pPoke = document.createElement("p");
        let pokeName = document.createTextNode(namePokemon[i] + " ");
        let pokeNum = document.createTextNode(numberPokemon[i]);
        infoPokeContainer.appendChild(imgPokeContainer);
        imgPokeContainer.appendChild(buttonPoke);
        buttonPoke.appendChild(linkPoke);
        linkPoke.appendChild(imgPoke);
        infoPokeContainer.appendChild(divpPoke);
        divpPoke.appendChild(pPoke);
        pPoke.appendChild(pokeName);
        pPoke.appendChild(pokeNum);
        infoPokeContainer.className = 'ind-info-pokemon-container';
        imgPokeContainer.className = 'img-pokemon-container';
        divpPoke.className = 'text-pokemon-container';
        buttonPoke.className = 'button-infoPoke';
        buttonPoke.setAttribute = ('onclick');
        buttonPoke.onclick = function () {infoEachPoke(namePokemon[i]);};
        imgPoke.src = imgPokemon[i];
        document.getElementById("home-pokemon-info-container").appendChild(infoPokeContainer);
        }

        function infoEachPoke (name) {
          console.log(name);
          let index = parseInt(namePokemon.indexOf(name));
          console.log(typeof index);
          /*console.log(allPokemon.name[index]);*/
          let namePoke = allPokemon[index].name;
          let numPoke = allPokemon[index].num;
          let imgPoke = allPokemon[index].img;
          let typePoke = allPokemon[index].type;
          let rarityPoke = allPokemon[index]["pokemon-rarity"];
          let resistantPoke = allPokemon[index].resistant;
          let weaknessesPoke = allPokemon[index].weaknesses;
          let sizePoke= allPokemon[index].size; 
          console.log(sizePoke);
          let weightPoke = sizePoke.weight;
          console.log(weightPoke);
          let heightPoke = sizePoke.height;
          console.log(heightPoke);
          /////////////////////////////////////////////////////////////////////
          //Ficha Técnica
          document.getElementById("data-sheet-container").style.display = 'block';
          let dataSheet = document.createElement('div');
          dataSheet.className = 'data-sheet';
          dataSheet.id = numPoke;
          
          //Crear elementos Data Sheet Head
          let dataSheetHead = document.createElement('div');
          dataSheetHead.className= 'data-sheet-head';
          let dataSheetImgContainer = document.createElement("div");
          dataSheetImgContainer.className= 'data-sheet-img-container';
          let generalData = document.createElement('div');
          generalData.className = ('general-data');
          let h2PokeName= document.createElement('h2');
          let spaces= document.createElement('br');
          let pPokeNumber= document.createElement('p');
          let pPokeType= document.createElement('p');
          let pPokeRarity= document.createElement('p');

          //Crear elementos Data Sheet Body
          let dataSheetBody =document.createElement('div');
          dataSheetBody.className= 'data-sheet-body';
          //Crear elementos Data Sheet Body Section 1
          let dataSheetBodySection1 = document.createElement('div');
          dataSheetBodySection1.className= 'data-sheet-body-section1';
          let dataSheetResistantContainer = document.createElement('div');
          dataSheetResistantContainer.className= 'data-sheet-resistant-container'
          let h3PokeResistant = document.createElement('h3');  
          let pPokeResistant = document.createElement('p');
          let dataSheetWeaknessesContainer = document.createElement('div');
          dataSheetWeaknessesContainer.className = 'data-sheet-weaknesses-container'
          let h3PokeWeaknesses = document.createElement('h3');  
          let pPokeWeaknesses = document.createElement('p');
          //Crear elementos Data Sheet Body Section 2
          let dataSheetBodySection2 = document.createElement('div');
          dataSheetBodySection2.className= 'data-sheet-body-section2';
          let physicalDataContainer= document.createElement('div');
          physicalDataContainer.className= 'physical-data-container';
          let h4PokeWeight = document.createElement('h4');
          let pPokeWeight= document.createElement('p');
          let h4PokeHeight = document.createElement('h4');
          let pPokeHeight= document.createElement('p');

          //Crear elementos Data Sheet Footer
          let dataSheetFooter = document.createElement('div');
          dataSheetFooter.className= 'data-sheet-footer';
          // crear elementos para el Botón Exit

          let exitContainer = document.createElement('div');
          exitContainer.className = 'exit-container';
          let exitButton = document.createElement('button');
          exitButton.className = 'exit-button';
          let exitIcon = document.createElement('img');
          exitIcon.src = "./assets/iconX.png";
          exitIcon.className= 'exit-icon';

          ////////////////////////////////////////////////////
          //Creación de nodos
          let dataSheetImg = document.createElement('img');
          dataSheetImg.src = imgPoke;
          let dataSheetName = document.createTextNode(namePoke);
          let dataSheetNum = document.createTextNode('No. Pokedex: ' + numPoke);
          let dataSheetType = document.createTextNode('Tipo: ' + typePoke);
          let dataSheetRarity = document.createTextNode('Rareza: ' + rarityPoke);
          let dataSheetResistant = document.createTextNode(resistantPoke);
          let resistantTitle = document.createTextNode('Resistente:');
          let dataSheetWeaknesses = document.createTextNode(weaknessesPoke);
          let weaknessesTitle = document.createTextNode('Debilidades:');
          let weightTitle = document.createTextNode('Peso:');
          let heightTitle = document.createTextNode('Altura:');
          let dataSheetWeight = document.createTextNode(weightPoke);
          let dataSheetHeight = document.createTextNode(heightPoke);
          /////////////////////////////////////////////////
          //AppendChilds Boton X
          dataSheet.appendChild(exitContainer);
          exitContainer.appendChild(exitButton);
          exitButton.appendChild(exitIcon);
          //AppendChilds Secciones del Data Sheet 
          dataSheet.appendChild(dataSheetHead);
          dataSheet.appendChild(dataSheetBody);
          dataSheet.appendChild(dataSheetFooter);
          //AppendChilds Secciones del Data Sheet Head
          dataSheetHead.appendChild(dataSheetImgContainer);
          dataSheetImgContainer.appendChild(dataSheetImg);
          dataSheetHead.appendChild(generalData);
          generalData.appendChild(h2PokeName);
          h2PokeName.appendChild(dataSheetName);
          generalData.appendChild(spaces);
          generalData.appendChild(pPokeNumber);
          pPokeNumber.appendChild(dataSheetNum);
          generalData.appendChild(pPokeType);
          pPokeType.appendChild(dataSheetType);
          generalData.appendChild(pPokeRarity);
          pPokeRarity.appendChild(dataSheetRarity);
          //AppendChilds Secciones del Data Sheet Body
          dataSheetBody.appendChild(dataSheetBodySection1);
          dataSheetBody.appendChild(dataSheetBodySection2);
          //AppendChilds Secciones del Data Sheet Body Section1
          dataSheetBodySection1.appendChild(dataSheetResistantContainer);
          dataSheetResistantContainer.appendChild(h3PokeResistant);
          dataSheetResistantContainer.appendChild(pPokeResistant);
          h3PokeResistant.appendChild(resistantTitle);
          pPokeResistant.appendChild(dataSheetResistant);
          //Debilidades
          dataSheetBodySection1.appendChild(dataSheetWeaknessesContainer);
          dataSheetWeaknessesContainer.appendChild(h3PokeWeaknesses);
          dataSheetWeaknessesContainer.appendChild(pPokeWeaknesses);
          h3PokeWeaknesses.appendChild(weaknessesTitle);
          pPokeWeaknesses.appendChild(dataSheetWeaknesses);
          //AppendChilds Secciones del Data Sheet Body Section1
          dataSheetBodySection2.appendChild(physicalDataContainer);
          physicalDataContainer.appendChild(h4PokeWeight); 
          h4PokeWeight.appendChild(weightTitle);
          physicalDataContainer.appendChild(pPokeWeight);
          pPokeWeight.appendChild(dataSheetWeight);
          //Altura
          physicalDataContainer.appendChild(h4PokeHeight); 
          h4PokeHeight.appendChild(heightTitle);
          physicalDataContainer.appendChild(pPokeHeight);
          pPokeHeight.appendChild(dataSheetHeight);
          ////////////////////////////////////////////
          //Imprimir Toda La Ficha técnica
          document.getElementById('data-sheet-container').appendChild(dataSheet);

        //////////////////////////////////////////////////////////////////////////////
        // Para borrar la ficha técnica dando click al botón 'Exit'
        let nodoABorrar = document.getElementById(numPoke);
        document.getElementById(numPoke).addEventListener('click', exitDataSheet);

        function exitDataSheet() {
        nodoABorrar.parentNode.removeChild(nodoABorrar);
        document.getElementById("data-sheet-container").style.display = 'none';
        }
        }
      }


let expanded = false;

function showCheckboxesNumber() {
  let checkboxes = document.getElementById("checkboxesNumber");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

document.getElementById("selectWeaknessesNumber").addEventListener('click', showCheckboxesNumber);

function showCheckboxesType() {
  let checkboxes = document.getElementById("checkboxesType");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
      checkboxes.style.display = "none";
      expanded = false;
    }
}

document.getElementById("selectPokemonType").addEventListener('click',  showCheckboxesType);
