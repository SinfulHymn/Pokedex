require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const Pokemon = require("./models/pokemon.js")
const morgan = require('morgan')
const methodOverride = require('method-override')

app.use(express.urlencoded({extended: false}))
app.use(morgan('tiny'))
app.use("static/", express.static("public"))
app.use(methodOverride("_method"))


app.get("/", (req,res)=>{
    res.render("home.ejs")
})

app.get("/pokemon/", (req,res)=>{
    res.render("index.ejs", { data: Pokemon})
})

app.get("/pokemon/:id",(req,res)=>{
    res.render("show.ejs", {data: Pokemon[req.params.id]})
})








app.listen(PORT, ()=>{
    console.log(`We are listening on port ${PORT}`)
})


