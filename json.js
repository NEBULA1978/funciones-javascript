const persona = {
    nombre: 'Ramon',
    apelidos:'Pascuales',
    telefono:'786767867867',
    edad:36
}

console.log(persona.nombre)

// cambiar nombre o atributo
persona.nombre = 'Pablo'

// abajo array lo mismo que frase arriba
// console.log(persona["nombre"])
console.log(persona.nombre)

// no puedo reasignar const me da error pero si de la forma de arriba
// persona = {
//     nombre: 'Jose'
// }