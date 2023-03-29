const express = require("express");
const router = express.Router();

const DataController = require("../controller/dataController");
const session = require("express-session");

router.get("/", async (req, res, next) => {
  try {

    // if(typeof req.session.token === 'undefined' ) res.send('debe iniciar session')
    const usuarios = await DataController.getData();
    res.render("listarUsuarios", { title: "Listar", usuarios });
  } catch (err) {
    console.error("Error al obtener los datos:", err);
    res.status(500).send("Error al obtener datos");
  }
});

module.exports = router;
