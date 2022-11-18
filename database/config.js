const mongoose = require('mongoose')

const dbConnection = async() =>{
    try{
        mongoose.connect(process.env.MONGODB_CNN, {})
        console.log('Conexión a la base de datos')
    }
    catch(error){
        console.log('Error conectando a la base de datos')
    }
}
module.exports = {
    dbConnection
}
