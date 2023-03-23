const { Router } = require('express');
const genresRouter = require('./genresRouter');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const videogame = require('./videogame');



const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/genresRouter', genresRouter);
router.use('/videogames', videogame);

module.exports = router;
