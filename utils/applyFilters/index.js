const db = require('../../database/dbConfig');

const getCarOwnersRecord = async () => {
  const records = await db('car_owners');
  return records;
};

const getFilters = async () => {
  const filters = await db('car_filters');
  return filters;
};

const applyFilters = async cache => {
  const filters = await getFilters();
  const record = await getCarOwnersRecord();

  // eslint-disable-next-line no-restricted-syntax
  for (const filter of filters) {
    const result = filterRecord(filter, record);

    cache[filter.id] = result;
  }
};
