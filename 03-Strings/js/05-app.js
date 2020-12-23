/**
 * 
 * Metodos con string Replace, Slice y Substring
 * 
 */
const producto="Monitor de 20 pulgadas";

console.log(producto);
//reemplazar cadena por otra cadena
console.log(producto.replace('pulgadas','"'));
//cortar cadena//se pasa desde donde hasta donde
console.log(producto.slice(0,8));
//tambien sirve para cortar cadena
console.log(producto.substring(0,8));
//traer un solo caracter
let nombre="Rodrigo";
console.log(nombre.charAt(0));