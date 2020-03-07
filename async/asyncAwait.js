async function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('hola ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('adios  ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('BlaBlaBla...');
            resolve(nombre);
            //reject('Hay un error');
        }, 1000);
    });
}

async function main() {
    let nombre = await hola('Carlos');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
}

console.log('Empezamos el proceso');
main();
console.log('Termina el proceso')