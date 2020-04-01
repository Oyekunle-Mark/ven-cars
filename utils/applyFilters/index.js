const {
  getCarOwnersRecord,
  getFilters,
} = require('../../database/service/getOwnersAndFilters');
const filterRecord = require('./filterRecord');

exports.applyFilters = async cache => {
  const filters = await getFilters();
  const record = await getCarOwnersRecord();

  // eslint-disable-next-line no-restricted-syntax
  for (const filter of filters) {
    const result = filterRecord(filter, record);

    cache.set(filter.id, result);
  }
};
