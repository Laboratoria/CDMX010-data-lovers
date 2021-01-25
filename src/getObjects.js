import { infoEachPokePrinc, getFunction} from './infoData.js';
import data from './data/pokemon/pokemon.js';

let allPokemon = data.pokemon;
let nameAllPokemon =[];
function allnames(){
    allPokemon.forEach((pokemon)=>{
        nameAllPokemon.push(pokemon.name);
    })
}
allnames();
export const getObjects = (nameFiltred)=>{
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
    objectsPokeFil.forEach ((pokemon) => {
    getFunction(pokemon);
    });
}