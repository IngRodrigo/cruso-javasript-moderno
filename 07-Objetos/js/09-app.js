//Sellar objeto
"use strict"
const producto={
    nombre:"Monitor de 20 pulgadas",
    precio:200,
    disponible:true
}
Object.seal(producto);//no se pueden agregar o elimnar propiedades pero si se pueden modificar las que ya existen
//para saber si el objeto esta sellado
if(Object.isSealed(producto)){
    console.log(`Esta sellado`);
}else{
    console.log(`No esta sellado`);
}