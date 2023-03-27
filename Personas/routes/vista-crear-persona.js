const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("vista-crear-persona", { title: "Crear Persona" });
});

module.exports = router;
