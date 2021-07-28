const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

crearArchivo(argv.base, argv.l,argv.h)
    .then(resultado => console.log(resultado.blue))
    .catch(err => console.log(err.red));


