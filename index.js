require('dotenv').config();
const { server, cache } = require('./api/server');
const { applyFilters } = require('./utils/applyFilters');

const PORT = process.env.PORT || 5000;

Promise.resolve(applyFilters(cache)).then(() => {
  // eslint-disable-next-line no-console
  server.listen(PORT, () => console.log(`Server started at port ${PORT}`));
});
