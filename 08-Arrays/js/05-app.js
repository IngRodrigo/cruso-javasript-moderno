/**
 * 
 * Metodos de un arreglo
 * 
 */
const carrito=[];

//definir producto
const producto={
    nombre:'Monitor de 32 pulgadas',
    precio:400
}

const producto2={
    nombre:'Celular',
    precio:200
}

const producto3={
    nombre:'Teclado',
    precio:50
}

carrito.push(producto);
carrito.push(producto2);

//agregar al inicio del array
carrito.unshift(producto3);

console.table(carrito);