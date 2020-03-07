process.on('beforeExit', () => {
    console.log('el proceso va a terminar');
    setTimeout(() => {
        console.log('Esto si se va a haber')
    }, 5000)
});

process.on('exit', () => {
    console.log('Ale , el proceso acabó');
});

process.on('uncaughtException', (err, origen) => {
    console.log('Vaya se nos ha olvidado capturar un error');
    console.log(err)
});

// funcionQueNoexiste();

console.log('Esto si el error no se recoge , no sale');