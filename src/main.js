// import { example } from './data.js';
// // import data from './data/lol/lol.js';
// // import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

// console.log(example, data);


// const url = 'data/rickandmorty/rickandmorty.json';

//--------------------------------------------------------

//. 1
document.addEventListener('DOMContentLoaded',()=>{
    getData()
})

let content = document.getElementById('character')

function getData() {

    const url ='data/rickandmorty/rickandmorty.json'
    fetch(url)
    .then(response => response.json ())
    .then(alldata => {setHtml(alldata.results)})
    .catch(error => console.log(error));
}

function setHtml(data){
    data.forEach((character)=>{
    const {id, image, name, status, species, type, gender, origin, location, episodes }=character;
    const divHtml=document.createElement('div');
    
    // divHtml.className = 'card';
    
        divHtml.innerHTML=`
        <img src='${image}'/><br><br>
        <p> <b>Id</b>: ${id}</P>
        <p> <b>Name:</b> ${name}</P>
        <p> <b>Status:</b> ${status}</P>
        <p> <b>Species:</b> ${species}</P>
        <p> <b>Type:</b> ${type}</P>
        <p> <b>Gender:</b> ${gender}</P>
        <p> <b>Origin:</b> ${origin.name}</P>
        <p> <b>Location:</b> ${location.name}</P><br><hr><br>
        `;
    content.appendChild(divHtml)
    })

    //-------------------
   
    /*content.innerHTML = `
    <div>
    <img src='${data[0].image}'/><br><br>
    <p> <b>Id</b>: ${data[0].id}</P>
    <p> <b>Name:</b> ${data[0].name}</P>
    <p> <b>Status:</b> ${data[0].status}</P>
    <p> <b>Species:</b> ${data[0].species}</P>
    <p> <b>Type:</b> ${data[0].type}</P>
    <p> <b>Gender:</b> ${data[0].gender}</P>
    <p> <b>Origin:</b> ${data[0].origin.name}</P>
    <p> <b>Location:</b> ${data[0].location.name}</P>
    <p> <b>Location:</b> ${data[0].episodes}</P>       
    </div>
    `*/
    console.log(data);
}

//.-2

// document.getElementById('button1').addEventListener('click', loadText);

// function loadText() {

//     const url ='https://rickandmortyapi.com/api/character/?page=1'
//     fetch(url)
//     .then(response => response.json ())
//     .then(data => {
        
//         let content = document.getElementById('character')
//         content.innerHTML = `
//         <div>
//         <img src='${data.results[1].image}'/><br><br>
//         <p> <b>Id</b>: ${data.results[1].id}</P>
//         <p> <b>Name:</b> ${data.results[1].name}</P>
//         <p> <b>Status:</b> ${data.results[1].status}</P>
//         <p> <b>Species:</b> ${data.results[1].species}</P>
//         <p> <b>Type:</b> ${data.results[1].type}</P>
//         <p> <b>Gender:</b> ${data.results[1].gender}</P>
//         <p> <b>Origin:</b> ${data.results[1].origin.name}</P>
//         <p> <b>Location:</b> ${data.results[1].location.name}</P>
//         </div>
//         `
//         console.log(data);
//     })
//     .catch(error => console.log(error));

// }

//.-3

// document.getElementById('button1').addEventListener('click', loadText);

// function loadText() {

//     const url ='https://rickandmortyapi.com/api/character/?page=1'
//     fetch(url)
//     .then(response => response.json ())
//     .then(data => {
        
//         let content = document.getElementById('character')
//         content.innerHTML = `
//         <div>
//         <img src='${data.results[2].image}'/><br><br>
//         <p> <b>Id</b>: ${data.results[2].id}</P>
//         <p> <b>Name:</b> ${data.results[2].name}</P>
//         <p> <b>Status:</b> ${data.results[2].status}</P>
//         <p> <b>Species:</b> ${data.results[2].species}</P>
//         <p> <b>Type:</b> ${data.results[2].type}</P>
//         <p> <b>Gender:</b> ${data.results[2].gender}</P>
//         <p> <b>Origin:</b> ${data.results[2].origin.name}</P>
//         <p> <b>Location:</b> ${data.results[2].location.name}</P>
//         </div>
//         `
//         console.log(data);
//     })
//     .catch(error => console.log(error));

// }
