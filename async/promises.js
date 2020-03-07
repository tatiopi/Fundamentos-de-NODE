function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('hola ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

function adios(nombre, otroCallback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('adios  ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('BlaBlaBla...');
            //resolve(nombre);
            reject('Hay un error');
        }, 1000);
    });
}

// Forma 1 
// hola('Carlos')
//     .then((nombre) => {
//         return adios(nombre);
//     })
//     .then((nombre) => {
//         console.log('Terminando el proceso')
//     });

// Forma profe

hola('Carlos')
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminando el proceso')
    })
    .catch(err => {
        console.error('Ha habido un error');
        console.error(err);
    })