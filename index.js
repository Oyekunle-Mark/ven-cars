/* eslint-disable no-console */
require('dotenv').config();
const { server } = require('./api/server');
const { addFiltersAndFilteredCarsToCache } = require('./utils/buildCache');

const PORT = process.env.PORT || 5000;

Promise.resolve(addFiltersAndFilteredCarsToCache(global.cache))
  .then(() => {
    server.listen(PORT, () => console.log(`Server started at port ${PORT}`));
  })
  .catch(err => console.error(`Error starting the server: ${err.toString()}`));
