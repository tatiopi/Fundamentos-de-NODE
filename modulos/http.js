const http = require('http');
process.env.PORT = 3000;

http.createServer(router).listen(process.env.PORT);

function router(req, res) {
    console.log('nueva peticion');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write('Hola , que tal');
            res.end();
            break;
        default:
            res.write('Error 404: No se lo que quieres');
            res.end();
    }

    // res.writeHead(201, {
    //     'Content-Type': 'text/plain'
    // });

    // // escribir respuesta al usuario
    // res.write('Hola, ya se usar HTTP de NodeJS');

    // res.end();
}

console.log('escuchando el puerto ' + process.env.PORT)