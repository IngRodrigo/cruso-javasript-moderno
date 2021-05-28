const textAreaTweet = document.querySelector("#tweet");
const formulario = document.querySelector("#formulario");
const listaTweet=document.querySelector('#lista-tweets');
let lista=[];
eventListener();
function eventListener() {
  document.addEventListener("DOMContentLoaded", () => {
      const elemetnos=JSON.parse(localStorage.getItem("tweet"));
      console.log(elemetnos);
      if(elemetnos== null){
        lista=[];
      }else{
          lista=elemetnos;
          crearHTML();
      }
        
    });
  formulario.addEventListener("submit", agregarTweet);
}


function validarCampos(){
    if(textAreaTweet.value==''){
        mostrarError();
        return;
    }
    cargarTweetAlArreglo(textAreaTweet.value);
}

function agregarTweet(e) {
  e.preventDefault();
  validarCampos();
}

function mostrarError(){
    const contenido=document.querySelector('#contenido');
    const parrafo=document.createElement('p');
    parrafo.textContent='Debe agregar un Tweet';
    parrafo.classList.add('error');
    contenido.appendChild(parrafo);
    setTimeout(()=>{
        parrafo.remove();
    },3000);
}

function cargarTweetAlArreglo(tweet){
    
    const obtjetoTweet={
        id:Date.now(),
        tweet
    }
    lista=[...lista, obtjetoTweet];
 
    crearHTML();

    formulario.reset(); 
    
}

function limpiarHTML(){

if(listaTweet.firstChild){
    while(listaTweet.firstChild){
        listaTweet.removeChild(listaTweet.firstChild);
    } 
}
}

function actualizarLocalStorage(){
    localStorage.setItem('tweet',JSON.stringify(lista));
}

function crearHTML(){
    limpiarHTML();
    lista.forEach(element => {
        const btnEliminar=document.createElement('a');
        btnEliminar.classList.add('borrar-tweet');
        btnEliminar.innerText="x";
        
        btnEliminar.addEventListener('click',()=>{
         console.log(element);
            borrarTweet(element.id);   
        });
        const item=document.createElement('li');
        item.textContent=`${element.tweet}`;
        listaTweet.appendChild(item);
    
        //agregar el enlace al li
        item.appendChild(btnEliminar);
    }); 
    actualizarLocalStorage();
}

function borrarTweet(id){
    console.log(`eliminando...${id}`);
    lista=lista.filter(tweet=>tweet.id!==id);
    console.log(lista);
    crearHTML();
}