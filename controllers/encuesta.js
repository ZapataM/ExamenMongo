const {response} = require('express')
const encuesta = require('../models/encuesta')
const Encuesta = require('../models/encuesta')

const getEncuesta = async(req, res = response) =>{
    const Encuesta = await encuesta.find()
    res.json({
        msg: 'GET ENCUESTA',
        Encuesta
    })
}

const postEncuesta= async(req, res) =>{
    const {nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado} = req.body
    const encuesta = new Encuesta({nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado})
    await encuesta.save()

    res.json({
        msg: 'POST ENCUESTA',
        encuesta
    })
}

const patchEncuesta = async (req, res) =>{
    const {documentoEncuestado, nombreEncuestado} = req.body
    const encuesta = await Encuesta.findOneAndUpdate({documentoEncuestado: documentoEncuestado},{nombreEncuestado: nombreEncuestado})

    res.json({
        msg: 'PATCH ENCUESTA',
        encuesta
    })
}

const putEncuesta = async (req, res) =>{
    const {documentoEncuestado, nombreEncuesta, fecha, nombreEncuestado, edad, genero, empleado} = req.body
    const encuesta = await Encuesta.findOneAndUpdate({documentoEncuestado: documentoEncuestado},{nombreEncuesta: nombreEncuesta, fecha: fecha, 
        nombreEncuestado: nombreEncuestado, edad: edad, genero: genero, empleado: empleado})

    res.json({
        msg: 'UPDATED ENCUESTA',
        encuesta
    })
}

const deleteEncuesta = async (req, res) =>{
    const {documentoEncuestado} = req.query
    const encuesta = await Encuesta.findOneAndDelete({documentoEncuestado: documentoEncuestado})

    res.json({
        msg: 'DELETE ENCUESTA',
        encuesta
    })
}

module.exports = {getEncuesta, postEncuesta, deleteEncuesta, putEncuesta, patchEncuesta}