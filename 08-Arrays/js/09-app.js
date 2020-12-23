/**
 * 
 * forEach para iterar arreglos
 * 
 */

const carrito=[
    {
        nombre:'Monitor 27 pulgadas',
        precio: 500
    },
    {
        nombre:'Teclado',
        precio: 150
    },
    {
        nombre:'Mouse',
        precio: 100
    }
    ,
    {
        nombre:'webcam',
        precio: 250
    }
]

carrito.forEach(producto=>{
    console.log(`${producto.nombre}`);
});