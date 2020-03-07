const { exec, spawn } = require('child_process');

// exec('node modulos/consola.js', (err, stdout, sterr) => {
//     if (err) {
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// });

// Spawn : Invocar un proceso de Node.js

let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato) {
    console.log(process.killed);
    console.log(dato.toString())
})

proceso.on('exit', () => {
    console.log('el proceso termino');
    console.log(process.killed);
})