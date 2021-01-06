//destructuring de objetos

const producto={
    nombre:"Monitor de 20 pulgadas",
    precio:200,
    disponible:true
}
//extraer las propiedades del objetos y crear variables para utilizarlas
const {nombre, precio}=producto;

console.log(nombre, precio);