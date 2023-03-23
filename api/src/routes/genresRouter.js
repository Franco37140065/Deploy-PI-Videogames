require('dotenv').config();
const { Router } = require('express');
const { Genres } = require('../db')
const axios = require("axios")
const { API_KEY } = process.env;

const genresRouter = Router();//esta ruta es para traer los generos de la api a mi base de datos

genresRouter.get("/",async (req, res)=>{
    try {
       
        const genresDb = await Genres.findAll();
        if (genresDb.length) return res.status(200).json(genresDb)
        
        
        const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        const genres = response.data.results;
        genres.forEach(async g => {
            await Genres.findOrCreate({
                where: {
                    name: g.name
                }
            })
        })
        const genresReady = genres.map(game => {
            return{
                id: game.id,
                name: game.name
            }
        });
        res.status(200).json(genresReady)
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
})

module.exports = genresRouter;
