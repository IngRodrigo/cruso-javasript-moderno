//Palabra reservada this

const nombre='Hola';
const precio=100;

const producto={
    nombre:"Monitor de 20 pulgadas",
    precio:200,
    disponible:true,
    mostrarInfo:function(){
        console.log(`El producto: ${this.nombre}, tiene un preico de: USS ${this.precio}`)
    }
}

console.log(producto.mostrarInfo());