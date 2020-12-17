/**
 * Requires
 */
const colors = require('colors');
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear( argv.descripcion );
        console.log(tarea);
        break;

    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        
        console.log(actualizado);

        break;
    
    case 'listar':

        let listado = porHacer.getListado();
        listado.forEach(element => {
            console.log('=========Por Hacer============'.green);
            console.log(element.descripcion);
            console.log('Estado: ', element.completado);
            console.log('=============================='.green);
        });

        break;

    case 'borrar':

        let borrado = porHacer.borrar(argv.descripcion);

        console.log(borrado);

        break;

    default:
        console.log('Comando no reconocido'.red);

        break;
}