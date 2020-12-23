/**
 * Concatenar cadenas
 */
const producto="Monitor de 20 pulgadas";
const precio='30 USD';

console.log(producto.concat(precio));
console.log(producto.concat(' en descuento'));

console.log("El producto: "+producto+" tiene un descuento de: "+precio);

console.log(`El producto seleccionado: ${producto} tiene un descuento de $ ${precio}`);