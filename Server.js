const express = require("express")
const bodyParser = require("body-parser")

const PORT = 3000
const apiSocio = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

apiSocio.post("/socio", (req, res) => {
    console.log(req.body);

})








apiSocio.listen(PORT, () => {
    console.log("se escucha en el puerto 3000");
})
