
// no se puede declarar arriba 
const obtenerSaludo = function(nombre){
    return `Hola ${nombre}, bienvenido a Desarrollo util.`;
}

const imprimirSaludo = function(mensaje){
    console.log(mensaje);
}

const alertSaludo = function(mensaje){
    alert(mensaje);
}
const saludar = function(obtener, imprimir){
    const saludo = obtener("Ramon");
    imprimir(saludo);
}

saludar(obtenerSaludo,imprimirSaludo);
saludar(obtenerSaludo,alertSaludo);