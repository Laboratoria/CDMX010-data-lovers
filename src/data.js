export function templateCard(information) {
  const { id, image, name, status, species, gender, origin } = information;
  return `
    <div class="card"  data-id="${id}">
      <div class="card-image" data-id="${id}">
        <img  class="btnmodal" data-id="${id}" src="${image}" />
      </div>
      <div class="details" data-id="${id}">
        <p class="card-name" data-id="${id}">${name}</p>
        <p class="card-status" data-id="${id}">Estatus: ${status}</p>
        <p class="card-specie" data-id="${id}">Especie: ${species}</p>
        <p class="card-gender" data-id="${id}">Genero: ${gender}</p>
        <p class="card-origin" data-id="${id}">Origen: ${origin.name}</p>
      </div>
    </div>`;
}
export function filterElements(characters, key, value) {
  const results = characters.filter((character) => {
    return character[key] === value;
  });
  return results;
}
export function sortElements(characters, sortType) {
  let results;
  if (sortType === "asc") {
    results = characters.sort((a, b) => {
      //-1, 0 , 1
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  } else if (sortType === "desc") {
    results = characters.sort((a, b) => {
      //-1, 0 , 1
      if (b.name > a.name) {
        return 1;
      }
      if (b.name < a.name) {
        return -1;
      }
      return 0;
    });
  }
  return results;
}
export function filterSearch(characters, textInput) {
  const names = characters.filter((character) => {
    return character.name.toLowerCase().includes(textInput.toLowerCase());
  });
  return names;
}
export function renderModals(information) {
  const {
    id,
    image,
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
  } = information;
  return `<div class="modal-info" data-id="${id}">
      <div>
        <img  src="${image}" />
      </div>
      <div >
        <h2>${name}</h2>
        <p >Estatus: ${status}</p>
        <p >Especie: ${species}</p>
        <p>Tipo: ${type}</p>
        <p >Genero: ${gender}</p>
        <p >Origen: ${origin.name}</p>
        <p >Localizacion: ${location.name}</p>
       
      </div>
    
  </div>`;
}
export function findCharacter(characters, id) {
  const result = characters.find((character) => {
    return character.id === id;
  });
  return result;
}
