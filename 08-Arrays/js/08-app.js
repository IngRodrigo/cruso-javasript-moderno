/**
 * 
 * Destructuring arrays
 * 
 */

const producto={
    nombre:'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

const {nombre, precio, disponible}=producto;

//Destruncturing con arreglos
//tu decides el nombre de los objetos y si se colocan comas a los campos que no queremos
const numeros= [10,20,30,40,50];

//const [primeroo, segundo, tercero]=numeros;
const [, , tercero]=numeros;

console.log(tercero);