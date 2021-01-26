import data from './data/pokemon/pokemon.js';
let conjunto=[];
let resultFilterWeaknessesNumber=[];
let namePokePoke = ['t1','t2','t3','t4','t5','t6','t7','t8','t9','t10','t11','t12','t13','t14','t15','t16','t17','t18'];
let resultFilterType= [];

let allPokemon = data.pokemon;
let nameAllPokemon =[];
function allnames(){
    allPokemon.forEach((pokemon)=>{
        nameAllPokemon.push(pokemon.name);
    })
}
allnames();
let finalFilter= [];
///////////FILTRO NUM DEBILIDADES/////////////////
export const weaknessesNumberFilterAdd = (filterNumber)=>{//, allPokemon, finalFilter) =>{
    conjunto[filterNumber] = [];
    allPokemon.forEach((element) =>{
        let memoria= element.weaknesses;
        if(memoria.length== filterNumber){
            let nameWeaknesses= element.name; 
            conjunto[filterNumber].push(nameWeaknesses);
        } 
    });
    resultFilterWeaknessesNumber = conjunto[filterNumber];
  ////COMBINANDO FILTROS////
    finalFilter = [];
    if(resultFilterType.length==0){
        finalFilter= resultFilterWeaknessesNumber;
    } else{
        for(const value of resultFilterWeaknessesNumber){
            let namepokeD = value;
            for(const value of resultFilterType){
                if(value == namepokeD){
                finalFilter.push(value);
                }
            }
        }
    }
    //console.log(finalFilter);
    return finalFilter;
}
//////////QUITAR FILTRO NUM DEBILIDADES//////////
export const weaknessesNumberFilterQuit= ()=>{//(finalFilter, nameAllPokemon) =>{
    resultFilterWeaknessesNumber =[];
    ////COMBINANDO FILTROS////
    finalFilter = [];
    if(resultFilterWeaknessesNumber.length==0 && resultFilterType.length!=0){
        finalFilter= resultFilterType;
    } else if(resultFilterWeaknessesNumber.length==0 && resultFilterType.length==0){
        finalFilter= nameAllPokemon;
    }
    return finalFilter; 
}

//////////FILRO TIPO POKEMON//////////
export const pokemonTypeFilterAdd= (typeDefinition,positionArrayType)=>{ //allPokemon, , finalFilter) =>{
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
    //para colocar el arreglo en su posición asignada///
    let positionInarray= positionArrayType -1;
    namePokePoke.splice(positionInarray,1,conjunto[typeDefinition]);
    // PARA TENER TODOS LOS NOMBRES DE LOS FILROS EN UN SOLO ARREGLO.
    let TodosLosNombresJuntos = [];
    for (const value of namePokePoke){
        let positionValue = namePokePoke.indexOf(value);
        let tNumberToArray = positionValue + 1;
        if(value == 't' + tNumberToArray){
            //console.log('t'+ iMenos6);
        } else {
            let arrayN= value;
            //console.log(arrayN);
            for(const value of arrayN){
                let cadaNamePoke= value;
                //console.log(cadaNamePoke);
                TodosLosNombresJuntos.push(cadaNamePoke);
            }
        }
    }
    let deleteNamesRepeat = TodosLosNombresJuntos.filter((item,index)=>{
        return TodosLosNombresJuntos.indexOf(item) === index;
    })
    //console.log(deleteNamesRepeat);
    resultFilterType= deleteNamesRepeat;
    ////COMBINANDO FILTROS////
    finalFilter = [];
    if(resultFilterWeaknessesNumber.length==0){
        finalFilter= resultFilterType;
    } else{
        for(const value of resultFilterWeaknessesNumber){
            let namepokeD = value;
            for(const value of resultFilterType){
                if(value == namepokeD){
                finalFilter.push(value);
                }
            }
        }
    }
    //console.log(finalFilter);
    return finalFilter;
}

//////////QUITAR FILTRO TIPO POKEMON//////////
export const pokemonTypeFilterQuit= (positionArrayType)=>{ //, finalFilter, nameAllPokemon)=>{
    //para retirar el arreglo correspondiente
    let positionInarray= positionArrayType -1;
    namePokePoke.splice(positionInarray,1,'t' + positionArrayType);
    //console.log(namePokePoke); 
    // PARA TENER TODOS LOS NOMBRES DE LOS FILROS EN UN SOLO ARREGLO.
    let TodosLosNombresJuntos = [];
    for (const value of namePokePoke){
        let positionValue = namePokePoke.indexOf(value);
        let tNumberToArray = positionValue + 1;
        if(value == 't' + tNumberToArray){
            //console.log('t'+ iMenos6);
        } else {
            let arrayN= value;
            //console.log(arrayN);
            for(const value of arrayN){
                let cadaNamePoke= value;
                //console.log(cadaNamePoke);
                TodosLosNombresJuntos.push(cadaNamePoke);
            }
        }
    }
    //console.log(TodosLosNombresJuntos);
    let deleteNamesRepeat = TodosLosNombresJuntos.filter((item,index)=>{
        return TodosLosNombresJuntos.indexOf(item) === index;
    })
    //console.log(deleteNamesRepeat);
    resultFilterType= deleteNamesRepeat;
    ////COMBINANDO FILTROS////
    finalFilter = [];
    if(resultFilterWeaknessesNumber.length==0 && resultFilterType.length!=0){
        finalFilter= resultFilterType;
    } else if(resultFilterWeaknessesNumber.length!=0 && resultFilterType.length!=0){
        for(const value of resultFilterWeaknessesNumber){
            let namepokeD = value;
            for(const value of resultFilterType){
                if(value == namepokeD){
                    finalFilter.push(value);
                }
            }
        }
    } else if(resultFilterWeaknessesNumber.length!=0 && resultFilterType==0){
        finalFilter= resultFilterWeaknessesNumber;
    } else if(resultFilterWeaknessesNumber.length==0 && resultFilterType==0){
        finalFilter= nameAllPokemon;
    }
    //console.log(finalFilter);
    return finalFilter;
}