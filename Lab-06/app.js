const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const personsRouter = require("./routes/persons");
const usuarioRouter = require("./routes/usuario");
const listarUsuarioRouter = require("./routes/listarUsuarios");
const uploadsRouter = require("./routes/upload");
const RegistrarUsuarioRouter = require("./routes/registar-usuario");

const app = express();
const session = require("express-session");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/person", personsRouter);
app.use("/usuario", usuarioRouter);
app.use("/listar-usuarios", listarUsuarioRouter);
app.use("/upload", uploadsRouter);
app.use("/registrar-usuario", RegistrarUsuarioRouter);

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
