const mongoose = require('mongoose')

const CONNECTION_URL = "mongodb+srv://danielcr100:5HchAlYBeEW2tCze@clustervinis-6pbxe.gcp.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true }, err => {
    if (!err) console.log('Conexion exitosa')
})


const Schema = mongoose.Schema
//Schema de base de datos
const ServiciosSchema = new Schema(
  {
    name: {
      type: String,
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
    guardar_info: { type: Boolean,},
    tipo_pago: {
      type: String,
      enum: ['Tarjeta de Credito', 'Tarjeta de Debito', 'Paypal'],
    
    },

    nombre_tarjeta: String,

    numero_tarjeta: Number,

    fecha_exp: Number,

    cvv: Number,
  },

  { timestamps: true }
)
//Modelo de la base de datos
const Servicio = mongoose.model('Servicio', ServiciosSchema)

module.exports = { Servicio }

console.log('youre in');

