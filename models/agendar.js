const mongoose = require('mongoose')
const CONNECTION_URL = "mongodb+srv://danielcr100:5HchAlYBeEW2tCze@clustervinis-6pbxe.gcp.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true }, err => {
  if (!err) console.log('Conexion exitosa')
})


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
    pais: String,
    provincia: String,
    codigo_postal: Number,
    guardar_info: true,
    Tipo_pago: {
      type: String,
      enum: ['Tarjeta de Credito', 'Tarjeta de Debito', 'Paypal'],
      required: true
    },
    Nombre_Tarjeta: String,
    Numero_Tarjeta: Number,
    Fecha_Exp: Date,
    CVV: Number
  },
  { timestamps: true }
)
//Modelo de la base de datos
const Servicio = mongoose.model('Servicios', ServiciosSchema)

module.exports = { Servicio }
