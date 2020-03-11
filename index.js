const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");

function configure() {
  Promise.resolve().then(() => {
    // Body Parser
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // Handlebars
    app.engine(
      "handlebars",
      handlebars({
        defaultLayout: "main"
      })
    );
    app.set("view engine", "handlebars");

    // Routes
    app.get("/", (req, res) => {
      res.render("home");
    });

    app.post("/resultPage", (req, res) => {
      let baseText = req.body.baseText;
      let fileType = req.body.fileType;
      let numberFiles = req.body.qtdResults;

      console.log(
        `baseText: ${baseText}, fileType: ${fileType}, numberFiles: ${numberFiles}`
      );
      res.render("resultPage", {
        // baseText: baseText
      });
    });
  });
}

function start() {
  const content = {};

  Promise.resolve(content)
    .then(configure)
    .then(() => {
      app.listen(8081);
    });
}
configure();
start();
