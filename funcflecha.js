// funcion nomal
// const sumar = function(a,b){
//     return a + b
// }
// funcion flecha
const sumar = (a,b)=>{
    return a + b
}
// funcion normal
// const multiplicarPorDos = function(numero){
//     return numero * 2
// }
// funcion flecha
const multiplicarPorDos = numero=> numero * 2


const suma = sumar(2,3)
const multiplicado = multiplicarPorDos(suma)

console.log(multiplicado)