//** Imports libraries */
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const { Servicio } = require('./models/agendar')
//** Connection Mongoose */
const CONNECTION_URL =
  '  '  //**      <------------------------ la url */
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true }, err => {
    if (!err) console.log('Te has conectado a la matrix')
  })
//** PORT */
const PORT = 3000
//** Init express */
const apiSocio = express()
//** SetUp BodyParser */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



//** API POST SERVICIO*/
apiSocio.post("/post/servicio", (req, res) => {
    console.log(req.body);
  const { nombre, apellido, telefono, email, direccion, direccion2, pais, provincia, codigo_postal, guardar_info, Tipo_Pago, Nombre_Tarjeta, Numero_Tarjeta, Fecha_Exp, CVV } = require.body
  const newService = Servicio({
    nombre,
    apellido,
    telefono,
    email,
    direccion,
    direccion2,
    pais,
    provincia,
    codigo_postal,
    guardar_info,
    Tipo_Pago,
    Nombre_Tarjeta,
    Numero_Tarjeta,
    Fecha_Exp,
    CVV

  })
  newService.save((err, servicio) => {
    !err
      ? response.status(201).send(servicio)
      : response.status(400).send(servicio)
  })
})


//** API GET SERVICIO */

app.get('/get/servicios', (req, res) => {
  Servicio.find()
    .exec()
    .then(servicios => {response.status(200).send(servicios)})
    .catch(err => response.status(404).send(err))
})











apiSocio.listen(PORT, () => {
    console.log("se escucha en el puerto 3000");
})
