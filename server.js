require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const pokemon = require("./models/pokemon.js");
const morgan = require("morgan");
const methodOverride = require("method-override");
const req = require("express/lib/request");

app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use("/static", express.static("public"));
app.use(methodOverride("_method"));

//home
app.get("/", (req, res) => {
  res.render("home.ejs");
});
//index
app.get("/pokemon/", (req, res) => {
  res.render("index.ejs", { allPokemon: pokemon });
});

//new
app.get("/pokemon/new", (req, res) => {
  res.render("new.ejs", {
    pokemon: pokemon[1],
    index: 1,
  });
});

//show
app.get("/pokemon/:id", (req, res) => {
  res.render("show.ejs", {
    pokemon: pokemon[req.params.id],
    index: req.params.id,
  });
});
//edit
app.get("/pokemon/:id/edit", (req, res) => {
  res.render("edit.ejs", {
    pokemon: pokemon[req.params.id],
    index: req.params.id,
  });
});

//create
app.post("/pokemon", (req, res) => {
    console.log(req.body)
  pokemon.push(req.body);

  res.redirect("/pokemon");
});

//delete
app.delete("/pokemon/:id", (req, res) => {
  const index = req.params.id;

  pokemon.splice(index, 1);
  res.redirect("/pokemon");
});

app.put("pokemon/:id", (req, res) => {
  console.log(req.body);
}); 

app.listen(PORT, () => {
  console.log(`We are listening on port ${PORT}`);
});
 