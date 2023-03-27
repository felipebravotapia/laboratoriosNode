const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const DataController = require("../controller/dataController");

router.post("/", async (req, res, next) => {
  try {

    
    let encriptado = await bcrypt
      .genSalt(10)
      .then((salt) => {
        console.log("Salt:", 10);
        return bcrypt.hash(req.body.clave, 10);
      })
      .then((hash) => {
        return hash;
      })
      .catch((err) => console.error(err.message));

    const data = await DataController.insertData(req.body.username, encriptado);
    // res.json(data);
    res.json("ok");
  } catch (err) {
    console.error("Error al Insertar:", err);
    res.status(500).send("Error al obtener datos");
  }
});

module.exports = router;
