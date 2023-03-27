const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const vistaCrearPersonasRouter = require("./routes/vista-crear-persona");
const crearPersonasRouter = require("./routes/crear-persona");
const listarPersonasRouter = require("./routes/listar-persona");

const vistaCrearDireccionRouter = require("./routes/vista-crear-direccion");
const crearDireccionRouter = require("./routes/crear-direccion");
const listarDireccionRouter = require("./routes/listar-direccion");



const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", vistaCrearPersonasRouter);
app.use("/crear-persona", crearPersonasRouter);
app.use("/listar-persona", listarPersonasRouter);

app.use("/crear-direccion", crearDireccionRouter);
app.use("/vista-crear-direccion", vistaCrearDireccionRouter);
app.use("/listar-direccion", listarDireccionRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
