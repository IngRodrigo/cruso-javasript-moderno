//Agregar , elimnar elementos de un objeto

const producto={
    nombre:"Monitor de 20 pulgadas",
    precio:200,
    disponible:true
}
//agregar propiedades al objeto
producto.imagen='imagen.png';
//eliminar propidades de un objeto
delete producto.disponible;
console.log(producto);
