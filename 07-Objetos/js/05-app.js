//objetos dentro de objetos
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

console.log(producto.informacion.fabricacion.pais);//devuelve china