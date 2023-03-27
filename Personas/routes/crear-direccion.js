const express = require("express");
const router = express.Router();

const DataController = require("../controller/dataController");

router.post("/", async (req, res, next) => {
  try {
    const data = await DataController.insertAddress(
      req.body.addressline1,
      req.body.addressline2,
      req.body.city,
      req.body.stateprovinceid,
      req.body.postalcode
    );
    res.send("Dirección Creada con Éxito");
  } catch (err) {
    console.error("Error al Insertar:", err);
    res.status(500).send("Error al obtener datos");
  }
});

module.exports = router;
