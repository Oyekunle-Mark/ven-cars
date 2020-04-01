const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const logger = require('morgan');
const NodeCache = require('node-cache');

const carRouter = require('../cars');

const server = express();
const cache = new NodeCache();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(compression());
server.use(logger('dev'));

server.get('/', (req, res) =>
  res.status(200).json({
    status: 200,
    message: 'The Car Owner API is alive and kicking!',
  }),
);

server.use('/api/v1', carRouter);

server.use('*', (_, res) =>
  res.status(404).json({
    status: 404,
    message: 'No endpoint matches that URL.',
  }),
);

module.exports = {
  server,
  cache,
};
