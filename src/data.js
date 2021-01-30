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

  const filterForFemale= genderFemale.filter(b => b.gender===gender);
  
  return filterForFemale;
};

export function filterMale(genderMale, gender) {

  const filterForMale= genderMale.filter(allData=> allData.gender===gender);
  
  return filterForMale;
};
 

 
// export function orderAz(nameOrder, name) { 

//   const oorderSort = nameOrder.sort(allData => allData.name===name);
//  const orderSort= nameOrder.sort( allData => allData.name===name);
//  return (oorderSort < orderSort); 

//     const orderToAZ = nameOrder.sort((a-b) => allData.name ====name); 

//  return (a.name < b.name);
 
     
//  };
 
   /*Const oorderSort= nameOrder.sort( a => a.name===name);
 const orderSort= nameOrder.sort( b => b.name===name);
 return (oorderSort < orderSort); */
/* const orderToAZ = nameOrder.sort((a-b) => allData.name ====name); */

// function myFunction() {
//   fruits.sort();
//   fruits.reverse();
// }


// var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
// items.sort(function (a, b) {
//   return a.localeCompare(b);
// });

// 

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
};
// // console.log(orderAz);

// export function orderZa(sZa){
//   const orderSortZa= sZa.sort((c, d) =>{
//     if (c.name < d.name ) {
//       return 1;
//     }
//     if (c.name > d.name){
//       return -1;
//     }
//     return 0;
//   });
//    return orderSortZa;
// };

//console.log(orderZa);
