
import { filterAlive } from '../src/data.js';


/*const personajes =  [{
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg",
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z"
  },
  {
    "id": 2,
    "name": "Morty Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/2.jpeg",
    "url": "https://rickandmortyapi.com/api/character/2",
    "created": "2017-11-04T18:50:21.651Z"
  },
  {
    "id": 3,
    "name": "Summer Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female",
    "origin": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/3.jpeg",
    "url": "https://rickandmortyapi.com/api/character/3",
    "created": "2017-11-04T19:09:56.428Z"
  },
  {
    "id": 4,
    "name": "Beth Smith",
    "status": "Dead",
    "species": "Human",
    "type": "",
    "gender": "Female",
    "origin": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/4.jpeg",
    "url": "https://rickandmortyapi.com/api/character/4",
    "created": "2017-11-04T19:22:43.665Z"
  }
] */

// describe('filterAlive', () => {
//   it('is a function', () => {
//     expect(typeof filterAlive).toEqual('function');
//   });

//   it ('deberia retornar los personajes vivos cuando el filtro es vivo', () => {
//     const personajesFiltrados = filterAlive(personajes,'Alive')
//     expect(personajesFiltrados).toEqual('Alive');

//     personajesFiltrados.forEach((personaje) => {
//       expect(personaje.status).toEqual('Alive');
//     })
//   })
 
// });

describe('filterAlive', () => {
  it('is a function', () => {
    expect(typeof filterAlive).toEqual('function');
  });

  it ('deberia retornar los personajes vivos cuando el filtro es vivo', () => {
    const personajesFiltrados = filterAlive('Alive')
    expect(personajesFiltrados.lenght).toBe(281);

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
