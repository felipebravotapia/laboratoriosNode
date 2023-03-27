const express = require("express");
const router = express.Router();

const DataController = require("../controller/dataController");

router.get("/", async (req, res, next) => {
  try {
    const direcciones = await DataController.getAddress();
    res.render("listar-direccion", { title: "Listar Direcciones", direcciones });
  } catch (err) {
    console.error("Error al obtener los datos:", err);
    res.status(500).send("Error al obtener datos");
  }
});

module.exports = router;
