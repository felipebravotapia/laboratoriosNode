const fs = require("fs");
const util = require("util");
const _ = require("lodash");

async function trasnformFile(inFile, outFile) {
  const readFile = util.promisify(fs.readFile);
  const writeFile = util.promisify(fs.writeFile);

  console.log(`Leyendo Archivo: ${inFile}`);
  const data = await readFile(`${__dirname}/${inFile}`, `utf8`);
  let names = data.split("\n");

  names = names.map(_.startCase).sort();
  console.log(`Escribiendo archivo: ${outFile}`);

  await writeFile(`${__dirname}/${outFile}`, names.join("\n"));
  console.log(`Programa Terminado`);
}

trasnformFile(`entrada.txt`, `salida.txt`);
