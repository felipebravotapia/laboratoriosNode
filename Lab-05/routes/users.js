var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  const usuarios = [
    { Username: "cronaldo", Nombre: "Cristiano Ronaldo" },
    { Username: "lmessi", Nombre: "Leo Messi" },
    { Username: "njunior", Nombre: "Neymar Junior" },
  ];

  res.render("usuarios", { title: "Usuarios del Sistema", usuarios: usuarios });
});

module.exports = router;
