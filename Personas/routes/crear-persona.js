const express = require("express");
const router = express.Router();

const DataController = require("../controller/dataController");

router.post("/", async (req, res, next) => {
  try {
    const data = await DataController.insertPerson(
      req.body.persontype,
      req.body.namestyle,
      req.body.title,
      req.body.firstname,
      req.body.middelname,
      req.body.lastname,
      req.body.emailpromotion,
    );
    res.send('Persona Creada con Éxito');
  } catch (err) {
    console.error("Error al Insertar:", err);
    res.status(500).send("Error al obtener datos");
  }
});

module.exports = router;
