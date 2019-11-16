const mongoose = require('mongoose')





const Schema = mongoose.Schema
//Schema de base de datos
const ServiciosSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true
    },
    apellido: String,
    telefono: String,
    email: {
        type: String
    },
    direccion: String,
    direccion2: String,
    pais:String,
    provincia: String,
    codigo_postal: Number,
    guardar_info: String
  },
  { timestamps: true }
)
//Modelo de la base de datos
const Pelicula = mongoose.model('Peliculas', peliculasSchema)

module.exports = { Pelicula }
