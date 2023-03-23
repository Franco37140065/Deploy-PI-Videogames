const { Videogame,Genres } = require("../db");
const { getAllvideogames, getDBVideoGamebyID } = require("../utils/index")
const { API_KEY } = process.env;
require('dotenv').config();
const axios = require('axios')

const getVideogame = async (req,res) => {

    const name = req.query.name
    let gamesTotal = await getAllvideogames();
    if(name){
      let gameName = await gamesTotal.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
      gameName.length ?
      res.status(200).json(gameName) :
      res.status(400).send("Missing game")
    }else{
      res.status(200).json(gamesTotal)
    }
}



const getVideogamesId= async( req,res) => {
  const  { id } = req.params;
  const regex = /([a-zA-Z]+([0-9]+[a-zA-Z]+)+)/
  let newObject = {}
    if (regex.test(id)){
      let fromDB = await getDBVideoGamebyID(id)
      newObject = {
            name: fromDB.name,
            description_raw: fromDB.description,
            released: fromDB.released,
            rating: fromDB.rating,
            createInDb: fromDB.createInDb,
            genres: fromDB.Genres,
            platforms: fromDB.platforms
        }
    } else{ 
      try {
          const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
        let { name, background_image, genres, description_raw, released, rating, platforms } = response.data;
        genres = genres.map(g => g.name); // de la API me trae un array de objetos, mapeo solo el nombre del genero
        platforms = platforms.map(p => p.platform.name); // de la API me trae un array de objetos, mapeo solo el nombre de la plataforma
        newObject = {
          name,
          background_image,
          genres,
          description_raw,
          released,
          rating,
          platforms
      }
    } catch (err) {
        res.status(500).json("Error en la peticion")
      }
  }

  res.json(newObject)
  
}

const createVideogame = async (req,res) => {
  let { name, description, released, rating, genres, platforms, createInDb} = req.body;

  try {
      const newGame = await Videogame.create({ 
        
              createInDb, 
              name,
              description,
              released,
              rating,
              platforms,
              
              
          
      })

      const genresDb = await Genres.findAll({
          where:{name:genres}
      
        })   
          newGame.addGenres(genresDb)
  } catch (err) {
      console.log(err);
  }
  res.send('Created succesfully!!')

}
  
module.exports = {getVideogame, getVideogamesId, createVideogame}