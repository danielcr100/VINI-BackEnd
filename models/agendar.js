const mongoose = require('mongoose')




const Schema = mongoose.Schema
//Schema de base de datos
const ServiciosSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },

    apellido: String,

    telefono: String,

    email: {
      type: String,
    },

    direccion: String,

    direccion2: String,

    pais: String,

    provincia: String,

    codigo_postal: Number,

    guardar_info: { type: Boolean, },

    tipo_pago: {
      type: String,
      enum: ['Tarjeta de Credito', 'Tarjeta de Debito', 'Paypal'],
      required: true,
    },

    nombre_tarjeta: String,

    numero_tarjeta: Number,

    fecha_exp: Date,

    cvv: Number,
  },

  { timestamps: true }
)
//Modelo de la base de datos
const Servicio = mongoose.model('Servicio', ServiciosSchema)

module.exports = { Servicio }
