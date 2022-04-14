require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const pokemon = require("./models/pokemon.js")
const morgan = require('morgan')
const methodOverride = require('method-override')
const req = require("express/lib/request")

app.use(express.urlencoded({ extended: false }))
app.use(morgan('tiny'))
app.use("/static", express.static("public"))
app.use(methodOverride("_method"))


app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.get("/pokemon/", (req, res) => {
    res.render("index.ejs", { allPokemon: pokemon })
})

app.get("/pokemon/new", (req, res) => {
    res.render("new.ejs")
})

app.get("/pokemon/:id", (req, res) => {
    res.render("show.ejs", { pokemon: pokemon[req.params.id] })
})

app.post("/pokemon", (req, res) => {
    pokemon.push(req.body)

    res.redirect("/pokemon")
})

app.delete("/pokemon/:id", (req, res) => {
    const index = req.params.id

    pokemon.splice(index, 1)
    res.redirect('/pokemon')
})

app.get("/pokemon/:id/edit",(req,res)=>{
    res.render("edit.ejs",{
        pokemon: pokemon[req.params.id],
        index: req.params.id
    })
})

app.put("pokemon/:id", (req,res)=>{
    
})






app.listen(PORT, () => {
    console.log(`We are listening on port ${PORT}`)
})


