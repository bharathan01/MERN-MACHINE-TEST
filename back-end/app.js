const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/auth.route.js");
const employeeRouter = require('./routes/userAction.route.js')
const errorHandler = require("./middleware/errorHandler.middlewere.js");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/api/auth", authRouter);
app.use("/api/employee", employeeRouter);

app.use("**", (req, res) => {
  res.status(404).json({
    message: "page not found",
  });
});

app.use(errorHandler);

module.exports = app;
