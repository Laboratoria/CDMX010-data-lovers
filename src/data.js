// import data from './data/rickandmorty/rickandmorty.js';



// export const filterAlive = (personaje) => {

//   const personajes = personaje.filter(all => {
//     return all.status === status;
//   });
  
//   return personajes;
// }

export function filterAlive(personajes, status) {

  const personajesFiltrados = personajes.filter(personaje => personaje.status === status);
  
  return personajesFiltrados;
}


export function filterDead(statusDead, status) {

  const filterForDead= statusDead.filter(allData=> allData.status===status);
  
  return filterForDead;
}

export function filterFemale(genderFemale, gender) {

  const filterForFemale= genderFemale.filter(b => b.gender===gender);
  
  return filterForFemale;
}

export function filterMale(genderMale, gender) {

  const filterForMale= genderMale.filter(allData=> allData.gender===gender);
  
  return filterForMale;
}
 

export function orderAz(s){
  const orderSort= s.sort((a, b) =>{
    if (a.name > b.name ) {
      return 1;
    }
    if (a.name < b.name){
      return -1;
    }
    return 0;
  });
  return orderSort;
}


