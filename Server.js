//** Imports libraries */
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
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

apiSocio.post("/socio", (req, res) => {
    console.log(req.body);

})








apiSocio.listen(PORT, () => {
    console.log("se escucha en el puerto 3000");
})
