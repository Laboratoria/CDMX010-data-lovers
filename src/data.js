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
//recibe parametros hace calculos y retorna un resultado
/*export function filterSpecies(characters, condition) {
  const humans = characters.filter((character) => {
    //retorna un true o false
    return character.species === condition;
  });
  return humans;
}
*/

export function filterSearch(characters, textInput) {
  const names = characters.filter((character) => {
    return character.name.toLowerCase().includes(textInput.toLowerCase());
  });
  return names;
}
