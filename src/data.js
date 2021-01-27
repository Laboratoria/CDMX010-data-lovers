// estas funciones son de ejemplo

export const rickandmorty = () => {
  return 'rickandmorty';
};

export function filterAlive(statusAlive, status) {

  const filterForAlive= statusAlive.filter(allData=> allData.status===status);
  
  return filterForAlive;
};

export function filterDead(statusDead, status) {

  const filterForDead= statusDead.filter(allData=> allData.status===status);
  
  return filterForDead;
};

export function filterFemale(genderFemale, gender) {

  const filterForFemale= genderFemale.filter(allData=> allData.gender===gender);
  
  return filterForFemale;
};

export function filterMale(genderMale, gender) {

  const filterForMale= genderMale.filter(allData=> allData.gender===gender);
  
  return filterForMale;
};
 
