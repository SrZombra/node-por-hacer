const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if(err) throw new Error('No se pudo guardar', err);
    });
}

const cargarDB = () => {

    try{
        listadoPorHacer = require('../db/data.json');
    }catch(err) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    return listadoPorHacer;

}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completo = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );

    if(index >= 0){
        listadoPorHacer[index].completado = completo;
        guardarDB();
        return true;
    }else{
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter( tarea => tarea.descripcion !== descripcion);

    
    if(nuevoListado.length !== listadoPorHacer.length){
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }else{
        return false;
    }

} 

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}