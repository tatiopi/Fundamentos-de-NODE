console.log('Algo')
console.warn('Algo')

var tabla = [{
        a: 1,
        b: 'Z'
    },
    {
        a: 2,
        b: 'Otra'
    }
]

// console.table(tabla);

// console.group('Conversacion')
// console.log('Hola');
// console.group('Bla')
// console.log('Blablaba');
// console.log('Blablaba');
// console.log('Blablaba');
// console.groupEnd('Bla')
// console.log('Blablaba');
// console.log('Adios');
// console.groupEnd('Conversacion')

function function1() {
    console.group('funcion1');
    console.log('Esto es de la funcion 1 ')
    console.log('Esto tambien')
    function2();
    console.log('He vuelto a la 1')
    console.groupEnd('funcion1');
}

function function2() {
    console.group('funcion2');
    console.log('Ahora estamos en la funcion2')
    console.groupEnd('funcion2');
}

console.log('empezamos');

function1();

// Utils para saber como pasas por un bucle

console.count('veces')
console.count('veces')
console.count('veces')
console.count('veces')
console.count('veces')
console.count('veces')

console.countReset('veces')