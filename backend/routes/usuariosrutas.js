
const express = require("express");
const router = express.Router();
const usuariosmodel = require("../../backend/modelo/usuariosmodelo.js");

router.get("/",usuariosmodel.consultarDetalle);
router.post("/",usuariosmodel.ingresar);

/* Ejemplo con parámetros */

router.route("/:iden")
.get(usuariosmodel.consultarDetalle);
/*
.put(usuarioscontroller.actualizar)
.delete(usuarioscontroller.borrar);
*/

module.exports = router;


/*
const express = require("express");
const router = express.Router();
const usuariosmodel = require("../modelo/usuariosmodelo.js");
 
router.get("/",usuariosmodel.consultarDetalle);
router.post("/",usuariosmodel.ingresar);
 
/* Ejemplo con parámetros */

/*
router.route("/:iden")
.get(usuariosmodel.consultarDetalle)
//.post(usuariosmodel.ingresar);
/*
.put(usuarioscontroller.actualizar)
.delete(usuarioscontroller.borrar);
*/
/* 
module.exports = router;
*/
