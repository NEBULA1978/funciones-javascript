// las puedo llamar antes o despues de crear la funcion
const resultado = saludar("Pablo");
console.log("DESPUES DE LLAMAR",resultado);

function saludar(nombre){
    return `Hola ${nombre}, bienvenidos a Desarrollo Útil.`;
    // aqui debajo no se ejecuta el codigo con return y console log
}
