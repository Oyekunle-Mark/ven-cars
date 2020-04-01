const carOwners = require('../seedStore/carOwners');

exports.seed = knex =>
  knex.schema
    .raw('TRUNCATE TABLE car_owners')
    .then(() => knex.batchInsert('car_owners', carOwners));
