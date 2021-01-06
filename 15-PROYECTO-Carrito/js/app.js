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
    console.log(e.target);
}
function vaciarCarrito(){
    console.log(`Vaciando`);
}
