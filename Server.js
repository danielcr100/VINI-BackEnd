//** Imports libraries */
const express = require("express")
const bodyParser = require("body-parser")

const { Servicio } = require("./models/agendar")
const { socio } = require("./models/Socio")

//** PORT */
const PORT = 3001
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
      ? res.status(201).send(socio)
      : res.status(400).send(socio)
  })
})

//** API POST SERVICIO*/
app.post("/post/servicio", (req, res) => {
  console.log(req.body);
  const { name, apellido, telefono, email, direccion, direccion2, pais, provincia, codigo_postal, guardar_info, tipo_pago, nombre_tarjeta, numero_tarjeta, fecha_exp, cvv } = req.body
  const newService = Servicio({
    name,
    apellido,
    telefono,
    email,
    direccion,
    direccion2,
    pais,
    provincia,
    codigo_postal,
    guardar_info,
    tipo_pago,
    nombre_tarjeta,
    numero_tarjeta,
    fecha_exp,
    cvv

  })
  newService.save((err, servicio) => {
    !err
      ? res.status(201).send(servicio)
      : res.status(400).send(servicio)
  })
})


//** API GET SERVICIO */

app.get('/get/servicios', (req, res) => {
  console.log('Estas aqui puto');
  
  Servicio.find()
    .exec()
    .then(servicios => res.status(200).send(servicios))
    .catch(err => res.status(404).send(err))

    console.log('Ahora aqui puto');
    
})

app.get('/get/socio', (req, res) => {
  socio.find()
    .exec()
    .then(socio => { response.status(200).send(socio) })
    .catch(err => response.status(404).send(err))
})












app.listen(PORT, () => {
  console.log("se escucha en el puerto 3000");
})
