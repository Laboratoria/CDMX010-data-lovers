
import { filterAlive, filterDead, filterFemale, filterMale, orderAz } from '../src/data.js';
import { mock, mockAZ } from './dataTesing.js';


// const personajes =  [{
//     "id": 1,
//     "name": "Rick Sanchez",
//     "status": "Alive",
//     "species": "Human",
//     "type": "",
//     "gender": "Male",
//     "origin": {
//         "name": "Earth (C-137)",
//         "url": "https://rickandmortyapi.com/api/location/1"
//     },
//     "location": {
//         "name": "Earth (Replacement Dimension)",
//         "url": "https://rickandmortyapi.com/api/location/20"
//     },
//     "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg",
//     "url": "https://rickandmortyapi.com/api/character/1",
//     "created": "2017-11-04T18:48:46.250Z"
//   },
//   {
//     "id": 2,
//     "name": "Morty Smith",
//     "status": "Alive",
//     "species": "Human",
//     "type": "",
//     "gender": "Male",
//     "origin": {
//         "name": "Earth (C-137)",
//         "url": "https://rickandmortyapi.com/api/location/1"
//     },
//     "location": {
//         "name": "Earth (Replacement Dimension)",
//         "url": "https://rickandmortyapi.com/api/location/20"
//     },
//     "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/2.jpeg",
//     "url": "https://rickandmortyapi.com/api/character/2",
//     "created": "2017-11-04T18:50:21.651Z"
//   },
//   {
//     "id": 3,
//     "name": "Summer Smith",
//     "status": "Alive",
//     "species": "Human",
//     "type": "",
//     "gender": "Female",
//     "origin": {
//         "name": "Earth (Replacement Dimension)",
//         "url": "https://rickandmortyapi.com/api/location/20"
//     },
//     "location": {
//         "name": "Earth (Replacement Dimension)",
//         "url": "https://rickandmortyapi.com/api/location/20"
//     },
//     "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/3.jpeg",
//     "url": "https://rickandmortyapi.com/api/character/3",
//     "created": "2017-11-04T19:09:56.428Z"
//   },
//   {
//     "id": 4,
//     "name": "Beth Smith",
//     "status": "Dead",
//     "species": "Human",
//     "type": "",
//     "gender": "Female",
//     "origin": {
//         "name": "Earth (Replacement Dimension)",
//         "url": "https://rickandmortyapi.com/api/location/20"
//     },
//     "location": {
//         "name": "Earth (Replacement Dimension)",
//         "url": "https://rickandmortyapi.com/api/location/20"
//     },
//     "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/4.jpeg",
//     "url": "https://rickandmortyapi.com/api/character/4",
//     "created": "2017-11-04T19:22:43.665Z"
//   }
// ] 

//  describe('filterAlive', () => {
//   it('is a function', () => {
//     expect(typeof filterAlive).toBe('function');
//   });

//   it ('deberia retornar los personajes vivos cuando el filtro es vivo', () => {
//     const personajesFiltrados = filterAlive(personajes,'Alive')
//     expect(personajesFiltrados).toBe('Alive');

//     personajesFiltrados.forEach((personaje) => {
//       expect(personaje.status).toBe('Alive');
//     })
//   })
 
// });

/*La de Jael*/

describe('Este test es para detectar que el filtro de vivo, muerto, femenino y masculino funcione', () => {
  it('is a function', () => {
    expect(typeof filterAlive).toEqual('function');
  });

  it ('deberia retornar los personajes vivos cuando el filtro es vivo', () => {
    const vivos = filterAlive(mock,'Alive')
    expect(vivos.lenght).toEqual(3);

  });

  it ('deberia retornar los personajes muertos cuando el filtro es Dead', () => {
    const muertos= filterDead(mock,'Dead')
    expect(muertos.lenght).toEqual(1);

  });
  
  it ('deberia retornar los personajes femeninos cuando el filtro es Female', () => {
    const femeninos= filterFemale(mock,'Female')
    expect(femeninos.lenght).toEqual(2);

  });

  it ('deberia retornar los personajes masculinos cuando el filtro es Male', () => {
    const masculinos= filterMale(mock,'Male')
    expect(masculinos.lenght).toEqual(2);

  });
}); 

describe('Este test es para probar la función orderAZ', () => {
  it('is a function', () => {
    expect(typeof orderAZ).toEqual('function');
  });

  it ('deberia ordenar alfabeticamente', () => {
  
    expect(orderAz(mock)).toStrictEqual(mockAZ);

  });  
}); 

// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
/*PRUEBAS MARILIZ*/

// describe ('filterAlive', () => {
//   it ('is a function', () =>{
//     expect (typeof filterAlive).toBe('function');
//   });
//  it ('debería retornar los personajes vivos cuando el filtro es vivo', () =>{
//    const personajesFiltrados = filterAlive( mock, 'Alive')
//    expect (personajesFiltrados).toBe('Alive');

//  }) 
// })

// describe('filterAlive', () => {
//   it('is a function', () => {
//     expect(typeof filterAlive).toBe('function');
//   });

//   it ('deberia retornar los personajes vivos cuando el filtro es vivo', () => {
//     const personajesFiltrados = filterAlive(mock,'Alive')
//     expect(personajesFiltrados).toBe('Alive');

//     personajesFiltrados.forEach((personaje) => {
//       expect(personaje.status).toBe('Alive');
//     })
//   })