//variables de campos
const email=document.querySelector('#email');
const asunto=document.querySelector('#asunto');
const mensaje=document.querySelector('#mensaje');
const formulario=document.querySelector('#enviar-mail');
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
       mostrarError('Todos los campos son obligatorios');
   }
   //validar si el campo es email
   if(e.target.type==='email'){
        const email=e.target.value.indexOf('@');
        if(email<0){
            mostrarError('El email no es valido');
        }
   }
}

function mostrarError(mensaje){
    //creamos el parrafo con el contenido del error;
    const mensajeError=document.createElement('p');
    mensajeError.textContent=mensaje;
    //le damos unas clases para darles estilos
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');
   //si buscando en todo el documento la clase error no existe
    if(document.querySelectorAll('.error').length===0){
        //aparece el mensaje de lo contrario no asi solo se mostrara una vez el mensaje 
        //aunque el error aparezca en todos los input
        formulario.appendChild(mensajeError);
    }
}