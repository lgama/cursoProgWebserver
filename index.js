/** **************************************************************************
 *   PROYECTO    : CursoProgWebServer
 *   PROGRAMA    : index.js
 *   AUTOR       : LUIS ANTONIO GAMA MORENO
 *   FECHA       : 2023-01-23
 *   DESCRIPCION : Este proyecto es el server Rest
 **************************************************************************** */

// librerias a usar
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const { Router } = require('express')

const app = express()
app.use(bodyparser.json())
app.use(cors())

const escuchar = require('./routes.js')
escuchar(app)

// indicar el puerto por donde el server va a recibir (escuchar) peticiones
app.listen('9090', function() {
    console.log('Server escuchando en el puerto 9090.')
})