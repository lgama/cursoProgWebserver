/** **************************************************************************
 *   PROYECTO    : CursoProgWebServer
 *   PROGRAMA    : routes.js
 *   AUTOR       : LUIS ANTONIO GAMA MORENO
 *   FECHA       : 2023-01-23
 *   DESCRIPCION : Este prog. indica que es lo que va a responder para cada
 *                 peticion recibida por el server
 **************************************************************************** */

// librerias a usar
const express = require('express')

function escucha(app) {
    // router va a atender a las peticiones que lleguen a partir de /api
    const router = express.Router()
    app.use('/api', router)

    // implementar lo que hace el servicio
    // req : la peticion
    // res : la respuesta
    // next : accion a realizar en caso de algun error
    router.get('/datos', async function(req, res, next) {
        try {
            console.log('recibiendo' + JSON.stringify(req))
            res.status(200).json({
                'nombre':'LUIS A. GAMA MORENO',
                'telefono': '1234567890',
                'email': 'lgama@correo.com'
            })
        } catch (error) {
            console.log(error)
        }
    })
}

// para hacer public el metodo como un servicio
module.exports = escucha