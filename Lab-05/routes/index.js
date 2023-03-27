const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const futbolistas = ["Cristiano Ronaldo", "Leo Messi", "Neimar Junior"];

  res.render("index", { title: "futoblistas", datos: futbolistas });
});

module.exports = router;
