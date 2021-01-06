//Unir dos objetos
const producto={
    nombre:"Monitor de 20 pulgadas",
    precio:200,
    disponible:true
}

const medidas={
    peso:'1kg',
    medida:'1m'
}

//usando el metodo assign de objetos
const resultado=Object.assign(producto, medidas);
console.log(resultado);
//usando el operador spread ...
const resultadoSpread={...producto, ...medidas};//...seria copiar copiarproducto, copiarmedidas
console.log(resultadoSpread);