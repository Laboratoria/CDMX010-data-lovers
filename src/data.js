//Funcion ordenar A-Z
const orderData = (pokemones, order) => {
  if(order == "a-z") {
    const orderAZ = pokemones.sort(function compare(a,b) {
              if (a.name > b.name)
                  return 1;
              if (a.name < b.name)
                  return -1;
              return 0;
          })
    return orderAZ;
  } else if (order == "z-a") {
    const orderZA = pokemones.sort(function compare(a,b) {
              if (a.name > b.name)
                  return -1;
              if (a.name < b.name)
                  return 1;
              return 0;
          })
          return orderZA;
  }
}

//Funcion por tipo
const filterData = (pokemones, tipo) => {
  let filterType = pokemones.filter(unpokemon => unpokemon.type.includes(tipo));
  return filterType;
}

//Busqueda por Nombre
const searchPokemon = (pokemones, nombre) => {
  let searchName = pokemones.filter(unpokemon => unpokemon.name.includes(nombre));
  return searchName;
}

export {orderData, filterData, searchPokemon};