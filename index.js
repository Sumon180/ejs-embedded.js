const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

let pLangueges = [];

app.get("/", (req, res) => {
  res.render("index", { pLNames: pLangueges });
});

app.get("/contact", (req, res) => {
  res.render("contact", {});
});

app.post("/", (req, res) => {
  const pLanguege = req.body.pLanguege;
  pLangueges.push(pLanguege);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
