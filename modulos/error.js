function serompe() {
    return 3 + z;
}

function otraFuncion() {
    serompe();
}

function seRompeAsincrona(cb) {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (err) {
            console.error('Error en mi fun cion asincrona')
            cb(err);
        }
    })
};

try {
    //otraFuncion();
    seRompeAsincrona(() => {
        console.log('hayerror');
    });
} catch (err) {
    console.log('Vaya , algo se ha roto');
}

console.log('esto de aqui esta al final')