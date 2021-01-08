const carrito=document.getElementById('carrito');
//contenido del carrito //seleccionamos el div y luego el tbody
const contenedorCarrito=document.querySelector('#lista-carrito tbody');
//boton para vaciar carrito
const btnVaciarCarrito=document.getElementById('vaciar-carrito');
//Lista de cursos
const listaCursos=document.getElementById('lista-cursos');
//variable para guardar los cursos
let articuloCarrito=[];//igualamos a un array vacio

//establecer listenner
establecerListener();


function establecerListener(){
    //agregar cursos al carrito
    listaCursos.addEventListener('click', agregarCurso);
    //eliminar curso del carrito
    carrito.addEventListener('click', eliminarCurso);
    //vaciar carrito
    btnVaciarCarrito.addEventListener('click', vaciarCarrito);
}


//funciones
function agregarCurso(e){
    console.log(contenedorCarrito)
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
//Eliminar curso del carrito
function eliminarCurso(e){
    e.preventDefault();
    // console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso')){
        console.log(e.target.getAttribute('data-id'));
        const cursoEliminarID=e.target.getAttribute('data-id');
        //eliminar del carrito//fileter recorre el array y filtra dependiendo de una condicion
        articuloCarrito=articuloCarrito.filter(curso=>curso.id!==cursoEliminarID);//traera todo lo que sea diferente, ese decir borrar el id que le mandemos
        
        carritoHTML(articuloCarrito);//volvemos a pintar el carrito
    }
}


function vaciarCarrito(){
    articuloCarrito=[];
    limpiarHTML();
}



//leer datos del curso y convertilo a un objeto utilizable por js
function leerDatosDelCuros(curso){
// console.log(curso);
    const infoCurso={
        imagen:curso.querySelector('img').src,
        titulo:curso.querySelector('h4').textContent,
        precio:curso.querySelector('span').textContent,
        id:curso.querySelector('a').getAttribute('data-id'),
        cantidad:1
    }

    const existe=articuloCarrito.some(curso=>curso.id===infoCurso.id);//recorre el array y compara el id con el id que le estamos pasando
    //si existe dara true, caso contrario falase
    if(existe){
        //actualizar cantidad
        const curso=articuloCarrito.map(curso=>{
            if(curso.id===infoCurso.id){
                curso.cantidad++;
                return curso;//retorna el carrito actualizado
            }else{
                return curso; //retorna el carrito sin actualizar datos
            }
            //siempre debe retornar con map
        });

        articuloCarrito=[...curso];

    }else{
        //agregar al carrito de forma normal
        articuloCarrito=[...articuloCarrito, infoCurso];//agregamos el curso al array para mostrar en el carrito
    }

    // console.log(articuloCarrito)
    carritoHTML(articuloCarrito);
}


//crear html para mostrar articuloCarritos
function carritoHTML(articuloCarrito){
    //antes de agregar al carrito se limpia para que quede vacio el html
    //limpiar html
    limpiarHTML();

    articuloCarrito.forEach((curso) => {
        //extraemos los atributos
        const {imagen, titulo, precio, cantidad, id}=curso;

        //creamos el html a pintar en la web
        const fila=document.createElement('tr');
        fila.innerHTML=`
        <td><img src="${imagen}" width="100"></td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>
        `;

        contenedorCarrito.appendChild(fila);
    });
}

function limpiarHTML(){
    //mientras el contenedor carrito tenga un elemento hijo lo va a eliminar
    //de esa forma eliman todo el contenido antes de crearlo con nuestra funcion carritoHTML()
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}