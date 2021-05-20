//!*Variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const precio_minimo = document.querySelector("#minimo");
const precio_maximo = document.querySelector("#maximo");
const resultado = document.querySelector("#resultado");
const maxi_ano = new Date().getFullYear();
const mini_ano = maxi_ano - 10;

let datos = {
  marca: "",
  year: "",
};
//!*Eventos
document.addEventListener("DOMContentLoaded", () => {
  listenner();
  mostrarAutos();
  cargarSelect();
});

//Funciones
function listenner() {
  marca.addEventListener("change", (e) => {
    datos.marca = e.target.value;
    console.log(datos);
  });
  year.addEventListener("change", (e) => {
    console.log(e.target.value);
  });
}
function mostrarAutos() {
  autos.forEach((auto) => {
    const { marca, modelo, year, precio, puertas, color, transmision } = auto;
    //!Crea un elmento HTML en este caso un parrafo
    const parrafo = document.createElement("p");
    //!Escribe el contenido del parrafo <p>marca</p>
    parrafo.textContent = `${marca} - ${year} - ${puertas} PUERTAS - TRANSIMISION: ${transmision}`;

    //!inserta el parrafo en el body de la pagina
    resultado.appendChild(parrafo);
  });
}

function cargarSelect() {
  for (let index = maxi_ano; index >= mini_ano; index--) {
    let opciones = document.createElement("option");
    opciones.value = index;
    opciones.textContent = index;

    //console.log(opciones);
    year.appendChild(opciones); //!insertar las opciones generadas al select
  }
}
