/**
 * 
 * Quitar espacion en blanco
 */
const producto="           Monitor de 20 pulgadas     ";
console.log(producto);
//quitar espacios al inicio
console.log(producto.trimStart());
//quitar espacios al final
console.log(producto.trimEnd());
//quitar espacios en ambas direccions
console.log(producto.trim());