const {argv} = require('./config/yargs');
const {crear, listar, actualizar, borrar} = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        crear(argv.desc);
        break;
    case 'listar':
        const lista = listar();
        lista.forEach(list => {
            console.log(`====================`.green)
            console.log(`======Por hacer=====`.green)
            console.log(`====================`.green)
            console.log(`${list.descripcion}`)
            console.log(`Completado: ${list.complete}`)
        })
        break;
    case 'actualizar':
        const actualiza = actualizar(argv.desc, argv.complete);
        console.log(actualiza);
        break;
    case 'borrar': 
        const borrado = borrar(argv.desc);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido')
        break;
}