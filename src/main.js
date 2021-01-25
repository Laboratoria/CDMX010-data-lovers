//El proposito de main es manipular el DOM (eso incluye invocar funciones)
//--------------------------------------------------------
import {filterAlgo} from './data.js'

document.addEventListener('DOMContentLoaded',()=>{
    getData()
})



const filterSpecies = document.querySelector('#specie');
const filterStatus = document.querySelector('#status');
const filterGender = document.querySelector('#gender');
const resuls = document.querySelector('#character');

let content = document.getElementById('character')

//Event listener para los selects de la busqueda
filterSpecies.addEventListener('change', e => {
    searchData.species = e.target.value;
  console.log( filterAlgo(searchData.species), 'Esto ejecuto tu filter')
  })
  
  filterStatus.addEventListener('change', e => {
    searchData.status = e.target.value;
    console.log(searchData);
  })
  
  filterGender.addEventListener('change', e => {
    searchData.gender = e.target.value;
    console.log(searchData);
  })

  const searchData = {
    species: "",
    status: "",
    gender: "",
}

  
function getData() {

    const url ='data/rickandmorty/rickandmorty.json'
    fetch(url)
    .then(response => response.json ())
    .then(alldata => {setHtml(alldata.results)})
    .catch(error => console.log(error));
}

function setHtml(data){
    data.forEach((character)=>{
    const {id, image, name, status, species, type, gender, origin, location}=character;
    const divHtml=document.createElement('div');
    
    divHtml.className = 'card';
    
        divHtml.innerHTML=`
        <img src='${image}'/><br><br>
        <p> <b>Id</b>: ${id}</P>
        <p> <b>Name:</b> ${name}</P>
        <p> <b>Status:</b> ${status}</P>
        <p> <b>Species:</b> ${species}</P>
        <p> <b>Type:</b> ${type}</P>
        <p> <b>Gender:</b> ${gender}</P>
        <p> <b>Origin:</b> ${origin.name}</P>
        <p> <b>Location:</b> ${location.name}</P>
        `;
    content.appendChild(divHtml)
    })

   
    console.log(data);
}

