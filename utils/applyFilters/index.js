const db = require('../../database/dbConfig');
const filterRecord = require('./filterRecord');

const getCarOwnersRecord = async () => {
  const records = await db('car_owners');
  return records;
};

const getFilters = async () => {
  const filters = await db('car_filters');
  return filters;
};

exports.applyFilters = async cache => {
  const filters = await getFilters();
  const record = await getCarOwnersRecord();

  // eslint-disable-next-line no-restricted-syntax
  for (const filter of filters) {
    const result = filterRecord(filter, record);

    cache.set(filter.id, result);
  }
};
