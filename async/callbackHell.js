function hola(nombre, micallback) {
    setTimeout(() => {
        console.log('hola ' + nombre);
        micallback();
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(() => {
        console.log('BlaBlaBla...');
        callbackHablar();
    }, 1000)
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log('adios ' + nombre);
        otroCallback();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function() {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback)
    }
}

hola('Carlos', function(nombre) {
    conversacion(nombre, 3, function() {
        console.log('proceso terminado')
    });
})

// --
// hola('Antonio', () => {
//     hablar(function() {
//         hablar(function() {
//             hablar(function() {
//                 adios('Antonio', () => {
//                     console.log('termiandno proceso')
//                 });
//             });
//         });
//     });
// });