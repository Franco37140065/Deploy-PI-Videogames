const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require('dotenv').config();
const { PORT } = process.env;
const cors = require('cors')

// Syncing all the models at once.
const whiteList = ['https://deploy-pi-videogames-git-main-franco37140065.vercel.app','https://deploy-pi-videogames-production-4c06.up.railway.app/']
server.use (cors({
  origin:whiteList
}))
conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log('%s listening at ',process.env.PORT ); // eslint-disable-line no-console
  });
});
