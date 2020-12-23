/**
 * 
 * Metodos de un arreglo
 *  Spred operator
 * crea una copia del objeto
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
let resultado;
resultado=[...carrito, producto];
resultado=[producto3,...resultado];
console.table(carrito);
console.table(resultado);