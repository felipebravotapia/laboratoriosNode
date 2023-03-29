const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "upload/" });
const fs = require("fs");

router.post("/", upload.single("file"), async (req, res) => {
  fs.renameSync(req.file.path, req.file.destination + req.file.originalname);
  res.render('menu');
});

router.get("/", async (req, res, next) => {
  try {
    res.render("upload-file", { title: "Express" });
  } catch (error) {
    res.status(500).send("Error al obtener datos");
  }
});

module.exports = router;
