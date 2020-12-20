const express = require("express");
const bodyParser = require("body-parser");
const exphs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

//view engine
app.engine("handlebars", exphs());
app.set("view engine", "handlebars");

//folder
app.use("/public", express.static(path.join(__dirname, "public")));

//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("form", { layout: false });
});

app.post("/submit", (res, req) => {
  res.render(req.body);
});

app.listen(3000, () => console.log("Server started"));
