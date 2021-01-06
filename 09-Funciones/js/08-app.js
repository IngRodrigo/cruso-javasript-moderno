///funciones que retornan valores 

function sumar(a, b){
    return a+b;
}

const resultado=sumar(5,6);
// console.log(resultado);
let total=0;
function agregarAlCarrito(precio){
    return total+precio;
}
function calcularImpuesto(){
    return total*1.15;
}
total=agregarAlCarrito(200);
const totalPagar=calcularImpuesto();
console.log(total);
console.log(totalPagar);