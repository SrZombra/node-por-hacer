const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marcar como completada o pendiente una tarea especifica'
}

const argv = require('yargs')
                .command('crear', 'Crear elemento por hacer', {
                    descripcion
                })
                .command('actualizar', 'Actualizar estado por hacer',{
                    descripcion,
                    completado
                })
                .command('borrar', 'Borrar tarea por hacer',{
                    descripcion
                })
                .help()
                .argv;

module.exports = {
    argv
} 