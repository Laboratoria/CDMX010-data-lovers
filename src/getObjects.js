
import { infoEachPokePrinc} from './infoData.js';
import{setFunction} from './main.js'

export const getObjects = (nameFiltred, nameAllPokemon, allPokemon)=>{
    let indexNamesFiltredFinal = [];
    let objectsPokeFil = []; 
    nameFiltred.forEach((element) => {
        let indexNamesFiltred = nameAllPokemon.indexOf(element);
        indexNamesFiltredFinal.push(indexNamesFiltred);
        let objectsPoke = allPokemon[indexNamesFiltred];
        objectsPokeFil.push(objectsPoke);
    })
    let infoPrinPokeFil = "";
    objectsPokeFil.forEach((pokemon) => {
        infoPrinPokeFil += infoEachPokePrinc(pokemon);
    });
    document.getElementById('home-pokemon-info-container').innerHTML = infoPrinPokeFil;
    let container = document.getElementById('home-pokemon-info-container');
    let child = container.getElementsByClassName('buttonEachPokeC');
    setFunction(child);
}