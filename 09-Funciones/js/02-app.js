//ejecutandose el codigo de arriba a abajo
// Las funciones declaradas no como expresion, se pueden llamar antes de crearlas o viceversa
sumar();
function sumar()
{
    console.log(2+2);
}
sumar();

//Expresion de funcion (Function expression) no puden ser llamadas antes de declararse

sumar2();//no funcionara
const sumar2=function(){
    console.log(3+3);
}
sumar2();//si funcionara