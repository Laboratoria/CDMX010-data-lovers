export function templateCard(propiedades) {
  return `<div class="cards" data-id="${propiedades.id}">
    <div class="card" >
      <div class="card-image">
        <img src="${propiedades.image}" />
      </div>
      <div class="details">
        <p class="card-name"><h2>${propiedades.name}</h2></p>
        <p class="card-status">Estatus: ${propiedades.status}</p>
        <p class="card-specie">Especie: ${propiedades.species}</p>
        <p class="card-origin">Origen: ${propiedades.origin.name}</p>
        <p class="card-gender">Genero: ${propiedades.gender}</p>
      </div>
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
