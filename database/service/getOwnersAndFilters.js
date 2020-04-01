const db = require('../dbConfig');

const getCarOwnersRecord = async () => {
  const records = await db('car_owners');
  return records;
};

const getFilters = async () => {
  const filters = await db('car_filters');
  return filters;
};

module.exports = {
  getCarOwnersRecord,
  getFilters,
};
