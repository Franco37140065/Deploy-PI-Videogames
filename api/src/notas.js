let createVideogames = async (req,res) => {
    let { name, description, released, rating, genres, platforms, createInDb} = req.body;
  
    try {
        const gameCreated = await Videogame.findOrCreate({ createInDb, //devuelvo un array (OJOOO!!!!)
            where: {
                name,
                description,
                released,
                rating,
                platforms,
                
                
            }
        })
        const genresDb = await Genres.findAll({
            where:{name:genres}
        
          }) // relaciono ID genres al juego creado
    } catch (err) {
        console.log(err);
    }
    res.send('Created succesfully, saludos desde el BACK!!')
  }
    


  const createVideogame = async (req,res) => {
    try {
       const { name, description, released, rating, platforms,createdInDb,genres} = req.body;
     
       const newGame = await Videogame.create ({
       name, description, released, rating, platforms,createdInDb});
       //console.log(newGame)
       const genresDb = await Genres.findAll({
         where:{name:genres}
 
       })
       
       newGame.addGenres(genresDb)
       
      // res.status(200).json(newGame);
       res.send("Juego creado con exito")
       //console.log(newGame)
     
    } catch (error) {
     console.log(error)
    }
   
 
        
 };


 
const getVideogamesId= async( req,res) => {
  const  { id} = req.params;
  const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
  
    if(id ){
      try {
      let { id, name, background_image, genres, description, released, rating, platforms } = response.data;
      genres = genres.map(g => g.name); // de la API me trae un array de objetos, mapeo solo el nombre del genero
      platforms = platforms.map(p => p.platform.name); // de la API me trae un array de objetos, mapeo solo el nombre de la plataforma
      return res.json({
          id,
          name,
          background_image,
          genres,
          description,
          released,
          rating,
          platforms
      })
  } catch (err) {
      return console.log(err)
  
    }
  }
  }