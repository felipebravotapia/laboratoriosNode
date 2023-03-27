const express = require("express");
const router = express.Router();

const DataController = require("../controller/dataController");

router.get("/", async (req, res, next) => {
  try {
    const personas = await DataController.getPerson();
    res.render("listar-persona", { title: "Listar Personas", personas });
  } catch (err) {
    console.error("Error al obtener los datos:", err);
    res.status(500).send("Error al obtener datos");
  }
});

module.exports = router;
