const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = ()=>{
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (err)=>{
        if(err){
            throw err
        }
    })
}

const llamarDB = ()=>{
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion)=>{
    llamarDB();

    let porHacer = {
        descripcion,
        complete: false
    }

    listadoPorHacer = [...listadoPorHacer, porHacer];

    guardarDB();
}

const actualizar = (descripcion, complete) =>{
    llamarDB();
    listadoPorHacer = listadoPorHacer.map(tarea => {
        if(tarea.descripcion === descripcion){
            tarea.complete = complete;
            return tarea;
        }else{
            return tarea;
        }
    })

    if(!listadoPorHacer){
        return false;
    }else{
        guardarDB();
        return true;
    }
}

const listar = ()=>{
    llamarDB();
    return listadoPorHacer;
}

const borrar = (descripcion) =>{
    llamarDB();
    let listadoActualizado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if(listadoActualizado.length === listadoPorHacer.length){
        return false;
    }else{
        listadoPorHacer = listadoActualizado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    listar, 
    actualizar,
    borrar
}