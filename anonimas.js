
function saludar(nombre){
    return `Hola ${nombre}, bienvenidos a Desarrollo Útil.`;
    // aqui debajo no se ejecuta el codigo con return y console log
}
// no se puede declarar arriba 
const saludar2 = function(nombre){
    return `Hola ${nombre}, bienvenido a Desarrollo util.`;
}

const resultado = saludar2("Pablo");
console.log(resultado);