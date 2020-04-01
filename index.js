require('dotenv').config();
const server = require('./api/server');

const PORT = process.env.PORT || 5000;

// eslint-disable-next-line no-console
server.listen(PORT, () => console.log(`Server started at port ${PORT}`));
