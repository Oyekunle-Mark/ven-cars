/* eslint-disable no-console */
require('dotenv').config();
const { server, cache } = require('./api/server');
const { applyFilters } = require('./utils/applyFilters');

const PORT = process.env.PORT || 5000;

Promise.resolve(applyFilters(cache))
  .then(() => {
    server.listen(PORT, () => console.log(`Server started at port ${PORT}`));
  })
  .catch(err => console.error(`Error starting the server: ${err.toString()}`));
