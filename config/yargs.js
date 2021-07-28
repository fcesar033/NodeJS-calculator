const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe : 'Base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe : 'Muestra en consola la tabla'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        describe : 'Limite de la tabla solicitada'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser numero';
        }
        return true;
    })
    .argv;

module.exports = argv;