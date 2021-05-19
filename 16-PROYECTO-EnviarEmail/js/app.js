//variables de campos
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector("#enviar-mail");
const btn_enviar = document.querySelector("#enviar");
const resetBtn = document.querySelector("#resetBtn");
const er =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//variables
EventListener();
function EventListener() {
  document.addEventListener("DOMContentLoaded", iniciarApp);
  email.addEventListener("blur", validarCampos);
  asunto.addEventListener("blur", validarCampos);
  mensaje.addEventListener("blur", validarCampos);
  btn_enviar.addEventListener("click", enviarEmail);
  resetBtn.addEventListener("click", resetFormulario);
}

//funciones
function iniciarApp() {
   console.log(`Iniciar app`);
  btn_enviar.disabled = true;
  btn_enviar.classList.add("cursor-not-allowed", "opacity-50");
}
function validarCampos(e) {
  if (e.target.value.length > 0) {
    //! Eliminar los errores si ya se corrgieron...
    //! Seleccionar un elmento en este caso un parrafo con una clase error
    const error = document.querySelector("p.error");
    if (error) {
      error.remove();
    }

    e.target.classList.remove("border", "border-red-500");
    e.target.classList.add("border", "border-green-500");
  } else {
    //! agregar una clase al html con las propiedades css classList
    e.target.classList.remove("border", "border-green-500");
    e.target.classList.add("border", "border-red-500");
    mostrarError("Todos los campos son obligatorios");
  }
  //validar si el campo es email
  if (e.target.type === "email") {
    //const email=e.target.value.indexOf('@');
    console.log(e.target.value);
    if (er.test(e.target.value)) {
      //mostrarError('El email no es valido');
      console.log(`Email valido`);
    } else {
      //! agregar una clase al html con las propiedades css classList
      e.target.classList.add("border", "border-red-500");
      mostrarError("Emamil no valido");
    }
  }

  if (er.test(email.value) && asunto.value !== "" && mensaje.value !== "") {
    console.log(`Iniciar app`);
    btn_enviar.disabled = false;
    btn_enviar.classList.remove("cursor-not-allowed", "opacity-50");
  }
}

function mostrarError(mensaje) {
  //creamos el parrafo con el contenido del error;
  const mensajeError = document.createElement("p");
  mensajeError.textContent = mensaje;
  //le damos unas clases para darles estilos
  mensajeError.classList.add(
    "border",
    "border-red-500",
    "background-red-100",
    "text-red-500",
    "p-3",
    "mt-5",
    "text-center",
    "error"
  );
  //si buscando en todo el documento la clase error no existe
  if (document.querySelectorAll(".error").length === 0) {
    //aparece el mensaje de lo contrario no asi solo se mostrara una vez el mensaje
    //aunque el error aparezca en todos los input
    formulario.appendChild(mensajeError);
  }
}

//Simular envio de mensaje
function enviarEmail(e) {
    console.log(`Desde enviar`);
  e.preventDefault();
  //mostrar spinner
  const spinner = document.querySelector("#spinner");
  const parrafo = document.createElement("p");
  parrafo.textContent = "El mensaje fue enviado correctamente";
  parrafo.classList.add(
    "text-center",
    "my-10",
    "p-2",
    "bg-green-500",
    "font-blod",
    "uppercase",
    "text-white"
  );
  spinner.style.display = "flex";
  setTimeout(() => {
    spinner.style.display = "none";

    formulario.insertBefore(parrafo, spinner);
  }, 3000); //!Cada 1000 es 1 segundo. esta funcion se ejecutara una vez despues de 3 segundos

  setTimeout(() => {
    parrafo.remove();
    resetFormulario();
  }, 5000);

}
function resetFormulario() {
    
    formulario.reset();
    iniciarApp();
}
