import data from './data/pokemon/pokemon.js';
console.log(data.pokemon);
let allPokemon = data.pokemon;
let weaknessesEachPokemon= [];
let filterNumber = 0;
let numberWeaknessesEachPokemon= [];
let namePokePoke = ['w1','w2','w3','w4','w5','w6','w7','t1','t2','t3','t4','t5','t6','t7','t8','t9','t10','t11','t12','t13','t14','t15','t16','t17','t18'];

let conjunto=[];
let filtroFinal= [];
let resultFilterWeaknessesNumber=[];

/*
export const filterFunctions = {
    pokemonTypeFilterAdd: function(typeDefinition){
    conjunto[typeDefinition] = [];
    let namesToPokemonType = function(element){
    let memoriaT= element.type;
    for (const value of memoriaT) {
        if(value ==typeDefinition){
        let nameType= element.name;
        conjunto[typeDefinition].push(nameType);
        }
    }
    
    allPokemon.forEach(namesToPokemonType);
    console.log(conjunto[filterNumber]);
    }
    return conjunto[filterNumber];
}   

} */




export const filterFunctions = (typeDefinition, pokemon) => {
        console.log(data.pokemon);
        console.log(allPokemon.name);
        conjunto[typeDefinition] = [];
        let namesToPokemonType = function(element){
        let memoriaT= element.type;
            for (const value of memoriaT) {
                if(value ==typeDefinition){
                let nameType= element.name;
                conjunto[typeDefinition].push(nameType);
                }
            }
        }
        allPokemon.forEach(namesToPokemonType);
        console.log(conjunto[filterNumber]);
        
        return conjunto[filterNumber];
}
