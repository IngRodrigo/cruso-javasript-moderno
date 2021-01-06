//congelar los objetos, y usar el use strict
"use strict"
const producto={
    nombre:"Monitor de 20 pulgadas",
    precio:200,
    disponible:true
}
Object.freeze(producto);//no deja que se modifique el objeto
//para saber si el objeto esta congelado
if(Object.isFrozen(producto)){
    console.log(`Esta congelado`);
}else{
    console.log(`No esta congelado`);
}