const mongoose = require("mongoose")

const CONNECTION_URL = "mongodb+srv://danielcr100:8rQR0A00gPyxTu0u@clustervinis-6pbxe.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true }, err => {
    if (!err) { console.log('Conexion exitosa') } else { console.log(err) }
})

const Schema = mongoose.Schema
//Schema de base de datos
const SocioSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        apellido: {
            type: String,
            required: true
        },
        telefono: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        direccion: {
            type: String,
            required: true
        },
        informacion_adicional: {
            type: String,
            required: true
        },
        pais: {
            type: String,
            required: true
        },
        provincia: {
            type: String,
            required: true
        },
        codigo_postal: Number,

        termino_condiciones: {
            type: Boolean,
        },

        info_ref: {
            type: String,
            enum: ['Socio de negocio', 'Proveedor', 'Carreras en la empresa'],
            required: true
        },
        registrarse: {
            type: Boolean,
            required: true
        },
    },
    { timestamps: true }
)
//Modelo de la base de datos
const socio = mongoose.model('socio', SocioSchema)

module.exports = { socio }
