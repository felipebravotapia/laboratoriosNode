const express = require("express");
const app = express();

async function main() {
  try {
    const PORT = 3000;

    app.get("/", function (req, res) {
      res.send("Hola Mundo");
    });

    app.listen(PORT, ()=>{
      console.log(`Aplicación escuchando en el puerto: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();