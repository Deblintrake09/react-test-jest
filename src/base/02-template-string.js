const nombre   = 'Andrés';
const apellido = 'Micalizzi';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

console.log( nombreCompleto );


export function getSaludo(nombre = "Carlos") {
    return 'Hola ' + nombre;
}