/* eslint-disable camelcase */
const db = require('../database/dbConfig');

const getCarOwnersRecord = async () => {
  const records = await db('car_owners');
  return records;
};

const getFilters = async () => {
  const filters = await db('car_filters');
  return filters;
};

const filterRecord = (filter, record) => {
  const { start_year, end_year, gender, countries, colors } = filter;
  const result = [];

  for (let i = 0; i < record.length; i++) {
    const { country, car_model_year, car_color, gender: ownerGender } = record[
      i
    ];

    if (
      !(
        start_year >= Number(car_model_year) &&
        end_year <= Number(car_model_year)
      )
    ) {
      continue;
    }

    if (gender) {
      if (gender.toLowerCase() !== ownerGender.toLowerCase()) {
        continue;
      }
    }

    if (countries) {
      const lowerCaseCountries = countries
        .split(',')
        .map(ctr => ctr.toLowerCase());
      const countrySet = new Set(lowerCaseCountries);

      if (!countrySet.has(country.toLowerCase())) {
        continue;
      }
    }

    if (colors) {
      const lowerCaseColors = colors
        .split(',')
        .map(color => color.toLowerCase());
      const colorSet = new Set(lowerCaseColors);

      if (!colorSet.has(car_color.toLowerCase())) {
        continue;
      }
    }

    result.push(record[i]);
  }

  return result;
};
