const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getVideogame, getVideogamesId, createVideogame}= require ("../Controllers/VideogameControllers");
const {validate} = require ("../middlewares.js")
const videogame = Router();



videogame.get("/", getVideogame);

videogame.get("/:id",getVideogamesId)

videogame.post("/", validate,createVideogame);

module.exports = videogame;