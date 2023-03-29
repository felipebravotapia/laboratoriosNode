const express = require("express");
const router = express.Router();

const DataController = require("../controller/dataController");
const { cifrador, comprarCadena } = require("../utils/encrypt");

const jwt = require("jsonwebtoken");
const session = require('express-session')

router.post("/", async (req, res, next) => {
  try {
    let encriptado = await cifrador(req.body.clave);
    await DataController.insertData(req.body.username, encriptado);
    res.json("ok");
  } catch (err) {
    console.error("Error al Insertar:", err);
    res.status(500).send("Error al obtener datos");
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const username = req.body.username;
    const getDataUserName = await DataController.getDataLogin(username);
    const resCompare = await comprarCadena(
      req.body.clave,
      getDataUserName[0].clave
    );

    if (resCompare) {
      const token = jwt.sign({ name: username }, "SECRETOOO");
      console.log(token);
      req.session.token = token;
      res.render('menu')
    }


  } catch (err) {
    console.error("Error al Obtener:", err);
    res.status(500).send("Error al obtener datos");
  }
});

module.exports = router;
