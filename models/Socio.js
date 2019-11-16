const mongoose = require("mongoose")

const CONNECTION_URL = "mongodb+srv://danielcr100:5HchAlYBeEW2tCze@clustervinis-6pbxe.gcp.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true }, err => {
    if (!err) console.log('Conexion exitosa')
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
        guardar_info: {
            type: String,
            required: true
        },
        termino_condiciones: true,
        info_ref: {
            type: String,
            enum: ['Socio de negocio', 'Proveedor', 'Carreras en la empresa'],
            required: true
        },
        registrarse: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
)
//Modelo de la base de datos
const socio = mongoose.model('socio', socioSchema)

module.exports = { socio }
