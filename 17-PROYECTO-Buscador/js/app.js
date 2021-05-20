//!*Variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const precio_minimo = document.querySelector("#minimo");
const precio_maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

const resultado = document.querySelector("#resultado");
const maxi_ano = new Date().getFullYear();
const mini_ano = maxi_ano - 10;

let datos = {
  marca: "",
  year: "",
  precio_maximo: "",
  precio_minimo: "",
  puertas: "",
  color: "",
  transmision: "",
};
//!*Eventos
document.addEventListener("DOMContentLoaded", () => {
  listenner();
  mostrarAutos(autos);
  cargarSelect();
});

//Funciones
function listenner() {
  marca.addEventListener("change", (e) => {
    datos.marca = e.target.value;
    filtrarAuto();
  });
  year.addEventListener("change", (e) => {
    datos.year = parseInt(e.target.value);
    //console.log(typeof(datos.year));
    filtrarAuto();
  });
  precio_minimo.addEventListener("change", (e) => {
    datos.precio_minimo = parseInt(e.target.value);
    filtrarAuto();
  });
  precio_maximo.addEventListener("change", (e) => {
    datos.precio_maximo = parseInt(e.target.value);
    filtrarAuto();
  });
  transmision.addEventListener("change", (e) => {
    datos.transmision = e.target.value;
    filtrarAuto();
  });
  puertas.addEventListener("change", (e) => {
    datos.puertas = parseInt(e.target.value);
    filtrarAuto();
  });
  color.addEventListener("change", (e) => {
    datos.color = e.target.value;
    console.log(datos);
  });
}
function mostrarAutos(autos) {
  //Limpiar html previo
  limpiarHtml();
  autos.forEach((auto) => {
    const { marca, modelo, year, precio, puertas, color, transmision } = auto;
    //!Crea un elmento HTML en este caso un parrafo
    const parrafo = document.createElement("p");
    //!Escribe el contenido del parrafo <p>marca</p>
    parrafo.textContent = `${marca} - ${year} - ${puertas} PUERTAS - TRANSIMISION: ${transmision} - PRECIO: ${precio}`;

    //!inserta el parrafo en el body de la pagina
    resultado.appendChild(parrafo);
  });
}
function limpiarHtml() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
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

function filtrarAuto() {
  //!filter() devuelve un arreglo nuevo con los datos filtrados
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarPrecioMinimo)
    .filter(filtrarPrecioMinimo)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor); //la referencia con la cual comparar es nuesta base de datos autos (db.js)
  //console.log(resultado);
  if(resultado.length){
      //!voler a llamar la funcion que pinta los elementos enl body
    mostrarAutos(resultado);
  }else{
    noResultado();
  }
}
function noResultado(){
  limpiarHtml();
  const noResultado=document.createElement('div');
  noResultado.classList.add('alerta', 'error');
  noResultado.textContent=`No hay resultados`;

  resultado.appendChild(noResultado);
}
//devuevle el objeto ya filtrado
function filtrarMarca(auto) {
  const { marca } = datos;
  if (marca) {
    return auto.marca === marca;
  }
  return auto;
}

function filtrarYear(auto) {
  const { year } = datos;
  if (year) {
    return auto.year === year;
  }
  return auto;
}

function filtrarPrecioMinimo(auto) {
  const { precio_minimo } = datos;
  if (precio_minimo) {
    return auto.precio >= precio_minimo;
  }
  return auto;
}

function filtrarPrecioMaximo(auto) {
  const { precio_maximo } = datos;
  if (precio_maximo) {
    return auto.precio <= precio_maximo;
  }
  return auto;
}

function filtrarPuertas(auto) {
  const { puertas } = datos;
  if (puertas) {
    return auto.puertas === puertas;
  }
  return auto;
}

function filtrarTransmision(auto) {
  const { transmision } = datos;
  if (transmision) {
    return auto.transmision === transmision;
  }
  return auto;
}
function filtrarColor(auto) {
  const { color } = datos;
  if (color) {
    return auto.color === color;
  }
  return auto;
}
