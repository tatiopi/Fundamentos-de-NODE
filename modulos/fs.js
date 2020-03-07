const fs = require('fs');

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        // Leido
        cb(data.toString());
    });
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function(err, data) {
        if (err) {
            console.error('No he podido escribirlo', err);
        } else {
            console.log('Se ha escrito correctamente')
        }
    });
}

function borrarf(ruta, cb) {
    fs.unlink(ruta, cb);
}


// leer(__dirname + '/archivo1.txt', console.log);
// escribir(__dirname + '/archivo1.txt', 'soy un archivo nuevo', console.log);
borrarf(__dirname + '/archivo1.txt', console.log)