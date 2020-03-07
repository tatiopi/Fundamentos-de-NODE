function hola(nombre, micallback) {
    setTimeout(() => {
        console.log('hola ' + nombre);
        micallback();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log('adios ' + nombre);
        otroCallback();
    }, 1000)
}

hola('Antonio', () => {
    adios('Antonio', () => {
        console.log('termiandno proceso')
    });
});