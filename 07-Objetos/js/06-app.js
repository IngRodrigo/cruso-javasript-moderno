//recorriendo objetos dentro de objetos con destructuring
const producto={
    nombre:"Monitor de 20 pulgadas",
    precio:200,
    disponible:true,
    informacion:{
        medidas:{
            peso:'1kg',
            medida:'1m'
        },
        fabricacion:{
            pais:'china'
        }
    }
}

const {informacion:{fabricacion:{pais}}, informacion:{medidas:{peso}}}=producto;

console.log(pais)
console.log(peso)