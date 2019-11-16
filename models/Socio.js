const mongoose = require("mongoose")
const CONNECTION_URL = "mongodb+srv://danielcr100:Cuowmr2c2GNGh5T1@clustervinis-6pbxe.gcp.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true }, err => {
    if (!err) console.log('Conexion exitosa')
})