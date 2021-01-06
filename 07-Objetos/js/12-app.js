//Objeto literal Object literal

const producto={
    nombre:"Monitor de 20 pulgadas",
    precio:200,
    disponible:true
}

//Object Constructor!!
function Producto(nombre, precio){
    this.nombre=nombre;
    this.precio=precio;
    this.disponible=true;
}

const nuevoProducto=new Producto('televisor',300);
console.log(nuevoProducto);