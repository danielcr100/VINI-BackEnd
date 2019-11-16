//** Imports libraries */
const express = require("express")
const bodyParser = require("body-parser")

const { Servicio } = require("./models/agendar")
const { socio } = require("./models/Socio")

//** PORT */
const PORT = 3000
//** Init express */
const app = express()
//** SetUp BodyParser */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.post("/post/socio", (req, res) => {
  console.log(req.body);
  const { nombre, apellido, telefono, email, direccion, informacion_adicional, pais, provincia, codigo_postal, termino_condiciones, info_ref, registrarse } = require.body
  const newService = socio({
    nombre,
    apellido,
    telefono,
    email,
    direccion,
    informacion_adicional,
    pais,
    provincia,
    codigo_postal,
    termino_condiciones,
    info_ref,
    registrarse,

  })
  newService.save((err, socio) => {
    !err
      ? response.status(201).send(socio)
      : response.status(400).send(socio)
  })
})

//** API POST SERVICIO*/
app.post("/post/servicio", (req, res) => {
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
    tipo_Pago,
    nombre_tarjeta,
    numero_tarjeta,
    fecha_exp,
    cvv

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
    .then(servicios => { response.status(200).send(servicios) })
    .catch(err => response.status(404).send(err))
})











app.listen(PORT, () => {
  console.log("se escucha en el puerto 3000");
})
