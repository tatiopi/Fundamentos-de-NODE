let suma = 0;
console.time('bucle');
for (let i = 0; i < 10000000000; i++) {
    suma += 1;
}
console.timeEnd('bucle');

console.time('asincrono');
asincrona().then(() => {
    console.timeEnd('asincrono');
});


function asincrona() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('termina el proceso asincrono');
            resolve();
        })
    });
}