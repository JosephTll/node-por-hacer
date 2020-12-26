const argv = require('yargs')
                    .command('crear', 'Crear una tarea por hacer', {
                        desc:{
                            alias: 'd',
                            demand: true
                        }
                    })
                    .command('actualizar', 'Actualizar una tarea a completada', {
                        desc: {
                            demand: true,
                            alias: 'd'
                        },
                        complete:{
                            alias: 'c',
                            default: true
                        }
                    })
                    .command('borrar', 'Borra una tarea por hacer', {
                        desc: {
                            demand: true,
                            alias: 'd'
                        }
                    })
                    .help()
                    .argv

module.exports = {
    argv
}