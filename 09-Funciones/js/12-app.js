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
carrito.forEach(producto=>console.log(`${producto.nombre}`));

const nuevoCarrito2=carrito.forEach(producto=>`${producto.nombre}`);

//a diferencia de forEach, map crea un nuevo arreglo
const nuevoCarrito=carrito.map(producto=>{
   return `${producto.nombre}`; 
});

const nuevoCarrito3=carrito.map(producto=>`${producto.nombre}`);

console.log(nuevoCarrito);