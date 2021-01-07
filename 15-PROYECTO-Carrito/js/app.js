const carrito=document.getElementById('carrito');
//contenido del carrito //seleccionamos el div y luego el tbody
const contenedorCarrito=document.getElementById('lista-carrito tbody');
//boton para vaciar carrito
const btnVaciarCarrito=document.getElementById('vaciar-carrito');
//Lista de cursos
const listaCursos=document.getElementById('lista-cursos');

//establecer listenner
establecerListener();
function establecerListener(){
    //agregar cursos al carrito
    listaCursos.addEventListener('click', agregarCurso);
    //vaciar carrito
    btnVaciarCarrito.addEventListener('click', vaciarCarrito);
}


//funciones
function agregarCurso(e){
    e.preventDefault();//prevenimos la accion por defecto del enlace
    //target.classList muestra las clases css que tiene el div selccionado y contains() verifica si una de ellas es agregar-carrito
    if(e.target.classList.contains('agregar-carrito')){//si lo es entonces cumple la condicion para agregar al carrito
        //rod_dev:parentElement sirve para ir atras al elemento html padre, esto lo hacemos debido a que el card tiene la informacion del articulo completo
        //desde la imagen, titulo hasta el precio
        const cursoSeleccionado=e.target.parentElement.parentElement;
        //le pasamos el contenido html del producto para crear el objeto utilizable con los datos
        leerDatosDelCuros(cursoSeleccionado);
    }
}
function vaciarCarrito(){
    console.log(`Vaciando`);
}



//leer datos del curso y convertilo a un objeto utilizable por js
function leerDatosDelCuros(curso){
console.log(curso);
    const infoCurso={
        imagen:curso.querySelector('img').src,
        titulo:curso.querySelector('h4').textContent,
        precio:curso.querySelector('span').textContent,
        id:curso.querySelector('a').getAttribute('data-id'),
        cantidad:1
    }

    console.log(infoCurso)
}