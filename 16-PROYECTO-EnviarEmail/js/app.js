//variables de campos
const email=document.querySelector('#email');
const asunto=document.querySelector('#asunto');
const mensaje=document.querySelector('#mensaje');
//variables
EventListener();
function EventListener(){
    document.addEventListener('DOMContentLoaded', iniciarApp);
    email.addEventListener('blur', validarCampos);
    asunto.addEventListener('blur', validarCampos);
    mensaje.addEventListener('blur', validarCampos);
}


//funciones
function iniciarApp(){
    
}
function validarCampos(e){
   if(e.target.value.length>0){
        console.log(`hay datos`)
   }else{
       e.target.classList.add('border', 'border-red-500');
   }
}