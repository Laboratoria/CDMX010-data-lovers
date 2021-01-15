export function templateCard(propiedades) {
  return `<div class="cards" data-id="${propiedades.id}">
    <div class="card" >
      <div class="card-image">
        <img  class="btnmodal" src="${propiedades.image}" />
      </div>
      <div class="details">
        <p class="card-name"><h2>${propiedades.name}</h2></p>
        <p class="card-status">Estatus: ${propiedades.status}</p>
        <p class="card-specie">Especie: ${propiedades.species}</p>
        <p class="card-gender">Genero: ${propiedades.gender}</p>
        <p class="card-origin">Origen: ${propiedades.origin.name}</p>
      </div>
    </div>
  </div>`;
}

export function order_desc(characters) {
  const desc = characters.sort((a, b) => {
    if (a.name < b.name) return 1;
    if (a.name > b.name) return -1;
    return 0;
  });
  return desc;
}

export function order_asc(characters) {
  const asc = characters.sort((a, b) => {
    if (b.name < a.name) return 1;
    if (b.name > a.name) return -1;
    return 0;
  });
  return asc;
}

export function filterSearch(characters, textInput) {
  const names = characters.filter((character) => {
    return character.name.toLowerCase().includes(textInput.toLowerCase());
  });
  return names;
}
