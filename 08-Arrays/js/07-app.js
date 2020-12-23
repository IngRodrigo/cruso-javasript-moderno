/***
 * 
 * Eliminar ultimo elemento del carrito
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

let resultado=[...carrito, producto3, producto2, producto];
console.table(resultado);
//eliminar del final del arreglo
//resultado.pop();
//console.table(resultado);
//elimnar del inicio del carrito
//resultado.shift();
//console.table(resultado);

resultado.splice(1,1);
console.table(resultado);